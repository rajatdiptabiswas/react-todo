import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import './ToDoApp.css';

function ToDoApp() {
  const [taskIDCounter, setTaskIDCounter] = useState(0);
  const [tasksLeft, setTasksLeft] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  const addTaskItem = (newTask) => {
    setTaskIDCounter(taskIDCounter + 1);
    setTasksLeft([
      ...tasksLeft,
      {
        taskID: taskIDCounter,
        taskName: newTask,
        isCompleted: false,
      },
    ]);
  };

  const completeTaskItem = (id) => {
    const completedTask = tasksLeft.find((task) => task.taskID === id);
    completedTask.isCompleted = true;
    setTasksLeft(tasksLeft.filter((task) => task.taskID !== id));
    setTasksCompleted([...tasksCompleted, completedTask]);
  };

  const deleteTaskItem = (id, isCompleted) => {
    if (isCompleted) {
      setTasksCompleted(tasksCompleted.filter((task) => task.taskID !== id));
    } else {
      setTasksLeft(tasksLeft.filter((task) => task.taskID !== id));
    }
  };

  return (
    <div className="ToDoApp">
      <h1 className="title">To-Do</h1>
      <p>{`You have ${tasksLeft.length} tasks remaining`}</p>
      <br />
      <TaskList
        tasks={tasksLeft}
        handleComplete={completeTaskItem}
        handleDelete={deleteTaskItem}
      />
      {tasksCompleted.length > 0 && <p>Finished tasks</p>}
      <TaskList
        tasks={tasksCompleted}
        handleComplete={completeTaskItem}
        handleDelete={deleteTaskItem}
      />
      <AddTaskForm addTaskItem={addTaskItem} className="addTask" />
    </div>
  );
}

export default ToDoApp;
