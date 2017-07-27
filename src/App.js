import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import hola from './hi.js';

const authorizedUrl = 'https://github.com/login/oauth/authorize';
const clientId = "df907319112f1b903786";
const scope = 'user';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Buddy App</h2>
        </div>
        <p className="App-intro">
          <a
            href={`${authorizedUrl}?client_id=${clientId}&scope=${scope}`}
            >
            Login with Github
          </a>
        </p>

      </div>
    );
  }
}

export default App;
