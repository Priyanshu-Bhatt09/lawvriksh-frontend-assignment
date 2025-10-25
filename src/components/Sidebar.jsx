// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { 
  FiGrid, 
  FiFolder, 
  FiCheckSquare, 
  FiPlus, 
  FiSettings, 
  FiChevronLeft 
} from 'react-icons/fi';

import logo from '../assets/circle.png'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Promage Logo" className="sidebar-logo" />
        <h1 className="sidebar-title">Promage</h1>
        <button className="sidebar-toggle">
          <FiChevronLeft />
        </button>
      </div>

      <nav className="sidebar-nav">
        <button className="create-project-btn">
          <FiPlus />
          <span>Create new project</span>
        </button>

        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link active">
              <FiGrid />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FiFolder />
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FiCheckSquare />
              <span>Tasks</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="nav-link">
          <FiSettings />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;