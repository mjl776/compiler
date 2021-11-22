import React from 'react';
import './signIn.css';

const SignIn = () => {
    return (
      <div>
          <div className = "sign-in-page-title">
              Login Page
          </div>
          <div className = "sign-in-slogan">
                Welcome to the sign in page!
          </div> 
          <div className = "email-box-outside-border">
            <input type = "text" className = "email-box" placeholder = "Email"/>
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "Password"/>
          </div>
          <div className = "login-button-outside-border">
              <button className = "login-button">
                  Login
              </button>
          </div>
      </div>
    );
}

export default SignIn;