import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from "lucide-react";

export default function Mentors() {
  const mentors = [
    {
      name: "Dr. J. Nirmala",
      points: 12840,
      teams: 10,
      rank: 2,
      icon: <Award className="w-12 h-12 text-slate-400" />,
      order: "order-1 md:order-1", // Left
    },
    {
      name: "Dr. R. Mary Stella",
      points: 14250,
      teams: 12,
      rank: 1,
      icon: <Trophy className="w-16 h-16 text-yellow-500" />,
      featured: true,
      order: "order-first md:order-2", // Center
    },
    {
      name: "Ms. P. Kavitha",
      points: 11975,
      teams: 8,
      rank: 3,
      icon: <Medal className="w-12 h-12 text-orange-700" />,
      order: "order-2 md:order-3", // Right
    },
  ];

  return (
    <section id="mentor" className="min-h-screen bg-[#03050c] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-left"
        >
          <h2 className="text-blue-500 uppercase tracking-[0.3em] font-bold text-xs mb-3">
            Strategic Advisors
          </h2>
          <h1 className="text-6xl font-black tracking-tight">
            Top Mentors
          </h1>
        </motion.div>

        {/* Podium Grid */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-10">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: mentor.featured ? 1.05 : 1.03,
                transition: { duration: 0.2 } 
              }}
              className={`relative flex flex-col items-center p-10 rounded-[45px] w-full md:w-1/3 transition-all cursor-default
                ${mentor.order}
                ${mentor.featured 
                  ? "bg-gradient-to-b from-[#111827] to-[#03050c] border-2 border-yellow-500/40 shadow-[0_0_50px_rgba(234,179,8,0.15)] min-h-[500px] z-10" 
                  : "bg-[#0a0f20]/50 border border-white/5 backdrop-blur-sm min-h-[420px]"
                }`}
            >
              {/* Floating Animation for Rank 1 Icon */}
              <motion.div 
                animate={mentor.featured ? { y: [0, -10, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                {mentor.icon}
              </motion.div>

              {/* Name */}
              <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest leading-tight h-16 flex items-center">
                {mentor.name}
              </h2>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

              {/* Stats Layout */}
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="text-center">
                  <p className={`text-3xl font-black ${mentor.featured ? 'text-yellow-500' : 'text-white'}`}>
                    {mentor.points.toLocaleString()}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-2">
                    Total Points
                  </p>
                </div>
                <div className="text-center border-l border-gray-800">
                  <p className="text-3xl font-black">
                    {mentor.teams}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-2">
                    Teams
                  </p>
                </div>
              </div>

              {/* Rank Badge for Hover */}
              <div className="absolute top-6 right-8 text-gray-800 font-black text-4xl opacity-20">
                #{mentor.rank}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}