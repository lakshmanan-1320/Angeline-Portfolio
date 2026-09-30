import { FiBookOpen, FiGlobe } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import { education, languages } from "../../data/education";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="edu">
      <div className="container edu-grid">
        <div>
          <Reveal>
            <span className="eyebrow"><FiBookOpen style={{ marginRight: 4 }} />Education</span>
            <h2 className="section-heading">Academic foundation</h2>
          </Reveal>
          <div className="edu-list">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08} className="edu-item">
                <div className="edu-top">
                  <h4>{e.degree}</h4>
                  <span>{e.duration}</span>
                </div>
                <p>{e.school}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={0.1}>
            <span className="eyebrow"><FiGlobe style={{ marginRight: 4 }} />Languages</span>
            <h2 className="section-heading">Fluent across four states</h2>
          </Reveal>
          <div className="lang-list">
            {languages.map((l, i) => (
              <Reveal key={l.name} delay={0.14 + i * 0.05} className="lang-item">
                <span className="lang-name">{l.name}</span>
                <span className="lang-level">{l.level}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
