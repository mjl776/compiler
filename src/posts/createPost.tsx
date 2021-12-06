import  React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
    where,
    query,
    getDocs
} from "firebase/firestore";
import {db, auth } from '../firebase/firebase'
import "./createPost.css"
import { motion } from 'framer-motion'
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from '@firebase/storage';
import { uploadBytesResumable } from 'firebase/storage';
import {
    onAuthStateChanged,
  } from "firebase/auth";

const CreatePost = () => {
    // Initialize values to be used using useState in const's
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [photoUrl, setPhotoUrl] = useState(null);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [userName, setUserName] = useState("");

    // Auth
    const [user, setUser]: any = useState({});
    const [uid,setUID]: any = useState(null);

// signs user in 
onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
        setUser(currentUser);
        setUID(currentUser.uid);
    }
});

// Intialize user collection reference 
const postsCollectionRef = collection(db, "posts");


// pull in username of current user

const onFileChange = async (event: any) => {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file.name);
};



    const createPost = async () => {
        if (!file) return;
            // Listen for state changes, errors, and completion of the upload.
            const storageRef = ref(storage, "post-photos/" + user.uid + "/" + newPostTitle + "/" + fileName);
            const uploadFile = uploadBytesResumable(storageRef, file);
            var url = "";
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
                            DB_post(downloadURL);
                        });
                    },

                );
                
            }   


            // post photos to db
            const DB_post = async(url) =>{
                if (url==null) {
                    return;
                }
                await addDoc(postsCollectionRef, {postTitle: newPostTitle, postText: newPostText, author: newAuthor, category: newCategory, photoURL: url, date: Date.now(), author_uid: uid })
            }

    return (
        <div className="post-form">

            <div className = "create-post-title">
                Create a new post
            </div>     
                  
            <div className = "create-post-slogan">
                Welcome to the create a new post page!
            </div> 

            <input type="file" className="input"  onChange = {onFileChange}/>

            <div className = "text-field-posts">
                <input 
                    className = "create-post-title-box"
                    type = "text"
                    placeholder = "   Post Title"
                    onChange = {(event) =>{
                        setNewPostTitle(event.target.value);
                    }}
                />
            </div>

            <div className = "text-field-posts">
                <textarea
                    placeholder="   Post Text"
                    onChange = {(event) =>{
                        setNewPostText(event.target.value);
                    }}
                >
                </textarea>
            </div>

            <div className = "text-field-posts">
                <input 
                    type = "text"
                    placeholder = "   Post Category"
                    className = "create-post-title-box"
                    onChange = {(event) =>{
                        setNewCategory(event.target.value);
                    }}
                /> 
            </div>

            <div className = "text-field-posts">
                <input 
                    type = "text"
                    placeholder = "   Author"
                    className = "create-post-title-box"
                    onChange = {(event) =>{
                        setNewAuthor(event.target.value);
                    }}
                /> 
            </div>
            <div className= "create-post-button-outside-border">
                <motion.button whileHover = {{ scale: 1.1 }} onClick={createPost} className = "create-post-button"> Create Post</motion.button>         
            </div>
        </div>
    );
}

export default CreatePost;
