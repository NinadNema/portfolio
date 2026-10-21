import portfolioData from "../data/portfolioData";

function slugFor(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Projects() {
  return (
    <section id="projects" className="section page-width">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>03</span> Selected work / 2024—26</p>
          <h2>Work index<span className="accent-dot">.</span></h2>
        </div>
        <p className="heading-note mono">05 ENTRIES<br />SORTED BY RECENCY</p>
      </div>
      <div className="project-ledger">
        <div className="ledger-header mono">
          <span>NO.</span><span>PROJECT / DISCIPLINE</span><span>DOMAIN</span><span>SELECTED PROOF</span><span>↗</span>
        </div>
        {portfolioData.projects.map((project, index) => (
          <a className="project-row" href={`#/work/${slugFor(project.title)}`} key={project.title}>
            <span className="project-number mono">{String(index + 1).padStart(2, "0")}</span>
            <span className="project-title-cell">
              <strong>{project.title}</strong>
              <span>{project.subtitle}</span>
            </span>
            <span className="project-year mono">{project.domain}</span>
            <span className="project-metric mono">{project.metric}</span>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
      <p className="ledger-footnote mono">SELECT AN ENTRY TO READ THE CASE NOTES</p>
    </section>
  );
}

export default Projects;
