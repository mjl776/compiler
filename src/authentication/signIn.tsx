import React from 'react';
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './signIn.css';
import { auth } from "../firebase/firebase";
import { Link, useHistory } from "react-router-dom";
import {motion} from 'framer-motion'

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser]: any = useState({});
  const history = useHistory();

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
      ).then(()=> {
        history.push('/');
      });
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
          <motion.button whileHover = {{ scale: 1.1 }} className = "login-button" 
                onClick={() => {
                  login();
              	}}
              >
                  Login
              </motion.button>
          </div>
          <div className = "account-maker-redirect-text">
            Need a account? 
          </div>
          <div className = "login-button-outside-border">
              <motion.button whileHover = {{ scale: 1.1 }}className = "login-button">
                <Link className = "link-sign-up" to = "/sign-up"> 
                       Click Here
                </Link>
              </motion.button>
            </div>
      </div>
      
    );
}

export default SignIn;