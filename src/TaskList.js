import React from 'react';
import Task from './Task';

function TaskList({ tasks, handleComplete, handleDelete }) {
  const taskItemsList = tasks.map((task) => (
    <Task
      key={task.taskID}
      taskID={task.taskID}
      taskName={task.taskName}
      isCompleted={task.isCompleted}
      handleComplete={handleComplete}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div>
      {taskItemsList}
      {taskItemsList.length > 0 && <br />}
    </div>
  );
}

export default TaskList;
