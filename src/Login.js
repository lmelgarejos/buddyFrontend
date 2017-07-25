import React, { Component } from 'react';
import LoginButton from './LoginButton';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            Buddy
          </h2>
          <p className="Login-intro">
            A carpool app to drive with a friend to work.
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;
