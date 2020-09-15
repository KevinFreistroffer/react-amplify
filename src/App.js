import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

function NavBar(props) {
  return <nav>
    <ul>
      <li><Link to="/view1">View1</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
}

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
