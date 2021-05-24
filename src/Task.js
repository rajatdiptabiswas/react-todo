import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

function Task({ taskID, taskName, isCompleted, handleComplete, handleDelete }) {
  const completeTask = () => {
    if (isCompleted) {
      return;
    }
    handleComplete(taskID);
  };

  const deleteTask = () => {
    handleDelete(taskID, isCompleted);
  };

  return (
    <div className="container">
      <div className={'taskName ' + (isCompleted && 'taskCompleted')}>
        <p>{taskName}</p>
      </div>
      <div className="buttons">
        <FontAwesomeIcon
          icon={faCheck}
          className={'done ' + (isCompleted && 'disabledButton')}
          onClick={completeTask}
        />
        <span className="space"></span>
        <FontAwesomeIcon icon={faBan} className="delete" onClick={deleteTask} />
      </div>
    </div>
  );
}

export default Task;
