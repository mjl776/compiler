import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"
import "./viewPosts.css"
import { Link } from "react-router-dom";
import photo from "./placeholder.png"
const ViewPosts = () => {
    // The variable for usestate needs to have a declared type
    // so when we pull data for usestate, the variables can decide what type they need
    // we use type "any" here to clear any confusing errors
    // and we also use it in our html 
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const postsCollectionRef = collection(db, "posts");
        const getPosts = async () => {
            // Logic from getting the users from FireBase
            const data = await getDocs(postsCollectionRef);

           setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
           
           
        }
        getPosts();
    }, [])

    return (
        <div className = "view-posts-container"> 
            <div className = "blog-posts-title">
                Blog Posts
            </div>
            <div className = "outside-border-searchbar">
                <input className = "author-searchBar" placeholder="Name ..." />
            </div>
                {posts.map((post: any) => {
                    return (
                        <Link className = "posts" to = { "/posts/" + post.id }>
                            <div className = "outside-border-posts"> 
                                <div className = "inside-border-posts">
                                    <div className = "post-content" >
                                    <div>
                                        <img src={photo} className = "view-posts-photo" alt= "placeholder"/>
                                    </div>
                                        <div className = "post-title-view-posts">
                                            { post.postTitle }
                                        </div>
                                        <div className = "post-author-view-posts">
                                            {post.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
            })}
        </div>
    );
}

export default ViewPosts;