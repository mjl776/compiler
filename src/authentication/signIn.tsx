import React from 'react';
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './signIn.css';
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser]: any = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser)
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user.user.email);
    } catch (error: any) {
      console.log(error.message);
    }
  };
    return (
      <div>
          <div className = "sign-in-page-title">
              Sign In
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "username..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            
            />
          </div>
          <div className = "password-box-outside-border">
            <input type = "text" className = "password-box" placeholder = "password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            
            />
          </div>
          <div className = "login-button-outside-border">
              <button className = "login-button" onClick={login}>
                  Login
              </button>
              <h4> User Logged In: </h4>
              {user?.email}

          </div>
      </div>
      
    );
}

export default SignIn;