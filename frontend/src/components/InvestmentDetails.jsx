import React from 'react';
import { useInvestmentsContext } from '../hooks/useInvestmentsContext';
import { useAuthContext } from '../hooks/useAuthContext';

// Date FNS Library
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import '../styles/Details.css';

const InvestmentDetails = ({ investment }) => {
  const { investmentDispatch } = useInvestmentsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/investments/` + investment._id,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    const json = await response.json();

    if (response.ok) {
      investmentDispatch({ type: 'DELETE_INVESTMENT', payload: json });
    }
  };

  return (
    <nav>
      <div className="details">
        <div className="investment-info">
          <h1>{investment.title}</h1>
          <p>
            <strong>Amount:</strong> ${investment.amount}
          </p>
          <p>
            <strong>Type:</strong> {investment.investmentType}
          </p>
          <p>
            <strong>Description:</strong> {investment.investmentDescription}
          </p>

          {investment.isRecurring && (
            <>
              <p>
                <strong>Recurring:</strong> Yes
              </p>
              <p>
                <strong>Frequency:</strong> {investment.recurrenceFrequency}
              </p>
              <p>
                <strong>Start Date:</strong> {new Date(investment.startDate).toLocaleDateString()}
              </p>
            </>
          )}
        </div>

        <p>{formatDistanceToNow(new Date(investment.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>
          Delete
        </span>
      </div>
    </nav>
  );
};

export default InvestmentDetails;
