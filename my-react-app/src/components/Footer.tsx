import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.topBar} />

      <div className={styles.container}>

  {/* Column 1 — Logo + description */}
  <div className={styles.col}>
    <div className={styles.logo}>
      <div className={styles.logoCircle}>
        <img
          src='logo-2.webp' 
          alt="ACADEMIC ESTABLISHMENTS DIVISION- University of Peradeniya" 
          className="itc-logo"
          style={{ height: '58px', width: '58px' }}
          />
      </div>
      <div>
        <p className={styles.divisionName}>Academic Establishments Division</p>
        <p className={styles.universityName}>University of Peradeniya</p>
      </div>
    </div>
    <p className={styles.description}>
      Managing academic staff appointments, promotions, leave, and establishment
      matters for the University of Peradeniya.
    </p>

    <p className={styles.description}>

            Academic Establishments Division,<br />
            University of Peradeniya,<br />
            Peradeniya,<br />
            Sri Lanka.
          </p>
  </div>

  {/* Column 2 — Quick links */}
  <div className={styles.col}>
    <p className={styles.colHeading}>Quick Links</p>
    <ul className={styles.linkList}>
      <li><a href="/" className={styles.footerLink}>Home</a></li>
      <li><a href="/about" className={styles.footerLink}>About</a></li>
      <li><a href="/notices" className={styles.footerLink}>Special Notices</a></li>
      <li><a href="/applications" className={styles.footerLink}>Applications</a></li>
      <li><a href="/staff" className={styles.footerLink}>Staff</a></li>
      <li><a href="/contact" className={styles.footerLink}>Contact</a></li>
    </ul>
  </div>

  {/* Column 3 — Contact + map */}
  <div className={styles.col}>
    <p className={styles.colHeading}>Contact Info</p>
    <ul className={styles.contactList}>
      <li className={styles.contactItem}>
        <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.18 2 2 0 012.25 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
        </svg>
        <span>+94 81 239 2340 / 2341 / 2342</span>
      </li>
      <li className={styles.contactItem}>
        <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <a href="mailto:acestpera@gs.pdn.ac.lk" className={styles.emailLink}>
          acestpera@gs.pdn.ac.lk
        </a>
      </li>
      <li className={styles.contactItem}>
        <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>Peradeniya, Sri Lanka</span>
      </li>
    </ul>
    <div className={styles.mapWrapper}>
      <iframe
        title="University of Peradeniya location"
        src="https://maps.google.com/maps?q=7.254004,80.596754&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>

</div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          © {new Date().getFullYear()} Developed by IT Center · University of Peradeniya · All rights reserved
        </p>
      </div>

    </footer>
  )
}