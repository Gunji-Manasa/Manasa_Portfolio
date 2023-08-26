import React from "react";
import Type from "./Type";
import {Container,Row,Col} from "react-bootstrap";
import Lottie from "lottie-react";
import HomeAnimi from "../../Images/HomeAnimi.json";

function Header(){
    return(
        <div>
        <Container>
        <Row >
        <Col lg={8} >
       
 <h1  className="home-heading">
                Hello!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
  </h1>
  
<h1 className="home-heading2">I'm
<strong className="main-name"> Manasa</strong></h1>
<div className="skills" >
    <Type />
</div>
</Col>
<Col lg={4}>
<div className="lottie" >
      <Lottie animationData={HomeAnimi}  />
    </div>
</Col>
</Row>
</Container>
</div>
    );
}
export default Header;