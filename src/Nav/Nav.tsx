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
                            <motion.li whileHover = {{ scale: 1.1 }}> <Link to = "/"> Explorer Page </Link></motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <Link to = "/sign-in"> Sign In </Link> </motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <Link to = "/sign-up"> Sign Up </Link> </motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <Link to = "/posts"> Posts </Link> </motion.li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}

export default Nav;