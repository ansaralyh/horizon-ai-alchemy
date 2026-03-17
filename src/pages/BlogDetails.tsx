import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useData } from "@/context/DataContext";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useData();
  
  const blog = blogs.find(b => b.id === Number(id));

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

  // Format content paragraphs and group into sections
  const rawParagraphs = blog.content.split('\n').filter(p => p.trim() !== '');
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

  // Ensure the first section has a title for visual consistency if none exists
  if (sections.length > 0 && !sections[0].title) {
    sections[0].title = "Introduction";
  }

  // Get variety of images from other blogs
  const allBlogImages = blogs.map(b => b.image);
  const otherImages = allBlogImages.filter(img => img !== blog.image);
  const sectionImages = otherImages.length > 0 ? otherImages : allBlogImages;

  const getSectionImage = (idx: number) => {
    return sectionImages[idx % sectionImages.length];
  };


  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30 w-full overflow-x-hidden">
      <Navbar />

      {/* 70vh Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-10" />
        </div>

        {/* Header Overlay */}
        <header className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-6">
            <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> {blog.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 mb-8 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                <User className="w-3 h-3" />
              </div>
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.date}
            </span>
          </div>
        </header>
      </section>

      <main className="py-20 relative z-10 bg-background">
        <article className="max-w-7xl mx-auto px-6">
          
          {/* Back button shifted below hero */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to all articles
          </Link>

          {/* Content Area - Sections */}
          <div className="space-y-32">
            {sections.map((section, index) => {
              const isFirst = index === 0;
              const isEven = index % 2 === 0;
              const sectionImage = getSectionImage(index);

              if (isFirst) {
                return (
                  <div 
                    key={index} 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                  >
                    {/* Image Column - Always first on mobile */}
                    <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-200/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                          <img 
                            src={sectionImage} 
                            alt={section.title || blog.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Column */}
                    <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {section.title && (
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {section.title}
                        </h3>
                      )}
                      <div className="prose prose-invert prose-lg prose-amber max-w-none 
                        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-amber-500 hover:prose-a:text-amber-400
                        prose-strong:text-amber-100 prose-strong:font-semibold">
                        {section.content.map((p, pIdx) => (
                          <p 
                            key={pIdx} 
                            className={pIdx === 0 ? "text-xl md:text-2xl text-foreground font-medium mb-10 leading-relaxed border-l-4 border-amber-500 pl-6" : ""}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Text only sections for index > 0
              return (
                <div key={index} className="max-w-4xl mx-auto">
                  {section.title && (
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {section.title}
                    </h3>
                  )}
                  <div className="prose prose-invert prose-lg prose-amber max-w-none 
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-amber-500 hover:prose-a:text-amber-400
                    prose-strong:text-amber-100 prose-strong:font-semibold">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

            {/* Tags/Footer of article */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground">Share this article:</span>
                <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
            
          </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
