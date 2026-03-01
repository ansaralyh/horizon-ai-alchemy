import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import logo from "@/assets/new-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blogs", path: "/blogs" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl"
            : "py-5"
        }`}
        style={{
          background: scrolled
            ? "hsl(220 27% 6% / 0.9)"
            : "transparent",
          borderBottom: scrolled ? "1px solid hsl(220 20% 16%)" : "none",
          boxShadow: scrolled ? "0 4px 30px hsl(0 0% 0% / 0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Horizon Bee Tech"
              className="h-20 object-contain object-left transition-all duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span style={{ color: "hsl(210 40% 96%)" }}>Horizon</span>
              <span style={{ color: "hsl(43 96% 56%)" }}> Bee Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-amber-400"
                style={{
                  color: isActive(link.path) ? "hsl(43 96% 56%)" : "hsl(215 20% 65%)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/contact"
              className="btn-amber text-sm px-6 py-3"
            >
              Contact Us
            </Link>
            <Link
              to="/admin/login"
              className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-amber-400 group relative"
              style={{ color: "hsl(215 20% 65%)" }}
              title="Admin Login"
            >
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "hsl(210 40% 96%)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 py-4 px-6"
            style={{
              background: "hsl(220 24% 9% / 0.98)",
              borderBottom: "1px solid hsl(220 20% 16%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: isActive(link.path) ? "hsl(43 96% 56%)" : "hsl(215 20% 65%)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "hsl(215 20% 65%)" }}
              >
                <User className="w-5 h-5" />
                Admin Login
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-amber mt-2 justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
