import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import {
  RiHeartFill,
  RiComputerLine,
  RiDashboardFill,
  RiCodeFill,
  RiFlaskFill,
  RiLightbulbFill,
  RiPaintFill,
} from 'react-icons/ri';
import './AdditionalSidebar.css';

const colorfulIcons = [
  <RiHeartFill />,
  <RiComputerLine />,
  <RiDashboardFill />,
  <RiCodeFill />,
  <RiFlaskFill />,
  <RiLightbulbFill />,
  <RiPaintFill />,
];

const projectData = {
  favorites: [
    { name: 'Goriorio Project', icon: colorfulIcons[0] },
    { name: 'Conch Project', icon: colorfulIcons[1] },
    { name: 'Biznet Design', icon: colorfulIcons[2] },
  ],
  allProjects: [
    {
      name: 'Dribble Shot',
      icon: colorfulIcons[3],
    },
    {
      name: 'Virgin Project',
      icon: colorfulIcons[4],
    },
    {
      name: 'Native Project',
      icon: colorfulIcons[5],
      childIcons: ['Website Design', 'Dashboard', 'Mobile Responsive'],
    },
    {
      name: 'Brave Wings Project',
      icon: colorfulIcons[6],
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
               <div style={{ color: `hsl(${index * 60}, 70%, 50%)` }}>{icon}</div>
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
                <div style={{ color: `hsl(${index * 60}, 70%, 50%)` }}>{icon}</div>
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
