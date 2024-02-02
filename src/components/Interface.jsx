import React, { Component } from "react";
import Spinner from "./Spinner";
import Main from "./Main";

class Interface extends Component {
  state = {};
  render() {
    return this.state.weather ? (
      <Main weather={this.state.weather} />
    ) : (
      <Spinner />
    );
  }
}

export default Interface;
