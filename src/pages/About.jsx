export default function About() {
  return (
   <section id="about" className="min-h-screen bg-gradient-to-br from-black via-[#050816] to-blue-950 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold 
        text-blue-400 tracking-wide
        drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
          About Lady Doak College
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Lady Doak College, Madurai, is a prestigious autonomous women's
          institution committed to academic excellence, leadership development,
          and holistic education. The college fosters innovation, research, and
          social responsibility among students.
        </p>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {/* Years of Excellence */}
          <div className="bg-[#0c0c0c] p-6 rounded-2xl border border-blue-900 
          hover:border-blue-400 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
          transition duration-300">

            <h2 className="text-4xl font-bold text-blue-400">75+</h2>
            <p className="text-gray-400 mt-2">Years of Excellence</p>
          </div>

          {/* Departments */}
          <div className="bg-[#0c0c0c] p-6 rounded-2xl border border-blue-900 
          hover:border-blue-400 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
          transition duration-300">

            <h2 className="text-4xl font-bold text-blue-400">30+</h2>
            <p className="text-gray-400 mt-2">Departments</p>
          </div>

          {/* Students */}
          <div className="bg-[#0c0c0c] p-6 rounded-2xl border border-blue-900 
          hover:border-blue-400 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
          transition duration-300">

            <h2 className="text-4xl font-bold text-blue-400">3000+</h2>
            <p className="text-gray-400 mt-2">Students</p>
          </div>

          {/* Accreditation */}
          <div className="bg-[#0c0c0c] p-6 rounded-2xl border border-blue-900 
          hover:border-blue-400 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] 
          transition duration-300">

            <h2 className="text-4xl font-bold text-blue-400">A+</h2>
            <p className="text-gray-400 mt-2">NAAC Accreditation</p>
          </div>

        </div>

        {/* Vision Section */}
        <div className="mt-20 max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold text-blue-400 mb-4">
             Vision & Mission
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Lady Doak College envisions empowering women through transformative
            education, fostering leadership, innovation, research, and community
            engagement. The institution nurtures ethical values and prepares
            students to excel globally while serving society.
          </p>

        </div>

      </div>
    </section>
  );
}