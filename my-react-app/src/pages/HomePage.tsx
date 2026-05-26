import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <header id="home" className="hero-section">
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="main-title text-yellow-300">
            ACADEMIC <span className="gold-highlight">ESTABLISHMENTS</span> DIVISION
          </h1>
          <div className="gold-divider"></div>
          <p className="hero-subtitle">
            Professional Administrative Support for Academic Excellence
          </p>
        </div>
      </header>

    </div>
  )
}

export default HomePage