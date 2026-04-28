import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Award, Users, GraduationCap, CircleCheck, Play, PlayCircle, MessageCircle, Briefcase, Trophy, UserCheck, ArrowRight, ExternalLink } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// --- Mock Data ---

const successStories = [
  {
    id: 1,
    name: "Sanket Daware",
    course: "Corporate Communication",
    quote: "I used to be extremely hesitant to speak during client meetings. Today, I lead international calls with absolute confidence.",
    transformation: "Silent participant to Global Team Lead.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sneha Patil",
    course: "IELTS Mastery",
    quote: "Clearing IELTS was my biggest hurdle for my Master's abroad. Sai Spoken Classes made the preparation feel like a breeze.",
    transformation: "Scored 8.5 Band in just 2 months.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Meena Deshpande",
    course: "Basic Spoken English",
    quote: "As a homemaker, I wanted to stay connected with my children's school activities. Now I can talk to their teachers in fluent English.",
    transformation: "Zero confidence to active social communicator.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Rahul Mehta",
    course: "Public Speaking",
    quote: "The fear of the stage was paralyzing. The personalized coaching helped me find my voice and express my ideas with clarity.",
    transformation: "Overcame Stage Fright to TEDx Speaker.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  }
];

const videoTestimonials = [
  { id: 1, title: "From Farmer's Son to Software Engineer", name: "Rahul K.", thumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "How I Cracked My MNC Interview", name: "Priya S.", thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Transforming Kids Fluency", name: "Mrs. Joshi", thumb: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" }
];

const whatsAppReviews = [
  { 
    id: 1, 
    sender: "Rahul (Advanced Batch)", 
    time: "11:05 AM", 
    msg: "Sir, I got selected in the interview today! They were very impressed with my communication. Thank you so much!", 
    status: "Delivered" 
  },
  { 
    id: 2, 
    sender: "Mrs. Kulkarni", 
    time: "4:30 PM", 
    msg: "My daughter is now speaking so well. She participated in the school elocution and got 1st place! All credit goes to Sai Classes.", 
    status: "Read" 
  }
];

const topAchievers = [
  { name: 'Amit G.', status: 'Job Placement', detail: 'Hired by TCS Mumbai', icon: Briefcase },
  { name: 'Siddhesh K.', status: 'Competition Winner', detail: 'Top Rank in District Debate', icon: Trophy },
  { name: 'Ananya S.', status: 'IELTS Success', detail: 'Achieved 8.0 Band Score', icon: GraduationCap },
  { name: 'Sameer V.', status: 'Promoted', detail: 'Team Lead after Soft Skills Training', icon: UserCheck }
];

const studentGallery = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
];

const alumni = [
  { name: "Vikram Shah", now: "Project Manager at Infosys", story: "Completed Advanced Spoken course in 2021." },
  { name: "Kirti Rao", now: "English Teacher at Global High", story: "Mastered Grammar and Phonetics in 2022 batch." },
  { name: "Omkar D.", now: "Freelance Content Writer", story: "Learned creative writing and fluency here." }
];

// --- Components ---

export default function StudentsSuccess() {
  return (
    <div className="bg-slate-50 min-h-screen pb-4 md:pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
             alt="Success Students" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#061423]/95 via-[#061423]/80 to-slate-50" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9C176]/10 border border-[#E9C176]/20 text-[#E9C176] text-xs font-bold uppercase tracking-widest mb-6"
          >
             Real People • Real Results
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light text-white leading-tight mb-6"
          >
            The Journey of <span className="text-[#E9C176] italic">Transformation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto italic font-light"
          >
            "Join 5000+ graduates who have redefined their careers and personal lives through the power of fluent English."
          </motion.p>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">Success Stories</h2>
            <div className="w-12 h-1 bg-[#E9C176]" />
          </div>
          <p className="hidden md:block text-slate-500 max-w-xs text-sm italic">Deep dives into the transformations that make us proud.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-8 gap-y-16 sm:gap-y-24">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative bg-white/60 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 pt-10 sm:pt-12 flex flex-col border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:bg-white/80",
                index % 2 !== 0 ? "lg:mt-16" : ""
              )}
            >
              {/* Asymmetric Portrait framing */}
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-20 h-20 sm:w-28 sm:h-28 z-20">
                <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] rounded-tl-none overflow-hidden border-2 sm:border-4 border-white shadow-2xl transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105">
                  <img 
                    src={story.img} 
                    alt={story.name} 
                    className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                {/* Delicate semi-transparent chip */}
                <div className="absolute -bottom-1 -right-4 sm:-bottom-2 sm:-right-6 bg-white/90 backdrop-blur-md text-[#E9C176] text-[6px] sm:text-[8px] font-bold px-2 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-sm border border-[#E9C176]/20 transition-all duration-500 group-hover:bg-[#E9C176] group-hover:text-white group-hover:-translate-y-1 uppercase tracking-[0.2em] whitespace-nowrap">
                   {story.transformation.split(' to ')[1] || 'Transformed'}
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4 mt-10 sm:mt-16">
                <div className="relative">
                  <Quote size={14} className="text-[#E9C176]/30 absolute -top-3 -left-1 sm:size-5 sm:-top-4 sm:-left-2" />
                  <p className="text-slate-800 italic leading-relaxed font-serif text-[11px] sm:text-[14px] pl-3 sm:pl-4 relative z-10 line-clamp-3 sm:line-clamp-none">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-2 flex flex-col items-center lg:items-start leading-none gap-0.5 sm:gap-1">
                   <h3 className="text-sm sm:text-xl font-signature text-[#E9C176] italic font-medium tracking-tight">
                      {story.name}
                   </h3>
                   <p className="text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Our Alumni • {story.course}
                   </p>
                </div>
              </div>

              <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-100/50">
                 <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-100 transition-colors group-hover:bg-amber-50/50 group-hover:border-amber-100">
                    <p className="text-[7px] sm:text-[9px] font-bold text-[#E9C176] uppercase tracking-widest mb-0.5 sm:mb-1 opacity-60">Result Insight</p>
                    <p className="text-[9px] sm:text-xs text-slate-900 font-bold leading-snug line-clamp-1">{story.transformation}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Hub (Tabbed) */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-20">
            <h2 className="text-2xl sm:text-5xl font-display font-bold text-slate-900 italic">Authentic Voices</h2>
            <p className="text-slate-500 text-xs sm:text-base max-w-xl mx-auto">From video reviews to daily WhatsApp appreciation — our impact is visible everywhere.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Video Testimonials */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2 sm:gap-3">
                <PlayCircle className="text-[#E9C176]" size={18} /> Video Testimonials
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {videoTestimonials.map((v) => (
                   <motion.div key={v.id} className="relative group aspect-video rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl cursor-pointer">
                    <img src={v.thumb} className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                        <Play fill="currentColor" size={16} className="sm:size-6 ml-0.5 sm:ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                      <p className="font-bold text-[9px] sm:text-sm leading-tight line-clamp-1">{v.title}</p>
                      <p className="text-[7px] sm:text-[10px] uppercase font-bold text-[#E9C176] mt-0.5 sm:mt-1">{v.name}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="aspect-video bg-slate-100 rounded-xl sm:rounded-3xl flex flex-col items-center justify-center p-3 sm:p-6 text-center border-2 border-dashed border-slate-200 group hover:bg-slate-50 transition-colors cursor-pointer">
                   <p className="text-[9px] sm:text-sm font-bold text-slate-900 leading-tight">Watch all <br className="sm:hidden" /> 100+ interviews</p>
                   <p className="hidden sm:block text-xs text-slate-500 mt-1">Visit our YouTube Channel</p>
                   <ArrowRight size={14} className="sm:size-[18px] mt-1.5 sm:mt-3 text-[#E9C176] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* WhatsApp & Stars Reviews */}
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-xl font-bold text-slate-900 flex items-center gap-2 sm:gap-3">
                  <MessageCircle className="text-green-500" size={18} /> WhatsApp Love
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {whatsAppReviews.map((w) => (
                    <motion.div 
                      key={w.id} 
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl rounded-tr-none border-l-4 border-green-500 max-w-[280px] sm:max-w-sm ml-auto relative"
                    >
                      <p className="text-[8px] sm:text-[10px] font-bold text-[#061423]/40 absolute top-3 sm:top-4 right-3 sm:right-4 uppercase tracking-tighter">{w.time}</p>
                      <p className="text-green-600 font-bold text-[10px] sm:text-xs mb-0.5 sm:mb-1">{w.sender}</p>
                      <p className="text-slate-800 text-[12px] sm:text-sm italic">"{w.msg}"</p>
                      <div className="flex justify-end mt-1 sm:mt-2">
                        <UserCheck size={12} className="text-sky-500 sm:size-[14px]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#061423] to-[#0D1B2A] p-6 sm:p-8 rounded-[30px] sm:rounded-[40px] text-center space-y-4 sm:space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#E9C176]/10 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 blur-3xl" />
                <div className="flex justify-center gap-1 sm:gap-1.5 text-[#E9C176]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} className="sm:size-5" fill="currentColor" />)}
                </div>
                <h4 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tighter">4.9/5</h4>
                <p className="text-white/40 text-[9px] sm:text-sm uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em]">Average Satisfaction Rating</p>
                <p className="text-white/60 text-[10px] sm:text-xs italic px-2">"Based on 2,500+ verified Google & Facebook reviews from our alumni network."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alumni Spotlight - Full Width */}
      <section className="py-8 sm:py-24 bg-[#061423] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C176]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          <div className="lg:w-1/3 text-center lg:text-left space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-5xl font-display font-bold text-white italic leading-tight">Alumni <br className="hidden sm:block" /> <span className="text-[#E9C176]">Spotlight</span></h2>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed italic">"Our students are now leaders in tech, education, and business across the country."</p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#E9C176] text-[#061423] font-bold rounded-full text-xs sm:text-sm shadow-xl shadow-[#E9C176]/20 flex items-center gap-2 sm:gap-3 transition-transform active:scale-95">
                Join our Alumni Network <ExternalLink size={14} className="sm:size-4" />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {alumni.map((a, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-[25px] sm:rounded-[35px] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E9C176]/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-[#E9C176] mb-3 sm:mb-4">
                  <UserCheck size={18} className="sm:size-5" />
                </div>
                <h4 className="text-white font-bold text-base sm:text-lg mb-0.5 sm:mb-1">{a.name}</h4>
                <p className="text-[#E9C176] text-[10px] sm:text-xs font-bold leading-tight mb-2 sm:mb-3 uppercase tracking-tighter">{a.now}</p>
                <p className="text-white/40 text-[10px] sm:text-[11px] leading-relaxed italic">"{a.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
