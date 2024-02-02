import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <Input id="searchBar" />
        <Button text={"Search"} className="searchButton" />
        <Button text={"Use Location"} className="getLocation" />
      </header>
    );
  }
}

export default Header;
