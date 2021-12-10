import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import NotSignedIn from "./not_Signed_in_components"
import SignOut from "./SignOut";
import "./Nav.css"
import { auth } from '../firebase/firebase'; 
import { useAuthState } from 'react-firebase-hooks/auth';

const Nav = () => {

    const [user] = useAuthState(auth);
  
    return (
                <div className = "container">
                    <div className = "compiler">compiler</div>
                        <nav>
                            <ul>
                                <SignOut></SignOut> 
                                { !user && <NotSignedIn></NotSignedIn>  }
                                <Link className = "link" to = "/"><motion.li whileHover = {{ scale: 1.1 }}>  Explorer Page </motion.li> </Link>
                                <Link className = "link" to = "/posts">  <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                                <Link className = "link" to = "/users">  <motion.li whileHover = {{ scale: 1.1 }}> Users </motion.li> </Link>
                            </ul>
                        </nav>
                </div>
    );
}

export default Nav;