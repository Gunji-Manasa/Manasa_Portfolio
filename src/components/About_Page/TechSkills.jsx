import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiHtml5,
    DiCss3,
 
   
    DiJqueryLogo,
    DiPython,
    DiGit,
    DiJava,
  } from "react-icons/di";
  import {SiMysql} from "react-icons/si";
  import {FaBootstrap} from "react-icons/fa6";
function SkillsSet(){
    return(
      <div>
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      
        <DiPython /><h4>Python</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiJava /><h4>Java</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 /><h4>Html</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiCss3 /><h4>CSS</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
         <DiJavascript1 /><h4>Javascript</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaBootstrap /><h4>Bootstap</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiJqueryLogo /><h4>JQuery</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs /><h4>NodeJs</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact /><h4>ReactJs</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMysql /><h4>MySQL</h4>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit /><h4>Git</h4>
        </Col>

       
     </Row>
        </Container>
      </div>
    );
}
export default SkillsSet;