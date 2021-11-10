import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"

const Nav = () => {
    return (
        <header>
            <div className = "compiler">Compiler</div>
                <div className = "container">
                    <nav>
                        <ul>  
                            <Link to = "/"> <motion.li whileHover = {{ scale: 1.1 }}> Explorer Page </motion.li> </Link> 
                            <Link to = "/sign-in"> <motion.li whileHover = {{ scale: 1.1 }}> Sign In </motion.li> </Link> 
                            <Link to = "/sign-up"> <motion.li whileHover = {{ scale: 1.1 }}> Sign Up </motion.li> </Link> 
                            <Link to = "/posts"> <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                        </ul>
                    </nav>
                </div>
        </header>
    );
}

export default Nav;