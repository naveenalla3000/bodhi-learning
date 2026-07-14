export default function AboutHero() {
  const disciplines = [
    { icon: "translate", label: "English Language Mastery" },
    { icon: "work", label: "Workforce Readiness" },
    { icon: "terminal", label: "Technical Skills" },
    { icon: "school", label: "21st-Century Pedagogy" },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24">
      {/* Amber glow — top right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      {/* Green glow — bottom left */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8" data-gsap="fade-up">
          <div className="w-8 h-px bg-secondary" />
          <span className="font-montserrat text-[10px] font-bold tracking-[0.28em] uppercase text-secondary">
            Our Story
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-montserrat font-bold text-4xl md:text-6xl text-primary leading-tight tracking-tight max-w-4xl mb-10"
          data-gsap="fade-up"
        >
          Wisdom in Practice:{" "}
          <span className="italic font-normal text-secondary">
            Cultivating The Next Era of Global Educators
          </span>
        </h1>

        {/* Body — split layout on desktop */}
        <div className="grid md:grid-cols-2 gap-12 items-start" data-gsap="fade-up">
          {/* Left — paragraph */}
          <div className="space-y-5">
            <p className="text-on-surface-variant leading-relaxed">
              BODHI LEARNING bridges the distance between traditional pedagogy and modern industry needs. We train students, teachers, and corporate professionals across four core disciplines — through Cambridge-certified experts and a founder who&apos;s built L&D at the scale of Amazon and ServiceNow.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Every program is designed for a world where AI is already in every classroom, every deal, every deadline — and where the people who know how to use it well, without losing their own judgment, are the ones who get ahead.
            </p>
            {/* Credential badge */}
            <div className="inline-flex items-center gap-3 mt-2 px-5 py-3 rounded-full bg-surface-container border border-outline-variant">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              <span className="font-montserrat text-xs font-bold tracking-wider text-primary uppercase">Cambridge-Certified · Est. 2026</span>
            </div>
          </div>

          {/* Right — four disciplines */}
          <div className="grid grid-cols-2 gap-4">
            {disciplines.map((d) => (
              <div
                key={d.label}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant hover:border-secondary/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[20px]">{d.icon}</span>
                </div>
                <span className="font-montserrat text-sm font-semibold text-primary leading-snug">
                  {d.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
