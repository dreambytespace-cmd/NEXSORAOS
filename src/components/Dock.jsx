import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export const Dock = ({ children }) => {
  const mouseX = useMotionValue(Infinity);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
        }
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className="flex h-16 items-center justify-center gap-5 rounded-2xl px-4"
    >
      {children}
    </div>
  );
};

export const DockItem = ({ children }) => {
  const ref = useRef(null);
  // This is a placeholder since the parent Dock handles the logic
  // In a more advanced setup, you'd pass mouseX here and use useTransform
  // For now, we'll use group-hover from Tailwind for a simpler effect.
  return (
    <motion.div
      ref={ref}
      className="transition-transform hover:!scale-150"
    >
      {children}
    </motion.div>
  );
};