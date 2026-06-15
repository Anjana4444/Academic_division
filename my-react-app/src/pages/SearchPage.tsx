import { useSearchParams, Link, useNavigate } from 'react-router-dom' // Imported useNavigate
import { JSX } from 'react'

interface SearchableItem {
  title: string;
  category: 'Main Pages' | 'Application Forms' | 'Resources';
  path: string;
  description?: string;
}

export default function SearchPage(): JSX.Element {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate() // Initialize the navigate hook
  const query = searchParams.get('q') || ''

  // System-wide index matching the routes declared in your App configuration
  const searchDataset: SearchableItem[] = [
    { title: 'Home Dashboard', category: 'Main Pages', path: '/', description: 'Academic Establishments Division portal homepage.' },
    { title: 'Staff Directory', category: 'Main Pages', path: '/staff', description: 'Academic staff, executive profiles, and contact details.' },
    { title: 'About the Division', category: 'Main Pages', path: '/about', description: 'Our operational workflow, roles, and administrative framework.' },
    { title: 'Contact Information', category: 'Main Pages', path: '/contact', description: 'Office reachability parameters, locations, and email handles.' },
    { title: 'Special Notices & News', category: 'Main Pages', path: '/notices', description: 'Latest circulars, urgent announcements, and updates.' },
    { title: 'Applications & Downloads Center', category: 'Main Pages', path: '/applications', description: 'Central listing index for all divisional administrative documents.' },

    // Forms Sub-Index parsing
    { title: 'Agreement Form', category: 'Application Forms', path: '/applications/agreement', description: 'Standard contractual service bonds and legal clearance documentation.' },
    { title: 'Appendix 16 structural assessment', category: 'Application Forms', path: '/applications/appendix-16', description: 'Performance and statutory scoring schedule form parameters.' },
    { title: 'Application for Confirmation & Promotion', category: 'Application Forms', path: '/applications/promotion', description: 'Academic post elevation and confirmation validation forms.' },
    { title: 'Application for Railway Warrants', category: 'Application Forms', path: '/applications/railway', description: 'Travel allowance and concessionary transport claim vouchers.' },
    { title: 'Application for Sabbatical Leave', category: 'Application Forms', path: '/applications/sabbatical', description: 'Research sabbatical leave configuration requests.' },
    { title: 'Application for Leave (TR Form)', category: 'Application Forms', path: '/applications/leave', description: 'Temporary leave, medical reporting, or duty relief tracking forms.' },
    { title: 'Application for University Identity Cards', category: 'Application Forms', path: '/applications/identity-cards', description: 'Divisional staff identification and building security pass issuance.' },
    { title: 'Concessionary Motor Vehicle Permit Form', category: 'Application Forms', path: '/applications/motor-vehicle', description: 'Duty-free or subsidised institutional vehicle import permits.' },
    { title: 'ETF Form (Employees Trust Fund)', category: 'Application Forms', path: '/applications/etf-form', description: 'Trust fund withdrawals, contribution audits, and benefits profiles.' },
    { title: 'Probationary Leave Application Form', category: 'Application Forms', path: '/applications/probationary', description: 'Post-graduate training or basic evaluation timeline adjustments.' }
  ]

  // Filter strategy: perform clean lower-case matching across properties
  const matches = searchDataset.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="w-[90%] max-w-5xl mx-auto">
        
        {/* NEW: Dynamic Back Button Escape Hatch */}
        <button
          type="button"
          onClick={() => navigate(-1)} // Pops the history stack to return to the last visited page
          className="inline-flex items-center  gap-2 text-xs font-bold text-zinc-500 hover:text-[#3C0008] transition-colors mb-5 group cursor-pointer"
        >
          <span className="text-sm transform group-hover:-translate-x-1 transition-transform duration-200">←</span> 
          Back to Previous Page
        </button>

        {/* Header summary context */}
        <div className="border-b border-zinc-200 pb-5 mb-8">
          <h1 className="text-3xl font-extrabold text-[#3C0008] tracking-tight">Search Portal</h1>
          <p className="text-zinc-500 text-sm mt-2">
            {query.trim() ? (
              <>
                Showing {matches.length} result{matches.length === 1 ? '' : 's'} matching{' '}
                <span className="font-bold text-[#B59410]">"{query}"</span>
              </>
            ) : (
              'Enter query parameters inside the search bar to locate specific documentation.'
            )}
          </p>
        </div>

        {/* Dynamic List Rendering */}
        {matches.length > 0 ? (
          <div className="flex flex-col gap-4">
            {matches.map((item, idx) => (
              <Link 
                key={idx}
                to={item.path}
                className="bg-white p-5 rounded-xl border border-zinc-200/80 hover:border-[#B59410] shadow-sm hover:shadow-md transition-all group block"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-[#3C0008] group-hover:text-[#B59410] transition-colors">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    item.category === 'Application Forms' 
                      ? 'bg-amber-50 text-amber-700 border border-amber-200/60' 
                      : 'bg-red-50 text-[#3C0008] border border-red-100'
                  }`}>
                    {item.category}
                  </span>
                </div>
                {item.description && (
                  <p className="text-zinc-600 text-xs sm:text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}
                <div className="text-xs font-semibold text-zinc-400 mt-2.5 group-hover:text-[#B59410] transition-colors flex items-center gap-1">
                  Go to section <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-zinc-300 rounded-2xl p-12 text-center max-w-md mx-auto mt-8">
            <div className="text-zinc-300 text-4xl font-light mb-3">🔍</div>
            <h4 className="text-sm font-bold text-zinc-700 mb-1">No matching results found</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Verify spelling constraints or try generic terms like "leave", "staff", or "agreement".
            </p>
          </div>
        )}
      </div>
    </div>
  )
}