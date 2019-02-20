import React, { Component } from "react";
import "../styles/profile.css";
import brows from "../assets/brows.png";
import eyes from "../assets/eyes.png";
import nose from "../assets/nose.png";
import lips from "../assets/lips.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends Component {
  render() {
    return (
            <div className= "mainBody">
      <div id="foreheadCircle"><FontAwesomeIcon icon="star" /></div>
      <br/>
      <br/>
     <img src={brows} id ="browsPic" alt="eyebrows"/>
     <br/>
     <img src={eyes} id ="eyesPic" alt="eyes"/>
     <br/>
     <br/>
     <img src={nose} id ="nosePic" alt="nose"/> 
     <div id="cheekCircle"><FontAwesomeIcon icon="star" /></div>
     <br/>
     <br/>
     <img src={lips} id ="lipsPic" alt="lips"/>
     </div>
    )
    
  }
}

export default Profile;
