import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import user from "./usercircle.png";

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div class="topnav">
    <div class="navlink">
      <Link to={ROUTES.ACCOUNT}><img src={user} id ="usericon" alt="user"/></Link>
    </div>
    <div class="navlink">
      <SignOutButton />
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <ul className="topnav2">
    <div className="">
    </div>
  </ul>
);

export default Navigation;