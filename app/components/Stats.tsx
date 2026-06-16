"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface Stat {
  value: string;
  label: string;
  numeric: number;
  suffix: string;
}

const stats: Stat[] = [
  { value: "12+", label: "Health Metrics Tracked", numeric: 12, suffix: "+" },
  { value: "40+", label: "Days of Data Analyzed", numeric: 40, suffix: "+" },
  { value: "100%", label: "On-Device & Private", numeric: 100, suffix: "%" },
  { value: "4", label: "Dashboard Screens", numeric: 4, suffix: "" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ stat, index, active }: { stat: Stat; index: number; active: boolean }) {
  const count = useCountUp(stat.numeric, 1500, active);
  return (
    <AnimateIn delay={index * 0.1} className="flex flex-col items-center text-center gap-1 lg:px-8">
      <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#16EC06] to-[#7BA0FF] bg-clip-text text-transparent">
        {active ? `${count}${stat.suffix}` : stat.value}
      </span>
      <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
        {stat.label}
      </span>
    </AnimateIn>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-[#111111] border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]"
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
