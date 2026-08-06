import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Education() {
  return (
    <section
      id="education"
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
            Education
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
            Academic Background
          </h2>
        </motion.div>

        {/* Education */}
        <div className="mt-14 space-y-6">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition flex flex-col sm:flex-row sm:items-center gap-6"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl text-cyan-400">
                <FaGraduationCap />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p className="text-slate-300 mt-1">{edu.degree}</p>
                <p className="text-slate-400 text-sm mt-1">{edu.detail}</p>
              </div>

              <span className="text-cyan-400 font-semibold whitespace-nowrap">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {portfolioData.certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.verify}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-cyan-500 transition flex items-start gap-4"
              >
                <div className="text-cyan-400 text-xl mt-1">
                  <FaCertificate />
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-slate-100">
                    {cert.title}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>

                {cert.verify && (
                  <FaExternalLinkAlt className="text-slate-500 text-sm mt-1 shrink-0" />
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;