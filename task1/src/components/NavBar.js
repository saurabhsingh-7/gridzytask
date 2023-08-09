import React, { useState } from 'react';
import { FiMoon, FiBell } from 'react-icons/fi';
import './NavBar.css';
import { IoIosArrowDown } from 'react-icons/io';

const NavBar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

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
        <div className={`user-info ${dropdownActive ? 'active' : ''}`} onClick={toggleDropdown}>
          <img
            src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c"
            alt="User"
            className="user-image"
          />
          <div className="user-name">Saurabh Singh</div>
          <div className={`dropdown1 ${dropdownActive ? 'active' : ''}`}>
          <IoIosArrowDown className={`arrow-icon1 ${dropdownActive ? 'rotate-up' : 'rotate-down'}`} />
            {dropdownActive &&<div className="dropdown-content1">

              <div className="dropdown-item1">Settings</div>
              <div className="dropdown-item1">Logout</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
