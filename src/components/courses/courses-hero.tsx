export default function CoursesHero() {
  return (
    <section className="mb-16" data-gsap="fade-up">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-px bg-secondary" />
        <span className="font-montserrat text-secondary font-semibold tracking-[0.3em] uppercase text-xs">
          Our Offerings
        </span>
        <div className="w-12 h-px bg-secondary" />
      </div>
      <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-6">
        Four offerings.
      </h1>
      <p className="font-inter text-on-surface-variant text-base max-w-3xl leading-relaxed">
        Every one of them now teaches AI as leverage — not a shortcut, not a replacement, and never a substitute for a Cambridge-certified human in the room.
      </p>
    </section>
  );
}
