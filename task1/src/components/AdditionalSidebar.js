import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import { RiHeartFill, RiComputerLine, RiDashboardFill } from 'react-icons/ri';
import './AdditionalSidebar.css';

const projectData = {
  favorites: [
    { name: 'Goriorio Project', icon: <RiHeartFill /> },
    { name: 'Conch Project', icon: <RiHeartFill /> },
    { name: 'Biznet Design', icon: <RiHeartFill /> },
  ],
  allProjects: [
    {
      name: 'Dribble Shot',
      icon: <RiComputerLine />,
    },
    {
      name: 'Virgin Project',
      icon: <RiComputerLine />,
    },
    {
      name: 'Native Project',
      icon: <RiComputerLine />,
      childIcons: ['Website Design', 'Dashboard', 'Mobile Responsive'],
    },
    {
      name: 'Brave Wings Project',
      icon: <RiComputerLine />,
    },
    {
      name: 'Obelix Project',
      icon: <RiComputerLine />,
    },
    {
      name: 'VPN Design',
      icon: <RiComputerLine />,
    },
  ],
};

const AdditionalSidebar = () => {
  const [favoriteOpen, setFavoriteOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [nativeOpen, setNativeOpen] = useState(false);

  return (
    <div className="additional-sidebar">
      <div className="search-bar">
        <div className="search-icon">
          <FiSearch />
        </div>
        <div className="search-text">Search</div>
      </div>
      <div className="dropdown">
        <div
          className={`dropdown-header ${favoriteOpen ? 'active' : ''}`}
          onClick={() => setFavoriteOpen(!favoriteOpen)}
        >
          FAVOURITE
          <IoIosArrowDown className={`arrow-icon ${favoriteOpen ? 'rotate-up' : 'rotate-down'}`} />
        </div>
        {favoriteOpen && (
          <div className="dropdown-content">
            {projectData.favorites.map(({ name, icon }, index) => (
              <div key={index} className="dropdown-item">
                {icon}
                {name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <div
          className={`dropdown-header ${projectsOpen ? 'active' : ''}`}
          onClick={() => setProjectsOpen(!projectsOpen)}
        >
          ALL PROJECT
          <IoIosArrowDown className={`arrow-icon ${projectsOpen ? 'rotate-up' : 'rotate-down'}`} />
        </div>
        {projectsOpen && (
          <div className="dropdown-content">
            {projectData.allProjects.map(({ name, icon, childIcons }, index) => (
              <div key={index} className="dropdown-item" onClick={() => setNativeOpen(name === 'Native Project')}>
                {icon}
                {name}
                {name === 'Native Project' && nativeOpen && (
                  <div className="child-icons">
                    {childIcons.map((childIcon, childIndex) => (
                      <div key={childIndex} className="child-icon">
                        {childIcon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalSidebar;


