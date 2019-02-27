import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Nav from "../Nav";
import "./style.css";
import { renderComponent } from 'recompose';
import logo from "./logo.png";

const AccountPage = () => (
  <div>
    <img src={logo} id="logoPic" alt="logo" />
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>your account</h1>

          <h3>{authUser.email}</h3>
          {/* <PasswordForgetForm /> */}
          <br>
          </br>
          <PasswordChangeForm />
        </div>
      )}

    </AuthUserContext.Consumer>
    <Nav />
  </div>
);

// render() {
//   <div>
//     <br />
//     <br />
//     <Nav />
//   </div>
// };

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);