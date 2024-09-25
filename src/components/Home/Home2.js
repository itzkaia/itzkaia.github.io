import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/kaia.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2em" }}>
            welcome to my <strong className="main-name"> DIGITAL PLAYGROUND.</strong>
            </h1>
            <p className="home-about-body">
              here's what I'm up to:
              <br />
              <br />
              <b> 🎓 Studying: </b>
              B.S. ECE &  Data Science @ University of Washington
              <br />
              <b> 💻 Working: </b>
              AI Intern @ Boeing
              <br />
              <b> 🏎️ Building: </b>
              autonomous racecars @ UW FSAE
              <br />
              <b> 😌 Enjoying: </b>
              iced lattes, good music, the east coast
              <br />
              <br />
              <b> 🔎 Searching for: entry level SWE positions! </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              let's <span className="purple">connect!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/itzkaia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kaiaburgos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itsskaiaaa"
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
