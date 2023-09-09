import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Simon_Image from "../Images/Simon_Image.png";
import Drums_Image from "../Images/Drums_Image.jpg";
import Dice_Image from "../Images/Dice_Image.jpg";
import Keep_Notes from "../Images/Keep_Notes.png";
function Card(){
  return(
    <div className="funpage">
    <Container>
    <Row><center>
    <h1 className="FunTitle">Play and have fun!</h1>
    <h2 style={{color:"white",paddingTop:"20px"}} >Here are a few <b style={{color:"#F31559"}}>works</b> I've done recently.</h2>
    </center></Row>
    <Row className="fun-row">
    <Col md={4} xs={12} lg={4} className="fun-card">
    <div class="card h-100" style={{width: "18rem"}}>
  <img src={Drums_Image} class="card-img-top" alt="drum-pic"/>
  <div class="card-body" >
    <h5 class="card-title">Drum-Kit</h5>
    <p class="card-text">It is a musical fun containing various instruments which can be played by using mouse clicks or keyboard</p>
    <div style={{textAlign:"center"}}>
    <a href="https://gunji-manasa.github.io/drum-kit/" className="card-button" class="btn">Play</a>
    </div>
  </div>
</div>
</Col>
<Col md={4} xs={12} lg={4} className="fun-card">
<div class="card h-100" style={{width: "18rem"}} >
  <img src={Dice_Image} class="card-img-top" alt="dice-pic" />
  <div class="card-body">
    <h5 class="card-title">Dice-Game</h5>
    <p class="card-text">This is a Dice game Consisting of two Players. Each time when u refresh the page it shows which player wins.</p>
    <div style={{textAlign:"center"}}>
    <a href="https://gunji-manasa.github.io/Dice/" className="card-button" class="btn">Try it</a>
    </div>
  </div>
</div>
</Col>
<Col md={4} xs={12} lg={4} className="fun-card">
<div class="card h-100" style={{width: "18rem"}} >
  <img src={Simon_Image} class="card-img-top" alt="Simon-pic" />
  <div class="card-body">
    <h5 class="card-title">Simon_Game</h5>
    <p class="card-text">This is a fun and memory game Consisting of four colors. It tests your memory and gives you joy.It is designed using javascript.</p>
    <div style={{textAlign:"center"}}>
    <a href="https://gunji-manasa.github.io/Simon-Game/" className="card-button" class="btn">Play</a>
    </div>
  </div>
</div>
</Col>
 </Row>
<Row className="fun-row2 "  >
<Col md={4} xs={12} lg={4} className="fun-card">
<div class="card h-100 card_row2"  style={{width: "18rem"}} >
  <img src={Keep_Notes} class="card-img-top" alt="Notes-pic" />
  <div class="card-body">
    <h5 class="card-title">Keep Note</h5>
    <p class="card-text">It is a simple interface which enables to add notes. It is designed using React.js.</p>
    <div style={{textAlign:"center"}}>
    <a href="https://gunji-manasa.github.io/Keep-Note/" className="card-button" class="btn">Note it</a>
    </div>
  </div>
</div>
</Col>
</Row>
</Container>
</div>
  )
}
export default Card;