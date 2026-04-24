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
  
  let sections: { title?: string; content: string[] }[] = [];
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

  // If there's only one section, split it for the intro layout
  if (sections.length === 1 && sections[0].content.length > 2) {
    const introCount = Math.min(2, Math.floor(sections[0].content.length / 2));
    const introContent = sections[0].content.slice(0, introCount);
    const bodyContent = sections[0].content.slice(introCount);
    sections = [
      { content: introContent },
      { content: bodyContent }
    ];
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30 w-full overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- HERO SECTION (Screenshot 1 Style) --- */}
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
            <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 mb-8 animate-fade-in shadow-lg shadow-amber-500/5">
              {blog.category}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 tracking-tighter leading-[1.05] animate-slide-up" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-amber-500" /> {blog.author}</span>
              <div className="w-1 h-1 rounded-full bg-gray-500" />
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> {blog.date}</span>
            </div>
          </div>
        </section>

        {/* --- 2ND SECTION: INTRODUCTION (Text Left, Image Right) --- */}
        {sections.length > 0 && (
          <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
                <div className="lg:col-span-7 space-y-10">
                  {sections[0].title && (
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {sections[0].title}
                    </h2>
                  )}
                  <div className="space-y-8">
                    {sections[0].content.map((p, pIdx) => (
                      <p 
                        key={pIdx} 
                        className={`leading-relaxed ${
                          pIdx === 0 
                            ? "text-2xl md:text-3xl font-bold text-white border-l-4 border-amber-500 pl-8" 
                            : "text-lg md:text-xl text-gray-400"
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Introduction Image on Right */}
                <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
                  <div className="absolute -inset-4 bg-amber-500/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-[3/4]">
                    <img 
                      src={blog.image} 
                      alt="Introduction visual" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- REMAINING CONTENT: FULL WIDTH --- */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 lg:space-y-32 pb-32">
          {sections.slice(1).map((section, index) => (
            <article key={index} className="w-full">
              {section.title && (
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {section.title}
                </h2>
              )}
              <div className="space-y-12 max-w-5xl">
                {section.content.map((p, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="text-lg md:text-2xl text-gray-400 font-normal leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
          {/* Article Gallery */}
          {blog.images && blog.images.length > 0 && (
            <section className="space-y-12 pb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Article Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blog.images.map((img, idx) => (
                  <div key={idx} className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-video">
                    <img 
                      src={img} 
                      alt={`Article content ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Navigation */}
          <footer className="pt-20 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-12">
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-amber-500 transition-all group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
              <span className="font-bold tracking-widest uppercase text-[10px]">Back to Insights</span>
            </Link>

            <button 
              onClick={() => navigate('/blogs')}
              className="group relative px-10 py-5 bg-navy-card border border-white/10 rounded-full overflow-hidden transition-all hover:border-amber-500"
            >
              <span className="relative z-10 text-white font-bold text-xs uppercase tracking-widest transition-colors">
                Explore More Articles
              </span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full transition-transform group-hover:translate-y-0" />
            </button>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
