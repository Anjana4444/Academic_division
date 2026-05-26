
import { Link } from 'react-router-dom'
import '../App.css'




export default function Navbar() {
  
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo-section">
          <img 
          src='logo-2.webp' 
          alt="ACADEMIC ESTABLISHMENTS DIVISION- University of Peradeniya" 
          className="itc-logo"
          style={{ height: '58px', width: 'auto' }}
          />

        <div className="title-wrapper">
            <div className="division-name">Academic Establishments Division</div>
            <div className="university-name">University of Peradeniya</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/notices" className="nav-link">Special Notices</Link>

          {/* Applications dropdown */}
          <Link to="/applications" className="nav-link">Applications</Link>

          <Link to="/staff" className="nav-link">Staff</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
         <a
            href="https://www.pdn.ac.lk/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            UoP
          </a>
        </div>

      </div>
    </nav>
  )
}