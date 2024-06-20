import React, { useEffect, useState } from 'react';
import img1 from '../assets/marcus1.png';
import img2 from '../assets/epictetus1.jpg';
import img3 from '../assets/miyamoto3.jpg';
import '../styles/Discover.css';

function Discover() {
    // Array of data for the cards
    const stoics = [
        { id: 1, name: 'Epictetus', imgSrc: img1, description: 'a Greek Stoic philosopher whose teachings on inner freedom and the dichotomy of control are captured in the "Discourses" and the "Enchiridion."' },
        { id: 2, name: 'Marcus Aurelius', imgSrc: img2, description: 'Roman Emperor and Stoic philosopher known for his reflective work "Meditations," which emphasizes personal virtue and self-discipline.' },
        { id: 3, name: 'Miyamoto Musashi', imgSrc: img3, description: 'legendary Japanese swordsman and strategist, famed for his book "The Book of Five Rings" and his philosophy on mastery and mindfulness.' }
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
        document.querySelectorAll('.Card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='Discover'>
            <div className='Discover-head'>
                <p>Find Your Stoics</p>
                <h1>Discover Esteemed Stoics Of The Past</h1>
            </div>
            <div className="CardsContainer">
                {stoics.map(stoic => (
                    <div key={stoic.id} id={`card-${stoic.id}`} className="Card">
                        <img src={stoic.imgSrc} alt={stoic.name} />
                        <div className={`CardDetails fade-in-section ${visibleCards.includes(`card-${stoic.id}`) ? 'is-visible' : ''}`}>
                            <h4>{stoic.name}</h4>
                            <p>{stoic.description}</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Discover;
