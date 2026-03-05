import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Zap } from "lucide-react";

export default function Teams() {
  const eliteTeams = [
    {
      name: "Binary Builders",
      lead: "Bhuvanesh N",
      member: "Om Vignesh S",
      mentor: "Lalitha Mohana R S",
      points: 2780,
      tasks: 100,
      rank: 2,
      icon: <Award className="w-12 h-12 text-slate-400" />,
      order: "order-2 md:order-1", // Left on desktop
    },
    {
      name: "Code Queens",
      lead: "Lakshitha Devi S",
      member: "Devadharshini G",
      mentor: "Jothismathi S",
      points: 2847,
      tasks: 102,
      rank: 1,
      icon: <Trophy className="w-16 h-16 text-yellow-500" />,
      featured: true,
      order: "order-1 md:order-2", // Center on desktop
    },
    {
      name: "Logic Loop",
      lead: "Srinidhi K",
      member: "Rubika M",
      mentor: "Suvetha S",
      points: 2705,
      tasks: 98,
      rank: 3,
      icon: <Medal className="w-12 h-12 text-orange-700" />,
      order: "order-3 md:order-3", // Right on desktop
    },
  ];

  const teams = [
    { name: "Alpha Logic", lead: "Shalini S", tasks: 64, points: 1767 },
    { name: "Runtime Rebels", lead: "Nivesh N S", tasks: 52, points: 1436 },
    { name: "Coding Beast", lead: "Sivadharshini M", tasks: 50, points: 1378 },
    { name: "Tech Titans", lead: "Deepasri J P", tasks: 29, points: 779 },
    { name: "Code Crafters", lead: "Vaishnavi K A", tasks: 28, points: 769 },
    { name: "MindSpark", lead: "Jerine Priya D", tasks: 26, points: 683 },
    { name: "Twin Thinkers", lead: "Archana Devi K", tasks: 28, points: 673 },
  ];

  return (
    <section id="teams" className="min-h-screen bg-[#03050c] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-blue-500 uppercase tracking-[0.3em] font-bold text-xs mb-3">
            Top Performers
          </h2>
          <h1 className="text-6xl font-black tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            Elite Squadrons
          </h1>
        </motion.div>

        {/* TOP 3 PODIUM */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 lg:gap-8 mb-32">
          {eliteTeams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className={`relative flex flex-col items-center p-8 rounded-[40px] w-full md:w-1/3 border transition-all
                ${team.order}
                ${team.featured 
                  ? "bg-gradient-to-b from-[#0f172a] to-[#03050c] border-yellow-500/50 min-h-[520px] shadow-[0_0_60px_rgba(234,179,8,0.1)] z-10" 
                  : "bg-[#0a0f20]/40 border-white/5 min-h-[440px] shadow-2xl"
                }`}
            >
              <motion.div 
                animate={team.featured ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                {team.icon}
              </motion.div>

              <h2 className="text-3xl font-black text-center mb-2 uppercase tracking-tight leading-tight">
                {team.name}
              </h2>
              <p className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-6">
                Mentor: {team.mentor}
              </p>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

              <div className="space-y-2 text-center mb-8">
                <p className="text-gray-400 text-sm italic">Lead: {team.lead}</p>
                <p className="text-gray-400 text-sm italic">Member: {team.member}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                <div className="text-center bg-white/5 p-4 rounded-3xl border border-white/5">
                  <p className="text-2xl font-black text-blue-400">{team.points}</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Points</p>
                </div>
                <div className="text-center bg-white/5 p-4 rounded-3xl border border-white/5">
                  <p className="text-2xl font-black text-blue-400">{team.tasks}</p>
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Tasks</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LEADERBOARD LIST */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-4 mb-10">
             <h2 className="text-4xl font-black tracking-tight">Leaderboard</h2>
             <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="space-y-4">
            {teams.sort((a,b) => b.points - a.points).map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                className="group flex items-center justify-between bg-[#0a0f20]/60 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all cursor-default"
              >
                <div className="flex items-center gap-8">
                  <span className="text-2xl font-black text-gray-700 group-hover:text-blue-500 transition-colors w-10">
                    #{index + 4}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">Lead: {team.lead}</p>
                  </div>
                </div>

                <div className="flex gap-12 text-right">
                  <div className="hidden sm:block">
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-1">Tasks</p>
                    <div className="flex items-center gap-2 justify-end">
                       <Zap className="w-3 h-3 text-blue-500" />
                       <span className="font-bold">{team.tasks}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-bold mb-1">Total Score</p>
                    <p className="text-xl font-black text-blue-400">{team.points.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}