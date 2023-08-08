import React from 'react';
import { FiMoon, FiBell } from 'react-icons/fi';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="workspace">Workspace</div>
      <div className="right-section">
        <div className="dark-mode-toggle">
          <FiMoon />
        </div>
        <div className="bell-icon">
          <div className="notification-dot" />
          <FiBell />
        </div>
        <div className="user-info">
          <img src="" alt="User" className="user-image" />
          <div className="user-name">Saurabh Singh</div>
          
          <div className="dropdown">

            <div className="dropdown-content">
              {/* Dropdown items */}
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
