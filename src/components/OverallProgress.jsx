// src/components/OverallProgress.jsx
import React from 'react';
import './OverallProgress.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const OverallProgress = () => {
  const percentage = 72;

  return (
    <div className="overall-progress card">
      <div className="card-header">
        <h2>Overall Progress</h2>
        <select className="dropdown-filter">
          <option>All</option>
        </select>
      </div>

      <div className="progress-chart-container">
        <div className="progress-chart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              textSize: '1.25rem',
              pathTransitionDuration: 0.5,
              pathColor: `var(--status-completed)`,
              textColor: 'var(--text-primary)',
              trailColor: 'var(--border-color)',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <p className="chart-label">Completed</p>
      </div>
      
      <div className="progress-stats">
        <div className="stat-item">
          <span className="stat-value">95</span>
          <span className="stat-label">Total projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{color: 'var(--status-completed)'}}>26</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{color: 'var(--status-delayed)'}}>35</span>
          <span className="stat-label">Delayed</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{color: 'var(--status-on-going)'}}>35</span>
          <span className="stat-label">On going</span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;