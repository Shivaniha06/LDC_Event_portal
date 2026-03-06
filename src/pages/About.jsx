import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Years of Excellence", value: "75+", color: "text-[#facc15]", border: "border-orange-500/40" },
    { label: "Departments", value: "30+", color: "text-blue-400", border: "border-blue-500/40" },
    { label: "Active Students", value: "3000+", color: "text-[#facc15]", border: "border-orange-500/40" },
    { label: "NAAC Grade", value: "A+", color: "text-blue-400", border: "border-blue-500/40" },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#050505] text-white py-32 px-6 relative overflow-hidden font-sans">
      
      {/* Background Decor: Subtle Grid & Glow */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `radial-gradient(#1e40af 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: Centered & Minimal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/5 border border-blue-500/20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Institutional Profile</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none">
            Lady Doak <span className="text-blue-500">College</span>
          </h1>
          
          <div className="h-1.5 w-32 bg-blue-600 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
        </motion.div>

        {/* MAIN CONTENT: 2-Column Professional Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#0a0a0c]/40 backdrop-blur-xl p-10 rounded-[3rem] border-t-2 border-l-2 border-white/10 shadow-2xl relative">
              <h2 className="text-2xl font-black text-blue-500 uppercase tracking-tighter mb-4 italic">Visionary Excellence</h2>
              <p className="text-gray-400 leading-relaxed text-lg font-medium">
                A prestigious autonomous institution committed to academic excellence and leadership development. 
                Lady Doak College envisions empowering women through transformative education, 
                fostering innovation, research, and community engagement.
              </p>
              {/* Subtle glass accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
            </div>

            {/* Values as horizontal pills instead of list */}
            <div className="flex flex-wrap gap-3">
              {['Excellence', 'Social Responsibility', 'Leadership', 'Innovation'].map((v, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  // {v}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Grid (Compact) */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border-t-2 border-l-2 ${stat.border} shadow-2xl group transition-all duration-300`}
              >
                <h2 className={`text-5xl font-black tracking-tighter ${stat.color} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.value}
                </h2>
                <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-black group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM ACCENT: Logo/Sponsor Area Style divider */}
        <div className="border-t border-white/5 pt-12 text-center opacity-40">
          <p className="text-[10px] tracking-[0.5em] font-bold text-gray-600 uppercase italic">Established 1948 • Madurai, India</p>
        </div>

      </div>
    </section>
  );
}