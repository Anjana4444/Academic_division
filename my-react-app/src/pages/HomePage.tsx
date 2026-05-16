import React from 'react'
import '../App.css'

const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo-circle">UoP</div>
            <span className="university-name">University of Peradeniya</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>



            <a href="/staff" className="nav-link">Staff</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a 
                href="https://www.pdn.ac.lk/" 
                className="nav-link" 
                target="_blank" 
                rel="noopener noreferrer"
            > UoP
           <a href="/contact" className="nav-link">Contact</a> 
</a>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="main-title">
            ACADEMIC <span className="gold-highlight">ESTABLISHMENTS</span> DIVISION
          </h1>
          <div className="gold-divider"></div>
          <p className="hero-subtitle">
            Professional Administrative Support for Academic Excellence
          </p>
        </div>
      </header>


      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3 className="gold-highlight">Academic Establishments Division</h3>
            <p>University of Peradeniya, Sri Lanka</p>
          </div>
          <div className="map-box">Google Map Integration</div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage