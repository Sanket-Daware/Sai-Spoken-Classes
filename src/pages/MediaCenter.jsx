import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Play, Calendar, Newspaper, ArrowRight, PlayCircle, Eye, Search, Filter, Image as ImageIcon, MapPin, Clock, Share2, Award, Users, Mic2 } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// --- Mock Data ---

const photoCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'classroom', name: 'Classrooms' },
  { id: 'batches', name: 'Batch Groups' },
  { id: 'ceremony', name: 'Ceremonies' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'festivals', name: 'Festivals' },
  { id: 'events', name: 'Annual Events' }
];

const photoGallery = [
  { id: 1, cat: 'classroom', title: 'Interactive Learning Session', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800' },
  { id: 2, cat: 'batches', title: 'Advanced Batch 2024', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800' },
  { id: 3, cat: 'ceremony', title: 'Certificate Distribution', img: 'https://images.unsplash.com/photo-1523050335456-c38447d0d96f?q=80&w=800' },
  { id: 4, cat: 'workshops', title: 'Public Speaking Workshop', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800' },
  { id: 5, cat: 'festivals', title: 'Diwali Celebration', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800' },
  { id: 6, cat: 'classroom', title: 'Pair Practice Activity', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800' },
  { id: 7, cat: 'batches', title: 'Evening Batch Group', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800' },
  { id: 8, cat: 'events', title: 'Annual Day Performance', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800' }
];

const videos = [
  { id: 1, type: 'Student Story', title: 'From Beginner to Fluent Speaker', author: 'Akash D.', videoId: '8GfG6nK_w3E', thumb: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600' },
  { id: 2, type: 'Testimonial', title: 'How Sai Classes Changed My Career', author: 'Priya R.', videoId: 'lKozXmYg_G0', thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600' },
  { id: 3, type: 'Performance', title: 'Classroom Debating Competition', author: 'Advanced Batch', videoId: 'yYV2Bsh2I1k', thumb: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600' },
  { id: 4, type: 'Student Story', title: 'My Journey to 8.0 IELTS Band', author: 'Siddhesh K.', videoId: '9ee_csw8Z2U', thumb: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600' },
  { id: 5, type: 'Testimonial', title: 'Cracking the MNC Interview', author: 'Rahul V.', videoId: 'X9fM6NfF_8o', thumb: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600' },
  { id: 6, type: 'Transformation', title: 'Speaking with Confidence', author: 'Sneha P.', videoId: 'fC0N5mHhE1s', thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600' }
];

const upcomingEvents = [
  { id: 1, title: 'Mega Speaking Competition', date: '25th Aug, 2024', time: '10:00 AM', venue: 'Shivaji Auditorium', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600' },
  { id: 2, title: 'IELTS Guest Webinar', date: '5th Sep, 2024', time: '5:00 PM', venue: 'Online (Zoom)', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600' }
];

const pastEvents = [
  { id: 1, title: 'Annual Day 2023 Gala', tags: ['Annual', 'Cultural'], img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600' },
  { id: 2, title: 'Career Path Workshop', tags: ['Seminar', 'Job'], img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600' }
];

const newsItems = [
  { id: 1, source: 'Lokmat News', date: '12 June', title: 'Sai Spoken Classes reaches 5000+ student milestone.', excerpt: 'A local celebration marks the achievement of transforming lives through language...' },
  { id: 2, source: 'Education Times', date: '20 May', title: 'New Franchise centers opened in Nashik and Aurangabad.', excerpt: 'Sai Spoken Classes expands its legacy to more districts to bridge the gap...' }
];

// --- Components ---

export default function MediaCenter() {
  const [activePhotoCat, setActivePhotoCat] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)

  const filteredPhotos = activePhotoCat === 'all'
    ? photoGallery
    : photoGallery.filter(p => p.cat === activePhotoCat)

  return (
    <div className="bg-[#FBFCFD] min-h-screen pb-20 overflow-x-hidden">

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all"
              >
                <X size={20} />
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Header */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061423]/95 via-[#061423]/80 to-[#FBFCFD]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#E9C176] text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Visual Showcase • Media Hub
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light text-white tracking-tight leading-tight"
          >
            Explore Our <br /><span className="text-[#E9C176] font-serif italic">Gallery & News</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-white/50 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            A professional glimpse into our classrooms, transformation sessions, annual celebrations, and the latest news from Sai Spoken Classes.
          </motion.p>
        </div>
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FBFCFD] to-transparent" />
      </section>

      {/* 1. Photo Gallery Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-display font-bold text-slate-900 italic">Photo Gallery</h2>
            <p className="text-slate-500 text-sm max-w-sm">Snapshots of growth, happiness, and celebrations at our centers.</p>
          </div>
          {/* Custom Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {photoCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActivePhotoCat(c.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${activePhotoCat === c.id ? 'bg-[#E9C176] text-[#061423] shadow-lg shadow-[#E9C176]/20' : 'bg-white border border-slate-200 text-slate-500 hover:border-[#E9C176] hover:text-[#E9C176]'}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
           layout
           className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border-2 border-white",
                  index % 3 === 0 ? "aspect-[3/4]" : index % 2 === 0 ? "aspect-square" : "aspect-[4/5]"
                )}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                   <p className="text-[#E9C176] text-[8px] font-bold uppercase tracking-widest mb-0.5">{item.cat}</p>
                   <p className="text-white font-bold text-xs leading-tight">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 2. Video Gallery Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="space-y-3">
               <h2 className="text-3xl font-display font-bold text-slate-900 italic">Video Gallery</h2>
               <p className="text-slate-500 text-sm max-w-sm">Watch our success stories, teaching clips, and workshop highlights.</p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 text-[#061423] font-bold text-xs hover:border-[#E9C176] hover:text-[#E9C176] transition-all group">
                Watch on YouTube <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
            {videos.map((v, index) => (
              <motion.div 
                 key={v.id} 
                 whileHover={{ y: -5 }}
                 className="break-inside-avoid group space-y-2"
                 onClick={() => setSelectedVideo(v)}
              >
                <div className={cn(
                  "relative rounded-2xl overflow-hidden bg-slate-100 shadow-xl cursor-pointer border border-slate-100",
                  index % 3 === 0 ? "aspect-video" : index % 2 === 0 ? "aspect-square" : "aspect-[3/4]"
                )}>
                   <img 
                      src={v.thumb} 
                      className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105 duration-700" 
                      title="Click to play" 
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 scale-90 group-hover:scale-100 transition-transform">
                         <Play fill="currentColor" size={16} className="ml-0.5" />
                      </div>
                   </div>
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[7px] font-bold uppercase text-slate-800 tracking-widest">
                      {v.type}
                   </div>
                </div>
                <div className="px-1">
                   <h3 className="text-[11px] font-bold text-slate-800 group-hover:text-[#E9C176] transition-colors leading-tight line-clamp-2">{v.title}</h3>
                   <div className="flex items-center gap-1.5 mt-1 text-slate-400 text-[8px] font-bold uppercase tracking-tighter">
                      <Users size={10} /> {v.author}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
