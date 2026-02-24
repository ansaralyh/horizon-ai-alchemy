import React, { useState } from "react";
import { 
  Plus, Search, Edit2, Trash2,
  Filter, Download, FileText, X
} from "lucide-react";
import { useData } from "@/context/DataContext";
import { BlogPost } from "@/data/blogs";

const ManageBlogs = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useData();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Image Upload reference
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    category: "",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  });

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAddModal = () => {
    setEditingId(null);
    setFormData({ 
      title: "", excerpt: "", content: "", image: "", author: "", category: "", 
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) 
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog: BlogPost) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      category: blog.category,
      date: blog.date
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      deleteBlog(id);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateBlog(editingId, formData);
    } else {
      addBlog(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Blogs</h1>
          <p className="text-sm text-muted-foreground mt-1">Add, edit or remove your blog posts.</p>
        </div>
        <button onClick={handleOpenAddModal} className="btn-amber px-5 py-2.5 text-xs flex items-center gap-2 w-fit">
          <Plus className="w-4 h-4" />
          Add New Blog
        </button>
      </div>

      {/* Filters & Search */}
      <div className="card-premium p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-white/5 bg-white/5">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search blogs..." 
            className="input-glow w-full rounded-xl pl-10 pr-4 py-2 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium hover:bg-white/10 transition-all">
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="card-premium overflow-hidden border-white/5 p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Blog Title</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Author</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date Published</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 min-w-[300px]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center overflow-hidden shrink-0">
                        {blog.image.startsWith('http') || blog.image.startsWith('src') ? (
                          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        ) : (
                          <FileText className="w-5 h-5 text-amber-500" />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-foreground line-clamp-2">{blog.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {blog.author}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{blog.date}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => handleOpenEditModal(blog)} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-amber-500 transition-all" title="Edit">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(blog.id)} className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-red-500 transition-all" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredBlogs.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground/30" />
            </div>
            <p className="text-muted-foreground">No blogs found matching your search.</p>
          </div>
        )}

        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Showing {filteredBlogs.length} of {blogs.length} blogs</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>

      {/* CRUD Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="card-premium w-full max-w-2xl max-h-[90vh] overflow-y-auto border-white/10 p-6 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 text-muted-foreground transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Blog' : 'Add New Blog'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Blog Title</label>
                <input 
                  required
                  type="text" 
                  value={formData.title}
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="input-glow w-full rounded-xl px-4 py-2.5 text-sm"
                  placeholder="e.g. The Future of AI Integration"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Category</label>
                  <input 
                    required
                    type="text" 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="input-glow w-full rounded-xl px-4 py-2.5 text-sm"
                    placeholder="e.g. Technology"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Author</label>
                  <input 
                    required
                    type="text" 
                    value={formData.author}
                    onChange={e => setFormData({...formData, author: e.target.value})}
                    className="input-glow w-full rounded-xl px-4 py-2.5 text-sm"
                    placeholder="e.g. John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Date Published</label>
                  <input 
                    required
                    type="text" 
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    className="input-glow w-full rounded-xl px-4 py-2.5 text-sm"
                    placeholder="e.g. October 12, 2026"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Image Upload</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="btn-amber px-4 py-2.5 text-xs w-full flex justify-center"
                    >
                      Choose Image
                    </button>
                    {formData.image && (
                      <div className="w-10 h-10 rounded overflow-hidden shrink-0 border border-white/10">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Excerpt</label>
                <textarea 
                  required
                  value={formData.excerpt}
                  onChange={e => setFormData({...formData, excerpt: e.target.value})}
                  className="input-glow w-full rounded-xl px-4 py-2.5 text-sm min-h-[80px] resize-y"
                  placeholder="A short summary of the blog post..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Content</label>
                <textarea 
                  required
                  value={formData.content}
                  onChange={e => setFormData({...formData, content: e.target.value})}
                  className="input-glow w-full rounded-xl px-4 py-2.5 text-sm min-h-[150px] resize-y"
                  placeholder="Full content of the blog post..."
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/5">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-all text-muted-foreground"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-amber px-6 py-2.5 text-sm"
                >
                  {editingId ? 'Save Changes' : 'Create Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;
