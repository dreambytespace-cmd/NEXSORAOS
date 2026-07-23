import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BarChart3, Bot, CalendarDays, CircleDollarSign, Clock3, MessageCircle, PenLine } from "lucide-react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FaqSection from "./components/FaqSection";
import FlowArt, { FlowSection } from "./components/ui/story-scroll";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import DetailedWaitlistForm from "./DetailedWaitlistForm";

const orbitItems = [
  {
    id: 1,
    icon: Bot,
    title: "AI Repurposing",
    date: "REPURPOSE",
    content:
      "Paste a YouTube URL or upload a video. AI instantly turns it into Twitter threads, Instagram captions, LinkedIn posts, and TikTok scripts in seconds.",
    category: "Creation",
    status: "completed",
  },
  {
    id: 2,
    icon: CalendarDays,
    title: "Smart Scheduler",
    date: "SCHEDULE",
    content:
      "Schedule posts across YouTube, Instagram, Twitter, LinkedIn, and TikTok. AI tells you the best time to post for maximum reach based on your audience.",
    category: "Publishing",
    status: "completed",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Real-Time Analytics",
    date: "ANALYZE",
    content:
      "Stop guessing what works. Track your growth, engagement, and revenue across all platforms in one unified, beautiful dashboard updated in real time.",
    category: "Insights",
    status: "in-progress",
  },
  {
    id: 4,
    icon: CircleDollarSign,
    title: "Brand Deals CRM",
    date: "GROW",
    content:
      "Track every sponsorship deal from outreach to payment in a Kanban pipeline. Generate invoices and send them directly — no more spreadsheets.",
    category: "Revenue",
    status: "pending",
  },
];
void orbitItems;
const stories = [
  {
    number: "01",
    name: "CREATE",
    title: "Make the first draft the easy part.",
    text: "Give Nexora a video, a thought, or a link. It turns your raw ideas into on-brand content for every channel.",
    icon: PenLine,
    metric: "10x",
    metricLabel: "more content from one idea",
    color: "hsl(var(--primary-500))",
  },
  {
    number: "02",
    name: "SCHEDULE",
    title: "Build momentum while you are offline.",
    text: "Shape a month of posts in one focused session, then let the calendar carry the work across every platform.",
    icon: Clock3,
    metric: "98%",
    metricLabel: "less time scheduling",
    color: "hsl(var(--primary-400))",
  },
  {
    number: "03",
    name: "ENGAGE",
    title: "Stay close to the people who matter.",
    text: "A single inbox and thoughtful AI drafts keep your community moving without making you live in notifications.",
    icon: MessageCircle,
    metric: "100%",
    metricLabel: "of conversations captured",
    color: "hsl(var(--primary-300))",
  },
  {
    number: "04",
    name: "ANALYZE",
    title: "Make your next move with clarity.",
    text: "Watch reach, revenue and engagement converge into one simple answer: what should you do more of?",
    icon: BarChart3,
    metric: "+25%",
    metricLabel: "follower growth",
    color: "hsl(var(--primary-200))",
  },
];
const faqs = [
  [
    "What is Nexora OS?",
    "Nexora OS is an all-in-one workspace for creators to create, schedule, engage and understand performance across their channels.",
  ],
  [
    "Is Nexora free during beta?",
    "Yes. Early access is free during beta, with no credit card required.",
  ],
  [
    "Which platforms can I manage?",
    "Nexora brings YouTube, Instagram, X, TikTok and LinkedIn into one workflow.",
  ],
  [
    "How does AI repurposing work?",
    "Add a video or source link and Nexora creates channel-specific drafts you can refine before publishing.",
  ],
  [
    "Can I manage sponsorships too?",
    "Yes. Use the deal workspace to track outreach, deadlines, payment status and the value of your pipeline.",
  ],
];

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("nexora-theme") !== "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("nexora-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-background text-primary selection:bg-teal-300/30"
    >
      <Header dark={dark} setDark={setDark} />
      <main className="pt-16">
        <HeroSection dark={dark} />
        <section id="features" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-teal-300"
            >
              Everything you need
            </motion.p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              One system. Every creator tool.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-secondary">
              Stop paying for 10 different tools. Nexora OS has everything in
              one place.
            </p>
            <div className="mt-12 text-left">
              <AnalyticsDashboard />
            </div>
          </div>
        </section>
        <FlowArt
          id="workflow"
          aria-label="Nexora creator workflow"
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 overflow-hidden px-5 md:grid-cols-2 md:px-8"
        >
          {stories.map((story) => {
            const Icon = story.icon;
            return (
              <FlowSection
                key={story.name}
                aria-label={story.name}
                className="min-w-0 bg-background !p-0 text-primary"
                cardClassName="!min-h-[20rem] !rounded-[1.5rem] !px-6 !py-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  {story.number} — {story.name}
                </p>
                <hr className="my-[2vw] border-none border-t border-current opacity-40" />
                <div className="flex items-start justify-between gap-8">
                  <h2 className="text-[clamp(2rem,3.5vw,3.75rem)] font-bold leading-[0.95] uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: story.title.replace('.', '.<br/>') }} />
                  <Icon className="mt-2 hidden h-16 w-16 shrink-0 sm:block" />
                </div>
                <hr className="my-[2vw] border-none border-t border-current opacity-40" />
                <p className="max-w-[58ch] text-[clamp(0.95rem,1.6vw,1.35rem)] font-normal leading-relaxed">
                  {story.text}
                </p>
                <div className="mt-auto flex flex-wrap gap-[3vw] border-t border-current pt-[2vw] opacity-90">
                  <div className="min-w-[180px] flex-1">
                    <p
                      className="mb-2 text-3xl font-bold"
                      style={{ color: story.color }}
                    >
                      {story.metric}
                    </p>
                    <p className="text-[clamp(.8rem,1vw,.95rem)] leading-relaxed opacity-75">
                      {story.metricLabel}
                    </p>
                  </div>
                  <div className="min-w-[180px] flex-1">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wider">
                      One focused workspace
                    </p>
                    <p className="text-[clamp(.8rem,1vw,.95rem)] leading-relaxed opacity-75">
                      Every step stays connected, so your ideas keep moving
                      forward.
                    </p>
                  </div>
                </div>
              </FlowSection>
            );
          })}
        </FlowArt>
        <FaqSection items={faqs} />
        <section id="waitlist" className="px-5 py-24"><DetailedWaitlistForm /></section>
      </main>
      <footer className="border-t border-border px-5 py-8 text-sm text-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p>© 2026 Nexora OS. Built for creators with momentum.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://nexoraos.online/" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary" aria-label="Twitter">
                Twitter
              </a>
              <a href="https://nexoraos.online/" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://nexoraos.online/" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
