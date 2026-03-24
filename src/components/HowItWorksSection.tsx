import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "discovery",
    title: "Discovery",
    description: "We identify where AI automation can remove friction and improve efficiency.",
    image: "/assets/service-analytics.jpg"
  },
  {
    id: "planning",
    title: "Planning",
    description: "We create a strategic roadmap for your AI journey, ensuring every step adds measurable value to your business.",
    image: "/assets/service-ml.jpg"
  },
  {
    id: "design",
    title: "Workflow Design",
    description: "We design custom AI workflows that integrate seamlessly with your existing technology stack and team processes.",
    image: "/assets/service-automation.jpg"
  },
  {
    id: "implementation",
    title: "Implementation",
    description: "Our engineers build and deploy your AI solutions with a focus on reliability, security, and immediate impact.",
    image: "/assets/service-chatbot.jpg"
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "We continuously monitor and refine your AI agents to ensure they adapt to new data and maximize operational performance.",
    image: "/assets/service-vision.jpg"
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const ref = useScrollReveal();

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-background w-full">
      {/* Decorative gradients */}
      <div className="absolute inset-0 mesh-bg opacity-5" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(43 96% 56% / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full box-border" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Process
          </span>
          <h2 className="section-title">
            How Our AI Automation Agency{" "}
            <span className="text-amber-gradient">Works With You</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We focus on automation that fits your real workflows, not generic tools.
            As an AI automation agency, we take time to understand how your teams
            operate and where manual work slows things down. Our process keeps
            decisions clear, timelines realistic, and outcomes measurable.
          </p>
        </div>

        {/* Tabbed Content Area */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center reveal delay-200">
          {/* Left: Step Buttons */}
          <div className="space-y-3 sm:space-y-4 min-w-0 flex flex-col items-center">
            {steps.map((step) => (
              <div key={step.id} className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] flex flex-col">
                <button
                  onClick={() => setActiveStep(step)}
                  className={cn(
                    "w-full px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl font-bold text-base transition-all duration-300 border text-center",
                    activeStep.id === step.id
                      ? "bg-primary text-primary-foreground border-primary shadow-amber"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:bg-primary/5"
                  )}
                >
                  {step.title}
                </button>
              </div>
            ))}
          </div>

          {/* Right: Circular Image / Visual & Description */}
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            <div className="relative aspect-square max-w-[220px] sm:max-w-[280px] md:max-w-[320px] mx-auto w-full animate-float min-w-0">
               {/* Glow effect behind circle */}
               <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
               
               {/* Circular Image Container */}
               <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                      <img 
                          src={activeStep.image} 
                          alt={activeStep.title}
                          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                      />
                  </div>
               </div>
               
               {/* Decorative small circles */}
               <div className="absolute -top-4 right-10 w-8 h-8 rounded-full bg-primary/40 blur-sm animate-pulse-amber" />
               <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-primary/20 blur-md animate-float delay-100" />
               <div className="absolute -bottom-6 left-1/4 w-10 h-10 rounded-full bg-primary/30 blur-md animate-pulse-amber delay-500" />
            </div>

            {/* Step Description below image */}
            <div className="w-full max-w-lg p-5 sm:p-6 rounded-2xl bg-navy-card/50 border border-navy-border/50 backdrop-blur-sm shadow-xl">
              <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-foreground animate-fade-in-scale break-words text-center">
                {activeStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
