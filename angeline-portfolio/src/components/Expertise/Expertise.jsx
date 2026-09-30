import {
  FiTarget, FiHeart, FiBarChart2, FiGift, FiSettings, FiShield, FiBook, FiRepeat, FiPieChart,
} from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import Tilt from "../../utils/Tilt";
import { expertise } from "../../data/expertise";
import "./Expertise.css";

const ICONS = {
  target: FiTarget, heart: FiHeart, bar: FiBarChart2, gift: FiGift,
  settings: FiSettings, shield: FiShield, book: FiBook, repeat: FiRepeat, chart: FiPieChart,
};

export default function Expertise() {
  return (
    <section id="expertise" className="exp2">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Core Expertise</span>
            <h2 className="section-heading">Where I add the most value</h2>
          </Reveal>
        </div>

        <div className="exp2-bento">
          {expertise.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.04} className={`exp2-cell size-${item.size}`}>
                <Tilt max={6} className="exp2-card">
                  <Icon className="exp2-glyph" aria-hidden="true" />
                  <span className="exp2-icon"><Icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="exp2-border" />
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
