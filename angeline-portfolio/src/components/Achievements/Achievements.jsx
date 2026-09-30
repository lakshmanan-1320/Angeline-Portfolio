import Reveal from "../../utils/Reveal";
import { achievements } from "../../data/achievements";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="ach2">
      <div className="ach2-glow" />
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Recognition</span>
            <h2 className="section-heading" style={{ color: "#fff" }}>Verified achievements</h2>
          </Reveal>
        </div>

        <div className="ach2-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06} direction="up" className="ach2-item">
              <span className="ach2-value">{a.value}</span>
              <span className="ach2-label">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
