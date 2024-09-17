import '../styles/Newsletter.css';
import Img from '../assets/news-img-min.jpg';
import { Link } from 'react-router-dom';

function Newsletter() {
    return (
        <div className="Newsletter">
            <div className="News-Img">
                <h1>Subscribe to our newsletter.</h1>
                <img src={Img} alt=''></img>
            </div>
            <div className="News-Panel">
                <p>
                Discover StoicSage, your path to virtue, resilience, and inner peace. Don’t miss on curated content and daily reflections to apply Stoic wisdom.
                <br></br><br></br>
                    Start your journey with StoicSage today and unlock your potential to live with purpose.
                </p>
                {/* <input type="text" placeholder="Name" /> */}
                <input type="email" placeholder="Email Adress" />
                <div id='privacy'><input type="checkbox" /><p>I agree to the Privacy Policies</p></div>
                <Link className='Link' to="/">
                    <button className='Button'>Subscribe</button>
                </Link>
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