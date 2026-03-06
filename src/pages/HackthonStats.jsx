import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Reusable CountUp for the stats
const StatNumber = ({ end }) => {
  const [count, setCount] = useState(0);
  
  return (
    <motion.span
      onViewportEnter={() => {
        let start = 0;
        const duration = 2; // seconds
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
      }}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

export default function HackathonStats() {
  const stats = [
    { label: "Teams Participated", value: 40, icon: "👥", color: "text-[#facc15]" },
    { label: "Participants", value: 160, icon: "🔥", color: "text-blue-400" },
    { label: "Departments", value: 12, icon: "🏢", color: "text-[#facc15]" },
    { label: "Problem Statements", value: 15, icon: "💡", color: "text-blue-400" },
    { label: "Mentors", value: 8, icon: "🧠", color: "text-[#facc15]" },
    { label: "Judges", value: 5, icon: "⚖️", color: "text-blue-400" },
  ];

  return (
    <section className="bg-[#050505] text-white py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black tracking-tighter uppercase italic">
            Event <span className="text-blue-500">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2rem] border-t border-l border-white/10 border-blue-500/20 shadow-2xl group cursor-default"
            >
              <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 block">
                {stat.icon}
              </div>
              
              <h3 className={`text-5xl font-black tracking-tighter ${stat.color}`}>
                <StatNumber end={stat.value} />+
              </h3>
              
              <p className="mt-2 text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-gray-300 transition-colors">
                {stat.label}
              </p>

              {/* Bottom Decorative Line */}
              <div className="w-0 group-hover:w-full h-[2px] bg-blue-500 mt-4 transition-all duration-500 opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}