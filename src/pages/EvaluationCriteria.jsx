import { motion } from "framer-motion";

export default function EvaluationCriteria() {

  const criteria = [
    { title: "Functional Correctness", score: 20 },
    { title: "Logical Structure", score: 10 },
    { title: "Code Quality & Readability", score: 10 },
    { title: "Optimization / Innovation", score: 5 },
    { title: "Documentation / Insights", score: 5 }
  ];

  return (
    <section className="py-28 bg-[#050505] text-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-black italic uppercase">
            Evaluation <span className="text-blue-500">Criteria</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Maximum Marks per Problem
          </p>

        </motion.div>

        {/* TABLE */}
        <div className="bg-[#0a0a0c]/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl overflow-hidden shadow-xl">

          {/* HEADER ROW */}
          <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10 text-sm uppercase tracking-wider text-blue-400 font-bold">

            <span>Criteria</span>
            <span className="text-center">Score</span>
            <span className="text-right">Max Marks</span>

          </div>

          {/* BODY ROWS */}
          {criteria.map((item,index)=>(

            <div
              key={index}
              className="grid grid-cols-3 px-8 py-6 border-b border-white/5 hover:bg-white/5 transition"
            >

              <span className="font-medium">
                {item.title}
              </span>

              <span className="text-center text-yellow-400 font-bold">
                {item.score}
              </span>

              <span className="text-right text-gray-400">
                50
              </span>

            </div>

          ))}

          {/* TOTAL ROW */}
          <div className="grid grid-cols-3 px-8 py-6 bg-blue-600/10">

            <span className="font-bold text-lg">
              Total Score
            </span>

            <span className="text-center text-yellow-400 font-black text-xl">
              50
            </span>

            <span className="text-right text-gray-400">
              / 50
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}