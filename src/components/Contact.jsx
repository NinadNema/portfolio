import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";

function Contact() {
  const links = [
    {
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      icon: <FaEnvelope />,
    },
    {
      label: "Phone",
      value: portfolioData.phone,
      href: `tel:${portfolioData.phone.replace(/\s+/g, "")}`,
      icon: <FaPhone />,
    },
    {
      label: "GitHub",
      value: "NinadNema",
      href: portfolioData.github,
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      value: "ninad-nemawarkar",
      href: portfolioData.linkedin,
      icon: <FaLinkedin />,
    },
    {
      label: "LeetCode",
      value: "Ninad_Nemawarkar",
      href: portfolioData.leetcode,
      icon: <SiLeetcode />,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-slate-950 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 text-lg font-semibold tracking-wide">
            Contact
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-2">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            I'm currently looking for Full-Stack Software Developer
            opportunities. Feel free to reach out — I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12"
        >
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-block bg-cyan-500 text-slate-950 font-semibold px-8 py-3 rounded-full hover:bg-cyan-400 transition"
          >
            Say Hello
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-16 text-left">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition"
            >
              <div className="w-11 h-11 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-xl text-cyan-400">
                {link.icon}
              </div>
              <div>
                <p className="text-slate-400 text-sm">{link.label}</p>
                <p className="text-slate-100 font-medium">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;