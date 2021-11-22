import React from 'react';
import './signUp.css';

const SignUp = () => {
    return (
      <div>
          <div className = "sign-up-page-title">
              Sign Up
          </div>
          <div className = "sign-up-slogan">
                Welcome to the sign up page!
          </div> 
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Email"/>
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "Password"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Username"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "First Name"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Last Name"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Github"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "linkedin"/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Instagram"/>
          </div>
          <div className = "signup-button-outside-border">
              <button className = "signup-button">
                  Sign up
              </button>
          </div>
      </div>
    );
}

export default SignUp;