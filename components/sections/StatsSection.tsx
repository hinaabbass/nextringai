const stats = [
  {
    value: "47%",
    title: " trade calls go unanswered",
    description: "Every missed call is a job you never knew about",
  },
  {
    value: "85%",
    title: "Missed callers never ring back",
    description: "They move on before you even see the missed call",
  },
  {
    value: "60 sec",
    title: "How fast NextRing AI responds",
    description: "Every time, without fail, day or night",
  },
  {
    value: "£6,226",
    title: "Average value of a  roofing job",
    description: "One missed call. One lost job. Every single day.",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full px-6 py-20 md:px-10 bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-black shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative px-8 py-10 ${
                index !== stats.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              } border-white/10`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.18),transparent_45%)]" />

              <div className="relative z-10">
                {/* Value */}
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  {stat.value}
                </h3>

                {/* Title */}
                <p className="mt-4 text-lg text-white">{stat.title}</p>

                {/* Description */}
                <p className="mt-4 max-w-[220px] text-sm leading-6 text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
