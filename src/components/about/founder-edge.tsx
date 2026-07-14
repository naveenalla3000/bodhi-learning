const credentials = [
  { icon: "corporate_fare", label: "Amazon & ServiceNow", sub: "17+ years L&D leadership" },
  { icon: "verified", label: "CELTA Certified", sub: "University of Cambridge" },
  { icon: "analytics", label: "Lean Six Sigma", sub: "Black Belt — process rigor" },
];

const stats = [
  { val: "17+", label: "Years in L&D" },
  { val: "F500", label: "Track Record" },
  { val: "6σ", label: "Process Rigor" },
];

export default function FounderEdge() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="mb-12" data-gsap="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-montserrat text-[10px] font-bold tracking-[0.28em] uppercase text-secondary">
              Our Founder
            </span>
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary leading-tight tracking-tight">
            Led by Someone Who&apos;s{" "}
            <span className="italic font-normal text-secondary">Actually Done It</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — credential cards */}
          <div className="flex flex-col gap-5" data-gsap="slide-left">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="bg-surface-container-lowest rounded-2xl border border-surface-container-high hover:shadow-xl transition-all duration-300 p-6 flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[22px]">{c.icon}</span>
                </div>
                <div>
                  <p className="font-montserrat font-bold text-primary text-base leading-none mb-1">{c.label}</p>
                  <p className="font-inter text-on-surface-variant text-sm">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-container-lowest rounded-2xl border border-surface-container-high hover:shadow-xl transition-all duration-300 p-5 text-center"
                >
                  <p className="font-montserrat font-black text-2xl text-primary mb-1">{s.val}</p>
                  <p className="font-montserrat text-[9px] font-bold tracking-widest uppercase text-on-surface-variant/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — body text card */}
          <div
            className="bg-surface-container-lowest rounded-2xl border border-surface-container-high hover:shadow-xl transition-all duration-300 p-8 space-y-5"
            data-gsap="slide-right"
          >
            <p className="text-on-surface-variant leading-relaxed">
              Our founder spent 17+ years building learning and development inside companies most people only dream of working at — Amazon and ServiceNow among them. That&apos;s not a resume line, it&apos;s the reason Bodhi&apos;s frameworks are built the way they are.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              CELTA-certified in language teaching, and a Lean Six Sigma Black Belt in measuring whether training actually works. Most learning academies teach communication. We teach it the way a Fortune 500 L&amp;D function would build it — then hold it to the same process rigor Six Sigma demands.
            </p>
            <div className="border-l-2 border-secondary pl-5 py-1">
              <p className="font-montserrat font-semibold text-primary text-lg leading-snug">
                That&apos;s the edge you&apos;re paying for.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
