import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="flex-container">
          <p>paragraph</p>
          <p>another paragraph</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
