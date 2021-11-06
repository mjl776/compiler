import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreatePost from './posts/createPost';
import Nav from './Nav/Nav';
import signIn from './authentication/signIn';
import signUp from './authentication/signUp';
import HomePage from "./HomePage/HomePage" 
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav> 
        <Switch>
          <Route  path='/' exact component={HomePage}></Route>
          <Route  path='/signIn' component={signIn}></Route>
          <Route  path='/signUp' component={signUp}></Route>
          <Route  path='/posts' component={CreatePost}></Route>

			</Switch>
      </div>
     
    </Router>
  );
}

export default App;

