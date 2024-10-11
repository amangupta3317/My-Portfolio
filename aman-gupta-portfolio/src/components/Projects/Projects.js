import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import concent from "../../Assets/Projects/concent.png";
import drwosiness from "../../Assets/Projects/drwosiness.jpeg";
import food from "../../Assets/Projects/food.png";
import next_word from "../../Assets/Projects/next word.jpg";
import spam from "../../Assets/Projects/spam.jpg";
import tbi from "../../Assets/Projects/tbi.png";
import real from "../../Assets/Projects/real.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real E-state Management System"
              description="• Addressed real-world challenges by providing a comprehensive platform for property owners and buyers, improving transaction transparency and user experience.Developed using the MERN stack, enhancing property listing and management efficiency.Integrated Google Firebase for secure storage and authentication, ensuring reliable data management and user access control."

              ghLink="https://github.com/amangupta3317/Real-E-State-Management-System"
              demoLink="https://real-e-state-management-system.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concent}
              isBlog={false}
              title="ConCent"
              description="•	Developed a responsive full stack web application for contact centers with a unified dashboard and 
              API-based AI powered sentiment analysis providing one stop solution to the businesses. •	The application is powered with a unified dashboard that provides real time data management 
              of customers, products, geographical information, executive’s performance data along with modern 
              data visualization.
              
              "
              ghLink="https://github.com/amangupta3317/ConCent-SIH"
              demoLink="https://concentweb-rust.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tbi}
              isBlog={false}
              title="TBI-GEU"
              description="Designed and created a Frontend Website to promote the TBI(Technology Business Incubator) at Graphic Era University. The website is fully responsive with all the basic functionality like Search, button navigation, animations. This Website likely highlighted the services offered by TBI GEU to student entrepreneurs. "
              ghLink="https://github.com/amangupta3317/TBI-mypage"
              demoLink="https://tbi-mypage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="MERN Stack"
              description="Developed a full stack food delivery application using the MERN stack with a focus on user-friendly React
            components. Implemented features for user authentication, shopping cart functionality, and seamless integration with a MongoDB database"
              ghLink="https://github.com/amangupta3317/Full-stack-Food-Ordering-Website-main-NEW"
              demoLink="https://full-stack-food-ordering-website-main-r7ydn896m.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Spam E-Mail detection"
              description="Developed and implemented a machine learning-based spam email detection system, leveraging natural
              language processing techniques and classification algorithms. Achieved high accuracy in identifying and
              filtering spam emails, contributing to enhanced email security and user experience."
              ghLink="https://github.com/amangupta3317/Spam-Email-Detection"
              // demoLink="https://github.com/amangupta3317/Spam-Email-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next_word}
              isBlog={false}
              title="Next Word Predictor"
              description="Designed a next-word predictor enhancing user experience in applications like text editors, messaging, search
              engines, and virtual assistants, by providing accurate and contextually relevant word suggestions for efficient
              typing"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drwosiness}
              isBlog={false}
              title="Early Drowsiness Detection System"
              description="Designed and implemented a sophisticated early drowsiness detection system for drivers, utilizing state-ofthe-art computer vision and machine learning technologies. The system proactively identifies signs of driver
              fatigue, such as eye closure and erratic head movements, and issues real-time alerts to prevent potential road
              accidents"
              ghLink="https://github.com/amangupta3317/Early-drowsiness-Detection-system-for-drivers"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
