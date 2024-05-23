import React from 'react';
import './taskCounter.css'; // Import CSS file

function TaskCounter({ count }) {
  return (
    <div className="task-counter">
      Active tasks: {count}
    </div>
  );
}

export default TaskCounter;
