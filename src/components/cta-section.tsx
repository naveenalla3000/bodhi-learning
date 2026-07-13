import AnimatedButton from "@/components/animated-button";

export default function CtaSection() {
  return (
    <section className="py-32 bg-primary text-on-primary relative overflow-hidden">

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.6) 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large decorative concentric rings — left anchor */}
      <svg
        className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="260" cy="260" r="100" stroke="white" strokeWidth="1.5" />
        <circle cx="260" cy="260" r="160" stroke="white" strokeWidth="1" />
        <circle cx="260" cy="260" r="220" stroke="white" strokeWidth="0.75" />
        <circle cx="260" cy="260" r="255" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Large decorative concentric rings — right anchor */}
      <svg
        className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="260" cy="260" r="100" stroke="white" strokeWidth="1.5" />
        <circle cx="260" cy="260" r="160" stroke="white" strokeWidth="1" />
        <circle cx="260" cy="260" r="220" stroke="white" strokeWidth="0.75" />
        <circle cx="260" cy="260" r="255" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* Flowing arc — top */}
      <svg
        className="absolute top-0 left-0 w-full opacity-[0.05] pointer-events-none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 80 Q360 0 720 60 Q1080 120 1440 40" stroke="white" strokeWidth="1.5" />
        <path d="M0 100 Q360 20 720 80 Q1080 140 1440 60" stroke="white" strokeWidth="1" />
      </svg>

      {/* Flowing arc — bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.05] pointer-events-none"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0 40 Q360 120 720 60 Q1080 0 1440 80" stroke="white" strokeWidth="1.5" />
        <path d="M0 60 Q360 140 720 80 Q1080 20 1440 100" stroke="white" strokeWidth="1" />
      </svg>

      {/* Lotus-inspired mandala fragment — centre top */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.06] pointer-events-none"
        width="260"
        height="130"
        viewBox="0 0 260 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {[0, 30, 60, 90, 120, 150, 180].map((deg) => (
          <ellipse
            key={deg}
            cx="130"
            cy="130"
            rx="18"
            ry="62"
            stroke="white"
            strokeWidth="0.8"
            transform={`rotate(${deg} 130 130)`}
          />
        ))}
        <circle cx="130" cy="130" r="10" stroke="white" strokeWidth="1" />
      </svg>

      {/* Soft glow blobs */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10" data-gsap="scale-in">
        <span className="inline-block text-secondary font-semibold tracking-[0.3em] uppercase text-xs mb-6 font-montserrat">
          START YOUR JOURNEY
        </span>
        <h2 className="font-montserrat font-bold text-2xl md:text-4xl mb-8 tracking-tight">
          12,000+ learners already chose to grow. Your turn.
        </h2>
        <p className="font-inter text-lg md:text-xl text-on-primary/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Book a free consultation — no pitch, no pressure, just a real conversation about where you want to go.
        </p>
        <div className="flex justify-center">
          <AnimatedButton href="/contact" variant="secondary" size="lg">
            Book a Free Consultation
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
