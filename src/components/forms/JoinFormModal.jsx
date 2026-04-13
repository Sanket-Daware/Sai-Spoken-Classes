import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, BookOpen, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const courses = [
  "Basic Spoken English",
  "Grammar Foundation",
  "Corporate Communication",
  "Interview Prep Pro",
  "IELTS Mastery",
  "TOEFL Prep",
  "Advanced Spoken English",
  "Creative Writing",
  "Kids Spoken Junior"
];

export default function JoinFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-()\s]/g, ''))) {
      newErrors.phone = "Invalid phone number (10 digits)";
    }
    if (!formData.course) newErrors.course = "Please select a course";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let finalValue = value;
    if (name === 'phone') {
      // Remove any non-digit character
      finalValue = value.replace(/\D/g, '');
      // Limit to 10 digits max
      if (finalValue.length > 10) {
        finalValue = finalValue.slice(0, 10);
      }
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: '', email: '', phone: '', course: '', message: '' });
          onClose();
        }, 2500);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 p-safe">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#061423]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0D1B2A] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r from-[#0D1B2A] to-[#0A1622]">
              <div>
                <h2 className="text-2xl font-bold font-display text-white">Join Now</h2>
                <p className="text-sm text-white/60 mt-1">Take the first step towards fluency</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 pb-5 custom-scrollbar">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-[#E9C176]/20 rounded-full flex items-center justify-center mb-4 text-[#E9C176]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-white/60 text-sm max-w-xs mx-auto">
                    Thank you for your interest. Our counselor will contact you shortly to guide you forward.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 mb-1 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E9C176] focus:ring-1 focus:ring-[#E9C176]/50 transition-all",
                          errors.name && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-xs text-red-400 font-medium">{errors.name}</p>}
                  </div>

                  {/* Contact Fields (Row on sm+) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-white/70 mb-1 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={cn(
                            "w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E9C176] focus:ring-1 focus:ring-[#E9C176]/50 transition-all",
                            errors.email && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          )}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-xs text-red-400 font-medium">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-white/70 mb-1 uppercase tracking-wider">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={10}
                          className={cn(
                            "w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E9C176] focus:ring-1 focus:ring-[#E9C176]/50 transition-all",
                            errors.phone && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          )}
                          placeholder="9876543210"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-xs text-red-400 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 mb-1 uppercase tracking-wider">Interested Course</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                        <BookOpen size={16} />
                      </div>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[#E9C176] focus:ring-1 focus:ring-[#E9C176]/50 transition-all appearance-none",
                          errors.course && "border-red-500/50 focus:border-red-500 focus:ring-red-500/20",
                          !formData.course && "text-white/30"
                        )}
                      >
                        <option value="" disabled className="text-black">Select a course</option>
                        {courses.map(c => <option key={c} value={c} className="text-black">{c}</option>)}
                      </select>
                      {/* Custom dropdown arrow to replace default */}
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                    {errors.course && <p className="mt-1 text-xs text-red-400 font-medium">{errors.course}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[11px] font-semibold text-white/70 mb-1 uppercase tracking-wider">Message (Optional)</label>
                    <div className="relative">
                      <div className="absolute top-2.5 left-3 text-white/40">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E9C176] focus:ring-1 focus:ring-[#E9C176]/50 transition-all resize-none"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#061423] font-bold text-sm px-6 py-3 rounded-lg shadow-[0_5px_15px_-3px_rgba(233,193,118,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#061423]/20 border-t-[#061423] rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Submit Application
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
