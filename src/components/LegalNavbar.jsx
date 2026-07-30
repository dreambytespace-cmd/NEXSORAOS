import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";

const primaryLinks = [
  { label: "Product", href: "/#features" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  {
    label: "Pitch Deck",
    href: "https://nexoraos.online/Nexora%20OS%20Pitch%20Deck.pdf",
  },
];

function getThemeFromStorage() {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("nexora-theme") !== "light";
}

export default function LegalNavbar({ activePage }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(getThemeFromStorage);
  const isTerms = activePage === "terms";
  const legalLabel = isTerms ? "Privacy" : "Terms";
  const legalHref = isTerms ? "/privacy-conditions" : "/terms-and-conditions";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("nexora-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-2 py-1.5 md:px-8"
      >
        <a
          href="/"
          className="group flex items-center gap-2 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          aria-label="Nexora home"
        >
          <img
            src="/logo.png"
            alt="Nexora Logo"
            className="h-8 w-8 rounded-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="font-semibold tracking-tight text-primary">
            Nexora <em className="not-italic text-teal-300">OS</em>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-glass p-1 md:flex">
          {primaryLinks.map((link) =>
            link.href.startsWith("/") ? (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-secondary transition-all hover:bg-white/10 hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3.5 py-2 text-sm text-secondary transition-all hover:bg-white/10 hover:text-primary"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="grid h-8 w-8 place-items-center rounded-full border border-border bg-glass text-secondary transition hover:bg-white/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Toggle colour theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a
            href={legalHref}
            aria-current="page"
            className="rounded-full border border-border bg-glass px-3.5 py-2 text-sm font-semibold text-primary transition-all hover:bg-white/10"
          >
            {legalLabel}
          </a>
          <a
            href="/#waitlist"
            className="group inline-flex items-center gap-2 rounded-full bg-teal-300 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-px hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-300/40"
          >
            <Sparkles size={15} />
            Join Waitlist
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-primary transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.24 }}
            className="mx-3 overflow-hidden rounded-2xl border border-border bg-glass p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {primaryLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-secondary transition hover:bg-white/5 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium text-secondary transition hover:bg-white/5 hover:text-primary"
                  >
                    {link.label}
                  </a>
                ),
              )}
              <a
                href={legalHref}
                onClick={() => setOpen(false)}
                aria-current="page"
                className="rounded-xl border border-border bg-glass px-4 py-3 text-left text-sm font-medium text-primary transition hover:bg-white/5"
              >
                {legalLabel}
              </a>
              <div className="my-2 border-t border-border" />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDark(!dark)}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-glass text-secondary"
                >
                  <span className="sr-only">Toggle theme</span>
                  {dark ? <Sun size={17} /> : <Moon size={17} />}
                </button>
                <a
                  href="/#waitlist"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-px hover:bg-teal-200"
                >
                  <Sparkles size={15} />
                  Join Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
