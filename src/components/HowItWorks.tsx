import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, FlaskConical, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We conduct a deep-dive audit of your business data, workflows, and objectives. Our AI architects design a bespoke intelligence roadmap aligned to your growth KPIs.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "2-Week Prototype",
    description:
      "Before any large investment, we ship a working AI prototype in 14 days. You validate the concept with real users and data — zero risk, total clarity.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Production Launch",
    description:
      "Our engineering team builds the full-scale solution in 8 weeks — enterprise-grade security, CI/CD pipelines, automated testing, and seamless integrations included.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Scale & Optimize",
    description:
      "Post-launch, we monitor model performance, retrain on fresh data, and continuously optimize for accuracy — ensuring your AI competes and improves over time.",
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section id="solutions" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 80%, hsl(43 96% 56% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-20 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Our Process
          </span>
          <h2 className="section-title">
            How It{" "}
            <span className="text-amber-gradient">Works</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A battle-tested 4-step AI delivery framework that moves from
            insight to impact — fast, focused, and fully transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-0 right-0 h-px hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, hsl(43 96% 56% / 0.2) 20%, hsl(43 96% 56% / 0.2) 80%, transparent 95%)",
            }}
          />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Step number circle */}
                <div className="flex flex-col items-start lg:items-center mb-6">
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(220 24% 12%) 0%, hsl(220 20% 10%) 100%)",
                      border: "1px solid hsl(43 96% 56% / 0.3)",
                      boxShadow: "0 0 20px hsl(43 96% 56% / 0.1)",
                    }}
                  >
                    <step.icon
                      className="w-7 h-7"
                      style={{ color: "hsl(43 96% 56%)" }}
                    />
                    <span
                      className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(38 90% 48%) 100%)",
                        color: "hsl(220 27% 6%)",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                <div className="lg:text-center">
                  <span
                    className="text-5xl font-black mb-3 block"
                    style={{ color: "hsl(220 20% 20%)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "hsl(210 40% 96%)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(215 20% 55%)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              num: "1",
              title: "2-Week Prototype",
              subtitle: "Market Validation",
              desc: "Validate your AI concept with a functional prototype before any large commitment.",
            },
            {
              num: "2",
              title: "Enterprise MVP",
              subtitle: "8-Week Launch",
              desc: "Transform validated concepts into stable, scalable production products.",
            },
            {
              num: "3",
              title: "AI Integration",
              subtitle: "Advanced Features",
              desc: "Add intelligence layers with full security compliance — accelerate innovation safely.",
            },
            {
              num: "4",
              title: "Low-Code Migration",
              subtitle: "Enterprise Upgrade",
              desc: "Migrate from low-code platforms to enterprise-grade, scalable architectures in 6 weeks.",
            },
            {
              num: "5",
              title: "MVP → Enterprise",
              subtitle: "Scale Ready",
              desc: "Evolve your MVP into an investor-grade, audit-ready enterprise platform.",
            },
            {
              num: "6",
              title: "AI Compliance",
              subtitle: "Risk & Regulation",
              desc: "Enterprise AI deployment with embedded security, compliance, and audit trails.",
            },
          ].map((sol, i) => (
            <div
              key={sol.num}
              className="card-premium group reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "hsl(43 96% 56% / 0.15)",
                    color: "hsl(43 96% 56%)",
                    border: "1px solid hsl(43 96% 56% / 0.25)",
                  }}
                >
                  {sol.num}
                </span>
                <span
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "hsl(43 96% 56%)" }}
                >
                  {sol.subtitle}
                </span>
              </div>
              <h4
                className="font-bold mb-2"
                style={{ color: "hsl(210 40% 96%)" }}
              >
                {sol.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "hsl(215 20% 55%)" }}
              >
                {sol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
