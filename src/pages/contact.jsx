export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- CONTACT SECTION --- */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            Contact Lady Doak College
          </h1>
          <p className="text-gray-400 mt-4">
            Get in touch with us for queries, admissions, or collaborations.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            {/* Address */}
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-900 hover:border-blue-400 transition duration-300">
              <i className="fas fa-map-marker-alt text-blue-400 text-xl mb-4"></i>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Address</h2>
              <p className="text-gray-400">
                Lady Doak College, <br />
                68, High Ground Road, <br />
                Race Course, Madurai – 625002, Tamil Nadu, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-900 hover:border-blue-400 transition duration-300">
              <i className="fas fa-phone-alt text-blue-400 text-xl mb-4"></i>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Phone</h2>
              <p className="text-gray-400">
                +91 452 253 0633 <br />
                +91 452 253 0351
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-900 hover:border-blue-400 transition duration-300">
              <i className="fas fa-envelope text-blue-400 text-xl mb-4"></i>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Email</h2>
              <p className="text-gray-400">info@ladydoakcollege.edu.in</p>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-900 hover:border-blue-100 transition duration-300">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Follow Us</h2>
              <div className="flex gap-6 text-blue-400 text-xl">
                <a href="https://facebook.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/..." target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- EVENT FOOTER SECTION (From Image) --- */}
        <div className="mt-32 pt-16 border-t border-blue-900/50">
          
          {/* Logos */}
          <div className="flex justify-center items-center gap-12 mb-12 opacity-80">
             <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">🏫</div> 
             <div className="w-24 h-10 bg-white/10 rounded flex items-center justify-center text-[10px]">TARCIN</div>
             <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">🛡️</div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-[0.2em] mb-2">PYHACZ 2026</h2>
            <p className="text-blue-400/80 text-sm uppercase tracking-widest">
              Department of Computer Science | <span className="text-white">Thiagarajar College, Madurai</span>
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left max-w-5xl mx-auto px-4">
            <div>
              <h4 className="text-blue-500 font-bold text-xs uppercase tracking-tighter mb-3">Principal</h4>
              <p className="text-xl font-semibold">Dr. D. Pandiaraja</p>
            </div>

            <div>
              <h4 className="text-blue-500 font-bold text-xs uppercase tracking-tighter mb-3">Head of Department</h4>
              <p className="text-xl font-semibold">Mrs. SM. Velli</p>
              <p className="text-xl font-semibold">Dr. G. Rabesh Hod (ic)</p>
            </div>

            <div>
              <h4 className="text-blue-500 font-bold text-xs uppercase tracking-tighter mb-3">Organizing Secretaries</h4>
              <p className="text-xl font-semibold">Dr. T.S. Urmila</p>
              <p className="text-xl font-semibold">Dr. M. Kavitha</p>
            </div>
          </div>

          {/* Final Copyright */}
          <div className="mt-20 text-center text-[11px] text-gray-500 uppercase tracking-widest space-y-2">
            <p>In Collaboration with Tarcin Robotics | Institution Innovation Council (IIC)</p>
            <p>Thiagarajar College, Madurai – 77 Years of Excellence</p>
            <p className="pt-6">© 2026 PYHACZ. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </section>
  );
}