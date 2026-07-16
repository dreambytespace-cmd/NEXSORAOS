"use client";
import { useEffect, useRef, useState, type ElementType, type MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: ElementType;
  status: "completed" | "in-progress" | "pending";
}
interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  dark: boolean;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className = "",
  dark,
}: RadialOrbitalTimelineProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!autoRotate) return;
    const timer = window.setInterval(
      () =>
        setRotationAngle((angle) => Number(((angle + 0.3) % 360).toFixed(3))),
      50,
    );
    return () => window.clearInterval(timer);
  }, [autoRotate]);
  const itemById = (id: number) => timelineData.find((item) => item.id === id);
  const toggleItem = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      setAutoRotate(true);
      return;
    }
    const index = timelineData.findIndex((item) => item.id === id);
    setExpandedId(id);
    setAutoRotate(false);
    setRotationAngle(270 - (index / timelineData.length) * 360);
  };
  const reset = () => {
    setExpandedId(null);
    setAutoRotate(true);
  };
  const getPosition = (index: number) => {
    const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    return {
      x: 38 * Math.cos(radian),
      y: 38 * Math.sin(radian),
      depth: Math.round(100 + 50 * Math.cos(radian)),
      opacity: Math.max(
        0.45,
        Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)),
      ),
    };
  };
  const statusClass = (status: TimelineItem["status"]) =>
    status === "completed"
      ? "border-primary bg-primary text-background"
      : status === "in-progress"
        ? "border-teal-400 bg-teal-400 text-slate-950"
        : "border-border bg-background text-primary";
  return (
    <div
      ref={containerRef}
      onClick={reset}
      className={`relative flex h-[560px] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-background sm:h-[640px] ${className}`}
    >
      <div className="absolute inset-0 opacity-50 dark:[background-image:radial-gradient(rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div
        className="relative h-full w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute left-1/2 top-1/2 h-[78vw] max-h-96 w-[78vw] max-w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border" />
        <div className="absolute left-1/2 top-1/2 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 shadow-[0_0_50px_rgba(96,165,250,.55)] animate-pulse">
          <span className="absolute h-20 w-20 rounded-full border border-border animate-ping" />
          <span className="absolute h-24 w-24 rounded-full border border-border/50 animate-ping [animation-delay:.5s]" />
          <span className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-md" />
        </div>
        {timelineData.map((item, index) => {
          const position = getPosition(index);
          const expanded = expandedId === item.id;
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="absolute cursor-pointer transition-all duration-700"
              style={{
                left: `${50 + position.x}%`,
                top: `${50 + position.y}%`,
                transform: "translate(-50%, -50%)",
                zIndex: expanded ? 200 : position.depth,
                opacity: expanded ? 1 : position.opacity,
              }}
              onClick={(event: MouseEvent) => {
                event.stopPropagation();
                toggleItem(item.id);
              }}
            >
              <div
                className={`grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-300 ${expanded ? "scale-150 border-primary bg-primary text-background shadow-lg shadow-primary/30" : "border-border bg-background text-primary"}`}
              >
                <Icon size={16} />
              </div>
              <p
                className={`absolute left-1/2 top-12 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider transition-all ${expanded ? "scale-125 text-primary" : "text-secondary"}`}
              >
                {item.title}
              </p>
              {expanded && (
                <Card className="absolute left-1/2 top-20 w-64 -translate-x-1/2 overflow-visible border-border bg-background/90 text-primary shadow-xl shadow-primary/10 backdrop-blur-lg">
                  <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-border" />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`px-2 text-xs ${statusClass(item.status)}`}
                      >
                        {item.status === "in-progress"
                          ? "IN PROGRESS"
                          : item.status.toUpperCase()}
                      </Badge>
                      <span className="font-mono text-xs text-secondary">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="mt-2 text-sm text-primary">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-secondary">
                    <p className="pt-2">{item.content}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
