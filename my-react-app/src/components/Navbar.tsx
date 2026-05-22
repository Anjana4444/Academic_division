import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import styles from './Navbar.module.css'

const applicationLinks = [
  { label: 'Agreement',                          path: '/applications/agreement' },
  { label: 'Appendix 16',                        path: '/applications/appendix-16' },
  { label: 'ETF Form',                           path: '/applications/etf-form' },
  { label: 'Concessionary Motor Vehicle Permit', path: '/applications/motor-vehicle' },
  { label: 'Confirmation / Promotion',           path: '/applications/promotion' },
  { label: 'University Identity Cards',          path: '/applications/identity-cards' },
  { label: 'Sabbatical Leave',                   path: '/applications/sabbatical' },
  { label: 'TR / Conference / Vacation Leave',   path: '/applications/leave' },
  { label: 'Railway Warrants',                   path: '/applications/railway' },
  { label: 'Probationary Leave',                 path: '/applications/probationary' },
]

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/applications" className={`nav-link ${styles.dropdownTrigger}`}>
              Applications
              <span className={`${styles.arrow} ${dropdownOpen ? styles.arrowUp : ''}`}>
                ▾
              </span>
            </Link>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {applicationLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={styles.dropdownItem}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className={styles.dropdownDivider} />
                <Link
                  to="/applications"
                  className={styles.dropdownViewAll}
                  onClick={() => setDropdownOpen(false)}
                >
                  View all applications →
                </Link>
              </div>
            )}
          </div>

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