import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
      <div className="Header">
        <h1 className='Logo'>StoicSage</h1>
            <ul  id="Navbar">
                <Link to='/'><li>Home</li></Link>
                <Link to='/discover'><li>Discover</li></Link>
                <Link to='/blogs'><li>Blogs</li></Link>
                <Link to='/chat'><li>StoicAI</li></Link>
            </ul>
      </div>
    );
  }
  
  export default Header;