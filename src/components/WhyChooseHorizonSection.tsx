import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, ShieldCheck, Lightbulb, ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const baseReasons = [
  {
    icon: Rocket,
    title: "Speed + Precision",
    points: [
      "8 weeks to a production ready AI application",
      "Proprietary AI-enabled development process — 75% faster, 70% fewer defects",
      "Security best practices embedded from day one",
      "Automated testing & documentation with every release",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AI Specialization",
    points: [
      "Exclusive focus on enterprise-grade AI solutions",
      "Proven track record with 50+ AI models delivered globally",
      "Zero security incidents across all projects",
      "Deep expertise in LLMs, Computer Vision, and Predictive Analytics",
    ],
  },
  {
    icon: Lightbulb,
    title: "Startup Optimized Process",
    points: [
      "2-week prototype before full commitment",
      "Built for early teams operating efficiently on limited runway",
      "Enterprise-level results without enterprise timelines",
      "Flexible engagement models designed for modern founders",
    ],
  },
];

// Duplicate for smooth infinite looping
const reasons = [...baseReasons, ...baseReasons];

const WhyChooseHorizonSection = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-background w-full">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, hsl(43 96% 56% / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full box-border" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Why Choose Us
          </span>
          <h2 className="section-title">
            Why Choose{" "}
            <span className="text-amber-gradient">Horizon Bee Tech</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto mt-2 text-gray-400">
            Built for the AI-first enterprise. We architect intelligent systems
            that deliver measurable ROI from the first sprint.
          </p>
        </div>

        {/* Enhanced Slider with Swiper */}
        <div className="relative group/slider reveal overflow-visible">
          <div className="overflow-hidden px-4 -mx-4">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next-why",
                prevEl: ".swiper-button-prev-why",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
              className="py-12"
            >
              {reasons.map((r, i) => (
                <SwiperSlide key={`${r.title}-${i}`}>
                  {({ isActive }) => (
                    <div
                      className={`card-premium group h-full transition-all duration-700 ease-in-out flex flex-col ${
                        isActive
                          ? "scale-105 opacity-100 z-10 shadow-[0_20px_50px_rgba(245,158,11,0.3)] border-amber-500/40 bg-black/40 backdrop-blur-xl"
                          : "scale-90 opacity-40 z-0 grayscale-[0.3] blur-[1px] translate-y-4"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                          isActive ? "scale-110" : "scale-100"
                        }`}
                        style={{
                          background: isActive ? "hsl(43 96% 56% / 0.2)" : "hsl(43 96% 56% / 0.12)",
                          border: isActive ? "1px solid hsl(43 96% 56% / 0.4)" : "1px solid hsl(43 96% 56% / 0.25)",
                        }}
                      >
                        <r.icon className="w-6 h-6" style={{ color: "hsl(43 96% 56%)" }} />
                      </div>

                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210 40% 96%)" }}
                      >
                        {r.title}
                      </h3>
                      
                      <div
                        className={`h-0.5 rounded-full mb-4 transition-all duration-700 ${
                          isActive ? "w-16 bg-amber-500" : "w-12 bg-white/10"
                        }`}
                      />

                      <ul className="space-y-3 flex-1">
                        {r.points.map((point) => (
                          <li
                            key={point}
                            className={`flex items-start gap-3 text-sm leading-relaxed transition-colors duration-500 ${
                              isActive ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            <Check
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: "hsl(43 96% 56%)" }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => navigate("/about")}
                        className={`mt-8 btn-outline-amber text-sm px-6 py-3 w-fit transition-all duration-300 font-semibold ${
                          isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"
                        }`}
                      >
                        Read More →
                      </button>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Arrows - visible on touch for mobile */}
          <button className="swiper-button-prev-why absolute top-1/2 left-1 sm:left-0 md:-left-8 lg:-left-12 z-20 w-9 h-9 sm:w-12 sm:h-12 -translate-y-1/2 flex items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur text-white/70 hover:text-amber-500 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all opacity-100 md:opacity-0 md:group-hover/slider:opacity-100">
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button className="swiper-button-next-why absolute top-1/2 right-1 sm:right-0 md:-right-8 lg:-right-12 z-20 w-9 h-9 sm:w-12 sm:h-12 -translate-y-1/2 flex items-center justify-center rounded-full border border-white/10 bg-background/80 backdrop-blur text-white/70 hover:text-amber-500 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all opacity-100 md:opacity-0 md:group-hover/slider:opacity-100">
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-16 reveal">
          <button
            onClick={() => navigate("/contact")}
            className="btn-amber group text-base px-10 py-4"
          >
            Start Your AI Innovation Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      <style>{`
        .bg-amber-gradient {
          background: linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(30 96% 56%) 100%);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseHorizonSection;
