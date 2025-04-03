import React from 'react';
import './Details.css';

const ToggleInvestmentForm = ({ activeViewInvestment, setActiveViewInvestment }) => {
  const handleClick = (view) => {
    setActiveViewInvestment(view);
  };

  return (
    <div>
      <nav>
        <ul className="sidebar">
          <li className="sidebar">
            <button
              className={activeViewInvestment === 'investmentAnalysis' ? 'active' : ''}
              onClick={() => handleClick('investmentAnalysis')}
            >
              Investment Analysis
            </button>
          </li>
          <li className="sidebar">
            <button
              className={activeViewInvestment === 'investmentForm' ? 'active' : ''}
              onClick={() => handleClick('investmentForm')}
            >
              Investment Form
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToggleInvestmentForm;
