import React from 'react';
import "./Homepage.css";
import ViewPosts from '../posts/viewPosts';

const HomePage = () => {
    return (
        <div className = "container">
            <div className = "blog-posts-title">
                Blog Posts
            </div>
            <ViewPosts></ViewPosts>
        </div>
    );
};


export default HomePage;