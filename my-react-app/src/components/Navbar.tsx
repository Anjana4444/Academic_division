import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef, JSX } from 'react'

interface NavLink {
  label: string;
  to: string;
}

interface LanguageOption {
  code: 'en' | 'si' | 'ta';
  label: string;
  flag: string;
}

export default function Navbar(): JSX.Element {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const [currentLang, setCurrentLang] = useState<string>('en')
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const navLinks: NavLink[] = [
    { label: 'Home',            to: '/' },
    { label: 'About',           to: '/about' },
    { label: 'Special Notices',  to: '/notices' },
    { label: 'Applications',    to: '/applications' },
    { label: 'Staff',           to: '/staff' },
    { label: 'Contact',         to: '/contact' },
  ]

  // Track the language active inside Google Translate elements or cookies
  useEffect(() => {
    const checkGoogleLang = (): void => {
      // 1. Try reading Google's active state combo element value
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
      if (selectElement && selectElement.value) {
        setCurrentLang(selectElement.value)
        return
      }

      // 2. Fallback: Parse cookie value if DOM isn't completely ready
      const match = document.cookie.match(/(^| )googtrans=([^;]+)/)
      if (match && match[2]) {
        const parts = match[2].split('/')
        const lang = parts[parts.length - 1] // Extracts 'si', 'ta' etc.
        if (['en', 'si', 'ta'].includes(lang)) {
          setCurrentLang(lang)
        }
      }
    }
    const interval = setInterval(checkGoogleLang, 1000)
    return () => clearInterval(interval)
  }, [])

  // Programmatically execute language switching on Google Translate's core
  const changeGoogleLanguage = (langCode: 'en' | 'si' | 'ta'): void => {
    try {
      // 1. Force state updates directly into Google's standard tracking cookies
      const targetCookieValue = langCode === 'en' ? '' : `/en/${langCode}`
      document.cookie = `googtrans=${targetCookieValue}; path=/; domain=${window.location.hostname};`
      document.cookie = `googtrans=${targetCookieValue}; path=/;` // Localhost execution handling fallback

      // 2. Trigger programmatic value injection inside Google's element layout
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
      if (selectElement) {
        selectElement.value = langCode
        // Bubbles: true tells the parent window elements that a state transformation action occurred
        selectElement.dispatchEvent(new Event('change', { bubbles: true }))
      }

      setCurrentLang(langCode)

      // 3. If Google's widget dropdown hasn't rendered in the DOM yet, 
      // reloading ensures the cookie we just set handles the page translation instantly.
      if (!selectElement) {
        window.location.reload()
      }
    } catch (error) {
      console.error("Error executing Google Translate operation:", error)
    }
  }

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  // Scroll listener for blur effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'si', label: 'සිංහල',   flag: '🇱🇰' },
    { code: 'ta', label: 'தமிழ்',   flag: '🇱🇰' },
  ]

  return (
    <nav
      style={{ backgroundColor: isScrolled ? 'rgba(60, 0, 8, 0.65)' : '#3C0008' }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'border-b border-transparent shadow-none'
      }`}
    >
      <div className="w-[90%] mx-auto flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo-2.webp"
            alt="Academic Establishments Division"
            className="h-14 w-auto"
          />
          <div>
            <div className="text-white text-[16px] font-bold leading-tight">
              Academic Establishments Division
            </div>
            <div className="text-[#B59410] text-[13px] font-bold mt-0.5">
              University of Peradeniya
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative py-1 text-sm font-bold uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200"
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-full" />
                )}
              </Link>
            )
          })}

          {/* UoP external link */}
          <a
            href="https://www.pdn.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200"
          >
            UOP
          </a>

          {/* Language dropdown */}
          <div ref={dropdownRef} className="relative ml-2 border-l border-white/20 pl-4">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white transition-colors duration-200 py-1"
            >
              <span>
                {currentLang === 'en' ? '🌐 EN' : currentLang === 'si' ? '🌐 සිං' : '🌐 தமி'}
              </span>
              <svg 
                className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div 
              onMouseLeave={() => setDropdownOpen(false)}
              className={`absolute right-0 top-full mt-2 w-36 bg-[#2a0006] border border-white/10 rounded-lg shadow-xl transition-all duration-200 ${
                dropdownOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    changeGoogleLanguage(lang.code)
                    setDropdownOpen(false)
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 text-xs font-semibold transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                    currentLang === lang.code
                      ? 'bg-[#B59410] text-[#3C0008]'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
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

          {/* UoP mobile external link */}
          <a
            href="https://www.pdn.ac.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-wide py-3 text-white/80 hover:text-[#B59410] transition-colors duration-150"
            onClick={() => setMenuOpen(false)}
          >
            UOP ↗
          </a>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-1">
            <span className="text-white/50 text-xs">Language:</span>
            {显式类型 = (['en', 'si', 'ta'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => {
                  changeGoogleLanguage(lang)
                  setMenuOpen(false)
                }}
                className={`text-xs font-bold px-2.5 py-1 rounded transition-all duration-200 ${
                  currentLang === lang
                    ? 'bg-[#B59410] text-[#3C0008]'
                    : 'text-white/60 hover:text-white border border-white/20'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'si' ? 'සිං' : 'தமி'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}