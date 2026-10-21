import portfolioData from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section page-width skills-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>04</span> Stack matrix</p>
          <h2>Tools of the trade<span className="accent-dot">.</span></h2>
        </div>
        <p className="heading-note mono">A WORKING SET<br />NOT A CHECKLIST</p>
      </div>
      <div className="skills-matrix">
        {portfolioData.skills.map((group, index) => (
          <div className="skill-row" key={group.category}>
            <span className="mono skill-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{group.category}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
