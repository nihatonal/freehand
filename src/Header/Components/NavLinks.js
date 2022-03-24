import React from "react";
import { NavLink } from 'react-router-dom';


import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <div className={`nav-items ${props.className}`}>
            <NavLink className="nav-item" to='/'>Home</NavLink>
            <NavLink className="nav-item" to='/'>Portfolio</NavLink>
            <NavLink className="nav-item" to='/'>Pages</NavLink>
            <NavLink className="nav-item" to='/'>Blog</NavLink>
        </div>
    )
}

export default NavLinks;