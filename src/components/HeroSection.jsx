import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WebGLShader from "./WebGLShader";
import LiquidButton from "./LiquidButton";

export default function HeroSection({ dark }) {
  const marquee = "CREATE · SCHEDULE · ENGAGE · ANALYZE · ";

  return (
    <section className="relative isolate flex min-h-[min(50rem,calc(100svh-4rem))] flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-background px-5 py-24 text-center sm:py-28">
      <WebGLShader dark={dark} />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-[1] [background-image:linear-gradient(rgba(148,163,184,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.09)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] ${dark ? "opacity-40" : "opacity-15"}`}
      />
      <motion.div
        aria-hidden="true"
        animate={
          dark
            ? { scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }
            : { opacity: 0.35 }
        }
        transition={
          dark
            ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
        className={`pointer-events-none absolute left-1/2 top-[42%] z-[1] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${dark ? "bg-teal-300/20" : "bg-teal-200/25"}`}
      />
      <p
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-clip-text text-[clamp(6rem,22vw,21rem)] font-black leading-none tracking-[-0.1em] text-transparent ${
          dark ? "bg-gradient-to-b from-white/20 to-transparent [-webkit-text-stroke:1px_rgba(237,237,239,0.20)]" : "bg-gradient-to-b from-[#141416]/10 to-transparent [-webkit-text-stroke:1px_rgba(20,20,22,0.14)]"
        }`}
      >
        NEXORA
      </p>
      <div className="relative z-10 w-full max-w-5xl -translate-y-7 sm:-translate-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-1.5 text-sm text-secondary backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Beta Launching August 1, 2026
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-primary sm:text-6xl md:text-7xl"
        >
          The <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Operating System
          </span>
          <br />
          for Content Creators.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-9 max-w-2xl text-base leading-7 text-secondary sm:text-lg"
        >
          Save time, grow faster, and earn more. Stop juggling 10 different
          tools — Nexora OS is your all-in-one creator command center.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LiquidButton
            onClick={() =>
              document
                .getElementById("waitlist")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-border text-primary"
            size="xl"
          >
            Join Waitlist — Free →
          </LiquidButton>
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cinematic-pill group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-secondary hover:text-primary"
          >
            See How It Works{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-2xl border border-white/15 bg-slate-950/30 px-6 py-5 backdrop-blur-xl"
        >
          {[
            ["300+", "Creators on waitlist"],
            ["5", "Platforms in one place"],
            ["100%", "Free forever for beta users"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-sm text-secondary">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        aria-hidden="true"
        initial={{ x: "-8%" }}
        animate={{ x: "-35%" }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className={`pointer-events-none absolute left-0 top-24 z-[3] flex w-max -rotate-2 whitespace-nowrap border-y py-3 text-xs font-medium tracking-[0.28em] sm:text-sm ${dark ? "border-teal-200/10 bg-background/35 text-teal-100/35 backdrop-blur-md" : "border-[#141416]/10 bg-transparent text-[#141416]/25"}`}
      >
        <span>{marquee.repeat(8)}</span>
      </motion.div>
    </section>
  );
}
