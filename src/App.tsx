import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CreateAccountPage from './pages/CreateAccountPage';
import VerificationPage from './pages/VerificationPage';
import HomePage from './pages/HomePage';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Redirect to="/create-account" />
              <HomePage />
            </Route>
            <Route exact path="/create-account">
              <CreateAccountPage />
            </Route>
            <Route path="/verify">
              <VerificationPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
