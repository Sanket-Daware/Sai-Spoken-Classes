import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, X, Clock, User, Share2 } from 'lucide-react'

// Mock Data
const featuredNews = {
  id: 'main-1',
  category: 'OPINION',
  title: 'When you tell them the truth about English fluency',
  excerpt: 'Mastering a language is not just about words; it is about the courage to speak them without fear of judgment. Here is how we redefine fluency at Sai Spoken classes.',
  date: 'January 8, 2025',
  author: 'Prof. Patil',
  img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop'
}

const leftColumnNews = [
  { id: 'left-1', category: 'STORIES', title: 'How Sai Spoken Classes transforms career paths', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470' },
  { id: 'left-2', category: 'TIPS', title: 'Why public speaking is a superpower in 2025', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1470' }
]

const latestNews = [
  { id: 'late-1', title: 'Why your 2024 vocabulary is outdated', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop' },
  { id: 'late-2', title: 'The psychology of public speaking revealed', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470&auto=format&fit=crop' },
  { id: 'late-3', title: 'How to learn 50 words in one weekend', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1470&auto=format&fit=crop' },
  { id: 'late-4', title: 'Understanding the Southern accent nuances', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470' },
  { id: 'late-5', title: 'The finest English theme for writers', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1481627210207-84a1239aa869?q=80&w=1374&auto=format&fit=crop' }
]

const successStories = [
  { id: 'success-1', category: 'SUCCESS', title: 'Rohan\'s journey to a global tech role', excerpt: 'From hesitating at simple sentences to leading international meetings.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1470' },
  { id: 'success-2', category: 'SUCCESS', title: 'A homemaker’s rise to influence', excerpt: 'How language opened doors for social leadership in the community.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376' },
  { id: 'success-3', category: 'SUCCESS', title: 'Cracking the interview at age 45', excerpt: 'Never too late to master the key to modern communication.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374' },
  { id: 'success-4', category: 'SUCCESS', title: 'The confidence to travel solo', excerpt: 'Linguistic barriers are no longer an excuse for Priya.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1631' },
  { id: 'success-5', category: 'SUCCESS', title: 'Scholarship story in the USA', excerpt: 'A rural student’s dream backed by English proficiency.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470' }
]

const languageCulture = [
  { id: 'lang-1', category: 'CULTURE', title: 'English accents of the world', excerpt: 'Decoding the melody of spoken English from London to Sydney.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1374' },
  { id: 'lang-2', category: 'CULTURE', title: 'Etiquette in European business', excerpt: 'Small nuances that change the outcome of big deals.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1374' },
  { id: 'lang-3', category: 'CULTURE', title: 'The history of "Hinglish"', excerpt: 'How India made English its very own vibrant dialect.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1470' },
  { id: 'lang-4', category: 'CULTURE', title: 'Food vocabulary: A global tour', excerpt: 'Ordering like a local in 5 different English capitals.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470' },
  { id: 'lang-5', category: 'CULTURE', title: 'Social media slang decoded', excerpt: 'Why 2024 is the year of linguistic abbreviations.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374' }
]

const facultyInsights = {
  main: { id: 'fi-1', category: 'FACULTY', title: 'The pedagogy of Sai Spoken classes', excerpt: 'Our teachers don\'t just correct grammar; they build the character required to speak a second language with conviction and pride. Exploring the deep roots of our teaching philosophy.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470' },
  sidebar: [
    { id: 'fi-2', category: 'INSIGHT', title: 'How we select our trainers', excerpt: 'Quality assurance at the heart of our mission.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1470' },
    { id: 'fi-3', category: 'PEDAGOGY', title: 'Empowering students through roleplay', excerpt: 'Active learning strategies for real-world fluency.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1632' },
    { id: 'fi-4', category: 'TRAINERS', title: 'Helping to Protect Training Quality', excerpt: 'Ensuring every class meets our rigorous standards.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470' },
    { id: 'fi-5', category: 'INSIGHT', title: 'The Future of Linguistic Education', excerpt: 'How AI and human empathy work together in 2025.', date: 'January 8, 2025', img: 'https://images.unsplash.com/photo-1481627210207-84a1239aa869?q=80&w=1374' }
  ]
}

const CategoryHeader = ({ title, onLeft, onRight }) => (
  <div className="flex justify-between items-center mb-10 border-b border-gray-400 pb-4">
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-black uppercase tracking-widest text-black">{title}</h2>
      <div className="w-12 h-1 bg-black" />
    </div>
    <div className="flex items-center gap-6">
      {(onLeft || onRight) && (
        <div className="flex gap-2">
          <button
            onClick={onLeft}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onRight}
            className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      <a href="#" className="flex items-center gap-1 text-[11px] font-bold text-blue-500 hover:underline uppercase tracking-widest">
        View all <ArrowRight size={14} />
      </a>
    </div>
  </div>
)

const BreakingNewsTicker = ({ items }) => (
  <div className="bg-black text-white overflow-hidden py-3 flex items-center border-y border-white selection:bg-red-500">
    <div className="bg-red-600 px-6 py-1 font-black text-[10px] tracking-[0.3em] uppercase animate-pulse shrink-0 ml-4 mr-10 rounded-sm">
      Live / Breaking
    </div>
    <div className="relative flex overflow-hidden w-full h-5">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 whitespace-nowrap"
      >
        {items.concat(items).map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="flex items-center gap-10">
            <span className="text-[11px] font-bold uppercase tracking-widest">{item.title}</span>
            <span className="w-2 h-2 bg-red-600 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
)

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all"
        >
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col">
          {/* Header Image */}
          <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
            <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
          </div>

          <div className="px-6 md:px-20 py-10 -mt-20 relative bg-white">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.4em] mb-4 block">{blog.category}</span>
              <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-[1.1] mb-8">{blog.title}</h2>

              <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-100 mb-10 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-blue-500" />
                  <span>By {blog.author || 'Staff Writer'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-500" />
                  <span>{blog.date}</span>
                </div>
                <div className="ml-auto flex items-center gap-4">
                  <button className="hover:text-blue-500 flex items-center gap-1"><Share2 size={14} /> Share</button>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="text-xl font-medium italic text-gray-800 leading-relaxed border-l-4 border-black pl-6 py-2">
                  {blog.excerpt || 'Empowering communication through language excellence and cultural understanding.'}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                </p>
                <h3 className="text-2xl font-black text-black uppercase mt-12 mb-4">The Importance of Fluency</h3>
                <p>
                  Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi.
                </p>
                <ul className="list-disc pl-6 space-y-3 font-medium text-black">
                  <li>Understanding Context and Nuance</li>
                  <li>Overcoming Fear of Judgement</li>
                  <li>Building Vocabulary through Immersion</li>
                  <li>Active Listening Strategies</li>
                </ul>
                <p>
                  Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                </p>
              </div>

              {/* Related news or footer in modal */}
              <div className="mt-20 pt-10 border-t border-gray-400">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6">Continue Reading</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group cursor-pointer">
                    <div className="aspect-video bg-gray-100 mb-4 overflow-hidden border border-gray-400">
                      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1470" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h5 className="font-bold text-black uppercase text-sm group-hover:underline">Understanding the Global Impact of English</h5>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="aspect-video bg-gray-100 mb-4 overflow-hidden border border-gray-400">
                      <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1470" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <h5 className="font-bold text-black uppercase text-sm group-hover:underline">The Future of Language Education</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function BlogsNews() {
  const successRef = useRef(null)
  const cultureRef = useRef(null)
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedBlog])

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current
      const scrollToArr = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      ref.current.scrollTo({ left: scrollToArr, behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-white text-black font-sans pb-24">
      {/* Newspaper Header Section */}
      <div className="mb-10 text-center space-y-8">
        <div className="max-w-[90%] mx-auto pt-6 border-t-2 border-black">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase selection:bg-blue-500 italic">
            News & Blogs
          </h1>
          <div className="w-full h-1 bg-black mt-4" />
          <div className="flex justify-around items-center py-2 px-1 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 border-b-4 border-double border-gray-200">
            <span>Empowering Communication</span>
            <span className="hidden md:block italic">Redefining English Fluency</span>
            <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <BreakingNewsTicker items={latestNews} />
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
        )}
      </AnimatePresence>

      <div className="w-[80%] mx-auto">
        {/* Top Hero Grid Section */}
        <section className="py-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">

            {/* Left Column - Side News */}
            <div className="lg:col-span-1 space-y-12 lg:border-r border-gray-400 lg:pr-4 lg:max-h-[90vh] lg:overflow-y-auto lg:no-scrollbar">
              {leftColumnNews.map((news) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer pb-6 border-b border-gray-300 last:border-0"
                  onClick={() => setSelectedBlog(news)}
                >
                  <div className="aspect-[4/3] mb-4 overflow-hidden border border-gray-400">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{news.category}</span>
                  <h3 className="text-lg font-bold leading-tight mt-1 group-hover:underline underline-offset-4 text-black uppercase tracking-tight">{news.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-2 font-medium">{news.date}</p>
                </motion.div>
              ))}
            </div>

            {/* Center Column - Main Feature */}
            <div className="lg:col-span-2 px-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedBlog(featuredNews)}
              >
                <div className="aspect-video mb-8 overflow-hidden border border-gray-400 shadow-sm">
                  <img src={featuredNews.img} alt={featuredNews.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                </div>
                <div className="text-center space-y-5 max-w-2xl mx-auto">
                  <span className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.4em]">{featuredNews.category}</span>
                  <h2 className="text-2xl md:text-4xl font-black leading-[1.1] text-black uppercase tracking-tight">{featuredNews.title}</h2>
                  <div className="w-24 h-0.5 bg-gray-200 mx-auto my-6" />
                  <p className="text-gray-600 text-[16px] leading-relaxed line-clamp-3 md:px-10 italic">
                    {featuredNews.excerpt}
                  </p>
                  <div className="pt-6 flex items-center justify-center gap-4 text-[11px] font-bold text-gray-400">
                    <span>{featuredNews.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="text-blue-500 uppercase">By {featuredNews.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Latest Sidebar */}
            <div className="lg:col-span-1 lg:border-l border-gray-400 lg:pl-10 lg:max-h-[80vh] lg:overflow-y-auto lg:no-scrollbar">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-black pb-2 mb-8">LATEST UPDATES</h4>
              <div className="space-y-8">
                {latestNews.map((news) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group cursor-pointer items-start pb-6 border-b border-gray-300 last:border-0"
                    onClick={() => setSelectedBlog(news)}
                  >
                    <div className="flex-1 space-y-1">
                      <h5 className="text-[13px] font-bold leading-snug group-hover:text-blue-500 transition-colors text-black uppercase tracking-tight">{news.title}</h5>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{news.date}</p>
                    </div>
                    <div className="w-20 h-20 shrink-0 overflow-hidden bg-gray-100 border border-gray-400 shadow-sm">
                      <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Student Success Stories Slider */}
        <section className="py-12">
          <CategoryHeader
            title="Student Success Stories"
            onLeft={() => scroll(successRef, 'left')}
            onRight={() => scroll(successRef, 'right')}
          />

          <div
            ref={successRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-10 pb-4"
          >
            {successStories.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[calc(50%-20px)] lg:min-w-[calc(25%-30px)] snap-start group cursor-pointer"
                onClick={() => setSelectedBlog(item)}
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden border border-gray-400 shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-blue-500 transition-colors uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="text-[11px] text-gray-400 font-bold mb-3 uppercase">{item.date}</p>

                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Language & Culture Slider */}
        <section className="py-12">
          <CategoryHeader
            title="Language & Culture"
            onLeft={() => scroll(cultureRef, 'left')}
            onRight={() => scroll(cultureRef, 'right')}
          />

          <div
            ref={cultureRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-10 pb-4"
          >
            {languageCulture.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-[calc(50%-20px)] lg:min-w-[calc(25%-30px)] snap-start group cursor-pointer"
                onClick={() => setSelectedBlog(item)}
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden border border-gray-400 shadow-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-blue-500 transition-colors uppercase tracking-tight text-black">{item.title}</h3>
                  <p className="text-[11px] text-gray-400 font-bold mb-3 uppercase">{item.date}</p>

                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3 italic">
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Faculty Insights [Mixed Grid Style - Fixed 50/50 Split] */}
        <section className="py-12">
          <CategoryHeader title="Faculty Insights" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Main Large Card (Left 50%) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedBlog(facultyInsights.main)}
            >
              <div className="aspect-[4/3] mb-6 overflow-hidden border border-gray-400">
                <img src={facultyInsights.main.img} alt={facultyInsights.main.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em]">{facultyInsights.main.category}</span>
                <h3 className="text-3xl font-black text-black uppercase tracking-tight group-hover:text-blue-500 transition-colors leading-tight">{facultyInsights.main.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 mt-4">
                  {facultyInsights.main.excerpt}
                </p>
                <p className="text-[11px] text-gray-400 font-bold mt-4 uppercase">{facultyInsights.main.date}</p>
              </div>
            </motion.div>

            {/* Right Grid (Right 50% - 2x2 Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {facultyInsights.sidebar.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedBlog(item)}
                >
                  <div className="aspect-[4/3] mb-4 overflow-hidden border border-gray-400">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-[15px] font-black text-black uppercase tracking-tight group-hover:text-blue-500 transition-colors leading-tight line-clamp-2">{item.title}</h4>
                    <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 mt-2">
                      {item.excerpt}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold mt-2 uppercase">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
