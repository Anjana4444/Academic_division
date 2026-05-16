import styles from './ContactPage.module.css'

interface ContactMethod {
  id: number
  title: string
  actionText: string
  icon: string
  link: string
}

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: 'Academic Establishment Divisiom ,university of Peradeniya, Peradeniya,Srilanka',
    actionText: 'Address', // Keeping the label style from the image
    icon: '📍', 
    link: 'tel:+94812392340',
  },
  {
    id: 2,
    title: 'Direct    : +9481 208 5208,Internal : +9481 239 2341,Ext.: 2341/ 2342	Office,Fax : 081-2388880	',
    actionText: 'Phone',
    icon: '↺',
    link: 'tel:+94812392341',
  },
  {
    id: 3,
    title: 'Senior Assistant Registrar	: karunaratnemlwom@gs.pdn.ac.lk,Assistant Registrar		: sithuminiw@gs.pdn.ac.lk,: acestpera@gs.pdn.ac.lk ',
    actionText: 'Email',
    icon: '📝',
    link: 'mailto:acestpera@gs.pdn.ac.lk',
  },
]

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section with Background Image */}
      <section className={styles.heroSection}>
        <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>Contact</h1>
        </div>
        {/* Replace with your actual university image path */}
        <img 
          src="/uop-bg.jpg" 
          alt="University Background" 
          className={styles.heroImage} 
        />
        <img 
          src="/uop2.jpg"   /* <--- This path points to your public folder */
          alt="University Campus" 
          className={styles.heroImage} 
        />

        {/* Floating Cards Container */}
        <div className={styles.cardGrid}>
          {contactMethods.map((method) => (
            <a key={method.id} href={method.link} className={styles.contactCard}>
              <div className={styles.icon}>{method.icon}</div>
              <span className={styles.actionText}>{method.actionText}</span>
              <p className={styles.subTitle}>{method.title}</p>
            </a>
          ))}
        </div>
      </section>

      

      
    </div>
  )
}