import React from 'react';
import { FiStar } from 'react-icons/fi';
import './WorkSection.css';

const WorkSection = () => {
  return (
    <div className="work-section">
      <div className="homebtn" ><div className="project-title">
        <span>Home</span>
        
        <span className="icon-warning"></span>
        <span className="icon-star"></span>
      </div>
      <div className="circles">
      <div className="container">
        <img src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c" alt="Image1" className="overlap-image1" />
        <img src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c" alt="Image2" className="overlap-image2" />
        <img src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c" alt="Image3" className="overlap-image3" />
        <div className="plus-icon"><span className="icon-add"></span>
        <span className="five">5</span>
        </div>
       </div>
       <div className="line"></div>
        <button className="addbtn"> 
        <span className="icon-add"></span>
        <span>Add Member</span>
        </button>
      </div>
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
