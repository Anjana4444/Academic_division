import React from 'react'

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0d0d0d] font-sans text-neutral-300 overflow-x-hidden scroll-smooth">

      {/* ==========================================
          1. HERO BANNER SECTION (Matched with HomePage Layout)
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
          className="absolute inset-0 z-1 bg-cover bg-center contrast-110 grayscale-85" 
          style={{ backgroundImage: "url('/slide-4.jpg')" }}
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)]" />
        
        {/* Hero Content */}
        <div className="relative z-4 max-w-225 px-5">
          <h1 className="m-0 mb-6 font-sans text-[3.2rem] font-bold leading-[1.2] tracking-normal text-white md:text-5xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            About <span className="text-[#B59410]">Our Division</span>
          </h1>
          
          <p className="font-sans font-bold text-[15px] text-[#dddddd] tracking-[0.5px] mb-6">
            Upholding academic excellence through dedicated administration at the heart <br />
            of the University of Peradeniya.
          </p>
        </div>
      </header>

      {/* ==========================================
          2. CORE INTENTION QUOTE BLOCK 
          (Ref: Screenshot 2026-06-02 141817.png)
         ========================================== */}
      <section className="relative flex min-h-[280px] w-full flex-col justify-center items-center overflow-hidden bg-[#3C0008] px-6 py-12 text-center border-b border-neutral-900">
        <div className="relative z-[4] w-full max-w-4xl px-5 flex flex-col items-center">         
          
          {/* Top Elegant Quotation Treatment */}
          <span className="font-serif text-5xl text-[#B59410]/40 leading-none mb-1 select-none">“</span>

          {/* Core Intention Statement */}
          <p className="font-serif italic text-lg md:text-2xl font-normal leading-relaxed text-neutral-200 max-w-3xl tracking-wide">
            The Academic Establishments Division is one of the most important Divisions in the University, 
            dedicated to recruiting qualified staff and retaining them in service in line with the corporate goals of the University.
          </p>

          <span className="font-serif text-5xl text-[#B59410]/40 leading-none mt-1 h-3 select-none">”</span>

          {/* Accent Gold Divider Line */}
          <div className="mt-6 h-[2px] w-16 bg-[#B59410]/80" />
        </div>
      </section>

      {/* ==========================================
          3. SPLIT TWO-COLUMN CONTENT & METRICS GRID 
          (Ref: Screenshot 2026-06-02 141830.png & 141843.png)
         ========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Body Descriptions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[1px] w-6 bg-[#B59410]" />
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-[#B59410]">
              Our Division
            </span>
          </div>

          <h2 className="font-sans text-3xl md:text-4xl font-light text-white leading-tight">
            Managing <span className="text-[#B59410] font-serif italic">Academic Human Resources</span> with Excellence
          </h2>

          <div className="space-y-5 text-sm md:text-base text-neutral-400 font-light leading-relaxed pt-2">
            <p>
              The entire Department is presently managed by two officers — one at the Senior Assistant Registrar 
              level and the other at the Assistant Registrar level — supported by several Management Assistants.
            </p>
            <p>
              The primary function of the Establishments Division is the recruitment of qualified staff and 
              retaining them in service in line with the corporate goals of the University. The Division 
              also assists the University Council in the development, maintenance, and interpretation of human 
              resources management procedures in accordance with the Establishment Code and the Rules & Regulations 
              of the University Grants Commission.
            </p>
            <p>
              This Division not only recruits teaching staff but also performs all functions necessary to promote 
              them to higher grades, administers annual salary increments, and grants members of the Academic staff 
              various types of leave they are entitled to.
            </p>
            <p>
              In addition, the Division is responsible for advertising academic cadre positions vacant in 
              Departments of different Faculties — both in newspapers and on the University website — twice a year, 
              in <span className="text-[#B59410] font-medium">January</span> and <span className="text-[#B59410] font-medium">July</span>.
            </p>
            <p>
              The Division also maintains personal files of academic staff members and academic support staff, 
              updates information on approved cadres, and makes requests to the UGC for additional cadre positions.
            </p>
          </div>
        </div>

        {/* Right Side: Stacked Gold Accent KPI Metric Cards */}
        <div className="lg:col-span-5 w-full space-y-4">
          
          <div className="border-l-2 border-[#B59410]/70 bg-[#3C0008] p-6 rounded-r-lg shadow-sm">
            <div className="font-serif text-3xl text-[#B59410] mb-1">2</div>
            <div className="text-sm font-semibold text-neutral-200">Senior Officers</div>
            <div className="text-xs text-neutral-500 mt-1">Senior Assistant Registrar & Assistant Registrar leading the Division</div>
          </div>

          <div className="border-l-2 border-[#B59410]/70 bg-[#121212] p-6 rounded-r-lg shadow-sm">
            <div className="font-serif text-3xl text-[#B59410] mb-1">2×</div>
            <div className="text-sm font-semibold text-neutral-200">Annual Vacancy Advertising</div>
            <div className="text-xs text-neutral-500 mt-1">Academic positions advertised every January and July nationwide</div>
          </div>

          <div className="border-l-2 border-[#B59410]/70 bg-[#121212] p-6 rounded-r-lg shadow-sm">
            <div className="font-serif text-3xl text-[#B59410] mb-1">UGC</div>
            <div className="text-sm font-semibold text-neutral-200">Cadre Management</div>
            <div className="text-xs text-neutral-500 mt-1">Coordinates directly with the University Grants Commission for cadre approvals</div>
          </div>

          <div className="border-l-2 border-[#B59410]/70 bg-[#121212] p-6 rounded-r-lg shadow-sm">
            <div className="font-serif text-3xl text-[#B59410] mb-1">100%</div>
            <div className="text-sm font-semibold text-neutral-200">Staff File Coverage</div>
            <div className="text-xs text-neutral-500 mt-1">Personal files maintained for all academic, temporary and support staff</div>
          </div>

        </div>
      </section>

      {/* ==========================================
          4. MAIN FUNCTIONS MATRIX 
          (Ref: Screenshot 2026-06-02 141854.jpg)
         ========================================== */}
      <section className="bg-[#111111] py-20 border-t border-b border-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-[1px] w-6 bg-[#B59410]" />
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-[#B59410]">What We Do</span>
              <span className="h-[1px] w-6 bg-[#B59410]" />
            </div>
            <h2 className="font-sans text-3xl font-light text-white">
              Main <span className="text-[#B59410] font-serif italic">Functions</span> of the Division
            </h2>
          </div>

          {/* Grid Layout Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="relative bg-[#161616] border border-neutral-800 p-8 rounded-lg hover:border-neutral-700 transition-colors">
              <div className="absolute top-6 right-8 font-serif text-xl text-neutral-800 font-bold">01</div>
              <div className="text-2xl text-[#B59410] mb-4">👥</div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Cadre Determination & Statistics</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Determining cadre requirements of academic and academic support staff; updating and maintaining cadre statistics including temporary academic staff.</p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#161616] border border-neutral-800 p-8 rounded-lg hover:border-neutral-700 transition-colors">
              <div className="absolute top-6 right-8 font-serif text-xl text-neutral-800 font-bold">02</div>
              <div className="text-2xl text-[#B59410] mb-4">💼</div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Recruitment & Promotion</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Handling all matters pertaining to recruitment, confirmation, annual increments, promotion, extension of services and termination of staff.</p>
            </div>

            {/* Card 3 (Featured Gold Highlighted Layout) */}
            <div className="relative bg-[#1a1915] border border-[#B59410]/40 p-8 rounded-lg shadow-lg shadow-[#B59410]/5">
              <div className="absolute top-6 right-8 font-serif text-xl text-[#B59410]/30 font-bold">03</div>
              <div className="text-2xl text-[#B59410] mb-4">📄</div>
              <h3 className="text-base font-semibold text-[#B59410] mb-2">Personal File Management</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">Maintaining personal files of all academic, temporary and academic support staff with accurate, up-to-date records.</p>
            </div>

            {/* Card 4 */}
            <div className="relative bg-[#161616] border border-neutral-800 p-8 rounded-lg hover:border-neutral-700 transition-colors">
              <div className="absolute top-6 right-8 font-serif text-xl text-neutral-800 font-bold">04</div>
              <div className="text-2xl text-[#B59410] mb-4">📅</div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Leave, Training & Scholarships</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Handling matters relating to leave entitlements, training opportunities and scholarships for academic and academic support staff.</p>
            </div>

            {/* Card 5 */}
            <div className="relative bg-[#161616] border border-neutral-800 p-8 rounded-lg hover:border-neutral-700 transition-colors">
              <div className="absolute top-6 right-8 font-serif text-xl text-neutral-800 font-bold">05</div>
              <div className="text-2xl text-[#B59410] mb-4">🛡️</div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Staff Welfare</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Attending to welfare matters: loans, long service awards, railway warrants, season tickets, health insurance, vehicle permits and service certificates.</p>
            </div>

            {/* Card 6 */}
            <div className="relative bg-[#161616] border border-neutral-800 p-8 rounded-lg hover:border-neutral-700 transition-colors">
              <div className="absolute top-6 right-8 font-serif text-xl text-neutral-800 font-bold">06</div>
              <div className="text-2xl text-[#B59410] mb-4">💰</div>
              <h3 className="text-base font-semibold text-neutral-200 mb-2">Salary & Allowances</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">Handling matters relating to Research Allowance payments, salary revisions and rectification of salaries for eligible staff members.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          5. COMPLETE SCOPE MATRIX 
          (Ref: Screenshot 2026-06-02 141908.png)
         ========================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-6 bg-[#B59410]" />
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-[#B59410]">Full Scope</span>
            <span className="h-[1px] w-6 bg-[#B59410]" />
          </div>
          <h2 className="font-sans text-3xl font-light text-white">
            Complete <span className="text-[#B59410] font-serif italic">Responsibilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800 rounded-lg overflow-hidden bg-[#121212]">
          
          {/* Column 1 items grouped together */}
          <div className="divide-y divide-neutral-800/60">
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">01</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Cadre Requirements</h4>
                <p className="text-xs text-neutral-500">Determining the cadre requirements of academic and academic support staff across all Faculties.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">03</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Recruitment & Lifecycle</h4>
                <p className="text-xs text-neutral-500">Handling all matters pertaining to recruitment, confirmation, annual increments, promotion, extension of services and termination of staff.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">05</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Leave, Training & Scholarships</h4>
                <p className="text-xs text-neutral-500">Handling matters relating to leave, training opportunities and scholarships for academic and academic support staff.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">07</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Disciplinary & Litigation</h4>
                <p className="text-xs text-neutral-500">Coordinating complex disciplinary investigations and managing ongoing litigation matters with legal counsel.</p>
              </div>
            </div>
          </div>

          {/* Column 2 items grouped together */}
          <div className="divide-y divide-neutral-800/60">
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">02</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Cadre Statistics</h4>
                <p className="text-xs text-neutral-500">Updating and maintaining cadre statistics of academic staff, academic support staff and temporary academic staff.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">04</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Personal File Maintenance</h4>
                <p className="text-xs text-neutral-500">Maintaining personal files of all academic, temporary and academic support staff with accurate, current records.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">06</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Staff Welfare</h4>
                <p className="text-xs text-neutral-500">Loans, long service awards, railway warrants, season tickets, health insurance, vehicle permits and issuing service certificates.</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-[10px] font-mono text-[#B59410]">08</span>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 mb-1">Retirement Benefits</h4>
                <p className="text-xs text-neutral-500">Managing comprehensive retirement disbursements including UPF, EPF, ETF, and institutional Pensions scheme setups.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}