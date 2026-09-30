import { FiAward, FiBriefcase, FiCalendar, FiTarget, FiUsers } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import Counter from "../../utils/Counter";
import "./ExecutiveHighlights.css";

const HIGHLIGHTS = [
  { icon: FiCalendar, value: 4, suffix: "+", label: "Years of HR Experience" },
  { icon: FiUsers, value: 250, suffix: "+", label: "Employees Managed" },
  { icon: FiTarget, value: 100, suffix: "+", label: "Hires in One Drive" },
  { icon: FiBriefcase, value: 1, suffix: "", label: "Business Unit Owned Solo" },
  { icon: FiAward, value: 1, suffix: "", label: "Award Nomination" },
];

export default function ExecutiveHighlights() {
  return (
    <section className="exh">
      <div className="container">
        <div className="exh-row">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.label} delay={i * 0.07} direction="up" className="exh-item">
                <div className={`exh-card accent-${i}`}>
                  <span className="exh-glow" />
                  <span className="exh-icon"><Icon /></span>
                  <strong><Counter end={h.value} suffix={h.suffix} duration={1.8} /></strong>
                  <span className="exh-label">{h.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
