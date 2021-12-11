import React from 'react';
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import './signUp.css';
import { auth, db, storage } from "../firebase/firebase";

import {
  collection,
  addDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import {motion} from 'framer-motion';
import { useHistory } from "react-router-dom"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [newUserName, setUserName] = useState("");
  const [newGitHub, setGitHub] = useState("");
  const [newLinkedIn, setLinkedIn] = useState("");
  const [newInstagram, setInstagram] = useState("");
  const [newProfileDescription, setProfileDescription] = useState("");
  const [newJob, setJob] = useState("");
  const usersCollectionRef = collection(db, "users");
  var history = useHistory();

// File upload

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then(async cred => {
        const post = await addDoc(usersCollectionRef, {username: newUserName, linkedin: newLinkedIn, 
        github: newGitHub, instagram: newInstagram, user_id: cred.user.uid, profile_description: newProfileDescription, job: newJob})
      }).then(() => {
        history.push("/");
      });

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
          
          <div className = "text-field-profile">
                <textarea
                    placeholder="   Profile Description"
                    onChange = {(event) =>{
                        setProfileDescription(event.target.value);
                    }}
                    className = "text-area-for-posts"
                >
                </textarea>
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

          <div className = "username-box-outside-border">
            <input type = "text" className = "username-box" placeholder = "Job Title..." 
            
            onChange={(event) => {
              setJob(event.target.value);
            }}
            
            />
          </div>

          <div className = "signup-button-outside-border">
              <motion.button whileHover = {{ scale: 1.1 }} className = "signup-button" onClick={register}>
                  Sign up
              </motion.button>
          </div>
      </div>
    );
}

export default SignUp;