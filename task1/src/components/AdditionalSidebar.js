import React, { useState } from 'react';
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
const AdditionalSidebar = () => {
  const data = [
    {
      title: 'FAVOURITES',
      items: [
        {
          label: 'Goriorio Project',
          icon: <RiHeartFill />,
          color: 'red',
        },
        {
          label: 'Conch Project',
          icon: <RiComputerLine />,
          color: 'blue',
        },
        {
          label: 'Biznet Design',
          icon: <RiDashboardFill />,
          color: 'green',
        },
      ],
    },
    // All Projects
    {
      title: 'All PROJECTS',
      items: [
        {
          name: 'Dribble Shot',
          icon: <RiCodeFill />,
          color: 'purple',
        },
        {
          name: 'Virgin Project',
          icon: <RiFlaskFill />,
          color: 'orange',
        },
        {
          name: 'Native Project',
          icon: <RiLightbulbFill />,
          color: 'pink',
          innerItems: ['Website Design', 'Dashboard', 'Mobile Responsive'],
        },
        {
          name: 'Brave Wings Project',
          icon: <RiPaintFill />,
          color: 'teal',
        },
      ],
    },
  ];

  const [showItems, setShowItems] = useState({});
  const handleItemClick = (title) => {
    setShowItems((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="additional-sidebar">
      <div className="search-bar">
        <div className="search-icon">
          <span className="icon-search"></span>
          <div className="search-text">Search</div>
        </div>
      </div>
      {data.map((group, index) => (
        <div key={index} className="dropdown">
        <div className="dropdown-title" onClick={() => handleItemClick(group.title)}>
  {group.title}
  {showItems[group.title] ? (
    <span className="icon-chevron-up"></span>
  ) : (
    <span className="icon-chevron-down"></span>
  )}
</div>

          {showItems[group.title] && (
            <div className="dropdown-items">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="dropdown-item">
                  <div
                    className={`item-label ${item.innerItems ? 'has-inner-items' : ''}`}
                    onClick={() => handleItemClick(item.label || item.name)}
                  >
                    <span className="item-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    {item.label || item.name}
                  </div>
                  {item.innerItems && showItems[item.label || item.name] && (
                    <div className="inner-items">
                      {item.innerItems.map((innerItem, innerIndex) => (
                        <div key={innerIndex} className="inner-item">
                          {innerItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdditionalSidebar;
