import React, { Component } from 'react';
import './App.css';
import ReactLogo from './logo.svg';

const CloverLogo = 'http://hillhouseconstruction.com/wp-content/uploads/2015/12/Clover.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={CloverLogo} className="App-logo spinning" alt="logo" />
          <img src={ReactLogo} className="App-logo spinning" alt="logo" />
          <h1 className="App-title">Welcome to the React/Redux Clover Crash Course</h1>
        </header>
      </div>
    );
  }
}

export default App;
