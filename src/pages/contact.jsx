export default function Contact() {
  return (
<section id="contact" className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          Contact Lady Doak College
        </h1>
        <p className="text-gray-400 mt-4">
          Get in touch with us for queries, admissions, or collaborations.
        </p>

        {/* Contact Cards */}
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
            <p className="text-gray-400">
              info@ladydoakcollege.edu.in
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center bg-white/5 backdrop-blur-md p-8 rounded-xl border border-blue-900 hover:border-blue-100 transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Follow Us</h2>
            <div className="flex gap-6 text-blue-400 text-xl">
              <a href="https://facebook.com/ladydoakcollegeofficial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/LadyDoakCollege" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/ladydoakcollegeofficial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}