import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const divisionDetails = [
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
  { id: 1, src: '/uop.jpg',  alt: 'University View 1' },
  { id: 2, src: '/uop1.jpg', alt: 'University View 2' },
  { id: 3, src: '/uop2.jpg', alt: 'University View 3' },
]

const functions = [
  'Determining the cadre requirements of academic and academic support staff',
  'Updating and maintaining cadre statistics',
  'Handling recruitment, confirmation, increments, and promotions',
  'Maintaining personal files of all staff members',
  'Managing leave, training, and scholarships',
  'Attending to staff welfare (loans, insurance, service certificates)',
  'Handling Research Allowance and salary revisions',
  'Coordinating disciplinary and litigation matters',
  'Managing retirement benefits (UPF, EPF, ETF, Pensions)',
  'Handling contractual and assignment-based appointments',
  'Appointing Heads of Academic Departments',
  'Coordinating trade union issues and recruitment exams',
  'Managing Bonds and Agreements (including violations)',
  'Convening the Leave and Awards Committee',
]

export default function AboutPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* Page header */}
      <div className="bg-[#4a0b16] border-b-4 border-[#c9922a] px-5 pt-14 pb-9 text-center">
        <h1 className="text-[#e8c97a] text-3xl font-bold tracking-widest uppercase">
          About Us
        </h1>
      </div>

      {/* Swiper banner */}
      <div className="relative w-full bg-[#4a0b16] py-14 overflow-hidden">
        {/* Blurred background */}
        <div
          className="absolute inset-0 scale-110 blur-2xl brightness-40 z-0"
          style={{ backgroundImage: "url('/uop.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(15px) brightness(0.4)' }}
        />
        {/* Swiper */}
        <div className="relative z-10 w-11/12 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl h-112.5">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            style={{ width: '100%', height: '100%' }}
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
      </div>

      {/* About text */}
      <div className="max-w-3xl mx-auto px-5 py-12 text-base leading-relaxed text-gray-700 space-y-4">
        <p>
          The Academic Establishments Division is one of the most important Divisions in the University.
          Presently the entire Department is managed by two officers — one at the Senior Assistant Registrar
          level and the other at the Assistant Registrar level — with the assistance of several Management Assistants.
        </p>
        <p>
          The primary function of the Establishments Division is the recruitment of qualified staff and
          retaining them in the service in line with the corporate goals of the University. The Division
          also assists the University Council in the development, maintenance, and interpretation of human
          resources management procedures in accordance with the Establishment Code and Rules and Regulations
          of the University Grants Commission.
        </p>
        <p>
          This Division not only recruits teaching staff but also performs all functions necessary to promote
          them to higher grades, handles annual salary increments, and grants various types of leave to academic staff.
        </p>
        <p>
          The Division is also responsible for advertising academic cadre positions twice a year — in January
          and July — and maintains the personal files of all academic and academic support staff.
        </p>
      </div>

      {/* Functions card */}
      <div className="max-w-4xl mx-auto px-5 mb-14">
        <div className="bg-[#ffcc00] rounded-xl p-10 shadow-md">
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-center border-b-2 border-gray-800 pb-3 mb-6">
            Main Functions of the Department
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 list-none p-0">
            {functions.map((fn, i) => (
              <li key={i} className="relative pl-6 text-sm font-medium leading-snug">
                <span className="absolute left-0 font-bold text-[#800000]">✓</span>
                {fn}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vision / Mission / Services cards */}
      <div className="max-w-4xl mx-auto px-5 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {divisionDetails.map((item) => (
          <div
            key={item.id}
            className="border border-gray-100 rounded-xl p-8 hover:-translate-y-1 transition-transform duration-200"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}