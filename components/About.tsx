import React from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles, Zap, Shield } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { label: 'Industry Tenure', value: '3+', suffix: 'Years' },
    { label: 'High-End', value: '50+', suffix: 'Deliveries' },
    { label: 'Retained Partners', value: '95%', suffix: 'Loyalty' },
    /*{ label: 'Design Awards', value: '12', suffix: 'Global' },*/
  ];

  const coreValues = [
    { title: 'Bespoke', desc: 'Custom engineering for unique identities.', icon: <Target className="w-5 h-5" /> },
    { title: 'Refined', desc: 'Elegance in every line of code.', icon: <Shield className="w-5 h-5" /> },
    { title: 'Elite', desc: 'Performance-driven architectural design.', icon: <Zap className="w-5 h-5" /> },
    { title: 'Infinite', desc: 'Scaling beyond current technological bounds.', icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Studio Essence</span>
            <h2 className="text-5xl md:text-7xl font-outfit font-extrabold text-white mb-10 leading-[0.9]">
              Defining the <br />
              <span className="text-[#A8A9AD]">Elite Digital</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
              Forefront Digital Solution represents the pinnacle of digital craftsmanship. We serve 
              brands that demand distinction, providing architectural solutions 
              where aesthetics and high-performance engineering intersect.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {coreValues.map((val, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="icon-gold group-hover:scale-110 transition-transform">
                      {val.icon}
                    </div>
                    <h4 className="font-bold text-white text-[11px] uppercase tracking-[0.2em]">{val.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className={`about-stat-card p-12 rounded-[2.5rem] bg-[#0c0c0e] border border-white/5 transition-all ${idx % 2 !== 0 ? 'translate-y-12' : ''}`}
                >
                  <div className="text-6xl font-outfit font-extrabold text-white mb-3 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] text-[#A8A9AD] font-black uppercase tracking-[0.3em] mb-1">{stat.label}</div>
                  <div className="text-[9px] text-[#C5A059] uppercase font-bold tracking-[0.4em]">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;