import React, { useEffect, useState } from 'react';
import img1 from '../assets/1-min.png';
import img2 from '../assets/2-min.png';
import img3 from '../assets/3-min.png';
import img4 from '../assets/4-min.png';
import img5 from '../assets/5-min.png';
import img6 from '../assets/6-min.png';
import { Link } from 'react-router-dom';
import '../styles/BlogsMain.css';

function BlogsMain() {
    const stoics = [
        { id: 1, title: 'The Stoic Man: Finding Purpose and True Meaning in Life', imgSrc: img1, description: 'Description 1' },
        { id: 2, title: 'Stoic Wisdom: Overcoming Loneliness and Abandonment for Personal Growth', imgSrc: img2, description: 'Description 2' },
        { id: 3, title: 'The Stoic Man: Finding Purpose and True Meaning in Life', imgSrc: img3, description: 'Description 3' },
        { id: 4, title: 'The Stoic Man: Finding Purpose and True Meaning in Life', imgSrc: img4, description: 'Description 4' },
        { id: 5, title: 'The Stoic Man: Finding Purpose and True Meaning in Life', imgSrc: img5, description: 'Description 5' },
        { id: 6, title: 'The Stoic Man: Finding Purpose and True Meaning in Life', imgSrc: img6, description: 'Description 6' }
    ];

    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleCards(prev => [...prev, entry.target.id]);
                } else {
                    setVisibleCards(prev => prev.filter(id => id !== entry.target.id));
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.BCard').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='BlogsMain'>
            <div className='Blogs-head'>
                <p>Find Your Stoics</p>
                <h1>Discover Esteemed Stoics Of The Past</h1>
            </div>
            <div className="BlogsCardsContainer">
                {stoics.map((stoic, index) => (
                    <div key={stoic.id} id={`card-${stoic.id}`} className="BCard">
                        <img src={stoic.imgSrc} alt={stoic.title} />
                        <div className={`BCardDetails fade-in-section ${visibleCards.includes(`card-${stoic.id}`) ? 'is-visible' : ''}`}>
                            <h4>{stoic.title}</h4>
                            <Link to={`/blogPage/${index % 2 === 0 ? 0 : 1}`}><button>Read More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogsMain;
