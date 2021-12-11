import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"
//import "./viewPosts.css"
import { Link } from "react-router-dom";

// Profile
import "./viewProfile.css"

// Parallel divs
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

// Motion LI
import { motion } from 'framer-motion'

const ViewProfile = () => {
    // The variable for usestate needs to have a declared type
    // so when we pull data for usestate, the variables can decide what type they need
    // we use type "any" here to clear any confusing errors
    // and we also use it in our html 
    const [posts, setPosts] = useState<any>([]);
    const [postsEven, setPostsEven] = useState<any>([]);

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const postsCollectionRef = collection(db, "users");
        const getPosts = async () => {
        // Logic from getting the posts from FireBase
        const data = await getDocs(postsCollectionRef);

           setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPosts();
        
    }, [])
     const usersRef = collection(db, "users");

    let leftPosts = [];
    let rightPosts: any[]; 

    if (posts.length ==0) {
        leftPosts = [];
        rightPosts = [];
    }

    if (posts.length== 1) {
        leftPosts = posts.slice(0, posts.length);
        rightPosts = [];
    }

    else{ 
        leftPosts = posts.slice(posts.length/2, posts.length);
        rightPosts = posts.slice(0, posts.length/2);
    }   


    return (
        <div className = "view-users"> 
            <div className = "users-all-title">
                Users
            </div>
            <motion.div whileHover = {{ scale: 1.05 }} className = "outside-border-searchbar">
                <input className = "author-searchBar" placeholder="Search for a user ..." />
            </motion.div>
<Row>

<Col span={6}>
    {leftPosts.map((post: any) => {

            return(
                <Link className = "users" to = {"/users/" + post.id}>
                    <motion.div whileHover = {{ scale: 1.05 }} className = "outside-border-users"> 
                        <div className = "inside-border-users">
                            <div className = "user-content" >
                                <div className = "user-title-view" >
                                    { post.username }
                                </div>
                                <div className = "user-category-view" >
                                    { post.job }
                                </div>
                                <div className = "user-category-view" >
                                    { post.profile_description }
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            );
    })}

</Col>

<Col span={6}>
    {rightPosts.map((post: any) => {
            return(
                <Link className = "users" to = {"/users/" + post.id}>
                  <motion.div whileHover = {{ scale: 1.05 }} className = "outside-border-users"> 
                        <div className = "inside-border-users">
                            <div className = "user-content" >
                                <div className = "user-title-view" >
                                    { post.username }
                                </div>
                                <div className = "user-category-view" >
                                    { post.job }
                                </div>
                                <div className = "user-category-view" >
                                    { post.profile_description }
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            );
    })}
</Col>
</Row> 
        </div>
    );
}
export default ViewProfile;