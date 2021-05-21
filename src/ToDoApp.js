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
      tasksCompleted: [],
    };
    this.addTaskItem = this.addTaskItem.bind(this);
    this.completeTaskItem = this.completeTaskItem.bind(this);
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
          isCompleted={false}
          handleComplete={this.completeTaskItem}
          handleDelete={this.deleteTaskItem}
        />
      ]
    }));
  }

  completeTaskItem(id) {
    const completedTask = this.state.tasksLeft.find(task => task.props.taskID === id);
    this.setState(prevState => ({
      tasksLeft: prevState.tasksLeft.filter(task => task.props.taskID !== id),
      tasksCompleted: [
        ...prevState.tasksCompleted,
        <Task
          key={completedTask.props.taskID}
          taskName={completedTask.props.taskName}
          taskID={completedTask.props.taskID}
          isCompleted={!completedTask.props.isCompleted}
          handleComplete={this.completeTaskItem}
          handleDelete={this.deleteTaskItem}
        />
      ],
    }));
  }

  deleteTaskItem(id, isCompleted) {
    if (isCompleted) {
      this.setState(prevState => ({
        tasksCompleted: prevState.tasksCompleted.filter(task => task.props.taskID !== id),
      }));
    } else {
      this.setState(prevState => ({
        tasksLeft: prevState.tasksLeft.filter(task => task.props.taskID !== id),
      }));
    }
  }

  render() {
    return (
      <div className="ToDoApp">
        <h1 className="title">To-Do</h1>
        <p>{`You have ${this.state.tasksLeft.length} tasks remaining`}</p>
        <br />
        <TaskList tasks={this.state.tasksLeft} />
        {this.state.tasksCompleted.length > 0 && <p>Finished tasks</p>}
        <TaskList tasks={this.state.tasksCompleted} />
        <AddTaskForm addTaskItem={this.addTaskItem} className="addTask" />
      </div>
    );
  }
}

export default ToDoApp;
