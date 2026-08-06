import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
            What I've Built
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition flex flex-col"
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-cyan-400 mt-1">{project.subtitle}</p>

              <p className="text-slate-400 mt-4 leading-7">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-slate-400 text-sm flex gap-2 leading-6"
                  >
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 mt-6 pt-6 border-t border-slate-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;