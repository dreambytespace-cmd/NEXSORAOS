import { useRef, useState } from "react";

export default function TiltCard({ children, className = "", style, spotlightColor = "rgba(110, 86, 207, 0.26)", ...props }) {
  const cardRef = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, visible: false });

  const handleMove = (event) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setSpotlight({ x: x * 100, y: y * 100, visible: true });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setSpotlight((current) => ({ ...current, visible: false }))}
      className={`group isolate transition-colors duration-300 hover:border-teal-300/40 ${className}`}
      style={style}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.visible ? 1 : 0,
          background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, ${spotlightColor}, transparent 42%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
