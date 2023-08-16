
import React from "react";
import "./TaskCard.css";
import taskData from "./taskData.json"; 
const TaskCard = () => {
  return (
    <div className="scrollable-content">
    <div className="task-card">
      {taskData.map((taskSection, index) => (
        <div className="task-content" key={index}>
          <div className="task-title">
            <div className="title">{taskSection.title}</div>
            <div className="icon-title">
              <span className="icon-add"></span>
              <span className="icon-options"></span>
            </div>
          </div>
          {taskSection.items.map((item, itemIndex) => (
            <div className="items" key={itemIndex}>
              <div className="itemheader">
                <div className="header">
                {item.categories.map((category, catIndex) => (
                    <span
                      className={`category ${
                        category === "UI Design"
                          ? "uidesign"
                          : category === "Research"
                          ? "research"
                          : category === "Mobile Apps"
                          ? "apps"
                          : category === "Website"
                          ? "website"
                          : category === "Development"
                          ? "development"
                          : ""
                      }`}
                      key={catIndex}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <span className="icon-options"> </span>
              </div>
              <div className="itemcontent">
                <div className="heading2">{item.heading2}</div>
                <div className="heading3">{item.heading3}</div>
                {taskSection.title === "Work in Progress" && (
                  <img
                  className="image1"
                  src={item.images}
                  alt={`Image under ${item.heading2}`}
                />
                )}
                {item.dueDate && (
                    <div className="date">
                      <span className="icon-calendar"></span>
                      <span className="due">Due to:</span>
                      <span className="dateinside">{item.dueDate}</span>
                    </div>
                  )}
                <div className="line6"></div>
                <div className="underline">
                  <div className="imagecircle1">
                  <img
                src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c"
                alt="Image1"
                className="overlap-image1"
              />
              <img
                src="https://lh3.googleusercontent.com/a/AAcHTteOKEozjO4IJrLtr0OS0n_XUnKkqXfS7Ejkke00Sa2CkWQ=s96-c"
                alt="Image2"
                className="overlap-image2"
              />
                    <div className="plus-icon1">
                      <span className="icon-add"></span>
                      <span className="five">1</span>
                    </div>
                  </div>
                  <div className="iconunder">
                    <div className="comment">
                      <span className="icon-comments"></span>
                      <span>{item.comments}</span>
                    </div>
                    <div className="clip">
                      <span className="icon-clip"></span>
                      <span>{item.clips}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default TaskCard;
