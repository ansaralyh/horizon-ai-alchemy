import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-25" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(43 96% 56% / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16 reveal">
          <span className="section-label">
            <span className="glow-dot" />
            Contact
          </span>
          <h2 className="section-title">
            Start Your{" "}
            <span className="text-amber-gradient">AI Journey</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Let's build intelligent systems that transform your operations,
            accelerate growth, and create lasting competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="reveal">
            <div className="mb-8">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "hsl(210 40% 96%)" }}
              >
                Let's Build Together
              </h3>
              <p className="leading-relaxed" style={{ color: "hsl(215 20% 55%)" }}>
                Whether you're validating a concept with a 2-week prototype or
                scaling to enterprise-grade infrastructure — our team is ready
                to architect the future with you.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, text: "Contact@horizonbeetech.com" },
                { icon: Phone, text: "07827622264" },
                { icon: MapPin, text: "53 Saddlecote Close, Manchester, Greater Manchester, United Kingdom, M8 5QE" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(43 96% 56% / 0.1)",
                      border: "1px solid hsl(43 96% 56% / 0.2)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "hsl(43 96% 56%)" }} />
                  </div>
                  <span className="text-sm" style={{ color: "hsl(215 20% 60%)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "hsl(220 20% 12%)",
                    border: "1px solid hsl(220 20% 18%)",
                    color: "hsl(215 20% 55%)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(43 96% 56% / 0.4)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(43 96% 56%)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(220 20% 18%)";
                    (e.currentTarget as HTMLElement).style.color = "hsl(215 20% 55%)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8 reveal"
            style={{
              background: "hsl(220 24% 9%)",
              border: "1px solid hsl(220 20% 16%)",
              boxShadow: "0 4px 30px hsl(0 0% 0% / 0.4)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: "hsl(43 96% 56% / 0.15)",
                    border: "1px solid hsl(43 96% 56% / 0.3)",
                  }}
                >
                  <Send className="w-7 h-7" style={{ color: "hsl(43 96% 56%)" }} />
                </div>
                <h4
                  className="text-xl font-bold mb-2"
                  style={{ color: "hsl(210 40% 96%)" }}
                >
                  Message Sent!
                </h4>
                <p className="text-sm" style={{ color: "hsl(215 20% 55%)" }}>
                  Our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wide"
                      style={{ color: "hsl(215 20% 55%)" }}
                    >
                      Full Name
                    </label>
                    <input
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="input-glow w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2 tracking-wide"
                      style={{ color: "hsl(215 20% 55%)" }}
                    >
                      Company
                    </label>
                    <input
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="input-glow w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wide"
                    style={{ color: "hsl(215 20% 55%)" }}
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 tracking-wide"
                    style={{ color: "hsl(215 20% 55%)" }}
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your AI challenge, current stack, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="input-glow w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-amber w-full justify-center">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
