import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import Task from './Task'
import './ToDoApp.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskIDCounter: 0,
      tasksLeft: [],
    };
    this.addTaskItem = this.addTaskItem.bind(this);
    this.deleteTaskItem = this.deleteTaskItem.bind(this);
  }

  addTaskItem(newTask) {
    this.setState(prevState => ({
      taskIDCounter: prevState.taskIDCounter + 1,
      tasksLeft: [
        ...prevState.tasksLeft,
        <Task
          key={prevState.taskIDCounter}
          taskName={newTask}
          taskID={prevState.taskIDCounter}
          handleDelete={this.deleteTaskItem}
        />
      ]
    }));
  }

  deleteTaskItem(id) {
    this.setState(prevState => ({
      tasksLeft: prevState.tasksLeft.filter(task => task.props.taskID !== id),
    }));
  }

  render() {
    return (
      <div className="ToDoApp">
        <h1 className="title">To-Do</h1>
        <p>{`You have ${this.state.tasksLeft.length} tasks remaining`}</p>
        <br />
        <TaskList tasks={this.state.tasksLeft} />
        <br />
        <AddTaskForm addTaskItem={this.addTaskItem} className="addTask" />
      </div>
    );
  }
}

export default ToDoApp;
