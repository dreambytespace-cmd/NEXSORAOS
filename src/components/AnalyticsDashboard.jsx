import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  Heart,
  ImagePlus,
  LayoutDashboard,
  PlaySquare,
  Plus,
  Send,
  Sparkles,
  TrendingUp,
  Users,
  WandSparkles,
} from "lucide-react";

const audienceData = [
  { month: "Jan", reach: 26, engagement: 13 },
  { month: "Feb", reach: 31, engagement: 18 },
  { month: "Mar", reach: 37, engagement: 22 },
  { month: "Apr", reach: 42, engagement: 28 },
  { month: "May", reach: 49, engagement: 31 },
  { month: "Jun", reach: 56, engagement: 38 },
  { month: "Jul", reach: 64, engagement: 43 },
];
const platformData = [
  { name: "YouTube", value: 72 },
  { name: "Instagram", value: 58 },
  { name: "TikTok", value: 46 },
  { name: "LinkedIn", value: 34 },
];
const metrics = [
  {
    label: "Total reach",
    value: "284.6K",
    change: "+18.4%",
    icon: TrendingUp,
    tone: "text-teal-300 bg-teal-400/10",
  },
  {
    label: "New followers",
    value: "12,480",
    change: "+12.6%",
    icon: Users,
    tone: "text-sky-300 bg-sky-400/10",
  },
  {
    label: "Engagement rate",
    value: "8.42%",
    change: "+1.8%",
    icon: Heart,
    tone: "text-violet-300 bg-violet-400/10",
  },
  {
    label: "Posts published",
    value: "96",
    change: "+24 this week",
    icon: Send,
    tone: "text-orange-300 bg-orange-400/10",
  },
];
const tabs = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    kicker: "Workspace",
    title: "Your creator workspace",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    kicker: "Analytics",
    title: "Creator performance",
  },
  {
    label: "Content calendar",
    icon: CalendarDays,
    kicker: "Planning",
    title: "Your content calendar",
  },
  {
    label: "Repurpose studio",
    icon: PlaySquare,
    kicker: "Create",
    title: "Turn one idea into many",
  },
];

function DashboardCard({ children, className = "", dark = true }) {
  return (
    <div
      className={`min-w-0 rounded-2xl border shadow-xl transition-colors duration-300 ${dark ? "border-white/10 bg-[#142128] shadow-black/10" : "border-violet-100/80 bg-gradient-to-br from-white via-white to-violet-50/60 shadow-[0_18px_50px_-28px_rgba(110,86,207,0.35)] ring-1 ring-violet-100/40"} ${className}`}
    >
      {children}
    </div>
  );
}
function MetricCards({ dark = true }) {
  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {metrics.map(({ label, value, change, icon: Icon, tone }) => (
        <DashboardCard key={label} className="p-3 sm:p-4" dark={dark}>
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 truncate text-lg font-bold text-white sm:text-2xl">
                {value}
              </p>
            </div>
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl sm:h-9 sm:w-9 ${tone}`}
            >
              <Icon size={16} />
            </span>
          </div>
          <p className="mt-3 text-[11px] text-teal-300 sm:text-xs">
            {change}{" "}
            <span className="hidden text-slate-500 sm:inline">
              vs. last period
            </span>
          </p>
        </DashboardCard>
      ))}
    </div>
  );
}

function AnalyticsContent({ dark = true }) {
  const chart = dark
    ? {
        grid: "#ffffff12",
        axis: "#94a3b8",
        tooltipBg: "#111c23",
        tooltipBorder: "#ffffff1a",
        reach: "#2dd4bf",
        engagement: "#a78bfa",
        platform: "#38bdf8",
      }
    : {
        grid: "rgba(110, 86, 207, 0.14)",
        axis: "#766b93",
        tooltipBg: "#ffffff",
        tooltipBorder: "#ddd6fe",
        reach: "#6e56cf",
        engagement: "#5b8def",
        platform: "#6e56cf",
      };
  return (
    <div className="space-y-6">
      <MetricCards dark={dark} />
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <DashboardCard className="p-5 sm:p-6" dark={dark}>
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-white">Audience growth</h4>
              <p className="mt-1 text-xs text-slate-400">
                Your community is growing across every channel.
              </p>
            </div>
            <span className="text-sm font-bold text-teal-300">+28.6%</span>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={audienceData}>
                <CartesianGrid
                  vertical={false}
                  stroke={chart.grid}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="month"
                  tick={{ fill: chart.axis, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: chart.axis, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: chart.tooltipBg,
                    border: `1px solid ${chart.tooltipBorder}`,
                    borderRadius: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="reach"
                  stroke={chart.reach}
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke={chart.engagement}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 flex gap-4 text-xs text-slate-400">
            <span>
              <i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-teal-400" />
              Reach
            </span>
            <span>
              <i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-violet-400" />
              Engagement
            </span>
          </div>
        </DashboardCard>
        <DashboardCard className="p-5 sm:p-6" dark={dark}>
          <h4 className="font-semibold text-white">Top channels</h4>
          <p className="mt-1 text-xs text-slate-400">Performance by platform</p>
          <div className="mt-5 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={platformData}
                layout="vertical"
                margin={{ left: 8 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={72}
                  tick={{ fill: "#cbd5e1", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar
                  dataKey="value"
                  fill={chart.platform}
                  radius={[0, 6, 6, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}

function OverviewContent({ dark = true }) {
  return (
    <div className="space-y-6">
      <MetricCards dark={dark} />
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardCard className="p-5 sm:p-6" dark={dark}>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">Today&apos;s focus</h4>
              <p className="mt-1 text-xs text-slate-400">
                Keep your momentum moving.
              </p>
            </div>
            <button className="rounded-lg bg-teal-400 px-3 py-2 text-xs font-semibold text-slate-950">
              Create post
            </button>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "Approve the YouTube short draft",
              "Reply to 8 high-priority comments",
              "Review this week’s performance",
            ].map((task, i) => (
              <div
                key={task}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3 text-sm text-slate-200"
              >
                <CheckCircle2
                  size={17}
                  className={i === 0 ? "text-teal-300" : "text-slate-600"}
                />
                {task}
              </div>
            ))}
          </div>
        </DashboardCard>
        <DashboardCard className="p-5 sm:p-6" dark={dark}>
          <h4 className="font-semibold text-white">AI recommendation</h4>
          <p className="mt-1 text-xs text-slate-400">
            Based on your best-performing content.
          </p>
          <div className="mt-5 rounded-xl border border-violet-400/15 bg-violet-400/5 p-4">
            <WandSparkles size={18} className="text-violet-300" />
            <p className="mt-3 text-sm font-medium text-white">
              Turn your latest YouTube video into a 7-post series.
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Your audience saves behind-the-scenes clips 2.4× more often than
              average.
            </p>
            <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-violet-300">
              Open studio <ArrowUpRight size={14} />
            </button>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}

function CalendarContent({ dark = true }) {
  const posts = [
    {
      day: "MON 21",
      title: "YouTube: Creator workflow",
      type: "YouTube",
      color: "bg-red-400",
    },
    {
      day: "WED 23",
      title: "Carousel: 5 content hooks",
      type: "Instagram",
      color: "bg-pink-400",
    },
    {
      day: "FRI 25",
      title: "Thread: Build in public",
      type: "X / Twitter",
      color: "bg-sky-400",
    },
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      <DashboardCard className="p-4 sm:p-5" dark={dark}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="font-semibold text-white">July 2026</h4>
            <p className="mt-1 text-xs text-slate-400">
              3 posts scheduled this week
            </p>
          </div>
          <button className="flex shrink-0 items-center gap-1 rounded-lg bg-teal-400 px-3 py-2 text-xs font-semibold text-slate-950">
            <Plus size={14} />{" "}
            <span className="hidden sm:inline">Schedule</span>
          </button>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-1 text-center text-[10px] sm:gap-2 sm:text-xs">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <span key={day} className="text-slate-500">
              {day.slice(0, 1)}
            </span>
          ))}
          {Array.from({ length: 28 }, (_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md p-1 text-left sm:rounded-lg sm:p-2 ${[20, 22, 24].includes(i) ? "border border-teal-400/40 bg-teal-400/10 text-teal-200" : "bg-white/[0.03] text-slate-500"}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </DashboardCard>
      <DashboardCard className="p-4 sm:p-5" dark={dark}>
        <h4 className="font-semibold text-white">Upcoming posts</h4>
        <div className="mt-4 space-y-3">
          {posts.map((post) => (
            <div key={post.day} className="rounded-xl bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-teal-300">
                  {post.day}
                </span>
                <span className={`h-2 w-2 rounded-full ${post.color}`} />
              </div>
              <p className="mt-2 text-sm text-white">{post.title}</p>
              <p className="mt-1 text-xs text-slate-500">{post.type}</p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}

function StudioContent({ dark = true }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
      <DashboardCard className="p-5" dark={dark}>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-300">
          Repurpose with AI
        </p>
        <h4 className="mt-2 text-xl font-bold text-white">
          Start with one piece of content.
        </h4>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
          Paste a link, upload a video, or choose an existing post. Nexora will
          make channel-ready variations.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-dashed border-teal-400/35 bg-teal-400/5 text-sm font-medium text-teal-200">
            <PlaySquare size={22} className="mb-2" />
            Paste video link
          </button>
          <button className="flex min-h-28 flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] text-sm font-medium text-slate-300">
            <ImagePlus size={22} className="mb-2" />
            Upload media
          </button>
        </div>
      </DashboardCard>
      <DashboardCard className="p-5" dark={dark}>
        <h4 className="font-semibold text-white">Recent generations</h4>
        <div className="mt-4 space-y-3">
          {[
            "LinkedIn post from: Creator workflow",
            "Instagram carousel: 5 content hooks",
            "TikTok script from YouTube recap",
          ].map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-400/10 text-violet-300">
                <FileText size={16} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm text-white">{item}</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {i === 0 ? "Ready to review" : "Draft saved"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}

export default function AnalyticsDashboard({ dark = true }) {
  const [activeTab, setActiveTab] = useState("Analytics");
  const active = tabs.find((tab) => tab.label === activeTab) ?? tabs[1];
  const content = {
    Overview: <OverviewContent dark={dark} />,
    Analytics: <AnalyticsContent dark={dark} />,
    "Content calendar": <CalendarContent dark={dark} />,
    "Repurpose studio": <StudioContent dark={dark} />,
  }[activeTab];
  const isLight = !dark;
  const rootClass = isLight
    ? "border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50/50 text-primary shadow-2xl shadow-violet-100/60 analytics-light"
    : "border border-border bg-[#0b1116] text-primary shadow-2xl shadow-teal-950/20 analytics-dark";
  const asideClass = isLight
    ? "hidden border-r border-violet-100 bg-gradient-to-b from-violet-50/80 to-white p-4 lg:flex lg:flex-col"
    : "hidden border-r border-white/10 bg-[#0d171c] p-4 lg:flex lg:flex-col";
  const panelClass = isLight ? "min-w-0 bg-gradient-to-br from-white via-white to-violet-50/30" : "min-w-0 bg-[#10191f]";
  const headClass = isLight
    ? "flex items-center justify-between gap-3 border-b border-violet-100 px-4 py-4 sm:px-7"
    : "flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-7";
  const nav = (
    <nav className="space-y-1 text-sm">
      {tabs.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActiveTab(label)}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${activeTab === label ? "bg-violet-400/10 text-violet-300" : isLight ? "text-slate-600 hover:bg-violet-100/60 hover:text-violet-700" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </nav>
  );
  const mobileNav = (
    <nav
      aria-label="Dashboard sections"
      className={`flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] lg:hidden ${isLight ? "border-b border-violet-100" : "border-b border-white/10"}`}
    >
      {tabs.map(({ icon: Icon, label }) => (
        <button
          key={label}
          onClick={() => setActiveTab(label)}
          className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition ${activeTab === label ? "bg-violet-400/15 text-violet-300" : isLight ? "bg-violet-50 text-slate-600" : "bg-white/5 text-slate-400"}`}
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </nav>
  );
  return (
    <div className={`w-full overflow-hidden rounded-2xl sm:rounded-3xl ${rootClass}`}>
      <div className="grid min-h-[650px] lg:grid-cols-[205px_1fr]">
        <aside className={asideClass}>
          <div className={`mb-8 flex items-center gap-2 px-2 text-lg font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            <span className={`grid h-8 w-8 place-items-center rounded-lg ${isLight ? "bg-violet-500 text-white" : "bg-violet-400 text-slate-950"}`}>
              <Sparkles size={17} />
            </span>
            NEXORA
          </div>
          {nav}
          <div className={`mt-auto rounded-xl border p-3 text-xs leading-relaxed ${isLight ? "border-violet-200 bg-violet-50 text-slate-600" : "border-violet-400/15 bg-violet-400/5 text-slate-400"}`}>
            <p className={`font-semibold ${isLight ? "text-violet-700" : "text-violet-300"}`}>Weekly insight</p>Your
            short-form videos are driving 34% more saves this week.
          </div>
        </aside>
        <div className={panelClass}>
          {mobileNav}
          <header className={headClass}>
            <div className="min-w-0">
              <p className={`text-xs font-medium uppercase tracking-[0.18em] ${isLight ? "text-violet-600" : "text-violet-300"}`}>
                {active.kicker}
              </p>
              <h3 className={`mt-1 truncate text-base font-bold sm:text-lg ${isLight ? "text-slate-900" : "text-white"}`}>
                {active.title}
              </h3>
            </div>
            <button className={`flex shrink-0 items-center gap-2 rounded-lg border px-2.5 py-2 text-[11px] font-medium sm:px-3 sm:text-xs ${isLight ? "border-violet-200 bg-violet-50 text-slate-700" : "border-white/10 bg-white/5 text-slate-300"}`}>
              Last 30 days <ChevronDown size={14} />
            </button>
          </header>
          <main className="min-h-[570px] p-4 sm:p-7">{content}</main>
        </div>
      </div>
    </div>
  );
}
