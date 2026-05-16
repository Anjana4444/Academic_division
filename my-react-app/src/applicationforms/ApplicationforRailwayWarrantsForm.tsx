import styles from './AgreementForm.module.css';

export default function ApplicationforRailwayWarrantsForm() {
  return (
    <div className={styles.page}>
      {/* Hero Section - The dark area with dots */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Railway Warrants </h1>
          <div className={styles.redUnderline}></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className={styles.content}>
        <div className={styles.linkContainer}>
          
          
          <div className={styles.links}>
            <a href="/path-to-pdf" className={styles.fileLink}>
              Application for Free Railway Holiday Warrants 
            </a>
            
          </div>
        </div>
      </main>

     
    </div>
  );
}