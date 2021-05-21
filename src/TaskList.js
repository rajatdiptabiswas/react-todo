import React from 'react';

function TaskList(props) {
  const taskItemsList = props.tasks;

  return (
    <div>
      {taskItemsList}
      {taskItemsList.length > 0 && <br />}
    </div>
  );
}

export default TaskList;
