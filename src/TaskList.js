import React from 'react';
import Task from './Task';

function TaskList(props) {
  const taskItemsList = props.tasks.map(task =>
    <Task
      key={task.taskID}
      taskID={task.taskID}
      taskName={task.taskName}
      isCompleted={task.isCompleted}
      handleComplete={props.handleComplete}
      handleDelete={props.handleDelete}
    />
  );

  return (
    <div>
      {taskItemsList}
      {taskItemsList.length > 0 && <br />}
    </div>
  );
}

export default TaskList;
