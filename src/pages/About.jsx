import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Target,
  Rocket,
  CircleCheck,
  Users,
  BookOpen,
  Calendar,
  Building,
  ChevronDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Play,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Trophy,
  GraduationCap
} from 'lucide-react'

const workingProcess = [
  {
    step: "01",
    title: "Choose A Batch",
    desc: "Select the timing that fits your schedule best.",
    icon: Calendar,
    position: "top" // for zig-zag
  },
  {
    step: "02",
    title: "Online Registration",
    desc: "Quick and easy enrollment via our online portal.",
    icon: BookOpen,
    position: "bottom"
  },
  {
    step: "03",
    title: "Attend Sessions",
    desc: "Join interactive sessions with expert mentors.",
    icon: Users,
    position: "top"
  },
  {
    step: "04",
    title: "Get Confident",
    desc: "Graduate with fluent speaking and high confidence.",
    icon: GraduationCap,
    position: "bottom"
  }
]

const whyChooseFeatures = [
  {
    title: "Expert Faculty",
    desc: "Learn from coaches with 12+ years of institutional experience.",
    icon: Trophy
  },
  {
    title: "Technology Classes",
    desc: "Digital tools and resources to accelerate your learning journey.",
    icon: Target
  },
  {
    title: "Proven Track Record",
    desc: "5K+ successful students across various professional fields.",
    icon: CheckCircle2
  },
  {
    title: "Flexible Timing",
    desc: "Tailored batches for students, professionals, and homemakers.",
    icon: Calendar
  }
]

const faculty = [
  {
    name: 'Priya Sharma',
    role: 'Senior Spoken Coach',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Arjun Mehra',
    role: 'Grammar & IELTS Specialist',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Sneha Kapoor',
    role: 'Voice & Accent Expert',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Vikram Singh',
    role: 'Corporate Training Lead',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Rajesh Khanna',
    role: 'Senior Interview Coach',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Meera Nair',
    role: 'Creative Writing Specialist',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Sanjay Verma',
    role: 'Public Speaking Mentor',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Anjali Rao',
    role: 'Personality Development',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  }
]

export default function About() {
  const [formState, setFormState] = useState({ name: '', phone: '', course: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (current) {
      const card = current.querySelector('div')
      if (card) {
        const cardWidth = card.offsetWidth
        const gap = 16 // gap-4 
        const scrollAmount = cardWidth + gap
        current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
      }
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-0 font-sans bg-[#E0F7F9] overflow-hidden">
      {/* Background Decorative Blobs - Optimized Blurs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00B4D8]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1D2A39]/5 rounded-full blur-[80px]" />
      </div>

      {/* Section 1: Hero Navy */}
      <section className="pt-14 pb-20 lg:pt-30 lg:pb-12 relative bg-[#1D2A39]">
        {/* Background Decorative Circle */}
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#151E29] rounded-full blur-[120px] opacity-70 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00B4D8]/10 rounded-full border border-[#00B4D8]/30">
                <span className="text-[#00B4D8] text-[10px] font-bold uppercase tracking-widest">ABOUT US</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-display text-white font-medium leading-[1.1]">
                We're Strategic <br />
                <span className="text-[#00B4D8]">Spoken Classes</span> Academy
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-light">
                Founded in 2012, Sai Spoken Classes started with a vision: to make English communication accessible to everyone. We offer expert coaching across 15+ branches.
              </p>

              {/* Mobile Hero Image: Visible only on mobile */}
              <div className="lg:hidden relative flex justify-center py-4">
                <div className="relative w-full aspect-square rounded-full bg-[#151E29] p-4 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#151E29] shadow-2xl relative">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                      alt="Student with laptop mobile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Badges for Mobile */}
                  <div className="absolute top-2 -left-2 bg-[#151E29] p-3 rounded-2xl shadow-lg border border-white/10 flex items-center gap-2 z-20 scale-90">
                    <div className="w-8 h-8 bg-[#00B4D8] rounded-full flex items-center justify-center text-[#1D2A39]">
                      <MessageCircle size={16} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Happy Students</p>
                      <p className="text-xs font-bold text-white">5K+ Community</p>
                    </div>
                  </div>

                  <div className="absolute bottom-2 -right-2 bg-[#151E29] p-3 rounded-2xl shadow-lg border border-white/10 flex items-center gap-2 z-20 scale-90">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle2 size={16} fill="white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Verified Institute</p>
                      <p className="text-[6px] text-gray-400 uppercase font-bold tracking-wider italic">Quality Education</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats & CTA Row */}
              <div className="flex flex-row items-center gap-3 sm:gap-8 pt-4">
                {/* Success Rate bubble */}
                <div className="flex items-center gap-2 sm:gap-3 bg-[#151E29] p-2 sm:p-3 pr-3 sm:pr-6 rounded-full shadow-sm border border-white/5 flex-1 sm:flex-none">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00B4D8] flex items-center justify-center text-[#1D2A39] shrink-0">
                    <Trophy size={14} className="sm:hidden" />
                    <Trophy size={18} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-lg font-bold text-white">94%</p>
                    <p className="text-[7px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider truncate">Success</p>
                  </div>
                </div>

                {/* Growth Rate bubble */}
                <div className="flex items-center gap-2 sm:gap-3 bg-[#151E29] p-2 sm:p-3 pr-3 sm:pr-6 rounded-full shadow-sm border border-white/5 flex-1 sm:flex-none">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1D2A39] border border-white/10 flex items-center justify-center text-[#00B4D8] shrink-0">
                    <Target size={14} className="sm:hidden" />
                    <Target size={18} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-lg font-bold text-white">65%</p>
                    <p className="text-[7px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider truncate">Growth</p>
                  </div>
                </div>

                {/* JOIN US Button */}
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 h-10 sm:h-14 px-4 sm:px-8 bg-[#00B4D8] text-[#1D2A39] rounded-full font-bold hover:bg-[#0096C7] transition-all group shrink-0">
                  <span className="text-[10px] sm:text-base">JOIN US</span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight size={14} className="sm:size-18 group-hover:translate-x-1 transition-transform text-[#1D2A39]" />
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Image with organic mask & floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-[80%] aspect-square rounded-full bg-[#151E29]/50 p-6 flex items-center justify-center animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-[#1D2A39] shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                    alt="Student with laptop"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/10 to-transparent" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -left-6 bg-[#151E29] p-4 rounded-3xl shadow-xl border border-white/10 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#1D2A39]">
                  <MessageCircle size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Happy Students</p>
                  <p className="text-sm font-bold text-white">5K+ Community</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 -right-6 bg-[#151E29] p-4 rounded-3xl shadow-xl border border-white/10 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={24} fill="white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Verified Institute</p>
                  <p className="text-[8px] text-gray-400 uppercase font-bold tracking-wider italic">Quality Education</p>
                </div>
              </motion.div>

              {/* Founder Mini Badge */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#151E29]/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-3 z-30">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-6 h-6 rounded-full border-2 border-[#1D2A39]" alt="" />
                  <img src="https://i.pravatar.cc/100?img=12" className="w-6 h-6 rounded-full border-2 border-[#1D2A39]" alt="" />
                </div>
                <p className="text-[10px] font-bold text-white">Mentored by Experts</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Working Process */}
      <section className="pt-24 pb-20 lg:pt-36 lg:pb-32 relative bg-[#E0F7F9]">
        {/* Background Decorative Circle */}
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1D2A39]/10 rounded-full border border-[#1D2A39]/10 mb-6">
            <span className="text-[#1D2A39] text-[10px] font-bold uppercase tracking-widest">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display text-[#1D2A39] font-medium mb-20">
            Our Working <span className="text-[#1D2A39] opacity-80 italic">Process</span>
          </h2>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Waving Connecting Line (Desktop) */}
            <svg className="hidden lg:block absolute top-[35%] left-0 w-full h-40 pointer-events-none opacity-20" viewBox="0 0 1000 100">
              <motion.path
                d="M0,50 Q125,100 250,50 T500,50 T750,50 T1000,50"
                fill="none"
                stroke="#1D2A39"
                strokeWidth="4"
                strokeDasharray="0 15"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  d: [
                    "M0,50 Q125,100 250,50 T500,50 T750,50 T1000,50",
                    "M0,50 Q125,0 250,50 T500,50 T750,50 T1000,50",
                    "M0,50 Q125,100 250,50 T500,50 T750,50 T1000,50"
                  ]
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 1 },
                  d: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </svg>

            {/* Waving Connecting Line (Mobile) */}
            <svg className="lg:hidden absolute left-1/2 top-40 w-16 h-[80%] -translate-x-1/2 pointer-events-none opacity-20" viewBox="0 0 40 1000" preserveAspectRatio="none">
              <motion.path
                d="M20,0 Q40,125 20,250 T20,500 T20,750 T20,1000"
                fill="none"
                stroke="#1D2A39"
                strokeWidth="4"
                strokeDasharray="0 15"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{
                  d: [
                    "M20,0 Q40,125 20,250 T20,500 T20,750 T20,1000",
                    "M20,0 Q0,125 20,250 T20,500 T20,750 T20,1000",
                    "M20,0 Q40,125 20,250 T20,500 T20,750 T20,1000"
                  ]
                }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                  opacity: { duration: 1 },
                  d: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {workingProcess.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col items-center ${item.position === 'bottom' ? 'lg:translate-y-16' : ''}`}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5
                      },
                      scale: { duration: 0.2 }
                    }}
                    className="relative cursor-pointer group/icon"
                  >
                    <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500">
                      <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center text-[#1D2A39]">
                        <item.icon size={32} />
                      </div>
                    </div>
                    {/* Step Number Circle */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#1D2A39] rounded-full flex items-center justify-center text-white text-[10px] font-bold border-4 border-[#E0F7F9] shadow-md">
                      {item.step}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#1D2A39] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed italic">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us - Stitch Editorial Redesign */}
      <section className="py-20 lg:py-32 bg-[#E0F7F9] relative overflow-hidden">
        {/* Background Sophistication - Tonal Blobs */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/20 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#00B4D8]/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

            {/* Left: The Visual Atelier (Organic Image Mastery) */}
            <div className="w-full lg:w-1/2 relative order-1">
              <div className="relative group max-w-[480px] mx-auto lg:mx-0">
                {/* Optimized Static Shadow Shape */}
                <div
                  className="absolute -inset-6 bg-[#1D2A39]/5 -z-10"
                  style={{ borderRadius: "60% 40% 30% / 60% 30% 70% 40%" }}
                />

                {/* Primary Organic Squircle Image Container - Performance Optimized */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-[0_20px_40px_-12px_rgba(29,42,57,0.1)] bg-white p-3 will-change-transform"
                  style={{ borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover grayscale-0 md:grayscale-[10%] md:group-hover:grayscale-0 transition-all duration-1000"
                    alt="Sai Academy Mastery"
                  />
                </motion.div>

                {/* Overlapping 'Seal of Quality' Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -40, rotate: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  className="absolute -top-10 -left-6 lg:-left-12 w-44 h-44 bg-white rounded-full shadow-2xl z-20 flex flex-col items-center justify-center p-8 text-center border-[14px] border-[#E0F7F9]"
                >
                  <Trophy size={28} className="text-[#00B4D8] mb-2" />
                  <span className="text-3xl lg:text-4xl font-display font-medium text-[#1D2A39] leading-tight tracking-tighter">12+</span>
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#1D2A39]/40 mt-1">Excellent <br /> Years</p>
                </motion.div>

                {/* Decorative Dotted Arrow - Guide the Eye */}
                <div className="absolute -bottom-16 right-0 text-[#00B4D8]/40 hidden lg:block">
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                    <path d="M2 2C20 10 60 10 118 78M118 78L105 75M118 78L115 65" stroke="currentColor" strokeWidth="2" strokeDasharray="0 12" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: The Narrative Canvas (Editorial Precision) */}
            <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 order-2">
              <div className="space-y-4 lg:space-y-5">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-[#1D2A39]/20" />
                  <span className="text-[#00B4D8] text-[10px] font-medium uppercase tracking-[0.4em]">THE SCHOLARLY ATELIER</span>
                </div>

                <h2 className="text-4xl lg:text-[52px] font-display text-[#1D2A39] leading-[1] tracking-tight">
                  <span className="font-light italic opacity-40 block mb-1 text-2xl lg:text-3xl">WHY</span>
                  <span className="font-medium">SAI ACADEMY</span> <br />
                  <span className="text-[#00B4D8] italic font-light">STANDS ALONE.</span>
                </h2>

                <p className="text-gray-500 leading-relaxed font-light text-xs lg:text-sm max-w-lg">
                  At our academy, language learning is treated as a prestigious craft. We blend academic rigor with fluid, practical fluency to ensure your success is both deep and professional.
                </p>
              </div>

              {/* Tonal Feature Modules - No Borders, Pure Tone */}
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {whyChooseFeatures.slice(0, 4).map((f, i) => (
                  <motion.div
                    key={i}
                    className="space-y-3 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1D2A39] group-hover:bg-[#1D2A39] group-hover:text-white transition-all duration-500">
                          <f.icon size={20} />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00B4D8]/10 rounded-lg -z-10 group-hover:scale-150 group-hover:bg-[#00B4D8]/20 transition-transform duration-700" />
                      </div>
                      <h4 className="font-display font-medium text-base text-[#1D2A39] tracking-tight">{f.title}</h4>
                    </div>
                    <p className="text-[10px] lg:text-[11px] text-gray-400 leading-relaxed font-light pl-2 border-l-2 border-[#1D2A39]/5 group-hover:border-[#00B4D8] transition-colors">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Call to Mastery */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
                <Link to="/contact" className="relative group px-8 py-4 bg-[#1D2A39] text-white rounded-full font-display font-medium text-xs tracking-widest hover:bg-[#00B4D8] transition-all duration-500 shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    BEGIN YOUR JOURNEY
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  {/* Button Gradient Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <div className="flex items-center gap-4">
                  <div className="w-px h-10 bg-[#1D2A39]/10" />
                  <div>
                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Global Support</p>
                    <p className="text-base font-display text-[#1D2A39]">+91 95884 62010</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Our Story */}
      <section className="py-20 lg:py-32 bg-[#E0F7F9] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl group border-4 border-white/50"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                alt="Sai Founders"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A39]/20 to-transparent" />
            </motion.div>

            {/* Right: Content & Detailed Story */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/5 shadow-sm">
                  <span className="text-brand-text text-[10px] font-bold uppercase tracking-widest">Our Legacy</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display text-brand-text font-medium">
                  Our <span className="text-brand-primary">Story</span>
                </h2>
                <p className="text-brand-text-muted leading-relaxed font-light text-lg">
                  What started as a single classroom in 2012 has transformed into a movement of linguistic empowerment. We didn't just build an academy; we built a bridge for thousands to cross into professional excellence.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-brand-primary/20 hover:border-brand-primary transition-colors duration-500"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/40 ring-4 ring-brand-surface" />
                  <h3 className="text-xl font-bold text-brand-text mb-3">The Mission: Human-First Training</h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    Our mission has always been simple yet profound: to strip away the fear of English and replace it with the power of voice. We aim to train 1,00,000+ students by 2030, ensuring that no career is ever limited by a language barrier. Our focus is on practical competence over rote memorization.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative pl-8 border-l-2 border-brand-primary/20 hover:border-brand-primary transition-colors duration-500"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-primary shadow-lg shadow-brand-primary/40 ring-4 ring-brand-surface" />
                  <h3 className="text-xl font-bold text-brand-text mb-3">Core Values: Trust & Transparency</h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    At Sai Spoken Classes, we live by a student-first philosophy. We believe in quality education that is accessible to all, from rural students to corporate professionals. Integrity is our foundation, and continuous innovation in our "broken-box" methodology keeps our results outstanding year after year.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Faculty Slider */}
      <section className="pt-10 pb-4 md:py-20 bg-[#E0F7F9] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-black/5 shadow-sm">
              <span className="text-[#1D2A39] text-[10px] font-bold uppercase tracking-widest">Our Team</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display text-[#1D2A39] font-medium leading-tight">
              Meet Our <span className="text-[#1D2A39] opacity-80 italic text-4xl lg:text-5xl">Expert Team</span>
            </h2>
          </div>

          <div className="relative group/slider">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {faculty.map((member, idx) => (
                <div key={idx} className="min-w-[220px] sm:min-w-[250px] lg:min-w-[18.8%] snap-center drop-shadow-sm">
                  <div className="group relative rounded-[36px] bg-white border border-white/50 shadow-[0_18px_50px_-30px_rgba(6,20,35,0.15)] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
                    {/* Main image */}
                    <div className="relative aspect-[4/5]">
                      <img
                        src={member.img}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        alt={member.name}
                        loading="lazy"
                      />

                      {/* Bottom fade for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1D2A39]/90" />

                      {/* Text strip on image */}
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h3 className="text-[16px] font-extrabold text-white leading-tight drop-shadow-sm line-clamp-1">
                          {member.name}
                        </h3>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B4D8] mt-1 line-clamp-1">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Subtle top arc */}
                    <div className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#1D2A39]/[0.06] blur-2xl" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-[#1D2A39]/20 flex items-center justify-center text-[#1D2A39] bg-white hover:bg-[#1D2A39] hover:text-white transition-all shadow-md"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="h-1 w-16 bg-white rounded-full overflow-hidden border border-black/5">
                <div className="h-full w-1/3 bg-[#1D2A39] rounded-full" />
              </div>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-[#1D2A39]/20 flex items-center justify-center text-[#1D2A39] bg-white hover:bg-[#1D2A39] hover:text-white transition-all shadow-md"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
