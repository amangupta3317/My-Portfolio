import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aman from "../../Assets/aman.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am tech enthusiastic person who loves to "code" and "decode".
              <br />
              Proficient in C, C++ and Data Structures & Algorithm(DSA) makes
              me a strong candidate.
              <br />
              <br />
              Working as a DSA Mentor at GeeksforGeeks, I am happy to help 
              others in enhancing their coding skills. 
              
              
             
             
              <br />
              My field of Interest -  &nbsp;
              <i>
                <b className="purple">Web Technologies </b> and
                <b className="purple"> DevOps</b> and <b className="purple">Cloud Computing</b>.
              </i>
              <br />I am confident that I have the
              skills and the drive to succeed in the tech industry.
            <br />
                <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={aman} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amangupta3317"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="http://surl.li/ryksg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thebtechshayar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
