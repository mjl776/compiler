import React from 'react';
import './App.css';
import HomePage from "./HomePage/Homepage"
import SignIn from "./authentication/signIn"

const App = () => {
  return (
    <div className="App">
      <HomePage></HomePage>
      <SignIn></SignIn>
    </div>
  );
}

export default App;
