export default function AboutHero() {
  return (
    <section className="relative py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center" data-gsap="fade-up">
        <div className="inline-block px-4 py-1 bg-surface-container-lowest border border-outline-variant rounded-full text-xs font-bold tracking-widest text-primary mb-6 uppercase">
          Established 2026
        </div>
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-8 text-primary max-w-4xl mx-auto leading-tight tracking-tight">
          Wisdom in Practice:{" "}
          <span className="italic font-normal">
            Cultivating The Next Era of Global Educators
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
          BODHI LEARNING bridges the distance between traditional pedagogy and
          modern industry needs through immersive, skill-first experiences.
        </p>
      </div>
    </section>
  );
}
