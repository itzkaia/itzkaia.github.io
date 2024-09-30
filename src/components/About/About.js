import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import kaia from "../../Assets/kaia.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            ⭒❃.✮:▹ about me ◃:✮.❃⭒
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={kaia} alt="about" className="img-fluid" />
          </Col>
        </Row>
      <Container>
        <Row style={{ justifyContent: "center", paddingTop: "10px", paddingBottom: "50px" }}>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              My big inspirations are people and conversation. I think there's so much to learn from the people around me! Reach out to chat over 
              food or coffee -- <b className="purple">I'd love to know your story.</b> 
            </p>
          </blockquote>
        </Row>
      </Container>
      </Container>
      <p className="purple">
        let's connect!
        <br />
        kaiaburgos02@gmail.com
      </p>
    </Container>
  );
}

export default About;
