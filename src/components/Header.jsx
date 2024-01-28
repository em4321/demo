import React, { Component } from "react";
import Links from "./Links";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Links text={"About Me"} href="./index.html" linkClass="About" />
          <Links
            text={"Work Experience"}
            href="#work-experience"
            linkClass="Work"
          />
          <Links text={"Education"} href="#education" linkClass="Education" />
          <Links text={"Key Skills"} href="#key-skills" linkClass="Skills" />
          <Links
            text={"Achievements"}
            href="#achievements"
            linkClass="Achievements"
          />
        </nav>
      </header>
    );
  }
}

export default Header;
