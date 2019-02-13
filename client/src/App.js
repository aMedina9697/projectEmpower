import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Notes from "./pages/Notes";
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle)


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Notes" component={Notes} />
      </div>
    </Router>
  );
}

export default App;



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
