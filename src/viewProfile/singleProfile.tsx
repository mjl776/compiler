import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import  photo  from "./placeholder.png"
import "./singleProfile.css"
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-simple-flex-grid';
import Instagram from './instagram.jpg'
import github from './github.png'
import linkedin from './linkedin.png'
import { motion } from 'framer-motion'


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
                        <div className= "single-name">{ user.username }</div>
                        <div className= "single-job">{"job: " + user.job}</div>
                        <div className= "single-description">{user.profile_description}</div>
                        <div className= "single-socials"> Connect with me! </div>
                        <Row align="center">
                            <Col span={2}> <a href= {user.instagram}> <motion.img whileHover = {{ scale: 1.05 }} src={ Instagram } className = "profile-link-image" alt= "placeholder"/> </a> </Col>
                            <Col span={2}> <a href= {user.github}> <motion.img whileHover = {{ scale: 1.05 }} src={ github } className = "profile-link-image" alt= "placeholder"/> </a>  </Col>
                            <Col span={2}> <a href= {user.linkedin}> <motion.img whileHover = {{ scale: 1.05 }}src={ linkedin } className = "profile-link-image" alt= "placeholder"/> </a>  </Col>
                        </Row>
                    </div>
                </div>
        </div>
    );
}
export default SingleProfile;