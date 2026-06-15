import { Link, useLocation, useNavigate } from 'react-router-dom' // 1. Added useNavigate

import { useState, useEffect, useRef, JSX, FormEvent } from 'react'



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

  const navigate = useNavigate() // 2. Initialize the navigate function

  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const [currentLang, setCurrentLang] = useState<string>('en')

  const [searchQuery, setSearchQuery] = useState<string>('') 

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false) 

  

  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const searchFormRef = useRef<HTMLFormElement | null>(null)



  const navLinks: NavLink[] = [

    { label: 'Home',            to: '/' },

    { label: 'About',           to: '/about' },

    { label: 'Special Notices',  to: '/notices' },

    { label: 'Applications',    to: '/applications' },

    { label: 'Staff',           to: '/staff' },

    { label: 'Contact',         to: '/contact' },

  ]



  // Handle Search Submission natively

  const handleSearchSubmit = (e?: FormEvent<HTMLFormElement>): void => {

    if (e) e.preventDefault()

    

    if (!isSearchOpen) {

      setIsSearchOpen(true)

      return

    }



    if (!searchQuery.trim()) {

      setIsSearchOpen(false)

      return

    }

    

    // 3. Performs an instant transition without page refresh

    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)

    setMenuOpen(false) // Closes mobile menu drawer if searching from mobile

  }



  // Track the language active inside Google Translate elements or cookies

  useEffect(() => {

    const checkGoogleLang = (): void => {

      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement | null

      if (selectElement && selectElement.value) {

        setCurrentLang(selectElement.value)

        return

      }



      const match = document.cookie.match(/(^| )googtrans=([^;]+)/)

      if (match && match[2]) {

        const parts = match[2].split('/')

        const lang = parts[parts.length - 1]

        if (['en', 'si', 'ta'].includes(lang)) {

          setCurrentLang(lang)

        }

      }

    }

    const interval = setInterval(checkGoogleLang, 1000)

    return () => clearInterval(interval)

  }, [])



  const changeGoogleLanguage = (langCode: 'en' | 'si' | 'ta'): void => {

    try {

      const targetCookieValue = langCode === 'en' ? '' : `/en/${langCode}`

      document.cookie = `googtrans=${targetCookieValue}; path=/; domain=${window.location.hostname};`

      document.cookie = `googtrans=${targetCookieValue}; path=/;`



      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement | null

      if (selectElement) {

        selectElement.value = langCode

        selectElement.dispatchEvent(new Event('change', { bubbles: true }))

      }



      setCurrentLang(langCode)



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



  // Close dropdown and search input when clicking outside

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent): void => {

      const target = event.target as Node;

      

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {

        setDropdownOpen(false)

      }

      

      if (searchFormRef.current && !searchFormRef.current.contains(target) && !searchQuery.trim()) {

        setIsSearchOpen(false)

      }

    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)

  }, [searchQuery])



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

      <div className="w-[95%] xl:w-[90%] mx-auto flex items-center justify-between h-[70px]">



        {/* Logo */}

        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>

          <img

            src="/logo-2.webp"

            alt="Academic Establishments Division"

            className="h-14 w-auto"

          />

          <div className="hidden sm:block">

            <div className="text-white text-[15px] xl:text-[16px] font-bold leading-tight">

              Academic Establishments Division

            </div>

            <div className="text-[#B59410] text-[12px] xl:text-[13px] font-bold mt-0.5">

              University of Peradeniya

            </div>

          </div>

        </Link>



        {/* Desktop nav controls */}

        <div className="hidden lg:flex items-center gap-4 xl:gap-5">

          <div className={`flex items-center gap-4 xl:gap-5 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none hidden xl:flex' : 'opacity-100'}`}>

            {navLinks.map((link) => {

              const isActive = location.pathname === link.to

              return (

                <Link

                  key={link.to}

                  to={link.to}

                  className="relative py-1 text-xs xl:text-sm font-bold uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200"

                >

                  {link.label}

                  {isActive && (

                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white rounded-full" />

                  )}

                </Link>

              )

            })}



            <a

              href="https://www.pdn.ac.lk/"

              target="_blank"

              rel="noopener noreferrer"

              className="text-xs xl:text-sm font-bold uppercase tracking-wide text-white hover:text-[#B59410] transition-colors duration-200"

            >

              UOP

            </a>

          </div>



          {/* DESKTOP: Expanding Search Bar Container */}

          {/* DESKTOP: Expanding Search Bar Container */}

<form 

  ref={searchFormRef}

  onSubmit={handleSearchSubmit} 

  className="relative flex items-center ml-2 transition-all duration-300 ease-in-out"

>

  <input

    type="text"

    placeholder="Search..."

    value={searchQuery}

    onChange={(e) => setSearchQuery(e.target.value)}

    className={`bg-white/10 text-white placeholder-white/50 text-xs font-medium rounded-full transition-all duration-300 ease-in-out border border-white/10 focus:outline-none focus:bg-white/20 focus:border-white/30

      ${isSearchOpen 

        ? 'w-48 xl:w-64 pl-4 pr-16 py-1.5 opacity-100' // Added padding-right to accommodate action icons

        : 'w-8 pl-0 pr-0 py-1.5 opacity-0 pointer-events-none border-transparent bg-transparent'

      }`}

  />

  

  {/* Conditional Actions inside the expanded bar */}

  <div className="absolute right-1.5 flex items-center gap-1">

    {/* NEW: Dismiss / Close Button when open */}

    {isSearchOpen && (

      <button

        type="button"

        onClick={() => {

          setSearchQuery('')

          setIsSearchOpen(false)

          // Optionally send them back home if they are stuck on the search page

          if (location.pathname === '/search') {

            navigate(-1) // Natively navigate back to the previous historical route

          }

        }}

        className="text-white/40 hover:text-white p-1 rounded-full transition-colors"

        title="Close Search"

      >

        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />

        </svg>

      </button>

    )}



    {/* Search Icon Trigger */}

    <button 

      type="button"

      onClick={() => handleSearchSubmit()}

      className="text-white/60 hover:text-white transition-all duration-200 p-1.5 rounded-full hover:bg-white/5"

    >

      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">

        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />

      </svg>

    </button>

  </div>

</form>



          {/* Language dropdown */}

          <div ref={dropdownRef} className="relative border-l border-white/20 pl-4">

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

          

          {/* Mobile Search Bar */}

          <form onSubmit={(e) => handleSearchSubmit(e)} className="relative flex items-center my-2">

            <input

              type="text"

              placeholder="Search website..."

              value={searchQuery}

              onChange={(e) => setSearchQuery(e.target.value)}

              className="bg-white/10 text-white placeholder-white/40 text-sm font-medium rounded-lg pl-3 pr-10 py-2.5 w-full border border-white/10 focus:outline-none focus:bg-white/20 transition-all"

            />

            <button type="submit" className="absolute right-3 text-white/60 hover:text-white">

              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />

              </svg>

            </button>

          </form>



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

            UOP ↗

          </a>



          {/* Mobile language switcher */}

          <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-1">

            <span className="text-white/50 text-xs">Language:</span>

            {(['en', 'si', 'ta'] as const).map((lang) => (

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

