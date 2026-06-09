export interface Application {
  id: number
  title: string
  type: 'PDF' | 'Form' | 'Application'
  downloadUrl: string
}

export const applications: Application[] = [
  { id: 1,  title: 'Agreement',                    type: 'PDF',         downloadUrl: '/forms/agreement.pdf' },
  { id: 2,  title: 'Appendix 16',                  type: 'PDF',         downloadUrl: '/forms/appendix-16.pdf' },
  { id: 3,  title: 'ETF Form',                     type: 'PDF',         downloadUrl: '/forms/ETF -Claim Application Form.pdf' },
  { id: 4,  title: 'Concessionary Motor Vehicle Permit', type: 'Form',  downloadUrl: '/forms/motor-vehicle-permit.pdf' },
  { id: 5,  title: 'Application for Confirmation / Promotion to Senior Lecturer Grade II / Grade I', type: 'Application', downloadUrl: '/forms/confirmation-promotion.pdf' },
  { id: 6,  title: 'Application for University Identity Cards', type: 'Application', downloadUrl: '/forms/ID app.pdf' },
  { id: 7,  title: 'Application for Sabbatical Leave', type: 'Application', downloadUrl: '/forms/Sabbatical Leave.pdf' },
  { id: 8,  title: 'Application for TR / Conference / Vacation / No-pay Leave', type: 'Application', downloadUrl: '/forms/TR_CON-VAC Leave Application Form.pdf' },
  { id: 9,  title: 'Application for Railway Warrants', type: 'Application', downloadUrl: '/forms/railway-warrants.pdf' },
  { id: 10, title: 'Probationary Leave Application', type: 'Application', downloadUrl: '/forms/probationary-leave.pdf' },
]