import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useData } from "@/context/DataContext";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useData();
  
  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist or has been removed.</p>
          <button 
            onClick={() => navigate('/blogs')}
            className="btn-amber px-6 py-3"
          >
            Return to Blogs
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  // Improved splitting logic to handle different newline formats and ensure gaps
  const rawParagraphs = blog.content.split(/\n+/).filter(p => p.trim() !== '');
  
  const sections: { title?: string; content: string[] }[] = [];
  let currentSection: { title?: string; content: string[] } = { content: [] };

  rawParagraphs.forEach((paragraph) => {
    if (paragraph.startsWith('### ')) {
      if (currentSection.content.length > 0 || currentSection.title) {
        sections.push(currentSection);
      }
      currentSection = { title: paragraph.replace('### ', ''), content: [] };
    } else {
      currentSection.content.push(paragraph);
    }
  });
  if (currentSection.content.length > 0 || currentSection.title) {
    sections.push(currentSection);
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30 w-full overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Back Navigation */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-500 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-bold tracking-widest uppercase text-[10px]">Back to Insights</span>
          </Link>

          {/* Header Section: Full Width Stack */}
          <header className="w-full mb-16 lg:mb-24">
            <div className="inline-flex items-center px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 mb-8">
              {blog.category}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400 border-y border-white/5 py-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-gray-500 font-bold">Written by</span>
                  <span className="text-white font-medium">{blog.author}</span>
                </div>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500/60" />
                <span>{blog.date}</span>
              </div>
            </div>
          </header>

          {/* Featured Image: Full Width of Container */}
          <figure className="w-full mb-20 lg:mb-28">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-navy-card aspect-[21/9]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {blog.imageCaption && (
              <figcaption className="mt-4 text-center text-sm text-gray-500 italic">
                {blog.imageCaption}
              </figcaption>
            )}
          </figure>

          {/* Content Area: Full Width (1200px container) */}
          <div className="w-full">
            <div className="grid grid-cols-1 gap-20 lg:gap-32">
              {sections.map((section, index) => (
                <section key={index} className="w-full">
                  {section.title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-12 lg:space-y-16">
                    {section.content.map((p, pIdx) => {
                      const isFirstParagraph = index === 0 && pIdx === 0;
                      return (
                        <p 
                          key={pIdx} 
                          className={`text-left leading-relaxed ${
                            isFirstParagraph 
                              ? "text-2xl md:text-3xl font-bold text-white pl-8 border-l-4 border-amber-500 py-2" 
                              : "text-lg md:text-xl text-gray-400 font-normal"
                          }`}
                        >
                          {p}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom Navigation */}
            <footer className="mt-32 pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-12">
              <button 
                onClick={() => navigate('/blogs')}
                className="group relative px-10 py-5 bg-transparent border border-amber-500/30 rounded-full overflow-hidden transition-all hover:border-amber-500"
              >
                <span className="relative z-10 text-white font-bold text-xs uppercase tracking-widest transition-colors group-hover:text-black">
                  Back to All Blogs
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full transition-transform group-hover:translate-y-0" />
              </button>
              
              <div className="flex flex-col items-center sm:items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500/60 mb-4">Read More</span>
                <Link 
                  to="/blogs" 
                  className="text-2xl font-bold text-white hover:text-amber-500 transition-all duration-300 group inline-flex items-center gap-3"
                >
                  Next Insight <ArrowLeft className="w-6 h-6 rotate-180 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
