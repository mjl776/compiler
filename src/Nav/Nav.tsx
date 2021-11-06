import React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"
const Nav = () => {
    return (
        <header className = "navbar">
            <div className = "compiler">Compiler</div>
            <div className = "container">
               
                <nav>
                    <ul>  
                        <Link to = "/"> <motion.li whileHover = {{ scale: 1.1 }}> Explorer Page </motion.li> </Link> 
                        <Link to = "/signIn"> <motion.li whileHover = {{ scale: 1.1 }}> SignIn Page </motion.li> </Link> 
                        <Link to = "/signUp"> <motion.li whileHover = {{ scale: 1.1 }}> SignUp Page </motion.li> </Link> 
                        <Link to = "/posts"> <motion.li whileHover = {{ scale: 1.1 }}> Posts </motion.li> </Link> 
                        <input type = "text" className = "text-box" placeholder = "Search..."/>      
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;