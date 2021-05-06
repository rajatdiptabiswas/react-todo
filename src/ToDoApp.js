import React, { Component } from 'react';
import { nanoid } from 'nanoid';
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
    this.deleteTaskItem = this.deleteTaskItem.bind(this);
  }

  addTaskItem(newTask) {
    let id = nanoid();
    this.setState({
      tasksLeft: [
        ...this.state.tasksLeft,
        <Task
          key={id}
          taskName={newTask}
          taskID={id}
          handleDelete={this.deleteTaskItem}
        />
      ]
    });
  }

  deleteTaskItem(id) {
    this.setState(prevState => ({
      tasksLeft: prevState.tasksLeft.filter(task => task.props.taskID !== id)
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
