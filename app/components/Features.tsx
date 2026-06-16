"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <polyline points="8 12 10 14 16 8" />
      </svg>
    ),
    title: "Recovery Score",
    description:
      "Daily 0-100 recovery score derived from HRV and resting heart rate. Know exactly when to push and when to rest.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: "Sleep Analytics",
    description:
      "Track sleep stages — Deep, REM, Light, and Awake — across 14 nights of history. See your sleep debt and performance score.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Strain Tracking",
    description:
      "0-21 strain scale measuring cardiovascular load. Understand how hard your body is working day to day.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "HRV Trends",
    description:
      "7, 30, and 90-day trend charts for HRV, recovery, strain, and sleep. Spot patterns that matter.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Apple Health Import",
    description:
      "Import your Apple Health export.zip — even 400MB+ files — with a streaming parser that never crashes your phone.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Total Privacy",
    description:
      "All data processed on-device. No account. No server. No subscription. Your health data stays yours.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#16EC06]">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything your health data deserves
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            Six powerful views. One beautiful dashboard. All on your device —
            no account, no subscription, no server.
          </p>
        </AnimateIn>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateIn key={feature.title} delay={index * 0.1}>
              <motion.div
                className="group relative bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#16EC06]/50 hover:bg-[#111111]/80 transition-all duration-300"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#16EC06]/5 to-[#7BA0FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#16EC06]/10 border border-[#16EC06]/20 text-[#16EC06] group-hover:bg-[#16EC06]/20 group-hover:text-[#16EC06] transition-colors duration-300"
                  whileHover={{ scale: 1.15 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Text */}
                <h3 className="text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
