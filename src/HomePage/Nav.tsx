import React from 'react';
import {Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import { motion } from 'framer-motion'
import "./Nav.css"
import HomePage from "./Homepage"
import SignIn from "../authentication/signIn"
const Nav = () => {
    return (
        <div className = "container">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/"> Explorer Page</NavLink></motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Create-Posts"> Posts </NavLink> </motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Sign-in"> Sign In </NavLink> </motion.li>
                            <motion.li whileHover = {{ scale: 1.1 }}> <NavLink to = "/Sign-up"> Sign up </NavLink> </motion.li>
                            <input type = "text" className = "text-box" placeholder = "Search..."/>      
                        </ul>
                        

                    </nav>
                    <Route path = "/" exact component = {HomePage} />
                    <Route path = "/Sign-in" exact component = {SignIn} />
                </div>
            </Router>
            
        </div>
    );
}

export default Nav;