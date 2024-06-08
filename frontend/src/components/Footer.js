import React, { useState } from 'react';
import '../styles/Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <div className='newsletter'>
                <p>Subscribe to our newsletter</p>
                <input placeholder='Email'></input>
            </div>
            <div className='services'>
                <ul className='lists'>
                    <li>Services</li>
                    <li>Blogs</li>
                    <li>StoicAI</li>
                    <li>Wallpapers</li>
                    <li>QuoteOfTheDay</li>
                </ul>
            </div>
            <div className='socials'>
                <ul className='lists'>
                    <li>Socials</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>GitHub</li>
                    <li>Somwhere else</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;