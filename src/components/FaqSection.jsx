import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection({ items }) {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="overflow-hidden px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="text-sm font-semibold text-teal-300">
            Questions, answered
          </p>
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-primary">
            Everything you
            <br />
            want to know.
          </h2>
          <div className="relative mt-10 h-40 w-40">
            <motion.div
              className="absolute inset-0 rounded-full border-[14px] border-teal-300/20 border-t-teal-300 border-r-blue-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-8 grid place-items-center rounded-full bg-glass text-center text-xs font-medium text-secondary">
              NEXORA
              <br />
              <span className="text-teal-300">HELP</span>
            </div>
          </div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map(([question, answer], i) => (
            <button
              key={question}
              onClick={() => setActive(active === i ? -1 : i)}
              className="w-full py-6 text-left"
            >
              <span className="flex items-center justify-between gap-5 text-lg font-semibold text-primary">
                <span>{question}</span>
                <motion.span
                  animate={{ rotate: active === i ? 180 : 0 }}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-teal-300"
                >
                  <ChevronDown size={17} />
                </motion.span>
              </span>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.p
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="max-w-2xl overflow-hidden pr-12 pt-3 leading-relaxed text-secondary"
                  >
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
