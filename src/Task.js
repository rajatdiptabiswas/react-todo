import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);
    this.taskName = this.props.taskName;
    this.id = this.props.taskID;
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask() {
    this.props.handleDelete(this.id);
  }

  render() {
    return (
      <div className="container">
        <div className="taskName">
          <p>{this.taskName}</p>
        </div>
        <div className="buttons">
          <FontAwesomeIcon
            icon={faCheck}
            className="done"
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
