import { motion } from "framer-motion";

export default function HackathonTimeline() {
  const timeline = [
    { time: "08:30 AM", event: "Participant Registration", description: "Teams arrived and completed registration at the welcome desk.", color: "blue" },
    { time: "09:00 AM", event: "Opening Ceremony", description: "Hackathon inaugurated by college management and event organizers.", color: "gold" },
    { time: "09:30 AM", event: "Problem Statement Release", description: "Participants selected domains and started brainstorming solutions.", color: "blue" },
    { time: "10:00 AM", event: "Hackathon Coding Begins", description: "Teams started building innovative software and hardware solutions.", color: "gold" },
    { time: "01:00 PM", event: "Lunch Break", description: "Participants had lunch and networking session with mentors.", color: "blue" },
    { time: "02:00 PM", event: "Project Development", description: "Teams continued development with mentor guidance and reviews.", color: "gold" },
    { time: "04:30 PM", event: "Project Submission", description: "Teams submitted their final projects for evaluation.", color: "blue" },
    { time: "05:00 PM", event: "Judging Round", description: "Judges evaluated projects based on innovation, feasibility and impact.", color: "gold" },
    { time: "06:00 PM", event: "Prize Distribution", description: "Top teams were awarded prizes and certificates.", color: "blue" }
  ];

  return (
    <section id="timeline" className="py-32 bg-[#050505] text-white relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-[9px] tracking-[0.4em] text-gray-400 uppercase font-black">Roadmap & Analytics</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            Event <span className="text-blue-500 text-6xl md:text-8xl">Insight</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* MAIN DUAL COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: TIMELINE (7/12 width) */}
          <div className="lg:col-span-7 relative border-l-2 border-white/5 ml-4 md:ml-0">
            {/* Glowing Line Overlay */}
            <div className="absolute top-0 left-[-2px] w-[2px] h-full bg-gradient-to-b from-blue-600 via-[#facc15] to-blue-600 opacity-20" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-12 ml-10 relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[51px] top-1.5 w-5 h-5 rounded-full border-4 border-[#050505] z-20 transition-all duration-500 group-hover:scale-125
                  ${item.color === 'blue' ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]' : 'bg-[#facc15] shadow-[0_0_15px_rgba(250,204,21,0.6)]'}`} 
                />

                {/* Glass Card */}
                <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-6 rounded-[2rem] border-t border-l border-white/10 border-blue-500/10 shadow-2xl transition-all duration-300 group-hover:border-blue-500/40 group-hover:translate-x-2">
                  <span className={`font-mono text-xs font-black tracking-widest ${item.color === 'blue' ? 'text-blue-400' : 'text-[#facc15]'}`}>
                    {item.time}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-white mt-1 mb-2 group-hover:text-blue-400 transition-colors">
                    {item.event}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN: HIGHLIGHTS PANEL (5/12 width) - Sticky for better UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-6"
          >
            {/* Stats Card */}
            <div className="bg-[#0a0a0c]/80 backdrop-blur-3xl p-8 rounded-[3rem] border-t-2 border-l-2 border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic">DATA</div>
              
              <h3 className="text-3xl font-black mb-8 text-white italic uppercase tracking-tighter flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-500" />
                Live Highlights
              </h3>

              <div className="space-y-5">
                {[
                  { label: "Total Teams", val: "42", color: "text-white" },
                  { label: "Total Participants", val: "168", color: "text-white" },
                  { label: "Software Projects", val: "28", color: "text-blue-400" },
                  { label: "Hardware Projects", val: "14", color: "text-[#facc15]" },
                  { label: "Departments", val: "06", color: "text-white" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 group">
                    <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold group-hover:text-gray-200 transition-colors">{stat.label}</span>
                    <span className={`text-xl font-black ${stat.color}`}>{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Domains Section */}
              <h4 className="text-lg font-black mt-12 mb-6 text-[#facc15] uppercase tracking-tighter italic">
                Focus Domains
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence", "Agriculture Tech", "Healthcare", 
                  "Smart Education", "IoT", "Sustainability"
                ].map((tag, i) => (
                  <span key={i} className="bg-blue-600/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-[9px] uppercase font-black tracking-widest hover:bg-blue-600/30 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Minor info box */}
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent p-6 rounded-[2rem] border border-white/10 text-center">
              <p className="text-[10px] text-blue-300 uppercase tracking-[0.3em] font-bold italic">
                Final Evaluation: 26 JAN 2026
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}