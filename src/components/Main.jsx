import React, { Component } from "react";
import Button from "./Button";

class Main extends Component {
  render() {
    return (
      <main>
        <h2>Contact Me</h2>
        <ul>
          <li>
            <Button
              text={"Email"}
              href="mailto:madeupemailaddress@gmail.com"
              buttonClass="Email"
            />
          </li>
          <li>
            <Button text={"Phone"} href="tel:01234567890" buttonClass="Phone" />
          </li>
          <li>
            <Button
              text={"Linkedin"}
              href="https://uk.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              buttonClass="Linkedin"
            />
          </li>
        </ul>
        <address>
          123 Fake Street, Faketown, <span class="postcode">FA1 1KE</span>
        </address>
        <section id="about-me">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis erat id enim pulvinar mattis non vitae risus. Fusce nisi leo,
            vulputate elementum condimentum sed, dignissim et orci. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus quis erat id
            enim pulvinar mattis non vitae risus. Fusce nisi leo, vulputate
            elementum condimentum sed, dignissim et orci.
          </p>
        </section>
        <section id="work-experience">
          <h2>Work Experience</h2>
          <h3>
            <em>Job Title - Company 2021 - present</em>
          </h3>
          <ul>
            <li>Skills and responsibilities 1</li>
            <li>Skills and responsibilities 2</li>
            <li>Skills and responsibilities 3</li>
            <li>Skills and responsibilities 4</li>
          </ul>
          <h3>
            <em>Job Title - Company 2019 - 2021</em>
          </h3>
          <ul>
            <li>Skills and responsibilities 1</li>
            <li>Skills and responsibilities 2</li>
            <li>Skills and responsibilities 3</li>
            <li>Skills and responsibilities 4</li>
          </ul>
          <h3>
            <em>Job Title - Company 2018 - 2019</em>
          </h3>
          <ul>
            <li>Skills and responsibilities 1</li>
            <li>Skills and responsibilities 2</li>
            <li>Skills and responsibilities 3</li>
            <li>Skills and responsibilities 4</li>
          </ul>
          <h3>
            <em>Job Title - Company 2016 - 2018</em>
          </h3>
          <ul>
            <li>Skills and responsibilities 1</li>
            <li>Skills and responsibilities 2</li>
            <li>Skills and responsibilities 3</li>
            <li>Skills and responsibilities 4</li>
          </ul>
        </section>
        <section id="education">
          <h2>Education</h2>
          <p>
            <strong>BSc (Hons) degree subject: grade - University</strong>
          </p>
          <ul>
            <li>Achieved a high 2:1 for my dissertation</li>
            <li>Created a quantitative experiment</li>
          </ul>
          <p>
            <strong>A levels - School</strong>
          </p>
          <ul>
            <li>Subject - grade</li>
            <li>Subject - grade</li>
            <li>Subject - grade</li>
          </ul>
        </section>
        <section id="key-skills">
          <h2>Key Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
            <li>Skill 5</li>
          </ul>
        </section>
        <section id="achievements">
          <h2>Achievements</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis erat id enim pulvinar mattis non vitae risus. Fusce nisi leo,
            vulputate elementum condimentum sed, dignissim et orci. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus quis erat id
            enim pulvinar mattis non vitae risus. Fusce nisi leo, vulputate
            elementum condimentum sed, dignissim et orci.
          </p>
        </section>
        <Button text={"Return to top"} href="about-me" buttonClass="Return" />
      </main>
    );
  }
}

export default Main;
