import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const links = [
  { label: "Product", id: "features" },
  { label: "Workflow", id: "workflow" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  {
    label: "Pitch Deck",
    href: "https://nexoraos.online/Nexsora%20OS%20Pitch%20Deck.pdf",
  },
];
const goTo = (id) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("features");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55%", threshold: 0.01 },
    );
    links.forEach(
      ({ id }) =>
        document.getElementById(id) &&
        observer.observe(document.getElementById(id)),
    );
    return () => observer.disconnect();
  }, []);

  const navigate = (id) => {
    goTo(id);
    setActive(id);
    setOpen(false);
  };
  const headerClass = scrolled
    ? "mx-3 mt-2 rounded-xl bg-glass p-1.5 shadow-2xl shadow-black/20"
    : "bg-background/80";

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClass}`}
    >
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between px-2 py-1.5 md:px-8 ${scrolled && "max-w-6xl px-3 py-1 md:px-4"}`}
      >
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="group flex items-center gap-2 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
          aria-label="Nexsora home"
        >
          <img
            src={logo}
            alt="Nexsora Logo"
            className="h-8 w-8 transition-transform duration-300 rounded-lg group-hover:rotate-6 group-hover:scale-110"
          />
          <span className="font-semibold tracking-tight text-primary">
            Nexsora <em className="font-normal text-teal-300 not-italic">OS</em>
          </span>
        </button>
        <div className="hidden items-center gap-1 rounded-full bg-black/5 p-1 dark:bg-white/[.07] md:flex">
          {links.map((link) =>
            link.id ? (
              <button
                type="button"
                key={link.id}
                onClick={() => navigate(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-all ${active === link.id ? "bg-white/20 text-primary shadow-sm" : "text-secondary hover:bg-white/10 hover:text-primary"}`}
              >
                {link.label}
              </button>
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
            className="grid h-8 w-8 place-items-center rounded-full text-secondary transition hover:bg-white/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            aria-label="Toggle colour theme"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => navigate("waitlist")}
            className="group inline-flex items-center gap-2 rounded-full bg-teal-300 px-3.5 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-px hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-300/40"
          >
            <Sparkles size={15} />
            Join Waitlist
          </button>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl bg-black/5 text-primary transition hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15 md:hidden"
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
            className="mx-3 overflow-hidden rounded-2xl bg-glass p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) =>
                link.id ? (
                  <button
                    type="button"
                    key={link.id}
                    onClick={() => navigate(link.id)}
                    aria-current={active === link.id ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${active === link.id ? "bg-white/10 text-primary" : "text-secondary hover:bg-white/5 hover:text-primary"}`}
                  >
                    {link.label}
                  </button>
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
              <div className="my-2 border-t border-border" />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setDark(!dark)}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-black/5 text-secondary dark:bg-white/10"
                >
                  <span className="sr-only">Toggle theme</span>
                  {dark ? <Sun size={17} /> : <Moon size={17} />}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("waitlist")}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-px hover:bg-teal-200"
                >
                  <Sparkles size={15} />
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
