import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, BookOpen, CheckCircle2, Award, Zap, Users, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function CourseDetailModal({ isOpen, onClose, course, onEnroll }) {
  if (!isOpen || !course) return null;

  const curriculum = [
    { title: "Foundational Mastery", desc: "Core concepts and basic structural understanding.", icon: BookOpen },
    { title: "Dynamic Interaction", desc: "Real-time speaking drills and confidence builders.", icon: Zap },
    { title: "Professional Polish", desc: "Refining accent, tone, and professional vocabulary.", icon: Award },
    { title: "Final Assessment", desc: "Comprehensive evaluation and certification.", icon: GraduationCap },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#061423]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-[120] p-1.5 bg-black/5 hover:bg-black/10 rounded-full backdrop-blur-md transition-all text-slate-800"
          >
            <X size={20} />
          </button>

          {/* Left Side: Visual & Quick Stats */}
          <div className="lg:w-2/5 relative h-56 lg:h-auto overflow-hidden shrink-0">
            <img 
              src={course.img} 
              alt={course.name} 
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061423] via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E9C176]/20 border border-[#E9C176]/30 text-[#E9C176] text-[9px] font-bold uppercase tracking-widest">
                <Users size={10} /> Popular
              </div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold leading-tight italic">
                {course.name}
              </h2>
              <div className="flex items-center gap-4 text-[10px] font-medium text-white/80">
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#E9C176]" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><BookOpen size={12} className="text-[#E9C176]" /> 24+ Modules</span>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Info */}
          <div className="lg:w-3/5 p-6 lg:p-10 lg:pt-14 overflow-y-auto bg-slate-50 no-scrollbar">
            <div className="space-y-8">
              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold text-[#E9C176] uppercase tracking-[0.3em] opacity-80">Course Overview</h3>
                <p className="text-slate-600 leading-relaxed font-serif italic text-base lg:text-lg pr-2 lg:pr-4">
                  "{course.desc} Designed for individuals seeking significant transformation in their communication journey."
                </p>
              </div>

              {/* Curriculum Grid */}
              <div className="space-y-5">
                <h3 className="text-[10px] font-bold text-[#E9C176] uppercase tracking-[0.3em] opacity-80">Learning Path</h3>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                  {curriculum.map((item, i) => (
                    <div key={i} className="bg-white p-3.5 lg:p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-8 h-8 bg-[#E9C176]/10 rounded-md flex items-center justify-center text-[#E9C176] mb-2.5 group-hover:bg-[#E9C176] group-hover:text-white transition-colors">
                        <item.icon size={16} />
                      </div>
                      <h4 className="font-bold text-slate-800 text-[11px] lg:text-xs mb-1 leading-tight">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-snug line-clamp-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 border-t border-slate-200 flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex w-8 h-8 rounded-full bg-green-50 items-center justify-center text-green-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-800">Enrollment Open</p>
                    <p className="hidden md:block text-[9px] text-slate-400 italic">Limited batches available.</p>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    onClose();
                    onEnroll();
                  }}
                  className="px-6 py-3 bg-[#061423] text-white font-bold text-[10px] rounded-lg shadow-xl hover:bg-[#E9C176] hover:text-[#061423] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-widest whitespace-nowrap"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
