import React from 'react';
import { useIncomesContext } from '../hooks/useIncomesContext';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Details.css';

// Date FNS Library
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const IncomeDetails = ({ income }) => {
  const { incomeDispatch } = useIncomesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/incomes/` + income._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      incomeDispatch({ type: 'DELETE_INCOME', payload: json });
    }
  };
  return (
    <div className="details">
      <div className="income-info">
        <h1>{income.incomeType}</h1>
        <p>{formatDistanceToNow(new Date(income.createdAt), { addSuffix: true })}</p>
      </div>
      <p>${income.amount}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default IncomeDetails;
