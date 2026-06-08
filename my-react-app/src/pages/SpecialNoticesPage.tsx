interface Notice {
  id: number
  title: string
  date: string
  downloadLabel?: string
  downloadUrl?: string
}

const notices: Notice[] = [
  {
    id: 1,
    title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    date: '2024-01-15',
    downloadLabel: 'Online System for Obtaining Approval for University Officials to Travel Abroad',
    downloadUrl: '#',
  },
]

export default function SpecialNoticesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">

      {/* Page header */}
      <section className="relative h-[360px] w-full overflow-hidden">
       
        <div 
          className="absolute inset-0  z-1 bg-cover bg-center contrast-100 grayscale-45 " 
          style={{ backgroundImage: "url('/aeu.png')" }}
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)] " />

        {/* Decorative shape - Right Bottom */}
        <div
          className="absolute top-0 right-0 z-30 h-full w-[55%] bg-[#3C0008]/40"
          style={{ 
            clipPath: 'polygon(100% 0, 100% 100%, 35% 100%, 55% 0)' 
          }}
        />

        {/* Title - Left Corner */}
        <div className="absolute bottom-12 left-8 md:left-12 z-40">
          <h1 className="text-[#ffffff] text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Special Notices
          </h1>
          <p className="text-white/70 text-sm md:text-base mt-2 tracking-wide">
            Important announcements from the Academic Establishments Division
          </p>
        </div>
      </section>

      {/* Notices list */}
      <div className="max-w-3xl mx-auto mt-12 px-6 flex flex-col gap-4">
        {notices.length === 0 ? (
          <p className="text-center text-gray-400 text-sm py-16">
            No notices at this time.
          </p>
        ) : (
          notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white border border-[#80000020] rounded-lg flex overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* Left icon bar */}
              <div className="bg-[#4a0b16] w-12 shrink-0 flex items-start justify-center pt-5">
                <span className="text-lg">🔔</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs text-[#c9922a] font-semibold tracking-wider uppercase">
                  {new Date(notice.date).toLocaleDateString('en-LK', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className="text-base font-semibold text-[#4a0b16] leading-relaxed">
                  {notice.title}
                </h2>

                {notice.downloadUrl && (
                  
                    <a href={notice.downloadUrl}
                    className="inline-flex items-center gap-2.5 mt-1 text-sm text-gray-500 underline underline-offset-2 hover:text-[#4a0b16] transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="bg-[#4a0b16] text-[#e8c97a] text-[11px] font-bold px-2 py-0.5 rounded tracking-wider no-underline shrink-0">
                      Download
                    </span>
                    {notice.downloadLabel}
                  </a>
                )}
              </div>

            </div>
          ))
        )}
      </div>

    </div>
  )
}