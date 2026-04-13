import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../assets/sai-logo.png'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    id: 'about-dropdown',
    submenu: [
      { name: 'Our Legacy', path: '/about' },
      { name: 'Franchise', path: '/franchise' },
      { name: 'Faculty', path: '/faculty' },
    ]
  },
  { name: 'Courses', path: '/courses' },
  {
    name: 'Media',
    id: 'media-dropdown',
    submenu: [
      { name: 'Media Center', path: '/media-center' },
      { name: 'Students & Success', path: '/students-success' },
      { name: 'Blogs & News', path: '/blogs-news' },
    ]
  },
  { name: 'Learning Support', path: '/practice-revision' },
]

export default function Navbar({ onOpenJoinModal }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only run click-outside logic on desktop to avoid interfering with mobile toggle
      if (window.innerWidth >= 1024 && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Auto-close mobile menu on scroll
  useEffect(() => {
    if (!isOpen) {
      setMobileActiveDropdown(null);
      return;
    }
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const whatsappLink = "https://wa.me/919999999999" // Updated Placeholder

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500 edge-to-edge',
        isScrolled
          ? 'bg-[#061423]/95 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] py-3'
          : 'bg-[#061423]/90 backdrop-blur-xl py-3'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo - Prominent Branding */}
        <Link to="/" className="flex items-center group outline-none transition-transform active:scale-95">
          <img
            src={logo}
            alt="Sai Spoken Classes"
            className="h-11 md:h-12 w-auto object-contain brightness-110 contrast-110 drop-shadow-[0_0_10px_rgba(233,193,118,0.2)] transition-all duration-500"
          />
        </Link>

        {/* Desktop Navigation - Scholar Typography */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div
              key={link.id || link.path}
              className="relative group/item px-2"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.id)}
              onMouseLeave={() => link.submenu && setActiveDropdown(null)}
            >
              {link.submenu ? (
                <button
                  className={cn(
                    'text-[15px] font-semibold flex items-center gap-1.5 transition-all duration-300 py-2',
                    link.submenu.some(s => location.pathname === s.path)
                      ? 'text-[#E9C176] font-serif italic drop-shadow-[0_0_10px_rgba(233,193,118,0.3)]'
                      : 'text-white/80 hover:text-[#E9C176] font-sans'
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("transition-transform duration-500", activeDropdown === link.id ? "rotate-180 text-[#E9C176]" : "opacity-40")} size={14} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-[15px] font-semibold transition-all duration-300 py-2 block',
                    location.pathname === link.path
                      ? 'text-[#E9C176] font-serif italic drop-shadow-[0_0_10px_rgba(233,193,118,0.3)]'
                      : 'text-white/80 hover:text-[#E9C176] font-sans'
                  )}
                >
                  {link.name}
                </Link>
              )}

              {/* Enhanced Dropdown Menu */}
              <AnimatePresence>
                {link.submenu && activeDropdown === link.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="absolute top-full left-0 w-64 bg-[#0D1B2A]/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl border border-white/5 py-3 z-50 overflow-hidden mt-2"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E9C176]/40 to-transparent" />
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={cn(
                          "block px-6 py-3 text-[14px] font-medium transition-all duration-300 hover:bg-white/5",
                          location.pathname === sub.path
                            ? "text-[#E9C176] bg-[#E9C176]/5 font-serif italic"
                            : "text-white/60 hover:text-white"
                        )}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Premium Call to Action */}
          <button
            onClick={onOpenJoinModal}
            className="relative group overflow-hidden bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#061423] font-bold text-sm px-6 py-2 rounded-full shadow-[0_10px_25px_-5px_rgba(233,193,118,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <MessageSquare size={17} className="group-hover:rotate-12 transition-transform" />
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-[#E9C176] bg-white/5 rounded-xl transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Matching Dark Elite Aesthetic */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Darker/Bluer Backdrop for the Side Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[90]"
            />

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 w-[280px] h-full min-h-screen z-[100] bg-[#061423] py-10 px-8 overflow-y-auto flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
            <div className="flex justify-between items-center mb-12">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
              <button onClick={() => setIsOpen(false)} className="p-2 text-white/50 hover:text-[#E9C176]">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.id || link.path} className="flex flex-col py-2 border-b border-white/5">
                  {link.submenu ? (
                    <div className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileActiveDropdown(mobileActiveDropdown === link.id ? null : link.id);
                        }}
                        className={cn(
                          'text-base font-medium flex items-center justify-between py-3',
                          link.submenu.some(s => location.pathname === s.path) ? 'text-[#E9C176] font-serif italic' : 'text-white'
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("transition-transform duration-300", mobileActiveDropdown === link.id ? "rotate-180" : "opacity-30")} size={24} />
                      </button>
                      <AnimatePresence>
                        {mobileActiveDropdown === link.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 pl-6 mb-4 border-l-2 border-[#E9C176]/20 ml-2"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={cn(
                                  "text-lg font-medium transition-colors",
                                  location.pathname === sub.path ? "text-[#E9C176] font-serif italic" : "text-white/50"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        'text-base font-medium py-3 transition-all',
                        location.pathname === link.path ? 'text-[#E9C176] font-serif italic' : 'text-white'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-12 flex flex-col gap-6">
              <button
                className="btn-primary w-full text-center py-5 rounded-2xl flex justify-center items-center gap-3 bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#061423] font-extrabold shadow-[0_15px_30px_rgba(233,193,118,0.2)] transition-transform active:scale-95"
                onClick={() => {
                  setIsOpen(false);
                  onOpenJoinModal();
                }}
              >
                <MessageSquare size={22} />
                Join Now
              </button>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
