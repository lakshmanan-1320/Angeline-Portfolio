import { motion } from "framer-motion";
import Reveal from "../../utils/Reveal";
import Tilt from "../../utils/Tilt";
import { profile } from "../../data/profile";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <Reveal direction="right" className="about-visual-col">
          <Tilt className="about-tilt" max={6} glare>
            <div className="about-visual">
              <img
                src="https://i.pravatar.cc/720?img=47"
                alt={profile.name}
                className="about-visual-photo"
              />
              <div className="about-visual-scrim" />
              <div className="about-visual-footer">
                <span>{profile.name}</span>
                <small>HR Business Partner · Coimbatore</small>
              </div>
            </div>
          </Tilt>
          <motion.div
            className="about-float-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <strong>4+ Years</strong>
            <span>Across the full HR function</span>
          </motion.div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Who I Am</span>
            <h2 className="section-heading">
              From studying language to leading people — the throughline is understanding humans.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="about-p">
              I trained in English Literature, spending years studying how people communicate and make
              sense of their circumstances. HR turned out to be the practical version of that same curiosity —
              building workplaces where people are understood, not just managed.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="about-p">
              I started as an HR Recruiter coordinating hiring operations, then grew into full-cycle talent
              acquisition, then HR business partnering across the entire employee lifecycle. Today, I
              independently own HR for a 250+ employee business unit as its sole point of contact —
              I'm currently pursuing an MBA in Human Resources to keep building on that.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="about-pillars">
            <div className="about-pillar">
              <span className="about-pillar-label">Mission</span>
              <p>Make HR the function that makes people and business succeed together.</p>
            </div>
            <div className="about-pillar">
              <span className="about-pillar-label">Mindset</span>
              <p>Build the systems behind good HR, not just react to what comes up.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
