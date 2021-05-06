import React from 'react';

function TaskList(props) {
  const taskItemsList = props.tasks;

  return (
    <div>
      {taskItemsList}
    </div>
  );
}

export default TaskList;
