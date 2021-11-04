import React from 'react';
import './signUp.css';

const SignUp = () => {
    return (
      <div>
          <div className = "sign-up-page-title">
              SignUp Page
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "First Name.."/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Last Name.."/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "username..."/>
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "password..."/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "github url.."/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "linkedin url.."/>
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Instagram url.."/>
          </div>
          <div className = "signup-button-outside-border">
              <button className = "signup-button">
                  Signup
              </button>
          </div>
      </div>
    );
}

export default SignUp;