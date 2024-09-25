import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flappy from "../../Assets/Projects/flappy.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import boeing from "../../Assets/Projects/boeing.png";
import suicide from "../../Assets/Projects/suicide.png";
import formula from "../../Assets/Projects/formula.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        ☆.。.:*・° experience ☆.。.:*・°
        </h1>
        <p style={{ color: "white" }}>
          some work i've been up to
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boeing}
              isBlog={false}
              title="AI Software Engineering Intern"
              subtitle="Boeing"
              description="Enabling teams across the enterprise to seamlessly use open-source AI/ML models. Established automated testing pipeline for development process."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formula}
              isBlog={false}
              title="Driverless Software Engineer"
              subtitle="UW Formula Motorsports (FSAE)"
              description="Built the first sensor-fused perception pipeline for an autonomous F1-style racecar. Integrated lidar and stereo cameras to detect track cones in real time, as well as enabling simultaneous localization and mapping (SLAM)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quantum Devices Lab - REU Intern"
              subtitle="National Science Foundation"
              description="Conducted intensive research and literature review on novel 2D nanomaterials including graphene and hBN. Applied research work included electron transmission modeling, simulation, and script optimization."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
        <h1 className="project-heading">
        𖦹:･ﾟ⋆｡° projects ⭒✩･:*:｡
        </h1>
        <p style={{ color: "white" }}>
          just for fun & more!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={flappy}
                isBlog={false}
                title="Flappy Bird on FPGA"
                description="Implemented the classic game Flappy Bird on an intel DE1-SoC FPGA board, displaying the game on an external VGA. Wrote 14 modules and testbenches in SystemVerilog for simulation and verification in Intel ModelSim. Designed Game flow using ASMD charts, specifying RTL operations and debugging timing issues."
                ghLink="https://github.com/soumyajit4419/Plant_AI"
                demoLink="https://plant49-ai.herokuapp.com/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                isBlog={false}
                title="Ai For Social Good"
                description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
              />
            </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
