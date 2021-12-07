import { collection, getDocs } from 'firebase/firestore';
import  React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import db from '../../firebase/firebase';

const CommentsSection = () => {
    const [comment, setComment] = useState(null);
    const [comments, setComments] = useState<any>([]);

    var postid = window.location.pathname.split("/");
    var stringid = postid[postid.length-2];

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const getComments = async () => {
            const commentsCollectionRef = collection(db, "posts", stringid, "comments");
            const data = await getDocs(commentsCollectionRef);
            setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getComments();
        
    }, []);


    return (
        <div className = "comments-section-container">
            <div className = "comments-section-title">
                Comments: 
            </div>
        {comments.map((post: any) => {
            return(
                <Link className = "posts" to = {"/posts/" + post.id}>
                    <div className = "comments-section-name">
                        {comments.username}
                    </div>
                    <div className = "comments-section-text">
                        {comments.username}
                    </div>
                </Link>
            );
            })}
        </div>
    );
}

export default CommentsSection;