import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  Store,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Users,
  MapPin,
  CircleCheck,
  ArrowRight,
  PieChart,
  MessageSquare,
  Phone,
  Mail,
  Award,
  Rocket,
  Wrench,
  CheckCircle2,
  Trophy,
  Target,
  FileBadge,
  ChevronDown
} from 'lucide-react'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}



const steps = [
  { id: '01', title: 'Inquiry', desc: 'Connect with our franchise desk.' },
  { id: '02', title: 'Consultation', desc: 'Territory mapping and business planning.' },
  { id: '03', title: 'Site Visit', desc: 'Location finalization and setup guide.' },
  { id: '04', title: 'Training', desc: 'Staff training and academic preparation.' },
  { id: '05', title: 'Launch', desc: 'Grand opening with marketing support.' }
]

export default function Franchise() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="pt-0 font-sans bg-white overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#CFCEFC]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#803FF6]/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section - Dark 3D Aesthetic */}
      <section className="pt-24 pb-32 lg:pt-32 lg:pb-48 relative bg-gradient-to-br from-[#0F223D] to-[#061423] overflow-hidden">
        {/* Background Particles/Glows */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#CFCEFC]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Custom Sweeping SVG Divider matching #E0F7F9 (light teal of next section) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[200px] lg:h-[320px]">
            <path d="M0,0 C400,320 900,320 1440,320 L1440,320 L0,320 Z" fill="#E0F7F9" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* Left Column: Text Content from Flyer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 w-full lg:max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/90 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-xl">
                Sai Success Spoken English Classes
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-[72px] font-display font-medium leading-[1.0] text-white drop-shadow-md">
                  FRANCHISE
                </h1>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Red Highlight Tag */}
                  <div className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-xl shadow-red-500/30 transform -skew-x-12 border border-red-400/50">
                    <span className="text-white font-bold text-xl lg:text-3xl italic block transform skew-x-12 tracking-wide text-shadow-sm">
                      ONLY 999/-<span className="text-sm align-top">*</span>
                    </span>
                  </div>

                  {/* Yellow Highlight Tag */}
                  <div className="px-4 py-2 bg-[#FFD700] rounded-lg shadow-xl shadow-[#FFD700]/20 transform -skew-x-12">
                    <span className="text-[#061423] font-black text-[10px] lg:text-sm uppercase tracking-widest block transform skew-x-12">
                      ALL TALUKA LEVEL
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg lg:text-xl text-[#B9C6D6] leading-relaxed font-light italic border-l-4 border-[#3B82F6]/50 pl-6">
                Start your own spoken English classes and be your own boss! No experience required. We provide complete training & support.
              </p>

              {/* Flyer Stats/Icons inline */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                <div className="flex flex-col gap-1 items-start">
                  <Trophy size={18} className="text-[#3B82F6]" />
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider">Training & Support</span>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <TrendingUp size={18} className="text-[#3B82F6]" />
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider">Proven Model</span>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <Briefcase size={18} className="text-[#3B82F6]" />
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider">Study Material</span>
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <FileBadge size={18} className="text-[#3B82F6]" />
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-wider">Certification</span>
                </div>
              </div>

              {/* Interactive Buttons matching Reference UI */}
              <div className="flex flex-row items-center gap-2 sm:gap-4 pt-2">
                <a href="#apply" className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 px-3 sm:px-8 bg-gradient-to-r from-[#1796DF] to-[#712DE3] text-white rounded-md font-bold transition-all group shadow-xl hover:shadow-cyan-500/20 hover:scale-105 text-[10px] sm:text-sm">
                  Register Now
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ArrowRight size={14} className="sm:size-[18px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a href="tel:9588462010" className="flex-1 inline-flex items-center justify-center gap-2 sm:gap-3 h-12 sm:h-14 px-3 sm:px-8 bg-transparent backdrop-blur-sm rounded-md border border-[#3A4B6B] hover:bg-white/5 transition-all text-white font-semibold text-[10px] sm:text-sm tracking-tighter sm:tracking-widest shadow-lg">
                  <Phone size={14} className="text-[#1796DF] sm:size-[18px]" />
                  9588462010
                </a>
              </div>
            </motion.div>

            {/* Right Column: 3D Floating Perspective Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center mt-8 lg:mt-0"
              style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
            >
              {/* Underlay / Background Card stacked effect - Pushed back in 3D space */}
              <div
                className="absolute inset-4 lg:inset-8 bg-[#0B1A2F] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#3A4B6B]/30"
                style={{ transform: "rotate(8deg) translateX(16px) translateZ(-40px)" }}
              />
              <div
                className="absolute inset-2 lg:inset-4 bg-[#14294A] rounded-[20px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-[#3A4B6B]/40"
                style={{ transform: "rotate(4deg) translateX(8px) translateZ(-20px)" }}
              />

              {/* Main Top Image Card with perspective tilt - Pulled forward */}
              <motion.div
                whileHover={{ rotateX: 4, rotateY: -6, scale: 1.05, translateZ: "40px" }}
                initial={{ rotate: "-2deg", translateZ: "0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full bg-white rounded-[20px] overflow-hidden shadow-2xl border-4 border-[#14294A] z-10 group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
                  alt="Franchise Owner"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-[#CFCEFC]/30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1796DF] animate-pulse" />
                  <span className="text-[9px] font-bold text-[#061423] uppercase tracking-widest">Active Partner</span>
                </div>

                {/* Bottom Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#712DE3] flex items-center justify-center text-white shadow-lg">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm lg:text-base leading-tight">Empowering Educational Entrepreneurs</p>
                      <p className="text-[#B9C6D6] text-[10px] tracking-wider uppercase mt-1">Join 15+ Success Stories</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* Onboarding Journey - High Visibility Redesign */}
      <section className="py-20 lg:py-32 bg-[#E0F7F9] relative overflow-hidden">
        {/* Enhanced Watermark - Responsive Size */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[8rem] lg:text-[15rem] font-bold text-[#1796DF] opacity-[0.06] select-none pointer-events-none uppercase tracking-tighter">
          Journey
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1796DF]/15 rounded-full border border-[#1796DF]/30">
              <span className="text-[#1796DF] text-[10px] font-bold uppercase tracking-widest">Expansion Blueprint</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display text-[#0F223D] font-medium leading-tight">
              The <span className="text-[#1796DF] italic">Onboarding</span> Path
            </h2>
            <p className="text-[#0F223D]/70 text-sm lg:text-base max-w-xl mx-auto font-light">
              A meticulously designed five-step transition to becoming a core part of the Sai Success education network.
            </p>
          </div>

          {/* The Journey Path */}
          <div className="relative">
            {/* Connection Line (Desktop) - Increased Opacity & Thickness */}
            <div className="hidden lg:block absolute top-[120px] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#1796DF]/50 to-transparent shadow-[0_0_15px_rgba(23,150,223,0.3)]" />
            
            {/* Connection Line (Mobile) - Vertical Line */}
            <div className="lg:hidden absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#1796DF]/30 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Step Marker (Node) - Desktop */}
                  <div className="hidden lg:flex absolute top-[108px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#1796DF]/60 z-20 items-center justify-center group-hover:scale-125 group-hover:border-[#1796DF] transition-all duration-500 shadow-md">
                    <div className="w-3 h-3 rounded-full bg-[#1796DF] opacity-40 group-hover:opacity-100 group-hover:animate-pulse" />
                  </div>

                  {/* Step Marker (Node) - Mobile */}
                  <div className="lg:hidden absolute left-[24px] top-8 w-4 h-4 rounded-full bg-white border-2 border-[#1796DF] z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1796DF]" />
                  </div>

                  {/* Card Content */}
                  <div className={cn(
                    "relative flex flex-row items-center gap-6 pl-16 lg:pl-0 lg:flex-col lg:text-center lg:space-y-6",
                    idx % 2 === 0 ? "lg:flex-col" : "lg:flex-col-reverse lg:space-y-reverse lg:mt-36"
                  )}>
                    {/* Icon Sphere */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[24px] lg:rounded-[32px] bg-white border-2 border-[#1796DF]/10 shadow-xl flex items-center justify-center text-[#1796DF] relative z-10 group-hover:-translate-y-1 lg:group-hover:-translate-y-3 transition-transform duration-500">
                      <span className="text-2xl lg:text-3xl font-display font-bold opacity-30 group-hover:opacity-100 transition-opacity">{step.id}</span>
                      
                      {/* Floating Glow */}
                      <div className="absolute inset-0 bg-[#1796DF]/5 rounded-[24px] lg:rounded-[32px] blur-xl group-hover:bg-[#1796DF]/15 transition-colors" />
                    </div>

                    {/* Text Block */}
                    <div className="space-y-1 lg:space-y-2 lg:max-w-[200px]">
                      <h3 className="text-lg lg:text-xl font-bold text-[#0F223D] group-hover:text-[#1796DF] transition-colors">{step.title}</h3>
                      <p className="text-[#0F223D]/80 text-[11px] lg:text-xs leading-relaxed italic font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section - 3D Light Teal Layout (Merged) */}
      <section id="apply" className="py-16 lg:py-24 relative bg-[#E0F7F9]">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
              boxShadow: "0 70px 100px -30px rgba(0,0,0,0.2), 0 30px 60px -20px rgba(0,0,0,0.15), 0 -4px 10px 0 rgba(255,255,255,0.4) inset"
            }}
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
            className="max-w-3xl mx-auto rounded-[40px] overflow-hidden bg-white border border-white flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-700 ease-out"
          >
            {/* Left side: branding/contact info */}
            <div className="lg:w-[40%] bg-[#061423] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden text-white" style={{ transform: "translateZ(30px)" }}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#803FF6]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <div className="space-y-4 lg:space-y-5 relative z-10">
                <div className="hidden lg:flex w-12 h-12 bg-[#803FF6] rounded-xl items-center justify-center shadow-lg shadow-[#803FF6]/30">
                  <Mail size={24} className="text-white" />
                </div>
                <h2 className="text-xl lg:text-3xl font-display font-medium leading-tight text-center lg:text-left">
                  Start Your <br className="hidden lg:block" />
                  <span className="text-[#803FF6]">Expansion</span> <br className="hidden lg:block" />
                  Journey
                </h2>
                <div className="hidden lg:block w-8 h-1 bg-[#803FF6] rounded-full" />
                <p className="hidden lg:block text-white/60 text-xs font-light leading-relaxed">
                  Fill out the form to get our detailed business plan.
                </p>

                <div className="hidden lg:block space-y-4 pt-6 border-t border-white/10">
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#803FF6] group-hover:bg-[#803FF6] group-hover:text-white transition-all">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Franchise Desk</p>
                      <p className="text-base font-bold">9588462010</p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#803FF6] group-hover:bg-[#803FF6] group-hover:text-white transition-all">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Support Email</p>
                      <p className="text-base font-bold">franchise@saispoken.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: the form */}
            <div className="lg:w-[60%] p-8 lg:p-10 bg-white relative" style={{ transform: "translateZ(10px)" }}>
              <h3 className="text-xl font-display font-medium text-[#191c1e] mb-1">Franchise Application</h3>
              <p className="text-[10px] text-[#464554] mb-4 italic">Please provide your details for review.</p>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-[#464554] uppercase tracking-widest ml-4">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 bg-[#F0F0FC]/50 rounded-full px-5 text-xs border border-transparent focus:border-[#803FF6]/30 focus:bg-white focus:outline-none transition-all shadow-inner"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-[#464554] uppercase tracking-widest ml-4">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full h-11 bg-[#F0F0FC]/50 rounded-full px-5 text-xs border border-transparent focus:border-[#803FF6]/30 focus:bg-white focus:outline-none transition-all shadow-inner"
                      placeholder="Mobile number"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-[#464554] uppercase tracking-widest ml-4">Target Location</label>
                  <input
                    type="text"
                    required
                    className="w-full h-11 bg-[#F0F0FC]/50 rounded-full px-5 text-xs border border-transparent focus:border-[#803FF6]/30 focus:bg-white focus:outline-none transition-all shadow-inner"
                    placeholder="City/Taluka"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-[#464554] uppercase tracking-widest ml-4">Background</label>
                  <textarea
                    className="w-full p-4 bg-[#F0F0FC]/50 rounded-[20px] text-xs border border-transparent focus:border-[#803FF6]/30 focus:bg-white focus:outline-none transition-all resize-none shadow-inner"
                    rows={2}
                    placeholder="Brief experience..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-11 bg-[#803FF6] text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-[#803FF6]/30 hover:bg-[#6c32d4] transition-all flex items-center justify-center gap-2"
                >
                  SUBMIT APPLICATION <ArrowRight size={14} />
                </motion.button>
              </form>

              {/* Success Overlay */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-12 text-center"
                  >
                    <div className="w-16 h-16 bg-[#803FF6] rounded-2xl flex items-center justify-center text-white mb-4 shadow-2xl">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-display font-medium text-[#191c1e] mb-2">Request Sent!</h4>
                    <p className="text-[11px] text-[#464554] leading-relaxed italic mb-6 max-w-[200px]">
                      Our franchise desk will reach out shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-[#803FF6] font-bold text-[10px] tracking-widest uppercase underline underline-offset-4"
                    >
                      CLOSE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
