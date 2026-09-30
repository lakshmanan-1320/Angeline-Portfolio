import { useEffect, useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import { timeline } from "../../data/timeline";
import { ensureGsap } from "../../utils/gsapSetup";
import "./Timeline.css";

export default function Timeline() {
  const railRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        railRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "0% 0%",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        }
      );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="exp">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Professional Experience</span>
            <h2 className="section-heading">Four years, four roles, one throughline</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Increasing ownership at every step — from coordinating hiring operations to independently
              running HR for an entire business unit.
            </p>
          </Reveal>
        </div>

        <div className="exp-wrap" ref={wrapRef}>
          <div className="exp-rail-track">
            <div className="exp-rail" ref={railRef} />
          </div>

          {timeline.map((item, i) => (
            <div className={`exp-row ${i % 2 === 0 ? "left" : "right"}`} key={item.role + item.duration}>
              <Reveal direction={i % 2 === 0 ? "right" : "left"} className="exp-card">
                <div className="exp-card-top">
                  <span className="exp-card-icon"><FiBriefcase /></span>
                  <span className="exp-date">{item.duration}</span>
                </div>
                <h3>{item.role}</h3>
                <div className="exp-org">{item.company} — {item.location}</div>
                <ul>
                  {item.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </Reveal>
              <span className="exp-node" />
              <div className="exp-spacer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
