import styles from './AgreementForm.module.css';

export default function Appendix16Form() {
  return (
    <div className={styles.page}>
      {/* Hero Section - The dark area with dots */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Appendix-16</h1>
          <div className={styles.redUnderline}></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className={styles.content}>
        <div className={styles.linkContainer}>
          <p className={styles.description}>
            Application for prior permission to be obtained by public officers to travel abroad (Appendix 16) -pdf
          </p>
        
        </div>
      </main>

     
    </div>
  );
}