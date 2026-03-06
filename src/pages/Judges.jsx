import { motion } from "framer-motion";

export default function Judges() {
  const judges = [
    {
      name: "Sundhar Pitachi",
      role: "Chief Executive Officer",
      company: "Google",
      expertise: "AI & Global Strategy",
      image: "/judges/judge1.jpg" // Ensure these paths are correct in your public folder
    },
    {
      name: "Srikanth Varadhan",
      role: "Chief Executive Officer",
      company: "Zoho Corporation",
      expertise: "SaaS & Cloud Infrastructure",
      image: "/judges/judge2.jpg"
    },
    {
      name: "Ratan Dev",
      role: "Chief Executive Officer",
      company: "Tata Technologies",
      expertise: "Industrial Innovation",
      image: "/judges/judge3.jpg"
    }
  ];

  return (
    <section id="judges" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-[9px] tracking-[0.4em] text-gray-400 uppercase font-black">Evaluation Panel</p>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            Distinguished <span className="text-blue-500">Judges</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* JUDGES GRID */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-[#0a0a0c]/60 backdrop-blur-2xl p-8 rounded-[3rem] border-t-2 border-l-2 border-white/10 border-blue-500/20 shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                
                {/* Photo Glow Effect */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/40 transition-colors duration-500" />
                  <img
                    src={judge.image}
                    alt={judge.name}
                    className="w-40 h-40 rounded-full object-cover relative z-10 border-4 border-white/5 group-hover:border-blue-500/50 transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2 block">
                    {judge.company}
                  </span>
                  
                  <h3 className="text-3xl font-black tracking-tighter text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {judge.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
                    {judge.role}
                  </p>

                  <div className="h-[1px] w-12 bg-white/10 mx-auto mb-4 group-hover:w-24 transition-all duration-500" />

                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                    Expertise: <span className="text-gray-300">{judge.expertise}</span>
                  </p>
                </div>

                {/* Decorative Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Disclaimer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20 text-gray-600 text-[10px] uppercase tracking-[0.5em] font-bold"
        >
          Blind Judging Process • Innovation Metric • Scalability Score
        </motion.p>
      </div>
    </section>
  );
}