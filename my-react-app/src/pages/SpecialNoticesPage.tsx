import styles from './SpecialNoticesPage.module.css'

interface Notice {
  id: number
  title: string
  date: string
  downloadLabel?: string
  downloadUrl?: string
}

const notices: Notice[] = [
  {
    id: 1,
    title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    date: '2024-01-15',
    downloadLabel: 'Online System for Obtaining Approval for University Officials to Travel Abroad',
    downloadUrl: '#',
  },
  // add more notices here later
]

export default function SpecialNoticesPage() {
  return (
    <div className={styles.page}>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.heading}>Special Notices</h1>
        <p className={styles.subtext}>
          Important announcements from the Academic Establishments Division
        </p>
      </div>

      {/* Notices list */}
      <div className={styles.container}>
        {notices.length === 0 ? (
          <p className={styles.empty}>No notices at this time.</p>
        ) : (
          notices.map((notice) => (
            <div key={notice.id} className={styles.noticeCard}>

              {/* Left gold bar + icon */}
              <div className={styles.iconBar}>
                <span className={styles.bellIcon}>🔔</span>
              </div>

              {/* Content */}
              <div className={styles.content}>
                <p className={styles.date}>
                  {new Date(notice.date).toLocaleDateString('en-LK', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className={styles.title}>{notice.title}</h2>

                {notice.downloadUrl && (
                  
                    <a href={notice.downloadUrl}
                    className={styles.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.downloadLabel}>Download</span>
                    {notice.downloadLabel}
                  </a>
                )}
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  )
}