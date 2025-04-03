import React, { useState } from 'react';
import './Details.css';

const ToggleInvestmentForm = ({ setActiveViewInvestment }) => {
  const [activeView, setActiveView] = useState('investmentAnalysis');

  const handleClick = (view) => {
    setActiveView(view);
    setActiveViewInvestment(view);
  };

  return (
    <div>
      <nav>
        <ul className="sidebar">
          <li className="sidebar">
            <button
              className={activeView === 'investmentAnalysis' ? 'active' : ''}
              onClick={() => handleClick('investmentAnalysis')}
            >
              Investment Analysis
            </button>
          </li>
          <li className="sidebar">
            <button
              className={activeView === 'investmentForm' ? 'active' : ''}
              onClick={() => handleClick('investmentForm')}
            >
              Investment Form
            </button>
          </li>
        </ul>
      </nav>

      <div className="content">
        {activeView === 'investmentAnalysis' ? (
          <div>
            <h1>Investment Analysis</h1>
          </div>
        ) : (
          <div>
            <h1>Investment Form</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleInvestmentForm;
