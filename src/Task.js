import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.taskName = this.props.taskName;
    this.id = this.props.taskID;
    this.isCompleted = this.props.isCompleted;
  }

  completeTask = () => {
    if (this.isCompleted) {
      return;
    }
    this.props.handleComplete(this.id);
  }

  deleteTask = () => {
    this.props.handleDelete(this.id, this.isCompleted);
  }

  render() {
    return (
      <div className="container">
        <div className={"taskName " + (this.isCompleted && "taskCompleted")}>
          <p>{this.taskName}</p>
        </div>
        <div className="buttons">
          <FontAwesomeIcon
            icon={faCheck}
            className={"done " + (this.isCompleted && "disabledButton")}
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
