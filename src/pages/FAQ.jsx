import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, MessageCircle, Phone, BookOpen, GraduationCap, Store, Award, MessageSquare } from 'lucide-react'

const faqCategories = [
  { id: 'general', name: 'General Queries', icon: BookOpen },
  { id: 'courses', name: 'Courses & Fees', icon: GraduationCap },
  { id: 'franchise', name: 'Franchise Partner', icon: Store },
  { id: 'certificates', name: 'Certificates & Results', icon: Award }
]

const faqs = [
  {
    category: 'general',
    q: 'Who can join Sai Spoken Classes?',
    a: 'Anyone! Our courses are designed for school and college students, job seekers, homemakers, and business professionals. We have specific modules tailored for different age groups and needs.'
  },
  {
    category: 'general',
    q: 'Is there a demo class available?',
    a: 'Yes, we offer 2 free demo sessions for all prospective students. This allows you to experience our unique professional teaching methodology before enrolling.'
  },
  {
    category: 'courses',
    q: 'What is the duration of the Basic Spoken course?',
    a: 'The standard duration for our Basic Spoken English course is 3 months, with daily sessions of 1.5 hours. We also have weekend-only batches for working professionals.'
  },
  {
    category: 'courses',
    q: 'Can I pay the fees in installments?',
    a: 'Yes, we provide flexible installment options for our certificate courses. Our local counselor can provide more details during your visit or call.'
  },
  {
    category: 'franchise',
    q: 'What is the minimum requirements to start a franchise?',
    a: 'You typically need a space of 500-1000 sq. ft. in an academic hub, a passion for education, and a nominal initial investment. We provide all the training and marketing support.'
  },
  {
    category: 'franchise',
    q: 'Do you provide lead support for franchises?',
    a: 'Absolutely. We share all leads generated from our regional digital campaigns in your specific territory directly with you to help grow your center.'
  },
  {
    category: 'certificates',
    q: 'Are your certificates authorized?',
    a: 'Yes, Sai Spoken Classes is a registered brand. Our certificates are widely recognized across the district for skill verification and professional academic records.'
  }
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 min-h-screen bg-brand-surface pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center max-w-4xl space-y-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-brand-primary font-bold uppercase tracking-widest bg-brand-primary/10 px-4 py-1 rounded-full border border-brand-primary/20">Help Center</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display text-brand-text leading-tight"
        >
          Got <span className="text-brand-primary italic underline underline-offset-8 decoration-brand-accent/30 decoration-wavy">Questions</span>? <br /> We Have Answers.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-brand-text-muted leading-relaxed max-w-2xl mx-auto italic"
        >
           Exploring everything you need to know about our professional classes, training methods, and business partnership.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto relative mt-16"
        >
           <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-muted/40" />
           <input 
             type="text" 
             placeholder="Try searching 'Fees' or 'Franchise'..." 
             className="w-full bg-white border-4 border-brand-surface px-16 py-6 rounded-[40px] focus:outline-none focus:ring-8 focus:ring-brand-primary/5 transition-all shadow-2xl font-medium text-brand-text placeholder:text-brand-text-muted/50"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="container mx-auto px-4 mb-20 overflow-x-auto no-scrollbar pb-6">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex justify-center gap-5"
         >
             <button
                onClick={() => setActiveCategory('all')}
                className={`px-10 py-4 rounded-[25px] font-bold whitespace-nowrap transition-all border-2 ${activeCategory === 'all' ? 'bg-brand-primary text-white border-brand-primary shadow-xl scale-105' : 'bg-white text-brand-text-muted border-brand-peach/50 hover:bg-brand-surface hover:text-brand-primary'}`}
             >
               View All
            </button>
            {faqCategories.map(cat => (
               <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-10 py-4 rounded-[25px] font-bold whitespace-nowrap transition-all flex items-center gap-3 border-2 ${activeCategory === cat.id ? 'bg-brand-primary text-white border-brand-primary shadow-xl scale-105' : 'bg-white text-brand-text-muted border-brand-peach/50 hover:bg-brand-surface hover:text-brand-primary'}`}
               >
                  <cat.icon size={20} /> {cat.name}
               </button>
            ))}
         </motion.div>
      </section>

      {/* FAQ Accordion List */}
      <section className="container mx-auto px-4 max-w-4xl space-y-8 min-h-[400px]">
         {filteredFaqs.length > 0 ? (
           filteredFaqs.map((faq, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               className="bg-white rounded-[45px] shadow-sm border-2 border-brand-surface overflow-hidden group hover:shadow-2xl transition-all"
             >
                <button
                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
                   className="w-full text-left p-8 md:p-12 flex justify-between items-center gap-8"
                >
                   <h3 className={`text-xl md:text-2xl font-display font-bold leading-relaxed transition-colors ${openIndex === index ? 'text-brand-primary' : 'text-brand-text group-hover:text-brand-primary'}`}>
                      {faq.q}
                   </h3>
                   <div className={`w-14 h-14 rounded-2xl border-4 border-brand-surface flex items-center justify-center shrink-0 transition-all shadow-sm ${openIndex === index ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-brand-primary group-hover:bg-brand-primary group-hover:text-white'}`}>
                      {openIndex === index ? <Minus size={28} /> : <Plus size={28} />}
                   </div>
                </button>
                
                <AnimatePresence>
                   {openIndex === index && (
                      <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden"
                      >
                         <div className="p-12 pt-0 text-brand-text-muted leading-relaxed text-lg border-t-2 border-brand-surface bg-brand-surface/30 italic">
                            "{faq.a}"
                         </div>
                      </motion.div>
                   )}
                </AnimatePresence>
             </motion.div>
           ))
         ) : (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-center py-20 space-y-6"
           >
              <div className="w-24 h-24 bg-brand-surface mx-auto rounded-[30px] flex items-center justify-center text-brand-primary/20">
                 <Search size={56} />
              </div>
              <p className="text-2xl font-display font-bold text-brand-text/40 italic">"No matching questions found in this repository."</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('all')}}
                className="btn-primary py-3 px-8 text-sm"
              >
                Clear All Filters
              </button>
           </motion.div>
         )}
      </section>

      {/* Support CTA - Refined to remove large dark block */}
      <section className="container mx-auto px-4 py-32 text-center">
         <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[70px] p-12 lg:p-24 relative shadow-2xl overflow-hidden group border-4 border-brand-surface"
         >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            
            <div className="space-y-12 relative z-10">
               <div className="space-y-4">
                  <span className="text-brand-primary font-bold uppercase tracking-[0.3em] bg-brand-primary/5 px-4 py-1 rounded-full text-xs">Direct Support</span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-text leading-tight">Still Need Extra <br /><span className="text-brand-primary italic underline underline-offset-8 decoration-brand-accent/30 decoration-wavy">Guidance?</span></h2>
               </div>
               <p className="text-xl text-brand-text-muted max-w-2xl mx-auto mb-12 leading-relaxed italic">
                  "If your specific query is not listed above, feel free to directly call or message our professional student support desk."
               </p>
               <div className="flex flex-wrap justify-center gap-8">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="tel:+9198XXXXX00" 
                    className="btn-primary py-6 px-12 text-2xl flex items-center gap-4 shadow-3xl shadow-brand-primary/20"
                  >
                     <Phone size={28} /> Call Specialist
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/+9198XXXXX00" 
                    className="bg-[#25D366] text-white py-6 px-12 rounded-full font-bold text-2xl flex items-center gap-4 shadow-3xl shadow-green-500/20 hover:bg-[#20BD5A] transition-all"
                  >
                     <MessageCircle size={28} /> WhatsApp Chat
                  </motion.a>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Footer Support Info */}
      <section className="container mx-auto px-4 py-12 text-center">
         <div className="flex justify-center items-center gap-4 text-brand-text-muted font-bold tracking-widest text-xs uppercase">
            <MessageSquare size={16} className="text-brand-primary" />
            Live Support: 10:00 AM - 07:00 PM (Monday - Saturday)
         </div>
      </section>
    </div>
  )
}
