import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
           <Link to = "/home" className = "homeNavBar">Acceuil</Link>
           <Link to = "/about" className = "aboutNavBar">A propos</Link>
           <Link to = "/" className = "aboutNavBar">ToDoList</Link>
        </nav>
    )
}

export default Navbar;
