import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero page-width">
      <div className="hero-topline mono">
        <span>PORTFOLIO / 2026</span>
        <span>BHOPAL, INDIA <i className="status-dot" /> OPEN TO OPPORTUNITIES</span>
      </div>
      <p className="eyebrow hero-intro"><span>01</span> Independent software engineer in the making</p>
      <h1 className="hero-name">
        <span>Ninad</span>
        <span className="hero-surname">Nemawarkar<span className="accent-dot">.</span></span>
      </h1>
      <div className="title-block">
        <div className="title-block-role">
          <span className="mono">ROLE</span>
          <strong>{portfolioData.role}</strong>
        </div>
        <div>
          <span className="mono">EDUCATION</span>
          <strong>B.Tech Computer Science · VIT Bhopal</strong>
        </div>
        <div>
          <span className="mono">STATUS</span>
          <strong><i className="status-dot" /> Seeking 2027 opportunities</strong>
        </div>
        <a className="resume-link mono" href="/Ninad%20Nemawarkar%20Resume.pdf" target="_blank" rel="noreferrer">
          RESUME ↗
        </a>
      </div>
      <div className="hero-bottom">
        <p>{portfolioData.description}</p>
        <div className="hero-socials">
          <a href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={portfolioData.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
          <a className="mono scroll-cue" href="#projects">SCROLL TO INDEX ↓</a>
        </div>
      </div>
      <span className="hero-index mono">NN—001</span>
    </section>
  );
}

export default Hero;
