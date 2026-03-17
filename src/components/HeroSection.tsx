import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroNeural from "@/assets/hero-neural.jpg";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number;
    }[] = [];

    const spawnParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 1.2 + 0.4),
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      life: 0,
      maxLife: Math.random() * 200 + 100,
    });

    for (let i = 0; i < 60; i++) {
      const p = spawnParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const progress = p.life / p.maxLife;
        const alpha = p.opacity * (1 - Math.pow(progress, 2));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(43, 96%, 56%, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles[i] = spawnParticle();
        }
      });

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(43, 96%, 56%, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToServices = () => navigate("/services");
  const scrollToContact = () => navigate("/contact");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroNeural})`,
          filter: "brightness(0.2) saturate(0.8)",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 27% 6% / 0.6) 0%, hsl(220 27% 6% / 0.3) 50%, hsl(220 27% 6% / 0.85) 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, hsl(43 96% 56% / 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center box-border">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 animate-fade-up"
          style={{
            background: "hsl(43 96% 56% / 0.1)",
            border: "1px solid hsl(43 96% 56% / 0.3)",
            color: "hsl(43 96% 56%)",
            animationFillMode: "both",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "hsl(43 96% 56%)",
              boxShadow: "0 0 8px hsl(43 96% 56%)",
              animation: "pulse-amber 2s ease-in-out infinite",
            }}
          />
          Next-Generation AI & Automation
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 animate-fade-up delay-100 break-words"
          style={{
            color: "hsl(210 40% 96%)",
            animationFillMode: "both",
          }}
        >
          Empowering Business
          <br />
          with{" "}
          <span className="text-amber-gradient">
            Intelligent
            <br />
            Automation
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 px-0 animate-fade-up delay-200"
          style={{
            color: "hsl(215 20% 60%)",
            animationFillMode: "both",
          }}
        >
          We architect cutting-edge AI & ML solutions that transform how
          enterprises operate, compete, and scale — from prototype to production
          in weeks, not years.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 animate-fade-up delay-300 w-full sm:w-auto"
          style={{ animationFillMode: "both" }}
        >
          <button onClick={scrollToContact} className="btn-amber group">
            Start Your Growth Today
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button onClick={scrollToServices} className="btn-outline-amber">
            Explore Services
          </button>
        </div>

        {/* Quick stats */}
        <div
          className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-lg mx-auto animate-fade-up delay-400 w-full"
          style={{ animationFillMode: "both" }}
        >
          {[
            { value: "50+", label: "AI Models" },
            { value: "8wk", label: "To Production" },
            { value: "100%", label: "Security Record" },
          ].map((stat) => (
            <div key={stat.label} className="text-center min-w-0">
              <div
                className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1"
                style={{ color: "hsl(43 96% 56%)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] sm:text-xs font-medium tracking-wide"
                style={{ color: "hsl(215 20% 55%)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: "hsl(215 20% 50%)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
