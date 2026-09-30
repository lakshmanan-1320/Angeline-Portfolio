import Reveal from "../../utils/Reveal";
import { funnelStages } from "../../data/funnel";
import "./RecruitmentFunnel.css";

export default function RecruitmentFunnel() {
  const n = funnelStages.length;

  return (
    <section className="funnel">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Recruitment Funnel</span>
            <h2 className="section-heading">How a hire actually happens</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              The process behind every hiring drive — including the one that delivered 100+ joiners in a single month.
            </p>
          </Reveal>
        </div>

        <div className="funnel-shape">
          {funnelStages.map((stage, i) => {
            const topWidth = 100 - (i / n) * 46;
            const bottomWidth = 100 - ((i + 1) / n) * 46;
            return (
              <Reveal key={stage.label} delay={i * 0.08} direction="scale" className="funnel-row">
                <div
                  className="funnel-trap"
                  style={{
                    clipPath: `polygon(${(100 - topWidth) / 2}% 0%, ${(100 + topWidth) / 2}% 0%, ${(100 + bottomWidth) / 2}% 100%, ${(100 - bottomWidth) / 2}% 100%)`,
                  }}
                >
                  <span className="funnel-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="funnel-label">{stage.label}</span>
                </div>
                <p className="funnel-text">{stage.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
