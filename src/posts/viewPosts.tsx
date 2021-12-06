import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"
import "./viewPosts.css"
import { Link } from "react-router-dom";

import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const ViewPosts = () => {
    // The variable for usestate needs to have a declared type
    // so when we pull data for usestate, the variables can decide what type they need
    // we use type "any" here to clear any confusing errors
    // and we also use it in our html 
    const [posts, setPosts] = useState<any>([]);
    const [postsEven, setPostsEven] = useState<any>([]);

    useEffect(() => {
        // Asynchronous Function from the API Promise. Promise = Binary Result of the API Call

        const postsCollectionRef = collection(db, "posts");
        const getPosts = async () => {
        // Logic from getting the posts from FireBase
        const data = await getDocs(postsCollectionRef);

           setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //    console.log(posts, 26);
        }
        getPosts();
        
    }, [])
    // console.log(posts, 29);
    // console.log(posts[0], 30);

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
        console.log()
    }   

    // console.log(leftPosts, 36);
    // console.log(rightPosts, 37);
    return (
        <div className = "view-posts-container"> 
            <div className = "blog-posts-title">
                Blog Posts
            </div>
            <div className = "outside-border-searchbar">
                <input className = "author-searchBar" placeholder="Name ..." />
            </div>
            <Row>

<Col span={6}>
    {leftPosts.map((post: any) => {

            return(
                <Link className = "posts" key="{post}" to = {"/posts/" + post.id}>
                    <div className = "outside-border-posts"> 
                        <div className = "inside-border-posts">
                            <div className = "post-content"  key = {post.id} >
                            <div  key = {post.photoUrl} >
                                <img src={post.photoURL} className = "view-posts-photo" alt= "placeholder"/>
                            </div>
                                <div className = "post-title-view-posts" key = {post.postTitle} >
                                    { post.postTitle }
                                </div>
                                <div className = "post-author-view-posts"  key = {post.author} >
                                    {post.author}
                                </div>
                                <div className = "post-author-view-posts" key = {post.category}>
                                    {post.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
    })}

</Col>

<Col span={6}>
    {rightPosts.map((post: any) => {
            return(
                <Link className = "posts" to = {"/posts/" + post.id}>
                    <div className = "outside-border-posts"> 
                        <div className = "inside-border-posts">
                            <div className = "post-content" >
                            <div>
                                <img src={ post.photoURL } className = "view-posts-photo" alt= "placeholder"/>
                            </div>
                                <div className = "post-title-view-posts">
                                    { post.postTitle }
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.author}
                                </div>
                                <div className = "post-author-view-posts">
                                    {post.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
    })}
</Col>
</Row> 
        </div>
    );
}
export default ViewPosts;