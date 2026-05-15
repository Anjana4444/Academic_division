import styles from './StaffPage.module.css'

interface StaffMember {
  id: number
  name: string
  role: string
  email: string
  phone: string
}

const staffList: StaffMember[] = [
  {
    id: 1,
    name: 'Senior Assistant Registrar',
    role: 'Head of Division',
    email: 'acestpera@gs.pdn.ac.lk',
    phone: '+94 81 239 2340',
  },
  {
    id: 2,
    name: 'Assistant Registrar',
    role: 'Division Officer',
    email: 'acestpera@gs.pdn.ac.lk',
    phone: '+94 81 239 2341',
  },
]

export default function StaffPage() {
  return (
    <section id="staff" className={styles.staffSection}>
      <h2 className={styles.heading}>Staff Directory</h2>
      <p className={styles.subtext}>
        The division is managed by the following officers.
      </p>

      <div className={styles.grid}>
        {staffList.map((member) => (
          <div key={member.id} className={styles.card}>
            <div className={styles.avatar}>
              {member.name.charAt(0)}
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{member.name}</p>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.contact}>{member.phone}</p>
              <a href={`mailto:${member.email}`} className={styles.email}>
                {member.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}