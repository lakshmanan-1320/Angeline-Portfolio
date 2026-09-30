import {
  FiUsers, FiTrendingUp, FiHeart, FiEye, FiCompass, FiBookOpen,
} from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import PhilosophyCard from "./PhilosophyCard";
import { philosophy } from "../../data/philosophy";
import "./Philosophy.css";

const ICONS = {
  people: FiUsers,
  growth: FiTrendingUp,
  culture: FiCompass,
  trust: FiEye,
  mindset: FiBookOpen,
  empathy: FiHeart,
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="phi">
      <div className="phi-bg" />
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />HR Philosophy</span>
            <h2 className="section-heading">Principles behind the practice</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Six ideas that consistently shape how I show up for employees and the business — grab a card and give it a tug.
            </p>
          </Reveal>
        </div>

        <div className="phi-grid">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07} direction="scale">
              <PhilosophyCard icon={ICONS[p.icon]} title={p.title} text={p.text} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
