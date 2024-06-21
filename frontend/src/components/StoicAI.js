import '../styles/StoicAI.css';
import Img from '../assets/epictetus1.jpg';

function StoicAI() {
    return (
        <div className="AI">
            <img src={Img}></img>
            <h1>Get personnaly curated stoic quotes and many more.</h1>
            <button>Ask StoicAI</button>
        </div>
    );
}

export default StoicAI;