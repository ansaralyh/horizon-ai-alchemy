import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Horizon Bee Tech transformed our entire data pipeline with AI. Our operational efficiency improved by 340% in the first quarter post-launch. Exceptional team.",
    name: "Sarah Chen",
    title: "CTO, TechFlow",
    initials: "SC",
  },
  {
    quote:
      "The predictive models they engineered gave us an unfair competitive advantage in the market. Our revenue forecast accuracy went from 65% to 94%.",
    name: "Michael Ross",
    title: "CEO, DataVerse",
    initials: "MR",
  },
  {
    quote:
      "Their AI chatbot solution autonomously handles 80% of our customer queries, reducing our support load by $2M annually. It's genuinely impressive.",
    name: "Priya Patel",
    title: "VP Engineering, NovaSoft",
    initials: "PP",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Testimonials
          </span>
          <h2 className="section-title">
            What Our <span className="text-amber-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Trusted by forward-thinking companies that put AI at the center of
            their growth strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="card-premium flex flex-col reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote
                className="w-8 h-8 mb-4"
                style={{ color: "hsl(43 96% 56% / 0.5)" }}
              />
              <p
                className="text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ color: "hsl(215 20% 65%)" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(38 90% 42%) 100%)",
                    color: "hsl(220 27% 6%)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "hsl(210 40% 96%)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "hsl(215 20% 50%)" }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
