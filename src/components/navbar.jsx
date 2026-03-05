import { useState } from "react";
import { Menu, X } from "lucide-react";
import collegeLogo from "../assets/college-name.png";
import tarcinlogo from "../assets/tarcinlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-lg text-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
         <img src={collegeLogo} className="h-10 bg-red-500" />
          <h1
            className="text-sm md:text-xl font-bold text-blue-400 tracking-wider"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            LADY DOAK COLLEGE
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#teams" className="hover:text-blue-400 transition">Teams</a>
          <a href="#mentor" className="hover:text-blue-400 transition">Mentor</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* RIGHT LOGO */}
         <img src={tarcinlogo} className="h-10 bg-black-500" />

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black">

          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#teams" onClick={() => setIsOpen(false)}>Teams</a>
          <a href="#mentor" onClick={() => setIsOpen(false)}>Mentor</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        </div>
      )}
    </nav>
  );
}