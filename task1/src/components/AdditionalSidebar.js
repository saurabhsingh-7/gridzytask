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
  { icon: <RiHeartFill />, color: 'red' },
  { icon: <RiComputerLine />, color: 'blue' },
  { icon: <RiDashboardFill />, color: 'green' },
  { icon: <RiCodeFill />, color: 'purple' },
  { icon: <RiFlaskFill />, color: 'orange' },
  { icon: <RiLightbulbFill />, color: 'pink' },
  { icon: <RiPaintFill />, color: 'teal' },
];

const projectData = {
  favorites: [
    { name: 'Goriorio Project', icon: colorfulIcons[0].icon },
    { name: 'Conch Project', icon: colorfulIcons[1].icon },
    { name: 'Biznet Design', icon: colorfulIcons[2].icon },
  ],
  allProjects: [
    {
      name: 'Dribble Shot',
      icon: colorfulIcons[3].icon,
    },
    {
      name: 'Virgin Project',
      icon: colorfulIcons[4].icon,
    },
    {
      name: 'Native Project',
      icon: colorfulIcons[5].icon,
      childIcons: ['Website Design', 'Dashboard', 'Mobile Responsive'],
    },
    {
      name: 'Brave Wings Project',
      icon: colorfulIcons[6].icon,
    },
  ],
};

const DropdownIcon = ({ icon, color }) => (
  <span className="dropdown-icon" style={{ color }}>
    {icon}
  </span>
);

const DropdownItem = ({ item, handleClick, isOpen, setOpen, nativeOpen, color }) => {
  const hasChildren = item.childIcons && item.childIcons.length > 0;

  return (
    <div
      className={`dropdown-item ${hasChildren && nativeOpen ? 'active' : ''}`}
      onClick={() => {
        if (hasChildren) setOpen(!isOpen);
        handleClick(item.name === 'Native Project');
      }}
    >
      <DropdownIcon icon={item.icon} color={color} />
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
          <div className="search-text">Search</div>
        </div>
       
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
                color={colorfulIcons[index].color}
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
                color={colorfulIcons[index].color}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AdditionalSidebar;
