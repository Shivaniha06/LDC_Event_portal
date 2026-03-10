import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
// Import the Tarcin logo asset
import TarcinL from "../assets/TarcinL.png"; 

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] text-white py-28 px-6 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter italic uppercase">
            Contact <span className="text-blue-500">Us</span>
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />

          <p className="text-gray-400 mt-6 text-sm max-w-xl mx-auto">
            Get in touch with us for queries, admissions or collaborations.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* ADDRESS */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-blue-500/20 text-center hover:border-blue-500/40 transition">
            <MapPin className="mx-auto mb-4 text-blue-400 w-7 h-7" />
            <h2 className="text-lg font-bold uppercase tracking-wider text-blue-400 mb-3">
              Address
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lady Doak College <br />
              68, High Ground Road <br />
              Race Course, Madurai – 625002 <br />
              Tamil Nadu, India
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-blue-500/20 text-center hover:border-blue-500/40 transition">
            <Phone className="mx-auto mb-4 text-blue-400 w-7 h-7" />
            <h2 className="text-lg font-bold uppercase tracking-wider text-blue-400 mb-3">
              Phone
            </h2>
            <p className="text-gray-400 text-sm">
              +91 452 253 0633 <br />
              +91 452 253 0351
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-blue-500/20 text-center hover:border-blue-500/40 transition">
            <Mail className="mx-auto mb-4 text-blue-400 w-7 h-7" />
            <h2 className="text-lg font-bold uppercase tracking-wider text-blue-400 mb-3">
              Email
            </h2>
            <p className="text-gray-400 text-sm">
              info@ladydoakcollege.edu.in
            </p>
          </div>

          {/* SOCIAL */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-blue-500/20 text-center hover:border-blue-500/40 transition">
            <h2 className="text-lg font-bold uppercase tracking-wider text-blue-400 mb-4">
              Follow Us
            </h2>
            <div className="flex justify-center gap-6 text-blue-400">
              <a href="#" className="hover:text-blue-300 transition">
                <Facebook size={20}/>
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <Twitter size={20}/>
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <Instagram size={20}/>
              </a>
            </div>
          </div>

        </div>

        {/* EVENT FOOTER */}
        <div className="mt-32 pt-16 border-t border-white/10">

          {/* LOGOS WITH TARCIN IMAGE */}
          <div className="flex justify-center items-center gap-12 mb-12">
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-400 opacity-60">LDC</div>
            
            {/* Tarcin Image Section */}
            <div className="relative group opacity-80 hover:opacity-100 transition-opacity">
              <img 
                src={TarcinL} 
                alt="Tarcin Robotics" 
                className="h-10 md:h-12 w-auto object-contain brightness-110" 
              />
            </div>

            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-bold text-gray-400 opacity-60">IIC</div>
          </div>

          {/* EVENT TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-[0.2em]">
              PYHACZ <span className="text-blue-500">2026</span>
            </h2>

            <p className="text-blue-400/80 text-xs uppercase tracking-[0.3em] mt-2">
              Department of Computer Science
            </p>
          </div>

          {/* FACULTY GRID */}
          <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            <div>
              <h4 className="text-blue-500 text-xs uppercase tracking-widest mb-3">
                Principal
              </h4>
              <p className="text-lg font-semibold">Dr. D. Pandiaraja</p>
            </div>

            <div>
              <h4 className="text-blue-500 text-xs uppercase tracking-widest mb-3">
                Head of Department
              </h4>
              <p className="text-lg font-semibold">Mrs. SM. Velli</p>
              <p className="text-lg font-semibold">Dr. G. Rabesh (IC)</p>
            </div>

            <div>
              <h4 className="text-blue-500 text-xs uppercase tracking-widest mb-3">
                Organizing Secretaries
              </h4>
              <p className="text-lg font-semibold">Dr. T.S. Urmila</p>
              <p className="text-lg font-semibold">Dr. M. Kavitha</p>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-20 text-center text-[10px] text-gray-500 uppercase tracking-[0.3em] space-y-2">
            <p>In Collaboration with Tarcin Robotics | Institution Innovation Council</p>
            <p>Thiagarajar College, Madurai – 77 Years of Excellence</p>
            <p className="pt-6">© 2026 PYHACZ. All Rights Reserved.</p>
          </div>

        </div>

      </div>
    </section>
  );
}