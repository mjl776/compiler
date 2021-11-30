import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import './signUp.css';
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser]: any = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser)      
      setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

    return (
      <div>
          <div className = "sign-up-page-title">
              Sign Up
          </div>
          <div className = "sign-up-slogan">
                Welcome to the sign up page!
          </div> 
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "username..." 
            
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            
            />
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "password..."
            
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            />
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
            
              <button className = "signup-button" onClick={register}>
                  Signup
              </button>
          </div>
          <h4> User Logged In: </h4>
              {user?.email}
      </div>
    );
}

export default SignUp;