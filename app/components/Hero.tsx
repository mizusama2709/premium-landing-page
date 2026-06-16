export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-16">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#16EC06]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0093E7]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16EC06]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-[#16EC06]/30 bg-[#16EC06]/10 text-[#16EC06] text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16EC06] animate-pulse" />
              iOS App — Free Download
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Your health data.{" "}
              <br />
              <span className="bg-gradient-to-r from-[#16EC06] to-[#7BA0FF] bg-clip-text text-transparent">
                Finally decoded.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-lg">
              Import your Apple Health export and unlock your recovery score,
              strain, sleep quality, and HRV trends — all processed privately
              on your device.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold bg-[#16EC06] text-black hover:bg-[#00cc00] transition-all duration-200 shadow-xl shadow-[#16EC06]/30 hover:shadow-[#16EC06]/50 hover:-translate-y-0.5"
              >
                Download Free
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold border border-white/30 text-white hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            {/* Trust line */}
            <p className="text-sm text-zinc-600">
              Free forever · No account required · All data stays on your device
            </p>
          </div>

          {/* Right: Recovery ring mock */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-[#16EC06]/10 blur-3xl rounded-3xl" />

            <div className="relative w-full max-w-md bg-[#111111] border border-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden p-6 flex flex-col gap-6">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Today</p>
                  <p className="text-white font-bold text-lg">WHOOP Health</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16EC06]/10 border border-[#16EC06]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16EC06] animate-pulse" />
                  <span className="text-[#16EC06] text-xs font-semibold">LIVE</span>
                </div>
              </div>

              {/* Recovery Ring */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-44 h-44">
                  {/* Glow behind ring */}
                  <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 40px rgba(22,236,6,0.25)" }} />
                  <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
                    {/* Track */}
                    <circle
                      cx="90"
                      cy="90"
                      r="78"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="14"
                    />
                    {/* Progress — 78% = 0.78 * 2π * 78 ≈ 382.5, circumference = 490.1 */}
                    <circle
                      cx="90"
                      cy="90"
                      r="78"
                      fill="none"
                      stroke="#16EC06"
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray="490.1"
                      strokeDashoffset="107.8"
                    />
                  </svg>
                  {/* Center label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-extrabold text-white">78%</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5">Recovery</span>
                  </div>
                </div>

                {/* Mini rings row */}
                <div className="flex items-center gap-6">
                  {/* Strain */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#0093E7" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="51.4" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">57%</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Strain</span>
                  </div>
                  {/* Sleep */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#7BA0FF" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="19.1" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">84%</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Sleep</span>
                  </div>
                  {/* HRV */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#1a1a1a" strokeWidth="5" />
                        <circle cx="24" cy="24" r="19" fill="none" stroke="#FFDE00" strokeWidth="5" strokeLinecap="round" strokeDasharray="119.4" strokeDashoffset="47.8" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">60%</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider">HRV</span>
                  </div>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Recovery", value: "78%", sub: "Good", color: "#16EC06" },
                  { label: "Strain", value: "14.2", sub: "Moderate", color: "#0093E7" },
                  { label: "Sleep", value: "84%", sub: "7h 22m", color: "#7BA0FF" },
                  { label: "HRV", value: "62ms", sub: "+4 vs avg", color: "#FFDE00" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-3"
                  >
                    <p className="text-xs text-zinc-500 mb-1">{metric.label}</p>
                    <p className="text-lg font-bold text-white" style={{ color: metric.color }}>{metric.value}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{metric.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
