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
    <div className="bg-slate-50 min-h-screen pb-20">
      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 pt-12 flex flex-col border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:bg-white/80",
                index % 2 !== 0 ? "lg:mt-16" : ""
              )}
            >
              {/* Asymmetric Portrait framing */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 w-28 h-28 z-20">
                <div className="w-full h-full rounded-[2.5rem] rounded-tl-none overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105">
                  <img 
                    src={story.img} 
                    alt={story.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
                {/* Delicate semi-transparent chip */}
                <div className="absolute -bottom-2 -right-6 bg-white/90 backdrop-blur-md text-[#E9C176] text-[8px] font-bold px-4 py-1.5 rounded-full shadow-sm border border-[#E9C176]/20 transition-all duration-500 group-hover:bg-[#E9C176] group-hover:text-white group-hover:-translate-y-1 uppercase tracking-[0.2em] whitespace-nowrap">
                   {story.transformation.split(' to ')[1] || 'Transformed'}
                </div>
              </div>

              <div className="space-y-4 mt-16">
                <div className="relative">
                  <Quote size={20} className="text-[#E9C176]/30 absolute -top-4 -left-2" />
                  <p className="text-slate-800 italic leading-relaxed font-serif text-[14px] pl-4 relative z-10">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-2 flex flex-col items-center lg:items-start leading-none gap-1">
                   <h3 className="text-xl font-signature text-[#E9C176] italic font-medium tracking-tight">
                      {story.name}
                   </h3>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Our Alumni • {story.course}
                   </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100/50">
                 <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 transition-colors group-hover:bg-amber-50/50 group-hover:border-amber-100">
                    <p className="text-[9px] font-bold text-[#E9C176] uppercase tracking-widest mb-1 opacity-60">Result Insight</p>
                    <p className="text-xs text-slate-900 font-bold leading-snug">{story.transformation}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Hub (Tabbed) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 italic">Authentic Voices</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From video reviews to daily WhatsApp appreciation — our impact is visible everywhere.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Video Testimonials */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <PlayCircle className="text-[#E9C176]" /> Video Testimonials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videoTestimonials.map((v) => (
                  <motion.div key={v.id} className="relative group aspect-video rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                    <img src={v.thumb} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                        <Play fill="currentColor" size={24} className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-bold text-sm leading-tight">{v.title}</p>
                      <p className="text-[10px] uppercase font-bold text-[#E9C176] mt-1">{v.name}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="aspect-video bg-slate-100 rounded-3xl flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-slate-200 group hover:bg-slate-50 transition-colors cursor-pointer">
                   <p className="text-sm font-bold text-slate-900">Watch all 100+ interviews</p>
                   <p className="text-xs text-slate-500 mt-1">Visit our YouTube Channel</p>
                   <ArrowRight size={18} className="mt-3 text-[#E9C176] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* WhatsApp & Stars Reviews */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <MessageCircle className="text-green-500" /> WhatsApp Love
                </h3>
                <div className="space-y-4">
                  {whatsAppReviews.map((w) => (
                    <motion.div 
                      key={w.id} 
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="bg-slate-50 p-4 rounded-2xl rounded-tr-none border-l-4 border-green-500 max-w-sm ml-auto relative"
                    >
                      <p className="text-[10px] font-bold text-[#061423]/40 absolute top-4 right-4 uppercase tracking-tighter">{w.time}</p>
                      <p className="text-green-600 font-bold text-xs mb-1">{w.sender}</p>
                      <p className="text-slate-800 text-sm italic">"{w.msg}"</p>
                      <div className="flex justify-end mt-2">
                        <UserCheck size={14} className="text-sky-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#061423] to-[#0D1B2A] p-8 rounded-[40px] text-center space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9C176]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="flex justify-center gap-1.5 text-[#E9C176]">
                  {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor" />)}
                </div>
                <h4 className="text-5xl font-display font-bold text-white tracking-tighter">4.9/5</h4>
                <p className="text-white/40 text-sm uppercase font-bold tracking-[0.3em]">Average Satisfaction Rating</p>
                <p className="text-white/60 text-xs italic">"Based on 2,500+ verified Google & Facebook reviews from our alumni network."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Alumni Spotlight - Full Width */}
      <section className="py-24 bg-[#061423] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E9C176]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
        
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white italic leading-tight">Alumni <br /> <span className="text-[#E9C176]">Spotlight</span></h2>
            <p className="text-white/40 leading-relaxed italic">"Our students are now leaders in tech, education, and business across the country."</p>
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-3 bg-[#E9C176] text-[#061423] font-bold rounded-full text-sm shadow-xl shadow-[#E9C176]/20 flex items-center gap-3">
                Join our Alumni Network <ExternalLink size={16} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((a, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-[35px] border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#E9C176]/20 rounded-2xl flex items-center justify-center text-[#E9C176] mb-4">
                  <UserCheck size={20} />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{a.name}</h4>
                <p className="text-[#E9C176] text-xs font-bold leading-tight mb-3 uppercase tracking-tighter">{a.now}</p>
                <p className="text-white/40 text-[11px] leading-relaxed italic">"{a.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
