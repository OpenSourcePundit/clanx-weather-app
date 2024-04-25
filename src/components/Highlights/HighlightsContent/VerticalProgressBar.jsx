import React from 'react';
import './UVI.css'; 

const VerticalProgressBar = ({ progress }) => {
  const percentage = Math.max(0, Math.min(100, progress));
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress" style={{ height: `${percentage}%` }}></div>
      </div>
      <div className="progress-ball" style={{ bottom: `${percentage}%` }}></div>
    </div>
  );
};

export default VerticalProgressBar;
