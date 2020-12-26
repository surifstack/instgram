import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <nav>
    <div className="nav-wrapper" style={{color : "black"}}>
      <NavLink to="/" className="brand-logo left">Instagram</NavLink>
      <ul id="nav-mobile" className="right">
        <li><NavLink to="/signin">Sign In</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/post">Create Post</NavLink></li>
      </ul>
    </div>
  </nav>
    )
    
}

export default Header
