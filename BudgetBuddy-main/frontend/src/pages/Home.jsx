import React, { useEffect, useState } from 'react';
import { useInvestmentsContext } from "../hooks/useInvestmentsContext";
import { useBudgetsContext } from "../hooks/useBudgetsContext";
import { useIncomesContext } from "../hooks/useIncomesContext";
import { useBanksContext } from "../hooks/useBanksContext";
import { useNotificationsContext } from '../hooks/useNotificationsContext';
import { useAuthContext } from "../hooks/useAuthContext";

// BudgetBuddy Components
import Sidebar from '../components/Sidebar';
import ToggleInvestmentForm from '../components/ToggleInvestmentForm';
import InvestmentDetails from '../components/InvestmentDetails';
import InvestmentForm from '../components/InvestmentForm';
import BudgetDetails from '../components/BudgetDetails';
import BudgetForm from '../components/BudgetForm';
import IncomeDetails from '../components/IncomeDetails';
import IncomeForm from '../components/IncomeForm';
import StatementDetails from '../components/StatementDetails';
import StatementUpload from '../components/StatementUpload';
import SpendingSummary from '../components/SpendingSummary';
import NotificationDetails from '../components/Notifications';
import InvestmentPieChart from '../components/InvestmentPieChart';
import BudgetDiffChart from '../components/BudgetDiffChart';
import IncomePieChart from '../components/IncomeChart';

const API_BASE = import.meta.env.VITE_API_URL;

const Home = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const monthOptions = months.map(month => (
    <option key={month} value={month}>{month}</option>
  ));

  const now = new Date();
  const monthName = months[now.getMonth()];

  const [activeView, setActiveView] = useState('investments');
  const [activeViewInvestment, setActiveViewInvestment] = useState('neither');
  const [selectedMonth, setSelectedMonth] = useState(monthName);
  const [selectedMonthStatements, setSelectedMonthStatements] = useState(monthName);
  const [totalInvestmentValue, setTotalInvestmentValue] = useState(0);
  const [totalStatementValue, setTotalStatementValue] = useState(0);
  const [totalIncomeValue, setTotalIncomeValue] = useState(0);
  const [totalBudgetValue, setTotalBudgetValue] = useState(0);
  const [filteredInvestments, setFilteredInvestments] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [filteredBudgets, setFilteredBudgets] = useState([]);
  const [filteredIncomes, setFilteredIncomes] = useState([]);

  const { investments, dispatch } = useInvestmentsContext();
  const { budgets, budgetDispatch } = useBudgetsContext();
  const { incomes, incomeDispatch } = useIncomesContext();
  const { files, fileDispatch } = useBanksContext();
  const { notifications, notificationDispatch } = useNotificationsContext();
  const { user } = useAuthContext();
  const hasSentNotification = localStorage.getItem('hasSentNotification') === 'true';

  const capitalizeFirstLetter = (string) => {
    return typeof string === 'string'
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : '';
  };

  const fetchData = async (endpoint, method = 'GET', body = null) => {
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method,
        headers: {
          'Authorization': `Bearer ${user?.token}`,
          'Content-Type': 'application/json',
        },
        ...(body ? { body: JSON.stringify(body) } : {})
      });
      return await res.json();
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
      return [];
    }
  };

  useEffect(() => {
    const loadData = async () => {
      if (!user) return;

      const [inv, bud, inc, bank, noti] = await Promise.all([
        fetchData('/api/investments'),
        fetchData('/api/budgets'),
        fetchData('/api/incomes'),
        fetchData('/api/banks'),
        fetchData('/api/notifications')
      ]);

      dispatch({ type: 'SET_INVESTMENTS', payload: inv });
      budgetDispatch({ type: 'SET_BUDGETS', payload: bud });
      incomeDispatch({ type: 'SET_INCOMES', payload: inc });
      fileDispatch({ type: 'SET_FILES', payload: bank });
      notificationDispatch({ type: 'SET_NOTIFICATIONS', payload: noti });
      localStorage.setItem('hasSentNotification', 'true');
    };

    loadData();
  }, [user]);

  useEffect(() => {
    if (investments) {
      const filtered = investments.filter(investment => {
        const month = new Date(investment.createdAt).toLocaleString('default', { month: 'long' });
        return capitalizeFirstLetter(month) === selectedMonth;
      });
      setFilteredInvestments(filtered);
      setTotalInvestmentValue(filtered.reduce((acc, inv) => acc + inv.amount, 0));
    }
  }, [investments, selectedMonth]);

  useEffect(() => {
    if (files) {
      const filtered = files.filter(file => {
        const month = new Date(file.date).toLocaleString('default', { month: 'long' });
        return capitalizeFirstLetter(month) === selectedMonthStatements;
      });
      setFilteredFiles(filtered);
      setTotalStatementValue(filtered.reduce((acc, file) => acc - file.amount, 0));
    }
  }, [files, selectedMonthStatements]);

  useEffect(() => {
    if (incomes) {
      const filtered = incomes.filter(income => {
        const month = new Date(income.createdAt).toLocaleString('default', { month: 'long' });
        return capitalizeFirstLetter(month) === selectedMonthStatements;
      });
      setFilteredIncomes(filtered);
      setTotalIncomeValue(filtered.reduce((acc, inc) => acc + inc.amount, 0));
    }
  }, [incomes, selectedMonthStatements]);

  useEffect(() => {
    if (budgets) {
      const filtered = budgets.filter(budget => {
        const month = new Date(budget.createdAt).toLocaleString('default', { month: 'long' });
        return capitalizeFirstLetter(month) === selectedMonth;
      });
      setFilteredBudgets(filtered);
      setTotalBudgetValue(filtered.reduce((acc, bud) => acc + bud.amount, 0));
    }
  }, [budgets, selectedMonth]);

  useEffect(() => {
    const checkNotification = async () => {
      if (totalBudgetValue === 0 || hasSentNotification || totalInvestmentValue / totalBudgetValue < 0.75) {
        localStorage.setItem('hasSentNotification', 'false');
        return;
      }

      const notification = {
        message: `Alert: Your investment of $${totalInvestmentValue.toFixed(2)} is 75% or more of your total budget of $${totalBudgetValue.toFixed(2)}.`,
        sent: true,
      };

      const newNotification = await fetchData('/api/notifications', 'POST', notification);
      notificationDispatch({ type: 'CREATE_NOTIFICATION', payload: newNotification });
      localStorage.setItem('hasSentNotification', 'true');
    };

    if (user) checkNotification();
  }, [totalInvestmentValue, totalBudgetValue, user, hasSentNotification]);

  // Your renderView and renderViewInvestment functions remain unchanged.

  return (
    <div>
      <Sidebar setActiveView={setActiveView} notifications={notifications} />
      <div style={{ flex: 1, padding: '15px' }}>
        <h1>Account Summary</h1>
        <p>Your income is currently ${totalIncomeValue} and you spent ${totalStatementValue.toFixed(2)} in {selectedMonthStatements}.</p>
        <p>You saved ${(totalIncomeValue - totalStatementValue).toFixed(2)} in {selectedMonthStatements}.</p>
        <p>Your budget is ${totalBudgetValue} and you plan to spend ${totalInvestmentValue} in {selectedMonth}.</p>
        <p>You plan to save ${totalBudgetValue - totalInvestmentValue} in {selectedMonth}.</p>
        {hasSentNotification && (totalInvestmentValue / totalBudgetValue * 100 > 75) && (
          <p style={{ marginTop: '20px', padding: '10px', color: 'red'}}>
            Your investments are currently {(totalInvestmentValue / totalBudgetValue * 100).toFixed(2)}% of your budget.
          </p>
        )}
      </div>
      {renderView()}
      {renderViewInvestment()}
    </div>
  );
};

export default Home;