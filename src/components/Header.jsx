import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <Input placeholder={"Search City"} id="searchBar" />
        <Button text={"Search"} id="searchButton" />
        <Button text={"Use Location"} id="getLocation" />
      </header>
    );
  }
}

export default Header;
