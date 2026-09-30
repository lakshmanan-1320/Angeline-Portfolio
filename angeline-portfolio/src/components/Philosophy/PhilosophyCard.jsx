import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function PhilosophyCard({ icon: Icon, title, text, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-90, 90], [-14, 14]);
  const [dragging, setDragging] = useState(false);

  return (
    <div className="phi-cell">
      <div className="phi-lanyard">
        <span className="phi-strap" />
        <span className="phi-clip" />
      </div>

      <motion.div
        className={`phi-card ${dragging ? "is-dragging" : ""}`}
        style={{ x, y, rotate }}
        drag
        dragElastic={0.55}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 360, bounceDamping: 18 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        whileTap={{ scale: 1.03 }}
      >
        <span className="phi-punch" />

        <span className="phi-icon"><Icon /></span>

        <div className="phi-id-row">
          <span className="phi-id-label">HR Principle</span>
          <span className="phi-id-no">No. {String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3>{title}</h3>
        <p>{text}</p>

        <span className="phi-barcode" />
        <span className="phi-border" />
      </motion.div>
    </div>
  );
}
