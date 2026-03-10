import React from "react";
import { motion } from "framer-motion";
import { Play, Sparkles, Clock, Target, Zap, Trophy, Terminal } from "lucide-react";

export default function EventHighlights() {
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube ID

  const stats = [
    { label: "Duration", val: "24 Hours", sub: "Non-stop Coding", icon: <Clock size={20}/>, color: "text-blue-400" },
    { label: "Participation", val: "50+ Teams", sub: "Pan-India", icon: <Target size={20}/>, color: "text-yellow-500" },
    { label: "Innovation", val: "06 Domains", sub: "Problem Statements", icon: <Zap size={20}/>, color: "text-blue-400" },
    { label: "Rewards", val: "₹50K", sub: "Total Prize Pool", icon: <Trophy size={20}/>, color: "text-yellow-500" },
  ];

  return (
    <section id="highlights" className="py-24 bg-[#050505] text-white relative overflow-hidden font-sans border-b border-white/5">
      
      {/* Background Accents - Matches your Home theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase"
          >
             <Sparkles size={14} /> The Grand Recap
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic text-white">
            PYHACZ <span className="text-blue-500">Recap</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: VIDEO PLAYER WITH GLOW */}
          <div className="relative group">
            {/* Cyber Glow effect */}
            <div className="absolute -inset-2 bg-blue-600 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
            
            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#0a0a0c] border border-white/10 shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`}
                title="Hackathon Highlights"
                allowFullScreen
              />
            </div>
            {/* Floating HUD Label */}
            <div className="absolute -bottom-4 right-8 bg-blue-600 px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
               <Play size={14} className="fill-current text-white" />
               <span className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Live Playback</span>
            </div>
          </div>

          {/* RIGHT SIDE: QUICK STATS & DETAILS */}
          <div className="space-y-6">
            <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-blue-500">
                 <Terminal size={100} />
              </div>
              
              <h3 className="text-xl font-black mb-8 uppercase tracking-[0.2em] flex items-center gap-3 text-white">
                <span className="w-8 h-[2px] bg-blue-500" /> Mission Briefing
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group"
                  >
                    <div className={`${item.color} mb-3 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                    <div className="text-2xl font-black text-white">{item.val}</div>
                    <div className={`text-[10px] ${item.color} font-black uppercase tracking-widest`}>{item.label}</div>
                    <div className="text-[9px] text-gray-500 mt-1 uppercase tracking-tighter font-medium">{item.sub}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-gray-400 text-xs leading-relaxed italic font-medium">
                  "PYHACZ 2026 brought together the brightest minds to solve real-world challenges through code and collaboration."
                </p>
                <div className="mt-4 flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
                   <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">System Status: Operation Complete</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}