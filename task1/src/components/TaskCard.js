import React from 'react';
import './TaskCard.css';

const TaskCard = () => {
  return (
    <div className="task-card">
      <div className="task-title">Upcoming Task</div>
      <div className="task-content">
        {/* Placeholder data for tasks */}
        <div className="task-item">Task 1</div>
        <div className="task-item">Task 2</div>
        <div className="task-item">Task 3</div>
      </div>
      <div className="task-title">Work in Progress</div>
      <div className="task-content">
        {/* Placeholder data for work in progress */}
        <div className="task-item">Work 1</div>
        <div className="task-item">Work 2</div>
      </div>
    </div>
  );
};

export default TaskCard;
