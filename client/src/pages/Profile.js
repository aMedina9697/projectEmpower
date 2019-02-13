import React, { Component } from "react";
import "../styles/profile.css";
import brows from "../assets/brows.png";
import eyes from "../assets/eyes.png";
import nose from "../assets/nose.png";
import lips from "../assets/lips.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Bruno Krebs',
        picture: 'https://cdn.auth0.com/blog/profile-picture/bruno-krebs.png',
      },
    };
  }

  render() {
    return <div className= "mainBody">
    (
      <div id="foreheadCircle"><FontAwesomeIcon icon="circle" /></div>
     <img src={brows} id ="browsPic" alt="eyebrows"/>
     <img src={eyes} id ="eyesPic" alt="eyes"/>
     <img src={nose} id ="nosePic" alt="nose"/> 
     <div id="cheekCircle"><FontAwesomeIcon icon="circle" /></div>
     <br/>
     <br/>
     <img src={lips} id ="lipsPic" alt="lips"/>
    );
    </div>
  }
}

export default Profile;
