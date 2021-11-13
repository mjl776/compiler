import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreatePost from './posts/createPost';
import Nav from './Nav/Nav';
import signIn from './authentication/signIn';
import signUp from './authentication/signUp';
import HomePage from "./HomePage/Homepage";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav> 
        <div className = "compiler-slogan"> meet, connect with people in STEM </div>
        <Switch>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/sign-in' component={signIn}></Route>
            <Route path='/sign-up' component={signUp}></Route>
            <Route path='/posts' component={CreatePost}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

