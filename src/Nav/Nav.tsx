import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import NotSignedIn from "./not_Signed_in_components"
import SignOut from "./SignOut";
import "./Nav.css"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';


const Nav = () => {
  
    return (
                <div className = "container">
                    <div className = "compiler">compiler</div>
                        <nav>
                            <ul>
                                <SignOut></SignOut> 
                                <NotSignedIn></NotSignedIn> 
                                <Link className = "link" to = "/"><motion.li whileHover = {{ scale: 1.1 }}>  Explorer Page </motion.li> </Link>
                                <Link className = "link" to = "/posts">  <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                                <Link className = "link" to = "/users">  <motion.li whileHover = {{ scale: 1.1 }}> Users </motion.li> </Link>
                            </ul>
                        </nav>
                </div>
    );
}

export default Nav;