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
  className={`fixed top-0 left-0 w-full h-17.5 z-1000 flex items-center transition-all duration-300 ${
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

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                location.pathname === link.to
                  ? 'text-[#B59410]'
                  : 'text-white  hover:text-[#B59410]'
              }`}
            >
              {link.label}
            </Link>
          ))}


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

      </div>
    </nav>
  )
}