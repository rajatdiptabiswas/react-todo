import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false,
    }
    this.taskName = this.props.taskName;
    this.id = this.props.taskID;
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask() {
    if (this.state.isCompleted) {
      return;
    }
    this.props.handleComplete(this.id);
    this.setState({
      isCompleted: true,
    });
  }

  deleteTask() {
    this.props.handleDelete(this.id, this.state.isCompleted);
  }

  render() {
    return (
      <div className="container">
        <div className={"taskName " + (this.state.isCompleted ? "taskCompleted" : "")}>
          <p>{this.taskName}</p>
        </div>
        <div className="buttons">
          <FontAwesomeIcon
            icon={faCheck}
            className="done"
            onClick={this.completeTask}
          />
          <span className="space"></span>
          <FontAwesomeIcon
            icon={faBan}
            className="delete"
            onClick={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default Task;
