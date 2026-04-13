import { motion } from 'framer-motion'
import { PlayCircle, Youtube, Clock, Calendar, Users, Star, ArrowRight, Share2, MessageSquare, Monitor, CircleCheck, Video } from 'lucide-react'

const upcomingSessions = [
  { 
    id: 1, 
    title: 'Mastering the 12 Tenses in English', 
    date: 'Wednesday, May 8', 
    time: '07:00 PM', 
    trainer: 'Prof. S. R. Patil', 
    platform: 'YouTube Live',
    icon: Video
  },
  { 
    id: 2, 
    title: 'Common Mistakes in Daily Conversation', 
    date: 'Friday, May 10', 
    time: '04:00 PM', 
    trainer: 'Mrs. Anjali Deshmukh', 
    platform: 'Zoom Private Session',
    icon: Monitor
  }
]

const playlists = [
  { title: 'Grammar Foundation', lessons: 24, views: '12K+', category: 'Basics' },
  { title: 'Interview Cracking Series', lessons: 10, views: '8K+', category: 'Career' },
  { title: 'Vocabulary Booster', lessons: 15, views: '5K+', category: 'Fluency' },
  { title: 'Student Success Stories', lessons: 30, views: '20K+', category: 'Social Proof' }
]

export default function LiveSessions() {
  return (
    <div className="pt-24 min-h-screen bg-brand-surface pb-24">
      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-brand-primary font-bold uppercase tracking-widest bg-brand-primary/10 px-4 py-1 rounded-full border border-brand-primary/20">Live & Recorded Training</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display text-brand-text leading-tight"
        >
          Learn in Real-time with <br /> <span className="text-brand-primary italic underline underline-offset-8 decoration-brand-accent/30 decoration-wavy">Expert Trainers</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-brand-text-muted leading-relaxed max-w-2xl mx-auto italic"
        >
           Experience the interactive energy of our live sessions and access our deep academic library of recorded lessons from anywhere.
        </motion.p>
      </section>

      {/* Main Live Banner Embed Area - Refined to remove large red block */}
      <section className="container mx-auto px-4 pb-24">
         <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[70px] overflow-hidden shadow-2xl relative group border-8 border-brand-surface"
         >
            <div className="aspect-video relative bg-brand-surface flex items-center justify-center group cursor-pointer overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1374&auto=format&fit=crop" 
                 alt="Live stream thumbnail" 
                 className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-105" 
               />
               
               <div className="relative z-10 text-center space-y-8 p-12">
                  <div className="w-28 h-28 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-float mx-auto border-8 border-white">
                     <PlayCircle size={64} fill="currentColor" />
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-text uppercase tracking-[0.2em] underline underline-offset-12 decoration-brand-accent/20">Watch Latest Live</h3>
                     <p className="text-brand-primary font-bold text-xl italic bg-white/60 backdrop-blur-md px-8 py-3 rounded-full inline-block shadow-sm">"Topic: Effective Presentation Techniques"</p>
                  </div>
               </div>
               
               <div className="absolute top-10 left-10 flex flex-wrap items-center gap-4">
                  <div className="px-6 py-2 bg-red-600 animate-pulse text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">Live Academy</div>
                  <div className="px-6 py-2 bg-white/80 backdrop-blur-md text-brand-text text-xs font-bold uppercase tracking-widest rounded-full border border-brand-peach/30 flex items-center gap-2 shadow-sm">
                     <Users size={14} className="text-brand-primary" /> 142 Active Learners
                  </div>
               </div>
               
               <div className="absolute bottom-10 right-10">
                  <div className="flex gap-4">
                     <button className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl text-brand-primary hover:bg-brand-primary hover:text-white transition-all border border-brand-peach/30 shadow-xl flex items-center justify-center">
                        <Share2 size={24} />
                     </button>
                     <button className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl text-brand-primary hover:bg-brand-primary hover:text-white transition-all border border-brand-peach/30 shadow-xl flex items-center justify-center">
                        <Youtube size={24} />
                     </button>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Upcoming Schedule */}
      <section className="container mx-auto px-4 py-24 pb-32">
         <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16 px-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
               <span className="text-brand-primary font-bold uppercase tracking-widest text-sm italic">Academic Calendar</span>
               <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-text leading-tight">Upcoming Live <br /><span className="text-brand-primary underline italic decoration-brand-accent/20 decoration-wavy underline-offset-8">Sessions</span></h2>
               <p className="text-xl text-brand-text-muted italic max-w-xl">"Don't miss out on these real-time professional learning opportunities."</p>
            </motion.div>
            <motion.button 
               whileHover={{ scale: 1.05 }}
               className="btn-primary py-4 px-10 text-lg shadow-xl shadow-brand-primary/10"
            >
               Sync With Google Calendar
            </motion.button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {upcomingSessions.map((session, i) => (
               <motion.div
                 key={session.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 whileHover={{ y: -10 }}
                 className="bg-white p-10 rounded-[50px] shadow-sm hover:shadow-2xl transition-all border border-brand-peach/30 flex flex-col sm:flex-row items-center sm:items-start gap-10 group relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-4">
                     <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-ping" />
                  </div>
                  <div className="w-24 h-24 bg-brand-surface rounded-[30px] flex flex-col items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-inner border border-brand-primary/5">
                     <session.icon size={44} />
                  </div>
                  <div className="space-y-6 w-full text-center sm:text-left">
                     <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs font-bold text-brand-primary underline decoration-brand-accent/20 underline-offset-4 tracking-widest italic">{session.platform}</p>
                        <div className="px-4 py-1.5 bg-brand-surface rounded-full flex items-center gap-3 border border-brand-peach/30 shadow-sm">
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover:animate-ping" />
                           <span className="text-[10px] font-bold text-brand-text uppercase tracking-widest">Enroll Open</span>
                        </div>
                     </div>
                     <h3 className="text-2xl font-display font-bold text-brand-text group-hover:text-brand-primary transition-colors leading-tight">{session.title}</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-peach/20">
                        <div className="flex items-center gap-3 text-sm text-brand-text-muted font-medium bg-brand-surface px-3 py-1.5 rounded-full">
                           <Calendar size={18} className="text-brand-primary" /> {session.date}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-brand-text-muted font-medium bg-brand-surface px-3 py-1.5 rounded-full">
                           <Clock size={18} className="text-brand-primary" /> {session.time}
                        </div>
                     </div>
                     <p className="text-xs font-bold text-brand-text bg-brand-accent/10 px-4 py-2 rounded-full inline-block italic">
                        <Star size={14} className="inline mr-2 fill-brand-primary text-brand-primary" /> Senior Trainer - {session.trainer}
                     </p>
                     <motion.button 
                       whileTap={{ scale: 0.95 }}
                       className="w-full btn-primary py-4 text-base flex justify-center items-center gap-3 mt-4"
                     >
                        Register Now For Private Access <ArrowRight size={22} className="group-hover:translate-x-3 transition-transform" />
                     </motion.button>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* Playlist Section - Refined to remove large dark block */}
      <section className="bg-white py-24 pb-32 border-y border-brand-peach/20 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
         
         <div className="container mx-auto px-4 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-20 space-y-6"
            >
               <h2 className="text-4xl md:text-6xl font-display leading-[1.1] text-brand-text font-bold">Topic-wise Recorded <br /> <span className="text-brand-primary italic underline underline-offset-12 decoration-brand-accent/30 decoration-wavy">Learning Playlists</span></h2>
               <p className="text-brand-text-muted text-xl max-w-2xl mx-auto italic">"Missed a live capture? No worries. Explore our structured library categorized by linguistic excellence."</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {playlists.map((playlist, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     whileHover={{ y: -10 }}
                     className="bg-brand-surface border-4 border-white rounded-[60px] p-10 space-y-8 hover:bg-white transition-all cursor-pointer group shadow-xl hover:shadow-2xl"
                  >
                     <div className="aspect-square bg-white rounded-[45px] flex items-center justify-center text-brand-primary relative overflow-hidden shadow-sm border border-brand-peach/10">
                        <Youtube size={70} className="group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ease-out" />
                        <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                           <p className="text-white font-bold bg-brand-primary px-6 py-3 rounded-full uppercase text-[10px] tracking-widest shadow-2xl scale-50 group-hover:scale-100 transition-transform">Explore Lessons</p>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <p className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em] bg-white px-4 py-1.5 rounded-full inline-block shadow-sm">{playlist.category}</p>
                        <h3 className="text-2xl font-display font-bold text-brand-text leading-tight group-hover:text-brand-primary transition-colors">{playlist.title}</h3>
                        <div className="flex justify-between items-center border-t border-brand-peach/30 pt-6">
                           <div className="flex items-center gap-2 text-brand-text-muted text-xs font-bold">
                              <Video size={16} className="text-brand-primary" /> {playlist.lessons} Parts
                           </div>
                           <div className="flex items-center gap-2 text-brand-text-muted text-xs font-bold">
                              <Users size={16} className="text-brand-primary" /> {playlist.views} Views
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
               <button className="btn-primary py-5 px-14 text-xl shadow-2xl shadow-brand-primary/20">Go To YouTube Channel</button>
            </motion.div>
         </div>
      </section>

      {/* Q&A Promo Section */}
      <section className="container mx-auto px-4 py-32">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[80px] p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-2xl border-4 border-brand-surface relative overflow-hidden"
         >
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] -ml-40 -mb-40" />
            
            <div className="lg:w-1/2 space-y-12 order-2 lg:order-1 relative z-10">
               <div className="space-y-6">
                  <span className="text-brand-primary/60 font-bold uppercase tracking-[0.4em] text-xs">Innovation Hub</span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-text leading-[1.1]">Join Our Next <br /> <span className="text-brand-primary italic underline underline-offset-12 decoration-brand-secondary/40 underline-offset-8">Open Seminar</span></h2>
               </div>
               <p className="text-xl text-brand-text-muted leading-relaxed italic max-w-lg">
                  "Participate in our monthly interactive live seminar where our director personally answers all your linguistic doubts in real-time."
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    'Live Grammar Assessment',
                    'Direct Q&A with Founder',
                    'Exclusive Master Notes',
                    'Networking Opportunities'
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-brand-text font-bold text-lg group/item"
                    >
                       <div className="w-10 h-10 bg-brand-surface rounded-xl flex items-center justify-center text-brand-secondary shadow-md border border-brand-secondary/10 group-hover/item:bg-brand-secondary group-hover/item:text-white transition-all">
                          <CircleCheck size={24} />
                       </div>
                       {item}
                    </motion.div>
                  ))}
               </div>
               <div className="pt-10">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-primary text-white p-7 px-14 rounded-full font-bold text-2xl shadow-3xl shadow-brand-primary/30 flex items-center gap-4 group/btn"
                  >
                     Reserve My Spot <ArrowRight size={32} className="group-hover/btn:translate-x-4 transition-transform" />
                  </motion.button>
               </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 relative">
               <div className="relative z-10 bg-brand-surface rounded-[60px] p-12 lg:p-20 border-8 border-white shadow-2xl text-center max-w-xl mx-auto group">
                  <div className="w-28 h-28 bg-white rounded-[40px] flex items-center justify-center text-brand-primary mx-auto shadow-xl group-hover:rotate-12 transition-transform duration-700 border border-brand-peach/20">
                     <MessageSquare size={56} />
                  </div>
                  <div className="space-y-6 pt-10">
                     <p className="text-brand-text-muted font-bold tracking-[0.4em] uppercase text-[10px] bg-white inline-block px-4 py-1 rounded-full shadow-sm">Direct Student Access</p>
                     <h3 className="text-4xl font-display font-bold text-brand-text">Ask Me <span className="text-brand-primary underline decoration-brand-accent/30 decoration-wavy">Anything</span></h3>
                     <p className="text-brand-text-muted leading-relaxed italic text-lg px-4">
                        "Connect every Sunday at 11:00 AM – Clear your concept doubts with our director Prof. Patil."
                     </p>
                  </div>
                  <div className="flex justify-center gap-1.5 pt-8">
                     {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={20} className="text-brand-primary fill-brand-primary" />
                     ))}
                  </div>
                  <p className="text-xs font-bold text-brand-text mt-4 uppercase tracking-[0.2em] opacity-60">Verified Community Sessions</p>
               </div>
               <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl border border-brand-accent/20 animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-secondary/5 rounded-full blur-xl border border-brand-secondary/20" />
            </div>
         </motion.div>
      </section>

      {/* Footer Note */}
      <section className="container mx-auto px-4 py-12 text-center">
         <p className="text-brand-text-muted font-bold text-[10px] uppercase tracking-[0.5em] opacity-40">Linguistic Excellence Through Technology</p>
      </section>
    </div>
  )
}
