import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import  photo  from "./placeholder.png"
import "./singlePost.css"
const SinglePost = () => {

    // Gets id of post
    const [post, setPost] = useState<any>([]);

    var postid = window.location.pathname.split("/");
    var stringid = postid[postid.length-1];

    useEffect(() => {
        const docCollectionRef = doc(db, "posts", stringid);
        const getPost = async () => {
            const data = await getDoc(docCollectionRef);
            setPost(data.data());
        }
        getPost();
    }, [])

    return (
        <div className = "single-post-container">
            <div className = "outside-border-post"> 
                <div className = "inside-border-post">
                    <div className = "title">
                        {post.postTitle}
                    </div>
                    <div className = "post-photo">
                        <img src={photo} alt= "placeholder"/>
                    </div>
                    <div className = "author">
                        { "By " + post.author}
                    </div>
                    <div className = "post-text">
                        {post.postText}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SinglePost;