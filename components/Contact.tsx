import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY } from '../constants';
import './Contact.css';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: 'New Inquiry from ${formState.name} - ForeFront Portfolio',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        // Auto-reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('System interruption detected. Please verify your connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[#C5A059] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Reach Out</span>
            <h2 className="text-5xl md:text-6xl font-outfit font-extrabold text-white mb-8 leading-tight">
              Start Your <br />
              <span className="text-gradient">Evolution</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
              Ready to transform your digital presence with ForeFront? Whether you have a specific 
              project in mind or just want to explore the possibilities, our team is 
              standing by to help you innovate.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail />, label: 'Email', value: 'janhvi@forefrontdigitalsolution.com' },
                { icon: <Phone />, label: 'Phone', value: '+91 91753 41257' },
                { icon: <MapPin />, label: 'Base', value: 'Plot no 2, 2nd Floor, Kandi Tower, Rokdiya Hanuman colony, Mondha Naka, Chatrapati, Chhatrapati Sambhajinagar, Maharashtra 431001' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.label}</h4>
                    <p className="text-white font-medium text-lg group-hover:text-[#C5A059] transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-[#A8A9AD]/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative glass-dark p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-outfit font-bold text-white mb-4">Transmission Received</h3>
                    <p className="text-slate-400">The ForeFront concierge will be in touch within 12 business hours.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-[#C5A059] font-bold hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    {error && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-xs font-bold uppercase tracking-wider"
                      >
                        <AlertCircle size={18} />
                        {error}
                      </motion.div>
                    )}

                    <div className="space-y-6">
                      <div className="relative">
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="Your Name"
                          className="contact-input w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-[#C5A059] outline-none text-white transition-all placeholder:text-slate-600 font-medium"
                        />
                        <div className="input-line"></div>
                      </div>
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          placeholder="Email Address"
                          className="contact-input w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-[#C5A059] outline-none text-white transition-all placeholder:text-slate-600 font-medium"
                        />
                        <div className="input-line"></div>
                      </div>
                      <div className="relative">
                        <textarea 
                          name="message"
                          rows={4}
                          required
                          value={formState.message}
                          onChange={(e) => setFormState({...formState, message: e.target.value})}
                          placeholder="Project Brief"
                          className="contact-input w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-[#C5A059] outline-none text-white transition-all placeholder:text-slate-600 font-medium resize-none"
                        ></textarea>
                        <div className="input-line"></div>
                      </div>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative py-5 bg-[#C5A059] text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-[#d4af37] active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Initiate Project
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;