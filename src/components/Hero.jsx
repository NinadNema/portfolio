import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";
import IdCard from "./Idcard";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 text-lg md:text-xl font-medium mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent leading-tight">
              {portfolioData.name}
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold mt-4 text-slate-200">
              {portfolioData.role}
            </h2>

            <p className="text-lg text-cyan-400 mt-2 font-medium">
              {portfolioData.subtitle}
            </p>

            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {portfolioData.description}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5 mt-8 sm:mt-10">
              <a
                href="./Ninad Nemawarkar Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download="Ninad_Nemawarkar_Resume.pdf"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-7 py-3.5 rounded-xl font-semibold transition hover:shadow-[0_0_25px_#06b6d4] text-center"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-cyan-500/80 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 px-7 py-3.5 rounded-xl font-semibold transition text-center"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 mt-8 sm:mt-10 text-2xl sm:text-3xl">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a
                href={portfolioData.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <IdCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;