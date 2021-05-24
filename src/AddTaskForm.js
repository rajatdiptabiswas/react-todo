import React, { useState } from 'react';
import './AddTaskForm.css';

function AddTaskForm({ addTaskItem }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const newTask = value;
    if (!newTask) {
      return;
    }
    addTaskItem(newTask);
    setValue('');
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a task..."
          value={value}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default AddTaskForm;
