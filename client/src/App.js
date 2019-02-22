import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";
import "./App.css";
//import axios from "axios";
//import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import { faStar, faSmileWink, faPlus, faComment } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import Navigation from './components/Navigation';
//import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import AccountPage from './components/Account';
import AdminPage from './components/Admin';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';

library.add(faSmileWink)
library.add(faPlus)
library.add(faComment)
library.add(faStar)


function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <hr />

        <Route exact path={ROUTES.LANDING} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Nav />
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/products/:id" component={Detail} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthentication(App);
