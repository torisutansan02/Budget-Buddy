import React from 'react';
import { useBudgetsContext } from '../hooks/useBudgetsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Details.css';

// Date FNS Library
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const BudgetDetails = ({ budget }) => {
  const { budgetDispatch } = useBudgetsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/budgets/` + budget._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      budgetDispatch({ type: 'DELETE_BUDGET', payload: json });
    }
  };
  return (
    <div className="details">
      <div className="budget-details">
        <h1>Budget</h1>
        <p>${budget.amount}</p>
      </div>
      <p>{formatDistanceToNow(new Date(budget.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default BudgetDetails;
