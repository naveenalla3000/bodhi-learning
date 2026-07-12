const milestones = [
  {
    year: "2018",
    title: "Founded",
    desc: "BODHI LEARNING was established by a collective of linguists and pedagogical designers with a vision to redefine professional education.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    desc: "Launched hybrid learning platforms, extending our reach to over 5,000 learners across India and the Middle East.",
  },
  {
    year: "2023",
    title: "Global Accreditation",
    desc: "Achieved international status, partnering with over 50 universities worldwide.",
    featured: true,
  },
];

export default function Milestones() {
  return (
    <section className="bg-surface-container-low py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12" data-gsap="fade-up">
          <h2 className="font-montserrat font-semibold text-3xl text-primary">
            Evolutionary Milestones
          </h2>
          <p className="text-on-surface-variant mt-2">
            A timeline of our commitment to excellence.
          </p>
        </div>

        <div className="space-y-4" data-gsap="stagger">
          {milestones.map((m) => (
            <div
              key={m.year}
              className="airy-card relative flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-6 md:p-8 rounded-2xl bg-surface"
            >
              {m.featured && (
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden rounded-2xl">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
              )}
              <div className="flex items-center gap-3 md:block md:w-20 flex-shrink-0">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest rounded-full md:hidden">
                  {m.year}
                </span>
                <div className="hidden md:block text-3xl font-montserrat text-primary/30 font-bold">
                  {m.year}
                </div>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-lg text-primary mb-1">
                  {m.title}
                </h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
