import React, { useEffect, useRef } from 'react';
import '../styles/Blogs.css';
import image1 from '../assets/1-min.png';
import image2 from '../assets/2-min.png';
import image3 from '../assets/3-min.png';
import image4 from '../assets/4-min.png';
import image5 from '../assets/5-min.png';
import image6 from '../assets/6-min.png';
import { Link } from 'react-router-dom';

function Blogs() {
    const imgListRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            const imgList = imgListRef.current;
            if (window.innerWidth > 480) {
                imgList.classList.add('continuous-slide');
            } 
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Blogs">
            <p>More on Stoicism</p>
            <h1>Learn more about Stoicism through our daily blogs.</h1>
            <div className="slider-wraper">
            <Link to='/blogs'>
                <div className="img-list" ref={imgListRef}>
                    <img className='img-item' src={image1} alt=''></img>
                    <img className='img-item' src={image2} alt=''></img>
                    <img className='img-item' src={image3} alt=''></img>
                    <img className='img-item' src={image4} alt=''></img>
                    <img className='img-item' src={image5} alt=''></img>
                    <img className='img-item' src={image6} alt=''></img>
                    {/* Continuous */}
                    <img className='img-item' src={image1} alt=''></img>
                    <img className='img-item' src={image2} alt=''></img>
                    <img className='img-item' src={image3} alt=''></img>
                    <img className='img-item' src={image4} alt=''></img>
                    <img className='img-item' src={image5} alt=''></img>
                    <img className='img-item' src={image6} alt=''></img>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Blogs;
