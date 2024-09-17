import React, { useEffect, useState } from 'react';
import img0 from '../assets/marcus1.png';
import img1 from '../assets/epictetus1.jpg';
import img2 from '../assets/miyamoto3.jpg';
import img3 from '../assets/seneca1.jpeg';
import img4 from '../assets/cato1.jpg';
import { Link } from 'react-router-dom';
import '../styles/DiscoverMain.css';

function DiscoverMain() {
    const stoics = [
        { id: 1, name: 'Epictetus', imgSrc: img0, description: 'A Greek Stoic philosopher whose teachings on inner freedom and the dichotomy of control are captured in the "Discourses" and the "Enchiridion."' },
        { id: 2, name: 'Marcus Aurelius', imgSrc: img1, description: 'Roman Emperor and Stoic philosopher known for his reflective work "Meditations," which emphasizes personal virtue and self-discipline.' },
        { id: 3, name: 'Miyamoto Musashi', imgSrc: img2, description: 'Legendary Japanese swordsman and strategist, famed for his book "The Book of Five Rings" and his philosophy on mastery and mindfulness.' },
        { id: 4, name: 'Seneca the Younger', imgSrc: img3, description: 'A Greek Stoic philosopher whose teachings on inner freedom and the dichotomy of control are captured in the "Discourses" and the "Enchiridion."' },
        { id: 5, name: 'Cato the Younger', imgSrc: img4, description: 'Roman Emperor and Stoic philosopher known for his reflective work "Meditations," which emphasizes personal virtue and self-discipline.' },
        // { id: 6, name: 'Miyamoto Musashi', imgSrc: img3, description: 'Legendary Japanese swordsman and strategist, famed for his book "The Book of Five Rings" and his philosophy on mastery and mindfulness.' },
        // { id: 7, name: 'Epictetus', imgSrc: img1, description: 'A Greek Stoic philosopher whose teachings on inner freedom and the dichotomy of control are captured in the "Discourses" and the "Enchiridion."' },
        // { id: 8, name: 'Marcus Aurelius', imgSrc: img2, description: 'Roman Emperor and Stoic philosopher known for his reflective work "Meditations," which emphasizes personal virtue and self-discipline.' },
        // { id: 9, name: 'Miyamoto Musashi', imgSrc: img3, description: 'Legendary Japanese swordsman and strategist, famed for his book "The Book of Five Rings" and his philosophy on mastery and mindfulness.' },
        // { id: 10, name: 'Epictetus', imgSrc: img1, description: 'A Greek Stoic philosopher whose teachings on inner freedom and the dichotomy of control are captured in the "Discourses" and the "Enchiridion."' },
        // { id: 11, name: 'Marcus Aurelius', imgSrc: img2, description: 'Roman Emperor and Stoic philosopher known for his reflective work "Meditations," which emphasizes personal virtue and self-discipline.' },
        // { id: 12, name: 'Miyamoto Musashi', imgSrc: img3, description: 'Legendary Japanese swordsman and strategist, famed for his book "The Book of Five Rings" and his philosophy on mastery and mindfulness.' },
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
        document.querySelectorAll('.DCard').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='DiscoverMain'>
            <div className='Discover-head'>
                <p>Find Your Stoics</p>
                <h1>Discover Esteemed Stoics Of The Past</h1>
            </div>
            <div className="DisCardsContainer">
                {stoics.map((stoic, index) => (
                    <div key={stoic.id} id={`card-${stoic.id}`} className="DCard">
                        <img src={stoic.imgSrc} alt={stoic.name} />
                        <div className={`DCardDetails fade-in-section ${visibleCards.includes(`card-${stoic.id}`) ? 'is-visible' : ''}`}>
                            <h4>{stoic.name}</h4>
                            <p>{stoic.description}</p>
                            <Link to={`/discoverPage/${index}`}><button>Learn More</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DiscoverMain;
