// src/components/ProjectsWorkload.jsx
import React from 'react';
import './ProjectWorkload.css';
import { workload } from '../mockData';

const ProjectsWorkload = () => {
  const maxTasks = Math.max(...workload.map(w => w.tasks));

  return (
    <div className="projects-workload card">
      <div className="card-header">
        <h2>Projects Workload</h2>
        <select className="dropdown-filter">
          <option>Last 3 months</option>
        </select>
      </div>
      
      <div className="workload-chart">
        {workload.map(person => (
          <div className="workload-column" key={person.name}>
            <div className="workload-bar-container">
              {/* Create 10 dots for the trail */
              [...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className={`workload-dot ${i < person.tasks ? 'filled' : 'empty'}`}
                ></div>
              ))}
              {/* Show task count badge */
              person.tasks === maxTasks && (
                <span className="workload-badge">{person.tasks}</span>
              )}
            </div>
            <span className="workload-label">{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsWorkload;