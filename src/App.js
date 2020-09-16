import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SignUp from './pages/SignUp/SignUp';
import Page from './layout/Page';
import { initialState, AppContext } from './app_context';

function App() {

  const [state, setState] = useState({
    title: 'Kevin Freistroffer',
    setTitle: function (title) {
      setState({ ...state, title });
    }
  });

  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar></NavBar>
          </header>
          <main>
            <Switch>
              <Route path="/sign-up"><SignUp /></Route>
              <Route path="/">Home</Route>
            </Switch>
          </main>

        </Router>
      </div>
    </AppContext.Provider>


  );
}

export default App;
