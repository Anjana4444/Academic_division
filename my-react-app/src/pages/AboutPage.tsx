import React from 'react'

export default function AboutPage() {
  const cardData = [
    { id: "01", title: "Cadre Requirements", desc: "Determining the cadre requirements of academic and academic support staff across all Faculties." },
    { id: "02", title: "Cadre Statistics", desc: "Updating and maintaining cadre statistics of academic staff, academic support staff and temporary academic staff." },
    { id: "03", title: "Recruitment & Lifecycle", desc: "Handling all matters pertaining to recruitment, confirmation, annual increments, promotion, extension of services and termination of staff." },
    { id: "04", title: "Personal File Maintenance", desc: "Maintaining personal files of all academic, temporary and academic support staff with accurate, current records." },
    { id: "05", title: "Leave, Training & Scholarships", desc: "Handling matters relating to leave, training opportunities and scholarships for academic and academic support staff." },
    { id: "06", title: "Staff Welfare", desc: "Loans, long service awards, railway warrants, season tickets, health insurance, vehicle permits and issuing service certificates." },
    { id: "07", title: "Research Allowance", desc: "Handling matters relating to payment of Research Allowance to all eligible staff members." },
    { id: "08", title: "Salary Revisions", desc: "Handling matters relating to salary revisions and rectification of salaries for all categories of staff." },
    { id: "09", title: "Disciplinary Matters", desc: "Handling and coordinating all disciplinary matters of academic and academic support staff." },
    { id: "10", title: "Retirement Benefits", desc: "UPF, EPF, ETF, Pensions Fund and all related matters on cessation of employment." },
    { id: "11", title: "Contractual Appointments", desc: "Handling matters relating to appointment of academic and academic support staff on contractual and assignment basis." },
    { id: "12", title: "Academic Positions", desc: "Handling matters relating to appointments to academic positions such as Heads of Academic Departments." },
    { id: "13", title: "Trade Union Coordination", desc: "Coordinating all matters relating to trade union issues across academic departments and faculties." },
    { id: "14", title: "Recruitment Examinations", desc: "Coordinating and conducting recruitment examinations and trade tests for academic support staff." },
    { id: "15", title: "Bonds & Agreements", desc: "Handling all administrative functions of bonds and agreements including bond violation of university academic staff." },
    { id: "16", title: "Litigation Matters", desc: "Attending to litigation matters with regard to academic and academic support staff recruitment and termination of services." },
    { id: "17", title: "Leave & Awards Committee", desc: "Convening the meetings of the Leave and Awards Committee and ensuring timely follow-up action on all decisions." }
  ];

  return (
    <div className="w-full bg-[#ffffff] font-sans text-neutral-300 overflow-x-hidden scroll-smooth">

      {/* ==========================================
          1. HERO BANNER SECTION (Matched with HomePage Layout)
         ========================================== */}
     <header id="home" className="relative grid min-h-[50vh] w-full grid-cols-1 overflow-hidden bg-[#3C0008] text-white md:grid-cols-3">
  
  {/* Left Section (1/3 width on desktop): Solid Color & Text */}
  <div className="flex flex-col justify-center bg-[#ffffff] px-8 py-12 md:col-span-1 md:px-12">
    <div className="w-full text-left">
      <h1 className="m-14 mb-6 font-sans text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight uppercase tracking-normal text-[#3C0008] drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
  About <span className="text-[#B59410]">Our Division</span>
</h1>
      
      <p className="font-sans text-[14px] font-bold tracking-[0.5px] text-[#3C0008]">
        Upholding academic excellence through dedicated administration at the heart of the University of Peradeniya.
      </p>
    </div>
  </div>

  {/* Right Section (2/3 width on desktop): Background Image */}
  <div className="relative min-h-[35vh] md:col-span-2 md:min-h-full">
    {/* Main background image */}
    
    <div 
      className="absolute inset-0 bg-cover bg-center contrast-100 grayscale-[45%] " 
      style={{ backgroundImage: "url('/aboutt.png')" }}
    />
    {/* Radial overlay */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(60,0,8,0.2)_10%,rgba(60,0,8,0.6)_90%)]" />
  </div>

</header>

    

      <section className="relative flex min-h-[280px] w-full flex-col justify-center items-center overflow-hidden bg-[#7d6a6a] px-6 py-16 text-center">
        {/* Decorative Top-Left Corner */}
        <div className="absolute border-4 border-[#B59410]/55 border-b-0 border-r-0 top-6 left-6 h-40 w-40" />
        
        {/* Decorative Bottom-Right Corner */}
        <div className="absolute border-4 border-[#B59410]/55 border-t-0 border-l-0 bottom-6 right-6 h-40 w-40" /> 

        <div className="relative z-[4] w-full max-w-4xl px-8 flex flex-col items-center">     
          
          {/* Core Intention Statement with Integrated Quotation Marks */}
          <p className="font-serif text-lg md:text-2xl font-normal italic leading-relaxed text-neutral-200 max-w-3xl tracking-wide">
            <span className="font-serif text-4xl md:text-5xl text-[#B59410]/40 select-none align-top mr-1">“</span>
            The Academic Establishments Division is one of the most important Divisions in the University, 
            dedicated to recruiting qualified staff and retaining them in service in line with the corporate goals of the University.
            <span className="font-serif text-4xl md:text-5xl text-[#B59410]/40 select-none align-bottom ml-1">”</span>
          </p>

          {/* Accent Gold Divider Line */}
          <div className="mt-6 h-[2px] w-16 bg-[#B59410]/80" />
        </div>
      </section>

      



      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Body Descriptions */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-3 mb-2">
            
            
          </div>

          <h2 className="font-sans text-[2.8rem] md:text-4xl font-bold text-[#B59410] leading-tight">
            Managing <span className="text-[#3C0008] font-serif italic">Academic Human Resources</span> with Excellence
          </h2>

          <div className="space-y-5 text-sm md:text-base text-[#3C0008] font-normal font-sans leading-relaxed pt-2 text-justify">
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
              in <span className="text-[#B59410] font-bold">January</span> and <span className="text-[#B59410] font-bold">July</span>.
            </p>
            <p>
              The Division also maintains personal files of academic staff members and academic support staff, 
              updates information on approved cadres, and makes requests to the UGC for additional cadre positions.
            </p>
          </div>
        </div>




        {/* Right Side: Stacked Gold Accent KPI Metric Cards */}
        <div className="lg:col-span-5 w-full space-y-4">
  
  {/* Card 1 */}
        <div className="border-l-4 border-[#3C0008]/70 bg-[#ffffff] p-6 rounded-r-lg shadow-sm transform transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_10px_rgba(181,148,16,0.5)]">
          <div className="font-serif text-3xl text-[#B59410] mb-1">2</div>
          <div className="text-sm font-semibold text-neutral-800">Senior Officers</div>
          <div className="text-xs text-neutral-500 mt-1">Senior Assistant Registrar & Assistant Registrar leading the Division</div>
        </div>

        {/* Card 2 */}
        <div className="border-l-4 border-[#3C0008]/70 bg-[#ffffff] p-6 rounded-r-lg shadow-sm transform transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_10px_rgba(181,148,16,0.5)]">
          <div className="font-serif text-3xl text-[#B59410] mb-1">2×</div>
          <div className="text-sm font-semibold text-neutral-800">Annual Vacancy Advertising</div>
          <div className="text-xs text-neutral-500 mt-1">Academic positions advertised every January and July nationwide</div>
        </div>

        {/* Card 3 */}
        <div className="border-l-4 border-[#3C0008]/70 bg-[#ffffff] p-6 rounded-r-lg shadow-sm transform transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_10px_rgba(181,148,16,0.5)]">
          <div className="font-serif text-3xl text-[#B59410] mb-1">UGC</div>
          <div className="text-sm font-semibold text-neutral-800">Cadre Management</div>
          <div className="text-xs text-neutral-500 mt-1">Coordinates directly with the University Grants Commission for cadre approvals</div>
        </div>

        {/* Card 4 */}
        <div className="border-l-4 border-[#3C0008]/70 bg-[#ffffff] p-6 rounded-r-lg shadow-sm transform transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_10px_rgba(181,148,16,0.5)]">
          <div className="font-serif text-3xl text-[#B59410] mb-1">100%</div>
          <div className="text-sm font-semibold text-neutral-800">Staff File Coverage</div>
          <div className="text-xs text-neutral-500 mt-1">Personal files maintained for all academic, temporary and support staff</div>
        </div>

      </div>
      </section>

     
     


      <section className="bg-[#7d6a6a] py-20 border-t border-b border-neutral-200">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-16">
      
      <h2 className="font-sans text-[2.8rem]  font-bold text-white">
        Main <span className="text-[#3C0008] font-serif italic">Functions</span> of the Division
      </h2>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Card 1 */}
      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">01</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Cadre Determination & Statistics</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Determining cadre requirements of academic and academic support staff; updating and maintaining cadre statistics including temporary academic staff.</p>
      </div>

      {/* Card 2 */}
      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">02</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Recruitment & Promotion</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Handling all matters pertaining to recruitment, confirmation, annual increments, promotion, extension of services and termination of staff.</p>
      </div>

      {/* Featured Card 3 */}
      <div className="group relative bg-white border-2 border-[#B59410] p-8 rounded-lg shadow-md shadow-[#B59410]/10 hover:bg-[#FFF9E6] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl  text-neutral-300 group-hover:text-[#B59410]/30 font-bold">03</div>
        <h3 className="text-base font-bold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Personal File Management</h3>
        <p className="text-xs text-neutral-600 leading-relaxed font-medium group-hover:text-neutral-700">Maintaining personal files of all academic, temporary and academic support staff with accurate, up-to-date records.</p>
      </div>

      {/* Card 4 */}
      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">04</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Leave, Training & Scholarships</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Handling matters relating to leave entitlements, training opportunities and scholarships for academic and academic support staff.</p>
      </div>

      {/* Card 5 */}
      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">05</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Staff Welfare</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Attending to welfare matters: loans, long service awards, railway warrants, season tickets, health insurance, vehicle permits and service certificates.</p>
      </div>

      {/* Card 6 */}
      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">06</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Salary & Allowances</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Handling matters relating to Research Allowance payments, salary revisions and rectification of salaries for eligible staff members.</p>
      </div>

      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">07</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Disciplinary & Legal Matters</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Handling and coordinating all disciplinary matters of staff and attending to litigation matters with regard to recruitment and termination of services.</p>
      </div>

      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">08</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Retirement Benefits</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Attending to matters relating to retirement benefits — UPF, EPF, ETF, Pensions Fund etc. — on cessation of staff employment.</p>
      </div>

      <div className="group relative bg-white border border-neutral-200 p-8 rounded-lg shadow-sm hover:border-[#B59410] hover:bg-[#FFF9E6] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute top-6 right-8 font-serif text-xl text-neutral-300 group-hover:text-[#B59410]/30 font-bold">09</div>
        <h3 className="text-base font-semibold text-[#3C0008] mb-2 group-hover:text-[#B59410]">Contractual Appointments & Trade Unions</h3>
        <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-600">Handling contractual and assignment-basis appointments, coordinating trade union issues, and conducting recruitment examinations and trade tests.</p>
      </div>

    </div>
  </div>
</section>
      



      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          
          <h2 className="font-sans text-[2.8rem] font-bold  text-[#3C0008]">
            Complete <span className="text-[#B59410] font-bold font-serif italic">Responsibilities</span>
          </h2>
        </div>

        {/* HIGHLIGHT: Cleaned parent grid wrapper container by removing shared table/divider lines and adding a gap-4 space system */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
          {cardData.map((card) => (
            <div key={card.id} className="p-6 flex items-start gap-4 bg-[#7d6a6a] border border-neutral-800/80 rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1">
              <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#3C0008] flex items-center justify-center text-[15px] font-mono text-[#ffffff]">
                {card.id}
              </span>
              <div>
                <h4 className="text-[18px] font-semibold text-[#3C0008] mb-1">{card.title}</h4>
                <p className="text-[12px] text-[#ffffff]">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
      </section>

    </div>
  )
}