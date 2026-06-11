import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home',            to: '/' },
  { label: 'About',           to: '/about' },
  { label: 'Special Notices', to: '/notices' },
  { label: 'Applications',    to: '/applications' },
  { label: 'Staff',           to: '/staff' },
  { label: 'Contact',         to: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  {/* HIGHLIGHT: Added scroll state listener */}
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'        // Change to 'smooth' if you want smooth animation
    })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav style={{ backgroundColor: isScrolled ? 'rgba(60, 0, 8, 0.65)' : '#3C0008' }}
  className={`fixed top-0 left-0 w-full h-21.5 z-1000 flex items-center transition-all duration-300 ${
    isScrolled 
      ? 'backdrop-blur-md border-b border-white/10 shadow-lg' 
      : 'border-b border-transparent shadow-none'
  }`}>
      <div className="w-[90%] mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo-2.webp"
            alt="Academic Establishments Division"
            className="h-15.5 w-auto"
          />
          <div>
            <div className="text-white text-[18px] font-bold leading-tight">
              Academic Establishments Division
            </div>
            <div className="text-[#B59410] text-[15px] font-bold mt-0.5">
              University of Peradeniya
            </div>
          </div>
        </Link>

        
        {/* Nav links — desktop only */}
<div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1 text-sm font-bold uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200`}
              >
                {link.label}
                
                {/* White active indicator line block */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-full" />
                )}
              </Link>
            );
            })}


          {/* External UoP link */}
          <a
            href="https://www.pdn.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200"
          >
            UoP
          </a>
        </div>
        {/* Hamburger — mobile only */}
<button
  className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
</button>

      </div>
      {/* Mobile menu */}
{menuOpen && (
  <div className="lg:hidden absolute top-full left-0 w-full bg-[#2a0006]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-1">
    {navLinks.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        onClick={() => setMenuOpen(false)}
        className={`text-sm font-bold uppercase tracking-wide py-3 border-b border-white/5 transition-colors duration-150 ${
          location.pathname === link.to
            ? 'text-[#B59410]'
            : 'text-white/80 hover:text-[#B59410]'
        }`}
      >
        {link.label}
      </Link>
    ))}
    <a
      href="https://www.pdn.ac.lk/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-bold uppercase tracking-wide py-3 text-white/80 hover:text-[#B59410] transition-colors duration-150"
      onClick={() => setMenuOpen(false)}
    >
      UoP ↗
    </a>
  </div>
)}
    </nav>
  )
}