"use client";

import { motion } from "framer-motion";
import AnimateIn from "./AnimateIn";

interface Testimonial {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "AR",
    avatarColor: "from-[#16EC06] to-[#0093E7]",
    name: "Alex R.",
    role: "Marathon Runner",
    quote:
      "Finally understand why some days feel harder than others. The recovery score nails it every time.",
  },
  {
    initials: "MT",
    avatarColor: "from-[#0093E7] to-[#7BA0FF]",
    name: "Maya T.",
    role: "Personal Trainer",
    quote:
      "I use it with all my clients. The HRV trends alone are worth it. And it's free — no subscription nonsense.",
  },
  {
    initials: "JK",
    avatarColor: "from-[#7BA0FF] to-[#16EC06]",
    name: "James K.",
    role: "Sleep Researcher",
    quote:
      "The sleep stage breakdown is surprisingly accurate compared to my lab equipment. Impressive for a free app.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-amber-400"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateIn className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#16EC06]">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by health-conscious people
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            From runners to researchers — WHOOP Health helps everyone
            understand their body better.
          </p>
        </AnimateIn>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimateIn key={t.name} delay={index * 0.15}>
              <motion.div
                className="group bg-[#111111] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-5 hover:border-[#16EC06]/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="text-sm text-zinc-300 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-[#2a2a2a]">
                  {/* Avatar */}
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-black text-sm font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
