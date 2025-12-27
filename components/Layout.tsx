import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AIChatAgent from './AIChatAgent';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
  currentView: string;
  setView: (view: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col relative overflow-x-hidden">
      {/* Luxury Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 mb-6"
              >
                 <img src="./logo.png" alt="Logo" className="w-full h-full object-contain filter grayscale invert brightness-150" />
              </motion.div>
              <h2 className="text-[10px] font-outfit font-bold text-[#C5A059] tracking-[0.6em] uppercase">Refining Excellence</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar currentView={currentView} setView={setView} />
      
      <main className="relative flex-grow">
        {/* Luxury Ambient Backgrounds */}
        <div className="ambient-glow glow-gold fixed top-0 -left-64 w-[600px] h-[600px]" />
        <div className="ambient-glow glow-silver fixed top-1/2 -right-64 w-[700px] h-[700px]" />
        <div className="ambient-glow glow-dark fixed -bottom-64 left-1/4 w-[500px] h-[500px]" />

        <AnimatePresence mode="wait">
          {isLoaded && children}
        </AnimatePresence>
      </main>

      <Footer setView={setView} />
      <AIChatAgent />
    </div>
  );
};

export default Layout;