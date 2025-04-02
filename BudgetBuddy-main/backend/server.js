const path = require('path');
require('dotenv').config();  // Always load env variables, Vercel will manage these in production

const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const Investment = require('./models/investmentModel');

// Import routes
const investmentRoutes = require('./routes/investments');
const budgetRoutes = require('./routes/budgets');
const incomeRoutes = require('./routes/incomes');
const bankRoutes = require('./routes/banks');
const notificationRoutes = require('./routes/notifications');
const userRoutes = require('./routes/user');

const app = express();

const cors = require('cors');

app.use(cors({
  origin: 'https://budget-buddy-dusky-sigma.vercel.app/login', // Replace with your Vercel URL
  credentials: true
}));

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// API routes
app.use('/api/investments', investmentRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/user', userRoutes);
app.use('/api/banks', bankRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to MongoDB and listening on Port', process.env.PORT);

      // Cron job for recurring investments
      cron.schedule('0 0 * * *', async () => {
        const recurringInvestments = await Investment.find({ isRecurring: true });

        recurringInvestments.forEach(async investment => {
          const now = new Date();
          const startDate = new Date(investment.startDate);

          let shouldCreateEntry = false;
          if (investment.recurrenceFrequency === 'weekly' && now > startDate) {
            shouldCreateEntry = now.getDay() === startDate.getDay();
          } else if (investment.recurrenceFrequency === 'monthly' && now > startDate) {
            shouldCreateEntry = now.getDate() === startDate.getDate();
          } else if (investment.recurrenceFrequency === 'yearly' && now > startDate) {
            shouldCreateEntry = now.getMonth() === startDate.getMonth() && now.getDate() === startDate.getDate();
          }

          if (shouldCreateEntry) {
            const newInvestment = await Investment.create({
              title: investment.title,
              amount: investment.amount,
              investmentType: investment.investmentType,
              investmentDescription: investment.investmentDescription,
              isRecurring: investment.isRecurring,
              recurrenceFrequency: investment.recurrenceFrequency,
              startDate: investment.startDate,
              user: investment.user,
            });
            console.log('Recurring Investment Created:', newInvestment);
          }
        });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });