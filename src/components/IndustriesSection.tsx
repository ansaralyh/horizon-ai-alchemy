import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ShoppingBag,
  HeartPulse,
  Landmark,
  Truck,
  Home,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    name: "E-commerce",
    icon: ShoppingBag,
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
  },
  {
    name: "Finance",
    icon: Landmark,
  },
  {
    name: "Logistics",
    icon: Truck,
  },
  {
    name: "Real Estate",
    icon: Home,
  },
];

const IndustriesSection = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section className="relative py-28 overflow-hidden bg-background">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(43 96% 56% / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-20 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Industries
          </span>
          <h2 className="section-title">
            Industries We Support With{" "}
            <span className="text-amber-gradient">AI Automation</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We help organizations across a wide range of industries streamline
            workflows, reduce manual effort, and improve operational efficiency
            through practical AI automation. Our approach adapts to each
            industry’s processes, compliance needs, and technology landscape.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20 reveal delay-200">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl card-premium text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "hsl(43 96% 56% / 0.1)",
                  border: "1px solid hsl(43 96% 56% / 0.2)",
                }}
              >
                <industry.icon
                  className="w-8 h-8 transition-colors duration-300 group-hover:text-primary"
                  style={{ color: "hsl(43 96% 56%)" }}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center reveal delay-400">
          <button
            onClick={() => navigate("/services")}
            className="btn-amber group"
          >
            Industries
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
