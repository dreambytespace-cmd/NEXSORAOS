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
  Check,
  ChevronDown,
  CloudUpload,
  FileText,
  Heart,
  ImagePlus,
  LayoutDashboard,
  PlaySquare,
  Plus,
  Send,
  Sparkles,
  Search,
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
  {
    label: "Create Post",
    icon: Sparkles,
    kicker: "Composer",
    title: "Create and publish",
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

function CreatePostContent({ dark = true }) {
  const isLight = !dark;
  const [activeMode, setActiveMode] = useState("image");
  const [selectAll, setSelectAll] = useState(false);
  const [instagramCaption, setInstagramCaption] = useState("");
  const [linkedinCaption, setLinkedinCaption] = useState("");

  const modeCards = [
    {
      id: "image",
      title: "Image Post",
      subtitle: "Instagram + LinkedIn",
      badge: "◌",
      active: true,
    },
    {
      id: "reel",
      title: "Reel + Short",
      subtitle: "All Platforms",
      badge: "▶",
    },
    {
      id: "video",
      title: "Video Posting",
      subtitle: "All Platforms",
      badge: "▭",
    },
    {
      id: "story",
      title: "Story Posting",
      subtitle: "Instagram + TikTok",
      badge: "+",
    },
  ];

  const channelCards = [
    { id: "youtube", name: "YouTube", badge: "YT", tone: "text-red-400", ring: "border-white/10" },
    { id: "tiktok", name: "TikTok", badge: "TT", tone: "text-pink-400", ring: "border-white/10" },
    { id: "instagram", name: "Instagram", badge: "IG", tone: "text-pink-400", ring: "border-pink-500/60" },
    { id: "linkedin", name: "LinkedIn", badge: "in", tone: "text-blue-400", ring: "border-blue-500/60" },
    { id: "x", name: "X/Twitter", badge: "X", tone: "text-sky-400", ring: "border-white/10" },
  ];

  const selectedChannels = selectAll
    ? new Set(channelCards.map((channel) => channel.id))
    : new Set(["instagram", "linkedin"]);

  const autoFill = () => {
    setInstagramCaption("Turning one idea into a polished image post can keep your momentum going without starting from scratch every time.");
    setLinkedinCaption("A strong LinkedIn caption should open with a sharp hook, make the takeaway obvious, and invite the right conversation.");
  };

  const surfaceClass = isLight
    ? "border-violet-100 bg-white shadow-[0_20px_60px_-36px_rgba(110,86,207,0.28)]"
    : "border-white/10 bg-[#0f141a]";
  const panelClass = isLight
    ? "border-violet-100 bg-white/90"
    : "border-white/10 bg-[#12151c]/80";
  const headingClass = isLight ? "text-slate-900" : "text-white";
  const mutedClass = isLight ? "text-slate-600" : "text-slate-500";
  const inputClass = isLight
    ? "border-violet-100 bg-white text-slate-900 placeholder:text-slate-400"
    : "border-white/10 bg-[#20232c] text-slate-100 placeholder:text-slate-500";
  const iconTileClass = isLight
    ? "border-violet-100 bg-violet-50 text-slate-600"
    : "border-white/10 bg-white/[0.03] text-slate-400";

  return (
    <div className="space-y-5">
      <div className={`rounded-2xl border px-4 py-4 shadow-xl ${surfaceClass}`}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className={`flex min-w-0 flex-1 items-center gap-3 rounded-[1.25rem] border px-4 py-3 backdrop-blur-xl ${isLight ? "border-violet-100 bg-violet-50/70" : "border-white/10 bg-white/[0.04]"}`}>
            <Search size={18} className="shrink-0 text-slate-500" />
            <input
              type="text"
              aria-label="Search content"
              placeholder="Search content, scheduled posts, or analytics..."
              className={`w-full bg-transparent text-sm outline-none ${inputClass}`}
            />
          </div>
          <div className="flex items-center justify-between gap-3 lg:justify-end">
            <button className={`grid h-10 w-10 place-items-center rounded-full border transition ${isLight ? "border-violet-100 bg-violet-50 text-slate-500 hover:border-violet-200 hover:text-slate-700" : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"}`}>
              <Check size={18} />
            </button>
            <button className={`grid h-10 w-10 place-items-center rounded-full border transition ${isLight ? "border-violet-100 bg-violet-50 text-slate-500 hover:border-violet-200 hover:text-slate-700" : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"}`}>
              <Sparkles size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c2bcff_0%,#8b7ef0_100%)] px-5 py-3 text-sm font-extrabold tracking-tight text-[#0c0717] shadow-[0_18px_45px_-20px_rgba(139,126,240,0.8)]">
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {modeCards.map((mode) => {
          const selected = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveMode(mode.id)}
              className={`min-h-[145px] rounded-[1.5rem] border p-5 text-left transition duration-300 ${selected ? (isLight ? "border-violet-300 bg-violet-50 shadow-[0_20px_60px_-35px_rgba(110,86,207,0.45)]" : "border-violet-300/70 bg-[linear-gradient(135deg,rgba(49,42,78,0.95),rgba(26,21,34,0.96))]") : (isLight ? "border-violet-100 bg-white hover:border-violet-200 hover:bg-violet-50/70" : "border-white/[0.08] bg-white/[0.025] hover:border-white/14 hover:bg-white/[0.035]")}`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${selected ? (isLight ? "border-violet-200 bg-violet-100 text-violet-700" : "border-violet-300/30 bg-violet-400/15 text-violet-200") : iconTileClass}`}>
                <span className="text-sm font-black">{mode.badge}</span>
              </div>
              <h3 className={`mt-5 text-[1.2rem] font-black tracking-tight sm:text-[1.35rem] ${headingClass}`}>
                {mode.title}
              </h3>
              <p className={`mt-2 text-sm ${mutedClass}`}>{mode.subtitle}</p>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
        <div className="space-y-5">
          <DashboardCard className="min-h-[400px] p-6 sm:p-8" dark={dark}>
            <div className={`flex h-full min-h-[320px] flex-col items-center justify-center rounded-[1.4rem] border border-dashed px-6 py-10 text-center ${isLight ? "border-violet-200 bg-white" : "border-white/12 bg-[#12151c]/80"}`}>
              <div className={`grid h-20 w-20 place-items-center rounded-3xl border ${isLight ? "border-violet-100 bg-violet-50 text-violet-500" : "border-white/10 bg-white/[0.04] text-slate-300"}`}>
                <CloudUpload size={32} />
              </div>
              <h2 className={`mt-8 text-[clamp(2rem,3vw,3.2rem)] font-black tracking-tight ${headingClass}`}>
                Drop your media here
              </h2>
              <p className={`mt-3 max-w-xl text-sm sm:text-base ${mutedClass}`}>
                Recommended: 1080&times;1350 for optimal social reach.
              </p>
              <div className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${isLight ? "border-violet-200 bg-violet-100 text-violet-700" : "border-cyan-400/15 bg-cyan-400/10 text-cyan-300"}`}>
                <Check size={16} />
                Auto-converting to JPEG/PNG/WebP
              </div>
              <button className={`mt-6 rounded-2xl border px-8 py-4 text-base font-bold transition ${isLight ? "border-violet-200 bg-violet-600 text-white hover:bg-violet-700" : "border-white/10 bg-white/[0.03] text-white hover:border-violet-300/40 hover:bg-violet-400/10"}`}>
                Select File
              </button>
            </div>
          </DashboardCard>

          <DashboardCard className="p-5 sm:p-6" dark={dark}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className={`text-[1.35rem] font-black tracking-tight sm:text-[1.55rem] ${headingClass}`}>
                Post To
              </h3>
              <button
                type="button"
                onClick={() => setSelectAll((value) => !value)}
                className={`flex items-center gap-3 self-start text-sm font-medium sm:self-auto ${isLight ? "text-slate-500" : "text-slate-400"}`}
              >
                <span>Select All</span>
                <span className={`relative inline-flex h-7 w-11 items-center rounded-full border transition ${selectAll ? "border-violet-300/50 bg-violet-400/60" : isLight ? "border-violet-200 bg-violet-100" : "border-white/10 bg-white/10"}`}>
                  <span className={`absolute left-1 h-5 w-5 rounded-full bg-white shadow transition ${selectAll ? "translate-x-4" : "translate-x-0"}`} />
                </span>
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {channelCards.map((channel) => {
                const selected = selectedChannels.has(channel.id);
                return (
                  <button
                    key={channel.id}
                    type="button"
                    className={`min-h-[112px] overflow-hidden rounded-[1.15rem] border p-3 text-center transition ${selected ? (isLight ? `bg-violet-50 ${channel.ring}` : `bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] ${channel.ring}`) : (isLight ? "border-violet-100 bg-white opacity-95 hover:border-violet-200 hover:bg-violet-50/70" : "border-white/[0.08] bg-white/[0.02] opacity-90 hover:border-white/14 hover:bg-white/[0.04]")}`}
                  >
                    <div className={`mx-auto grid h-9 w-9 place-items-center rounded-2xl border ${selected ? `${channel.tone} border-current/25 ${channel.badgeBg}` : isLight ? "border-violet-100 bg-violet-50 text-slate-500" : "border-white/[0.08] bg-black/20 text-slate-500"}`}>
                      <span className="text-[0.64rem] font-black leading-none tracking-tight text-current whitespace-nowrap">
                        {channel.badge}
                      </span>
                    </div>
                    <p className={`mt-3 truncate text-[0.82rem] font-bold leading-tight ${isLight ? "text-slate-800" : "text-slate-200"}`}>{channel.name}</p>
                    <p className="mt-1 truncate text-[0.7rem] leading-tight text-slate-500">
                      {channel.id === "x" ? "Soon" : "Ready"}
                    </p>
                  </button>
                );
              })}
            </div>
          </DashboardCard>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className={`text-[1.45rem] font-black tracking-tight sm:text-[1.75rem] ${headingClass}`}>
              Captions &amp; Hashtags
            </h3>
            <button
              type="button"
              onClick={autoFill}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition ${isLight ? "border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-300 hover:bg-violet-100" : "border-white/10 bg-white/[0.04] text-violet-200 hover:border-violet-300/40 hover:bg-violet-400/10"}`}
            >
              <WandSparkles size={16} />
              Auto-Fill All
            </button>
          </div>

          <DashboardCard className="p-5 sm:p-6" dark={dark}>
            <div className="flex items-center justify-between gap-3">
              <h4 className={`flex items-center gap-2 text-lg font-extrabold tracking-tight sm:text-[1.4rem] ${headingClass}`}>
                <span className={`grid h-5 w-5 place-items-center rounded-md border text-xs font-bold ${isLight ? "border-violet-200 bg-violet-50 text-pink-500" : "border-white/10 bg-white/5 text-pink-300"}`}>
                  IG
                </span>
                Instagram Caption
              </h4>
              <button className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${isLight ? "border-violet-200 bg-violet-50 text-violet-700" : "border-white/10 bg-white/[0.04] text-violet-200"}`}>
                <Sparkles size={14} />
                Magic Write
              </button>
            </div>
            <textarea
              value={instagramCaption}
              onChange={(event) => setInstagramCaption(event.target.value)}
              placeholder="Write a Instagram caption..."
              className={`mt-4 min-h-[132px] w-full resize-none rounded-2xl border px-4 py-4 text-sm outline-none ${inputClass}`}
            />
            <div className={`mt-3 flex justify-end text-xs ${mutedClass}`}>
              <span className={isLight ? "text-slate-500" : "text-slate-400"}>{instagramCaption.length.toLocaleString()} / 2,200</span>
            </div>
            <div className={`mt-5 flex items-start justify-between gap-3 border-t pt-4 ${isLight ? "border-violet-100" : "border-white/[0.08]"}`}>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full border text-[10px] ${isLight ? "border-violet-200 text-violet-500" : "border-white/[0.08] text-slate-400"}`}>
                    i
                  </span>
                  Hashtags
                </p>
                <p className={`mt-2 max-w-md text-xs leading-relaxed ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                  Write a caption, then refresh for Instagram-specific hashtag suggestions.
                </p>
              </div>
              <button className={`mt-1 text-sm font-semibold transition ${isLight ? "text-violet-600 hover:text-violet-700" : "text-violet-300 hover:text-violet-200"}`}>
                Refresh
              </button>
            </div>
          </DashboardCard>

          <DashboardCard className="p-5 sm:p-6" dark={dark}>
            <div className="flex items-center justify-between gap-3">
              <h4 className={`flex items-center gap-2 text-lg font-extrabold tracking-tight sm:text-[1.4rem] ${headingClass}`}>
                <span className={`grid h-5 w-5 place-items-center rounded-md border text-xs font-bold ${isLight ? "border-violet-200 bg-violet-50 text-blue-500" : "border-white/10 bg-white/5 text-blue-300"}`}>
                  in
                </span>
                LinkedIn Caption
              </h4>
              <button className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${isLight ? "border-violet-200 bg-violet-50 text-violet-700" : "border-white/10 bg-white/[0.04] text-violet-200"}`}>
                <Sparkles size={14} />
                Magic Write
              </button>
            </div>
            <textarea
              value={linkedinCaption}
              onChange={(event) => setLinkedinCaption(event.target.value)}
              placeholder="Write a LinkedIn caption..."
              className={`mt-4 min-h-[132px] w-full resize-none rounded-2xl border px-4 py-4 text-sm outline-none ${inputClass}`}
            />
            <div className={`mt-3 flex justify-end text-xs ${mutedClass}`}>
              <span className={isLight ? "text-slate-500" : "text-slate-400"}>{linkedinCaption.length.toLocaleString()} / 3,000</span>
            </div>
            <div className={`mt-5 flex items-start justify-between gap-3 border-t pt-4 ${isLight ? "border-violet-100" : "border-white/[0.08]"}`}>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full border text-[10px] ${isLight ? "border-violet-200 text-violet-500" : "border-white/[0.08] text-slate-400"}`}>
                    i
                  </span>
                  Hashtags
                </p>
                <p className={`mt-2 max-w-md text-xs leading-relaxed ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                  Write a caption, then refresh for LinkedIn-specific hashtag suggestions.
                </p>
              </div>
              <button className={`mt-1 text-sm font-semibold transition ${isLight ? "text-violet-600 hover:text-violet-700" : "text-violet-300 hover:text-violet-200"}`}>
                Refresh
              </button>
            </div>
          </DashboardCard>

          <button className="w-full rounded-[1.5rem] bg-[linear-gradient(135deg,#c2bcff_0%,#a59cf4_100%)] px-6 py-5 text-[1.35rem] font-black tracking-tight text-[#0d0717] shadow-[0_24px_60px_-28px_rgba(139,126,240,0.7)] transition hover:translate-y-[-1px]">
            Deploy Post
          </button>
        </div>
      </div>

      <div className={`flex flex-col gap-3 border-t pt-4 text-sm lg:flex-row lg:items-center lg:justify-between ${isLight ? "border-violet-100" : "border-white/[0.08]"}`}>
        <p className="text-slate-500">
          System Status: <span className="font-semibold text-emerald-400">Optimized</span> | API Latency: <span className={isLight ? "font-semibold text-slate-900" : "font-semibold text-white"}>2116ms</span>
        </p>
        <p className="text-sky-400">
          <span className="font-semibold text-sky-400">AI Insight:</span> Posts with a hook in the first line get more saves - try Magic Write if you&apos;re stuck.
        </p>
      </div>
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
    "Create Post": <CreatePostContent dark={dark} />,
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
