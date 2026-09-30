import { FiArrowUpRight, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data/profile";
import "./Footer.css";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Initiatives", href: "#initiatives" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: profile.email, href: `mailto:${profile.email}` },
      { label: profile.phone, href: profile.phoneHref },
      { label: "LinkedIn", href: profile.linkedin },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-glow" />
      <div className="container foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <span className="foot-mark" />
            <h3>{profile.name}</h3>
            <p>HR Business Partner — building workplaces where people and business grow together.</p>
            <div className="foot-social">
              <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
              <a href={profile.phoneHref} aria-label="Phone"><FiPhone /></a>
              <a href={profile.linkedin} aria-label="LinkedIn"><FiLinkedin /></a>
            </div>
          </div>

          <div className="foot-cols">
            {COLS.map((col) => (
              <div key={col.title} className="foot-col">
                <span>{col.title}</span>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="foot-col">
              <span>Resume</span>
              <ul>
                <li>
                  <a href="/resume" target="_blank" rel="noopener noreferrer">
                    Download <FiArrowUpRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <blockquote className="foot-quote">
          "People are the heart of every successful organization."
        </blockquote>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
