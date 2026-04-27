import React from "react";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useData } from "@/context/DataContext";

const Blogs = () => {
  const { blogs } = useData();
  const popularBlogs = blogs.slice(0, 6);
  const recentBlogs = blogs.slice(6, 9);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-amber-500/30">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Most Popular
              </h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-amber-500 transition-colors" />
              <input 
                type="text" 
                autoComplete="off"
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="none"
                placeholder="Search articles of any topic" 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-amber-500/50 transition-all placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {popularBlogs.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className="card-premium flex flex-col group overflow-hidden border-white/10 hover:border-amber-500/30 hover:shadow-[0_0_30px_hsl(43_96%_56%_/_0.15)] transition-all duration-500">
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-0">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Blogs Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Recent Blogs
            </h2>
          </div>

          <div className="space-y-6">
            {recentBlogs.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className="card-premium flex flex-col md:flex-row overflow-hidden border-white/10 transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_0_30px_hsl(43_96%_56%_/_0.15)] group">
                <div className="md:w-1/3 h-56 md:h-auto overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-amber-400 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                  <div>
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/30 text-amber-500 text-sm font-medium group-hover:bg-amber-500 group-hover:text-black transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
