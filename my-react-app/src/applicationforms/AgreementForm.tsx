import styles from './AgreementForm.module.css'

export default function AgreementForm() {
  return (
    <div className={styles.page}>
      {/* Hero Header Section */}
      <div className={styles.heroSection}>
        <h1 className={styles.heading}>AGREEMENT FORM</h1>
        <div className={styles.redDivider}></div>
      </div>

      {/* Content Section */}
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <p className={styles.subtext}>
            Agreement for the appointment of academic staff - University of Peradeniya
          </p>
          
          {/* Links matching the style in your image */}
          <div className={styles.linksContainer}>
             <a href="#" className={styles.downloadLink}>
               Agreement Form for Academic Staff (Schedule) - pdf
             </a>
             <a href="#" className={styles.downloadLink}>
               Agreement Form for Academic Staff (Schedule) - doc
             </a>
          </div>
        </div>
      </div>
    </div>
  )
}