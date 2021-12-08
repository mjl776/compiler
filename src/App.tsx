import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CreatePost from './posts/createPost';
import Nav from './Nav/Nav';
import signIn from './authentication/signIn';
import signUp from './authentication/signUp';
import HomePage from "./HomePage/Homepage";
import HomePage2 from "./HomePage2/HomePage2";
import SinglePost from './posts/singlePost';
import viewProfile from './viewProfile/viewProfile';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/city-wave.gif'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
      <div className="App">
      <Route path="/" exact component={HomePage2}></Route>
      <Nav></Nav>
        <Switch>
            <Route path="/explore-page" exact component={HomePage}>
            </Route>
            <Route path="/sign-in" component={signIn}></Route>
            <Route path="/sign-up" component={signUp}></Route>
            <Route path="/users" component={viewProfile}></Route>
            <Route exact path="/posts" component={CreatePost}></Route>
            <Route path= "/posts/:id" component={SinglePost}></Route>
        </Switch>
      </div> 
      </div>
    </Router>
  );
}

export default App;

