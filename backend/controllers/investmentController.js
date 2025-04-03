const Investment = require('../models/investmentModel');
const Budget = require('../models/budgetModel');
const mongoose = require('mongoose');

// Get all of the investments
const getInvestments = async (req, res) => {
  const user_id = req.user._id;

  const investments = await Investment.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(investments);
};

// Get a single investment
const getInvestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such investment' });
  }

  const investment = await Investment.findById(id);

  if (!investment) {
    return res.status(404).json({ error: 'No such investment' });
  }

  res.status(200).json(investment);
};

// Create a new investment
const createInvestment = async (req, res) => {
  const {
    title,
    amount,
    investmentType,
    investmentDescription,
    isRecurring,
    recurrenceFrequency,
    startDate,
  } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push('title');
  if (amount === undefined || amount === null || amount === '') emptyFields.push('amount');
  if (!investmentType) emptyFields.push('investmentType');
  if (!investmentDescription) emptyFields.push('investmentDescription');

  const numericAmount = Number(amount);

  if (isNaN(numericAmount) || numericAmount < 0) {
    return res.status(400).json({ error: 'Investment amount must be a positive number.' });
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill in all the fields', emptyFields });
  }

  try {
    const user_id = req.user._id;

    console.log("📥 Incoming investment request from user:", user_id);

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // ✅ Get all investments for the current month
    const monthlyInvestments = await Investment.find({
      user_id,
      createdAt: { $gte: startOfMonth, $lte: endOfMonth },
    });

    const totalInvested = monthlyInvestments.reduce((sum, inv) => {
      const val = Number(inv.amount);
      return isNaN(val) ? sum : sum + val;
    }, 0);

    // ✅ Get all budgets for the current month
    const monthlyBudgets = await Budget.find({
      user_id,
      createdAt: { $gte: startOfMonth, $lte: endOfMonth },
    });

    if (!monthlyBudgets.length) {
      return res.status(400).json({ error: 'No budgets found for this month.' });
    }

    const totalBudgetAmount = monthlyBudgets.reduce((sum, b) => {
      const val = Number(b.amount);
      return isNaN(val) ? sum : sum + val;
    }, 0);

    const remainingBudget = totalBudgetAmount - totalInvested;

    console.log('🚨 Budget Check Log:', {
      totalInvested,
      totalBudgetAmount,
      investmentAttempt: numericAmount,
      remainingBudget,
      condition: numericAmount > remainingBudget
    });

    if (numericAmount > remainingBudget) {
      console.log("❌ BLOCKED: Over budget");
      return res.status(400).json({
        error: `You only have $${remainingBudget.toFixed(2)} remaining in your budget. This investment would exceed it.`,
      });
    }

    // ✅ Safe to create the investment
    const investment = await Investment.create({
      title,
      amount: numericAmount,
      investmentType,
      investmentDescription,
      isRecurring,
      recurrenceFrequency,
      startDate,
      user_id,
    });

    console.log("✅ CREATED:", investment.title, "$" + numericAmount);
    res.status(200).json(investment);
  } catch (error) {
    console.error("❌ ERROR creating investment:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get investments within a date range (placeholder function)
const getInvestmentsByDateRange = async (req, res) => {
  // Implement the logic to filter investments by date range
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Start date and end date are required' });
  }

  try {
    const user_id = req.user._id;
    const investments = await Investment.find({
      user_id,
      $or: [
        { isRecurring: false },
        {
          isRecurring: true,
          $and: [
            { startDate: { $lte: endDate } },
            {
              $or: [
                { recurrenceFrequency: 'weekly' /* additional conditions */ },
                { recurrenceFrequency: 'monthly' /* additional conditions */ },
                { recurrenceFrequency: 'yearly' /* additional conditions */ },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an investment
const deleteInvestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such investment' });
  }

  const investment = await Investment.findOneAndDelete({ _id: id });

  if (!investment) {
    return res.status(400).json({ error: 'No such investment' });
  }

  res.status(200).json(investment);
};

// Update an investment
const updateInvestment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such investment' });
  }

  const investment = await Investment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  ); // { new: true } returns the updated document

  if (!investment) {
    return res.status(400).json({ error: 'No such investment' });
  }

  res.status(200).json(investment);
};

module.exports = {
  getInvestments,
  getInvestment,
  createInvestment,
  deleteInvestment,
  updateInvestment,
  getInvestmentsByDateRange,
};
