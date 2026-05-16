import styles from './AboutPage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface AboutSection {
  id: number
  title: string
  description: string
  icon: string
}

const divisionDetails: AboutSection[] = [
  {
    id: 1,
    title: 'Our Vision',
    description: 'To be a center of excellence in academic administration, fostering an environment that empowers students and faculty.',
    icon: '👁️',
  },
  {
    id: 2,
    title: 'Our Mission',
    description: 'To deliver efficient, transparent, and student-centric administrative services, ensuring academic integrity.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Core Services',
    description: 'Managing student registration, coordinating examinations, and facilitating curriculum development.',
    icon: '💼',
  },
]

const slides = [
  { id: 1, src: '/uop.jpg', alt: 'University View 1' },
  { id: 2, src: '/uop1.jpg', alt: 'University View 2' },
  { id: 3, src: '/uop2.jpg', alt: 'University View 3' },
];


export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      {/* Pink Top Section */}
      <section className={styles.heroHeader}>
        <h1 className={styles.mainHeading}>About</h1>
      </section>

      {/* Overlapping Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.imageWrapper}>
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
    loop={true}
    className={styles.heroImage} 
  >
    {slides.map((slide) => (
      <SwiperSlide key={slide.id}>
        <img 
          src={slide.src} 
          alt={slide.alt} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        <div className={styles.textContent}>
          <p>
            The Academic Establishments Division is one of the most important Divisions in the University. Presently the entire Department is managed by two officers one at the Senior Assistant Registrar level and the other at the Assistant Registrar level with the assistance of several Management Assistants.

The primary function of the Establishments Division is the recruitment of qualified staff and retaining them in the service in line with the corporate goals of the University. The Establishments Division also assists the University Council in the development, maintenance, and interpretation of human resources management procedures in accordance with the Establishment Code and Rule and Regulations of the University Grants Commission and Administrative policies of the University.

This Division not only recruits teaching staff but also performs all functions necessary to promote them to higher grades. It also completes various tasks related to the payment of annual salary increments. The Division also takes action to grant the members of the Academic staff various types of leave they are entitled to.

In addition to performing the above functions, the Division is also responsible for advertising the academic cadre positions vacant in the Departments of different Faculties in the newspapers as well as on the University website twice a year, i.e. in January and July.

Moreover, the Division maintains the personal files of the academic staff members and academic support staff. The Academic Establishments Division also updates information on approved cadres and makes requests to the UGC for additional cadre positions.

Academic Establishments Division is pleased to provide the Rules and Regulations that are currently in force so that the members of staff can select and follow the correct procedures in matters related to their employment, with, in turn, will enable the Division to offer a better and more efficient service for them.
          </p>
        </div>

        {/* New Yellow Functions Card */}
<div className={styles.functionsCard}>
  <h2 className={styles.functionsHeading}>Main Functions of the Department</h2>
  <ul className={styles.functionsList}>
    <li>Determining the cadre requirements of academic and academic support staff</li>
    <li>Updating and maintaining cadre statistics</li>
    <li>Handling recruitment, confirmation, increments, and promotions</li>
    <li>Maintaining personal files of all staff members</li>
    <li>Managing leave, training, and scholarships</li>
    <li>Attending to staff welfare (loans, insurance, service certificates)</li>
    <li>Handling Research Allowance and salary revisions</li>
    <li>Coordinating disciplinary and litigation matters</li>
    <li>Managing retirement benefits (UPF, EPF, ETF, Pensions)</li>
    <li>Handling contractual and assignment-based appointments</li>
    <li>Appointing Heads of Academic Departments</li>
    <li>Coordinating trade union issues and recruitment exams</li>
    <li>Managing Bonds and Agreements (including violations)</li>
    <li>Convening the Leave and Awards Committee</li>
  </ul>
</div>

        {/* Bottom Grid */}
        <div className={styles.grid}>
          {divisionDetails.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  )
}