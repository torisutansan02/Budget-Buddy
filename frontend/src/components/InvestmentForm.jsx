import React from 'react';
import { useState } from 'react';
import { useInvestmentsContext } from '../hooks/useInvestmentsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Form.css';

const InvestmentForm = () => {
  const { investmentDispatch } = useInvestmentsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [customInvestmentType, setCustomInvestmentType] = useState('');
  const [investmentDescription, setDescription] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurrenceFrequency, setRecurrenceFrequency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    // Create the investment object with the necessary fields
    let investment = {
      title,
      amount: Number(amount),
      investmentType: investmentType === 'other' ? customInvestmentType : investmentType,
      investmentDescription,
      isRecurring,
    };

    // Only include recurrenceFrequency and startDate if isRecurring is true
    if (isRecurring) {
      if (!recurrenceFrequency) {
        setError('Recurrence frequency is required for recurring payments.');
        setEmptyFields(['recurrenceFrequency']);
        return;
      }

      if (!startDate) {
        setError('Start date is required for recurring payments.');
        setEmptyFields(['startDate']);
        return;
      }

      investment.recurrenceFrequency = recurrenceFrequency;
      investment.startDate = startDate;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/investments`, {
      method: 'POST',
      body: JSON.stringify(investment),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setTitle('');
      setAmount('');
      setInvestmentType('');
      setCustomInvestmentType('');
      setDescription('');
      setIsRecurring(false);
      setRecurrenceFrequency('');
      setStartDate('');
      setError(null);
      setEmptyFields([]);
      console.log('New Investment Added', json);
      investmentDispatch({ type: 'CREATE_INVESTMENT', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Add a New Investment</h1>

      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Investment"
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <input
        type="number"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        min="0"
        placeholder="Amount in $"
        className={emptyFields.includes('amount') ? 'error' : ''}
      />

      <select
        onChange={(e) => setInvestmentType(e.target.value)}
        value={investmentType}
        className={emptyFields.includes('investmentType') ? 'error' : ''}
      >
        <option value="">Category</option>
        <option value="gas">Gas</option>
        <option value="groceries">Groceries</option>
        <option value="subscriptions">Subscriptions</option>
      </select>

      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={investmentDescription}
        placeholder="Description"
        className={emptyFields.includes('investmentDescription') ? 'error' : 'description'}
      />

      <button>Add Investment</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default InvestmentForm;
