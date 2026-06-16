interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10K+", label: "Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Integrations" },
  { value: "4.9★", label: "Rating" },
];

export default function Stats() {
  return (
    <section className="bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-zinc-800">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1 lg:px-8"
            >
              <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
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
