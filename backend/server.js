const path = require('path');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const cors = require('cors');

const Investment = require('./models/investmentModel');

// Import routes
const investmentRoutes = require('./routes/investments');
const budgetRoutes = require('./routes/budgets');
const incomeRoutes = require('./routes/incomes');
const bankRoutes = require('./routes/banks');
const notificationRoutes = require('./routes/notifications');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://budget-buddy-dusky-sigma.vercel.app',
    ],
    credentials: true,
  })
);
app.use(express.json());

// Logger
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${req.method}] ${req.originalUrl} → ${res.statusCode} in ${duration}ms`);
  });

  next();
});


// Health check
app.get('/', (req, res) => {
  res.send('🚀 Budget Buddy API is running!');
});

// Routes
app.use('/api/investments', investmentRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/incomes', incomeRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/user', userRoutes);
app.use('/api/banks', bankRoutes);

// Export app for Vercel (vercel dev & prod)
module.exports = app;

// Only run server & DB when executed directly
if (require.main === module) {
  const PORT = process.env.PORT || 4000;

  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ MongoDB connected');

      app.listen(PORT, () => {
        console.log(`🌐 Server listening on port ${PORT}`);

        // Cron job for recurring investments
        cron.schedule('0 0 * * *', async () => {
          console.log('🔁 Running daily recurring investment cron job...');

          try {
            const recurringInvestments = await Investment.find({ isRecurring: true });

            for (const investment of recurringInvestments) {
              const now = new Date();
              const startDate = new Date(investment.startDate);

              let shouldCreateEntry = false;
              if (investment.recurrenceFrequency === 'weekly' && now > startDate) {
                shouldCreateEntry = now.getDay() === startDate.getDay();
              } else if (investment.recurrenceFrequency === 'monthly' && now > startDate) {
                shouldCreateEntry = now.getDate() === startDate.getDate();
              } else if (investment.recurrenceFrequency === 'yearly' && now > startDate) {
                shouldCreateEntry =
                  now.getMonth() === startDate.getMonth() &&
                  now.getDate() === startDate.getDate();
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
                console.log('📈 Recurring Investment Created:', newInvestment.title);
              }
            }
          } catch (err) {
            console.error('❌ Cron job error:', err.message);
          }
        });
      });
    })
    .catch((error) => {
      console.error('❌ MongoDB connection failed:', error.message);
    });
}
