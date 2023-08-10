import React, { useState } from 'react';
import './Sidebar.css';
import { MdBugReport } from 'react-icons/md';
const icons = [
  { iconClass: 'icon-dashboard', title: 'Dashboard' },
  { iconClass: 'icon-statistics', title: 'Statistics' },
  { iconClass: 'icon-list', title: 'List' },
  { iconClass: 'icon-chat', title: 'Chat' },
  { iconClass: 'icon-notifications', title: 'Notifications' },
  { iconClass: 'icon-user', title: 'User' },
  { iconClass: 'icon-settings', title: 'Settings' },
];
const Sidebar = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(2);

  const handleIconClick = (index) => {
    setSelectedIconIndex(index);
  };

  return (
    <div className="sidebar">
        <div className="cockroach" >
        <MdBugReport className="bug-icon"/>
        </div>
      
      {icons.map(({ iconClass, title }, index) => (
        <div
          key={index}
          className={`icon-container ${selectedIconIndex === index ? 'selected' : ''} `}
          onClick={() => handleIconClick(index)}
        >
          <span className={iconClass}></span>
         
        </div>
      ))}
      <div className="bottom-icons">
        <div className="icon-container">
          <span className="icon-warning"></span>
        </div>
        <div className="icon-container">
          <span className="icon-logout"></span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
