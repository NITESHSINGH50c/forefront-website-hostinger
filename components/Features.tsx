
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0c0c0e] to-[#050505] border border-white/5 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative gold element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C5A059] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-white mb-8 leading-tight">
                Why Partners Choose <br />ForeFront Digital Solution
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                In a world of templated solutions, we offer bespoke engineering. We combine deep technical 
                proficiency with a refined design eye to deliver products that don't just work—they excel.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 10}/100`} className="w-12 h-12 rounded-full border-2 border-[#0c0c0e]" alt="Partner" />
                  ))}
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-white block">Trusted by 53+</span>
                  <span className="text-slate-500">Global Industry Leaders</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-[#C5A059]/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">{feature.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
