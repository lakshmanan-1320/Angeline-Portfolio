import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import Magnetic from "../utils/Magnetic";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#dashboard", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav-shell container">
        <a href="#top" className="nav-brand">
          <span className="nav-mark" />
          <span>{profile.name}</span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href ? "active" : ""}>
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic className="nav-cta">
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Download Resume
          </a>
        </Magnetic>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span /><span />
        </button>
      </div>

      <motion.div
        className="nav-mobile"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-mobile-inner">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Resume</a>
        </div>
      </motion.div>
    </header>
  );
}
