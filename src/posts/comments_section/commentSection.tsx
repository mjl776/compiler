import { addDoc, collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import  React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db, { auth } from '../../firebase/firebase';
import "./commentSection.css"
import { motion } from 'framer-motion'
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from "react-router-dom";

const CommentsSection = () => {
    const [comment, setComment] = useState(null);
    const [comments, setComments] = useState<any>([]);

    const [userName, setUserName] = useState("");

    // Auth
    const [user, setUser]: any = useState({});
    const [uid,setUID]: any = useState(null);

    // Routing
    const history = useHistory();

    var postid = window.location.pathname.split("/");
    var stringid = postid[postid.length-1].toString();
    const commentsCollectionRef = collection(db, "posts", stringid, "comments");

    // signs user in 
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            setUser(currentUser);
            setUID(currentUser.uid);
            userNameFind(currentUser.uid);
        }
    });

    // collection ref
    function userNameFind (uid) {
        const usersRef = collection(db, "users");
        // queries
        const q = query(usersRef, where("user_id", "==", uid));

        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach(doc => {
            setUserName(doc.data().username);
            })
        })
    }

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const getComments = async () => {
            const data = await getDocs(commentsCollectionRef);
            setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getComments();
        
    }, []);

    const createComment = async () => {
        await addDoc(commentsCollectionRef, {user: userName, user_uid: uid, comment: comment }).then(() => {
            history.push("/posts/" + stringid);
        });
    }

    return (
        <div className = "comments-section-container">
            <div className = "comments-section-title">
                Comments ({ comments.length })
            </div>
            {comments.map((comment: any) => {
            return(
                <div className = "comment-content">
                        <div className = "single-comment-outside">
                            <div className = "single-comment-inside">
                                <div className = "single-comment-name">
                                    {comment.user}
                                </div>
                                <div className = "single-comment-text">
                                    {comment.comment}
                                </div>
                            </div>
                        </div>
                </div>
            );
        })}
            <div className = "comment-creation-div">
                <textarea
                    placeholder="   Comment"
                    onChange = {(event) =>{
                        setComment(event.target.value);
                    }}
                    className = "text-area-for-comments "
                >
                </textarea>

                <div className= "create-post-button-outside-border">
                    <motion.button whileHover = {{ scale: 1.1 }} onClick={createComment} className = "create-post-button"> Post </motion.button>         
                </div>
            </div>
        </div>
    );
}

export default CommentsSection;