import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WebGLShader from "./WebGLShader";
import LiquidButton from "./LiquidButton";

export default function HeroSection({ dark }) {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      <WebGLShader dark={dark} />
      <div className="relative z-10 w-full">
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
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
        >
          The <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Operating System
          </span>
          <br />
          for Content Creators
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-base text-secondary sm:text-lg md:text-xl"
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
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-border text-primary" size="xl">
            Join Waitlist — Free →
          </LiquidButton>
          <button
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-secondary transition-all hover:border-primary hover:bg-white/5 hover:text-primary"
          >
            See How It Works{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-8"
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
    </section>
  );
}
