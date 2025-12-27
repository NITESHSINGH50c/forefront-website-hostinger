
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User as UserIcon, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const AIChatAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to ForeFront Digital Solution. I am Nova, your digital concierge. How may I assist your inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Always initialize with API key from process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Sending full conversation history for context-aware responses
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: newMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are Nova, the digital concierge for ForeFront Digital Solution(formerly NovaDigital), a luxury-tier digital engineering firm. 
          Your tone must be sophisticated, helpful, and highly professional. Use terms like "inquiry", "artifact", "bespoke", "excellence".
          Studio facts: 
          - Services: Premium Website Development, High-End Mobile Apps, Product Architecture, Elite Design.
          - Theme: Minimalist Gold/Silver/Black Luxury.
          - Approach: Synthesis of aesthetics and high-performance engineering.
          Suggest project consultations for deep inquiries.`,
        }
      });

      // Directly access .text property from GenerateContentResponse
      const aiText = response.text || "I apologize, my cognitive processors encountered a minor interruption. Shall we continue?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, but my connection to the matrix is currently intermittent. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#C5A059] text-black rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(197,160,89,0.3)] hover:scale-110 active:scale-95 transition-all duration-500 group"
      >
        <MessageSquare size={26} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full border-4 border-[#050505] animate-pulse"></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-32 right-10 z-[60] w-[90vw] max-w-[420px] h-[550px] bg-[#0c0c0e] rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col border border-white/5"
          >
            <div className="p-8 bg-gradient-to-r from-[#0c0c0e] to-[#151518] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center border border-[#C5A059]/20">
                  <Bot className="text-[#C5A059]" size={22} />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white text-sm tracking-widest uppercase">Nova Concierge</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-pulse"></span>
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">At Your Service</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-600 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth modal-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5 ${
                    msg.role === 'user' ? 'bg-[#C5A059]/10' : 'bg-[#050505]'
                  }`}>
                    {msg.role === 'user' ? <UserIcon size={18} className="text-[#C5A059]" /> : <Bot size={18} className="text-white" />}
                  </div>
                  <div className={`p-5 rounded-[1.5rem] max-w-[80%] text-[13px] font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#C5A059] text-black rounded-tr-none' 
                      : 'bg-[#050505] text-slate-300 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/5 flex items-center justify-center shrink-0">
                    <Bot size={18} className="text-[#C5A059]" />
                  </div>
                  <div className="p-5 rounded-[1.5rem] bg-[#050505] border border-white/5 flex items-center gap-3">
                    <Loader2 size={16} className="text-[#C5A059] animate-spin" />
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Synthesizing...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-[#050505] border-t border-white/5">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask Nova anything..."
                  className="w-full bg-[#0c0c0e] border border-white/5 rounded-2xl py-4 px-6 pr-16 text-xs focus:outline-none focus:border-[#C5A059]/50 transition-all text-white font-medium"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 w-11 h-11 bg-[#C5A059] hover:bg-[#d4af37] disabled:opacity-30 text-black rounded-xl flex items-center justify-center transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatAgent;
