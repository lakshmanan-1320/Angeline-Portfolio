import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import { faqs } from "../../data/faq";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq2">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />FAQ</span>
            <h2 className="section-heading">Questions I get asked often</h2>
          </Reveal>
        </div>

        <div className="faq2-list">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 0.05} className={`faq2-item ${isOpen ? "is-open" : ""}`}>
                <button className="faq2-q" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq2-icon"><FiPlus /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq2-a-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq2-a">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
