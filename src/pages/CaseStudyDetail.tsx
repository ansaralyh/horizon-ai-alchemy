import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Activity, ArrowUpRight, BarChart3, Clock, Target, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  const isGreenTheme = caseStudy?.themeColor === "emerald";
  const accentColorClass = isGreenTheme ? "emerald-500" : "amber-500";
  const accentBorderClass = isGreenTheme ? "border-emerald-500/20" : "border-amber-500/20";
  const accentBgClass = isGreenTheme ? "bg-emerald-500/10" : "bg-amber-500/10";
  const accentTextClass = isGreenTheme ? "text-emerald-500" : "text-amber-500";
  const accentGlowClass = isGreenTheme ? "shadow-[0_0_20px_#10b981]" : "shadow-[0_0_20px_#f59e0b]";
  const accentGradientClass = isGreenTheme ? "from-emerald-500/10" : "from-amber-500/10";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!caseStudy || !caseStudy.hero) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Case Study Not Found</h2>
          <Link to="/case-studies" className="text-amber-500 hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-500/30">
      <Navbar />

      <main>
        {/* --- SECTION 1: HERO SECTION --- */}
        <section className="relative pt-40 pb-32 overflow-hidden border-b border-white/5">
           {/* Background Accents */}
           <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${accentBgClass} blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none`} />
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Back to Library</span>
              </Link>
              
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 space-y-8 animate-fade-up">
                  <div className={`inline-flex items-center gap-3 px-4 py-1.5 ${accentBgClass} border ${accentBorderClass} rounded-full text-[11px] font-bold ${accentTextClass} uppercase tracking-[0.2em]`}>
                    <span className={`w-2 h-2 rounded-full ${isGreenTheme ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-amber-500 shadow-[0_0_8px_#f59e0b]"}`} />
                    {caseStudy.tag}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {caseStudy.hero.headline.includes("Verified Performance") ? (
                      <>
                        {caseStudy.hero.headline.split("Verified Performance")[0]}
                        <span className="text-amber-gradient">Verified Performance</span>
                      </>
                    ) : caseStudy.hero.headline}
                  </h1>
                  <p className="text-xl md:text-2xl text-[#A0AEC0] font-medium leading-premium max-w-2xl">
                    {caseStudy.hero.subheadline}
                  </p>

                  {caseStudy.bonusLine && (
                    <div className={`py-6 border-l-4 ${isGreenTheme ? "border-emerald-500" : "border-amber-500"} pl-8 bg-white/5 rounded-r-2xl inline-block mt-4`}>
                       <p className={`${accentTextClass} text-lg font-bold italic tracking-wide`}>
                          "{caseStudy.bonusLine}"
                       </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-6 pt-6">
                    <a href="#performance" className={`${isGreenTheme ? 'btn-emerald' : 'btn-amber'} px-10 py-5 text-base`}>
                      View Full Performance
                    </a>
                    <Link to="/contact" className={`${isGreenTheme ? 'btn-outline-emerald' : 'btn-outline-amber'} px-10 py-5 text-base`}>
                      Request Strategy Access
                    </Link>
                  </div>
                </div>
                
                {/* Hero Visual Image */}
                <div className="lg:col-span-5 relative hidden lg:block animate-fade-in-scale delay-300">
                  <div className={`absolute -inset-10 ${accentBgClass} rounded-full blur-[100px] shadow-2xl opacity-20`} />
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-card shadow-2xl group">
                      <img 
                        src={caseStudy.image || "/assets/placeholder-chart.jpg"} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-1000" 
                      />
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* --- SECTION 2: KEY METRICS GRID --- */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {caseStudy.hero.stats.map((stat, idx) => (
                <div key={idx} className="metric-card group reveal visible">
                  <span className={`text-[11px] font-bold ${accentTextClass} opacity-60 uppercase tracking-[0.2em] mb-4 block group-hover:opacity-100 transition-opacity`}>
                    {stat.label}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 3: STRATEGY OVERVIEW --- */}
        {caseStudy.overview && (
          <section className="py-32 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">
                   <div className="lg:col-span-7 space-y-10">
                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.overview.title}
                        </h2>
                        <div className="space-y-6">
                          {caseStudy.overview.content.map((p, idx) => (
                            <p key={idx} className="text-xl text-[#A0AEC0] leading-premium font-medium">
                              {idx === 0 ? <strong className="text-white block mb-2">{p.split('.')[0]}.</strong> : null}
                              {idx === 0 ? p.split('.').slice(1).join('.') : p}
                            </p>
                          ))}
                        </div>
                      </div>
                   </div>

                   <div className="lg:col-span-5 pt-4">
                      <div className="p-10 rounded-[2.5rem] bg-navy-card border border-white/10 space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${accentGradientClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                           <span className={`w-10 h-1 rounded-full ${isGreenTheme ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                           Key Features
                        </h3>
                        <ul className="space-y-6">
                          {caseStudy.overview.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-5 group/item">
                              <div className={`w-6 h-6 rounded-full ${accentBgClass} border ${accentBorderClass} flex items-center justify-center shrink-0 mt-1 self-start group-hover/item:bg-${isGreenTheme ? 'emerald' : 'amber'}-500 transition-all`}>
                                 <CheckCircle2 className={`w-4 h-4 ${accentTextClass} group-hover/item:text-[#0B0F19] transition-all`} />
                              </div>
                              <span className="text-gray-300 font-semibold text-lg">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 4: PERFORMANCE GALLERY --- */}
        <section id="performance" className="py-32 bg-white/[0.01] relative border-y border-white/5">
           <div className={`absolute left-0 top-1/2 w-[600px] h-[600px] ${accentBgClass} blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none`} />
           
            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="max-w-4xl mb-20 animate-fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Performance Gallery
                  </h2>
                  <p className={`text-2xl text-[#A0AEC0] leading-premium border-l-4 ${isGreenTheme ? 'border-emerald-500/50' : 'border-amber-500/50'} pl-10`}>
                    Dive deep into the verified results of this strategy. We believe in full transparency through data-backed performance.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {caseStudy.gallery?.map((img, idx) => (
                    <div key={idx} className={`rounded-3xl overflow-hidden border border-white/10 bg-navy-card aspect-video shadow-2xl reveal visible group transition-all duration-500 hover:${accentBorderClass} cursor-zoom-in`}>
                       <img src={img} alt="Performance Chart detail" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-100" />
                    </div>
                  ))}
               </div>
            </div>
        </section>

        {/* --- SECTION 5: MONTHLY PERFORMANCE GRID --- */}
        {caseStudy.monthly && (
          <section className="py-32 relative">
             <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                   <div className="space-y-10">
                      <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.monthly.title}
                        </h2>
                        <p className="text-xl text-[#A0AEC0] leading-premium max-w-xl">
                          {caseStudy.monthly.content}
                        </p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        {caseStudy.monthly.returns.map((ret, idx) => (
                          <div key={idx} className={`p-8 rounded-3xl bg-navy-card border border-white/10 flex flex-col gap-4 group hover:${accentBorderClass} transition-all duration-300`}>
                            <div className="flex justify-between items-center">
                               <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">{ret.month}</span>
                               <div className={`${isGreenTheme ? "bg-green-500/10" : "bg-amber-500/10"} p-2 rounded-lg`}>
                                  <ArrowUpRight className={`${isGreenTheme ? "text-green-500" : "text-amber-500"} w-4 h-4`} />
                               </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                               <span className={`text-4xl font-bold ${isGreenTheme ? "text-green-400" : "text-amber-400"} font-mono italic`}>{ret.value}</span>
                               <span className="text-xs font-bold text-gray-600 uppercase">Growth</span>
                            </div>
                            <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <div className={`h-full bg-gradient-to-r ${isGreenTheme ? "from-green-500 to-emerald-400" : "from-amber-500 to-amber-400"}`} style={{ width: `${Math.min(parseFloat(ret.value), 100)}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Custom Graphic for this section */}
                   <div className="relative aspect-square hidden lg:flex items-center justify-center">
                      <div className={`absolute inset-0 ${accentBgClass} rounded-full blur-[120px] opacity-20`} />
                      <div className="relative w-full h-full p-12 bg-white/[0.02] rounded-full border border-white/5 flex items-center justify-center group animate-spin-slow">
                         <BarChart3 className={`${accentTextClass} w-32 h-32 opacity-10 group-hover:scale-110 transition-transform`} />
                         <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${isGreenTheme ? "bg-emerald-500 shadow-[0_0_15px_#10b981]" : "bg-amber-500 shadow-[0_0_15px_#f59e0b]"}`} />
                         <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full ${!isGreenTheme ? "bg-emerald-500 shadow-[0_0_15px_#10b981]" : "bg-amber-500 shadow-[0_0_15px_#f59e0b]"}`} />
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 6: RISK MANAGEMENT SPLIT --- */}
        {caseStudy.risk && (
          <section className="py-32 bg-white/[0.01] border-y border-white/5 relative">
             <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                   <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {caseStudy.risk.title}
                      </h2>
                      <p className="text-xl text-[#A0AEC0] leading-premium">
                        {caseStudy.risk.content}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-6 pt-8">
                         <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                            <Clock className={`${accentTextClass} w-8 h-8`} />
                            <div className="text-sm text-gray-400 capitalize">Fast Execution</div>
                            <div className="text-2xl font-bold">~6h Avg. Hold</div>
                         </div>
                         <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                            <Target className={`${accentTextClass} w-8 h-8`} />
                            <div className="text-sm text-gray-400 capitalize">High Precision</div>
                            <div className="text-2xl font-bold">1:1.91 R:R</div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      {caseStudy.risk.metrics.map((m, idx) => (
                        <div key={idx} className="flex justify-between items-center p-8 rounded-3xl bg-navy-card border border-white/10 group hover:${accentBorderClass} transition-all">
                           <div className="flex items-center gap-6">
                              <div className={`p-4 rounded-2xl ${accentBgClass}`}>
                                 <ShieldCheck className={`${accentTextClass} w-6 h-6`} />
                              </div>
                              <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{m.label}</span>
                           </div>
                           <span className="text-2xl font-bold text-white font-mono tracking-tighter">{m.value}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 7: TRUST / VERIFICATION --- */}
        {caseStudy.trust && (
          <section className="py-40 relative">
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${accentBgClass} blur-[120px] opacity-10 rounded-full`} />
             <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
                <div className={`inline-flex items-center justify-center p-6 ${accentBgClass} rounded-[2.5rem] border ${accentBorderClass} mb-4`}>
                   <Globe className={`${accentTextClass} w-10 h-10`} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {caseStudy.trust.title}
                </h2>
                <p className="text-2xl text-[#A0AEC0] max-w-3xl mx-auto leading-premium font-medium">
                  {caseStudy.trust.content}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {caseStudy.trust.points.map((p, idx) => (
                    <div key={idx} className={`flex items-center gap-4 px-8 py-5 bg-navy-card border border-white/10 rounded-2xl group hover:${accentBorderClass} transition-all`}>
                       <CheckCircle2 className={`w-6 h-6 ${accentTextClass}`} />
                       <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{p}</span>
                    </div>
                  ))}
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 8: FULL WIDTH CTA --- */}
        {caseStudy.cta && (
          <section className="pb-40 px-6">
             <div className={`max-w-7xl mx-auto rounded-[4rem] px-8 py-24 relative overflow-hidden text-center space-y-12 bg-gradient-to-b from-[#111726] to-[#0B0F19] border border-white/5`}>
                <div className={`absolute -top-40 -left-40 w-96 h-96 ${accentBgClass} blur-[100px] opacity-20`} />
                <div className={`absolute -bottom-40 -right-40 w-96 h-96 ${accentBgClass} blur-[100px] opacity-20`} />
                
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-4xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {caseStudy.cta.title}
                </h2>
                <p className="text-2xl text-[#A0AEC0] font-medium max-w-2xl mx-auto leading-premium">
                  {caseStudy.cta.content}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
                  <Link to={caseStudy.cta.buttons[0].href} className={`${isGreenTheme ? 'btn-emerald' : 'btn-amber'} px-14 py-7 text-xl shadow-2xl`}>
                    {caseStudy.cta.buttons[0].label}
                  </Link>
                  <Link to={caseStudy.cta.buttons[1].href} className={`${isGreenTheme ? 'btn-outline-emerald' : 'btn-outline-amber'} px-14 py-7 text-xl`}>
                    {caseStudy.cta.buttons[1].label}
                  </Link>
                </div>
             </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

