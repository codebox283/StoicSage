import '../styles/Header.css'

function Header() {
    return (
      <div className="Header">
        <div><h1 className='Logo'>StoicSage</h1></div>
        <div>
            <ul  id="Navbar">
                <li>Home</li>
                <li>About</li>
                <li>Blogs</li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Header;