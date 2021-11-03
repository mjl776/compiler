import React from 'react';
import './App.css';
import HomePage from "./HomePage/Homepage"
import SignIn from "./authentication/signIn"
import SignUp from "./authentication/signUp"

const App = () => {
  return (
    <div className="App">
      <HomePage></HomePage>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
