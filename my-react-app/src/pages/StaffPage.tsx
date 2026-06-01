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
      <div className="flex flex-col items-center text-center w-48">
        <img
          src={member.image}
          alt={member.name}
          className="w-36 h-44 object-cover object-top border-3 border-[#c9922a] mb-3"
          style={{ border: '3px solid #c9922a' }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <p className="text-xs font-bold text-[#4a0b16] leading-snug">{member.name}</p>
        {member.nickname && (
          <p className="text-[11px] text-gray-400">({member.nickname})</p>
        )}
        <p className="text-[11px] text-gray-500 italic mt-0.5">{member.role}</p>
        {member.phone && (
          <p className="text-[11px] text-gray-500 mt-1">{member.phone}</p>
        )}
        
         <a href={`mailto:${member.email}`}
          className="text-[11px] text-[#800000] border-b border-[#80000040] mt-1 hover:text-[#4a0b16] break-all"
        >
          {member.email}
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white border border-[#80000020] border-t-4 border-t-[#c9922a] rounded-b-lg flex flex-col items-center text-center overflow-hidden hover:shadow-md transition-shadow duration-200 min-h-[280px]">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 object-cover object-[center_15%] block"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          if (target.parentElement) {
            target.parentElement.style.background = '#f0e8e8'
          }
        }}
      />
      <div className="px-2.5 py-3 flex flex-col items-center gap-0.5">
        <p className="text-[11px] font-bold text-[#4a0b16] leading-snug">{member.name}</p>
        {member.nickname && (
          <p className="text-[10px] text-gray-400">({member.nickname})</p>
        )}
        <p className="text-[10px] text-gray-500 italic mt-0.5">{member.role}</p>
        
         <a href={`mailto:${member.email}`}
          className="text-[10px] text-[#800000] border-b border-[#80000040] mt-1 hover:text-[#4a0b16] break-all"
        >
          {member.email}
        </a>
      </div>
    </div>
  )
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-16">

      {/* Page header */}
      <div className="bg-[#4a0b16] border-b-4 border-[#c9922a] px-5 pt-24 pb-9 text-center">
        <h1 className="text-[#e8c97a] text-3xl font-bold tracking-widest uppercase mb-1.5">
          Staff Directory
        </h1>
        <p className="text-white/50 text-sm">
          Academic Establishments Division · University of Peradeniya
        </p>
      </div>

      {/* Senior officers */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <p className="text-center text-[11px] font-bold tracking-widest uppercase text-[#c9922a] mb-7">
          Senior Officers
        </p>
        <div className="flex justify-center gap-12 flex-wrap">
          {seniorOfficers.map((member) => (
            <StaffCard key={member.id} member={member} size="large" />
          ))}
        </div>
        <div className="w-14 h-0.5 bg-[#c9922a] mx-auto mt-10" />
      </div>

      {/* Management assistants */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <p className="text-center text-[11px] font-bold tracking-widest uppercase text-[#c9922a] mb-7">
          Management Assistants
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {managementAssistants.map((member) => (
            <StaffCard key={member.id} member={member} size="small" />
          ))}
        </div>
      </div>

    </div>
  )
}