import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import './signUp.css';
import { auth, db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  doc
} from "firebase/firestore";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser]: any = useState({});
  const [newUserName, setUserName] = useState("");
  const [newGitHub, setGitHub] = useState("");
  const [newLinkedIn, setLinkedIn] = useState("");
  const [newInstagram, setInstagram] = useState("");

  const usersCollectionRef = collection(db, "users");

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
      ).then(async cred => {
        const post = await addDoc(usersCollectionRef, {username: newUserName, linkedin: newLinkedIn, 
          github: newGitHub, instagram: newInstagram, user_id: cred.user.uid})
      });

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
            <input type = "text" className = "username-box" placeholder = "email..." 
            
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
            <input type = "text" className = "username-box" placeholder = "username..."
            
            onChange={(event) => {
              setUserName(event.target.value);

            }}
            
            />
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Github"
            onChange={(event) => {
              setGitHub(event.target.value)

            }}
            />
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "linkedin"
            
            onChange={(event) => {
              setLinkedIn(event.target.value)

            }}
            
            />
          </div>
          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Instagram"
            
            onChange={(event) => {
              setInstagram(event.target.value)

            }}
            
            />
          </div>
          <div className = "signup-button-outside-border">
            
              <button className = "signup-button" onClick={register}>
                  Signup
              </button>
              <h4> User Logged In: </h4>
              {user?.email}
          </div>
      </div>
    );
}

export default SignUp;