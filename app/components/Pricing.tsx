interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$9",
    period: "/mo",
    description: "Perfect for indie makers and small projects just getting off the ground.",
    features: [
      "Up to 3 projects",
      "5,000 monthly events",
      "Basic analytics",
      "Email support",
      "1 team member",
      "API access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing teams that need more power, speed, and collaboration.",
    features: [
      "Unlimited projects",
      "500K monthly events",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "Webhooks & integrations",
      "Custom dashboards",
      "SSO (SAML)",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations with security and compliance needs.",
    features: [
      "Unlimited everything",
      "Dedicated infrastructure",
      "SLA guarantee (99.99%)",
      "24/7 phone support",
      "Unlimited team members",
      "Custom integrations",
      "SOC 2 reports",
      "HIPAA compliance",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-indigo-400 flex-shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-900 py-24 sm:py-32 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            No hidden fees. No surprises. Start free, scale as you grow.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 gap-6 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-gradient-to-b from-indigo-950/60 to-zinc-950 border-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-[1.03]"
                  : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Most Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      tier.highlighted
                        ? "bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-zinc-500 text-sm mb-1">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">{tier.description}</p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`w-full inline-flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400 shadow-lg shadow-indigo-500/25"
                    : "border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {tier.cta}
              </a>

              {/* Divider */}
              <div className="border-t border-zinc-800" />

              {/* Feature list */}
              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
