import  React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
} from "firebase/firestore";
import db from '../firebase/firebase'

const CreatePost = () => {
    // Initialize values to be used using useState in const's
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    // Intialize user collection reference 
    const postsCollectionRef = collection(db, "posts");

    // return values for our database  
    const createPost = async () => {
        await addDoc(postsCollectionRef, {postTitle: newPostTitle, postText: newPostText, author: newAuthor })
    }


    return (
        <div className="post-form">
            <input 
                type = "text"
                placeholder = "Post title..."
                onChange = {(event) =>{
                    setNewPostTitle(event.target.value);
                }}
            />

            <input 
                className = "post-text"
                type = "text"
                placeholder = "Post text..."
                onChange = {(event) =>{
                    setNewPostText(event.target.value);
                }}
            />

            <input 
                type = "text"
                placeholder = "Author..."
                onChange = {(event) =>{
                    setNewAuthor(event.target.value);
                }}
            /> 

            <button onClick={createPost}> Create Post</button>         

        </div>
    );
}

export default CreatePost;
