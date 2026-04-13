import { motion } from 'framer-motion'
import { GraduationCap, Users, Award, Star, CheckCircle } from 'lucide-react'
import { mainAchievement, achievementStats, achievementImages } from '../data/achievementsData'
import { Link } from 'react-router-dom'

export default function Achievements() {
  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-[#70C7C6]/10 rounded-full mb-6"
          >
            <span className="text-lg">💡</span>
            <span className="text-[10px] font-bold text-[#70C7C6] uppercase tracking-widest">{mainAchievement.subtitle}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display text-brand-text mb-8 leading-[1.15]"
          >
            {mainAchievement.title.split('Inspires')[0]}
            <span className="text-[#70C7C6]">Inspires</span>
            {mainAchievement.title.split('Inspires')[1]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-lg text-brand-text-muted leading-relaxed max-w-2xl mx-auto font-light"
          >
            {mainAchievement.description}
          </motion.p>
        </div>

        {/* Detailed Collage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto mb-32">
          {/* Left Collage (Mirrors Home section) */}
          <div className="relative h-[400px] sm:h-[480px] md:h-[550px]">
            {/* Arched Top Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-[42%] h-[70%] rounded-t-[80px] rounded-b-2xl overflow-hidden shadow-xl border-4 border-white z-20"
            >
              <img src={achievementImages[0].url} alt={achievementImages[0].alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Circle Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-[5%] right-[5%] sm:right-[15%] w-[40%] aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white z-10"
            >
              <img src={achievementImages[1].url} alt={achievementImages[1].alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Arched Bottom Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 left-[35%] w-[45%] h-[60%] rounded-b-[80px] rounded-t-2xl overflow-hidden shadow-xl border-4 border-white z-20"
            >
              <img src={achievementImages[2].url} alt={achievementImages[2].alt} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>

            {/* Experience Badge (Teal) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-[5%] sm:bottom-[10%] left-[-5%] sm:left-[-10%] md:left-[-15%] bg-[#70C7C6] text-white p-4 sm:p-5 rounded-tr-[30px] rounded-bl-[30px] rounded-tl-lg rounded-br-lg shadow-lg z-30 max-w-[130px] sm:max-w-[150px] text-center"
            >
              <div className="flex justify-center mb-1 sm:mb-2 text-white">
                <Award size={24} className="sm:size-[28px]" />
              </div>
              <p className="text-[9px] sm:text-[10px] font-bold leading-tight uppercase tracking-wider">{mainAchievement.experience}</p>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-[#70C7C6]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-text/40">{mainAchievement.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display text-brand-text leading-[1.15] font-medium">
                Our Achievement <br />
                <span className="text-[#70C7C6]">Speaks Volumes</span>
              </h2>
              <p className="text-[14px] text-brand-text-muted leading-relaxed font-light italic border-l-2 border-[#70C7C6]/20 pl-4 py-1">
                "{mainAchievement.quote}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievementStats.map((stat, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#70C7C6]/10 flex items-center justify-center text-[#70C7C6] group-hover:bg-[#70C7C6] group-hover:text-white transition-all duration-300">
                    {stat.icon === 'GraduationCap' ? <GraduationCap size={24} /> : <Users size={24} />}
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-brand-text uppercase tracking-tight mb-1 group-hover:text-[#70C7C6] transition-colors">{stat.title}</h4>
                    <p className="text-[11px] text-brand-text-muted leading-relaxed">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-[#70C7C6]/5 backdrop-blur-sm rounded-[30px] border border-[#70C7C6]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Star size={100} className="text-[#70C7C6]" fill="currentColor" />
              </div>
              <p className="text-[14px] text-brand-text font-medium relative z-10 leading-relaxed">
                Join our elite community of achievers and rewrite your success story today. Our system is designed to guide you through every step of your language journey.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="bg-[#70C7C6] text-white py-4 px-10 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-[#70C7C6]/20 hover:bg-[#5ba7a6] transition-all flex items-center gap-2">
                Discover More
                <CheckCircle size={16} />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#70C7C6] flex items-center justify-center text-white shadow-md">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-brand-text/40 uppercase tracking-widest leading-none mb-1">Enquire Now</p>
                  <p className="text-[13px] font-bold text-brand-text leading-none">+2 123 654 7898</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
