import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 text-lg font-semibold tracking-wide">
            Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {portfolioData.skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
            >
              <h3 className="text-cyan-400 font-semibold text-lg mb-4">
                {group.category}
              </h3>

              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;