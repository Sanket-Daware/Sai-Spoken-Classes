import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  ChevronLeft, 
  Search, 
  ArrowRight,
  Clock,
  BookOpen
} from 'lucide-react'
import CourseDetailModal from '../components/modals/CourseDetailModal'

// Course Categories Data
const courseSections = [
  // ... existing courseSections data ...
  {
    category: "Foundation Programs",
    banner: {
      title: "Explore a world full of Opportunities",
      subtitle: "The journey of a thousand miles begins with a single word.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop",
      cta: "Start your journey"
    },
    courses: [
      { id: 1, name: "Basic Spoken English", location: "Mumbai Campus", duration: "3 Months", desc: "Build a strong foundation in grammar and daily conversation.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=70&w=600&auto=format&fit=crop" },
      { id: 2, name: "Grammar Foundation", location: "Delhi Center", duration: "2 Months", desc: "Master the building blocks of perfect English structure.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
      { id: 3, name: "Beginner Fluency", location: "Online", duration: "3 Months", desc: "Overcome the fear of speaking and start your journey.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
      { id: 4, name: "Daily Connect", location: "Pune Center", duration: "1 Month", desc: "Focused daily usage sentences for family and friends.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" },
      { id: 5, name: "Kids Spoken Junior", location: "All Centers", duration: "6 Months", desc: "Fun way for children to start their English education.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" },
      { id: 6, name: "English for Homemakers", location: "Hybrid", duration: "3 Months", desc: "Empowering you to stay connected with modern world.", img: "https://images.unsplash.com/photo-1521791136064-7986c29596ad?q=80&w=600&auto=format&fit=crop" },
      { id: 7, name: "Sentence Builder", location: "Online", duration: "2 Months", desc: "Learn to construct complex sentences with ease.", img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=600&auto=format&fit=crop" },
      { id: 8, name: "Basic Vocab Pods", location: "Digital", duration: "1 Month", desc: "Expand your word bank with essential 1000 words.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=70&w=600&auto=format&fit=crop" },
      { id: 9, name: "Social English 101", location: "Nagpur Center", duration: "2 Months", desc: "Be confident in social gatherings and parties.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop" },
      { id: 10, name: "Quick Start Kit", location: "Crash Course", duration: "15 Days", desc: "Fast-track your learning for immediate needs.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    category: "Professional Mastery",
    banner: {
      title: "Ready to conquer the Professional world?",
      subtitle: "Master the language of business and leadership.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
      cta: "View Career Guides"
    },
    courses: [
      { id: 11, name: "Corporate Communication", location: "Tech Park Center", duration: "3 Months", desc: "Master emails, meetings, and global calls.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
      { id: 12, name: "Interview Prep Pro", location: "Placement Cell", duration: "1 Month", desc: "Crack your dream job with mock sessions.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" },
      { id: 13, name: "Public Speaking", location: "Auditiorium", duration: "2 Months", desc: "Remove stage fear and captivate audiences.", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop" },
      { id: 14, name: "Business Writing", location: "Online", duration: "1 Month", desc: "Write professional reports and proposals.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop" },
      { id: 15, name: "Leadership Vocab", location: "Workshop", duration: "2 Months", desc: "The language of executives and influencers.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" },
      { id: 16, name: "Sales Mastery", location: "Field Center", duration: "3 Months", desc: "Pitch and close deals in fluent English.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop" },
      { id: 17, name: "Soft Skills Training", location: "Global City", duration: "2 Months", desc: "Etiquette and behavior for the modern office.", img: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=600&auto=format&fit=crop" },
      { id: 18, name: "Presentation Pro", location: "Online Live", duration: "1 Month", desc: "Design and deliver winning presentations.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop" },
      { id: 19, name: "Email Etiquette", location: "Digital", duration: "15 Days", desc: "Master the art of professional emailing.", img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=600&auto=format&fit=crop" },
      { id: 20, name: "Career Accelerator", location: "Hybrid", duration: "6 Months", desc: "Comprehensive transformation for working adults.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    category: "Advanced Linguistics",
    banner: {
      title: "Unleash your Creative Potential",
      subtitle: "Go beyond fluency and master the art of storytelling.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
      cta: "Explore Literature"
    },
    courses: [
      { id: 21, name: "Advanced Spoken English", location: "Premium Lounge", duration: "3 Months", desc: "Nuances, idioms, and high-level discussions.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
      { id: 22, name: "Creative Writing", location: "Library Hub", duration: "4 Months", desc: "Learn to write stories, blogs, and poetry.", img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=600&auto=format&fit=crop" },
      { id: 23, name: "Voice & Accent", location: "Media Lab", duration: "2 Months", desc: "Neutralize your accent for global speaking.", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop" },
      { id: 24, name: "Vocabulary Mastery", location: "Online", duration: "2 Months", desc: "Sophisticated word choices for every context.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
      { id: 25, name: "Effective Debating", location: "Town Hall", duration: "3 Months", desc: "Win arguments with logic and rhetoric.", img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=70&w=600&auto=format&fit=crop" },
      { id: 26, name: "Phonetics Hub", location: "Audio Center", duration: "1 Month", desc: "The science of sound and perfect pronunciation.", img: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop" },
      { id: 27, name: "Idiom & Slang Pro", location: "Youth Box", duration: "2 Months", desc: "Speak like a native in informal settings.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop" },
      { id: 28, name: "Blogger English", location: "Virtual", duration: "2 Months", desc: "Specific writing skills for internet age.", img: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=600&auto=format&fit=crop" },
      { id: 29, name: "Theatre & Drama", location: "Studio", duration: "4 Months", desc: "Expressive English through performance.", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=70&w=600&auto=format&fit=crop" },
      { id: 30, name: "Literature Review", location: "Reading Room", duration: "3 Months", desc: "Deep dive into great English philosophers.", img: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=600&auto=format&fit=crop" },
    ]
  },
  {
    category: "Academic Excellence",
    banner: {
      title: "Unlock your future Abroad",
      subtitle: "Preparing students for global education and high bands.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop",
      cta: "Book Free Consultation"
    },
    courses: [
      { id: 31, name: "IELTS Mastery", location: "Exam Hub", duration: "3 Months", desc: "Achieve band 8+ with focused test strategy.", img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop" },
      { id: 32, name: "TOEFL Prep", location: "Digital Lab", duration: "3 Months", desc: "Comprehensive training for US universities.", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop" },
      { id: 33, name: "PTE Academic", location: "Cloud Campus", duration: "2 Months", desc: "Fast-track your visa with Pearson tests.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop" },
      { id: 34, name: "Study Abroad 101", location: "Counseling Dept", duration: "1 Month", desc: "Profile building and university selection.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" },
      { id: 35, name: "Comp Exam Grammar", location: "Center Hub", duration: "4 Months", desc: "Tenses, articles and errors for SSC/Banking.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop" },
      { id: 36, name: "GRE Verbal", location: "Elite Center", duration: "3 Months", desc: "Master hard vocabulary and reading skills.", img: "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=600&auto=format&fit=crop" },
      { id: 37, name: "SAT Preparation", location: "Online Live", duration: "3 Months", desc: "Foundational English for undergraduate studies.", img: "https://images.unsplash.com/photo-1516321497487-e288fb19313f?q=80&w=600&auto=format&fit=crop" },
      { id: 38, name: "Business IELTS", location: "Corporate Hub", duration: "2 Months", desc: "IELTS for immigration and work visas.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
      { id: 39, name: "Academic Writing", location: "Writing Hub", duration: "2 Months", desc: "Essay writing and research report skills.", img: "https://images.unsplash.com/photo-1455391704245-027a732029d5?q=80&w=600&auto=format&fit=crop" },
      { id: 40, name: "Interview Success", location: "Placement", duration: "15 Days", desc: "Visa interview mock sessions and tips.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" },
    ]
  }
];

export default function Courses({ onOpenJoinModal }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="bg-white min-h-screen pt-16 lg:pt-0">
      {courseSections.map((section, idx) => (
        <CourseGroup 
          key={idx} 
          section={section} 
          onOpenJoinModal={onOpenJoinModal} 
          onViewDetails={(course) => setSelectedCourse(course)}
        />
      ))}

      <CourseDetailModal 
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
        onEnroll={onOpenJoinModal}
      />
    </div>
  )
}

function CourseGroup({ section, onOpenJoinModal, onViewDetails }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="space-y-0">
      {/* Immersive Banner Section - Reduced Size */}
      <section className="relative h-[280px] lg:h-[420px] overflow-hidden group">
        <img 
          src={section.banner.image} 
          alt={section.banner.title}
          className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-display font-medium text-white leading-[1.1]">
              {section.banner.title}
            </h1>
            <p className="text-base md:text-lg text-white/90 font-light max-w-xl mx-auto italic">
              {section.banner.subtitle}
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-md shadow-2xl hover:bg-black hover:text-white transition-all">
              <Search size={16} />
              {section.banner.cta}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Slider Section - Reduced Card Sizes */}
      <section className="py-10 md:py-16 bg-white container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl font-display font-medium text-slate-900">{section.category}</h2>
            <div className="w-8 h-1 bg-slate-900" />
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8"
        >
          {section.courses.map((course) => (
            <div 
              key={course.id} 
              className="flex-shrink-0 w-[165px] md:w-[240px] lg:w-[calc((100%-64px)/5)] group snap-start"
            >
              <div className="space-y-3">
                <div 
                  onClick={() => onViewDetails(course)}
                  className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-md cursor-pointer"
                >
                  <img 
                    src={course.img} 
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[8px] uppercase font-bold tracking-widest border border-white/30">
                      View Details
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <h3 
                    onClick={() => onViewDetails(course)}
                    className="text-[14px] md:text-xl font-display font-medium text-slate-900 leading-tight group-hover:text-[#803FF6] transition-colors line-clamp-1 cursor-pointer"
                  >
                    {course.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-500 font-light leading-relaxed line-clamp-2 italic">
                    {course.desc}
                  </p>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
                      <Clock size={10} /> {course.duration}
                    </div>
                  </div>
                  <button onClick={onOpenJoinModal} className="pt-1 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-900 group-hover:gap-3 transition-all">
                    Enroll <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
