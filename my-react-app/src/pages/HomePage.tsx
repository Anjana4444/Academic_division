import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'

const coursesData = [
  { id: 1, tag: "CCNA", title: "Cisco Certified Network Associate 2026", duration: "6 Weeks", starts: "5/4/2026", img: "/slide-4.jpg" },
  { id: 2, tag: "FullStack", title: "Full Stack Web Development", duration: "20 Weeks", starts: "1/7/2026", img: "/slide-4.jpg" },
  { id: 3, tag: "CBCS", title: "Certification Exam on Basic Computer Skills", duration: "8 Weeks", starts: "9/8/2025", img: "/slide-4.jpg" },
  // Additional items added to dynamically fulfill your 3x3 grid request
  { id: 4, tag: "Python", title: "Python for Data Science & AI Essentials", duration: "10 Weeks", starts: "12/5/2026", img: "/slide-4.jpg" },
  { id: 5, tag: "CyberSec", title: "CompTIA Security+ Certification Prep", duration: "12 Weeks", starts: "15/6/2026", img: "/slide-4.jpg" },
  { id: 6, tag: "Cloud", title: "AWS Certified Cloud Practitioner", duration: "6 Weeks", starts: "22/7/2026", img: "/slide-4.jpg" },
  { id: 7, tag: "UI/UX", title: "User Experience & Interface Design Fundamentals", duration: "8 Weeks", starts: "01/8/2026", img: "/slide-4.jpg" },
  { id: 8, tag: "DevOps", title: "DevOps Engineering with Docker & Kubernetes", duration: "14 Weeks", starts: "10/9/2026", img: "/slide-4.jpg" },
  { id: 9, tag: "Mobile", title: "Cross-Platform Mobile Apps with Flutter", duration: "10 Weeks", starts: "05/10/2026", img: "/slide-4.jpg" }
];

const HomePage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Navbar />

      <header id="home" className="hero-section">
        {/* Geometric angled backgrounds */}
        <div className="hero-bg-left-angle"></div>
        <div className="hero-bg-right-angle"></div>
        
        {/* Main background image with its dark overlay */}
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
         
          
          <h1 className="main-title text-red-300">
            <span className="title-line-1">Academic</span>
            <span className="title-line-2">
              <span className="gold-highlight">Establishments</span> Division
            </span>
          </h1>
          
          <p className="hero-subtitle">
            Upholding academic excellence through dedicated administration at the heart <br />
            of the University of Peradeniya.
          </p>

          <button className="hero-btn-learn">
            LEARN MORE <span className="arrow-down">↓</span>
          </button>
        </div>
      </header>

      <section className="about-section">
        <div className="star-dot dot-1"></div>
        <div className="star-dot dot-2"></div>
        <div className="star-dot dot-3"></div>
        <div className="star-dot dot-4"></div>
        <div className="star-dot dot-5"></div>
        
        <div className="corner-line-top-left"></div>
        <div className="corner-line-bottom-right"></div>

        <div className="about-container">
        

          <h2 className="about-title">
            One of the <span className="italic-gold">most important</span> divisions in the University
          </h2>

          <div className="about-content-wrapper">
            <span className="quote-mark">“</span>
            
            <p className="about-description">
              The Academic Establishments Division is one of the most important divisions in the University. 
              Presently the entire department is managed by two officers — one at the Senior Assistant Registrar 
              level and the other at the Assistant Registrar level — with the assistance of several Management 
              Assistants.
            </p>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-container">
          
          <div className="courses-header">
            <h2 className="courses-main-title">
              Best of <span className="accent-orange">The Best</span> Courses...
            </h2>
            <p className="courses-subtitle">
              Learn from industry-leading experts through our top-notch courses designed to enhance your knowledge and skills in the IT field. 
              With a focus on practical applications, flexible learning methods, and a comprehensive curriculum, we ensure that our students 
              receive the best education to excel in the ever-evolving tech industry.
            </p>
          </div>

          <div className="courses-grid">
            {coursesData.map((course) => (
              <div key={course.id} className="course-card">
                <div className="card-image-wrapper">
                  {/* Replace source with real flyer graphics pathing when ready */}
                  <img src={course.img} alt={course.title} className="card-banner-img" />
                </div>
                <div className="card-body">
                  <span className="course-tag">{course.tag}</span>
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Starts:</strong> {course.starts}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default HomePage