import React, { createContext, useContext, useState, useEffect } from "react";
import { blogs as defaultBlogs, BlogPost } from "@/data/blogs";

// Service Interface
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: "Active" | "Paused";
  date: string;
}

// Initial default services based on the frontend ServicesSection
const defaultServices: ServiceItem[] = [
  {
    id: 1,
    title: "AI/ML Development",
    description: "Custom machine learning models engineered for your business domain — from data ingestion to model deployment and continuous retraining pipelines.",
    image: "/assets/service-ml.jpg",
    category: "Core AI",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 2,
    title: "Intelligent Automation",
    description: "End-to-end process automation powered by AI agents that eliminate repetitive workflows, reduce operational costs, and unlock human capital for high-value tasks.",
    image: "/assets/service-automation.jpg",
    category: "Automation",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 3,
    title: "AI Chatbots & Agents",
    description: "Conversational AI systems built on LLMs that understand context, resolve queries autonomously, and integrate seamlessly with your existing CRM and helpdesk stack.",
    image: "/assets/service-chatbot.jpg",
    category: "LLM",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description: "Data-driven intelligence that forecasts market trends, customer churn, demand spikes, and operational bottlenecks — before they happen.",
    image: "/assets/service-analytics.jpg",
    category: "Analytics",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 5,
    title: "Computer Vision",
    description: "Visual AI that detects, classifies, and interprets imagery at scale — powering quality control, security surveillance, AR overlays, and medical imaging.",
    image: "/assets/service-vision.jpg",
    category: "Vision AI",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 6,
    title: "NLP Solutions",
    description: "Natural language processing for document intelligence, semantic search, sentiment analysis, multilingual support, and regulatory text extraction.",
    image: "/assets/service-nlp.jpg",
    category: "NLP",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 7,
    title: "Web Development",
    description: "Robust, scalable, and secure web applications built with modern frameworks. We deliver enterprise-grade digital experiences tailored to your business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    category: "Engineering",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 8,
    title: "UI/UX Designing",
    description: "Intuitive, user-centric interfaces designed to maximize engagement and conversion. We blend behavioral science with stunning aesthetics.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    category: "Design",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
  {
    id: 9,
    title: "Graphics Designing",
    description: "Compelling visual identities, brand assets, and marketing collateral. Our designs capture attention and communicate your brand's core values instantly.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
    category: "Creative",
    status: "Active",
    date: new Date().toISOString().split('T')[0],
  },
];

interface DataContextType {
  services: ServiceItem[];
  addService: (service: Omit<ServiceItem, "id" | "date">) => void;
  updateService: (id: number, service: Partial<ServiceItem>) => void;
  deleteService: (id: number) => void;
  
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  updateBlog: (id: number, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem("horizon_services");
    return saved ? JSON.parse(saved) : defaultServices;
  });

  useEffect(() => {
    localStorage.setItem("horizon_services", JSON.stringify(services));
  }, [services]);

  const addService = (service: Omit<ServiceItem, "id" | "date">) => {
    const newService: ServiceItem = {
      ...service,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: number, updatedFields: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updatedFields } : s));
  };

  const deleteService = (id: number) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("horizon_blogs");
    return saved ? JSON.parse(saved) : defaultBlogs;
  });

  useEffect(() => {
    localStorage.setItem("horizon_blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: Omit<BlogPost, "id">) => {
    const newBlog: BlogPost = {
      ...blog,
      id: Date.now(),
    };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const updateBlog = (id: number, updatedFields: Partial<BlogPost>) => {
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, ...updatedFields } : b));
  };

  const deleteBlog = (id: number) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  return (
    <DataContext.Provider value={{ 
      services, addService, updateService, deleteService,
      blogs, addBlog, updateBlog, deleteBlog
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
