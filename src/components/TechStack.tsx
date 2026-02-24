import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "PyTorch", category: "Neural Networks" },
  { name: "OpenAI GPT", category: "LLM" },
  { name: "LangChain", category: "AI Agents" },
  { name: "Hugging Face", category: "NLP" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "AWS SageMaker", category: "ML Ops" },
  { name: "Google Cloud AI", category: "Platform" },
  { name: "Apache Spark", category: "Data Pipeline" },
  { name: "Ray", category: "Distributed AI" },
  { name: "MLflow", category: "Experiment Tracking" },
  { name: "FastAPI", category: "API Layer" },
];

const TechStack = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, hsl(43 96% 56% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-14 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Technology
          </span>
          <h2 className="section-title">
            Our AI <span className="text-amber-gradient">Technology Stack</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Built on battle-tested, industry-leading frameworks — the same
            platforms powering Fortune 500 AI systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 reveal">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-badge flex-col items-center text-center py-4 cursor-default reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center font-bold text-xs"
                style={{
                  background: "hsl(43 96% 56% / 0.1)",
                  color: "hsl(43 96% 56%)",
                  border: "1px solid hsl(43 96% 56% / 0.2)",
                }}
              >
                {tech.name.charAt(0)}
              </div>
              <span
                className="font-semibold text-xs mb-0.5"
                style={{ color: "hsl(210 40% 80%)" }}
              >
                {tech.name}
              </span>
              <span
                className="text-xs"
                style={{ color: "hsl(215 20% 45%)" }}
              >
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
