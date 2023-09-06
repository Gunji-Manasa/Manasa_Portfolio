import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import {BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"

import {MdEmail} from "react-icons/md"


export function ConnectMe(){

    return <div class="connect" >
        <Container>
            <Row>
                <Col>
                    <h2 >Find <b>me</b> on</h2>
                    <h4>Feel free to <b>connect</b> with me.</h4>
                </Col>
            </Row>
            
   <div >           
<a href="https://github.com/Gunji-Manasa" class="btn icon-connect"><BsGithub class="iconLogo"/></a>
<a href="mailto:gunjimanasa24@gmail.com" class="btn icon-connect"><MdEmail  class="iconLogo"/></a>
<a href="https://www.linkedin.com/in/manasa-g-529a2923b" class="btn  icon-connect"><BsLinkedin class="iconLogo"/></a>
<a href="https://www.instagram.com/manasa_5832" class="btn  icon-connect"><BsInstagram class="iconLogo"/></a>
</div>               
            
        </Container>
    </div>
}