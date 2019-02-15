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
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar)


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

