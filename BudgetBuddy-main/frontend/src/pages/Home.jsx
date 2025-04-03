import React, { useEffect, useState, useMemo } from 'react';
import { useInvestmentsContext } from '../hooks/useInvestmentsContext';
import { useBudgetsContext } from '../hooks/useBudgetsContext';
import { useIncomesContext } from '../hooks/useIncomesContext';
import { useBanksContext } from '../hooks/useBanksContext';
import { useNotificationsContext } from '../hooks/useNotificationsContext';
import { useAuthContext } from '../hooks/useAuthContext';

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

const Home = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const now = new Date();
  const monthIndex = now.getMonth();
  const monthName = months[monthIndex];

  const [activeView, setActiveView] = useState('investments');
  const [activeViewInvestment, setActiveViewInvestment] = useState('investmentAnalysis');
  const [selectedMonth, setSelectedMonth] = useState(monthName);
  const [selectedMonthStatements, setSelectedMonthStatements] = useState(monthName);

  const { investments, dispatch } = useInvestmentsContext();
  const { budgets, budgetDispatch } = useBudgetsContext();
  const { incomes, incomeDispatch } = useIncomesContext();
  const { files, fileDispatch } = useBanksContext();
  const { notifications, notificationDispatch } = useNotificationsContext();
  const storedNotificationStatus = localStorage.getItem('hasSentNotification');
  const hasSentNotification = storedNotificationStatus === 'true';
  const { user } = useAuthContext();

  const capitalizeFirstLetter = (string) =>
    typeof string === 'string'
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : '';

  const filteredInvestments = useMemo(
    () =>
      investments?.filter(
        (i) =>
          capitalizeFirstLetter(
            new Date(i.createdAt).toLocaleString('default', { month: 'long' })
          ) === capitalizeFirstLetter(selectedMonth)
      ) || [],
    [investments, selectedMonth]
  );
  const totalInvestmentValue = useMemo(
    () => filteredInvestments.reduce((sum, i) => sum + i.amount, 0),
    [filteredInvestments]
  );

  const filteredBudgets = useMemo(
    () =>
      budgets?.filter(
        (b) =>
          capitalizeFirstLetter(
            new Date(b.createdAt).toLocaleString('default', { month: 'long' })
          ) === capitalizeFirstLetter(selectedMonth)
      ) || [],
    [budgets, selectedMonth]
  );
  const totalBudgetValue = useMemo(
    () => filteredBudgets.reduce((sum, b) => sum + b.amount, 0),
    [filteredBudgets]
  );

  const filteredFiles = useMemo(
    () =>
      files?.filter(
        (f) =>
          capitalizeFirstLetter(new Date(f.date).toLocaleString('default', { month: 'long' })) ===
          capitalizeFirstLetter(selectedMonthStatements)
      ) || [],
    [files, selectedMonthStatements]
  );
  const totalStatementValue = useMemo(
    () => filteredFiles.reduce((sum, f) => sum - f.amount, 0),
    [filteredFiles]
  );

  const filteredIncomes = useMemo(
    () =>
      incomes?.filter(
        (i) =>
          capitalizeFirstLetter(
            new Date(i.createdAt).toLocaleString('default', { month: 'long' })
          ) === capitalizeFirstLetter(selectedMonthStatements)
      ) || [],
    [incomes, selectedMonthStatements]
  );
  const totalIncomeValue = useMemo(
    () => filteredIncomes.reduce((sum, i) => sum + i.amount, 0),
    [filteredIncomes]
  );

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleMonthChangeStatements = (e) => setSelectedMonthStatements(e.target.value);
  const handleSetActiveView = (view) => {
    setActiveView(view);
    if (['budgets', 'incomes', 'statements', 'spendingSummary', 'notifications'].includes(view)) {
      setActiveViewInvestment('investmentAnalysis');
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'investments':
        return (
          <div className="home">
            <ToggleInvestmentForm
              activeViewInvestment={activeViewInvestment}
              setActiveViewInvestment={setActiveViewInvestment}
            />
          </div>
        );
      case 'budgets':
        return (
          <div className="home">
            <div className="budgets">
              <h2>Budget</h2>
              <form className="create">
                <label>Month:</label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </form>
              <BudgetDiffChart selectedMonth={selectedMonth} />
              {filteredBudgets.length > 0 ? (
                filteredBudgets.map((b) => <BudgetDetails key={b._id} budget={b} />)
              ) : (
                <p>No budgets for the selected month.</p>
              )}
            </div>
            <BudgetForm />
          </div>
        );
      case 'incomes':
        return (
          <div className="home">
            <div className="incomes">
              <h2>Income</h2>
              <form className="create">
                <label>Month:</label>
                <select value={selectedMonthStatements} onChange={handleMonthChangeStatements}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </form>
              <IncomePieChart selectedMonth={selectedMonthStatements} />
              {filteredIncomes.length > 0 ? (
                filteredIncomes.map((i) => <IncomeDetails key={i._id} income={i} />)
              ) : (
                <p>No incomes for the selected month.</p>
              )}
            </div>
            <IncomeForm />
          </div>
        );
      case 'statements':
        return (
          <div className="home">
            <div className="budgets">
              <h2>Statements</h2>
              <form className="create">
                <label>Month:</label>
                <select value={selectedMonthStatements} onChange={handleMonthChangeStatements}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </form>
              {filteredFiles.length > 0 ? (
                filteredFiles.map((f) => <StatementDetails key={f._id} file={f} />)
              ) : (
                <p>No statements for the selected month.</p>
              )}
            </div>
            <StatementUpload />
          </div>
        );
      case 'spendingSummary':
        return (
          <div className="home">
            <h2>Spending Summary</h2>
            <SpendingSummary />
          </div>
        );
      case 'notifications':
        return (
          <div className="home">
            <div className="investments">
              {notifications?.map((n) => (
                <NotificationDetails key={n._id} notification={n} />
              ))}
            </div>
          </div>
        );
      default:
        return <div className="home"></div>;
    }
  };

  const renderViewInvestment = () => {
    switch (activeViewInvestment) {
      case 'investmentAnalysis':
        return (
          <div className="home">
            <div className="investments">
              <h2>Investments</h2>
              <form className="create">
                <label>Month:</label>
                <select value={selectedMonth} onChange={handleMonthChange}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </form>
              <InvestmentPieChart selectedMonth={selectedMonth} />
              {filteredInvestments.length > 0 ? (
                filteredInvestments.map((i) => <InvestmentDetails key={i._id} investment={i} />)
              ) : (
                <p>No investments for the selected month.</p>
              )}
              <h3>Total Investment Value: ${totalInvestmentValue.toFixed(2)}</h3>
            </div>
          </div>
        );
      case 'investmentForm':
        return (
          <div className="home">
            <div className="investments">
              <InvestmentForm />
            </div>
          </div>
        );
      default:
        return <div className="home"></div>;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      const endpoints = [
        { url: '/api/investments', dispatch, type: 'SET_INVESTMENTS' },
        { url: '/api/budgets', dispatch: budgetDispatch, type: 'SET_BUDGETS' },
        { url: '/api/incomes', dispatch: incomeDispatch, type: 'SET_INCOMES' },
        { url: '/api/banks', dispatch: fileDispatch, type: 'SET_FILES' },
        { url: '/api/notifications', dispatch: notificationDispatch, type: 'SET_NOTIFICATIONS' },
      ];
      for (const { url, dispatch, type } of endpoints) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await res.json();
        if (res.ok) dispatch({ type, payload: json });
      }
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const notifyIfInvestmentExceeds = async () => {
      if (totalInvestmentValue / totalBudgetValue <= 0.75) {
        localStorage.setItem('hasSentNotification', 'false');
      }
      if (
        !hasSentNotification &&
        totalBudgetValue > 0 &&
        totalInvestmentValue / totalBudgetValue >= 0.75
      ) {
        const notification = {
          message: `Alert: Your investment of $${totalInvestmentValue.toFixed(2)} is 75% or more of your total budget of $${totalBudgetValue.toFixed(2)}.`,
          sent: true,
        };
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/notifications`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notification),
        });
        const json = await res.json();
        if (res.ok) {
          notificationDispatch({ type: 'CREATE_NOTIFICATION', payload: json });
          localStorage.setItem('hasSentNotification', 'true');
        }
      }
    };
    notifyIfInvestmentExceeds();
  }, [
    totalInvestmentValue,
    totalBudgetValue,
    user,
    notifications,
    notificationDispatch,
    hasSentNotification,
  ]);

  return (
    <div>
      <Sidebar setActiveView={handleSetActiveView} notifications={notifications} />
      <div style={{ flex: 1, padding: '15px' }}>
        <h1>Account Summary</h1>
        <p>
          Your income is currently ${totalIncomeValue} and you spent $
          {totalStatementValue.toFixed(2)} in {selectedMonthStatements}.
        </p>
        <p>
          You saved ${(totalIncomeValue - totalStatementValue).toFixed(2)} in{' '}
          {selectedMonthStatements}.
        </p>
        <p>
          Your budget is ${totalBudgetValue} and you plan to spend ${totalInvestmentValue} in{' '}
          {selectedMonth}.
        </p>
        <p>
          You plan to save ${totalBudgetValue - totalInvestmentValue} in {selectedMonth}.
        </p>
        {hasSentNotification && (totalInvestmentValue / totalBudgetValue) * 100 > 75 && (
          <p style={{ marginTop: '20px', padding: '10px', color: 'red' }}>
            Your investments are currently{' '}
            {((totalInvestmentValue / totalBudgetValue) * 100).toFixed(2)}% of your budget.
          </p>
        )}
      </div>
      {renderView()}
      {renderViewInvestment()}
    </div>
  );
};

export default Home;
