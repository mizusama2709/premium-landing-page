export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Now in public beta
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-lg">
              The all-in-one platform to launch, grow, and scale your product
              — faster than ever.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400 transition-all duration-200 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Demo
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm text-zinc-600">
              No credit card required · Cancel anytime · Free 14-day trial
            </p>
          </div>

          {/* Right: mock dashboard card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-2xl rounded-3xl" />

            <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 text-xs text-zinc-500 font-mono">dashboard.premiumapp.io</span>
              </div>

              {/* Dashboard content */}
              <div className="p-5 flex flex-col gap-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Revenue", value: "$48.2K", change: "+12%", up: true },
                    { label: "Users", value: "10,841", change: "+8%", up: true },
                    { label: "Churn", value: "0.9%", change: "-3%", up: false },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-3"
                    >
                      <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                      <p className="text-sm font-bold text-white">{stat.value}</p>
                      <p
                        className={`text-xs font-medium mt-0.5 ${
                          stat.up ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-zinc-300">Monthly Revenue</span>
                    <span className="text-xs text-indigo-400 font-medium">↑ 18% YoY</span>
                  </div>
                  {/* Bar chart mock */}
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100].map(
                      (height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-600 to-violet-500 opacity-80 hover:opacity-100 transition-opacity"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Jan", "Apr", "Jul", "Oct", "Dec"].map((m) => (
                      <span key={m} className="text-[10px] text-zinc-600">{m}</span>
                    ))}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-zinc-400">Recent Activity</p>
                  {[
                    { icon: "🟢", text: "New user signed up", time: "2m ago" },
                    { icon: "💳", text: "Payment processed $299", time: "14m ago" },
                    { icon: "📊", text: "Report generated", time: "1h ago" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800/40 border border-zinc-700/30"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-xs text-zinc-300">{item.text}</span>
                      </div>
                      <span className="text-[10px] text-zinc-600 flex-shrink-0">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
