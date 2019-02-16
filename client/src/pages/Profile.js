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

//this should show products for brows or whatever prodcut we have 
// $(".browsPic-view").on("click", function (browsPic) {
//   var id = $(this).data("id");

//   // Send the GET request.
//   $.ajax("/api/face/" + id, {
//       type: "GET"
//   }).then(
//       function () {
//           console.log("viewing", id);
//           // Reload the page to get the updated list
//           location.reload();
//       }
//   );
// });

export default Profile;
