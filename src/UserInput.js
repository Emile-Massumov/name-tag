import React, { Component } from "react";

//new stateful component called UserInput.js in its own module
//In the UserInput component, initialize the state to start off with the name property.
//Your name property should contain an empty string
class UserInput extends Component {
  state = {
    name: ""
  };

  //Add an updateName event handler with an event listener
  //that is called when a user types in the input field, updating the state.
  updateName = (event) => this.setState({ name: event.target.value });
  // add a handleSubmit method
  handleSubmit = (event) => {
    //add preventDefault() to prevent the
    //page from refreshing when the form is submitted
    event.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      ////component will render a form element with text input elements
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a new name here..."
          //n the input element, use the value attribute
          //to ensure that your input element will display the value we have in state
          value={this.state.name}
          onChange={this.updateName}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
