const steps = [
  {
    num: "01",
    icon: "analytics",
    title: "Assess",
    desc: "We find exactly where you're stuck. A sharp diagnostic, not a generic quiz.",
    accent: "bg-primary/5 group-hover:bg-primary group-hover:text-on-primary",
  },
  {
    num: "02",
    icon: "menu_book",
    title: "Learn",
    desc: "You train with the best, not just watch a screen. High-impact sessions built around you.",
    accent:
      "bg-secondary/10 group-hover:bg-secondary group-hover:text-on-secondary",
  },
  {
    num: "03",
    icon: "rocket_launch",
    title: "Apply",
    desc: "You leave with results, not notes. Real projects. Real proof you've leveled up.",
    accent: "bg-primary/5 group-hover:bg-primary group-hover:text-on-primary",
  },
];

export default function BodhiMethod() {
  return (
    <section className="py-20 bg-surface-bright relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-gsap="fade-up">
          <span className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6 tracking-tight">
            The Bodhi Method
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed opacity-80">
            A sophisticated, three-stage transformation framework designed for
            elite professional advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative" data-gsap="stagger">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              data-gsap-item
              className="group relative bg-surface-container-lowest p-10 rounded-3xl border border-surface-container-high hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl z-10"
            >
              {/* Ghost number */}
              <div className="absolute -top-6 -right-4 text-8xl font-bold text-primary/5 pointer-events-none select-none group-hover:text-secondary/10 transition-colors duration-500">
                {step.num}
              </div>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${step.accent}`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>

              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-on-surface-variant text-base leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
