import React, { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import "./Nav.css"

const SignedIn = () => {
    // Auth
    const [user, setUser]: any = useState({});
    // signs user in 
    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser) {
            setUser(currentUser);
        }
    });

    return (     
        <nav>      
            { !user && <Link className = "link" to = "/sign-in"> <motion.li whileHover = {{ scale: 1.1 }}> Sign In </motion.li> </Link> }
        </nav>    
    );
    
} 

export default SignedIn;