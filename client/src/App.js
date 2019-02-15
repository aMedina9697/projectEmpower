import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Login from './components/Login'
import Profile from "./pages/Profile";
import logo from './logo.svg';
import Products from "./pages/Products";
import Notes from "./pages/Notes";
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
const Auth = new AuthService();

library.add(faCircle);

class App extends Component {

  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
        <Router>
          <div>
            <NavTabs />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Notes" component={Notes} />
          </div>
          </Router>
      </div>
    );
  }
}


export default withAuth(App);

/*let eyesPic = document.createElement("img");
eyesPic.src = "../assets/eyes.png";
let browsPic = document.createElement("img");
browsPic.src = "../assets/brows.png";
let lipsPic = document.createElement("img");
lipsPic.src = "../assets/lips.png";
let nosePic = document.createElement("img");
nosePic.src= "../assets/nose.png";

function Face() {
return(

<div class="main-body">
<div id= "browsBox"></div>
<div id= "eyesBox"></div>
<div id= "noseBox"></div>
<div id= "lipsBox"></div>
</div>
)};

Face();

$("browsBox").append("browsPic");
$("eyesBox").append("eyesPic");
$("noseBox").append("nosePic");
$("lipsBox").append("lipsPic");

 */
