// ToggleInvestmentForm.js
import React from 'react';
import './InvestmentDetails.css';

const ToggleInvestmentForm = ({ setActiveViewInvestment }) => (
  <nav>
    <ul className="investmentBar">
      <li className="investmentBar">
        <button onClick={() => setActiveViewInvestment('investmentAnalysis')}>
          Investment Analysis
        </button>
      </li>
      <li className="investmentBar">
        <button onClick={() => setActiveViewInvestment('investmentForm')}>Investment Form</button>
      </li>
    </ul>
  </nav>
);

export default ToggleInvestmentForm;
