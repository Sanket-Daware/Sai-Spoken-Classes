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

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500 edge-to-edge',
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-[0_10px_40px_-5px_rgba(78,52,46,0.08)] py-1.5'
          : 'bg-white/90 backdrop-blur-xl py-1.5 border-b border-[#4E342E]/5'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo - Prominent Branding */}
        <Link to="/" className="flex items-center group outline-none transition-transform active:scale-95">
          <img
            src={logo}
            alt="Sai Spoken Classes"
            className="h-9 md:h-10 w-auto object-contain transition-all duration-500"
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
                      ? 'text-[#D32F2F] font-serif italic'
                      : 'text-[#4E342E]/80 hover:text-[#D32F2F] font-sans'
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("transition-transform duration-500", activeDropdown === link.id ? "rotate-180 text-[#D32F2F]" : "opacity-40 text-[#4E342E]")} size={14} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-[15px] font-semibold transition-all duration-300 py-2 block',
                    location.pathname === link.path
                      ? 'text-[#D32F2F] font-serif italic'
                      : 'text-[#4E342E]/80 hover:text-[#D32F2F] font-sans'
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
                    className="absolute top-full left-0 w-64 bg-white/98 backdrop-blur-3xl shadow-[0_20px_50px_rgba(78,52,46,0.12)] rounded-2xl border border-[#4E342E]/10 py-3 z-50 overflow-hidden mt-2"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D32F2F]/20 to-transparent" />
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={cn(
                          "block px-6 py-3 text-[14px] font-medium transition-all duration-300 hover:bg-[#D32F2F]/5",
                          location.pathname === sub.path
                            ? "text-[#D32F2F] bg-[#D32F2F]/5 font-serif italic"
                            : "text-[#4E342E]/70 hover:text-[#D32F2F]"
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
            className="relative group overflow-hidden bg-[#D32F2F] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-[#D32F2F]/20 transition-all duration-300 hover:scale-105 hover:bg-[#D32F2F]/90 active:scale-95 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <MessageSquare size={17} className="group-hover:rotate-12 transition-transform" />
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#D32F2F] bg-[#D32F2F]/5 rounded-xl transition-all active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu - Matching White Elite Aesthetic */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Soft Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 w-full z-[100] bg-white pt-6 pb-12 px-8 shadow-[0_20px_50px_rgba(78,52,46,0.15)] rounded-b-[2.5rem] flex flex-col"
            >
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Logo" className="h-9 w-auto" />
              <button onClick={() => setIsOpen(false)} className="p-1.5 text-[#4E342E]/50">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.id || link.path} className="flex flex-col py-2 border-b border-[#4E342E]/5">
                  {link.submenu ? (
                    <div className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileActiveDropdown(mobileActiveDropdown === link.id ? null : link.id);
                        }}
                        className={cn(
                          'text-sm font-medium flex items-center justify-between py-2',
                          link.submenu.some(s => location.pathname === s.path) ? 'text-[#D32F2F] font-serif italic' : 'text-[#4E342E]'
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("transition-transform duration-300", mobileActiveDropdown === link.id ? "rotate-180" : "opacity-30")} size={18} />
                      </button>
                      <AnimatePresence>
                        {mobileActiveDropdown === link.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-4 pl-6 mb-4 border-l-2 border-[#D32F2F]/20 ml-2"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={cn(
                                  "text-[13px] font-medium transition-colors",
                                  location.pathname === sub.path ? "text-[#D32F2F] font-serif italic" : "text-[#4E342E]/50"
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
                        'text-sm font-medium py-2 transition-all',
                        location.pathname === link.path ? 'text-[#D32F2F] font-serif italic' : 'text-[#4E342E]'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col gap-6">
              <button
                className="w-full text-center py-3.5 rounded-xl flex justify-center items-center gap-2.5 bg-[#D32F2F] text-white font-bold text-sm shadow-xl shadow-[#D32F2F]/20 transition-transform active:scale-95"
                onClick={() => {
                  setIsOpen(false);
                  onOpenJoinModal();
                }}
              >
                <MessageSquare size={18} />
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
