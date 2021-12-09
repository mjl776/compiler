import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import  photo  from "./placeholder.png"
import "./singleProfile.css"
import { Link } from 'react-router-dom'

const SingleProfile = () => {

    // Gets id of post
    const [user, setUser] = useState<any>([]);

    var postid = window.location.pathname.split("/");
    var stringid = postid[postid.length-1];

    useEffect(() => {
        const docCollectionRef = doc(db, "users", stringid);
        const getUser = async () => {
            const data = await getDoc(docCollectionRef);
            setUser(data.data());
        }
        getUser();
    }, [])

    return (
        <div className = "single-profile-container">
                <div className = "outside-border-profile"> 
                    <div className = "inside-border-profile">
                        <div>{"username: " + user.username}</div>
                        <div> Instragram </div>
                        <div> Github </div>
                        <div> LinkedIn </div>
                    </div>
                </div>
        </div>
    );
}
export default SingleProfile;