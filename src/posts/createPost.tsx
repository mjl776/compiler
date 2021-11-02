import  React, { useState, useEffect } from 'react';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import firebase from '../firebase/firebase'


const CreatePost = () => {
    // Initialize values to be used using useState in const's
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostText, setNewPostText] = useState("");
    const db = firebase.firestore();
    // Initialize values for code 
    const createPost = async () => {
        
    }


    return (
        <div>
            test
        </div>
    );
}

export default CreatePost;
