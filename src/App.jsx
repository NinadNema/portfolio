import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolioData";

function PinnedStatement() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );

  return (
    <section ref={sectionRef} className="statement-section" aria-label="What I care about">
      <div className="statement-sticky page-width">
        <p className="eyebrow"><span>02</span> Working principle</p>
        <div className="statement-copy">
          <p className="statement-base">
            I care about software that makes its thinking visible: clear
            systems, considered details, and numbers you can trust.
          </p>
          <motion.p className="statement-reveal" style={{ clipPath }}>
            I care about software that makes its thinking visible: clear
            systems, considered details, and numbers you can trust.
          </motion.p>
        </div>
        <p className="mono statement-note">SCROLL TO REVEAL / 001—003</p>
      </div>
    </section>
  );
}

function ProjectDetail({ project, index }) {
  const previous = portfolioData.projects[(index - 1 + portfolioData.projects.length) % portfolioData.projects.length];
  const next = portfolioData.projects[(index + 1) % portfolioData.projects.length];
  const slugFor = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <main className="case-study page-width">
      <a className="back-link mono" href="/#projects">← BACK TO INDEX</a>
      <p className="eyebrow case-kicker"><span>{String(index + 1).padStart(2, "0")}</span> Selected work / Case study</p>
      <h1>{project.title}</h1>
      <p className="case-subtitle">{project.subtitle}</p>
      <div className="case-rule" />
      <div className="case-meta">
        <div><span className="mono">DISCIPLINE</span><p>Full-stack engineering</p></div>
        <div><span className="mono">STACK</span><p>{project.tech.join(" · ")}</p></div>
        <div><span className="mono">DOMAIN</span><p>{project.domain}</p></div>
      </div>
      <div className="case-proof">
        <strong>{project.metricValue}</strong>
        <span className="mono">{project.metricLabel}</span>
      </div>
      <div className="case-body">
        <div>
          <p className="eyebrow"><span>01</span> Overview</p>
          <p className="case-description">{project.description}</p>
          <div className="case-links">
            {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View source ↗</a>}
            {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Open live project ↗</a>}
          </div>
        </div>
        <div>
          <p className="eyebrow"><span>02</span> Engineering notes</p>
          <ol className="case-points">
            {project.points.map((point) => <li key={point}>{point}</li>)}
          </ol>
        </div>
      </div>
      <nav className="case-pagination" aria-label="Project navigation">
        <a href={`#/work/${slugFor(previous.title)}`}><span className="mono">← PREVIOUS</span><strong>{previous.title}</strong></a>
        <a href={`#/work/${slugFor(next.title)}`}><span className="mono">NEXT →</span><strong>{next.title}</strong></a>
      </nav>
    </main>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const updateRoute = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  const detailMatch = route.match(/^#\/work\/(.+)$/);
  const projectIndex = detailMatch
    ? portfolioData.projects.findIndex(
        (project) =>
          project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === detailMatch[1],
      )
    : -1;
  const isAbout = route === "#/about";
  const isDetail = projectIndex >= 0;

  useEffect(() => {
    if (isAbout || isDetail) window.scrollTo(0, 0);
  }, [isAbout, isDetail, route]);

  return (
    <>
      <Navbar />
      {isAbout ? (
        <main>
          <About />
          <Skills />
          <Education />
          <Contact />
        </main>
      ) : isDetail ? (
        <ProjectDetail project={portfolioData.projects[projectIndex]} index={projectIndex} />
      ) : (
        <main>
          <Hero />
          <PinnedStatement />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
