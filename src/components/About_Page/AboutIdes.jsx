import React from "react";
import { Row,Col } from "react-bootstrap";
import {SiIntellijidea,SiAtom,SiGithub,SiApachenetbeanside} from "react-icons/si";
import {TbBrandVscode} from "react-icons/tb";
function Ides(){
    return(
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" >
             <SiIntellijidea /><h4>Intellij IDEA</h4>
            </Col>
            <Col xs={4} md={2} className="tech-icons" >
             <SiAtom /><h4>Atom</h4>
            </Col>
            <Col xs={4} md={2} className="tech-icons" >
             <TbBrandVscode /><h4>Vscode</h4>
            </Col>
            <Col xs={4} md={2} className="tech-icons" >
             <SiGithub /><h4>Github</h4>
            </Col>
            <Col xs={4} md={2} className="tech-icons" >
             <SiApachenetbeanside /><h4>Netbeans</h4>
            </Col>
        </Row>

    );
}
export default Ides;