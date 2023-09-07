
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
// import { act } from '@testing-library/react';
function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg fixed-top"  >
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white"}}>
      <span class="navbar-toggler-icon "  ></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup" >
      <div class="navbar-nav"  >
      

        <a class="nav-link"  href="#sec1"><HomeOutlinedIcon className='nav-icon'  />Home</a>
        <a class="nav-link"  href="#fun"><TagFacesIcon className='nav-icon'/>Fun</a>
        <a class="nav-link"  href="#about"><PersonOutlineOutlinedIcon className='nav-icon' />About</a>
        <a class="nav-link"  href="#feedback"><FeedbackOutlinedIcon className='nav-icon' />Feedback</a>
       
      </div>
    </div>
  </div>
</nav>
    );
}
export default Navbar;
