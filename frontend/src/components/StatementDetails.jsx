import React from 'react';
import { useBanksContext } from '../hooks/useBanksContext';
import { useAuthContext } from '../hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const StatementDetails = ({ file }) => {
  const { fileDispatch } = useBanksContext();
  const { user } = useAuthContext();

  // Function to safely convert strings to Date objects
  const safeDate = (dateStr) => {
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  };

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/banks/` + file._id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      fileDispatch({ type: 'DELETE_FILE', payload: json });
    }
  };

  // Convert file.createdAt and file.date to Date objects
  const createdAtDate = safeDate(file.createdAt);
  const fileDate = safeDate(file.date);

  return (
    <div className="details">
      <div className="statement-info">
        <h1>{fileDate ? fileDate.toDateString().slice(4) : 'Invalid date'}</h1>
        <p>{file.description}</p>
        <p></p>
      </div>
      <strong>${file.amount} </strong>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default StatementDetails;
