import React from 'react';
import './portfolioremaining.css';
import Car from '../carousel';
import Portfolio from './portfolio';

const PortfolioRemain = () => {
  return (
    <div>
        <p className="portfolio">PORTFOLIO</p>
      <Portfolio />
      <div className="containerportfolio">
        <div className="text-box">
          <p>How Does Your Site Compare?</p>
          <button className="action-button">Free SEO Report</button>
        </div>
      </div>
      <Car />
    </div>
  );
};

export default PortfolioRemain;
