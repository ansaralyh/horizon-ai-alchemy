import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  LayoutGrid,
  ArrowRightLeft,
  Rocket,
  Sparkles,
  Building2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    phase: "2 Week Prototype for Market Validation",
    problem: "No Prototype No Funding",
    description:
      "Functional prototype in just 2 weeks. Test your idea with real users before committing to full development.",
    icon: LayoutGrid,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    phase: "Low-Code Migration to Enterprise-grade MVP",
    problem: "Low-Code Ceiling Growth Blocked",
    description:
      "Migrate from low-code platforms to enterprise-grade, scalable applications in 6 weeks.",
    icon: ArrowRightLeft,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    phase: "8-Week Scalable MVP Launch",
    problem: "No Scalable MVP No Ready Product",
    description:
      "Transform your validated concept into a real product with a stable, scalable MVP in 8 weeks.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    phase: "Advanced AI Features Integration",
    problem: "AI Features Risk Compliance Delays",
    description:
      "Add AI capabilities with full security compliance built-in. Accelerate innovation safely.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    phase: "MVP to Enterprise-Ready Transformation",
    problem: "MVP Success Enterprise Roadblocks",
    description:
      "Scale MVP into production-ready platform. Audit-ready, stronger architecture, investor-grade security.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
];

const SolutionsJourneySection = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden w-full">
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 60%, hsl(43 96% 56% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full box-border" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-24 reveal">
          <span className="section-label inline-flex items-center gap-2 mb-4">
            <span className="glow-dot" />
            Solutions
          </span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Solutions for Your{" "}
            <span className="text-amber-gradient">AI Innovation Journey</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto text-lg text-muted-foreground">
            A proven 5-step pathway from idea to enterprise-ready AI — no
            guesswork, full transparency.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          {/* Central Line for desktop */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2px] hidden md:block"
               style={{
                 background: "linear-gradient(to bottom, transparent, hsl(43 96% 56% / 0.2) 5%, hsl(43 96% 56% / 0.2) 95%, transparent)",
                 transform: "translateX(-50%)"
               }} 
          />
          {/* Left Line for mobile */}
          <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-[2px] block md:hidden"
               style={{
                 background: "linear-gradient(to bottom, transparent, hsl(43 96% 56% / 0.2) 5%, hsl(43 96% 56% / 0.2) 95%, transparent)"
               }} 
          />

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-8 sm:gap-10 lg:gap-16 reveal min-w-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  
                  {/* Image Side (DOM Child 1) */}
                  <div className={`w-full min-w-0 md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${isEven ? 'md:pr-8 lg:pr-16 xl:pr-20' : 'md:pl-8 lg:pl-16 xl:pl-20'}`}>
                    {/* Mobile Circle */}
                    <div className="md:hidden absolute left-0 top-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-[0_0_15px_hsl(43_96%_56%_/_0.3)] z-10"
                         style={{ background: "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(38 90% 48%) 100%)", color: "hsl(220 27% 6%)" }}>
                      {i + 1}
                    </div>

                    <div className="rounded-xl sm:rounded-2xl overflow-hidden card-premium aspect-[4/3] w-full max-w-md mx-auto group relative">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 mix-blend-multiply" />
                       <img src={step.image} alt={step.phase} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  </div>

                  {/* Desktop Center Circle */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center font-bold shadow-[0_0_20px_hsl(43_96%_56%_/_0.3)] z-10"
                       style={{ background: "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(38 90% 48%) 100%)", color: "hsl(220 27% 6%)" }}>
                    {i + 1}
                  </div>

                  {/* Text Content Side (DOM Child 2) */}
                  <div className={`w-full min-w-0 md:w-1/2 pl-14 sm:pl-16 md:pl-0 ${isEven ? 'md:pl-8 lg:pl-16 xl:pl-20 md:text-left' : 'md:pr-8 lg:pr-16 xl:pr-20 md:text-right'}`}>
                    <div className={`flex flex-col min-w-0 ${isEven ? 'md:items-start' : 'md:items-end'}`}>
                      <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1 sm:mb-2" style={{ color: "hsl(43 96% 56%)" }}>
                        Step {i + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 leading-tight break-words" style={{ color: "hsl(210 40% 96%)" }}>
                        {step.problem}
                      </h3>
                      <div className={`flex items-start gap-4 ${isEven ? 'flex-row' : 'flex-row md:flex-row-reverse'}`}>
                         <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110"
                              style={{ background: "hsl(43 96% 56% / 0.12)", border: "1px solid hsl(43 96% 56% / 0.25)" }}>
                           <step.icon className="w-6 h-6" style={{ color: "hsl(43 96% 56%)" }} />
                         </div>
                         <div className={`flex flex-col min-w-0 ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
                           <span className="text-sm sm:text-base font-semibold mb-1 sm:mb-2 break-words" style={{ color: "hsl(43 96% 56%)" }}>
                             {step.phase}
                           </span>
                           <p className="text-sm sm:text-base leading-relaxed break-words" style={{ color: "hsl(215 20% 55%)" }}>
                             {step.description}
                           </p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 sm:mt-24 md:mt-32 reveal">
          <button
            onClick={() => navigate("/contact")}
            className="btn-amber group text-base px-10 py-4"
          >
            Start Your Innovation Journey
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 inline-flex" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsJourneySection;
