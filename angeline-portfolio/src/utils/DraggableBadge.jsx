import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./DraggableBadge.css";

export default function DraggableBadge({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-120, 120], [-8, 8]);
  const [dragging, setDragging] = useState(false);

  return (
    <div className="badge-cell">
      <div className="badge-lanyard">
        <span className="badge-strap" />
        <span className="badge-clip" />
      </div>

      <motion.div
        className={`badge-card ${className} ${dragging ? "is-dragging" : ""}`}
        style={{ x, y, rotate }}
        drag
        dragElastic={0.45}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 380, bounceDamping: 20 }}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        whileTap={{ scale: 1.015 }}
      >
        <span className="badge-punch" />
        {children}
      </motion.div>
    </div>
  );
}
