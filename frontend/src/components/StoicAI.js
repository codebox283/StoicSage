import React, { useEffect, useState } from 'react';
import img1 from '../assets/marcus1.png';
import img2 from '../assets/epictetus1.jpg';
import img3 from '../assets/miyamoto3.jpg';
import star from '../assets/ai-star.png';
import { Link } from 'react-router-dom';
import '../styles/Discover.css';
import '../styles/StoicAI.css';

function StoicAI() {
    // Array of data for the cards
    const stoics = [
        { id: 1, name: 'Marcus Aurelius', imgSrc: img1, description: '"You have power over your mind - not outside events. Realize this, and you will find strength. The happiness of your life depends upon the quality of your thoughts; therefore guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature."' },
        { id: 2, name: 'Miyamoto Musashi', imgSrc: img2, description: '"Think lightly of yourself and deeply of the world. When you find meaning in your actions, they bring profound joy and purpose, infusing even the most mundane tasks with significance. Let your focus be on contributing to the world, for therein lies true fulfillment."' },
        { id: 3, name: 'Seneca the Younger', imgSrc: img3, description: '"True happiness is to enjoy the present, without anxious dependence upon the future; not to amuse ourselves with either hopes or fears, but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing."' }
    ];

    // State to manage visibility of each card
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
        }, { threshold: 0.5 }); // Adjust threshold as needed

        // Observe each card element
        document.querySelectorAll('.SCard').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='StoicAIContainer'>
            <div className='AI-head'>
                <p>Try Stoic AI</p>
                <h1>Stoic Solutions Curated Just for You</h1>
            </div>
            <div className="CardsContainer">
                {stoics.map(stoic => (
                    <div key={stoic.id} id={`card-${stoic.id}`} className="SCard">
                        {/* <img src={stoic.imgSrc} alt={stoic.name} /> */}
                        <Link to='/chat'>
                        <div className={`CardDetails fade-in-section ${visibleCards.includes(`card-${stoic.id}`) ? 'is-visible' : ''}`}>
                            
                            <p>{stoic.description}</p>
                            <h4>- {stoic.name}</h4>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
            <p id='end-p'>*Click on the quotes to open StoicAI</p>
        </div>
    );
}

export default StoicAI;
