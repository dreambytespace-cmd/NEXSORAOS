function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

const GlassFilter = () => (
  <svg className="hidden">
    <defs>
      <filter
        id="container-glass"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.05 0.05"
          numOctaves="1"
          seed="1"
          result="turbulence"
        />
        <feGaussianBlur
          in="turbulence"
          stdDeviation="2"
          result="blurredNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurredNoise"
          scale="70"
          xChannelSelector="R"
          yChannelSelector="B"
          result="displaced"
        />
        <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
        <feComposite in="finalBlur" in2="finalBlur" operator="over" />
      </filter>
    </defs>
  </svg>
);

export default function LiquidButton({
  className,
  children,
  size = "md",
  ...props
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-full bg-glass backdrop-blur-md transition-all hover:shadow-lg hover:shadow-teal-500/20",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none relative z-10 flex items-center gap-2 text-primary">
        {children}
      </span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-400/10 to-blue-400/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      <GlassFilter />
    </button>
  );
}
