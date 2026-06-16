interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "12+", label: "Health Metrics Tracked" },
  { value: "40+", label: "Days of Data Analyzed" },
  { value: "100%", label: "On-Device & Private" },
  { value: "4", label: "Dashboard Screens" },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1 lg:px-8"
            >
              <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#16EC06] to-[#7BA0FF] bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
