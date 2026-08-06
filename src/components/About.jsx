import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section
      id="about"
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
            About Me
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-14">
          {/* Text */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-slate-400 text-lg leading-8"
          >
            {portfolioData.aboutText}
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {portfolioData.highlights.map((item) => (
              <div
                key={item.label}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition"
              >
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-slate-200 text-lg mt-2">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;