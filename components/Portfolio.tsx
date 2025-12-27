import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X, ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-24">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block"
            >
              Artifacts of Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-outfit font-extrabold text-white leading-[0.85] tracking-tighter"
            >
              Curated <br /><span className="text-[#A8A9AD]">Work</span>
            </motion.h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  filter === cat 
                    ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-2xl' 
                    : 'bg-transparent text-slate-500 border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="portfolio-item group relative rounded-[3rem] overflow-hidden bg-[#0c0c0e] border border-white/5 cursor-pointer shadow-2xl"
              >
                <div className="aspect-[11/12] overflow-hidden portfolio-img-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                </div>
                
                <div className="absolute inset-x-6 bottom-6 glass-dark p-8 rounded-[2rem] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em] mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-outfit font-bold text-white tracking-tight">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] px-3 py-1.5 bg-white/5 rounded-full text-slate-400 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Project Modal with Luxury Theme */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                className="relative w-full max-w-5xl bg-[#0c0c0e] rounded-[3rem] border border-white/5 overflow-hidden shadow-[0_0_100px_rgba(197,160,89,0.1)] flex flex-col md:flex-row max-h-[90vh]"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-[#C5A059] transition-colors border border-white/10"
                >
                  <X size={24} />
                </button>
                
                <div className="md:w-3/5 h-80 md:h-auto overflow-hidden">
                  <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
                </div>
                
                <div className="md:w-2/5 p-12 md:p-16 overflow-y-auto modal-scrollbar">
                  <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.4em] block mb-6">{selectedProject.category}</span>
                  <h2 className="text-5xl font-outfit font-extrabold text-white mb-8 tracking-tighter leading-tight">{selectedProject.title}</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                    {selectedProject.description} A testament to our commitment to luxury and performance.
                  </p>
                  
                  <div className="mb-12">
                    <h4 className="text-white font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">Built With</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-slate-300 text-[10px] font-black uppercase tracking-widest border border-white/5">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <button className="flex-1 py-5 bg-[#C5A059] text-black rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all">
                      Access Live <ExternalLink size={20} />
                    </button>
                    <button className="w-16 h-16 bg-white/5 text-white rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
                      <Github size={28} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;