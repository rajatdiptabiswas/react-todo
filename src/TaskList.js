import React from "react";
import { nanoid } from "nanoid";

function TaskList(props) {
  const tasks = props.tasks;
  const taskItemsList = tasks.map((task) => 
    <div key={nanoid()}>
      {task}
    </div>
  );

  return (
    <div>
      {taskItemsList}
    </div>
  );
}

export default TaskList;
