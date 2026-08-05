import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";
import avatar from "../assets/images/avatar.svg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center flex items-center bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0, y: [0, -15, 0], }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut"}}
          >
            <p className="text-cyan-400 text-xl mb-3">👋 Hello, I'm</p>

            <h1 className="text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>

            <h2 className="text-3xl font-semibold mt-4 text-slate-300">
              {portfolioData.role}
            </h2>

            <p className="text-xl text-cyan-400 mt-2">
              {portfolioData.subtitle}
            </p>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              {portfolioData.description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="./Ninad Nemawarkar Resume.pdf"
                className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold transition hover:shadow-[0_0_25px_#06b6d4]"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-cyan-500 hover:bg-cyan-500 hover: tetx-white px-8 py-4 rounded-xl transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-3xl">
              <a href={portfolioData.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href={portfolioData.leetcode} target="_blank" rel="noreferrer">
                <SiLeetcode className="hover:text-cyan-400 transition" />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-40 scale-125 rounded-full"></div>

              <img
                src={avatar}
                alt="Ninad Avatar"
                className="relative w-80 h-80 rounded-full border-4 border-cyan-500 bg-slate-800 p-4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
