import React from "react";
import InsertCommentIcon from '@mui/icons-material/InsertComment';

import Footer from '../Footer';

import { ConnectMe } from "./ConnectMe";
function Feedback(){
    return(
<div>
    <h1 className="feedbackTitle" >Feedback</h1>
    <p className="feed-text">Please give me your <span className="pink"><b>Feedback.</b></span>
    </p>
    <p  className="feed-text">
    It really <span ><b className="pink">helps</b></span> me in <span className="pink"><b>improving</b></span> this site,
    </p>
    <p className="feed-text">
    and <span className="pink"><b>encourages</b></span> me in doing more such <span className="pink"><b>websites.</b></span>
    </p>
    <h2 style={{color:"white",textAlign:"center"}}>Thank You!</h2>
    <div style={{textAlign:"center",marginTop:"60px"}}>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhAL71FnPY38s-8vyQXH048ykIFUHaoRlQG-g_tarK7AOrSQ/viewform?usp=sf_link" class="btn btn-lg"  ><InsertCommentIcon style={{marginRight:"5px"}} />Feedback</a>
    </div>
    <div style={{textAlign:"center"}}>
    <ConnectMe />
    </div>
    <Footer />
</div>
    );
}
export default Feedback;