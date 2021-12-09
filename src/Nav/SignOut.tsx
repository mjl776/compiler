import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import "./Nav.css"

const SignOut = () => {
    // Auth
    const [user, setUser]: any = useState({});
    // signs user in 
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            setUser(currentUser);
        }
    });

    const out = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (     
        <nav>      
            <Link className = "link" to = "/sign-in" onClick= {out}> <motion.li whileHover = {{ scale: 1.1 }}> Sign Out </motion.li> </Link> 
        </nav>    
    );
    
} 

export default SignOut;