// src/components/StatCard.jsx
import React from 'react';
import './StatCard.css';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatCard = ({ icon: Icon, iconColor, title, value, subValue, change, changeType }) => {
  const isIncrease = changeType === 'increase';

  return (
    <div className="stat-card card">
      <div className={`stat-icon-wrapper ${iconColor}`}>
        <Icon className="stat-icon" />
      </div>
      <p className="stat-title">{title}</p>
      <h3 className="stat-value">
        {value}
        {subValue && <span className="stat-subvalue">{subValue}</span>}
      </h3>
      <div className={`stat-change ${isIncrease ? 'increase' : 'decrease'}`}>
        {isIncrease ? <FiArrowUp /> : <FiArrowDown />}
        <span>{change}% {isIncrease ? 'increase' : 'decrease'} from last month</span>
      </div>
    </div>
  );
};

export default StatCard;