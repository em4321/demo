import React, { Component } from "react";

class Links extends Component {
  render() {
    const { href, text } = this.props;
    return (
      <>
        <a href={href}>{text}</a>
      </>
    );
  }
}

export default Links;
