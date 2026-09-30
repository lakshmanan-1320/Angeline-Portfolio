import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Reveal from "../../utils/Reveal";
import { toolCategories } from "../../data/skills";
import "swiper/css";
import "./TechStack.css";

const allTools = toolCategories.flatMap((c) => c.tools);

export default function TechStack() {
  return (
    <section className="tech">
      <div className="container">
        <div className="section-head center">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />HR Technology Stack</span>
            <h2 className="section-heading">Platforms I work in day to day</h2>
          </Reveal>
        </div>
      </div>

      <Reveal className="tech-marquee">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop
          speed={4500}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          className="tech-swiper"
        >
          {[...allTools, ...allTools].map((tool, i) => (
            <SwiperSlide key={tool + i} className="tech-slide">
              <div className="tech-card">{tool}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>

      <div className="container">
        <div className="tech-cats">
          {toolCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.06} className="tech-cat">
              <span>{cat.category}</span>
              <p>{cat.tools.join(" · ")}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
