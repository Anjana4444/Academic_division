import styles from './StaffPage.module.css'

interface StaffMember {
  id: number
  name: string
  nickname: string
  role: string
  email: string
  phone?: string
  image: string
}

const seniorOfficers: StaffMember[] = [
  {
    id: 1,
    name: 'Mrs. W.M.D. Karunaratne',
    nickname: 'Gimali',
    role: 'Senior Assistant Registrar',
    email: 'acestpera@gs.pdn.ac.lk',
    phone: '+94 81 239 2340',
    image: '/staff/omali.png',
  },
  {
    id: 2,
    name: 'Mrs. W.M.N. Wicramaratne',
    nickname: 'Sithurini',
    role: 'Assistant Registrar',
    email: 'alr@gs.pdn.ac.lk',
    phone: '+94 81 239 2341',
    image: '/staff/ass-r.png',
  },
]

const managementAssistants: StaffMember[] = [
  { id: 3,  name: 'Mr. R.W.M.G. Abeybandara',    nickname: 'Gamini',     role: 'Senior Staff Assistant',    email: 'abeybandara@gs.pdn.ac.lk',  image: '/staff/gamini.jpg' },
  { id: 4,  name: 'Mrs. M.G.R.C.P.A. Gamlath',   nickname: 'Chulani',    role: 'Senior Staff Assistant',    email: 'gamlath@gs.pdn.ac.lk',      image: '/staff/chulani.jpg' },
  { id: 5,  name: 'Mr. A.M.T.K. Weerasuriya',    nickname: 'Tissa',      role: 'Senior Staff Assistant',    email: 'weerasuriya@gs.pdn.ac.lk',  image: '/staff/tissa.jpg' },
  { id: 6,  name: 'Mrs. M.R.N. Sabira',           nickname: '',           role: 'Management Assistant II',   email: 'sabira@gs.pdn.ac.lk',        image: '/staff/sabira.jpg' },
  { id: 7,  name: 'Mrs. I.A.M.T. Luktenna',       nickname: 'Maduka',     role: 'Management Assistant II',   email: 'luktenna@gs.pdn.ac.lk',      image: '/staff/luktenna.jpg' },
  { id: 8,  name: 'Mrs. P.N.E. Perumbadage',      nickname: 'Nishani',    role: 'Management Assistant II',   email: 'perumbadage@gs.pdn.ac.lk',   image: '/staff/perumbadage.jpg' },
  { id: 9,  name: 'Mr. W.A.A.S. Seneviratne',     nickname: 'Anuradha',   role: 'Management Assistant II',   email: 'seneviratne@gs.pdn.ac.lk',   image: '/staff/seneviratne.jpg' },
  { id: 10, name: 'Mrs. K.W.B.M.N.E. Kumari',     nickname: 'Nayana',     role: 'Management Assistant III',  email: 'kumari@gs.pdn.ac.lk',        image: '/staff/kumari.jpg' },
  { id: 11, name: 'Mrs. H.G.K.S. Sewwandi',       nickname: '',           role: 'Management Assistant III',  email: 'sewwandi@gs.pdn.ac.lk',      image: '/staff/sewwandi.jpg' },
  { id: 12, name: 'Mrs. R.M.J.M. Rathnayake',     nickname: 'Minoli',     role: 'Management Assistant III',  email: 'rathnayake@gs.pdn.ac.lk',    image: '/staff/rathnayake.jpg' },
  { id: 13, name: 'Miss. D.S. Weerakoon',          nickname: 'Dilnesha',   role: 'Management Assistant III',  email: 'weerakoon@gs.pdn.ac.lk',     image: '/staff/weerakoon.jpg' },
  { id: 14, name: 'Mr. J.M.P.K.B. Jayasundara',   nickname: 'Prasanna',   role: 'Management Assistant III',  email: 'jayasundara@gs.pdn.ac.lk',   image: '/staff/jayasundara.jpg' },
  { id: 15, name: 'Miss. T.N.V. Thalawala',        nickname: 'Vandana',    role: 'Management Assistant III',  email: 'thalawala@gs.pdn.ac.lk',     image: '/staff/thalawala.jpg' },
  { id: 16, name: 'Mrs. M.N.P.M. Medawala',        nickname: 'Priyanwada', role: 'Management Assistant III',  email: 'medawala@gs.pdn.ac.lk',      image: '/staff/medawala.jpg' },
  { id: 17, name: 'Mrs. T.M.T.M. Thilakeratne',    nickname: 'Maheshi',    role: 'Management Assistant III',  email: 'thilakeratne@gs.pdn.ac.lk',  image: '/staff/thilakeratne.jpg' },
  { id: 18, name: 'Mr. H.A.C. Kumara',             nickname: '',           role: 'Works Aide III',            email: 'hac.kumara@gs.pdn.ac.lk',    image: '/staff/hac-kumara.jpg' },
  { id: 19, name: 'Mr. M.M.U.K.P. Bandara',        nickname: '',           role: 'Management Assistant III',  email: 'bandara@gs.pdn.ac.lk',       image: '/staff/bandara.jpg' },
]

function StaffCard({ member, size }: { member: StaffMember; size: 'large' | 'small' }) {
  return (
    <div className={size === 'large' ? styles.seniorCard : styles.staffCard}>
      <img
  src={member.image}
  alt={member.name}
  className={size === 'large' ? styles.seniorPhoto : styles.staffPhoto}
  onError={(e) => {
    const target = e.target as HTMLImageElement
    target.style.display = 'none'
    target.parentElement!.classList.add(styles.noPhoto)
  }}
/>
      <div className={styles.cardInfo}>
        <p className={styles.name}>{member.name}</p>
        {member.nickname && (
          <p className={styles.nickname}>({member.nickname})</p>
        )}
        <p className={styles.role}>{member.role}</p>
        {member.phone && (
          <p className={styles.phone}>{member.phone}</p>
        )}
        <a href={`mailto:${member.email}`} className={styles.email}>
          {member.email}
        </a>
      </div>
    </div>
  )
}

export default function StaffPage() {
  return (
    <div className={styles.page}>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.heading}>Staff Directory</h1>
        <p className={styles.subtext}>
          Academic Establishments Division · University of Peradeniya
        </p>
      </div>

      {/* Senior officers */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>Senior Officers</p>
        <div className={styles.seniorGrid}>
          {seniorOfficers.map((member) => (
            <StaffCard key={member.id} member={member} size="large" />
          ))}
        </div>
        <div className={styles.divider} />
      </div>

      {/* Management assistants */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>Management Assistants</p>
        <div className={styles.staffGrid}>
          {managementAssistants.map((member) => (
            <StaffCard key={member.id} member={member} size="small" />
          ))}
        </div>
      </div>

    </div>
  )
}