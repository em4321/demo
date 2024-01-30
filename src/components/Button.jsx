import React, { Component } from "react";

class Button extends Component {
  btnClick = () => {
    console.log("Btn Clicked");
  };
  render() {
    const { text } = this.props;
    return <button onClick={this.btnClick}>{text}</button>;
  }
}

export default Button;
