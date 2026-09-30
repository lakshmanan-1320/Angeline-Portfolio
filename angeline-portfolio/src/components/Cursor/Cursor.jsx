import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    document.body.setAttribute("data-cursor-hide", "");

    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0, started = false;
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!started) {
        started = true;
        ringX = mouseX;
        ringY = mouseY;
        setMoved(true);
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = (e) => {
      setActive(!!e.target.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.removeAttribute("data-cursor-hide");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: moved ? 1 : 0 }} />
      <div ref={ringRef} className={`cursor-ring ${active ? "is-active" : ""}`} style={{ opacity: moved ? 1 : 0 }} />
    </>
  );
}
