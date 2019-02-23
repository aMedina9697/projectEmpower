import React from 'react';
import "./signout.css";
import { withFirebase } from '../Firebase';
import signout from "../Navigation/logout.png";

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    <img src={signout} id ="logouticon" alt="signout"/>
  </button>
);

export default withFirebase(SignOutButton);