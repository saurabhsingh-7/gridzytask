import React from 'react';
import { FiStar } from 'react-icons/fi';
import './WorkSection.css';

const WorkSection = () => {
  return (
    <div className="work-section">
      <div className="project-title">
        <span>Home</span>
        <FiStar />
      </div>
      <div className="tabs">
        <div className="tab">Overview</div>
        <div className="tab">Tasks</div>
        <div className="tab">Timeline</div>
        <div className="tab">Discussion</div>
        <div className="tab">Files</div>
      </div>
    </div>
  );
};

export default WorkSection;
