import React, { Component } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import Task from './Task'
import './ToDoApp.css';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksLeft: [],
    };
    this.addTaskItem = this.addTaskItem.bind(this);
  }

  addTaskItem(newTask) {
    this.setState({
      tasksLeft: [...this.state.tasksLeft, <Task taskName={newTask} />]
    });
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
