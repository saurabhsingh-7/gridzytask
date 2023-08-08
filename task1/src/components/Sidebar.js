import React , { useState } from 'react';
import { MdBugReport } from 'react-icons/md';
import { RiLayout2Fill } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';
import { MdMenu, MdNotifications, MdPeople, MdSettings } from 'react-icons/md';
import { PiMessengerLogoLight } from 'react-icons/pi';
import './Sidebar.css';

const icons = [
  { icon: <MdBugReport />, title: 'Cockroach' },
  { icon: <RiLayout2Fill />, title: 'Layout' },
  { icon: <FiMessageCircle />, title: 'Messenger' },
  { icon: <MdMenu />, title: 'Hamburger' },
  { icon: <PiMessengerLogoLight />, title: 'Message' },
  { icon: <MdNotifications />, title: 'Notification' },
  { icon: <MdPeople />, title: 'Contact People' },
  { icon: <MdSettings />, title: 'Settings' },
];

const Sidebar = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState(null);
  const handleIconClick = (index) => {
    setSelectedIconIndex(index);
  };
  return (
      <div className="sidebar">
        {icons.map(({ icon, title }, index) => (
         <div
         key={index}
         className={`icon-container ${selectedIconIndex === index ? 'selected' : ''}`}
         onClick={() => handleIconClick(index)}
       >
            {icon}
          </div>
        ))}
      </div>
    );
  };
  

export default Sidebar;
