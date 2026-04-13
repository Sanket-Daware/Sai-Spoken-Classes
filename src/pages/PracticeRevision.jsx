import { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Play,
  Search,
  CheckCircle,
  MoreVertical,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'
import { categories, videosData } from '../data/videoData'
import logo from '../assets/sai-logo.png'

export default function PracticeRevision() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const shelfRef = useRef(null)

  // Scroll tracking for smart header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Only hide if we've scrolled a bit
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setShowHeader(false)
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Functional Search & Category Filter
  const filteredVideos = useMemo(() => {
    return videosData.filter(v =>
      (activeCategory === "All" || v.category === activeCategory) &&
      (v.title.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }, [activeCategory, searchQuery])

  // Get shelf videos (Shorts specifically)
  const shelfVideos = videosData.filter(v => v.type === "short").slice(0, 10)

  const scrollShelf = (direction) => {
    if (shelfRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      shelfRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pt-[210px] md:pt-[240px] lg:pt-[260px]">

      {/* Search & Category Header - Fixed/Sticky with Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -200 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[80px] left-0 right-0 bg-white/95 backdrop-blur-md z-30 py-4 border-b border-slate-200"
      >
        <div className="container mx-auto px-4 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <h1 className="text-xl font-bold flex items-center gap-3 text-slate-900">
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
              Learning Center
            </h1>

            {/* Functional Search Bar */}
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search video lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 border border-slate-200 rounded-full py-2.5 pl-12 pr-6 focus:outline-none focus:border-[#803FF6] focus:bg-white transition-all text-sm text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <div className="hidden md:block w-32" /> {/* Spacer */}
          </div>

          {/* Category Chips - Full Width */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 pt-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${activeCategory === category
                    ? "bg-[#DADAD3] text-slate-900 shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Grid Area */}
      <main className="container mx-auto px-4 lg:px-8 py-8 pb-20">

        {/* Row 1 & 2: Main Grid (4 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredVideos.slice(0, 8).map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Horizontal Slide Bar (Shorts Shelf) - Injected after 2 rows */}
        {filteredVideos.length > 4 && activeCategory === "All" && (
          <div className="my-16 py-8 border-y border-slate-200 bg-white/40 -mx-4 lg:-mx-8 px-4 lg:px-8 relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 rounded-md p-1">
                  <Play size={14} fill="white" className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">Quick Spoken Shorts</h2>
                <span className="text-sm text-slate-500 font-medium">Flash Lessons</span>
              </div>
              <button className="text-sm text-slate-500 font-bold flex items-center gap-1 hover:underline">
                Explore Shorts <ChevronRight size={16} />
              </button>
            </div>

            <div className="relative group/shelf">
              {/* Navigation Arrows */}
              <button
                onClick={() => scrollShelf('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-600 hover:text-[#803FF6] hover:bg-slate-50 transition-all opacity-0 group-hover/shelf:opacity-100 hidden md:flex"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => scrollShelf('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-600 hover:text-[#803FF6] hover:bg-slate-50 transition-all opacity-0 group-hover/shelf:opacity-100 hidden md:flex"
              >
                <ChevronRight size={24} />
              </button>

              <div
                ref={shelfRef}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
              >
                {shelfVideos.map(video => (
                  <div key={video.id + "_shelf"} className="flex-shrink-0 w-[180px]">
                    <VideoCard video={video} compact={true} isShortShelf={true} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Row 3 and beyond: Continue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 pt-10">
          {filteredVideos.slice(8).map(video => (
            <VideoCard key={video.id} video={video} />
          ))}

          {filteredVideos.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">No results found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  )
}

function VideoCard({ video, compact = false, isShortShelf = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-3 group"
    >
      <Link
        to={`/practice-revision/watch/${video.id}`}
        className={`relative ${isShortShelf ? 'aspect-[9/16]' : 'aspect-video'} rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-200 transition-all duration-300 hover:shadow-xl hover:border-[#803FF6]/30`}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {video.type === "short" ? (
          <div className="absolute top-2 left-2 bg-red-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold text-white uppercase tracking-wider shadow-lg flex items-center gap-1">
            <Play size={8} fill="white" /> Shorts
          </div>
        ) : (
          <div className="absolute bottom-2 right-2 bg-black/80 text-[12px] px-1.5 py-0.5 rounded font-bold text-white">
            {video.duration}
          </div>
        )}

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-[#DADAD3] text-slate-900 rounded-full flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
            <Play fill="currentColor" size={24} className="ml-1" />
          </div>
        </div>
      </Link>

      <div className={`flex gap-3 ${compact ? 'px-0' : 'px-1'}`}>
        {!compact && (
          <div className="w-10 h-10 flex-shrink-0 bg-white border border-slate-100 rounded-full flex items-center justify-center overflow-hidden shadow-sm">
            <img src={logo} alt="Sai Spoken" className="w-full h-full object-contain p-1.5" />
          </div>
        )}
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <Link to={`/practice-revision/watch/${video.id}`}>
            <h3 className={`font-bold leading-snug line-clamp-2 transition-colors text-slate-900 ${compact ? 'text-[13px] leading-tight' : 'text-[15px]'}`}>
              {video.title}
            </h3>
          </Link>
          <div className="text-[13px] text-slate-500 font-medium">
            <p className="flex items-center gap-1 hover:text-slate-900 transition-colors">
              {video.channel} <CheckCircle size={12} className="text-[#803FF6]" />
            </p>
          </div>
        </div>
        {!compact && (
          <button className="flex-shrink-0 text-slate-400 hover:text-slate-900 mt-1 transition-colors">
            <MoreVertical size={18} />
          </button>
        )}
      </div>
    </motion.div>
  )
}

