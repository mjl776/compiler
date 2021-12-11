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
  const usersCollectionRef = collection(db, "users");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [userID, setUserID]: any = useState(null);
  const [url, setUrl]: any = useState(null);
  var history = useHistory();

// File upload
const onFileChange = async (event: any) => {
  const file = event.target.files[0];
  setFile(file);
  setFileName(file.name);
};

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then(async cred => {
        const post = await addDoc(usersCollectionRef, {username: newUserName, linkedin: newLinkedIn, 
        github: newGitHub, instagram: newInstagram, user_id: cred.user.uid, profileURL: ""})
      });

    } catch (error: any) {
      console.log(error.message);
    }
  };

  const photo_db_post = async(uid: any, id: any ) => {
    if (!file) return;
    // Listen for state changes, errors, and completion of the upload.
    const storageRef = ref(storage, "profile-photos/" + uid + "/" + "profile_pic" + "/" + fileName);
    const uploadFile = uploadBytesResumable(storageRef, file);
    uploadFile.on('state_changed',
            (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                console.log('Upload is paused');
                break;
                case 'running':
                console.log('Upload is running');
                break;
            }
            }, 
            (error) => {
                console.log(error);
            }, 
            async () => {
                await getDownloadURL(uploadFile.snapshot.ref).then((downloadURL)=> {
                  setUrl(downloadURL);
                }).then(() => {
                    history.push("/");
                });
            },

        );
  }

    return (
      <div>
          <div className = "sign-up-page-title">
              Sign Up
          </div>
          <div className = "sign-up-slogan">
                Welcome to the sign up page!
          </div> 

            <div className = "create-photo-slogan">
                Insert any profile photo Below: 
            </div> 

            <div>
                <input type="file" className="input"  onChange = {onFileChange}/>
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
              <motion.button whileHover = {{ scale: 1.1 }} className = "signup-button" onClick={register}>
                  Sign up
              </motion.button>
          </div>
      </div>
    );
}

export default SignUp;