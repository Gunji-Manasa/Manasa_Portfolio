import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Particle from './components/particles';
import Projects from './components/Fun';
import Header from './components/Home/Header';
import About from './components/About_Page/About';
import Feedback from './components/Feedback/Feedback';


function App() {
  return (
    
    <div>
    <div id='sec1'>
      <div><Navbar /></div>
      <div ><Header /></div>
      </div>
      <section id='fun'><Projects /></section>
      <div id='about'><About /></div>
      <div id='feedback'><Feedback /></div>
       
      <Particle />  
    </div>
  );
}

export default App;
