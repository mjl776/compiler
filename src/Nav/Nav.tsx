import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"

const Nav = () => {
    return (
                <div className = "container">
                    <div className = "compiler">compiler</div>
                        <nav>
                            <ul>
                                <Link className = "link" to = "/"><motion.li whileHover = {{ scale: 1.1 }}>  Explorer Page </motion.li> </Link>
                                <Link className = "link" to = "/sign-in"> <motion.li whileHover = {{ scale: 1.1 }}> Sign In </motion.li> </Link> 
                                <Link className = "link" to = "/sign-up"> <motion.li whileHover = {{ scale: 1.1 }}>  Sign Up  </motion.li> </Link>
                                <Link className = "link" to = "/posts">  <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                            </ul>
                        </nav>
                </div>
    );
}

export default Nav;