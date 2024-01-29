import React, { Component } from "react";
import Links from "./Links";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Links text={"About Me"} href="./index.html" class="About" />
          <Links
            text={"Work Experience"}
            href="#work-experience"
            linkClass="Work"
          />
          <Links text={"Education"} href="#education" class="Education" />
          <Links text={"Key Skills"} href="#key-skills" class="Skills" />
          <Links
            text={"Achievements"}
            href="#achievements"
            class="Achievements"
          />
        </nav>
      </header>
    );
  }
}

export default Header;
