import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer" >
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Manasa Gunji</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} MG</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Gunji-Manasa"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:gunjimanasa24@gmail.com"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manasa-g-529a2923b/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/manasa_5832?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
}
export default Footer;