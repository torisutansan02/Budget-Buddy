import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useInvestmentsContext,
  useBudgetsContext,
  useIncomesContext,
  useBanksContext,
  useNotificationsContext,
  useAuthContext,
} from '../hooks';
import {
  Sidebar,
  InvestmentDetails,
  InvestmentForm,
  BudgetDetails,
  BudgetForm,
  IncomeDetails,
  IncomeForm,
  StatementDetails,
  StatementUpload,
  SpendingSummary,
  NotificationDetails,
  InvestmentPieChart,
  BudgetDiffChart,
  IncomePieChart,
} from '../components';
import { isTokenExpired } from '../utils/isTokenExpired';
import { fetchWithAuth } from '../utils/fetchWithAuth';

const capitalizeFirstLetter = (string) =>
  typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';

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

const MonthSelect = ({ value, onChange, label }) => (
  <form className="create">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  </form>
);

const renderItems = (items, renderItem, emptyMsg) =>
  items.length > 0 ? items.map(renderItem) : <p>{emptyMsg}</p>;

const Home = () => {
  const now = new Date();
  const currentMonth = months[now.getMonth()];
  const navigate = useNavigate();

  const [activeView, setActiveView] = useState('investments');
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedMonthStatements, setSelectedMonthStatements] = useState(currentMonth);

  const { investments = [], investmentDispatch } = useInvestmentsContext();
  const { budgets = [], budgetDispatch } = useBudgetsContext();
  const { incomes = [], incomeDispatch } = useIncomesContext();
  const { files = [], fileDispatch } = useBanksContext();
  const { notifications = [], notificationDispatch } = useNotificationsContext();
  const { user, dispatch: authDispatch } = useAuthContext();

  const hasSentNotification = localStorage.getItem('hasSentNotification') === 'true';

  const useMonthlyFilter = (data, month, dateKey = 'createdAt') =>
    useMemo(
      () =>
        (data || []).filter(
          (item) =>
            capitalizeFirstLetter(
              new Date(item[dateKey]).toLocaleString('default', { month: 'long' })
            ) === capitalizeFirstLetter(month)
        ),
      [data, month]
    );

  const filteredInvestments = useMonthlyFilter(investments, selectedMonth);
  const totalInvestmentValue = useMemo(
    () => filteredInvestments.reduce((sum, i) => sum + i.amount, 0),
    [filteredInvestments]
  );

  const filteredBudgets = useMonthlyFilter(budgets, selectedMonth);
  const totalBudgetValue = useMemo(
    () => filteredBudgets.reduce((sum, b) => sum + b.amount, 0),
    [filteredBudgets]
  );

  const filteredFiles = useMonthlyFilter(files, selectedMonthStatements, 'date');
  const totalStatementValue = useMemo(
    () => filteredFiles.reduce((sum, f) => sum - f.amount, 0),
    [filteredFiles]
  );

  const filteredIncomes = useMonthlyFilter(incomes, selectedMonthStatements);
  const totalIncomeValue = useMemo(
    () => filteredIncomes.reduce((sum, i) => sum + i.amount, 0),
    [filteredIncomes]
  );

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleMonthChangeStatements = (e) => setSelectedMonthStatements(e.target.value);
  const handleSetActiveView = (view) => {
    setActiveView(view);
  };

  const renderForm = () => {
    switch (activeView) {
      case 'investments':
        return <InvestmentForm />;
      case 'budgets':
        return <BudgetForm />;
      case 'incomes':
        return <IncomeForm />;
      case 'statements':
        return <StatementUpload />;
      default:
        return (
          <>
          <h1>
          Account Summary
        </h1>
        <p>
          Above, you will find the account summary.
        </p>
          </>
        );
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'investments':
        return (
          <div className="home">
            <div className="investments">
              <div className="chart">
                <h1>Investments</h1>
                <MonthSelect value={selectedMonth} onChange={handleMonthChange} />
                <InvestmentPieChart selectedMonth={selectedMonth} />
              </div>
              <h2> Investment Details </h2>
              <div className="scroll">
                {renderItems(
                  filteredInvestments,
                  (i) => (
                    <InvestmentDetails key={i._id} investment={i} />
                  ),
                  'No investments for the selected month.'
                )}
              </div>
            </div>
          </div>
        );
      case 'budgets':
        return (
          <div className="home">
            <div className="budgets">
              <div className="chart">
                <h1>Budget</h1>
                <MonthSelect value={selectedMonth} onChange={handleMonthChange} />
                <BudgetDiffChart selectedMonth={selectedMonth} />
              </div>
              <h2> Budget Details </h2>
              <div className="scroll">
                {renderItems(
                  filteredBudgets,
                  (b) => (
                    <BudgetDetails key={b._id} budget={b} />
                  ),
                  'No budgets for the selected month.'
                )}
              </div>
            </div>
          </div>
        );
      case 'incomes':
        return (
          <div className="home">
            <div className="incomes">
              <div className="chart">
                <h1>Income</h1>
                <MonthSelect
                  value={selectedMonthStatements}
                  onChange={handleMonthChangeStatements}
                />
                <IncomePieChart selectedMonth={selectedMonthStatements} />
              </div>
              <h2> Income Details </h2>
              <div className="scroll">
                {renderItems(
                  filteredIncomes,
                  (i) => (
                    <IncomeDetails key={i._id} income={i} />
                  ),
                  'No incomes for the selected month.'
                )}
              </div>
            </div>
          </div>
        );
      case 'statements':
        return (
          <div className="home">
            <div className="budgets">
              <div className="chart">
              <h1>Statements</h1>
              <MonthSelect value={selectedMonthStatements} onChange={handleMonthChangeStatements} />
              </div>
              <h2> Statement Details </h2>
              <div className="scroll">
                {renderItems(
                  filteredFiles,
                  (f) => (
                    <StatementDetails key={f._id} file={f} />
                  ),
                  'No statements for the selected month.'
                )}
              </div>
            </div>
          </div>
        );
      case 'spendingSummary':
        return (
          <div className="spending-summary">
                          <h1>Spending Summary</h1>
            <SpendingSummary />
          </div>
        );
      case 'notifications':
        return (
          <div className="home">
            <div className="investments">
              {notifications.map((n) => (
                <NotificationDetails key={n._id} notification={n} />
              ))}
            </div>
          </div>
        );
      default:
        return <div className="home"></div>;
    }
  };

  useEffect(() => {
    if (!user || isTokenExpired(user.token)) {
      localStorage.removeItem('user');
      authDispatch({ type: 'LOGOUT' });
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      const endpoints = [
        { url: '/api/investments', dispatch: investmentDispatch, type: 'SET_INVESTMENTS' },
        { url: '/api/budgets', dispatch: budgetDispatch, type: 'SET_BUDGETS' },
        { url: '/api/incomes', dispatch: incomeDispatch, type: 'SET_INCOMES' },
        { url: '/api/banks', dispatch: fileDispatch, type: 'SET_FILES' },
        { url: '/api/notifications', dispatch: notificationDispatch, type: 'SET_NOTIFICATIONS' },
      ];

      for (const { url, dispatch: contextDispatch, type } of endpoints) {
        const data = await fetchWithAuth(
          `${import.meta.env.VITE_API_URL}${url}`,
          user.token,
          {},
          () => {
            localStorage.removeItem('user');
            authDispatch({ type: 'LOGOUT' });
            navigate('/login');
          }
        );
        if (data) contextDispatch({ type, payload: data });
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
    <div className="layout">
      <main className="pages">
        <aside className="cards" id="left-column">
          <Sidebar setActiveView={handleSetActiveView} notifications={notifications} />
        </aside>
        <section className="cards" id="middle-column">
          <div className="account-summary">
            <h1>Summary ({selectedMonthStatements})</h1>
            <h3>Savings</h3>
            <p>Your income is ${totalIncomeValue} and your spending is ${-totalStatementValue.toFixed(2)}</p>
            <p><strong>You saved ${(totalIncomeValue - totalStatementValue).toFixed(2)}</strong></p>
            <h3>
              Planned Savings
            </h3>
            <p>Your budget is ${totalBudgetValue} and your investments are ${totalInvestmentValue}</p>
            <p>
              <strong>
                You plan to save ${(totalBudgetValue - totalInvestmentValue).toFixed(2)}
              </strong>
            </p>
          </div>
          <div className="form-box">{renderForm()}</div>
        </section>

        {/* <div className="form-box">{renderForm()}</div> */}

        <aside className="cards" id="right-column">
          {renderView()}
        </aside>
      </main>
    </div>
  );
};

export default Home;
