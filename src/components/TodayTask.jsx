// src/components/TodayTask.jsx
import React, { useState } from 'react';
import './TodayTask.css';
import { tasks } from '../mockData';
import { FiCircle, FiCheckCircle } from 'react-icons/fi';

const TaskItem = ({ task }) => {
  const getStatusClass = (status) => {
    return `status-${status.toLowerCase().replace(' ', '-')}`;
  };
  
  const isApproved = task.status === 'Approved';

  return (
    <div className="task-item">
      <div className="task-info">
        <button className={`task-status-icon ${isApproved ? 'approved' : ''}`}>
          {isApproved ? <FiCheckCircle /> : <FiCircle />}
        </button>
        <span className="task-text">{task.text}</span>
      </div>
      <span className={`status-badge ${getStatusClass(task.status)}`}>
        {task.status}
      </span>
    </div>
  );
};

const TodayTask = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="today-task card">
      <div className="card-header">
        <h2>Today task</h2>
      </div>
      
      <div className="task-tabs">
        <button 
          className={`task-tab ${activeTab === 'All' ? 'active' : ''}`}
          onClick={() => setActiveTab('All')}
        >
          All <span>10</span>
        </button>
        <button 
          className={`task-tab ${activeTab === 'Important' ? 'active' : ''}`}
          onClick={() => setActiveTab('Important')}
        >
          Important
        </button>
        <button 
          className={`task-tab ${activeTab === 'Notes' ? 'active' : ''}`}
          onClick={() => setActiveTab('Notes')}
        >
          Notes <span>08</span>
        </button>
        <button 
          className={`task-tab ${activeTab === 'Links' ? 'active' : ''}`}
          onClick={() => setActiveTab('Links')}
        >
          Links <span>10</span>
        </button>
      </div>

      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodayTask;