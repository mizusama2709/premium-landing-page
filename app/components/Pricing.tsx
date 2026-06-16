"use client";

import type React from "react";
import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Export from Apple Health",
    description:
      "Open the Health app → your profile → Export All Health Data. This creates a .zip file with all your data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Import into WHOOP Health",
    description:
      "Open WHOOP Health, tap Import, and select your export.zip. Our streaming parser handles even the largest files.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "See your dashboard",
    description:
      "Your recovery score, sleep analytics, strain, and HRV trends appear instantly — all analyzed on your device.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="7 10 10 7 13 10 17 6" />
      </svg>
    ),
  },
];

export default function Pricing() {
  return (
    <section id="how-it-works" className="bg-[#111111] py-24 sm:py-32 border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#16EC06]">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Up and running in 3 steps
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            No account. No server. No waiting. Your health insights are
            minutes away.
          </p>
        </AnimateIn>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 0.2}>
              <div className="relative flex flex-col bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl p-8 gap-6 hover:border-[#16EC06]/40 transition-all duration-300 hover:-translate-y-1">
                {/* Step number circle */}
                <div className="w-12 h-12 rounded-full bg-[#16EC06] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-extrabold text-sm">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#16EC06]/10 border border-[#16EC06]/20 text-[#16EC06]">
                  {step.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (hidden on last card and on mobile) — replaced by animated version below */}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Animated connecting lines between step cards (desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-0 -mt-[calc(50%)] pointer-events-none" aria-hidden="true">
          {/* These are positioned absolutely via the parent grid; we render them as a separate decorative row */}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.3} className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-zinc-400 text-base">Ready to decode your health data?</p>
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-[#16EC06] text-black hover:bg-[#00cc00] transition-all duration-200 shadow-xl shadow-[#16EC06]/30 hover:-translate-y-0.5"
          >
            Download Free on iOS
          </a>
          <p className="text-sm text-zinc-600">Free forever · No account required · All data stays on your device</p>
        </AnimateIn>
      </div>
    </section>
  );
}
