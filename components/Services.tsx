
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden bg-[#070708]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-outfit font-extrabold text-white tracking-tighter"
          >
            Strategic Solutions
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card group p-10 rounded-[2.5rem] bg-[#0c0c0e] border border-white/5"
            >
              <div className="w-20 h-20 rounded-2xl service-icon-box flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                {/* Fixed TypeScript error by specifying <any> generic for ReactElement to support className prop */}
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8 text-[#C5A059]" })}
              </div>
              <h3 className="text-2xl font-outfit font-bold text-white mb-6 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">
                {service.description}
              </p>
             {/* <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#C5A059] group-hover:text-white transition-all">
                Explore Detail
                <span className="w-0 group-hover:w-6 transition-all h-[1px] bg-white"></span>
              </button>*/}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
