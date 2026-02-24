import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCTA = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />

      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Border lines */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(43 96% 56% / 0.4), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(43 96% 56% / 0.2), transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <div className="reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "hsl(43 96% 56% / 0.1)",
              border: "1px solid hsl(43 96% 56% / 0.3)",
              color: "hsl(43 96% 56%)",
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            Ready to Transform?
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "hsl(210 40% 96%)" }}
          >
            Ready to Transform{" "}
            <span className="text-amber-gradient">Your Business</span>
            <br />
            with AI?
          </h2>

          <p
            className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "hsl(215 20% 55%)" }}
          >
            Let's build intelligent solutions that drive real, measurable
            results. Start with a free consultation — no commitment required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="btn-amber group text-base px-10 py-4"
            >
              Start Your Innovation Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate("/services")}
              className="btn-outline-amber text-base px-10 py-4"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
