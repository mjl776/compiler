import React from 'react';
import {Link, BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"
const Nav = () => {
    return (
        <header>
            <div className = "compiler">Compiler</div>
            <div className = "container">
                        <div>
                            <nav>
                                <ul>
                                    <Link to = "/"> <motion.li whileHover = {{ scale: 1.1 }}> Explorer Page</motion.li></Link>
                                    <Link to = "/Create-Posts"> <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                                    <Link to = "/Sign-in"> <motion.li whileHover = {{ scale: 1.1 }}> Sign In </motion.li> </Link> 
                                    <Link to = "/Sign-up"> <motion.li whileHover = {{ scale: 1.1 }}> Sign up </motion.li> </Link> 
                                    <input type = "text" className = "text-box" placeholder = "Search..."/>      
                                </ul>
                            </nav>
                        </div>
            </div>
        </header>

    );
}

export default Nav;