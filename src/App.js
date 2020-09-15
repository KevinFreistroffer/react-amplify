import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
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

        <Switch>
          <Route path="/view1">View1</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
