import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-inner">
        <p className="eyebrow"><span>06</span> Correspondence</p>
        <p className="contact-prompt">Have a good problem?</p>
        <a className="contact-email" href={`mailto:${portfolioData.email}`}>
          {portfolioData.email}<span>↗</span>
        </a>
        <div className="contact-bottom">
          <p className="mono">OPEN TO FULL-STACK ENGINEERING OPPORTUNITIES</p>
          <div className="contact-socials">
            <a href={portfolioData.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href={portfolioData.leetcode} target="_blank" rel="noreferrer"><SiLeetcode /> LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
