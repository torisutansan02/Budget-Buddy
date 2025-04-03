import React from 'react';
import { useAuthContext } from './useAuthContext';
import { useInvestmentsContext } from './useInvestmentsContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: investmentsDispatch } = useInvestmentsContext();

  const logout = () => {
    // Clear all relevant localStorage data
    localStorage.removeItem('user');
    localStorage.removeItem('hasSentNotification'); // optional if used

    // Dispatch logout-related actions
    dispatch({ type: 'LOGOUT' });
    investmentsDispatch({ type: 'SET_INVESTMENTS', payload: [] }); // safer fallback than `null`
  };

  return { logout };
};
