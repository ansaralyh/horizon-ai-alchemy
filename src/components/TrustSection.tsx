import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "TechFlow", "DataVerse", "NovaSoft", "Axion Labs",
  "Nexus AI", "ClearPath", "IntelliOps", "FutureSync",
];

const achievements = [
  { value: "ISO 27001", label: "Security Certified" },
  { value: "SOC 2", label: "Type II Compliant" },
  { value: "GDPR", label: "Privacy Ready" },
  { value: "0", label: "Security Incidents" },
];

const TrustSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Client logos */}
        <div className="text-center mb-12 reveal">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "hsl(215 20% 45%)" }}
          >
            Trusted By Forward-Thinking Companies
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 reveal">
          {clients.map((client) => (
            <div
              key={client}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-default"
              style={{
                background: "hsl(220 20% 12%)",
                border: "1px solid hsl(220 20% 18%)",
                color: "hsl(215 20% 55%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(43 96% 56% / 0.3)";
                (e.currentTarget as HTMLElement).style.color = "hsl(43 96% 56%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(220 20% 18%)";
                (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 55%)";
              }}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {achievements.map((ach, i) => (
            <div
              key={ach.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl"
              style={{
                background: "hsl(220 20% 10%)",
                border: "1px solid hsl(43 96% 56% / 0.15)",
              }}
            >
              <span
                className="text-2xl font-black mb-1"
                style={{ color: "hsl(43 96% 56%)" }}
              >
                {ach.value}
              </span>
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: "hsl(215 20% 50%)" }}
              >
                {ach.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
