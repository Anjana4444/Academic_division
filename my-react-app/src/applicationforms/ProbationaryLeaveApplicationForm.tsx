import styles from './AgreementForm.module.css';

export default function ProbationaryLeaveApplicationForm() {
  return (
    <div className={styles.page}>
      {/* Hero Section - The dark area with dots */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Probationary Leave</h1>
          <div className={styles.redUnderline}></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className={styles.content}>
        <div className={styles.linkContainer}>
          <p className={styles.description}>
            Agreement for the appointment of academic staff - University of Peradeniya
          </p>
          
          <div className={styles.links}>
            <a href="/path-to-pdf" className={styles.fileLink}>
              Agreement Form for Academic Staff (Schedule) - pdf
            </a>
            <a href="/path-to-doc" className={styles.fileLink}>
              Agreement Form for Academic Staff (Schedule) - doc
            </a>
          </div>
        </div>
      </main>

     
    </div>
  );
}