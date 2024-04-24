// src/Navbar.js

import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if using links
import logoImage from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logoImage} alt="Logo"/>
      </div>
      {/* <ul className="nav-links"> 
        <li><Link to="/" className="nav-link-item">Home</Link></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
