import { Rocket, ShieldCheck, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: Rocket,
    title: "Speed + Precision",
    badge: "75% Faster Delivery",
    points: [
      "8 weeks from concept to production-ready AI application",
      "Proprietary AI-enabled dev process — 75% faster, 70% fewer defects",
      "Security best practices embedded from day one",
      "Automated testing & CI/CD with every release cycle",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AI Specialization",
    badge: "50+ Models Delivered",
    points: [
      "Exclusive focus on enterprise-grade AI & ML solutions",
      "Proven track record with 50+ AI models shipped globally",
      "Zero security incidents across all client projects",
      "Deep expertise in LLMs, Computer Vision & Predictive Analytics",
    ],
  },
  {
    icon: Lightbulb,
    title: "Startup-Optimized",
    badge: "2-Week Prototypes",
    points: [
      "2-week functional prototype before full commitment",
      "Built for early teams operating on limited runway",
      "Enterprise-level results without enterprise timelines",
      "Flexible engagement models designed for modern founders",
    ],
  },
];

const WhyChooseUs = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, hsl(43 96% 56% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Why Choose Horizon
          </span>
          <h2 className="section-title">
            Built for the AI-First{" "}
            <span className="text-amber-gradient">Enterprise</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We don't just build AI — we architect intelligent systems that
            deliver measurable ROI from the first sprint.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="card-premium group reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(43 96% 56% / 0.12)",
                  border: "1px solid hsl(43 96% 56% / 0.25)",
                }}
              >
                <r.icon
                  className="w-6 h-6"
                  style={{ color: "hsl(43 96% 56%)" }}
                />
              </div>

              {/* Badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  background: "hsl(43 96% 56% / 0.1)",
                  color: "hsl(43 96% 56%)",
                  border: "1px solid hsl(43 96% 56% / 0.2)",
                }}
              >
                {r.badge}
              </span>

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "hsl(210 40% 96%)" }}
              >
                {r.title}
              </h3>

              <ul className="space-y-3">
                {r.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "hsl(215 20% 55%)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "hsl(43 96% 56%)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <button
                className="mt-6 text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: "hsl(43 96% 56%)" }}
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
