// src/pages/Dashboard.jsx
import React from 'react';
import './Dashboard.css';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import ProjectSummary from '../components/ProjectSummary';
import OverallProgress from '../components/OverallProgress';
import TodayTask from '../components/TodayTask';
import ProjectsWorkload from '../components/ProjectsWorkload';

import { overviewStats } from '../mockData';

const Dashboard = () => {
  return (
    <>
      <Header />
      
      <div className="dashboard-grid">
        
        {/* Overview Section */}
        <div className="overview-header">
          <h2>Overview</h2>
          <select className="dropdown-filter">
            <option>Last 30 days</option>
          </select>
        </div>
        
        {overviewStats.map(stat => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            iconColor={stat.iconColor}
            title={stat.title}
            value={stat.value}
            subValue={stat.subValue}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}

        {/* Main Content Sections */}
        <ProjectSummary />
        <OverallProgress />
        <TodayTask />
        <ProjectsWorkload />
        
      </div>
    </>
  );
};

export default Dashboard;