import React, { Component } from "react";

class Button extends Component {
  render() {
    const { href, text } = this.props;
    return (
      <a href={href}>
        <button>{text}</button>
      </a>
    );
  }
}

export default Button;
