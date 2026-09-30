import { useEffect, useRef } from "react";
import { FiActivity, FiAward, FiShield, FiUsers } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import DraggableBadge from "../../utils/DraggableBadge";
import Counter from "../../utils/Counter";
import { caseStudies } from "../../data/caseStudies";
import { ensureGsap } from "../../utils/gsapSetup";
import "./ImpactDashboard.css";

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

export default function ImpactDashboard() {
  const ringPath = useRef(null);
  const segsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ringPath.current,
        { strokeDashoffset: 326.7 },
        {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        segsRef.current.querySelectorAll(".dash-progress-seg"),
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.09,
          ease: "back.out(2)",
          transformOrigin: "0% 50%",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="dashboard" className="dash" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />People Impact Dashboard</span>
            <h2 className="section-heading">The numbers behind the HR desk</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              A real-time view of the outcomes tied to every role — not projections, results. Give any card a tug.
            </p>
          </Reveal>
        </div>

        <div className="dash-board">
          <Reveal direction="scale" className="dash-cell dash-cell-ring">
            <DraggableBadge className="dash-panel dash-ring-panel">
              <div className="dash-panel-head">
                <span className="dash-panel-icon"><FiShield /></span>
                <span>Compliance Health</span>
              </div>
              <div className="dash-ring-wrap">
                <svg viewBox="0 0 120 120" className="dash-ring">
                  <circle cx="60" cy="60" r="52" className="dash-ring-track" />
                  <circle ref={ringPath} cx="60" cy="60" r="52" className="dash-ring-fill" />
                </svg>
                <div className="dash-ring-label">
                  <strong>100%</strong>
                  <span>Zero Gaps</span>
                </div>
              </div>
              <p className="dash-panel-note">Sustained across BGV &amp; Apprenticeship management for the full tenure of a 250+ employee unit.</p>
            </DraggableBadge>
          </Reveal>

          <div className="dash-col">
            <Reveal delay={0.05} direction="up" className="dash-cell">
              <DraggableBadge className="dash-panel dash-metric">
                <span className="dash-panel-icon"><FiUsers /></span>
                <strong><Counter end={250} suffix="+" duration={2} /></strong>
                <span className="dash-metric-label">Employees managed independently</span>
              </DraggableBadge>
            </Reveal>
            <Reveal delay={0.1} direction="up" className="dash-cell">
              <DraggableBadge className="dash-panel dash-metric">
                <span className="dash-panel-icon"><FiActivity /></span>
                <strong><Counter end={100} suffix="+" duration={2} /></strong>
                <span className="dash-metric-label">Joiners in a single hiring drive</span>
              </DraggableBadge>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="dash-cell">
            <DraggableBadge className="dash-panel dash-cadence">
              <div className="dash-panel-head">
                <span>Rewards &amp; Recognition — Quarterly Cadence</span>
              </div>
              <div className="dash-chart">
                {QUARTERS.map((q, i) => (
                  <div className="dash-bar-col" key={q}>
                    <div className="dash-bar-track">
                      <div className="dash-bar-fill" style={{ animationDelay: `${i * 0.12}s` }} />
                      <span className="dash-bar-check" style={{ animationDelay: `${i * 0.12 + 0.7}s` }}><FiAward /></span>
                    </div>
                    <span className="dash-bar-q">{q}</span>
                  </div>
                ))}
              </div>
              <p className="dash-panel-note">Every quarter delivered on schedule — no gaps since the program launched.</p>
            </DraggableBadge>
          </Reveal>

          <Reveal delay={0.2} className="dash-cell dash-cell-wide">
            <DraggableBadge className="dash-panel dash-wide">
              <div className="dash-panel-head">
                <span>HR Initiatives Owned End-to-End</span>
                <strong>{caseStudies.length}/{caseStudies.length}</strong>
              </div>
              <div className="dash-progress-track" ref={segsRef}>
                {caseStudies.map((c) => (
                  <span key={c.id} className="dash-progress-seg" title={c.title} />
                ))}
              </div>
              <p className="dash-panel-note">Every initiative below was scoped, executed, and closed out solo — from challenge to business outcome.</p>
            </DraggableBadge>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
