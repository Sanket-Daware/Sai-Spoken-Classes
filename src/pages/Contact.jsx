import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CircleCheck, Facebook, Instagram, Youtube, GraduationCap } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission
    console.log('Form data:', formState)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    { 
      label: 'Visit Us', 
      value: 'Sai Plaza, Opposite City Hospital, Main Road, Sangli (MH) - 416416', 
      icon: MapPin, 
      color: 'bg-brand-primary' 
    },
    { 
      label: 'Call Us', 
      value: '+91 98XXX XXX89 \n +91 97XXX XXX12', 
      icon: Phone, 
      color: 'bg-brand-secondary' 
    },
    { 
      label: 'Email Support', 
      value: 'info@saispokenclasses.com \n support@saispokenclasses.com', 
      icon: Mail, 
      color: 'bg-brand-accent' 
    },
    { 
      label: 'Working Hours', 
      value: 'Mon - Sat: 8:00 AM - 8:00 PM \n Sunday: 9:00 AM - 1:00 PM', 
      icon: Clock, 
      color: 'bg-brand-peach' 
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-brand-surface pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 text-center max-w-3xl space-y-6">
        <span className="text-brand-primary font-bold uppercase tracking-widest bg-brand-primary/10 px-4 py-1 rounded-full">Get In Touch</span>
        <h1 className="text-3xl md:text-5xl font-display text-brand-text">We Are Here To <br /> <span className="text-brand-primary italic">Guide You</span></h1>
        <p className="text-lg text-brand-text-muted leading-relaxed">
           Have a question about our batches? Interested in taking a franchise? Or just want to say hello? Fill out the form below.
        </p>
      </section>

      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Details side */}
        <div className="lg:col-span-5 space-y-8">
           <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-[30px] shadow-sm flex items-start gap-6 group hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                     <info.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.label}</h3>
                    <p className="text-brand-text-muted whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
           </div>

           {/* Social Group - Refined to remove large red block */}
           <div className="bg-white p-10 rounded-[40px] space-y-8 shadow-sm border-2 border-brand-primary/5 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl animate-pulse" />
              <h3 className="text-2xl font-display font-bold text-brand-text">Follow Our Success</h3>
              <p className="text-brand-text-muted leading-relaxed">Join our social media handles for daily grammar tips and student success videos.</p>
              <div className="flex gap-4">
                 {[
                   { icon: Facebook, color: 'bg-[#1877F2]' },
                   { icon: Instagram, color: 'bg-linear-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' },
                   { icon: Youtube, color: 'bg-[#FF0000]' },
                   { icon: MessageSquare, color: 'bg-[#25D366]' } // WhatsApp
                 ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                    >
                       <social.icon size={22} />
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* Form side */}
        <div className="lg:col-span-7 bg-white rounded-[50px] p-8 md:p-16 shadow-2xl border border-brand-peach/30 relative">
           <h2 className="text-3xl font-display font-bold text-brand-text mb-8">Send an Inquiry</h2>
           
           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text ml-2">Full Name</label>
                    <input 
                       required
                       type="text" 
                       placeholder="Enter your name" 
                       className="w-full bg-brand-surface/50 border border-brand-peach rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-text"
                       value={formState.name}
                       onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text ml-2">Phone Number</label>
                    <input 
                       required
                       type="tel" 
                       placeholder="Mobile number" 
                       className="w-full bg-brand-surface/50 border border-brand-peach rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-text"
                       value={formState.phone}
                       onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text ml-2">Email Address</label>
                    <input 
                       type="email" 
                       placeholder="Email (Optional)" 
                       className="w-full bg-brand-surface/50 border border-brand-peach rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-text"
                       value={formState.email}
                       onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text ml-2">Interested Course</label>
                    <select 
                       className="w-full bg-brand-surface/50 border border-brand-peach rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-text appearance-none"
                       value={formState.course}
                       onChange={(e) => setFormState({...formState, course: e.target.value})}
                    >
                       <option value="">Select Course</option>
                       <option value="basic">Basic Spoken English</option>
                       <option value="advanced">Advanced Spoken English</option>
                       <option value="grammar">Grammar Foundation</option>
                       <option value="personality">Personality Development</option>
                       <option value="franchise">Franchise Inquiry</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-bold text-brand-text ml-2">Message</label>
                 <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full bg-brand-surface/50 border border-brand-peach rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-brand-text resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                 ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full py-5 text-xl flex items-center justify-center gap-3 mt-4"
              >
                 Send Message <Send size={20} />
              </button>
           </form>

           {submitted && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-[50px] flex flex-col items-center justify-center text-center p-12 space-y-6 z-10"
             >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                   <CircleCheck size={60} />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-text">Thank You!</h3>
                <p className="text-lg text-brand-text-muted">Your message has been sent successfully. Our counselor will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
             </motion.div>
           )}
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mt-24">
         <div className="bg-brand-peach/20 rounded-[50px] overflow-hidden p-4 border border-brand-peach shadow-lg">
            <div className="w-full h-[500px] rounded-[40px] overflow-hidden md:grayscale bg-zinc-200 flex items-center justify-center relative group">
               {/* Note: In a real app, use Google Maps Iframe or React Google Maps component */}
               <div className="text-center space-y-4">
                  <MapPin size={80} className="text-brand-primary mx-auto animate-bounce" />
                  <p className="text-2xl font-display font-medium text-brand-text">Map Location Integration</p>
                  <p className="text-brand-text-muted">Interactive map comes here</p>
               </div>
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15264.45334415!2d74.577239!3d16.852397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc123456789abcd%3A0x1234567890abcdef!2sSangli%20City!5e0!3m2!1sen!2sin!4v1234567890123" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 title="Sai Spoken Classes Location"
                 className="absolute inset-0 opacity-100 transition-opacity"
               ></iframe>
            </div>
         </div>
      </section>

      {/* Batch Schedule Reference */}
      <section className="container mx-auto px-4 pt-12 pb-6 md:py-24">
         <div className="bg-white rounded-[50px] p-12 lg:p-20 shadow-xl border border-brand-peach/40">
            <div className="mb-12 text-center lg:text-left space-y-4">
               <h2 className="text-4xl font-display font-bold">Standard Batch Timings</h2>
               <p className="text-brand-text-muted">Choose a time that fits your daily schedule.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { time: '08:00 AM - 09:30 AM', label: 'Morning Fresh', icon: Clock },
                 { time: '11:00 AM - 12:30 PM', label: 'College Students', icon: GraduationCap },
                 { time: '03:00 PM - 04:30 PM', label: 'Women\'s Exclusive', icon: MessageSquare },
                 { time: '06:30 PM - 08:00 PM', label: 'Working Professional', icon: BriefcaseIcon }
               ].map((batch, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-brand-surface border border-brand-peach/50 space-y-4 hover:shadow-lg transition-all">
                     <p className="font-bold text-brand-primary uppercase tracking-widest text-xs">{batch.label}</p>
                     <p className="text-2xl font-display font-medium">{batch.time}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}

function BriefcaseIcon({ size, className }) {
  return <MessageSquare size={size} className={className} /> // Reusing for consistency
}
