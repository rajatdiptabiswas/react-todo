import React from 'react';
import './Task.css';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';

function Task(props) {
  const taskName = props.taskName;

  return (
    <div key={nanoid()} className="container">
      <div className="taskName">
        <p>{taskName}</p>
      </div>
      <div className="buttons">
        <FontAwesomeIcon icon={faCheck} className="done" />
        <span className="space"></span>
        <FontAwesomeIcon icon={faBan} className="delete" />
      </div>
    </div>
  );
}

export default Task;
