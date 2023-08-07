import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import './AdditionalSidebar.css';

const AdditionalSidebar = () => {
  const [favoriteOpen, setFavoriteOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [nativeOpen, setNativeOpen] = useState(false); // New state variable to handle the "Native Project" dropdown

  const favorites = ['Goriorio Project', 'Conch Project', 'Biznet Design'];
  const allProjects = ['Dribble Shot', 'Virgin Project', 'Native Project', 'Brave Wings Project', 'Obelix Project', 'VPN Design'];
  const childIcons = {
    'Native Project': ['Website Design', 'Dashboard', 'Mobile Responsive'],
  };

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
            {favorites.map((favorite, index) => (
              <div key={index} className="dropdown-item">
                {favorite}
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
            {allProjects.map((project, index) => (
              <div key={index} className="dropdown-item" onClick={() => setNativeOpen(project === 'Native Project')}>
                {project}
                {project === 'Native Project' && nativeOpen && (
                  <div className="child-icons">
                    {childIcons[project].map((childIcon, childIndex) => (
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
