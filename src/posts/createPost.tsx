import  React, { useState, useEffect } from 'react';
import {
    collection,
    addDoc,
} from "firebase/firestore";
import db from '../firebase/firebase'
import "./createPost.css"


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

            <div className = "create-post-title">
                Create a New Post
            </div>            

            <p>
                <input 
                    type = "text"
                    placeholder = "Post title..."
                    onChange = {(event) =>{
                        setNewPostTitle(event.target.value);
                    }}
                />
            </p>

            <p>
            <textarea
                className = "post-text"
                placeholder="Post text..."
                onChange = {(event) =>{
                    setNewPostText(event.target.value);
                }}
            >
            </textarea>
            </p>
            <p>
            <input 
                type = "text"
                placeholder = "Author..."
                onChange = {(event) =>{
                    setNewAuthor(event.target.value);
                }}
            /> 
            </p>

            <button onClick={createPost} className = "create-post-button"> Create Post</button>         

        </div>
    );
}

export default CreatePost;
