import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          scrolled
            ? "py-2 sm:py-3 backdrop-blur-xl"
            : "py-3 sm:py-4 md:py-5"
        }`}
        style={{
          background: scrolled
            ? "hsl(220 27% 6% / 0.9)"
            : "transparent",
          borderBottom: scrolled ? "1px solid hsl(220 20% 16%)" : "none",
          boxShadow: scrolled ? "0 4px 30px hsl(0 0% 0% / 0.4)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 min-w-0">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink"
          >
            <img
              src={logo}
              alt="Horizon Bee Tech"
              className="h-10 sm:h-14 md:h-20 w-auto object-contain object-left transition-all duration-300 group-hover:scale-105 flex-shrink-0"
            />
            <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight truncate" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
                className="group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-amber-400 hover:bg-[hsl(43_96%_56%_/_0.08)]"
                style={{
                  color: isActive(link.path) ? "hsl(43 96% 56%)" : "hsl(215 20% 65%)",
                }}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full transition-transform duration-300 ${
                    isActive(link.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ background: "hsl(43 96% 56%)" }}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="btn-amber text-sm px-6 py-3"
            >
              Contact Us
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
            className="md:hidden absolute top-full left-0 right-0 py-4 px-4 sm:px-6 max-h-[calc(100vh-5rem)] overflow-y-auto"
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
