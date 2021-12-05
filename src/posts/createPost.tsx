import  React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
} from "firebase/firestore";
import db from '../firebase/firebase'
import "./createPost.css"
import { motion } from 'framer-motion'
import { storage } from "../firebase/firebase";
import { ref, getDownloadURL } from '@firebase/storage';
import { uploadBytesResumable } from 'firebase/storage';

const CreatePost = () => {
    // Initialize values to be used using useState in const's
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const onFileChange = async (event: any) => {
        const file = event.target.files[0];
        setFile(file);
        setFileName(file.name);
    };
    

    // Intialize user collection reference 
    const postsCollectionRef = collection(db, "posts");

    // return values for our database  
    const createPost = async () => {
        if (!file) return;

        if (newAuthor != "" && newPostText!= "" && newPostTitle != "") {
            console.log(fileName);
            const storageRef = ref(storage, "post-photos/" + fileName);
            const uploadFile = uploadBytesResumable(storageRef, file);

            //Firebase documentation upload function example: 

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion

            uploadFile.on('state_changed', 
                (snapshot) => {
                // Observe state change events such as progress, pause, and resume
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
                    // Handle unsuccessful uploads
                    console.log(error);
                }, 
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                async() => {
                    const url = await getDownloadURL(uploadFile.snapshot.ref);
                    console.log('File available at', url);
                    setPhotoUrl(url);
                }
                
            );

            await addDoc(postsCollectionRef, {postTitle: newPostTitle, postText: newPostText, author: newAuthor, category: newCategory, photoURL: photoUrl })
        }
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
