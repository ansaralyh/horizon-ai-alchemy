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
      <div className="min-h-screen bg-background text-foreground flex flex-col">
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

  // Format content paragraphs
  const paragraphs = blog.content.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30">
      <Navbar />

      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          
          {/* Back button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to all articles
          </Link>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-widest text-amber-500 mb-6">
              <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" /> {blog.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 mb-8 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
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

          {/* Hero Image */}
          <div className="w-full h-[40vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl relative">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 mix-blend-multiply" />
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg prose-amber max-w-none 
              prose-headings:font-bold prose-headings:text-foreground prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-amber-500 hover:prose-a:text-amber-400
              prose-strong:text-amber-100 prose-strong:font-semibold">
              
              <p className="text-xl md:text-2xl text-foreground font-medium mb-10 leading-relaxed border-l-4 border-amber-500 pl-6">
                {blog.excerpt}
              </p>

              {paragraphs.map((paragraph, index) => {
                // If the paragraph starts with ###, treat it as an h3
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-foreground mt-12 mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{paragraph.replace('### ', '')}</h3>;
                }
                // Otherwise render as a standard paragraph
                return <p key={index} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>;
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
          </div>
          
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
