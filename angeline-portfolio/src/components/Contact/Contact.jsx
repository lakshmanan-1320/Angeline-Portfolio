import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend, FiCalendar } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import Magnetic from "../../utils/Magnetic";
import { profile } from "../../data/profile";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message || ""}\n\n— ${form.name || ""} (${form.email || ""})`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(profile.location)}&output=embed`;

  return (
    <section id="contact" className="cta">
      <div className="cta-glow" />
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Contact</span>
            <h2 className="section-heading" style={{ color: "#fff" }}>Let's build better workplaces together.</h2>
            <p className="section-sub" style={{ margin: "0 auto", color: "#94A3B8" }}>
              Open to HR Business Partner and People &amp; Culture roles. Reach out directly — happy to talk
              through fit, scope, or HR in general.
            </p>
          </Reveal>
        </div>

        <div className="cta-grid">
          <Reveal direction="right" className="cta-form-card glass-dark">
            <form
              className="cta-form"
              onSubmit={(e) => { e.preventDefault(); window.location.href = mailtoHref(); }}
            >
              <div className="cta-form-row">
                <label>
                  <span>Name</span>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about the role or opportunity..." />
              </label>
              <div className="cta-form-actions">
                <Magnetic>
                  <button type="submit" className="btn btn-primary"><FiSend />Send Message</button>
                </Magnetic>
                <Magnetic>
                  <a href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's schedule a conversation")}`} className="btn btn-ghost">
                    <FiCalendar />Schedule Meeting
                  </a>
                </Magnetic>
              </div>
            </form>
          </Reveal>

          <div className="cta-side">
            <Reveal delay={0.1} className="cta-card glass-dark">
              <span className="cta-card-icon"><FiMail /></span>
              <div><small>Email</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            </Reveal>
            <Reveal delay={0.16} className="cta-card glass-dark">
              <span className="cta-card-icon"><FiPhone /></span>
              <div><small>Phone</small><a href={profile.phoneHref}>{profile.phone}</a></div>
            </Reveal>
            <Reveal delay={0.22} className="cta-card glass-dark">
              <span className="cta-card-icon"><FiLinkedin /></span>
              <div><small>LinkedIn</small><a href={profile.linkedin}>View profile</a></div>
            </Reveal>
            <Reveal delay={0.28} className="cta-card glass-dark">
              <span className="cta-card-icon"><FiMapPin /></span>
              <div><small>Location</small><span>{profile.location}</span></div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="cta-map">
          <iframe title="Location map" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Reveal>
      </div>
    </section>
  );
}
