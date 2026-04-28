import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { CircleCheck, GraduationCap, Users, BookOpen, Clock, Award, PlayCircle, Store, MessageSquare, Search, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowLeft, ArrowRight, Heart, Star, Play, BarChart2, UserCheck } from 'lucide-react'

import heroGirl from '../assets/hero-girl.png'
import heroBg from '../assets/hero-bg.png'
import { mainAchievement, achievementStats } from '../data/achievementsData'
import FloatingGrammarBg from '../components/FloatingGrammarBg'

const highlights = [
  { title: 'Trained Faculty', desc: 'Learn from expert grammar coaches and spoken trainers.', icon: GraduationCap, bg: 'bg-[#F1E9A3]' }, // Clearly darker Cream
  { title: 'Live Classes', desc: 'Interactive sessions with real-time feedback.', icon: PlayCircle, bg: 'bg-[#C5E2CD]' }, // Clearly darker Green
  { title: 'Revision Support', desc: 'Weekly revision and learning materials provided.', icon: BookOpen, bg: 'bg-[#C7DBE0]' }, // Clearly darker Blue
  { title: 'Certificates', desc: 'Get certified after successful course completion.', icon: Award, bg: 'bg-[#FBD1B5]' }, // Clearly darker Pink/Peach
  { title: 'Franchise Option', desc: 'Join our growing network of English centers.', icon: Store, bg: 'bg-[#DFCDE2]' }, // Clearly darker Purple
  { title: 'Special Batches', desc: 'Tailored for kids, students, and homemakers.', icon: Users, bg: 'bg-[#F1E4A3]' }, // Clearly darker Yellow
]

const courses = [
  {
    title: 'Basic to Fluent Spoken English',
    duration: '12 Weeks',
    lessons: 60,
    level: 'Beginner',
    rating: '4.9',
    reviews: '2.1k',
    price: '₹2,500',
    instructor: 'Priya Sharma',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'IELTS Academic 8+ Band Prep',
    duration: '8 Weeks',
    lessons: 45,
    level: 'Advanced',
    rating: '4.8',
    reviews: '1.5k',
    price: '₹5,000',
    instructor: 'Arjun Mehra',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Personality & Soft Skills Masterclass',
    duration: '6 Weeks',
    lessons: 30,
    level: 'Intermediate',
    rating: '4.9',
    reviews: '1.2k',
    price: '₹3,500',
    instructor: 'Sneha Kapoor',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Advanced English Grammar Mastery',
    duration: '10 Weeks',
    lessons: 50,
    level: 'Intermediate',
    rating: '4.7',
    reviews: '1.8k',
    price: '₹2,000',
    instructor: 'Vikash Gupta',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Public Speaking & Confidence Building',
    duration: '4 Weeks',
    lessons: 20,
    level: 'All Levels',
    rating: '5.0',
    reviews: '900+',
    price: '₹4,000',
    instructor: 'Sanjay Verma',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
  },
  {
    title: 'Interview Prep & Corporate Etiquette',
    duration: '2 Weeks',
    lessons: 15,
    level: 'Advanced',
    rating: '4.9',
    reviews: '750+',
    price: '₹3,000',
    instructor: 'Rajesh Khanna',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'
  }
]

const heroBullets = [
  { text: 'Personalized Spoken English Training for All Ages', icon: Award, color: 'text-brand-accent' },
  { text: 'Expert Mentors with 10+ Years of Excellence', icon: Users, color: 'text-blue-500' },
  { text: 'Flexible Batch Timings: Morning & Evening', icon: Clock, color: 'text-brand-primary' },
  { text: 'Comprehensive Study Material & Certification', icon: CircleCheck, color: 'text-green-500' },
]

const heroSlides = [
  {
    id: 0,
    badge: 'Admissions Open 2025-26',
    headline: <>Speak English.<br />Build Confidence.</>,
    subtext: 'Your journey to fluent English starts here',
    ctaText: 'Join Now',
    ctaLink: '/contact',
    bgColor: 'bg-[#B8DDE3]',
    type: 'gallery'
  },
  {
    id: 1,
    badge: 'Explore Programs',
    headline: <>Speak. Lead. Succeed.</>,
    subHeadline: 'Courses for Every Level.',
    subtext: 'From beginner to advanced — find your batch today',
    ctaText: 'View Courses',
    ctaLink: '/courses',
    bgColor: 'bg-[#B8DDE3]',
    type: 'single'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef(null)
  const courseScrollRef = useRef(null)
  const franchiseRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: franchiseRef,
    offset: ["start end", "end start"]
  })

  // Scroll Transforms for Franchise Breaking Effect
  // Shards are joined at the beginning and break apart as you scroll down
  const shardXLeft = useTransform(scrollYProgress, [0.4, 0.8], [0, -30])
  const shardXRight = useTransform(scrollYProgress, [0.4, 0.8], [0, 30])
  const shardRotateLeft = useTransform(scrollYProgress, [0.4, 0.8], [0, -2.5])
  const shardRotateRight = useTransform(scrollYProgress, [0.4, 0.8], [0, 2.5])
  const shardYLeft = useTransform(scrollYProgress, [0.4, 0.8], [0, -5])
  const shardYRight = useTransform(scrollYProgress, [0.4, 0.8], [0, 5])

  const scrollBy = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <div className="overflow-hidden">
      {/* Academy Refined Hero Slider */}
      <section className="relative flex items-center overflow-hidden h-[100dvh] pt-20 lg:pt-32 pb-0 bg-brand-surface">
        {/* Aesthetic Background Image with Soft Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Soft White Overlay for readability and premium feel */}
          <div className="absolute inset-0 bg-brand-surface/60 backdrop-blur-[2px]" />

          {/* Subtle Dynamic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/10" />
        </div>

        {/* Subtle Background Accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[70vh] bg-brand-primary/5 rounded-l-[100px] blur-3xl pointer-events-none z-1" />

        {slide.type === 'single' && (
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: -20, opacity: 0.6 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-[40%] w-[120px] h-[120px] bg-[#70C7C6] rounded-full z-10 blur-xl pointer-events-none"
          />
        )}

        <div className="container mx-auto px-6 sm:px-8 md:px-12 relative z-10 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className={`flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 ${slide.type === 'gallery' ? 'items-center' : 'lg:items-center items-end'} h-full max-h-full`}>
                {/* Left Content: Dynamic per slide */}
                <div className="space-y-4 md:space-y-10 pl-0 lg:pl-[30px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:self-center lg:min-h-[400px] w-full mt-8 lg:mt-0 relative z-30">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-brand-peach shadow-sm">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[10px] font-bold text-brand-text/80 uppercase tracking-widest">{slide.badge}</span>
                    </div>

                    <div className="space-y-2">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-display leading-[1.1] text-brand-text font-medium">
                        {slide.headline}
                      </h1>
                      {slide.subHeadline && (
                        <h2 className="text-sm md:text-lg font-display text-brand-primary italic font-light">
                          {slide.subHeadline}
                        </h2>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-brand-text-muted font-light italic max-w-lg">
                      "{slide.subtext}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <Link to={slide.ctaLink} className="btn-primary py-2 px-6 sm:py-2.5 sm:px-8 text-[10px] sm:text-xs font-semibold shadow-xl shadow-brand-primary/20 border-b-4 border-r-4 border-brand-primary/40 active:translate-y-1 active:border-b-0 transition-all flex items-center gap-2">
                      {slide.ctaText} <CircleCheck size={14} className="sm:size-4" />
                    </Link>
                  </div>

                  {/* Enrollment Bar - Only on Slide 1 as requested */}
                  {slide.type === 'gallery' && (
                    <div className="flex flex-col sm:flex-row items-center bg-brand-surface p-1.5 rounded-2xl md:rounded-full shadow-2xl border border-brand-peach/30 max-w-2xl group focus-within:ring-2 focus-within:ring-brand-primary/10 transition-all">
                      <div className="flex items-center gap-2.5 px-4 py-1.5 flex-grow border-b sm:border-b-0 sm:border-r border-brand-peach/20 w-full sm:w-auto">
                        <BookOpen size={16} className="text-brand-primary" />
                        <input
                          type="text"
                          placeholder="e.g. Basic, Advanced, Grammar, Interview Prep..."
                          className="bg-transparent border-none focus:outline-none text-brand-text font-medium w-full text-xs placeholder:text-brand-text/30"
                        />
                      </div>
                      <div className="flex items-center gap-2.5 px-4 py-1.5 flex-grow w-full sm:w-auto">
                        <Phone size={16} className="text-brand-primary" />
                        <input
                          type="text"
                          placeholder="Your Phone Number"
                          className="bg-transparent border-none focus:outline-none text-brand-text font-medium w-full text-xs placeholder:text-brand-text/30"
                        />
                      </div>
                      <button className="w-full sm:w-auto bg-brand-primary text-white py-2 px-6 sm:py-2.5 sm:px-8 rounded-full flex items-center justify-center gap-2 text-[10px] sm:text-xs font-bold whitespace-nowrap shadow-xl shadow-brand-primary/20 hover:bg-brand-primary-light transition-all border-b-4 border-r-4 border-brand-primary/40 active:translate-y-1 active:border-b-0">
                        Enquire Now <MessageSquare size={14} className="sm:size-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Content Column */}
                <div className="relative h-full">
                  {slide.type === 'gallery' ? (
                    <div className="flex items-center justify-center gap-2 sm:gap-3 h-[25vh] sm:h-[400px] lg:h-[550px] relative mt-2 lg:mt-0">
                      {/* Pill Image 1 */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[60px] h-[160px] sm:w-[92px] sm:h-[310px] lg:w-[110px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 self-end border-b-8 border-r-4 border-brand-peach/40"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                          className="w-full h-full object-cover grayscale-0 md:grayscale-[15%] md:hover:grayscale-0 transition-all duration-700"
                          alt="Trained Student"
                        />
                      </motion.div>

                      {/* Pill Image 2 */}
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[75px] h-[210px] sm:w-[115px] sm:h-[400px] lg:w-[135px] lg:h-[480px] rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-20 border-b-8 border-r-4 border-brand-peach/40"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                          className="w-full h-full object-cover object-[center_20%]"
                          alt="Expert Academy Trainer"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-brand-primary/20 to-transparent pointer-events-none" />
                      </motion.div>

                      {/* Pill Image 3 */}
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[65px] h-[180px] sm:w-[100px] sm:h-[320px] lg:w-[120px] lg:h-[360px] rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 self-start mt-4 border-b-8 border-r-4 border-brand-peach/40"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                          className="w-full h-full object-cover grayscale-0 md:grayscale-[10%] md:hover:grayscale-0 transition-all duration-700"
                          alt="Sai Spoken Classes Group Session"
                        />
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex flex-1 items-end justify-center w-full relative lg:mt-0 opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto">
                      {/* Ghost container to maintain layout structure on desktop */}
                      <div className="h-[82vh] w-full" />
                    </div>
                  )}
                </div>
              </div>

              {/* Absolute Centered Girl Subject - True Screen Centering for Mobile */}
              {slide.type !== 'gallery' && (
                <div className="absolute inset-0 flex items-end justify-center lg:justify-end lg:pr-[12%] pointer-events-none z-40">
                  <motion.div
                    key={`girl-${currentSlide}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-end grow-0 group"
                  >
                    <img
                      src={heroGirl}
                      className="h-[45vh] sm:h-[550px] lg:h-[85vh] w-auto object-contain object-bottom drop-shadow-2xl mb-[-1px] relative z-10"
                      alt="Join our community"
                    />

                    {/* Floating Accent Cards - Optimized responsiveness */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* 1. Results Card */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute top-[5%] -left-[25%] sm:-left-[35%] lg:top-[15%] lg:-left-[25%] bg-white/95 p-1 sm:p-1.5 lg:p-1.5 rounded-lg sm:rounded-xl lg:rounded-xl shadow-xl border border-brand-peach/30 backdrop-blur-sm z-30 flex items-center gap-1 sm:gap-1.5 lg:gap-2 animate-float"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                          <CircleCheck size={10} className="sm:size-[14px] lg:size-4" />
                        </div>
                        <div className="pr-1 sm:pr-1.5 lg:pr-2">
                          <p className="text-[5px] sm:text-[6px] lg:text-[8px] font-bold text-brand-text/50 uppercase tracking-tight whitespace-nowrap">Success</p>
                          <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-brand-text whitespace-nowrap">100% Results Oriented</p>
                        </div>
                      </motion.div>

                      {/* 2. Success Stories Card */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="absolute top-[45%] -left-[30%] sm:-left-[30%] lg:top-[50%] lg:-left-[15%] bg-white/95 p-1 sm:p-1.5 lg:p-1.5 rounded-lg sm:rounded-xl lg:rounded-xl shadow-xl border border-brand-peach/30 backdrop-blur-sm z-30 flex items-center gap-1 sm:gap-1.5 lg:gap-2"
                        style={{ animation: 'float 5s ease-in-out infinite reverse' }}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold text-[7px] sm:text-[8px] lg:text-[11px]">
                          5K+
                        </div>
                        <div className="pr-1 sm:pr-1.5 lg:pr-2">
                          <p className="text-[5px] sm:text-[6px] lg:text-[8px] font-bold text-brand-text/50 uppercase whitespace-nowrap">Community</p>
                          <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-brand-text whitespace-nowrap">Happy Stories</p>
                        </div>
                      </motion.div>

                      {/* 3. Rating Card */}
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="absolute top-[10%] -right-[35%] sm:-right-[35%] lg:top-[25%] lg:-right-[20%] bg-white/95 p-1 sm:p-1.5 lg:p-1.5 rounded-lg sm:rounded-xl lg:rounded-xl shadow-xl border border-brand-peach/30 backdrop-blur-sm z-30 flex items-center gap-1 sm:gap-1.5 lg:gap-2 animate-float"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                          <Star size={10} className="sm:size-[14px] lg:size-4" fill="currentColor" />
                        </div>
                        <div className="pr-1 sm:pr-1.5 lg:pr-2">
                          <p className="text-[5px] sm:text-[6px] lg:text-[8px] font-bold text-brand-text/50 uppercase tracking-tight whitespace-nowrap">Rating</p>
                          <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-brand-text whitespace-nowrap">4.9/5 Star Academy</p>
                        </div>
                      </motion.div>

                      {/* 4. Live Batch Card */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="absolute top-[50%] -right-[42%] sm:-right-[40%] lg:top-[45%] lg:-right-[35%] bg-white/95 p-1 sm:p-1.5 lg:p-1.5 rounded-lg sm:rounded-xl lg:rounded-xl shadow-xl border border-brand-peach/30 backdrop-blur-sm z-30 flex items-center gap-1 sm:gap-1.5 lg:gap-2"
                        style={{ animation: 'float 6s ease-in-out infinite' }}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                          <PlayCircle size={10} className="sm:size-[14px] lg:size-4" fill="currentColor" />
                        </div>
                        <div className="pr-1 sm:pr-1.5 lg:pr-2">
                          <p className="text-[5px] sm:text-[6px] lg:text-[8px] font-bold text-brand-text/50 uppercase whitespace-nowrap">Active Now</p>
                          <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-brand-text whitespace-nowrap">Interactive Live Sessions</p>
                        </div>
                      </motion.div>

                      {/* 5. Experience Card */}
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="absolute top-[80%] -right-[35%] sm:-right-[45%] lg:top-[70%] lg:-right-[15%] bg-white/95 p-1 sm:p-1.5 lg:p-1.5 rounded-lg sm:rounded-xl lg:rounded-xl shadow-xl border border-brand-peach/30 backdrop-blur-sm z-30 flex items-center gap-1 sm:gap-1.5 lg:gap-2 animate-float"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <Award size={10} className="sm:size-[14px] lg:size-4" />
                        </div>
                        <div className="pr-1 sm:pr-1.5 lg:pr-2">
                          <p className="text-[5px] sm:text-[6px] lg:text-[8px] font-bold text-brand-text/50 uppercase whitespace-nowrap">Legacy</p>
                          <p className="text-[7px] sm:text-[8px] lg:text-[10px] font-bold text-brand-text whitespace-nowrap">16+ Years Excellence</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* About Us Section - Redesigned Perks Layout */}
      {/* Why Choose Us Section - Redesigned Layout */}
      <section id="about" className="py-12 lg:py-16 relative overflow-hidden bg-brand-surface">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 rounded-full border border-brand-primary/10 mb-4"
            >
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
              </div>
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em]">Why Choose Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-display text-brand-text font-medium tracking-tight leading-tight max-w-2xl mx-auto"
            >
              Empowering Your Success with <span className="text-brand-primary italic font-signature font-normal text-2xl md:text-3xl lg:text-4xl">Language Expertise</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side: Staggered Images */}
            <div className="relative h-[260px] md:h-[450px] max-w-[320px] md:max-w-[400px] mx-auto lg:mx-0 w-full group">
              {/* Top Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-[70%] h-[60%] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white ring-1 ring-black/5 z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Sai Spoken Classes Students"
                />
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 right-0 w-[70%] h-[60%] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl border-[4px] md:border-[6px] border-white ring-1 ring-black/5 z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-0 md:grayscale-[20%] md:group-hover:grayscale-0"
                  alt="Sai Spoken Classes Learning Environment"
                />
              </motion.div>

              {/* Floating Badge (Smaller) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative w-16 h-16 md:w-24 md:h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePathSmall" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[12px] md:text-[11px] font-bold fill-brand-primary uppercase tracking-[0.2em]">
                      <textPath xlinkHref="#circlePathSmall">
                        Choose Sai Academy • Why Choose Us •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-7 h-7 md:w-10 md:h-10 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg">
                      <ArrowRight className="size-3.5 md:size-4 -rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Content & Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <p className="text-[14px] text-brand-text-muted leading-relaxed font-light mb-6 max-w-xl">
                We bridge the gap between classroom learning and real-world communication, ensuring you excel with confidence in every sphere of life.
              </p>

              {/* Progress Bars (More Compact) */}
              <div className="space-y-6 mb-8">
                {[
                  { label: "Quality Training & Fluency", value: 95 },
                  { label: "Expert Mentorship & Support", value: 90 },
                  { label: "Practical Learning Material", value: 92 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-[12px] font-bold text-brand-text uppercase tracking-tight">
                      <span>{skill.label}</span>
                      <span className="text-brand-primary">{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-brand-peach rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-full bg-brand-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link to="/about" className="inline-flex items-center gap-3 bg-brand-primary text-white py-2 px-6 lg:py-3 lg:px-8 rounded-xl font-bold text-[10px] lg:text-[11px] shadow-xl shadow-brand-primary/20 hover:bg-brand-primary-light transition-all group overflow-hidden relative">
                  <span className="relative z-10 flex items-center gap-3">
                    About Academy
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats Bar (Perfected Reference Match) */}
          <div className="mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-brand-peach/50 px-1 lg:px-0">
            <div className="flex justify-between items-center w-full">
              {[
                { number: "3k+", label: "Successful Projects" },
                { number: "200+", label: "Expert Team" },
                { number: "350+", label: "Happy Customers" },
                { number: "16+", label: "Years Experience" }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center grow justify-center first:justify-start last:justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="text-[15px] md:text-2xl lg:text-4xl font-display font-bold text-brand-text mb-0.5 whitespace-nowrap">
                      {stat.number}
                    </div>
                    <span className="text-[6px] md:text-[9px] lg:text-[11px] font-medium text-brand-text-muted uppercase tracking-[0.05em] lg:tracking-wider whitespace-nowrap">
                      {stat.label}
                    </span>
                  </motion.div>

                  {/* Custom Separator with Ornament (Scaled for Mobile) */}
                  {idx < 3 && (
                    <div className="flex items-center px-1.5 sm:px-4 md:px-8 xl:px-12">
                      <div className="h-6 md:h-10 w-px bg-brand-text/30 relative flex items-center justify-center">
                        {/* Ornament: Scaled Semicircles and Dot */}
                        <div className="absolute flex items-center justify-center -translate-x-[1.5px]">
                          {/* Semicircles */}
                          <div className="flex -space-x-[3px] md:-space-x-1.5 translate-x-1.5 md:translate-x-2.5">
                            <div className="w-2.5 h-2.5 md:w-5 md:h-5 rounded-r-full bg-brand-primary opacity-20 border-r border-brand-primary/10" />
                            <div className="w-2.5 h-2.5 md:w-5 md:h-5 rounded-r-full bg-brand-primary opacity-30 border-r border-brand-primary/20" />
                          </div>
                          {/* Dot */}
                          <div className="w-1.5 h-1.5 md:w-3 md:h-3 rounded-full bg-brand-primary shadow-[0_0_5px_rgba(211,47,47,0.4)] absolute -left-0.5 md:-left-1.5 z-10" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Teachers Section - Grid Design */}
      <section id="faculty" className="pt-24 pb-12 lg:pb-16 relative overflow-hidden bg-white/50">

        <div className="container mx-auto px-4 relative z-10 max-w-6xl mb-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-3xl md:text-4xl font-display text-[#112F4E] font-medium tracking-tight">Our teachers</h2>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.
              </p>
            </div>
            <Link to="/contact" className="inline-block bg-brand-primary text-white py-2.5 px-7 md:py-3.5 md:px-8 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-xl shadow-brand-primary/20 self-start md:self-auto">
              Become a teacher
            </Link>
          </div>
        </div>

        {/* Contained Carousel - Shows exactly 4 cards on desktop */}
        <div className="container mx-auto px-4 relative z-10 max-w-[1300px] overflow-hidden">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 scroll-smooth no-scrollbar md:[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {[
                {
                  name: 'Priya Sharma',
                  role: 'Senior Spoken Coach',
                  subject: 'Soft Skills',
                  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
                  bio: 'Pioneer of communicative competence, having trained over 5000+ students in soft skills.'
                },
                {
                  name: 'Arjun Mehra',
                  role: 'Grammar & IELTS',
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
                  role: 'Corporate Training',
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
              ].map((faculty, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-full md:min-w-[calc(25%-18px)] snap-center bg-white rounded-2xl md:rounded-[25px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500 group cursor-pointer border-b-6 border-r-3 border-gray-100/50"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Top Half */}
                  <div className="relative h-[221px] md:h-[255px] overflow-hidden">
                    <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-[10px] font-bold text-[#112F4E] shadow-sm z-20">
                      {faculty.subject}
                    </div>
                    <img
                      src={faculty.img}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content Bottom Half */}
                  <div className="p-6 flex flex-col grow bg-white">
                    <h4 className="text-[19px] font-bold text-[#112F4E] mb-2">{faculty.name}</h4>
                    <p className="text-[13px] text-gray-500 mb-6 leading-relaxed font-normal">
                      {faculty.bio}
                    </p>
                    <div className="mt-auto flex items-center gap-2.5">
                      {[Linkedin, Twitter, Instagram].map((Icon, sIdx) => (
                        <div key={sIdx} className="w-7 h-7 rounded-full bg-[#8EABC0]/20 flex items-center justify-center text-[#6A8B9C] hover:bg-[#0A4B92] hover:text-white transition-all cursor-pointer">
                          <Icon size={12} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Centered Scroll Navigation Arrows Below - Balanced Spacing */}
            <div className="flex justify-center items-center gap-6 mt-4 mb-4 relative z-20">
              <button
                onClick={() => scrollBy(-360)}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A4B92] border border-gray-100 hover:scale-110 hover:bg-[#0A4B92] hover:text-white transition-all active:scale-95 focus:outline-none focus:ring-0"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => scrollBy(360)}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#0A4B92] border border-gray-100 hover:scale-110 hover:bg-[#0A4B92] hover:text-white transition-all active:scale-95 focus:outline-none focus:ring-0"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Students Achievements Section - Reference Layout Refined */}
      <section id="achievements" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

            {/* Left Column: Image Collage (Exact Reference Layout) */}
            <div className="relative h-[380px] sm:h-[450px] md:h-[520px] group">
              {/* Image 1: Main Student (Arched Top) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 w-[42%] h-[60%] sm:h-[65%] rounded-t-[80px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                  alt="Student Success"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              {/* Image 2: Group (Circular) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute top-[5%] right-[5%] sm:right-[15%] w-[38%] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
                  alt="Group Discussion"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              {/* Image 3: Classroom (Arched Bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-[35%] w-[45%] h-[55%] rounded-b-[80px] rounded-t-2xl overflow-hidden shadow-xl border-4 border-white z-20"
              >
                <img
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=600&auto=format&fit=crop"
                  alt="Achievement Story"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-[5%] sm:bottom-[10%] left-0 sm:left-[-5%] md:left-[-10%] lg:left-[-15%] bg-brand-primary text-white p-4 sm:p-5 rounded-tr-[30px] rounded-bl-[30px] rounded-tl-lg rounded-br-lg shadow-lg z-30 max-w-[130px] sm:max-w-[150px] text-center"
              >
                <div className="flex justify-center mb-1 sm:mb-2 text-white">
                  <Award size={24} className="sm:size-[28px]" />
                </div>
                <p className="text-[9px] sm:text-[10px] font-bold leading-tight uppercase tracking-wider">{mainAchievement.experience}</p>
              </motion.div>

              {/* Decorative Background Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-brand-primary/5 rounded-full blur-[60px] -z-10" />
            </div>

            {/* Right Column: Refined Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-brand-primary text-lg">💡</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">{mainAchievement.subtitle}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display text-brand-text leading-[1.15] font-medium">
                  {mainAchievement.title.split('Inspires')[0]}
                  <span className="text-brand-primary">Inspires</span>
                  {mainAchievement.title.split('Inspires')[1]}
                </h2>
                <p className="text-[13px] md:text-[14px] text-brand-text-muted leading-relaxed font-light max-w-xl">
                  {mainAchievement.description}
                </p>
              </div>

              {/* Features & Quote Row (Reference Match) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Feature Icons Column */}
                <div className="md:col-span-7 space-y-6">
                  {achievementStats.map((stat, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                        {stat.icon === 'GraduationCap' ? <GraduationCap size={24} /> : <Users size={24} />}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-brand-text uppercase tracking-tight mb-1">{stat.title}</h4>
                        <p className="text-[11px] text-brand-text-muted leading-relaxed">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Block Column */}
                <div className="md:col-span-5 bg-brand-primary/5 p-6 rounded-[30px] relative overflow-hidden border border-brand-primary/10">
                  <p className="text-[11px] text-brand-text-muted leading-relaxed relative z-10 italic">
                    {mainAchievement.quote}
                  </p>
                  <span className="absolute bottom-1 right-3 text-5xl text-brand-primary/20 font-serif leading-none italic select-none">99</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex flex-wrap items-center gap-8 pt-2">
                <Link to="/students-success" className="bg-brand-primary text-white py-2.5 px-7 lg:py-3.5 lg:px-8 rounded-xl text-[10px] lg:text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-brand-primary/20 hover:bg-brand-primary-light transition-all flex items-center gap-2">
                  View Success Stories <ArrowRight size={14} />
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-md">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-brand-text/40 uppercase tracking-widest leading-none mb-1">Call Now</p>
                    <p className="text-[13px] font-bold text-brand-text leading-none">+2 123 654 7898</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Courses Section */}
      <section id="courses" className="pt-24 pb-12 lg:pb-16 relative overflow-hidden">
        <FloatingGrammarBg count={12} />
        <div className="container mx-auto px-4 mb-16 px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-brand-primary font-medium uppercase tracking-[0.2em] text-[10px]">Academic Excellence</span>
              <h2 className="text-3xl md:text-4xl font-display text-brand-text font-medium mt-2">Explore Our <span className="text-brand-primary italic">Top Courses</span></h2>
              <p className="text-sm text-brand-text-muted mt-4 leading-relaxed">
                Unlock your potential with our expertly crafted courses designed to take you from foundational basics to advanced proficiency.
              </p>
            </div>
            <Link to="/courses" className="text-brand-primary font-bold text-sm hover:underline flex items-center gap-2">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-[1300px]">
          <div className="relative">
            <div
              ref={courseScrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scroll-smooth no-scrollbar md:[mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] px-4"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {courses.map((course, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="min-w-full md:min-w-[calc(25%-18px)] snap-center bg-brand-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-[#0A4B92]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 backdrop-blur-sm">
                      <Clock size={10} /> {course.duration}
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 bg-brand-surface rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                      <Heart size={14} />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col grow">
                    <h3 className="text-base font-bold text-brand-text mb-4 lg:min-h-[48px] line-clamp-2 leading-tight group-hover:text-brand-primary transition-colors">{course.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Play size={12} className="text-brand-primary" /> {course.lessons} Lessons
                        </div>
                        <div className="flex items-center gap-1.5">
                          <BarChart2 size={12} className="text-brand-primary" /> {course.level}
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Star size={12} className="text-yellow-400 fill-yellow-400" /> {course.rating} ({course.reviews})
                        </div>
                        <div className="flex items-center gap-1.5">
                          <img src={course.avatar} className="w-4 h-4 rounded-full" alt="" /> {course.instructor}
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-lg font-bold text-brand-primary">{course.price}</span>
                      <Link to="/contact" className="text-[11px] font-bold text-[#0A4B92] hover:underline flex items-center gap-1 group/link">
                        Enroll Now <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Centered Scroll Controls Below - Balanced Spacing */}
            <div className="flex justify-center items-center gap-4 mt-4 mb-10 relative z-20">
              <button
                onClick={() => courseScrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
                className="w-10 h-10 bg-brand-surface rounded-full shadow-md flex items-center justify-center text-brand-primary border border-gray-100 hover:bg-brand-primary hover:text-white transition-all focus:outline-none"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => courseScrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
                className="w-10 h-10 bg-brand-surface rounded-full shadow-md flex items-center justify-center text-brand-primary border border-gray-100 hover:bg-brand-primary hover:text-white transition-all focus:outline-none"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section - Modern Bento Grid */}
      <section className="py-12 lg:py-12 relative overflow-hidden bg-white/30">
        <FloatingGrammarBg count={12} />

        {/* Decorative background blurs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[80px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#70C7C6]/5 rounded-full blur-[100px] translate-x-1/2" />

        <div className="container mx-auto px-4 mb-8 lg:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 rounded-full border border-brand-primary/10">
                <span className="text-[9px] font-bold text-brand-primary uppercase tracking-[0.2em]">The SAI Advantage</span>
              </div>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-display text-brand-text font-bold tracking-tight leading-[1.1]">
                Powerful Features Dedicated <br />
                <span className="text-brand-primary italic">To Your Success</span>
              </h2>
            </div>
            <Link to="/contact" className="lg:flex hidden items-center gap-3 bg-brand-text text-white py-2.5 px-7 lg:py-3 lg:px-7 rounded-xl font-bold text-[10px] lg:text-xs shadow-xl hover:bg-brand-primary transition-all group">
              Book Free Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-5 auto-rows-[minmax(100px,_auto)]">

            {/* Bento Card 1: Trained Faculty (Large Featured) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 lg:col-span-7 lg:row-span-2 bg-[#F1E9A3]/90 backdrop-blur-md rounded-[28px] lg:rounded-[32px] p-5 lg:p-6 flex flex-col justify-between border border-white/50 shadow-xl shadow-gray-200/40 group relative overflow-hidden"
            >
              <div className="space-y-2 lg:space-y-3 relative z-10">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-primary shadow-md ring-4 ring-[#FEFAE0]">
                  <GraduationCap size={22} className="lg:size-[24px]" />
                </div>
                <h3 className="text-xl lg:text-xl font-bold text-brand-text leading-tight font-display">Trained Faculty</h3>
                <p className="text-[11px] lg:text-[12px] text-brand-text-muted leading-relaxed max-w-sm font-light">
                  Expert grammar coaches and spoken trainers guide you through every nuance with personalized methodologies.
                </p>
              </div>
              <div className="pt-4 lg:pt-4 relative z-10">
                <div className="flex -space-x-2.5 mb-2 lg:mb-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" />
                    </div>
                  ))}
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-full border-2 border-white bg-brand-primary flex items-center justify-center text-white text-[8px] lg:text-[9px] font-bold">
                    +15
                  </div>
                </div>
                <p className="text-[8px] lg:text-[9px] uppercase tracking-widest font-bold text-brand-primary">10+ Years Excellence</p>
              </div>
              <div className="absolute -bottom-16 -right-16 w-48 lg:w-48 h-48 lg:h-48 bg-white/30 rounded-full blur-3xl group-hover:bg-white/50 transition-colors" />
            </motion.div>

            {/* Bento Card 2: Live Classes (Tall Featured) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-2 lg:col-span-5 lg:row-span-3 bg-[#C5E2CD]/90 backdrop-blur-md rounded-[28px] lg:rounded-[32px] p-5 lg:p-6 flex flex-col border border-white/50 shadow-xl shadow-gray-200/40 group relative overflow-hidden"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-surface rounded-xl flex items-center justify-center text-green-600 shadow-md ring-4 ring-[#EAF6ED] mb-4 lg:mb-4">
                <PlayCircle size={22} className="lg:size-[24px]" />
              </div>
              <div className="space-y-3 lg:space-y-3 mb-6 lg:mb-6">
                <h3 className="text-xl lg:text-xl font-bold text-brand-text leading-tight font-display">Live Interactive <br className="hidden lg:block" />Classes</h3>
                <p className="text-[11px] lg:text-[12px] text-brand-text-muted leading-relaxed italic font-light">
                  "Interaction with trainers and instant feedback for rapid progress."
                </p>
              </div>

              <div className="mt-auto space-y-2 lg:mb-2">
                <div className="h-1 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-green-500"
                  />
                </div>
                <div className="flex justify-between text-[8px] lg:text-[9px] font-bold text-green-700 uppercase tracking-tight">
                  <span>Capacity</span>
                  <span>Limited Seats</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-500/10 pointer-events-none" />
            </motion.div>

            {/* Bento Card 3: Revision Support (Wide) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-1 lg:col-span-4 lg:row-span-2 bg-[#C7DBE0]/90 backdrop-blur-md rounded-[28px] lg:rounded-[32px] p-4 lg:p-5 border border-white/50 shadow-lg shadow-gray-200/40 flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-2 lg:mb-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-surface rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
                  <BookOpen size={16} className="lg:size-[18px]" />
                </div>
                <div className="px-1.5 py-0.5 bg-white/50 rounded-full text-[7px] lg:text-[8px] font-bold text-blue-700 uppercase tracking-wider">Weekly</div>
              </div>
              <h4 className="text-[15px] lg:text-lg font-bold text-brand-text mb-1 font-display">Revision Support</h4>
              <p className="text-[10px] lg:text-[11px] text-brand-text-muted leading-tight lg:leading-snug line-clamp-2 font-light italic">
                Portal-based revision sessions and premium materials.
              </p>
            </motion.div>

            {/* Bento Card 4: Certificates (Squareish) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 lg:col-span-3 lg:row-span-2 bg-[#FBD1B5]/90 backdrop-blur-md rounded-[28px] lg:rounded-[32px] p-4 lg:p-5 border border-white/50 shadow-lg shadow-gray-200/40 flex flex-col items-center text-center justify-center space-y-2 lg:space-y-3 group"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-surface rounded-full flex items-center justify-center text-orange-500 shadow-md group-hover:scale-110 transition-transform duration-500">
                <Award size={22} className="lg:size-[24px]" />
              </div>
              <div>
                <h4 className="text-[15px] lg:text-[16px] font-bold text-brand-text font-display leading-tight">Certification</h4>
                <p className="text-[9px] lg:text-[10px] text-brand-text-muted leading-tight mt-1 lg:mt-1 font-light">Global recognized certificates.</p>
              </div>
            </motion.div>

            {/* Bento Card 5: Franchise Option (Narrow Wide) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-1 lg:col-span-4 lg:row-span-1 bg-[#DFCDE2]/90 backdrop-blur-md rounded-[20px] lg:rounded-[24px] px-4 lg:px-5 py-3 lg:py-3 border border-white/50 shadow-lg shadow-gray-200/40 flex items-center gap-3 lg:gap-3 group"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 bg-brand-surface rounded-lg flex items-center justify-center text-purple-600 shadow-sm">
                <Store size={16} className="lg:size-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] lg:text-[13px] font-bold text-brand-text font-display">Franchise</h4>
                <p className="text-[9px] lg:text-[9px] text-brand-text-muted line-clamp-1 font-light">Join our growing network.</p>
              </div>
            </motion.div>

            {/* Bento Card 6: Special Batches (Narrow Wide) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-1 lg:col-span-4 lg:row-span-1 bg-[#F1E4A3]/90 backdrop-blur-md rounded-[20px] lg:rounded-[24px] px-4 lg:px-5 py-3 lg:py-3 border border-white/50 shadow-lg shadow-gray-200/40 flex items-center gap-3 lg:gap-3 group"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 bg-brand-surface rounded-lg flex items-center justify-center text-yellow-600 shadow-sm">
                <Users size={16} className="lg:size-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] lg:text-[13px] font-bold text-brand-text font-display">Batches</h4>
                <p className="text-[9px] lg:text-[9px] text-brand-text-muted line-clamp-1 font-light">Homemakers & Students.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Franchise Callout - Refined with Physics-Accurate Broken Box */}
      <section id="franchise" ref={franchiseRef} className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-0 max-w-[95%] mx-auto" style={{ perspective: '2000px' }}>

            {/* Physics-Accurate Crack Glow Layers (Desktop Only) */}
            <motion.div
              style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 0.4]) }}
              className="hidden lg:block absolute left-[60%] top-0 bottom-0 w-32 -translate-x-1/2 z-0 pointer-events-none"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#FFA000]/20 blur-[80px] animate-pulse" />
              {/* Mid Glow */}
              <div className="absolute inset-0 bg-[#ffcf54]/40 blur-[40px] animate-crack-glow" />
            </motion.div>

            {/* Left Shard - The "Bending" Piece */}
            <motion.div
              style={{
                x: shardXLeft,
                rotateZ: shardRotateLeft,
                y: shardYLeft,
                transformOrigin: 'left center'
              }}
              className="bg-[#F1E6CB] border-b-[6px] lg:border-l-[12px] lg:border-b-[12px] border-[#D9CDB0] rounded-[30px] lg:rounded-l-[60px] lg:rounded-r-none p-8 lg:p-14 text-brand-text w-full lg:w-[60%] relative overflow-hidden group shadow-2xl z-10 lg:[clip-path:polygon(0%_0%,_94%_0%,_90%_10%,_97%_22%,_86%_35%,_95%_48%,_84%_62%,_93%_76%,_85%_88%,_94%_100%,_0%_100%)]"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

              <div className="max-w-xl space-y-6 relative z-10 text-center lg:text-left pr-0 md:pr-12">
                <div className="inline-block px-4 py-1 bg-brand-primary/10 rounded-full text-brand-primary font-medium text-[10px] uppercase tracking-widest">
                  Academic Partnership
                </div>
                <h2 className="text-2xl md:text-3xl font-display leading-[1.3] text-brand-text font-medium">
                  Interested in opening a branch? <br />
                  <span className="text-brand-primary italic underline decoration-brand-accent/30 decoration-wavy underline-offset-8">Start your own Franchise!</span>
                </h2>
                <p className="text-base text-brand-text-muted leading-relaxed font-normal italic">
                  Be a part of our success story. We provide complete professional training, study material, and regional support.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                  <Link to="/franchise" className="btn-primary py-2.5 px-7 lg:py-3.5 lg:px-8 text-xs lg:text-sm font-bold shadow-xl shadow-brand-primary/20 border-b-4 border-r-4 border-brand-primary/40 active:translate-y-1 active:border-b-0 transition-all">
                    Get Franchise Details
                  </Link>
                  <Link to="/contact" className="bg-white text-brand-primary border-2 border-brand-peach py-2.5 px-7 lg:py-3.5 lg:px-8 rounded-full text-xs lg:text-sm font-bold hover:bg-brand-primary hover:text-white border-b-4 border-r-4 border-brand-peach active:translate-y-1 active:border-b-0 transition-all">
                    Contact Now
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Shard - The House Icon Piece */}
            <motion.div
              style={{
                x: shardXRight,
                rotateZ: shardRotateRight,
                y: shardYRight,
                transformOrigin: 'right center'
              }}
              className="hidden lg:flex bg-[#F1E6CB] border-r-[12px] border-b-[12px] border-[#D9CDB0] rounded-r-[60px] p-8 lg:p-14 text-brand-text w-[40%] flex-col items-center justify-center relative overflow-hidden group shadow-2xl z-10 lg:[clip-path:polygon(6%_1%,_100%_0%,_100%_100%,_6%_100%,_15%_88%,_7%_76%,_16%_62%,_5%_48%,_14%_35%,_3%_22%,_10%_10%)]"
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

              <div className="w-full max-w-[280px] aspect-square bg-[#fffefc] rounded-[40px] border-b-[10px] border-r-[10px] border-[#D9CDB0] p-6 rotate-3 group-hover:rotate-0 transition-all duration-700 shadow-xl items-center justify-center flex pl-6 relative z-10">
                <div className="w-full h-full border-4 border-dashed border-[#e6dbc0] rounded-[30px] flex items-center justify-center bg-[#F1E6CB]/20">
                  <Store size={80} className="text-brand-primary opacity-90 drop-shadow-md" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Join Call to Action Section */}
      <section className="pt-12 pb-6 md:py-24 relative overflow-hidden">
        <FloatingGrammarBg count={14} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-display text-brand-text font-medium italic underline underline-offset-8 decoration-brand-accent/20">Ready to transform your life?</h2>
          <p className="text-lg text-brand-text-muted max-w-xl mx-auto font-normal italic">
            "Stop letting the language barrier hold you back. Join us today and start your journey towards fluent English excellence."
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link to="/contact" className="btn-primary py-3 px-8 md:py-4 md:px-10 text-sm md:text-base flex items-center gap-3 font-bold border-b-4 border-r-4 border-brand-primary/40 active:translate-y-1 active:border-b-0 transition-all">
              Enroll Today <CircleCheck size={20} />
            </Link>
            <a href="https://wa.me/+9198XXXXXXXX" target="_blank" className="flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 rounded-full bg-green-500 text-white font-bold text-sm md:text-base hover:scale-105 border-b-4 border-r-4 border-green-700/50 shadow-lg active:translate-y-1 active:border-b-0 transition-all">
              <MessageSquare size={20} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
