import React from 'react';

import { AuthUserContext } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import Nav from "../Nav";
import "./style.css";
import { renderComponent } from 'recompose';
import logo from "./logo.png";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        {/* <PasswordForgetForm /> */}
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>

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