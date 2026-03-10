import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import Lucide icons
import {
  Zap,
  Calendar,
  Users,
  Trophy,
  MapPin,
  CalendarDays
} from "lucide-react";

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

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        {/* Central Radial Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.15)_0%,_transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          {/* TROPHY: Floating + Glowing + Rotating */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 360] // Added 360 rotation
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 10, repeat: Infinity, ease: "linear" } // Constant rotation
            }}
            className="mb-6 relative"
          >
            <img
              src={trophy}
              alt="Hackathon Trophy"
              /* Changed w-45 to w-[200px] and w-60 to md:w-[300px] */
              className="w-[200px] md:w-[300px] mx-auto drop-shadow-[0_0_45px_rgba(59,130,246,0.6)]"
            />
          </motion.div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
              In Collaboration With <span className="text-white font-bold ml-1 italic">TARCIN</span>
            </p>
          </div>

          {/* Enhanced Typography for Title */}
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none m-0 uppercase italic bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            LDC PYHACZ
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-blue-500 mt-[-10px] md:mt-[-20px] tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            2026
          </h2>

          <p className="mt-8 text-blue-400 font-bold tracking-[0.2em] text-xs md:text-sm uppercase max-w-2xl mx-auto px-4">
            Build Real-World Solutions Through Innovation and Teamwork
          </p>

          <div className="mt-8 flex items-center justify-center gap-8 text-gray-400 text-[11px] font-mono tracking-widest bg-black/40 py-3 px-8 rounded-xl border border-white/5 backdrop-blur-md">
            <span className="flex items-center gap-2 uppercase">
              <CalendarDays size={14} className="text-blue-500" /> 26 JAN & 03 FEB 2026
            </span>
            <span className="flex items-center gap-2 text-blue-300 uppercase">
              <MapPin size={14} className="text-blue-400" /> APZLAB, Lady Doak College
            </span>
          </div>
        </motion.div>

        {/* --- STAT CARDS --- */}
        <StatCard
          position="left-[8%] top-[30%]"
          textColor="text-[#FACC15]"
          delay={0.2}
          borderColor="border-orange-500/50"
          icon={<Zap size={32} className="text-orange-500" />}
          label="Total Submissions"
          value={1819}
          isCount
        />

        <StatCard
          position="left-[8%] bottom-[15%]"
          textColor="text-[#FACC15]"
          delay={0.4}
          borderColor="border-blue-500/50"
          icon={<Calendar size={32} className="text-blue-400" />}
          label="Days Hackathon"
          value={10}
        />

        <StatCard
          position="right-[8%] top-[30%]"
          textColor="text-[#60A5FA]"
          delay={0.6}
          borderColor="border-purple-500/50"
          icon={<Users size={32} className="text-purple-500" />}
          label="Teams Joined"
          value={76}
          isCount
        />

        <StatCard
          position="right-[8%] bottom-[15%]"
          textColor="text-[#60A5FA]"
          delay={0.8}
          borderColor="border-yellow-500/50"
          icon={<Trophy size={32} className="text-yellow-500" />}
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
      className={`hidden xl:flex flex-col items-center justify-center absolute ${position} 
      bg-[#0a0a0c]/80 backdrop-blur-xl p-6 rounded-[2.5rem] w-64 h-44 text-center 
      border-t border-l border-white/10 ${borderColor} 
      shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden z-20`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100"
        style={{ background: "conic-gradient(from 0deg, transparent, #3b82f6, transparent 25%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[1.5px] bg-[#0c0c0e]/95 rounded-[2.4rem] z-0" />

      <div className="relative z-20" style={{ transform: "translateZ(40px)" }}>
        <motion.div
          className="mb-2 flex justify-center"
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
    </motion.div>
  );
}