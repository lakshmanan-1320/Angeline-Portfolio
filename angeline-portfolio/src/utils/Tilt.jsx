import { useRef } from "react";

export default function Tilt({ children, className, max = 8, glare = false }) {
  const ref = useRef(null);
  const glareRef = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -max;
    const ry = (px - 0.5) * max;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.5), transparent 60%)`;
    }
  };

  const onLeave = () => {
    if (ref.current) el_reset(ref.current);
    if (glareRef.current) glareRef.current.style.background = "transparent";
  };
  const el_reset = (el) => {
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform .5s cubic-bezier(.16,1,.3,1)", position: "relative" }}
    >
      {children}
      {glare && <span ref={glareRef} className="tilt-glare" />}
    </div>
  );
}
