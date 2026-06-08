import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const coursesData = [
  { id: 1, tag: "CCNA", title: "Cadre Determination & Statistics", duration: "6 Weeks", starts: "5/4/2026", img: "/slide-4.jpg" },
  { id: 2, tag: "FullStack", title: "Recruitment & Promotion", duration: "20 Weeks", starts: "1/7/2026", img: "/slide-4.jpg" },
  { id: 3, tag: "CBCS", title: "Personal File Management", duration: "8 Weeks", starts: "9/8/2025", img: "/slide-4.jpg" },
  { id: 4, tag: "Python", title: "Leave, Training & Scholarships", duration: "10 Weeks", starts: "12/5/2026", img: "/slide-4.jpg" },
  { id: 5, tag: "CyberSec", title: "Staff Welfare", duration: "12 Weeks", starts: "15/6/2026", img: "/slide-4.jpg" },
  { id: 6, tag: "Cloud", title: "Salary & Allowances", duration: "6 Weeks", starts: "22/7/2026", img: "/slide-4.jpg" },
  { id: 7, tag: "UI/UX", title: "Disciplinary & Legal Matters", duration: "8 Weeks", starts: "01/8/2026", img: "/slide-4.jpg" },
  { id: 8, tag: "DevOps", title: "Retirement Benefits", duration: "14 Weeks", starts: "10/9/2026", img: "/slide-4.jpg" },
  { id: 9, tag: "Mobile", title: "Contractual Appointments & Trade Unions", duration: "10 Weeks", starts: "05/10/2026", img: "/slide-4.jpg" }
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-[#333333] scroll-smooth">
      

      {/* ==========================================
          HERO SECTION
         ========================================== */}
      <header id="home" className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#3C0008] text-center text-white">
        {/* Geometric angled backgrounds */}
        <div 
          className="absolute bottom-0 left-0 z-3 h-[45%] w-[35%] bg-[#3C0008]" 
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
        />
        <div 
          className="absolute top-0 right-0 z-3 h-[55%] w-[40%] bg-[#3C0008]" 
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        />
        
        {/* Main background image with its dark overlay */}
        <div 
          className="absolute inset-0 blur-[1px] z-1 bg-cover bg-center contrast-110 grayscale-85 " 
          style={{ backgroundImage: "url('/slide-4.jpg')" }}
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)] " />
        
        {/* Hero Content */}
        <div className="relative z-4 max-w-225 px-5">
          <h1 className="m-0 mb-6 font-sans text-[3.2rem] font-bold leading-[1.2] tracking-normal text-white md:text-4xl uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Academic <span className="text-[#B59410]">Establishments</span> Division
          </h1>
          
          <p className="font-sans font-bold text-[15px] text-[#dddddd] tracking-[0.5px] mb-6">
            Upholding academic excellence through dedicated administration at the heart <br />
            of the University of Peradeniya.
          </p>

          <button 
            onClick={() => navigate('/about')}
            className="group border border-[#B59410]/50 bg-transparent px-7.5 py-3 text-[12px] font-semibold tracking-[2px] text-white cursor-pointer transition-all duration-300 ease-in-out hover:border-[#B59410] hover:bg-[#B59410]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            LEARN MORE <span className="ml-2 text-[#B59410] inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </button>
        </div>
      </header>

      {/* ==========================================
          ABOUT SECTION
         ========================================== */}
      <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-5 py-30 text-center">
        {/* Micro Decorative Ambient Nodes */}
        <div className="absolute rounded-full bg-[#B59410] opacity-35 h-0.75 w-0.75 top-[15%] left-[12%]" />
        <div className="absolute rounded-full bg-[#B59410] h-1 w-1 top-[22%] right-[18%] opacity-50" />
        <div className="absolute rounded-full bg-[#B59410] opacity-35 h-1 w-1 bottom-[28%] left-[22%]" />
        <div className="absolute rounded-full bg-[#B59410] opacity-35 h-1 w-1 bottom-[18%] right-[8%]" />
        <div className="absolute rounded-full bg-[#B59410] h-1 w-1 top-[58%] left-[42%] opacity-25" />
        
        {/* Structural Frames */}
        <div className="absolute border-4 border-[#3C0008]/55 border-b-0 border-r-0 top-10 left-10 h-40 w-40" />
        <div className="absolute border-4 border-[#3C0008]/55 border-t-0 border-l-0 bottom-10 right-10 h-40 w-40" />

        <div className="relative z-5 w-full max-w-225">
          <h2 className="font-sans text-[3.2rem] font-bold leading-[1.3] tracking-[0.5px] text-[#3C0008] mb-11.25">
            One of the <span className="font-serif italic text-[#B59410]">most important</span> divisions in the University
          </h2>

          <div className="relative mx-auto max-w-190">
            <span className="absolute -top-11.25 -left-23.75 select-none font-serif text-[11rem] leading-none text-[#3C0008] opacity-25 pointer-events-none">
              “
            </span>
            <p className="font-sans font-light text-base leading-[1.8] text-[#3C0008]">
              The Academic Establishments Division is one of the most important divisions in the University. 
              Presently the entire department is managed by two officers — one at the Senior Assistant Registrar 
              level and the other at the Assistant Registrar level — with the assistance of several Management 
              Assistants.
            </p>
            <span className="absolute -bottom-35 -right-6.75 select-none font-serif text-[11rem] leading-none text-[#3C0008] opacity-25 pointer-events-none">
              ”
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          CORE FUNCTIONS SECTION (60/40 Split)
         ========================================== */}
      <section className="flex w-full justify-center overflow-hidden bg-[#3C0008] px-5 py-20 text-white">
        <div className="w-full max-w-300">
          
          <div className="mr-auto mb-6 max-w-212.5 text-start">
            <h2 className="font-sans text-[2.8rem] font-bold text-white mb-5">
              Core <span className="text-[#B59410]">Functions</span>       
            </h2>
            <p className="text-base font-light leading-[1.8] text-white text-justify">
              The Division manages all key human resource functions of the university. <br />
              We handle staff recruitment, cadre management, training, welfare, compensation, <br />
              and administrative support services. Our goal is to create a productive and <br />
              supportive environment for academic and non-academic staff.
            </p>
          </div>

          {/* Split Wrapper Layout */}
          <div className="relative flex flex-col items-center gap-7.5 lg:flex-row lg:gap-0 w-full lg:-mt-12">
            
            {/* Left Column: 65% width image layout pane */}
            <div className="relative z-1 w-full max-w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] lg:flex-[0_0_65%] lg:max-w-[65%] lg:-translate-x-1.25 h-75 lg:h-auto">
              <img 
                src="/side.png" 
                alt="Division Feature" 
                className="block h-full w-full object-cover  scale-[1.02]" 
              />
              {/* Fade gradient overlay matching side block background */}
              <div className="absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-transparent to-[#3C0008]/98" />
            </div>

            {/* Right Column: 35% overlay container block stacked in front */}
            <div className="relative z-5 flex w-full flex-col justify-center gap-3.5 lg:flex-[0_0_45%] lg:max-w-[35%] lg:ml-[-10%] lg:-mt-28">
              {coursesData.map((course) => (
                <div 
                  key={course.id} 
                  className="group/card relative cursor-pointer rounded-[10px] bg-white px-6 py-3.5 text-[#222222] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] cubic-bezier(0.25,1,0.5,1) hover:translate-x-2 border border-transparent hover:border-[#3C0008] hover:shadow-[0_14px_35px_rgba(0,0,0,0.45),0_0_15px_rgba(255,51,51,0.4),inset_0_0_20px_rgba(255,51,51,0.25)]"
                >
                  {/* Underlined slide effect via group hover utility mapping */}
                  <h3 className="relative inline-block pb-1 font-sans text-[1.1rem] font-semibold">
                    {course.title}
                    <span className="absolute bottom-0 left-0 h-0.75 w-full scale-x-0 bg-[#B59410] origin-bottom-left transition-transform duration-300 cubic-bezier(0.25,1,0.5,1) group-hover/card:scale-x-100" />
                  </h3>
                </div>
              ))}

              <button 
                onClick={() => navigate('/about')}
                className="border border-[#B59410]/50 bg-transparent px-7.5 py-3 text-[12px] font-semibold tracking-[2px] text-white cursor-pointer transition-all duration-300 ease-in-out self-start mt-4 hover:border-[#B59410] hover:bg-[#B59410]/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              >
                LEARN MORE <span className="ml-2 text-[#B59410]">↓</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          NOTICES SECTION
         ========================================== */}
      <section className="flex w-full justify-center bg-white px-5 py-20">
        <div className="w-full max-w-300">

          <div className="mx-auto mb-12.5 max-w-212.5 text-center">
            <h2 className="font-sans text-[2.8rem] font-bold text-[#3C0008] m-0 mb-4">
              Special <span className="text-[#B59410]">Notices</span>
            </h2>

            <button 
              onClick={() => navigate('/notices')}
              className="border border-[#B59410]/50 bg-transparent px-7.5 py-3 text-[12px] font-semibold tracking-[2px] text-[#3C0008] cursor-pointer transition-all duration-300 ease-in-out hover:border-[#B59410] hover:bg-[#B59410]/10"
            >
              LEARN MORE <span className="ml-2 text-[#B59410]">↓</span>
            </button>
          </div>
          
          <div className="flex w-full flex-col gap-5">
            {/* Notices mapped rows can go here */}
          </div>

        </div>
      </section>      

      {/* ==========================================
          APPLICATION SECTION
         ========================================== */}
      <section className="flex w-full justify-center bg-[#3C0008] px-5 py-16">
        <div className="w-full max-w-300">

          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-187.5 text-center">
            <h2 className="m-0 mb-3 font-sans text-[2.8rem] font-bold text-[#ffffff] md:text-3xl">
              Downloads & <span className="text-[#B59410]">Applications</span>
            </h2>
            <p className="text-sm leading-relaxed font-normal text-[#ffffff]">
              Access and download essential administrative forms, leave requests, and official templates managed by the division.
            </p>
          </div>
          
          {/* Applications List Container */}
          <div className="mx-auto flex max-w-225 w-full flex-row gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-200">
            
          </div>

          {/* Bottom View All Link Button */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/applications')}
              className="border border-[#B59410]/50 bg-transparent px-6 py-2.5 text-[11px] font-semibold tracking-[2px] text-[#ffffff] cursor-pointer transition-all duration-300 ease-in-out hover:border-[#B59410] hover:bg-[#B59410]/10"
            >
              VIEW ALL FORMS <span className="ml-1 text-[#B59410]">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          BLURRED BACKGROUND SECTION
         ========================================== */}
      <section className="relative flex min-h-87.5 w-full items-center justify-center overflow-hidden bg-[#3C0008] px-5 py-16 text-center">
        {/* Background image container */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/slide-4.jpg')" }}
        />
        
        {/* Heavy Blur and Dark Tint Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(60,0,8,0.2)_10%,rgba(60,0,8,0.6)_90%)] " />
        <div className="absolute inset-0 bg-linear-to-t from-[#ffffff]/20 via-transparent" />

        {/* Content Box */}
        <div className="relative z-10 max-w-175 rounded-xl border border-[#3C0008]/10 bg-[#3C0008]/10 p-8 backdrop-blur-sm shadow-2xl">
          <h2 className="m-0 mb-4 font-sans text-2xl font-bold tracking-wide text-white md:text-3xl">
            Have Any Administrative <span className="text-[#3C0008]">Queries</span>?
          </h2>
          <p className="mb-6 font-sans text-sm font-light leading-relaxed text-neutral-200">
            Our specialized team is here to assist university faculty and staff members with carder alignments, promotions, leave authorizations, and standard operating records.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="border border-white bg-white px-6 py-2.5 text-[11px] font-semibold tracking-[2px] text-[#3C0008] transition-all duration-300 hover:bg-[#B59410] hover:border-[#B59410] hover:text-white hover:shadow-[0_0_20px_rgba(181,148,16,0.4)]"
          >
            CONTACT OUR DIVISION
          </button>
        </div>
      </section>

    </div>
  )
}

export default HomePage