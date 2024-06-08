import '../styles/StoicAI.css';
import Img from '../assets/ai_img.jpg';

function StoicAI() {
    return (
        <div className="AI">
            <div id='AI-cont'>
                <h1>Want to get Stoic AI solutions curated especially for you?</h1>
                <h1>
                    Check out StoicAI!
                </h1>
                <button className='Btn'>Click Here</button>
            </div>
            <div id='AI-img'>
                <img alt='' src={Img}></img>
            </div>
        </div>
    );
}

export default StoicAI;