import { useState } from 'react'
import styles from './ApplicationsPage.module.css'
import { useParams } from 'react-router-dom'; // Add this import
import AgreementForm from '../applicationforms/AgreementForm';
import Appendix16Form from '../applicationforms/AgreementForm';
import ApplicationforConfirmationForm from '../applicationforms/AgreementForm';
import ApplicationforRailwayWarrantsForm from '../applicationforms/AgreementForm';
import ApplicationforSabbaticalLeaveForm from '../applicationforms/AgreementForm';
import ApplicationforTRForm from '../applicationforms/AgreementForm';
import ApplicationforUniversityIdentityCardsForm from '../applicationforms/AgreementForm';
import ConcessionaryMotorVehiclePermitForm from '../applicationforms/AgreementForm';
import ETFForm from '../applicationforms/AgreementForm';
import ProbationaryLeaveApplicationForm from '../applicationforms/AgreementForm';


interface Application {
  id: number
  title: string
  type: 'PDF' | 'Form' | 'Application'
  downloadUrl: string
}

const applications: Application[] = [
  { id: 1,  title: 'Agreement',                                          type: 'PDF',         downloadUrl: '#' },
  { id: 2,  title: 'Appendix 16',                                        type: 'PDF',         downloadUrl: '#' },
  { id: 3,  title: 'ETF Form',                                           type: 'PDF',         downloadUrl: '#' },
  { id: 4,  title: 'Concessionary Motor Vehicle Permit',                 type: 'Form',        downloadUrl: '#' },
  { id: 5,  title: 'Application for Confirmation / Promotion to Senior Lecturer Grade II / Grade I', type: 'Application', downloadUrl: '#' },
  { id: 6,  title: 'Application for University Identity Cards',          type: 'Application', downloadUrl: '#' },
  { id: 7,  title: 'Application for Sabbatical Leave',                   type: 'Application', downloadUrl: '#' },
  { id: 8,  title: 'Application for TR / Conference / Vacation / No-pay Leave', type: 'Application', downloadUrl: '#' },
  { id: 9,  title: 'Application for Railway Warrants',                   type: 'Application', downloadUrl: '#' },
  { id: 10, title: 'Probationary Leave Application',                     type: 'Application', downloadUrl: '#' },
]

const TYPE_COLORS: Record<Application['type'], string> = {
  PDF:         styles.tagPdf,
  Form:        styles.tagForm,
  Application: styles.tagApplication,
}

type FilterType = 'All' | Application['type']
const FILTERS: FilterType[] = ['All', 'PDF', 'Form', 'Application']

export default function ApplicationsPage() {
  const { slug } = useParams(); // Get the slug from the URL
  const [active, setActive] = useState<FilterType>('All');

  // POINT OF CHANGE: If a slug exists, show the specific form instead of the grid
  if (slug === 'agreement') return <AgreementForm />;
  if (slug === 'sabbatical') return <Appendix16Form />;
  if (slug === 'promotion-16') return <ApplicationforConfirmationForm />;
  if (slug === 'etf-form') return <ApplicationforRailwayWarrantsForm />;
  if (slug === 'sabbatical') return <ApplicationforSabbaticalLeaveForm />;
  if (slug === 'leave') return <ApplicationforTRForm />;
  if (slug === 'identity-cards') return <ApplicationforUniversityIdentityCardsForm />;
  if (slug === 'motor-vehicle') return <ConcessionaryMotorVehiclePermitForm />;
  if (slug === 'etf-form') return <ETFForm />;
  if (slug === 'probationary') return <ProbationaryLeaveApplicationForm />;


  const filtered = applications.filter(
    (app) => active === 'All' || app.type === active
  )

  return (
    <div className={styles.page}>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.heading}>Applications & Forms</h1>
        <p className={styles.subtext}>
          Download the relevant forms and submit them to the division
        </p>
      </div>

      <div className={styles.container}>

        {/* Filter buttons */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Applications grid */}
        <div className={styles.grid}>
          {filtered.map((app) => (
            <div key={app.id} className={styles.card}>
              <div className={styles.cardIcon}>📄</div>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{app.title}</p>
                <div className={styles.cardFooter}>
                  <span className={`${styles.tag} ${TYPE_COLORS[app.type]}`}>
                    {app.type}
                  </span>
                  
                   <a href={app.downloadUrl}
                    className={styles.downloadBtn}
                    download
                  >
                    ↓ Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}