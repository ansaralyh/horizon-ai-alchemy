import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Lock, Mail, ArrowRight, Loader2 } from "lucide-react";
import logo from "@/assets/horizon-bee-tech-logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 relative overflow-hidden">
      {/* Background elements to match landing page */}
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "hsl(43 96% 56% / 0.3)" }}
      />
      
      <div className="relative w-full max-w-md reveal visible">
        <div className="text-center mb-10">
          <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground">Admin Access</h1>
          <p className="text-muted-foreground mt-2">Sign in to manage your AI infrastructure</p>
        </div>
        
        <div className="card-premium p-8 backdrop-blur-xl bg-black/40 border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-widest text-amber-500">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="admin@horizonbeetech.com"
                  className="input-glow w-full rounded-xl pl-12 pr-4 py-3.5 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-semibold mb-2 uppercase tracking-widest text-amber-500">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="input-glow w-full rounded-xl pl-12 pr-4 py-3.5 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="btn-amber w-full justify-center group py-4"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-amber-500 transition-colors"
            >
              ← Back to Homepage
            </button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-xs text-muted-foreground/60 tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Horizon Bee Tech Core
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
