import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

import './AdditionalSidebar.css';

import {
  RiHeartFill,
  RiComputerLine,
  RiDashboardFill,
  RiCodeFill,
  RiFlaskFill,
  RiLightbulbFill,
  RiPaintFill,
} from 'react-icons/ri';

const colorfulIcons = [
  <RiHeartFill />,
  <RiComputerLine />,
  <RiDashboardFill />,
  <RiCodeFill />,
  <RiFlaskFill />,
  <RiLightbulbFill />,
  <RiPaintFill />,
];

const colorfulIconColors = [
  'red',
  'blue',
  'green',
  'purple',
  'orange',
  'pink',
  'teal',
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

const DropdownIcon = ({ icon }) => <span className="dropdown-icon">{icon}</span>;

const DropdownItem = ({ item, handleClick, isOpen, setOpen, nativeOpen }) => {
  const hasChildren = item.childIcons && item.childIcons.length > 0;

  return (
    <div
      className={`dropdown-item ${hasChildren && nativeOpen ? 'active' : ''}`}
      onClick={() => {
        if (hasChildren) setOpen(!isOpen);
        handleClick(item.name === 'Native Project');
      }}
    >
      <DropdownIcon icon={item.icon} />
      {item.name}
      {hasChildren && isOpen && (
        <div className="child-icons">
          {item.childIcons.map((childIcon, index) => (
            <div key={index} className="child-icon">
              {childIcon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
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
            {projectData.favorites.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                handleClick={() => setNativeOpen(false)}
                isOpen={false}
                setOpen={setFavoriteOpen}
                nativeOpen={false}
              />
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
            {projectData.allProjects.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                handleClick={setNativeOpen}
                isOpen={projectsOpen}
                setOpen={setProjectsOpen}
                nativeOpen={nativeOpen}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalSidebar;
