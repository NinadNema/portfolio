import portfolioData from "../data/portfolioData";

function About() {
  return (
    <section className="about-page page-width">
      <p className="eyebrow"><span>ABOUT / 01</span> Field notes</p>
      <h1>A little about<br />how I work<span className="accent-dot">.</span></h1>
      <div className="about-page-body">
        <p className="about-lead">{portfolioData.aboutText}</p>
        <div className="about-highlights">
          {portfolioData.highlights.map((item, index) => (
            <div className="highlight-row" key={item.label}>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span>
              <span className="mono">{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
