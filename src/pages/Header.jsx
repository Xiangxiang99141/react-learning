import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/styles/Header.css';

function Header() {
    return (
        <nav className="header">
            {/* <span><Link to="/">Home</Link></span> | <span><Link to="/about">About</Link></span> */}
            {/*NavLink 可以傳遞isActive參數*/}
            <span><NavLink className={({isActive}) => (isActive? "active" : "")} to="/">Home</NavLink></span> {" "} | {" "} <span><NavLink className={({isActive}) => (isActive? "active" : "")} to="/about">About</NavLink></span>
        </nav>
    );
}

export default Header;
