import React from 'react';
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Nav  from "./NavBar/Nav"
import SignIn from "./authentication/signIn"
import HomePage from "./HomePage/Homepage"
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
            <Route path = "/" exact component={HomePage}/>
            <Route path = "/Sign-in" component={SignIn}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
