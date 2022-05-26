import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marty Pabello </span>
            from <span className="purple"> Tacloban City, Philippines.</span>
            <br />I am a Full Stack Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Ingaging into new technologies advancement 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't stop until its done!"{" "}
          </p>
          <footer className="blockquote-footer">Marty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
