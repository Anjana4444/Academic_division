export interface Notice {
  id: number
  title: string
  date: string
  downloadLabel?: string
  downloadUrl?: string
}

export const notices: Notice[] = [
  {
    id: 1,
    title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    date: '2024-01-15',
    downloadLabel: 'Online System for Obtaining Approval for University Officials to Travel Abroad',
    downloadUrl: '../notices/overseas leave -All Uni (1).pdf',
  },
  {
    id: 2,
    title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    date: '2024-01-15',
    downloadLabel: 'Online System for Obtaining Approval for University Officials to Travel Abroad',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    date: '2024-01-15',
    downloadLabel: 'Online System for Obtaining Approval for University Officials to Travel Abroad',
    downloadUrl: '#',
  },
]