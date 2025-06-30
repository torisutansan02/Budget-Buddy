import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ setActiveView, notifications }) => {
  const [activeButton, setActiveButton] = useState('investments');
  const [isOpen, setIsOpen] = useState(false);

  const safeNotifications = notifications || [];
  const hasNotifications = safeNotifications.length > 0;

  const handleClick = (view) => {
    setActiveView(view);
    setActiveButton(view);
    setIsOpen(false); // Auto-close on mobile
  };

  return (
    <>
      {/* Hamburger icon (mobile only) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <nav className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar">
          {['investments', 'budgets', 'incomes', 'statements', 'spendingSummary', 'notifications'].map((item) => (
            <li key={item}>
              <button
                className={activeButton === item ? 'active' : ''}
                onClick={() => handleClick(item)}
              >
                {item === 'spendingSummary'
                  ? 'Spending Summary'
                  : item.charAt(0).toUpperCase() + item.slice(1)}
                {item === 'notifications' && hasNotifications && (
                  <> ({safeNotifications.length})</>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
