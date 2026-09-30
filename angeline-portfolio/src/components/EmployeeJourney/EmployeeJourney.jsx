import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../../utils/Reveal";
import { employeeJourney } from "../../data/journey";
import "./EmployeeJourney.css";

export default function EmployeeJourney() {
  const trackRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: trackRef });
  const barWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="life">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Employee Lifecycle</span>
            <h2 className="section-heading">The journey I design and manage</h2>
          </Reveal>
        </div>
      </div>

      <div className="life-track" ref={trackRef} data-lenis-prevent>
        <div className="life-track-inner">
          {employeeJourney.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05} direction="scale" className="life-stage">
              <span className="life-num">{i + 1}</span>
              <h4>{step.step}</h4>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="life-progress-track">
          <motion.div className="life-progress-fill" style={{ width: barWidth }} />
        </div>
        <span className="life-hint">Scroll the row above to move through the lifecycle →</span>
      </div>
    </section>
  );
}
