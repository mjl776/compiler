import React from 'react';
import './App.css';
import HomePage from "./HomePage/Homepage"
import CreatePost from "./posts/createPost"
const App = () => {
  return (
    <div className="App">
      <HomePage></HomePage>
      <CreatePost></CreatePost>
    </div>
  );
}

export default App;
