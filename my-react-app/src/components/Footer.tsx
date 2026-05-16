import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.topBar} />

      <div className={styles.container}>

        {/* Contact info */}
        <div>
          <div className={styles.logo}>
            <div className={styles.logoCircle}>UoP</div>
            <div>
              <p className={styles.divisionName}>Academic Establishments Division</p>
              <p className={styles.universityName}>University of Peradeniya</p>
            </div>
          </div>

          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.18 2 2 0 012.25 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              <div>
                <p>+94 81 239 2340</p>
                <p>+94 81 239 2341</p>
                <p>+94 81 239 2342</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>Ext: 2340 / 2341</p>
              </div>
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
              <p>PO Box 20400, Peradeniya, Sri Lanka</p>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <p className={styles.mapLabel}>Location</p>
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
          © {new Date().getFullYear()} Academic Establishments Division · University of Peradeniya · All rights reserved
        </p>
      </div>

    </footer>
  )
}