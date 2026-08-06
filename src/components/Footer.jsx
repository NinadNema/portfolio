import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: portfolioData.github, icon: <FaGithub /> },
    { href: portfolioData.linkedin, icon: <FaLinkedin /> },
    { href: portfolioData.leetcode, icon: <SiLeetcode /> },
    { href: `mailto:${portfolioData.email}`, icon: <FaEnvelope /> },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          {portfolioData.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
        </a>

        <div className="flex gap-5 text-xl text-slate-400">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="hover:text-cyan-400 transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-slate-500 text-sm">
          © {year} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;