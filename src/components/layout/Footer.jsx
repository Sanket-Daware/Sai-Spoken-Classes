import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, BookOpen, ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import logo from '../../assets/sai-logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#FAFAFA] pt-6 md:pt-24 pb-6 font-sans border-t border-gray-100 overflow-hidden">
      {/* Light Textured Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(#004ac6 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      ></div>
      
      {/* Smooth Glassmorphic Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/[0.02] rounded-full blur-[150px] -mr-96 -mt-96 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/[0.04] rounded-full blur-[120px] -ml-64 -mb-64 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-white/[0.6] rounded-[100%] blur-[80px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pt-2 md:pt-8 pb-4">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block group outline-none transition-all duration-500 hover:scale-[1.02] active:scale-95">
              <img 
                src={logo} 
                alt="Sai Spoken Classes" 
                className="h-24 md:h-20 w-auto object-contain brightness-100 contrast-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]" 
              />
            </Link>
            <p className="text-brand-text/70 leading-relaxed font-medium text-sm italic pr-0 md:pr-4">
              "Empowering students with confident English communication skills and professional personality development. Join a legacy of excellence since 20XX."
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600', href: '#' },
                { icon: Instagram, color: 'hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', href: '#' },
                { icon: Youtube, color: 'hover:bg-red-600', href: '#' },
                { icon: Twitter, color: 'hover:bg-sky-500', href: '#' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm transition-all hover:text-white hover:shadow-lg hover:-translate-y-1.5 border border-brand-primary/5 ${social.color}`}
                >
                  <social.icon size={18} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Directory Links */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
              <h3 className="font-serif font-bold text-lg text-brand-text">Directory</h3>
            </div>
            <ul className="space-y-4">
              {[
                { name: 'Home Center', path: '/' },
                { name: 'Our Legacy', path: '/about' },
                { name: 'Academic Programs', path: '/courses' },
                { name: 'Mentor Profiles', path: '/faculty' },
                { name: 'Success Wall', path: '/students-success' },
                { name: 'Franchise Hub', path: '/franchise' }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-brand-text/60 hover:text-brand-primary font-semibold text-sm transition-all hover:translate-x-1 inline-flex items-center gap-2 group">
                    <ArrowRight size={14} className="text-brand-primary/50 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Excellence */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
              <h3 className="font-serif font-bold text-lg text-brand-text">Academic Excellence</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-1">10+ Years Legacy</h4>
                  <p className="text-[12px] text-brand-text/50 font-medium leading-relaxed">Trusted institution with a proven track record.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-1">Personalized Coaching</h4>
                  <p className="text-[12px] text-brand-text/50 font-medium leading-relaxed">Small batches for effective one-on-one attention.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 bg-brand-primary/5 rounded-xl flex items-center justify-center text-green-500 shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-1">Guaranteed Fluency</h4>
                  <p className="text-[12px] text-brand-text/50 font-medium leading-relaxed">Structured curriculum designed for fast results.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-1 bg-brand-accent rounded-full"></div>
              <h3 className="font-serif font-bold text-lg text-brand-text">Connect</h3>
            </div>
            
            <div className="space-y-6">
              {/* Highlighted WhatsApp/Call Block */}
              <div className="bg-white p-5 rounded-2xl shadow-xl shadow-brand-primary/5 border border-brand-primary/10 relative group hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-green-600">Admissions Open</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-green-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} fill="white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-brand-text/40 uppercase tracking-widest mb-0.5">Call / WhatsApp</p>
                    <p className="text-[17px] font-extrabold text-brand-text tracking-tight">+91 98XXX XXX89</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pl-2">
                <MapPin size={18} className="text-brand-primary/60 mt-0.5 shrink-0" />
                <p className="text-sm text-brand-text/70 leading-relaxed font-semibold">
                  Sai Plaza, Opp. City Hospital, <br />Main Road, Sangli - 416416
                </p>
              </div>

              <div className="flex items-center gap-4 pl-2 group">
                <Mail size={18} className="text-brand-primary/60 shrink-0 group-hover:text-brand-primary transition-colors" />
                <span className="text-sm font-bold text-brand-primary underline underline-offset-4 decoration-brand-accent/30 group-hover:decoration-brand-primary transition-colors">desk@saispoken.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 mb-6 pt-8 px-0 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-brand-primary/10 rounded-md flex items-center justify-center text-brand-primary">
              <BookOpen size={12} />
            </div>
            <p className="text-[11px] font-bold text-brand-text/40 uppercase tracking-widest">
              © {currentYear} Sai Spoken.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-text/40">
            <Link to="#" className="hover:text-brand-primary transition-colors">Privacy Protocols</Link>
            <Link to="#" className="hover:text-brand-primary transition-colors">Safety Terms</Link>
            <Link to="#" className="hover:text-brand-primary transition-colors">Digital Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
