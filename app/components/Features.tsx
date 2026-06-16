import type { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Performance",
    description:
      "Sub-100ms response times globally with edge-optimized infrastructure and intelligent caching built in from day one.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure by Default",
    description:
      "SOC 2 Type II certified with end-to-end encryption, zero-trust architecture, and automatic vulnerability scanning.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "Easy Integration",
    description:
      "Connect to 50+ tools in minutes with our plug-and-play SDK, REST API, and webhooks — no boilerplate required.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Real-time Analytics",
    description:
      "Live dashboards with actionable insights, funnel analysis, cohort tracking, and custom event reporting.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Role-based access, shared workspaces, audit logs, and real-time multiplayer editing for teams of any size.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Dedicated support engineers, live chat, priority ticketing, and a comprehensive knowledge base — always on.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything you need
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl">
            One platform. All the tools your team needs to move fast, stay
            secure, and scale with confidence.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/50 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
