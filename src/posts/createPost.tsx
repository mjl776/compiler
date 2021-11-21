import  React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
} from "firebase/firestore";
import db from '../firebase/firebase'
import "./createPost.css"
import { motion } from 'framer-motion'

const CreatePost = () => {
    // Initialize values to be used using useState in const's
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    // Intialize user collection reference 
    const postsCollectionRef = collection(db, "posts");

    // return values for our database  
    const createPost = async () => {
        if (newAuthor != "" && newPostText!= "" && newPostTitle != "") {
            await addDoc(postsCollectionRef, {postTitle: newPostTitle, postText: newPostText, author: newAuthor })
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
