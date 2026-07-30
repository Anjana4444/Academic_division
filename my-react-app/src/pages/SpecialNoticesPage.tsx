import { useState, useEffect, useMemo } from 'react'
import { notices as defaultNotices } from '../data/notices'

interface NoticeItem {
  id: string | number
  title: string
  date: string | Date
  downloadUrl?: string
  downloadLabel?: string
}

export default function SpecialNoticesPage() {
  // --- 1. STATE MANAGEMENT ---
  const [noticesList, setNoticesList] = useState<NoticeItem[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filterType, setFilterType] = useState<'latest' | 'oldest' | 'custom'>('latest')
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')

  // Load notices dynamically from localStorage (synced with Admin panel)
  useEffect(() => {
    const savedNotices = localStorage.getItem('admin_notices')
    if (savedNotices) {
      setNoticesList(JSON.parse(savedNotices))
    } else {
      setNoticesList(defaultNotices)
    }
  }, [])

  // --- 2. SEARCH & FILTERING LOGIC ---
  const filteredAndSortedNotices = useMemo(() => {
    let result: NoticeItem[] = [...noticesList]

    if (searchQuery.trim() !== '') {
      const lowerQuery = searchQuery.toLowerCase()
      result = result.filter(
        (notice) =>
          notice.title.toLowerCase().includes(lowerQuery) ||
          (notice.downloadLabel && notice.downloadLabel.toLowerCase().includes(lowerQuery))
      )
    }

    if (filterType === 'custom') {
      if (startDate) {
        const start = new Date(startDate)
        start.setHours(0, 0, 0, 0)
        result = result.filter((notice) => new Date(notice.date) >= start)
      }
      if (endDate) {
        const end = new Date(endDate)
        end.setHours(23, 59, 59, 999)
        result = result.filter((notice) => new Date(notice.date) <= end)
      }
    }

    result.sort((a, b) => {
      const timeA = new Date(a.date).getTime()
      const timeB = new Date(b.date).getTime()
      return filterType === 'oldest' ? timeA - timeB : timeB - timeA
    })

    return result
  }, [noticesList, searchQuery, filterType, startDate, endDate])

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      
      {/* Page Header */}
      <section className="relative h-[360px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 z-1 bg-cover bg-center contrast-100 grayscale-45" 
          style={{ backgroundImage: "url('/aeu.png')" }}
        />
        <div className="absolute inset-0 z-2 bg-[radial-gradient(circle,rgba(60,0,8,0.55)_10%,rgba(60,0,8,0.35)_80%)]" />

        <div
          className="absolute top-0 right-0 z-30 h-full w-[55%] bg-[#3C0008]/40"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 35% 100%, 55% 0)' }}
        />

        <div className="absolute bottom-12 left-8 md:left-12 z-40">
          <h1 className="text-[#ffffff] text-4xl md:text-5xl font-bold tracking-widest uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            Special Notices
          </h1>
          <p className="text-white text-sm md:text-base mt-2 tracking-wide">
            Important announcements from the Academic Establishments Division
          </p>
        </div>
      </section>

      {/* --- Global Wrapper Content Outer Alignment Panel --- */}
      <div className="w-full mt-12 px-4 sm:px-6 lg:px-8">
        
        {/* CONTAINER A: SEARCH BAR ONLY */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white border border-[#80000015] rounded-xl p-5 shadow-sm flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-xs font-bold text-[#4a0b16] uppercase tracking-wider mb-1.5">
                  Search 🔎︎
                </label>
                <input
                  type="text"
                  placeholder="Type parameters to search notices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4a0b16] transition-colors"
                />
              </div>

              <div className="w-full sm:w-52">
                <label className="block text-xs font-bold text-[#4a0b16] uppercase tracking-wider mb-1.5">
                  Sort & Filter
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value as any)}
                  className="w-full bg-stone-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#4a0b16] cursor-pointer"
                >
                  <option value="latest">Latest Notices</option>
                  <option value="oldest">Oldest Notices</option>
                  <option value="custom">Customize Range 📅</option>
                </select>
              </div>
            </div>

            {filterType === 'custom' && (
              <div className="pt-4 border-t border-dashed border-gray-100 flex flex-wrap gap-4 items-end animate-fadeIn">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium">From Date:</span>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-stone-50 border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:border-[#4a0b16]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 font-medium">To Date:</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-stone-50 border border-gray-200 rounded-lg p-2 text-xs focus:outline-none focus:border-[#4a0b16]"
                  />
                </div>
                {(startDate || endDate) && (
                  <button
                    type="button"
                    onClick={() => { setStartDate(''); setEndDate(''); }}
                    className="text-xs text-red-700 hover:underline mb-2 font-medium"
                  >
                    Reset Range
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CONTAINER B: CARDS PANEL */}
        <div className="max-w-5xl mx-auto">
          {filteredAndSortedNotices.length === 0 ? (
            <div className="bg-white border border-[#80000015] rounded-xl text-center text-gray-400 text-sm py-16 shadow-sm max-w-2xl mx-auto">
              No matching notices found for your selections.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="relative flex flex-col justify-between h-[340px] bg-[#4a0b16] border border-[#80000020] rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#4a0b16] to-[#28040a]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200207] via-transparent to-black/40 z-10" />

                  <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {new Date(notice.date).toLocaleDateString('en-LK', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </div>

                  <div className="relative z-20 pt-6 px-5 opacity-40 group-hover:opacity-80 transition-opacity">
                    <span className="text-xl">🔔</span>
                  </div>

                  <div className="relative z-20 p-5 flex flex-col gap-2 mt-auto w-full">
                    <span className="text-xs text-[#c9922a] font-bold tracking-wider uppercase">
                      {new Date(notice.date).getFullYear()}
                    </span>

                    <div className="h-20 overflow-hidden">
                      <h2 className="text-base font-bold text-white leading-snug tracking-wide drop-shadow-sm line-clamp-3">
                        {notice.title}
                      </h2>
                    </div>

                    {notice.downloadUrl && (
                      <div className="pt-2.5 border-t border-white/10 w-full mt-auto">
                        <div className="inline-flex items-center gap-2.5 w-full bg-white/10 backdrop-blur-sm text-xs text-stone-200 px-2.5 py-1.5 rounded-lg border border-white/5">
                          
                          <a 
                            href={notice.downloadUrl}
                            download
                            title="Download Document"
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#e8c97a] text-[#4a0b16] p-1.5 rounded-md shrink-0 flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-transform duration-150 cursor-pointer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </a>
                          
                          <a 
                            href={notice.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open Document in New Tab"
                            className="truncate text-stone-200 hover:text-white hover:underline font-medium text-[11px] flex-1 cursor-pointer pr-1"
                          >
                            {notice.downloadLabel || 'Document Link'}
                          </a>

                        </div>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}