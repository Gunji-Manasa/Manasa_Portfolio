import React from "react";
import {PiPaperPlaneRightFill} from "react-icons/pi";
function MyDescription(){
    return(
   <div  style={{color:"white"}}>
   
    <p  style={{fontSize:"20px"}}>
        Hi Everyone, I'm <b className="blue">Manasa</b> from <b className="blue">Hyderabad,Telangana.</b>
    <br /><br />
        I recently graduated with a Bachelor's degree <b className="blue">(B.Tech)</b> in <b className="blue">Computer Science and Engineering</b> from <b className="blue">Aurora's Technological and Research Institute</b> affiliated to <b className="blue">JNTUH.</b>
   <br /><br />
        I'm very passionate in <span className="blue">coding</span> and <span className="blue">learning new Technologies.</span>
    <br /><br />
        Apart from <span className="blue">studies</span>, I would like to do
        
    </p>
    <ul className="list">
        <li className="about-activity">
           <PiPaperPlaneRightFill style={{marginRight:"5px"}} /> Playing Games
        </li>
        <li className="about-activity">
        <PiPaperPlaneRightFill style={{marginRight:"5px"}}/> Singing
        </li>
        <li className="about-activity">
        <PiPaperPlaneRightFill style={{marginRight:"5px"}} /> Travelling
        </li>
    </ul>
   </div>
    );
}
export default MyDescription;