import { Link } from 'react-router-dom'
import '../App.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-circle">UoP</div>
          <span className="university-name">University of Peradeniya</span>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/staff" className="nav-link">Staff</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}