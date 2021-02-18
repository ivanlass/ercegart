import React from 'react'
import '../App.css';
import logo from '../images/logo.png'



function HeroSm() {

  return (
    <div className="hero" style={{height:"300px"}}>

      <div className="hero-text-wrapper">
        <img className="logo" src={logo} alt="logo" style={{ width: 450 }} />
      </div>
    </div>
  );
}

export default HeroSm;
