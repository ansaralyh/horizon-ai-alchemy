import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  { value: 50, suffix: "+", label: "AI Projects Delivered", desc: "Across 12 industries worldwide" },
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "Measured via post-launch NPS" },
  { value: 100, suffix: "+", label: "AI Models Deployed", desc: "In production environments" },
  { value: 75, suffix: "%", label: "Faster Development", desc: "vs. traditional AI firms" },
];

const StatItem = ({ value, suffix, label, desc }: typeof metrics[0]) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-1 sm:mb-2"
        style={{ color: "hsl(43 96% 56%)" }}
      >
        {count}{suffix}
      </span>
      <div
        className="text-base font-semibold mb-1"
        style={{ color: "hsl(210 40% 90%)" }}
      >
        {label}
      </div>
      <div className="text-sm" style={{ color: "hsl(215 20% 50%)" }}>
        {desc}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(43 96% 56% / 0.06) 0%, hsl(220 27% 6%) 40%, hsl(220 27% 6%) 60%, hsl(43 96% 56% / 0.04) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          borderTop: "1px solid hsl(43 96% 56% / 0.15)",
          borderBottom: "1px solid hsl(43 96% 56% / 0.15)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full box-border" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StatItem {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
