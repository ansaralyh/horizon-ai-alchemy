import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, ShieldCheck, BarChart3, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

const CaseStudies = () => {
  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeDown = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
           <motion.div 
             {...fadeDown}
             className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-6"
           >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Case Studies
           </motion.div>
           <motion.h1 
             {...fadeUp}
             className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" 
             style={{ fontFamily: "'Space Grotesk', sans-serif" }}
           >
             Real AI. <span className="text-amber-gradient">Real Impact.</span>
           </motion.h1>
           <motion.p 
             {...fadeUp}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
           >
             Go behind the scenes of our most successful AI implementations, from algorithmic trading to enterprise automation.
           </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => {
              // Determine direction based on column position
              const direction = i % 3 === 0 ? fadeLeft : i % 3 === 2 ? fadeRight : fadeUp;
              
              return (
                <motion.div
                  key={cs.id}
                  {...direction}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="h-full"
                >
                  <Link
                    to={`/case-studies/${cs.id}`}
                    className="card-premium group flex flex-col h-full reveal visible hover:border-amber-500/30 transition-all duration-500 bg-navy-card rounded-3xl overflow-hidden border border-white/5"
                  >
                    {/* Visual Header */}
                    <div className="relative h-56 mb-8 rounded-2xl overflow-hidden bg-navy-elevated border border-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-60 z-10" />
                      <img 
                        src={cs.image || "/assets/placeholder-chart.jpg"} 
                        alt={cs.client}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-40 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-amber-500/50 transition-colors">
                            {cs.themeColor === "emerald" ? (
                              <TrendingUp className="w-8 h-8 text-emerald-500" />
                            ) : cs.tag.includes("LLM") ? (
                              <ShieldCheck className="w-8 h-8 text-amber-500" />
                            ) : (
                              <BarChart3 className="w-8 h-8 text-amber-500" />
                            )}
                        </div>
                      </div>
                      {/* Tag Badge */}
                      <div className="absolute top-4 left-4 z-30">
                        <span className={`px-3 py-1 ${cs.themeColor === 'emerald' ? 'bg-emerald-500 border-emerald-400/50' : 'bg-amber-500 border-amber-400/50'} border rounded-full text-[10px] font-black uppercase tracking-widest text-[#0B0F19]`}>
                          {cs.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 px-2">
                      <div className={`text-[11px] font-bold uppercase tracking-[0.2em] ${cs.themeColor === 'emerald' ? 'text-emerald-500/80' : 'text-amber-500/80'}`}>
                        {cs.client}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-amber-gradient transition-colors leading-tight">
                        {cs.title}
                      </h3>
                      <p className="text-gray-400 leading-premium text-sm font-medium line-clamp-3">
                        {cs.desc}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 pt-8 pb-4 px-2 mb-4">
                      {cs.metrics.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold text-gray-300 group-hover:border-amber-500/20 group-hover:text-white transition-all"
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-auto px-2 pt-6 border-t border-white/5 flex items-center justify-between group/footer">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                          Explore Results
                      </span>
                      <div className={`w-8 h-8 rounded-full ${cs.themeColor === 'emerald' ? 'bg-emerald-500/10' : 'bg-amber-500/10'} flex items-center justify-center transition-all group-hover:scale-110`}>
                          <ChevronRight className={`w-4 h-4 ${cs.themeColor === 'emerald' ? 'text-emerald-500' : 'text-amber-500'}`} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
