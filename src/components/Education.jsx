import { FaExternalLinkAlt } from "react-icons/fa";
import portfolioData from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="section page-width record-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>05</span> Record</p>
          <h2>Study & credentials<span className="accent-dot">.</span></h2>
        </div>
        <p className="heading-note mono">DATED ENTRIES<br />VERIFIABLE RECORD</p>
      </div>
      <div className="record-list">
        {portfolioData.education.map((item, index) => (
          <div className="record-row education-row" key={item.school}>
            <span className="mono record-date">{item.period}</span>
            <span className="record-number mono">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
              <span className="record-detail mono">{item.detail}</span>
            </div>
            <span className="mono record-type">EDUCATION</span>
          </div>
        ))}
        {portfolioData.certifications.map((item, index) => (
          <a className="record-row certification-row" href={item.verify} target="_blank" rel="noreferrer" key={item.title}>
            <span className="mono record-date">{item.date}</span>
            <span className="record-number mono">{String(index + 2).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>
            <span className="record-type mono">VERIFY <FaExternalLinkAlt /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Education;
