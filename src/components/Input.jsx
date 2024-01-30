import React, { Component } from "react";

class Input extends Component {
  onTextInput = (e) => {
    console.log("User typed: ", e.target.value);
  };

  render() {
    return <input type="text" onInput={this.onTextInput}></input>;
  }
}

export default Input;
