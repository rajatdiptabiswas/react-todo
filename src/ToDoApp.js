import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import './ToDoApp.css';

class ToDoApp extends Component {
  state = {
    taskIDCounter: 0,
    tasksLeft: [],
    tasksCompleted: [],
  };

  addTaskItem = (newTask) => {
    this.setState(prevState => ({
      taskIDCounter: prevState.taskIDCounter + 1,
      tasksLeft: [
        ...prevState.tasksLeft,
        {
          taskID: prevState.taskIDCounter,
          taskName: newTask,
          isCompleted: false,
        },
      ],
    }));
  }

  completeTaskItem = (id) => {
    const completedTask = this.state.tasksLeft.find(task => task.taskID === id);
    completedTask.isCompleted = true;
    this.setState(prevState => ({
      tasksLeft: prevState.tasksLeft.filter(task => task.taskID !== id),
      tasksCompleted: [
        ...prevState.tasksCompleted,
        completedTask,
      ],
    }));
  }

  deleteTaskItem = (id, isCompleted) => {
    if (isCompleted) {
      this.setState(prevState => ({
        tasksCompleted: prevState.tasksCompleted.filter(task => task.taskID !== id),
      }));
    } else {
      this.setState(prevState => ({
        tasksLeft: prevState.tasksLeft.filter(task => task.taskID !== id),
      }));
    }
  }

  render() {
    return (
      <div className="ToDoApp">
        <h1 className="title">To-Do</h1>
        <p>{`You have ${this.state.tasksLeft.length} tasks remaining`}</p>
        <br />
        <TaskList
          tasks={this.state.tasksLeft}
          handleComplete={this.completeTaskItem}
          handleDelete={this.deleteTaskItem}
        />
        {this.state.tasksCompleted.length > 0 && <p>Finished tasks</p>}
        <TaskList
          tasks={this.state.tasksCompleted}
          handleComplete={this.completeTaskItem}
          handleDelete={this.deleteTaskItem}
        />
        <AddTaskForm addTaskItem={this.addTaskItem} className="addTask" />
      </div>
    );
  }
}

export default ToDoApp;
