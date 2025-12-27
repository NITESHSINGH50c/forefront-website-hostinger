import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Hero.css';
//import cover from './assets/cover.png'
// 🔹 Import your video here
import heroVideo from './assets/covervid.mp4';

interface HeroProps {
  setView: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
      {/* ================= TEXT CONTENT ================= */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-[#C5A059]/20 mb-10"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
          <span className="text-[9px] font-black text-[#A8A9AD] uppercase tracking-[0.4em]">
            Excellence Reimagined
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-extrabold text-white leading-[0.85] mb-10 tracking-tighter"
          >
            Building <br />
            <span className="text-gradient">Digital</span> <br />
            Brands with Clarity, Speed and Impact.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base md:text-lg text-slate-500 mb-12 leading-relaxed font-medium"
          >
            Forging high-end digital identities through a synthesis of technical
            precision and refined aesthetic vision.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => setView('contact')}
              className="group px-12 py-5 bg-transparent border border-white/10 text-white rounded-full font-black text-[11px] uppercase tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all active:scale-95"
            >
              Consultation
              <ChevronRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= VIDEO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
        className="mt-32 max-w-5xl mx-auto relative px-4"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A059]/20 to-[#A8A9AD]/20 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-[#0c0c0e] border border-white/5 rounded-3xl p-4 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 mb-4 opacity-50">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              </div>
              <div className="text-[9px] font-bold tracking-[0.3em] uppercase">
                ForeFront Digital Solution
              </div>
            </div>

            {/* 🎥 VIDEO */}
            <video
              className="w-full h-auto rounded-xl object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-90 transition-all duration-1000"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
