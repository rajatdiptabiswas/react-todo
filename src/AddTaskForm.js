import React, { Component } from 'react';
import './AddTaskForm.css'

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  addTask(event) {
    event.preventDefault();
    let newTask = this.state.value;
    if (!newTask) {
      return;
    }
    this.props.addTaskItem(newTask);
    this.setState({
      value: '',
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input
            type="text"
            placeholder="Add a task..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
