import '../styles/Newsletter.css';
import Img from '../assets/news_img.jpg';

function Newsletter() {
    return (
        <div className="Newsletter">
            <div id='Newsletter-cont'>
            <h1>To get regular updates about Stoicism.<br></br>
                    Subscribe to our newsletter.
                </h1>
                <img alt='' src={Img}></img>
                <button className='Btn'>Click Here</button>
            </div>
        </div>
    );
}

export default Newsletter;