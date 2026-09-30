import { FiTarget, FiUsers } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import { coreCompetencies, softSkills } from "../../data/skills";
import "./Skills.css";

function SkillPanel({ icon: Icon, title, items, count, accent, delay = 0 }) {
  return (
    <Reveal delay={delay} direction="up" className={`sk-panel accent-${accent}`}>
      <Icon className="sk-glyph" aria-hidden="true" />
      <div className="sk-panel-head">
        <span className="sk-panel-icon"><Icon /></span>
        <div>
          <h3>{title}</h3>
          <span className="sk-count">{count} areas</span>
        </div>
      </div>
      <div className="sk-pill-row">
        {items.map((s, i) => (
          <span key={s} className="sk-pill" style={{ transitionDelay: `${i * 0.03}s` }}>
            <i />{s}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="sk">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Core Skills</span>
            <h2 className="section-heading">Where the function meets the people side</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              The HR domains I operate in, and the human skills that make them actually work.
            </p>
          </Reveal>
        </div>

        <div className="sk-grid">
          <SkillPanel
            icon={FiTarget}
            title="Core Competencies"
            items={coreCompetencies}
            count={coreCompetencies.length}
            accent="brand"
          />
          <SkillPanel
            icon={FiUsers}
            title="Soft Skills"
            items={softSkills}
            count={softSkills.length}
            accent="cool"
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
