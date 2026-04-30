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

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-500/30 w-full overflow-x-hidden font-sans">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section 
          className="relative w-full h-[55vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${blog.heroImage || blog.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] uppercase tracking-widest font-bold text-amber-500 mb-6"
            >
              {blog.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight text-white drop-shadow-xl"
            >
              {blog.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-6 text-sm text-gray-300 font-medium"
            >
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-amber-500" /> {blog.author}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> {blog.date}</span>
            </motion.div>
          </div>
        </section>

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