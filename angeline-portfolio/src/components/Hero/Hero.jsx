import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { profile, stats } from "../../data/profile";
import Magnetic from "../../utils/Magnetic";
import Counter from "../../utils/Counter";
import { ensureGsap } from "../../utils/gsapSetup";
import "./Hero.css";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      gsap.to(".hero-visual-inner", {
        yPercent: 14,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -10,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.from(".hero-split-line", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.15,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const onMove = (e) => {
    const rect = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  return (
    <section id="top" className="hero" ref={heroRef}>
      <div className="hero-mesh" />
      <div className="hero-blob hero-blob-a" />
      <div className="hero-blob hero-blob-b" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-split-line">
            <span className="eyebrow"><span className="eyebrow-dot" />{profile.location}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-split-line">Building Better Workplaces</span>
            <span className="hero-split-line">Through <em className="gradient-text">People</em>,</span>
            <span className="hero-split-line">Culture &amp; Leadership</span>
          </h1>

          <div className="hero-split-line hero-role-row">
            <span className="hero-role-badge">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </span>
          </div>

          <p className="hero-split-line hero-desc">{profile.heroSummary}</p>

          <div className="hero-split-line hero-actions">
            <Magnetic>
              <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Download Resume <FiArrowRight />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#experience" className="btn btn-outline">View Experience</a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </Magnetic>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef} onMouseMove={onMove}>
          <div
            className="hero-visual-inner"
            style={{ transform: `rotateX(${tilt.y * -6}deg) rotateY(${tilt.x * 6}deg)` }}
          >
            <div className="hero-card">
              <img
                src="https://i.pravatar.cc/640?img=47"
                alt={profile.name}
                className="hero-card-photo"
              />
              <div className="hero-card-ring r1" />
              <div className="hero-card-ring r2" />
              <div className="hero-card-scrim" />
              <span className="hero-card-role">HR Business Partner</span>
            </div>

            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`hero-metric hm-${i}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  transform: `translate(${tilt.x * (14 + i * 4)}px, ${tilt.y * (14 + i * 4)}px)`,
                }}
              >
                <strong>
                  {s.display ? s.display : <Counter end={s.value} suffix={s.suffix} duration={2} />}
                </strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <FiArrowDown />
      </a>
    </section>
  );
}
