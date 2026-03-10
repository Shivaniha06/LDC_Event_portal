import { motion } from "framer-motion";

export default function HackathonTimeline() {
  const milestones = [
    { 
      phase: "08:30 AM - 10:00 AM", 
      title: "Kickoff", 
      events: "Registration • Opening Ceremony",
      desc: "Briefing on problem statements and team synchronization.",
      color: "blue" 
    },
    { 
      phase: "10:00 AM - 01:00 PM", 
      title: "Build Phase I", 
      events: "Core Development • Mentoring",
      desc: "Architecting solutions and initial prototyping under expert guidance.",
      color: "gold" 
    },
    { 
      phase: "02:00 PM - 04:30 PM", 
      title: "Build Phase II", 
      events: "Integration • Testing",
      desc: "Final coding sprints, hardware assembly, and project refinement.",
      color: "blue" 
    },
    { 
      phase: "05:00 PM - 06:30 PM", 
      title: "Finale", 
      events: "Judging • Awards",
      desc: "Evaluation of innovation and impact followed by prize distribution.",
      color: "gold" 
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* COMPACT HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">
              Event <span className="text-blue-500">Timeline</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mt-3 rounded-full" />
          </div>
          <p className="text-gray-400 text-sm max-w-xs uppercase tracking-widest font-bold opacity-60">
            A high-intensity roadmap of innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* COMPACT TIMELINE */}
          <div className="lg:col-span-7 space-y-4">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-start gap-6 bg-[#0a0a0c]/40 hover:bg-[#0a0a0c]/80 border border-white/5 p-5 rounded-3xl transition-all duration-300"
              >
                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.color === 'blue' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' : 'bg-[#facc15] shadow-[0_0_10px_#facc15]'}`} />
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors uppercase italic">{item.title}</h3>
                    <span className="font-mono text-[10px] text-gray-500 font-bold bg-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {item.phase}
                    </span>
                  </div>
                  <p className="text-blue-500/80 text-[11px] font-black uppercase tracking-[0.1em] mb-1">{item.events}</p>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SIDE DATA PANEL */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0a0a0c] to-black p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
              <h4 className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-8 italic">Hackathon Metrics</h4>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Teams", val: "42" },
                  { label: "Coders", val: "168" },
                  { label: "Domains", val: "06" },
                  { label: "Prize Pool", val: "High" }
                ].map((stat, i) => (
                  <div key={i} className="border-l border-white/10 pl-4">
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{stat.label}</p>
                    <p className="text-2xl font-black text-white">{stat.val}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-4">Priority Focus</p>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "IoT", "Sustainable Tech", "HealthTech"].map((tag, i) => (
                    <span key={i} className="text-[9px] font-black bg-blue-500/5 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-md uppercase tracking-tighter hover:bg-blue-500/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 p-1 rounded-[2rem]">
                <div className="bg-black p-4 rounded-[1.8rem] text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">Venue: Dept of CS, LDC</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}