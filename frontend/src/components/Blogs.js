import React, { useState } from 'react';
import '../styles/Blogs.css';
import image1 from '../assets/1-min.png';
import image2 from '../assets/2-min.png';
import image3 from '../assets/3-min.png';
import image4 from '../assets/4-min.png';
import image5 from '../assets/5-min.png';
import image6 from '../assets/6-min.png';

function Blogs() {
    const initSlider = () =>{
        const slideButtons = document.querySelectorAll(".slider-wraper .slide-button");
        
    }

    return (
        <div className="Blogs">
            <p>More on Stoicism</p>
            <h1>Learn more about Stoicism through our daily blogs.</h1>
            <div className="slider-wraper">
                {/* <button id='prev-slide' className='slide-button material-symbols-rounded'>chevron_left</button> */}
                <div className='img-list'>
                    <img className='img-item' src={image1} alt=''></img>
                    <img className='img-item' src={image2} alt=''></img>
                    <img className='img-item' src={image3} alt=''></img>
                    <img className='img-item' src={image4} alt=''></img>
                    <img className='img-item' src={image5} alt=''></img>
                    <img className='img-item' src={image6} alt=''></img>
                </div>
                {/* <button id='prev-slide' className='slide-button material-symbols-rounded'>chevron_right</button> */}
            </div>
        </div>
    );
}

export default Blogs;
