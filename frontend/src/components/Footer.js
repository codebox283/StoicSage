import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {

    return (
        <div className='Footer'>
            <p>&copy; 2024 - All rights reserved</p>
            {/* <p>Check out more here</p> */}
            <ul id="FNavbar">
                <Link to='/'><li>Home</li></Link>
                <Link to='/discover'><li>Discover</li></Link>
                <Link to='/blogs'><li>Blogs</li></Link>
                <Link to='/'><li>StoicAI</li></Link>
            </ul>
        </div>
    );
}

export default Footer;