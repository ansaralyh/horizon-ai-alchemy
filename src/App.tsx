import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { AuthProvider } from "@/context/AuthContext";
import { DataProvider } from "@/context/DataContext";
import ProtectedRoute from "@/components/admin/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import ManageServices from "./pages/admin/ManageServices";
import ManageBlogs from "./pages/admin/ManageBlogs";
import LoginPage from "./pages/admin/LoginPage";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/admin/AdminLayout";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DataProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="services" element={<ManageServices />} />
              <Route path="blogs" element={<ManageBlogs />} />
              {/* Add placeholders for other menu items to prevent 404s */}
              <Route path="portfolio" element={<div className="p-10 text-center text-muted-foreground">Portfolio Management Coming Soon</div>} />
              <Route path="messages" element={<div className="p-10 text-center text-muted-foreground">Messages Management Coming Soon</div>} />
              <Route path="team" element={<div className="p-10 text-center text-muted-foreground">Team Management Coming Soon</div>} />
              <Route path="settings" element={<div className="p-10 text-center text-muted-foreground">Settings Management Coming Soon</div>} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </AuthProvider>
      </DataProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
