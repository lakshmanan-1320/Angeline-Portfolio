import { profile } from "../data/profile";
import { timeline } from "../data/timeline";
import { coreCompetencies, technicalSkills, softSkills } from "../data/skills";
import { education, languages } from "../data/education";
import { achievements } from "../data/achievements";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar no-print">
        <a href="/" className="resume-back">← Back to portfolio</a>
        <button className="btn btn-primary" onClick={() => window.print()}>Print / Save as PDF</button>
      </div>

      <div className="resume-sheet">
        <header className="r-header">
          <h1>{profile.name}</h1>
          <div className="r-role">HR Business Partner — People &amp; Culture, Talent Management, Employee Relations</div>
          <div className="r-contact">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
          </div>
        </header>

        <section className="r-section">
          <h2>Summary</h2>
          <p>{profile.heroSummary} Builds the systems behind good HR: onboarding frameworks, knowledge bases, engagement calendars, and MIS reporting that leadership actually uses.</p>
        </section>

        <section className="r-section">
          <h2>Experience</h2>
          {timeline.map((t) => (
            <div className="r-exp" key={t.role + t.duration}>
              <div className="r-exp-top">
                <strong>{t.role}</strong>
                <span>{t.duration}</span>
              </div>
              <div className="r-exp-org">{t.company} — {t.location}</div>
              <ul>{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="r-section r-grid">
          <div>
            <h2>Core Competencies</h2>
            <p className="r-inline">{coreCompetencies.join(" · ")}</p>
            <h2>Technical HR</h2>
            <p className="r-inline">{technicalSkills.join(" · ")}</p>
            <h2>Soft Skills</h2>
            <p className="r-inline">{softSkills.join(" · ")}</p>
          </div>
          <div>
            <h2>Education</h2>
            {education.map((e) => (
              <div className="r-edu" key={e.degree}>
                <strong>{e.degree}</strong><span>{e.duration}</span>
                <div>{e.school}</div>
              </div>
            ))}
            <h2>Languages</h2>
            <p className="r-inline">{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</p>
          </div>
        </section>

        <section className="r-section">
          <h2>Achievements</h2>
          <p className="r-inline">{achievements.map((a) => `${a.value} — ${a.label}`).join("  |  ")}</p>
        </section>
      </div>
    </div>
  );
}
