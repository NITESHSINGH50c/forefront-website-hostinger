import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png';
interface NavbarProps {
  currentView: string;
  setView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
   /* { name: 'Portfolio', id: 'portfolio' },*/
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setView(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center gap-3 group outline-none"
        >
          <div className="w-10 h-10 transition-transform duration-500 group-hover:scale-110">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-outfit font-bold text-xl tracking-tighter text-white">
            FOREFRONT<span className="text-[#C5A059]">DIGITALSOLUTION</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 ${
                currentView === link.id ? 'text-[#C5A059]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {currentView === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#C5A059]"></span>
              )}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="px-8 py-3 bg-[#C5A059] hover:bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-[#C5A059]/10 active:scale-95"
          >
            Inquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#C5A059]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-40 transition-all duration-700 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-4xl font-outfit font-bold transition-colors ${
                currentView === link.id ? 'text-[#C5A059]' : 'text-slate-500 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contact')}
            className="mt-6 px-12 py-5 bg-[#C5A059] text-black rounded-full font-black uppercase tracking-widest text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;