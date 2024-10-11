import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aman Gupta </span>
            from <span className="purple"> Shamli, India.</span>
            <br />
            I am a final year student of BTech in Computer Science.
            <br />
            I have done projects in domains like Web Development (MERN stack),
            Machine Learning (Tensorflow, OpenCV, Dlib, NLP).
            <br />
            I am Learning emerging technology like Cloud computing and DevOps.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Hindi Poetries
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "आसान मत समझना सफल शोहरतों का, <br></br>बदनाम होना पड़ता है नाम
            कमाने के लिए!"{" "}
          </p>
          <footer className="blockquote-footer">Aman Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
