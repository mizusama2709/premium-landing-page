interface Testimonial {
  initials: string;
  avatarColor: string;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    initials: "SK",
    avatarColor: "from-indigo-500 to-violet-500",
    name: "Sarah Kim",
    role: "CTO at Luminary",
    quote:
      "PremiumApp cut our time-to-launch in half. The integrations are seamless and the support team is genuinely world-class. We couldn't imagine shipping without it.",
  },
  {
    initials: "MR",
    avatarColor: "from-violet-500 to-purple-500",
    name: "Marcus Reid",
    role: "Founder at Stackly",
    quote:
      "We evaluated five platforms and nothing came close. The real-time analytics alone have driven a 30% increase in our activation rate in just 60 days.",
  },
  {
    initials: "AP",
    avatarColor: "from-purple-500 to-pink-500",
    name: "Anika Patel",
    role: "Head of Engineering at NovaTech",
    quote:
      "Security was our biggest concern switching platforms. PremiumApp's zero-trust architecture and SOC 2 compliance gave our board immediate confidence.",
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
    <section className="bg-zinc-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by builders
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            Thousands of teams trust PremiumApp to power their most important
            products.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-5 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="text-sm text-zinc-300 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
