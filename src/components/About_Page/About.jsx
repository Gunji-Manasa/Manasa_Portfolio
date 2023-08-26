import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import AboutIcon from "../../Images/AboutIcon.png";
import MyDescription from "./AboutMe";
import SkillsSet from "./TechSkills";
import Ides from "./AboutIdes";

function About(){
    return(
        <div className="about-sec">
        {/* <h1 className="about-title">About</h1> */}
        <Container>
        <Row className="about-row">
        <Col md={6} sm={8} lg={6}>
        <h2 >KNOW WHO <span className="about-me">I'M.</span></h2>
        <MyDescription />
        </Col>
        <Col md={6} lg={6} sm={12} >
        <div className="about-image">
           <img src={AboutIcon} alt="about-img"  className="user-icon"/>
            </div>
        </Col>
        </Row>
        <Row>
        <br /><br />
            <h1 className="tech-headings"> Professional <span className="blue">Skills</span> </h1>
        </Row>
        <br />
        <br />
        
             <SkillsSet />
             <h1 className="tech-headings">
          <strong className="blue">Tools</strong> I use
        </h1>
        <br />
        <br />
        <Ides />
        </Container>
        
        </div>
    );
}
export default About;