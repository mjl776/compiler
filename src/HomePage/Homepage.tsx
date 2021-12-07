import React from 'react';
import "./Homepage.css";
import ViewPosts from '../posts/viewPosts';

const HomePage = () => {
    return (
        <div className = "home-page-container">
            <ViewPosts></ViewPosts>
        </div>
    );
};


export default HomePage;