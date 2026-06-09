import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AgreementForm from '../applicationforms/AgreementForm'
import Appendix16Form from '../applicationforms/AgreementForm'
import ApplicationforConfirmationForm from '../applicationforms/AgreementForm'
import ApplicationforRailwayWarrantsForm from '../applicationforms/AgreementForm'
import ApplicationforSabbaticalLeaveForm from '../applicationforms/AgreementForm'
import ApplicationforTRForm from '../applicationforms/AgreementForm'
import ApplicationforUniversityIdentityCardsForm from '../applicationforms/AgreementForm'
import ConcessionaryMotorVehiclePermitForm from '../applicationforms/AgreementForm'
import ETFForm from '../applicationforms/AgreementForm'
import ProbationaryLeaveApplicationForm from '../applicationforms/AgreementForm'
import { applications } from '../data/applications'





export default function ApplicationsPage() {
  const { slug } = useParams()
  const [search, setSearch] = useState('')

  if (slug === 'agreement')      return <AgreementForm />
  if (slug === 'appendix-16')    return <Appendix16Form />
  if (slug === 'promotion')      return <ApplicationforConfirmationForm />
  if (slug === 'railway')        return <ApplicationforRailwayWarrantsForm />
  if (slug === 'sabbatical')     return <ApplicationforSabbaticalLeaveForm />
  if (slug === 'leave')          return <ApplicationforTRForm />
  if (slug === 'identity-cards') return <ApplicationforUniversityIdentityCardsForm />
  if (slug === 'motor-vehicle')  return <ConcessionaryMotorVehiclePermitForm />
  if (slug === 'etf-form')       return <ETFForm />
  if (slug === 'probationary')   return <ProbationaryLeaveApplicationForm />

  const filtered = applications.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <section className="relative h-[360px] w-full overflow-hidden">
      <div 
          className="absolute inset-0  z-1 bg-cover bg-center contrast-100 grayscale-45 " 
          style={{ backgroundImage: "url('/aeu.png')" }}
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)] " />

        {/* Decorative shape - Right Bottom */}
        <div
          className="absolute top-0 left-0 z-30 h-full w-[57%] bg-[#B59410]/20"
          style={{ 
            clipPath: 'polygon(0% 0, 0% 100%, 65% 100%, 45% 0)' 
          }}
        />

      {/* Page header */}
          <div className="absolute bottom-12 left-8 md:left-12 z-40">
            <h1 className="text-[#ffffff] text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              Applications & <span className="text-[#B59410] ">Forms</span>
            </h1>
            <p className="text-white/50 text-sm">
              Download the relevant forms and submit them to the division
            </p>
          </div>
      </section>

      <div className="max-w-4xl mx-auto mt-10 px-6">

        {/* Search bar */}
        <div className="flex items-center gap-3 bg-white border border-[#80000033] rounded-lg px-4 py-2.5 mb-6">
          <span className="text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search applications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none text-sm text-[#4a0b16] bg-transparent w-full placeholder-gray-300"
          />
        </div>

        {/* Applications list */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-16">
              No applications found.
            </p>
          ) : (
            filtered.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-[#80000020] border-l-4 border-l-[#c9922a] rounded-r-lg px-5 py-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <span className="text-2xl shrink-0">📄</span>

                {/* Title */}
                <p className="flex-1 text-sm font-semibold text-[#4a0b16] leading-snug">
                  {app.title}
                </p>

                {/* Download button */}
                
                 <a href={app.downloadUrl}
                  className="shrink-0 text-xs font-semibold text-[#4a0b16] border border-[#80000050] px-4 py-1.5 rounded hover:bg-[#4a0b16] hover:text-[#e8c97a] transition-colors duration-150"
                  download
                >
                  ↓ Download
                </a>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}