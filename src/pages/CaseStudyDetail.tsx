import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, ShieldCheck, Activity, ArrowUpRight, BarChart3, Clock, Target, Globe, Layers, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  const isGreenTheme = caseStudy?.themeColor === "emerald";
  const isIndigoTheme = caseStudy?.themeColor === "indigo";
  
  const theme = {
    accent: isGreenTheme ? "emerald-500" : isIndigoTheme ? "indigo-500" : "amber-500",
    border: isGreenTheme ? "border-emerald-500/20" : isIndigoTheme ? "border-indigo-500/20" : "border-amber-500/20",
    borderStrong: isGreenTheme ? "border-emerald-500/40" : isIndigoTheme ? "border-indigo-500/40" : "border-amber-500/40",
    bg: isGreenTheme ? "bg-emerald-500/10" : isIndigoTheme ? "bg-indigo-500/10" : "bg-amber-500/10",
    text: isGreenTheme ? "text-emerald-500" : isIndigoTheme ? "text-indigo-500" : "text-amber-500",
    gradient: isGreenTheme ? "from-emerald-500/10" : isIndigoTheme ? "from-indigo-500/10" : "from-amber-500/10",
    glow: isGreenTheme ? "shadow-[0_0_20px_#10b981]" : isIndigoTheme ? "shadow-[0_0_20px_#6366f1]" : "shadow-[0_0_20px_#f59e0b]",
    btn: isGreenTheme ? "btn-emerald" : isIndigoTheme ? "btn-indigo" : "btn-amber",
    btnOutline: isGreenTheme ? "btn-outline-emerald" : isIndigoTheme ? "btn-outline-indigo" : "btn-outline-amber",
    glowColor: isGreenTheme ? "#10b981" : isIndigoTheme ? "#6366f1" : "#f59e0b"
  };
  
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
           <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${theme.bg} blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none`} />
           
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Back to Library</span>
              </Link>
              
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-12 lg:text-center space-y-8 animate-fade-up">
                  <div className={`inline-flex items-center gap-3 px-4 py-1.5 ${theme.bg} border ${theme.border} rounded-full text-[11px] font-bold ${theme.text} uppercase tracking-[0.2em]`}>
                    <span className={`w-2 h-2 rounded-full ${theme.text.replace('text-', 'bg-')} ${theme.glow}`} />
                    {caseStudy.tag}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {caseStudy.themeColor === 'amber' ? (
                      <>
                        {caseStudy.hero.headline.split("Verified Performance")[0]}
                        <span className="text-amber-gradient block sm:inline">Verified Performance</span>
                      </>
                    ) : (
                      caseStudy.hero.headline
                    )}
                  </h1>
                  <p className="text-lg md:text-xl text-[#A0AEC0] font-medium leading-premium max-w-3xl mx-auto">
                    {caseStudy.hero.subheadline}
                  </p>

                  {caseStudy.bonusLine && (
                    <div className={`py-6 border-l-4 ${theme.text.replace('text-', 'border-')} pl-8 bg-white/5 rounded-r-2xl inline-block mt-4 text-left`}>
                       <p className={`${theme.text} text-lg font-bold italic tracking-wide`}>
                          "{caseStudy.bonusLine}"
                       </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-6 pt-6">
                    <a href="#challenge" className={`${theme.btn} px-10 py-5 text-base`}>
                      Explore Case Study
                    </a>
                    <Link to="/contact" className={`${theme.btnOutline} px-10 py-5 text-base`}>
                      Get in Touch
                    </Link>
                  </div>
                </div>
                
                {/* Hero Visual Image */}
                <div className="lg:col-span-12 relative animate-fade-in-scale delay-300">
                  <div className={`absolute -inset-10 ${theme.bg} rounded-full blur-[100px] shadow-2xl opacity-20`} />
                  <div className={`relative rounded-3xl overflow-hidden border border-white/10 bg-navy-card shadow-2xl group hover:${theme.borderStrong} max-w-5xl mx-auto`}>
                      <img 
                        src={caseStudy.image || "/assets/placeholder-chart.jpg"} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-1000" 
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
                  <span className={`text-[11px] font-bold ${theme.text} opacity-60 uppercase tracking-[0.2em] mb-4 block group-hover:opacity-100 transition-opacity`}>
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

        {/* --- SECTION 3: OVERVIEW --- */}
        {caseStudy.overview && (
          <section className="py-24 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-[2px] ${theme.text.replace('text-', 'bg-')}`} />
                           <span className={`text-sm font-bold uppercase tracking-[0.3em] ${theme.text}`}>Project Overview</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.overview.title}
                        </h2>
                        <div className="space-y-6">
                          {caseStudy.overview.content.map((p, idx) => (
                            <p key={idx} className="text-xl text-[#A0AEC0] leading-premium font-medium">
                              {idx === 0 && p.includes('.') ? <strong className="text-white block mb-2">{p.split('.')[0]}.</strong> : null}
                              {idx === 0 && p.includes('.') ? p.split('.').slice(1).join('.') : p}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* OverView Features */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {caseStudy.overview.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                            <CheckCircle2 className={`w-5 h-5 ${theme.text} group-hover:scale-110 transition-transform`} />
                            <span className="text-gray-300 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Overview Image */}
                   <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-navy-card group">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60 z-10" />
                      <img 
                        src={caseStudy.gallery?.[0] || "/assets/service-automation.jpg"} 
                        alt="Project Overview" 
                        className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[2000ms]" 
                      />
                      <div className="absolute bottom-8 left-8 z-20">
                         <div className={`px-4 py-1 rounded-full ${theme.bg} border ${theme.border} text-[10px] font-bold ${theme.text} uppercase tracking-widest`}>
                            Operational View
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 4: CHALLENGE / OBJECTIVE --- */}
        {caseStudy.challenge && (
          <section id="challenge" className="py-24 relative overflow-hidden bg-white/[0.01]">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="lg:order-2 space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-[2px] ${theme.text.replace('text-', 'bg-')}`} />
                           <span className={`text-sm font-bold uppercase tracking-[0.3em] ${theme.text}`}>{caseStudy.id === 'nas100-algo-trading' ? 'Strategic Objective' : 'The Challenge'}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.challenge.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-[#A0AEC0] leading-premium font-medium italic">
                          "{caseStudy.challenge.content}"
                        </p>
                      </div>

                      <div className="space-y-4">
                        {caseStudy.challenge.problems.map((prob, idx) => (
                          <div key={idx} className={`flex items-start gap-4 p-5 rounded-2xl ${theme.bg} border ${theme.border} hover:${theme.borderStrong} transition-all group`}>
                             <div className={`w-6 h-6 rounded-full ${theme.bg} border ${theme.border} flex items-center justify-center shrink-0 mt-1`}>
                                <CheckCircle2 className={`${theme.text} w-4 h-4`} />
                             </div>
                             <span className="text-gray-300 font-semibold text-lg">{prob}</span>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="lg:order-1 relative">
                      <div className={`absolute -inset-10 ${theme.bg} rounded-full blur-[100px] opacity-10`} />
                      <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-navy-card shadow-2xl group">
                         <img src={caseStudy.challenge.image || "/assets/service-ml.jpg"} alt="Challenge Visualization" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-1000" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-bottom p-10">
                            <p className="text-white/60 font-medium mt-auto">Operational overview and strategic visualization.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 5: THE SOLUTION & KEY FEATURES --- */}
        {caseStudy.solution && (
          <section className="py-24 relative overflow-hidden">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                   <div className="space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-[2px] ${theme.text.replace('text-', 'bg-')}`} />
                           <span className={`text-sm font-bold uppercase tracking-[0.3em] ${theme.text}`}>The Solution</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.solution.title}
                        </h2>
                        <p className={`text-xl text-[#A0AEC0] leading-premium border-l-4 ${theme.text.replace('text-', 'border-')}/50 pl-8`}>
                          {caseStudy.solution.content}
                        </p>
                      </div>
                   </div>

                   <div className="relative">
                      <div className={`absolute -inset-10 ${theme.bg} rounded-full blur-[100px] opacity-20`} />
                      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                         <img src={caseStudy.solution.image || "/assets/service-nlp.jpg"} alt="Solution Implementation" className="w-full aspect-video object-cover" />
                         <div className={`absolute inset-0 ${theme.bg} mix-blend-overlay`} />
                      </div>
                   </div>
                </div>

                {/* Detailed Features Breakdown */}
                {caseStudy.featuresList && (
                   <div className="space-y-16 animate-fade-up">
                      <div className="flex items-center gap-4">
                         <div className={`w-2 h-2 rounded-full ${theme.text.replace('text-', 'bg-')}`} />
                         <h3 className="text-3xl font-bold text-white tracking-wider flex items-center gap-3">
                            <span className={theme.text}>✨</span> {caseStudy.id === 'nas100-algo-trading' ? 'Strategy Components' : 'Key Features'}
                         </h3>
                      </div>
                      <div className={`grid gap-8 ${caseStudy.featuresList.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
                         {caseStudy.featuresList.map((feat, idx) => {
                            const icons: any = { 
                                BrainCircuit: Activity, 
                                FileJson: BarChart3, 
                                Send: Globe,
                                Target: Target,
                                BarChart3: BarChart3,
                                Activity: Activity,
                                Settings: Settings
                            };
                            const Icon = icons[feat.iconName] || Settings;
                            return (
                              <div key={idx} className="group p-10 rounded-[2.5rem] bg-navy-card border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                                 <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                                 <div className={`w-14 h-14 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center mb-8 relative z-10`}>
                                    <Icon className={`${theme.text} w-7 h-7`} />
                                 </div>
                                 <h4 className="text-2xl font-bold text-white mb-6 relative z-10">{feat.title}</h4>
                                 {feat.points ? (
                                   <div className="space-y-4 relative z-10">
                                      {feat.points.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start gap-3 group/item">
                                           <CheckCircle2 className={`${theme.text} w-5 h-5 shrink-0 mt-1 opacity-60 group-hover/item:opacity-100 transition-opacity`} />
                                           <span className="text-gray-400 group-hover:text-gray-200 transition-colors leading-snug">{point}</span>
                                        </div>
                                      ))}
                                   </div>
                                 ) : (
                                   <p className="text-gray-400 leading-relaxed relative z-10">{feat.desc}</p>
                                 )}
                              </div>
                            );
                         })}
                      </div>
                   </div>
                )}
             </div>
          </section>
        )}

        {/* --- SECTION 7: RESULTS & IMPACT --- */}
        {(caseStudy.results || caseStudy.performance) && (
          <section id="results" className="py-32 relative overflow-hidden border-t border-white/5">
             <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="space-y-10">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <div className={`w-12 h-[2px] ${theme.text.replace('text-', 'bg-')}`} />
                           <span className={`text-sm font-bold uppercase tracking-[0.3em] ${theme.text}`}>Impact Measured</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {caseStudy.results?.title || caseStudy.performance?.title}
                        </h2>
                        <p className={`text-xl text-[#A0AEC0] leading-premium border-l-4 ${theme.text.replace('text-', 'border-')}/50 pl-8`}>
                          {caseStudy.results?.content || caseStudy.performance?.content}
                        </p>
                      </div>

                      <div className="grid gap-6">
                        {(caseStudy.results?.bullets || caseStudy.performance?.bullets || []).map((bullet, idx) => (
                           <div key={idx} className="flex items-center gap-5 group p-4 rounded-2xl bg-white/5 hover:bg-white/[0.08] transition-all">
                              <div className={`w-10 h-10 rounded-xl ${theme.bg} border ${theme.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                 <TrendingUp className={`${theme.text} w-5 h-5`} />
                              </div>
                              <span className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors">{bullet}</span>
                           </div>
                        ))}
                      </div>
                   </div>

                   <div className="relative">
                      <div className={`absolute -inset-20 ${theme.bg} rounded-full blur-[160px] opacity-20`} />
                      <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-navy-card shadow-3xl group">
                         <img 
                          src={caseStudy.results?.image || caseStudy.gallery?.[1] || "/assets/placeholder-chart.jpg"} 
                          alt="Results Impact" 
                          className="w-full aspect-square object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60" />
                         <div className="absolute bottom-10 left-10 p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10">
                            <p className="text-white font-bold text-2xl mb-1">Impact Summary</p>
                            <p className="text-gray-400">Verified through historical backtesting.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 8: TECH STACK & SKILLS --- */}
        {(caseStudy.techStack || caseStudy.skills) && (
          <section className="py-24 relative border-y border-white/5 bg-white/[0.01]">
             <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                   {/* Tech Stack */}
                   {caseStudy.techStack && (
                     <div className="space-y-10">
                        <div className="flex items-center gap-4">
                           <Layers className={`${theme.text} w-6 h-6`} />
                           <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Technology Stack</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                           {caseStudy.techStack.map((tech, idx) => (
                             <div key={idx} className={`px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-${theme.accent}/40 hover:bg-${theme.accent}/5 transition-all text-gray-400 hover:text-white font-semibold flex items-center gap-3 group`}>
                                <div className={`w-2 h-2 rounded-full ${theme.bg} border ${theme.border} group-hover:${theme.glow}`} />
                                {tech}
                             </div>
                           ))}
                        </div>
                     </div>
                   )}

                   {/* Skills */}
                   {caseStudy.skills && (
                     <div className="space-y-10">
                        <div className="flex items-center gap-4">
                           <Target className={`${theme.text} w-6 h-6`} />
                           <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Deliverables & Skills</h2>
                        </div>
                        <div className="flex flex-wrap gap-4">
                           {caseStudy.skills.map((skill, idx) => (
                             <div key={idx} className={`px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white font-medium bg-navy-card`}>
                                {skill}
                             </div>
                           ))}
                        </div>
                     </div>
                   )}
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 9: MONTHLY PERFORMANCE GRID --- */}
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
                          <div key={idx} className={`p-8 rounded-3xl bg-navy-card border border-white/10 flex flex-col gap-4 group hover:${theme.border} transition-all duration-300`}>
                             <div className="flex justify-between items-center">
                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">{ret.month}</span>
                                <div className={`${theme.bg} rounded-lg p-2`}>
                                   <ArrowUpRight className={`${theme.text} w-4 h-4`} />
                                </div>
                             </div>
                             <div className="flex items-baseline gap-2">
                                <span className={`text-4xl font-bold ${theme.text} font-mono italic`}>{ret.value}</span>
                                <span className="text-xs font-bold text-gray-600 uppercase">Growth</span>
                             </div>
                             <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className={`h-full bg-gradient-to-r ${theme.text.replace('text-', 'from-')} to-black/20`} style={{ width: `${Math.min(parseFloat(ret.value), 100)}%` }} />
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* Monthly Visual Image */}
                   <div className="relative aspect-square hidden lg:flex items-center justify-center">
                      <div className={`absolute inset-0 ${theme.bg} rounded-full blur-[100px] opacity-20`} />
                      <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0B0F19] shadow-2xl group transition-all duration-700 hover:${theme.borderStrong}`}>
                         <img 
                           src={caseStudy.monthlyVisual || "/assets/placeholder-chart.jpg"} 
                           alt="Monthly Performance Chart" 
                           className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40" />
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 10: RISK MANAGEMENT SPLIT --- */}
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
                            <Clock className={`${theme.text} w-8 h-8`} />
                            <div className="text-sm text-gray-400 capitalize">Fast Execution</div>
                            <div className="text-2xl font-bold">~6h Avg. Hold</div>
                         </div>
                         <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                            <Target className={`${theme.text} w-8 h-8`} />
                            <div className="text-sm text-gray-400 capitalize">High Precision</div>
                            <div className="text-2xl font-bold">1:1.91 R:R</div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      {caseStudy.risk.metrics.map((m, idx) => (
                        <div key={idx} className={`flex justify-between items-center p-8 rounded-3xl bg-navy-card border border-white/10 group hover:${theme.borderStrong} transition-all`}>
                           <div className="flex items-center gap-6">
                              <div className={`p-4 rounded-2xl ${theme.bg}`}>
                                 <ShieldCheck className={`${theme.text} w-6 h-6`} />
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

        {/* --- SECTION 11: TRUST / VERIFICATION --- */}
        {caseStudy.trust && (
          <section className="py-40 relative">
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${theme.bg} blur-[120px] opacity-10 rounded-full`} />
             <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
                <div className={`inline-flex items-center justify-center p-6 ${theme.bg} rounded-[2.5rem] border ${theme.border} mb-4`}>
                   <Globe className={`${theme.text} w-10 h-10`} />
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {caseStudy.trust.title}
                </h2>
                <p className="text-2xl text-[#A0AEC0] max-w-3xl mx-auto leading-premium font-medium">
                  {caseStudy.trust.content}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                   {caseStudy.trust.points.map((p, idx) => (
                    <div key={idx} className={`flex items-center gap-4 px-8 py-5 bg-navy-card border border-white/10 rounded-2xl group hover:${theme.borderStrong} transition-all`}>
                       <CheckCircle2 className={`w-6 h-6 ${theme.text}`} />
                       <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{p}</span>
                    </div>
                   ))}
                </div>
             </div>
          </section>
        )}

        {/* --- SECTION 12: CTA --- */}
        {caseStudy.cta && (
          <section className="pb-40 px-6">
             <div className={`max-w-7xl mx-auto rounded-[4rem] px-8 py-20 relative overflow-hidden text-center space-y-8 bg-gradient-to-b from-[#111726] to-[#0B0F19] border border-white/5`}>
                <div className={`absolute -top-40 -left-40 w-96 h-96 ${theme.bg} blur-[100px] opacity-20`} />
                <div className={`absolute -bottom-40 -right-40 w-96 h-96 ${theme.bg} blur-[100px] opacity-20`} />
                
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter max-w-4xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {caseStudy.cta.title}
                </h2>
                <p className="text-lg md:text-xl text-[#A0AEC0] max-w-2xl mx-auto leading-premium">
                  {caseStudy.cta.content}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                  {caseStudy.cta.buttons.map((btn, idx) => (
                    <Link key={idx} to={btn.href} className={`${idx === 0 ? theme.btn : theme.btnOutline} px-10 py-5 text-lg transition-all hover:scale-105 active:scale-95`}>
                      {btn.label}
                    </Link>
                  ))}
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
