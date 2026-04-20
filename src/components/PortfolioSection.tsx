import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/case-studies";

const PortfolioSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="portfolio" className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "hsl(220 24% 8%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 60%, hsl(43 96% 56% / 0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Case Studies
          </span>
          <h2 className="section-title">
            Real AI.{" "}
            <span className="text-amber-gradient">Real Impact.</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            From prototype to production — see how we've engineered AI
            transformations that deliver measurable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.slice(0, 3).map((cs, i) => (
            <Link
              to={`/case-studies/${cs.id}`}
              key={cs.id}
              className="card-premium group flex flex-col h-full reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-navy-elevated border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-60 z-10" />
                <img 
                  src={cs.image || "/assets/placeholder-chart.jpg"} 
                  alt={cs.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-amber-500/50 transition-colors">
                      {cs.themeColor === "emerald" ? (
                        <TrendingUp className="w-6 h-6 text-emerald-500" />
                      ) : cs.tag.includes("LLM") ? (
                        <ShieldCheck className="w-6 h-6 text-amber-500" />
                      ) : (
                        <BarChart3 className="w-6 h-6 text-amber-500" />
                      )}
                   </div>
                </div>
                <div className="absolute top-3 left-3 z-30">
                  <span className={`px-2.5 py-1 ${cs.themeColor === 'emerald' ? 'bg-emerald-500 border-emerald-400/50' : 'bg-amber-500 border-amber-400/50'} border rounded-full text-[9px] font-bold uppercase tracking-widest text-[#0B0F19]`}>
                    {cs.tag}
                  </span>
                </div>
              </div>

              <div className="flex-1 px-1">
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] ${cs.themeColor === 'emerald' ? 'text-emerald-500/80' : 'text-amber-500/80'} mb-2`}>
                  {cs.client}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors leading-tight">
                  {cs.title}
                </h3>
                <p className="text-gray-400 mb-5 leading-premium text-sm font-medium line-clamp-3">
                  {cs.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 px-1">
                {cs.metrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-300 group-hover:border-amber-500/30 group-hover:text-amber-500 transition-all"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-white/5 px-1 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  View Case Study
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-amber-500 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center reveal">
          <Link to="/case-studies" className="btn-outline-amber px-10 py-4 text-base">
            View All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
