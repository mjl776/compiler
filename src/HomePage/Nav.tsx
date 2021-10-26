import React from 'react';
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"
const Nav = () => {
    return (
        <div className = "container">
            <Router>
                <nav>
                    <ul>
                        <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/"> Explorer Page</NavLink></motion.li>
                        <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Create-Posts"> Posts </NavLink> </motion.li>
                        <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Sign-in"> Sign In </NavLink> </motion.li>
                        <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Sign-up"> Sign up </NavLink> </motion.li>
                        <input type = "text" className = "text-box" placeholder = "Search Restaurants..."/>      
                    </ul>
                </nav>
            </Router>
        </div>
    );
}

export default Nav;