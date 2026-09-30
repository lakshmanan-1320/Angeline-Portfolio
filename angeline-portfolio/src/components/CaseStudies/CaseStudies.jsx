import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import { caseStudies } from "../../data/caseStudies";
import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <section id="initiatives" className="init">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Featured HR Initiatives</span>
            <h2 className="section-heading">Executive case studies</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Six mandates owned end-to-end — the challenge, the approach, and the business outcome.
            </p>
          </Reveal>
        </div>

        <div className="init-list">
          {caseStudies.map((c, i) => (
            <Reveal key={c.id} delay={0.04} direction={i % 2 === 0 ? "up" : "up"} className="init-row">
              <div className="init-index">
                <span>{c.id}</span>
              </div>
              <div className="init-body">
                <div className="init-head">
                  <span className="tag-pill init-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                </div>
                <div className="init-cols">
                  <div className="init-col">
                    <span className="init-k">Challenge</span>
                    <p>{c.challenge}</p>
                  </div>
                  <div className="init-col">
                    <span className="init-k">Strategy &amp; Execution</span>
                    <p>{c.approach}</p>
                  </div>
                </div>
                <div className="init-outcome">
                  <FiArrowUpRight />
                  <p><strong>Business Outcome — </strong>{c.outcome}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
