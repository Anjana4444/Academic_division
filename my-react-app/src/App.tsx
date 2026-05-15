import React from "react";
import "./App.css"; // Import the CSS file here

const App: React.FC = () => {
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
            <a href="#about" className="nav-link">About</a>
            <a href="#staff" className="nav-link">Staff</a>
            <a href="#contact" className="nav-link">Contact</a>
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
          <p className="hero-subtitle">Professional Administrative Support for Academic Excellence</p>
        </div>
      </header>

      <section id="about" className="content-section">
        <h2 className="section-heading">About the Division</h2>
        <p className="description-text">
          The Academic Establishments Division is one of the most important divisions in the University. 
          Managed by dedicated senior officers at the University of Peradeniya.
        </p>
      </section>

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
  );
};

export default App;