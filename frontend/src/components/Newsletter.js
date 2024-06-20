import '../styles/Newsletter.css';
import Img from '../assets/news-img.jpg';

function Newsletter() {
    return (
        <div className="Newsletter">
            <div className="News-Img">
                <h1>Subscribe to our newsletter.</h1>
                <img src={Img} alt=''></img>
            </div>
            <div className="News-Panel">
                <p>
                Discover the transformative power of StoicSage, your guide to living with virtue, resilience, 
                and inner peace. Access curated content, interactive exercises, and daily reflections to apply Stoic wisdom.
                <br></br><br></br>
                Don’t miss out on unlocking your potential and managing stress. Start your journey with StoicSage today and 
                live with purpose.
                </p>
                <button>Learn More</button>
                <div>
                <p>Connect with us on</p>
                <ul>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;