import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useData } from "@/context/DataContext";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, loading } = useData();

  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-28 pb-20">
          <p className="text-gray-400">Loading blog post...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-28 pb-20 text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-amber-500 text-black rounded-xl"
          >
            Back to Blogs
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const sectionImages = (blog.images || []).filter(Boolean);
  const paragraphs = blog.content.split(/\n+/).filter(p => p.trim() !== '');

  // Grouping logic: 2 text paragraphs per image
  const groupedSections: { text: string[]; image?: string }[] = [];
  let imageIdx = 0;

  for (let i = 0; i < paragraphs.length; i += 2) {
    const group = {
      text: paragraphs.slice(i, i + 2),
      image: sectionImages[imageIdx] || undefined
    };
    groupedSections.push(group);
    if (group.image) imageIdx++;
  }

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
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-500/30 w-full overflow-x-hidden font-sans">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 pt-20">
          <div className="absolute inset-0 z-0">
             <img 
               src={blog.heroImage || blog.image} 
               alt="Background" 
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/40 to-[#0B0F19]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
             <motion.div {...fadeDown}>
               <Link to="/blogs" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                 <span className="text-xs font-bold uppercase tracking-widest">Back to Insights</span>
               </Link>
             </motion.div>

             <div className="max-w-5xl space-y-8">
                <motion.div 
                  {...fadeUp}
                  className="inline-flex items-center gap-3 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[11px] font-bold text-amber-500 uppercase tracking-[0.2em]"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_20px_#f59e0b]" />
                  {blog.category}
                </motion.div>
                
                <motion.h1 
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {blog.title.split(' ').length > 4 ? (
                    <>
                      {blog.title.split(' ').slice(0, -2).join(' ')} {' '}
                      <span className="text-amber-gradient block sm:inline">{blog.title.split(' ').slice(-2).join(' ')}</span>
                    </>
                  ) : blog.title}
                </motion.h1>

                <motion.div 
                  {...fadeUp}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-center justify-center gap-6 text-sm text-gray-300 font-medium"
                >
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-amber-500" /> {blog.author}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> {blog.date}</span>
                </motion.div>

                <motion.div 
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-6 pt-8"
                >
                  <button onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })} className="btn-amber px-10 py-5 text-base font-bold">
                    Read Article
                  </button>
                  <Link to="/contact" className="btn-outline-amber px-10 py-5 text-base font-bold">
                    Join Discussion
                  </Link>
                </motion.div>
             </div>
          </div>
        </section>

        <div id="content" className="pt-24" />

        {/* --- ARTICLE BODY --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 space-y-12 lg:space-y-16 pb-32">
          {groupedSections.map((section, index) => {
            const hasImage = !!section.image;
            const isEven = index % 2 === 0;
            const isFirst = index === 0;

            return (
              <div key={index} className="w-full">
                {hasImage ? (
                  /* --- SECTION WITH IMAGE: Split Layout (2 Paragraphs + 1 Image) --- */
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="md:w-1/2 space-y-6"
                    >
                      <div className="space-y-5">
                        {section.text.map((p, pIdx) => (
                          <p 
                            key={pIdx}
                            className={`text-base md:text-lg leading-relaxed ${isFirst && pIdx === 0 ? 'text-white font-bold' : 'text-gray-400'}`}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="md:w-1/2 w-full"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                        <img 
                          src={section.image} 
                          alt={blog.title} 
                          className="w-full h-auto object-contain bg-white/5"
                        />
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* --- SECTION WITHOUT IMAGE: Full Width --- */
                  <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full space-y-5"
                  >
                    {section.text.map((p, pIdx) => (
                      <p 
                        key={pIdx}
                        className={`text-base md:text-lg leading-relaxed ${isFirst && pIdx === 0 ? 'text-white font-bold' : 'text-gray-400'}`}
                      >
                        {p}
                      </p>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Bottom Navigation */}
          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-amber-500 transition-all group font-medium"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Insights</span>
            </Link>

            <button 
              onClick={() => navigate('/blogs')}
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-semibold text-sm hover:border-amber-500 transition-all hover:bg-white/10"
            >
              Explore More Articles
            </button>
          </motion.footer>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;