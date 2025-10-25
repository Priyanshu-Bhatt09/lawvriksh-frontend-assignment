// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { FiSearch } from 'react-icons/fi';
// Add your placeholder avatar to src/assets
import avatar from '../assets/boss.png'; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      
      <div className="header-controls">
        <div className="search-bar">
          <FiSearch />
          <input type="text" placeholder="Search for anything..." />
        </div>
        
        <div className="user-profile">
          <img src={avatar} alt="User Avatar" width={30} height={30} className="user-avatar" />
          <div className="user-avatar-placeholder">AM</div>
          <div className="user-info">
            <span className="user-name">Alex melan</span>
            <span className="user-role">Product manager</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;