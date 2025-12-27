import React from 'react';
import {Instagram, Youtube, Linkedin} from 'lucide-react';
import logo from './assets/logo.png';

interface FooterProps {
  setView: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="py-24 px-6 bg-[#050505] border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 md:col-span-2">
          <button 
            onClick={() => setView('home')} 
            className="flex items-center gap-4 mb-8 group outline-none"
          >
            <div className="w-12 h-12 transition-transform duration-500 group-hover:scale-110">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-outfit font-bold text-3xl text-white tracking-tighter">FOREFRONT <span className="text-[#C5A059]">DIGITALSOLUTION</span></span>
          </button>
          <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed">
            The global standard for elite digital experiences. We synthesize technical precision with aesthetic vision to define the future of high-performance architecture.
          </p>
          <div className="flex gap-6">
            {[Instagram].map((Icon, i) => (
              <a 
                key={Instagram}
                href="https://www.instagram.com/forefront_digital_solution?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-slate-500 hover:text-[#C5A059] hover:border-[#C5A059]/30 hover:bg-white/5 transition-all duration-500"
              >
                <Icon size={20} />
              </a>
              
            ))}
          
          
            {[Youtube].map((Icon, i) => (
              <a 
                key={Youtube}
                href="https://www.youtube.com/@forefrontdigitalmedia-pz4ub" 
                className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-slate-500 hover:text-[#C5A059] hover:border-[#C5A059]/30 hover:bg-white/5 transition-all duration-500"
              >
                <Icon size={20} />
              </a>
              
            ))}

{[Linkedin].map((Icon, i) => (
              <a 
                key={Linkedin}
                href="https://www.linkedin.com/company/110878509/admin/page-posts/published/?shareMsgArgs=null" 
                className="w-12 h-12 rounded-2xl border border-white/5 flex items-center justify-center text-slate-500 hover:text-[#C5A059] hover:border-[#C5A059]/30 hover:bg-white/5 transition-all duration-500"
              >
                <Icon size={20} />
              </a>
              
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[10px]">The Studio</h4>
          <ul className="space-y-5">
            <li><button onClick={() => setView('home')} className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Home</button></li>
            <li><button onClick={() => setView('about')} className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Archives</button></li>
          {/*  <li><button onClick={() => setView('services')} className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Capabilities</button></li>
            <li><button onClick={() => setView('portfolio')} className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Exhibitions</button></li>*/}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-[0.4em] text-[10px]">Inquiries</h4>
          <ul className="space-y-5">
            <li><button onClick={() => setView('contact')} className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Consultation</button></li>
           {/* <li><a href="#" className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Press Kit</a></li>
            <li><a href="#" className="text-slate-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Confidentiality</a></li>*/}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Forefront Digital Solution. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-12">
          {/*<span className="text-[9px] text-slate-800 font-black uppercase tracking-[0.4em]">Integrated with Gemini 3.0</span>
          <span className="text-[9px] text-[#C5A059]/40 font-black uppercase tracking-[0.4em]">Elite Precision</span>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;