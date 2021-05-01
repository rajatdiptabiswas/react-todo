import React, { Component } from "react";

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    let newTask = event.target.task.value;
    // alert(`The task "${newTask}" was added!`);
    event.target.task.value = "";
    this.props.addTaskItem(newTask);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTask}>
          <input type="text" name="task" placeholder="Add a task..." />
          <button type="submit">+</button>
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
