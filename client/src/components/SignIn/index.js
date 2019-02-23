import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
//import logo from ".../assets/logo.png";
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import "../SignIn/SignIn.css";

const SignInPage = () => (
  <div>
    {/* <img src={logo} id ="logoPic" alt="logo"/> */}
    <h1 id="greeting">hello, gorgeous</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      
      <form onSubmit={this.onSubmit} id="loginform">
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="email address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="password"
        />
        <br/>
        <br/>
        <button disabled={isInvalid} type="submit" id ="inbutt" class="signbutt">
          sign in
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };