import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useData } from "@/context/DataContext";

const ServicesSection = () => {
  const ref = useScrollReveal();
  const { services } = useData();

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, hsl(43 96% 56% / 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            What We Do
          </span>
          <h2 className="section-title">
            Our AI{" "}
            <span className="text-amber-gradient">Services</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            End-to-end artificial intelligence solutions engineered for modern
            enterprises that demand performance, security, and scale.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className="group rounded-2xl overflow-hidden transition-all duration-400 reveal flex flex-col h-full"
              style={{
                background: "hsl(220 24% 9%)",
                border: "1px solid hsl(220 20% 16%)",
                boxShadow: "0 4px 24px hsl(0 0% 0% / 0.4)",
                transitionDelay: `${i * 80}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "hsl(43 96% 56% / 0.35)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 40px hsl(0 0% 0% / 0.5), 0 0 20px hsl(43 96% 56% / 0.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "hsl(220 20% 16%)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px hsl(0 0% 0% / 0.4)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 shrink-0">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, hsl(220 24% 9%) 100%)",
                  }}
                />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold"
                  style={{
                    background: "hsl(43 96% 56% / 0.15)",
                    color: "hsl(43 96% 56%)",
                    border: "1px solid hsl(43 96% 56% / 0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {svc.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "hsl(210 40% 96%)" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-grow"
                  style={{ color: "hsl(215 20% 55%)" }}
                >
                  {svc.description}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-xs font-medium px-2 py-1 rounded-md ${svc.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {svc.status}
                  </span>
                  <button
                    className="text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ color: "hsl(43 96% 56%)" }}
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
