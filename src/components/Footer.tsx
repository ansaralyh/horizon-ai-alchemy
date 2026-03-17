import { Zap } from "lucide-react";

const footerLinks = {
  Services: ["AI/ML Development", "Automation Systems", "AI Chatbots", "Predictive Analytics", "Computer Vision", "NLP Solutions"],
  Company: ["About Us", "Our Process", "Case Studies", "Careers", "Blog"],
  Resources: ["Documentation", "API Reference", "AI Glossary", "Research Papers"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "GDPR"],
};

const Footer = () => {
  return (
    <footer
      className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden w-full"
      style={{
        background: "hsl(220 27% 5%)",
        borderTop: "1px solid hsl(220 20% 14%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full box-border">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(38 90% 42%) 100%)",
                  boxShadow: "0 0 16px hsl(43 96% 56% / 0.3)",
                }}
              >
                <Zap className="w-5 h-5" style={{ color: "hsl(220 27% 6%)" }} />
              </div>
              <span
                className="font-bold text-lg"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span style={{ color: "hsl(210 40% 96%)" }}>Horizon</span>
                <span style={{ color: "hsl(43 96% 56%)" }}> Bee Tech</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsl(215 20% 45%)" }}
            >
              Next-generation AI & ML solutions for enterprises ready to lead
              the intelligence revolution.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "hsl(43 96% 56%)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "hsl(215 20% 45%)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "hsl(210 40% 80%)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 45%)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 pt-6 sm:pt-8"
          style={{ borderTop: "1px solid hsl(220 20% 14%)" }}
        >
          <p className="text-xs text-center md:text-left" style={{ color: "hsl(215 20% 40%)" }}>
            © {new Date().getFullYear()} Horizon Bee Tech. All rights reserved.
          </p>
          <p className="text-xs text-center md:text-right" style={{ color: "hsl(215 20% 35%)" }}>
            Built with ⚡ precision — Silicon Valley AI standards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
