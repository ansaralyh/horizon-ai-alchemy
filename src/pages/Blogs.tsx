import React, { useState } from "react";
import { ArrowRight, Search, Calendar, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useData } from "@/context/DataContext";

const Blogs = () => {
  const { blogs } = useData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularBlogs = filteredBlogs.slice(0, 6);
  const recentBlogs = filteredBlogs.slice(6);

  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const fadeDown = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-500/30 w-full overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 pt-20">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
               alt="Background" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/95 via-[#0B0F19]/60 to-[#0B0F19]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
             <motion.div {...fadeDown}>
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[11px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-12">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_20px_#f59e0b]" />
                  Knowledge Base
                </div>
             </motion.div>

             <div className="max-w-5xl space-y-8">
                <motion.h1 
                  {...fadeUp}
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Latest <span className="text-amber-gradient">Insights & News</span>
                </motion.h1>

                <motion.p 
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-2xl text-white/60 font-medium leading-relaxed max-w-3xl mx-auto"
                >
                  Explore our collection of articles, news, and technical deep-dives into the future of AI and machine learning.
                </motion.p>

                {/* Search Bar */}
                <motion.div 
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative max-w-xl mx-auto group mt-8 w-full"
                >
                  <div className="relative w-full">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-amber-500 transition-colors z-10" />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoComplete="off"
                      placeholder="Search articles, categories, or keywords..." 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-lg focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-gray-600 shadow-2xl"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-6 pt-8"
                >
                  <button onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })} className="btn-amber px-10 py-5 text-base font-bold">
                    Browse All
                  </button>
                  <Link to="/contact" className="btn-outline-amber px-10 py-5 text-base font-bold">
                    Get Support
                  </Link>
                </motion.div>
             </div>
          </div>
        </section>

        <div id="articles" className="pt-24 max-w-7xl mx-auto px-6">

          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Popular Grid */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-0.5 bg-amber-500" />
                  <h2 className="text-2xl font-semibold tracking-widest text-white">Featured Posts</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {popularBlogs.map((blog, idx) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, x: idx % 3 === 0 ? -60 : (idx % 3 === 2 ? 60 : 0), y: idx % 3 === 1 ? 20 : 0 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: (idx % 3) * 0.1 }}
                    >
                      <Link 
                        to={`/blogs/${blog.id}`} 
                        className="group block h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img 
                            src={blog.image} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-8 space-y-4">
                          <div className="flex items-center gap-4 text-xs font-bold text-amber-500 uppercase tracking-widest">
                            <span>{blog.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                            <span className="text-gray-500">{blog.date}</span>
                          </div>
                          <h3 className="text-2xl font-semibold text-white group-hover:text-amber-500 transition-colors line-clamp-2 leading-tight">
                            {blog.title}
                          </h3>
                          <p className="text-base text-gray-400 leading-relaxed line-clamp-3">
                            {blog.excerpt}
                          </p>
                          <div className="pt-4 flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                            Read Article <ArrowRight className="w-4 h-4 text-amber-500" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Recent List */}
                {recentBlogs.length > 0 && (
                  <div className="space-y-12">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-0.5 bg-amber-500" />
                      <h2 className="text-2xl font-semibold tracking-widest text-white">More Insights</h2>
                    </div>

                    <div className="space-y-8">
                      {recentBlogs.map((blog, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <Link 
                              to={`/blogs/${blog.id}`} 
                              className={`group flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20`}
                            >
                              <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                                <img 
                                  src={blog.image} 
                                  alt={blog.title} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                              </div>
                              <div className="md:w-3/5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
                                <div className="flex items-center gap-4 text-xs font-bold text-amber-500 uppercase tracking-widest">
                                  <span>{blog.category}</span>
                                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                                  <span className="text-gray-500">{blog.date}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-amber-500 transition-colors leading-tight">
                                  {blog.title}
                                </h3>
                                <p className="text-base text-gray-400 leading-relaxed line-clamp-2">
                                  {blog.excerpt}
                                </p>
                                <div className="pt-2 flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                                  Read Full Story <ArrowRight className="w-4 h-4 text-amber-500" />
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32"
              >
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters.</p>
                <button 
                  onClick={() => setSearchQuery("")}
                  className="mt-8 text-amber-500 font-bold hover:underline"
                >
                  Clear all search filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
