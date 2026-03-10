import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import collegeLogo from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation links based on your project structure
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Timeline", href: "#timeline" }, // From HackathonTimeline.jsx
    { name: "Judges", href: "#judges" },
    { name: "Mentors", href: "#mentor" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#0a0a0c]/85 backdrop-blur-md text-white sticky top-0 z-[100] border-b border-blue-500/20 shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LEFT BRANDING */}
        <div className="flex items-center gap-3">
          <img src={collegeLogo} className="h-10 object-contain" alt="LDC" />
          <h1
            className="text-lg md:text-xl font-black text-blue-400 tracking-tighter uppercase italic leading-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            LADY DOAK <span className="text-white">COLLEGE</span>
          </h1>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-blue-400 transition-all group"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 shadow-[0_0_8px_#3b82f6] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT LOGO & MOBILE TOGGLE */}
        <div className="flex items-center gap-5">
          <div className="p-1 rounded-full border border-blue-500/30 bg-blue-500/5 hidden sm:block">
            <img src={tarcinlogo} className="h-8 w-8 rounded-full object-cover" alt="Tarcin" />
          </div>
          
          <button
            className="lg:hidden p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0a0c] border-t border-blue-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-black uppercase tracking-widest text-gray-300 hover:text-blue-400 flex items-center gap-3"
                >
                  <Terminal size={14} className="text-blue-500" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}