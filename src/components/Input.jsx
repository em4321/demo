import React, { Component } from "react";

class Input extends Component {
  state = {};
  onTextInput = (e) => {
    console.log("User typed: ", e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search City"
        onInput={this.onTextInput}
      ></input>
    );
  }
}

export default Input;
