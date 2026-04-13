import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  ArrowUpRight,
  CircleCheck,
  GraduationCap,
  Briefcase,
  Star
} from 'lucide-react'
import heroImage from '../assets/faculty_hero.png'

const trainers = [
  {
    name: 'Priya Sharma',
    role: 'Senior Spoken Coach',
    subject: 'Soft Skills',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'Pioneer of communicative competence, having trained over 5000+ students in soft skills.'
  },
  {
    name: 'Arjun Mehra',
    role: 'Grammar & IELTS Specialist',
    subject: 'Academic',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    bio: 'Specialist in making complex grammar simple for regular conversation and competitive exams.'
  },
  {
    name: 'Sneha Kapoor',
    role: 'Voice & Accent Expert',
    subject: 'Communication',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    bio: 'Dedicated to transforming shy students into confident speakers ready for the professional world.'
  },
  {
    name: 'Vikram Singh',
    role: 'Corporate Training Head',
    subject: 'Business',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    bio: 'Expertly guiding students through corporate communication mastery for global success.'
  },
  {
    name: 'Rajesh Khanna',
    role: 'Senior Interview Coach',
    subject: 'Soft Skills',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    bio: 'Expert in banking and corporate interview preparation with a 95% placement success rate.'
  },
  {
    name: 'Meera Nair',
    role: 'Creative Writing Specialist',
    subject: 'Academic',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    bio: 'Helping students master the art of storytelling and advanced essay writing for global education.'
  },
  {
    name: 'Sanjay Verma',
    role: 'Public Speaking Mentor',
    subject: 'Communication',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    bio: 'Specializing in stage presence and rhetoric to help you speak with authority and charisma.'
  },
  {
    name: 'Anjali Rao',
    role: 'Personality Development',
    subject: 'Soft Skills',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    bio: 'Focusing on body language and social etiquette to create a lasting professional impression.'
  },
  {
    name: 'Vikash Gupta',
    role: 'Grammar Mastery Expert',
    subject: 'Academic',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop',
    bio: 'Author of several English learning guides, making advanced linguistics accessible to beginners.'
  },
  {
    name: 'Kavita Singh',
    role: 'Corporate Communication',
    subject: 'Business',
    img: 'https://images.unsplash.com/photo-1598550874175-4d0fe427c731?q=80&w=400&auto=format&fit=crop',
    bio: 'Decades of experience training C-suite executives in global business communication standards.'
  },
  {
    name: 'Rahul Sharma',
    role: 'Confidence & Fluency Coach',
    subject: 'Communication',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'Passionate about removing language barriers and building unwavering self-confidence in learners.'
  },
  {
    name: 'Pooja Desai',
    role: 'Voice & Accent Trainer',
    subject: 'Communication',
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&auto=format&fit=crop',
    bio: 'Certified phoneticist specialized in neutral and global accents for professional excellence.'
  },
  {
    name: 'Amit Patel',
    role: 'Leadership Skills Mentor',
    subject: 'Business',
    img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&auto=format&fit=crop',
    bio: 'Strategic thinker helping emerging leaders communicate vision and lead with emotional intelligence.'
  },
  {
    name: 'Swati Misra',
    role: 'IELTS Academic Specialist',
    subject: 'Academic',
    img: 'https://images.unsplash.com/photo-1567532939805-4752e5c6a56c?q=80&w=400&auto=format&fit=crop',
    bio: 'Dedicated to helping students achieve 8+ bands in IELTS Academic through targeted strategies.'
  }
]

export default function Faculty() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#DFF6F8] min-h-screen">
      {/* Section 1: Hero Redesigned - Hill Wave & Perfect Circle CTA */}
      <section className="relative bg-[#DFF6F8] overflow-hidden">
        {/* Taller Banner with Hill-Style Wave */}
        <div className="relative w-full h-[550px] lg:h-[700px] overflow-hidden">
          <img
            src={heroImage}
            className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
            alt="Faculty Group"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* HILL-STYLE WAVE SVG (High Peak Left, Swoop Right) */}
          <div className="absolute bottom-0 left-0 w-full leading-none z-10">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-40 lg:h-64">
              <path
                fill="#DFF6F8"
                fillOpacity="1"
                d="M0,160 C400,0 800,400 1440,160 L1440,320 L0,320 Z"
              ></path>
            </svg>
          </div>

          {/* Content PERFECT CIRCLE Overlap */}
          <div className="absolute top-[10%] left-0 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="bg-white rounded-full w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 p-3 lg:p-4 shadow-2xl relative flex flex-col items-center justify-center text-center border border-[#803FF6]/5"
            >
              {/* Mission Badge */}
              <div className="bg-[#803FF6]/10 text-[#803FF6] text-[6px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border border-[#803FF6]/10 mb-1">
                Our Mentors
              </div>

              <h1 className="text-xs sm:text-sm lg:text-base font-serif text-[#191c1e] leading-[1.1] mb-1 max-w-[120px] lg:max-w-[140px]">
                Meet our <br />
                <span className="text-[#803FF6] italic">Success</span> Experts
              </h1>

              <p className="hidden sm:block text-[8px] lg:text-[9px] text-[#464554] font-light leading-relaxed max-w-[100px] lg:max-w-[120px] mb-1 opacity-80">
                World-class linguistic coaching.
              </p>

              {/* CIRCULAR CTA BOX Overlapping Half (Top Right) */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-5 right-[20px] translate-x-1/2 -translate-y-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-[#803FF6] rounded-full flex flex-col items-center justify-center text-center p-1 cursor-pointer shadow-2xl shadow-[#803FF6]/40 z-30 border-2 border-white"
              >
                <span className="text-white text-[5px] lg:text-[6px] font-extrabold uppercase tracking-widest leading-tight">
                  Learn Who <br /> We Are
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Spacing above grid */}
        <div className="h-24 lg:h-32 bg-[#DFF6F8]" />
      </section>

      {/* Section 2: All Faculties Grid - RESPONSIVE 4-UP PILL ARCH */}
      <section className="pb-32 container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {trainers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="group relative h-full"
            >
              <div className="relative h-full flex flex-col bg-white rounded-tr-[60px] rounded-br-[60px] rounded-bl-[60px] rounded-tl-none p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(128,63,246,0.12)] border border-gray-100/60">

                {/* Top Decorative dots icon */}
                <div className="mb-6 grid grid-cols-2 gap-1.5 w-3 ml-2 mt-2 opacity-60">
                  <div className="w-[5px] h-[5px] bg-[#A8B2C1] rounded-full"></div>
                  <div className="w-[5px] h-[5px] bg-[#803FF6] rounded-full"></div>
                  <div className="w-[5px] h-[5px] bg-[#803FF6] rounded-full"></div>
                  <div className="w-[5px] h-[5px] bg-[#A8B2C1] rounded-full"></div>
                </div>

                {/* Typography */}
                <div className="px-1 mb-3 flex-grow flex flex-col">
                  <h3 className="text-xl font-serif text-[#191c1e] leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#803FF6]/70 mb-3">
                    {member.role}
                  </p>
                  <p className="text-[12px] text-gray-500 mt-1 font-light leading-relaxed line-clamp-3 min-h-[50px]">
                    {member.bio}
                  </p>
                </div>

                {/* Circular Profile Image with Floating Arrow */}
                <div className="relative mt-6 flex justify-center pb-1">
                  <div className="relative w-32 h-32">
                    <img
                      src={member.img}
                      className="w-full h-full object-cover rounded-full shadow-md transition-transform duration-700 group-hover:scale-[1.03] border-4 border-white"
                      alt={member.name}
                      loading="lazy"
                    />
                    {/* Floating Purple Arrow Button */}
                    <div className="absolute top-0 right-0 w-9 h-9 bg-[#803FF6] rounded-full flex items-center justify-center text-white shadow-[0_6px_15px_-5px_rgba(128,63,246,0.6)] transition-all duration-300 group-hover:rotate-45 cursor-pointer z-10 hover:bg-[#6e35d1] group-hover:scale-110">
                      <ArrowUpRight size={16} className="group-hover:-rotate-45 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Work with Us Form */}
      <section className="py-16 bg-[#DFF6F8] relative overflow-hidden">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#803FF6]/10 rounded-full border border-[#803FF6]/10">
                  <Briefcase size={12} className="text-[#803FF6]" />
                  <span className="text-[#803FF6] text-[9px] font-bold uppercase tracking-[0.2em]">Join Our Team</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-display text-[#191c1e] font-medium leading-tight">
                  Passionate about <br />
                  Teaching? <span className="text-[#803FF6] italic">Join Us.</span>
                </h2>

                <p className="text-base text-[#464554] font-light leading-relaxed">
                  We are always looking for exceptional linguistic trainers and coaches to join our mission of creating confident global communicators.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    { icon: GraduationCap, title: 'Expert Training Environment' },
                    { icon: Users, title: 'Collaborative Community' },
                    { icon: Star, title: 'Work-Life Flexibility' }
                  ].map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#803FF6] group-hover:scale-110 transition-transform shadow-sm">
                        <benefit.icon size={18} />
                      </div>
                      <span className="text-base font-medium text-[#191c1e]">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Application Form Card (LIGHT VERSION) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group border border-[#CFCEFC]/50"
              >
                <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[#803FF6]/60 text-[9px] font-bold uppercase tracking-widest ml-4">Full Name</label>
                      <input
                        required type="text" placeholder="Name"
                        className="w-full bg-[#F7F9FB] border border-[#CFCEFC]/30 rounded-full px-6 py-4 text-[#191c1e] placeholder:text-[#464554]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#803FF6]/20 transition-all font-light"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#803FF6]/60 text-[9px] font-bold uppercase tracking-widest ml-4">Phone Number</label>
                      <input
                        required type="tel" placeholder="+91..."
                        className="w-full bg-[#F7F9FB] border border-[#CFCEFC]/30 rounded-full px-6 py-4 text-[#191c1e] placeholder:text-[#464554]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#803FF6]/20 transition-all font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#803FF6]/60 text-[9px] font-bold uppercase tracking-widest ml-4">Email Address</label>
                    <input
                      required type="email" placeholder="email@example.com"
                      className="w-full bg-[#F7F9FB] border border-[#CFCEFC]/30 rounded-full px-6 py-4 text-[#191c1e] placeholder:text-[#464554]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#803FF6]/20 transition-all font-light"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#803FF6]/60 text-[9px] font-bold uppercase tracking-widest ml-4">Expertise Area</label>
                    <select className="w-full bg-[#F7F9FB] border border-[#CFCEFC]/30 rounded-full px-6 py-4 text-[#191c1e]/40 focus:outline-none focus:ring-2 focus:ring-[#803FF6]/20 appearance-none cursor-pointer text-sm font-light">
                      <option className="text-[#191c1e]">Choose Department</option>
                      <option className="text-[#191c1e]">Spoken English Coach</option>
                      <option className="text-[#191c1e]">IELTS Specialist</option>
                      <option className="text-[#191c1e]">Grammar Mastery</option>
                      <option className="text-[#191c1e]">Personality Development</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#803FF6]/60 text-[9px] font-bold uppercase tracking-widest ml-4">Tell us about yourself</label>
                    <textarea
                      placeholder="Brief bio..."
                      rows={2}
                      className="w-full bg-[#F7F9FB] border border-[#CFCEFC]/30 rounded-[25px] px-6 py-4 text-[#191c1e] placeholder:text-[#464554]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#803FF6]/20 transition-all font-light resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#803FF6] text-white font-bold py-4 rounded-full flex items-center justify-center gap-3 shadow-xl shadow-[#803FF6]/20 hover:bg-[#6e35d1] transition-colors mt-3"
                  >
                    Apply Now
                    <ArrowUpRight size={18} />
                  </motion.button>
                </form>

                {/* Success Overlay */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#DFF6F8] flex flex-col items-center justify-center text-center p-8 z-20"
                    >
                      <div className="w-20 h-20 bg-[#803FF6] rounded-full flex items-center justify-center text-white mb-6">
                        <CircleCheck size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#191c1e] mb-2">Application Sent!</h3>
                      <p className="text-[#464554] text-sm font-light">We'll review your profile and contact you soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
