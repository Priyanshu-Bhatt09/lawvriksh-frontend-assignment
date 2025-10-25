// src/components/ProjectSummary.jsx
import React from 'react';
import './ProjectSummary.css';
import { projects } from '../mockData';

const ProjectSummary = () => {
  const getStatusClass = (status) => {
    return `status-${status.toLowerCase().replace(' ', '-')}`;
  };

  const getProgressColor = (status) => {
    if (status === 'Completed') return 'var(--status-completed)';
    if (status === 'On going') return 'var(--status-on-going)';
    if (status === 'Delayed') return 'var(--status-delayed)';
    if (status === 'At risk') return 'var(--status-at-risk)';
    return 'var(--text-light)';
  };

  return (
    <div className="project-summary card">
      <div className="card-header">
        <h2>Project summary</h2>
        <div className="project-filters">
          <select className="dropdown-filter">
            <option>Project name</option>
          </select>
          <select className="dropdown-filter">
            <option>Project manager</option>
          </select>
          <select className="dropdown-filter">
            <option>Status</option>
          </select>
        </div>
      </div>
      
      <div className="project-table">
        <div className="project-table-header">
          <span>Name</span>
          <span>Project manager</span>
          <span>Due date</span>
          <span>Status</span>
          <span>Progress</span>
        </div>
        
        {projects.map(project => (
          <div className="project-table-row" key={project.id}>
            <span className="project-name">{project.name}</span>
            <span>{project.manager}</span>
            <span>{project.date}</span>
            <span>
              <span className={`status-badge ${getStatusClass(project.status)}`}>
                {project.status}
              </span>
            </span>
            <div className="project-progress">
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill"
                  style={{ 
                    width: `${project.progress}%`,
                    backgroundColor: getProgressColor(project.status)
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSummary;