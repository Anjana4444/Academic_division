import React from 'react'

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
  if (size === 'large') {
    return (
      <div className="group bg-white border border-stone-200 shadow-sm rounded-xl p-5 flex flex-col items-center text-center w-64 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-[#c9922a]/50">
        <div className="relative w-50 h-58 mb-4 overflow-hidden rounded-lg border-2 border-[#c9922a]/30 transition-colors duration-300 group-hover:border-[#c9922a]">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        
        <h3 className="text-sm font-bold text-[#4a0b16] leading-snug group-hover:text-[#800000] transition-colors duration-200">
          {member.name}
        </h3>
        {member.nickname && (
          <p className="text-xs text-stone-400 font-medium mt-0.5">({member.nickname})</p>
        )}
        
        <p className="text-xs font-semibold text-[#c9922a] tracking-wide uppercase mt-2 px-2.5 py-0.5 bg-[#c9922a]/10 rounded-full">
          {member.role}
        </p>

        <div className="w-full border-t border-stone-100 my-3.5" />

        <div className="flex flex-col gap-1.5 w-full text-xs text-stone-600">
          {member.phone && (
            <div className="flex items-center justify-center gap-1.5" p-12>
              <svg className="w-3.5 h-3.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.73.73 0 00.58.53l3.28.9a1 1 0 01.7.94v3.9a1 1 0 01-.68.94l-2.69.94a11.95 11.95 0 005.61 5.61l.94-2.7a1 1 0 01.94-.68h3.9a1 1 0 01.94.7l.9 3.28a1 1 0 01-.7.94l-3.79 1.2a1 1 0 01-1.14-.34l-2.28-2.28a11.947 11.947 0 01-5.61-5.61L9.72 9.72a1 1 0 01-.34-1.14l1.2-3.79z" />
              </svg>
              <span>{member.phone}</span>
            </div>
          )}
          
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center justify-center gap-1.5 text-stone-500 hover:text-[#4a0b16] transition-colors break-all group/link"
          >
            <svg className="w-3.5 h-3.5 text-stone-400 group-hover/link:text-[#4a0b16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="border-b border-transparent group-hover/link:border-[#4a0b16]/40">{member.email}</span>
          </a>
        </div>
      </div>
    )
  }

  /* FIXED SMALL CARD CONFIGURATION */
  return (
    <div className="group bg-white border border-stone-200/80 rounded-xl flex flex-col overflow-hidden shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-md hover:border-[#c9922a]/40 w-full">
      {/* Changed aspect ratio to 4:3 landscape layout to stop vertical/head cropping */}
      <div className="relative w-full aspect-[3/3] overflow-hidden bg-stone-100 border-b border-stone-100">
        <img
          src={member.image}
          alt={member.name}
          /* Using object-cover with top centering focus so faces aren't clipped out of view */
          className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
  (e.target as HTMLImageElement).src = '/staff/placeholder.svg'
}}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-[#c9922a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      <div className="p-4 flex flex-col flex-grow items-center text-center justify-between min-h-[140px]">
        <div>
          <h3 className="text-xs font-bold text-[#4a0b16] leading-snug group-hover:text-[#800000] transition-colors duration-200 line-clamp-2">
            {member.name}
          </h3>
          {member.nickname && (
            <p className="text-[10px] text-stone-400 mt-0.5 font-medium">({member.nickname})</p>
          )}
          
          <p className="text-[11px] text-stone-500 italic mt-1">
            {member.role}
          </p>
        </div>
        
        <div className="w-full">
          <div className="w-full border-t border-stone-100 my-2.5" />
          
          <a 
            href={`mailto:${member.email}`}
            className="flex items-center gap-1 text-[10px] text-stone-500 hover:text-[#4a0b16] transition-colors w-full justify-center group/link"
          >
            <svg className="w-3 h-3 text-stone-400 group-hover/link:text-[#4a0b16] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate border-b border-transparent group-hover/link:border-[#4a0b16]/40">{member.email}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function StaffPage() {
  return (
    <div className=" selection:bg-[#4a0b16] selection:text-white">
      <section className="relative h-[360px] w-full overflow-hidden">
      <div 
          className="absolute inset-0  z-1 bg-cover bg-center contrast-100 grayscale-45 " 
          style={{ backgroundImage: "url('/staffbg.png')" }}
          
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)] " />
      {/* Page header */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[#ffffff] text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          Staff Directory
        </h1>
        <p className="text-white/70 text-sm max-w-xl mx-auto font-medium">
          Academic Establishments Division · University of Peradeniya
        </p>
      </div>

    </section>

      {/* Senior officers */}
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <div className="flex flex-col items-center mb-8">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#c9922a]">
            Senior Officers
          </p>
          <div className="w-8 h-0.5 bg-[#c9922a] mt-2" />
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          {seniorOfficers.map((member) => (
            <StaffCard key={member.id} member={member} size="large" />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 my-6">
        <div className="w-full h-px bg-stone-200" />
      </div>

      <div className= "bg-[#7d6a6a]">
      {/* Management assistants */}
        <div className="max-w-6xl mx-auto px-6 pt-6">
            <div className="flex flex-col items-center mb-8">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#ffffff]">
                Management Assistants
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {managementAssistants.map((member) => (
                <StaffCard key={member.id} member={member} size="small" />
              ))}
            </div>
        </div>
      </div>     
    </div>
  )
}