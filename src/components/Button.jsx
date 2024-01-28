import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <a className={this.props.class} href={this.props.href}>
        <button>{this.props.text}</button>
      </a>
    );
  }
}

export default Button;
