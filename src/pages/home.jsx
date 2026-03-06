import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import trophy from "../assets/trophyy.png";
import About from "./About";
import Teams from "./team";
import Mentors from "./mentor";
import Contact from "./contact";

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count.toLocaleString()}</span>;
};

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">

        {/* REF IMG ACCENT: Subtle Grid Background */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '50px 50px' }} />

        {/* REF IMG ACCENT: Central Radial Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15)_0%,_transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          {/* TROPHY: Floating & Glowing */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6 relative"
          >
            <img
              src={trophy}
              alt="Hackathon Trophy"
              className="w-40 md:w-48 mx-auto drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
              In Collaboration With <span className="text-white font-bold ml-1 italic">TARCIN</span>
            </p>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none m-0">
            PYHACZ
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-blue-500 mt-[-15px] tracking-tight drop-shadow-[0_10px_20px_rgba(59,130,246,0.3)]">
            2026
          </h2>

          <p className="mt-8 text-blue-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase max-w-2xl mx-auto px-4">
            Build Real-World Solutions Through Innovation and Teamwork
          </p>

          <div className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-[11px] font-mono tracking-widest bg-black/40 py-2 px-6 rounded-lg border border-white/5">
            <span className="flex items-center gap-2">📅 26 JAN & 03 FEB 2026</span>
            <span className="flex items-center gap-2 text-blue-300">📍 APZLAB, Lady Doak College</span>
          </div>
        </motion.div>

        {/* --- STAT CARDS: Exactly like Reference --- */}

        {/* --- STAT CARDS --- */}

        {/* LEFT TOP: Submissions */}
       {/* STAT CARDS - LEFT SIDE (Gold/Yellow Text) */}
        {/* STAT CARDS - LEFT SIDE (Gold/Yellow Text) */}
<StatCard
  position="left-[8%] top-[30%]"
  glowColor="rgba(249, 115, 22, 0.5)" 
  textColor="text-[#FACC15]" // Vivid Gold
  align="items-end text-right"
  delay={0.2}
  borderColor="border-orange-500/50"
  icon={<span className="text-orange-500 text-3xl">⚡</span>}
  label="Total Submissions"
  value={1819}
  isCount
/>

<StatCard
  position="left-[8%] bottom-[15%]"
  glowColor="rgba(59, 130, 246, 0.5)"
  textColor="text-[#FACC15]"
  align="items-end text-right"
  delay={0.4}
  borderColor="border-blue-500/50"
  icon={<span className="text-blue-400 text-3xl">📅</span>}
  label="Days Hackathon"
  value={10}
/>

{/* STAT CARDS - RIGHT SIDE (Blue Text) */}
<StatCard
  position="right-[8%] top-[30%]"
  glowColor="rgba(168, 85, 247, 0.5)"
  textColor="text-[#60A5FA]" // Electric Blue
  align="items-start text-left"
  delay={0.6}
  borderColor="border-purple-500/50"
  icon={<span className="text-purple-500 text-3xl">👥</span>}
  label="Teams Joined"
  value={76}
  isCount
/>

<StatCard
  position="right-[8%] bottom-[15%]"
  glowColor="rgba(234, 179, 8, 0.5)"
  textColor="text-[#60A5FA]"
  align="items-start text-left"
  delay={0.8}
  borderColor="border-yellow-500/50"
  icon={<span className="text-yellow-500 text-3xl">🏆</span>}
  label="Final Winners"
  value={3}
/>
      </section>
    
    </>
  );
}
function StatCard({ position, delay, icon, label, value, isCount = false, borderColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      
      whileHover={{ 
        y: -15, 
        rotateX: 5, 
        rotateY: -5,
        boxShadow: `0 0 50px rgba(59, 130, 246, 0.3)`,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.92, rotateX: 0, rotateY: 0 }}
      
      // ALIGNMENT & PRESENTATION: Added shadow-2xl and adjusted padding
      className={`hidden xl:flex flex-col items-center justify-center absolute ${position} 
      bg-[#0a0a0c]/80 backdrop-blur-xl p-6 rounded-[2.5rem] w-64 h-44 text-center 
      border-t border-l border-white/10 ${borderColor} 
      shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden z-20`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 1. ANIMATED BORDER BEAM */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "conic-gradient(from 0deg, transparent, #3b82f6, transparent 25%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      
      {/* 2. INNER MASK */}
      <div className="absolute inset-[1.5px] bg-[#0c0c0e]/95 rounded-[2.4rem] z-0" />

      {/* 3. RAPID SCANLINE SHINE */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-active:opacity-100"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 0.4, repeat: 1 }}
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.4), transparent)",
        }}
      />

      {/* CONTENT LAYER */}
      <div className="relative z-20" style={{ transform: "translateZ(40px)" }}>
        <motion.div 
          className="text-3xl mb-1 block"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        <h3 className="text-5xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
          {isCount ? <CountUp end={value} /> : value}
        </h3>
        
        <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2 font-bold group-hover:text-blue-200 transition-all duration-300">
          {label}
        </p>
      </div>

      {/* 4. MOUSE GLOW SPOTLIGHT */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(59,130,246,0.15)_0%,_transparent_60%)]" 
      />
    </motion.div>
  );
}