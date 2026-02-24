import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    tag: "Predictive Analytics",
    client: "TechFlow",
    title: "340% Efficiency Gain with AI Data Pipeline",
    desc: "Redesigned their legacy data infrastructure with a real-time ML pipeline, reducing processing time by 87% and enabling predictive demand forecasting.",
    metrics: ["340% efficiency", "87% faster", "$4.2M saved"],
  },
  {
    tag: "LLM / NLP",
    client: "NovaSoft",
    title: "Autonomous Support Chatbot — 80% Query Resolution",
    desc: "Built an enterprise LLM chatbot trained on 3 years of support data, now handling 80% of customer queries without human intervention.",
    metrics: ["80% autonomous", "$2M/yr saved", "4.8★ CSAT"],
  },
  {
    tag: "Predictive AI",
    client: "DataVerse",
    title: "Revenue Forecast Accuracy from 65% → 94%",
    desc: "Deployed a multi-model ensemble for revenue and market trend prediction that outperformed all existing BI tools by 29 percentage points.",
    metrics: ["94% accuracy", "+29pp uplift", "6wk delivery"],
  },
];

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 60%, hsl(43 96% 56% / 0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Case Studies
          </span>
          <h2 className="section-title">
            Real AI.{" "}
            <span className="text-amber-gradient">Real Impact.</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            From prototype to production — see how we've engineered AI
            transformations that deliver measurable ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.title}
              className="card-premium group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "hsl(43 96% 56% / 0.1)",
                    color: "hsl(43 96% 56%)",
                    border: "1px solid hsl(43 96% 56% / 0.2)",
                  }}
                >
                  {cs.tag}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "hsl(43 96% 56% / 0.5)" }}
                />
              </div>

              <div
                className="text-xs font-semibold mb-2 tracking-wide"
                style={{ color: "hsl(215 20% 50%)" }}
              >
                {cs.client}
              </div>

              <h3
                className="text-base font-bold mb-3 leading-snug"
                style={{ color: "hsl(210 40% 96%)" }}
              >
                {cs.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "hsl(215 20% 55%)" }}
              >
                {cs.desc}
              </p>

              {/* Metrics */}
              <div className="flex gap-2 flex-wrap">
                {cs.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{
                      background: "hsl(220 20% 14%)",
                      color: "hsl(43 96% 56%)",
                      border: "1px solid hsl(220 20% 18%)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <button className="btn-outline-amber">
            View All Case Studies →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
