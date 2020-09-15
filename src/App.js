import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

function App() {
  return (

    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <main>
          <Switch>
            <Route path="/view1">View1</Route>
            <Route path="/">Home</Route>
          </Switch>
        </main>

      </Router>
    </div>

  );
}

export default App;
