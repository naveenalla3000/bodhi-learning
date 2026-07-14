const credentials = [
  { icon: "corporate_fare", label: "Amazon & ServiceNow", sub: "17+ years L&D leadership" },
  { icon: "verified", label: "CELTA Certified", sub: "University of Cambridge" },
  { icon: "analytics", label: "Lean Six Sigma", sub: "Black Belt — process rigor" },
];

export default function FounderEdge() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — dark card */}
          <div className="relative bg-gradient-to-br from-primary via-[#0d4a2a] to-[#1a6040] rounded-3xl p-10 md:p-12 text-white overflow-hidden" data-gsap="slide-left">
            {/* Dot texture */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.8) 1.5px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Concentric rings */}
            <svg className="absolute -bottom-20 -right-20 opacity-[0.08] pointer-events-none" width="320" height="320" viewBox="0 0 320 320" fill="none" aria-hidden>
              <circle cx="160" cy="160" r="60"  stroke="white" strokeWidth="1.5" />
              <circle cx="160" cy="160" r="100" stroke="white" strokeWidth="1" />
              <circle cx="160" cy="160" r="145" stroke="white" strokeWidth="0.6" />
            </svg>
            {/* Amber glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-secondary" />
                <span className="font-montserrat text-[10px] font-bold tracking-[0.28em] uppercase text-secondary">
                  Our Founder
                </span>
              </div>

              <h2 className="font-montserrat font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-8">
                Led by Someone Who&apos;s{" "}
                <span className="italic font-normal text-secondary">Actually Done It</span>
              </h2>

              {/* Credential pills */}
              <div className="flex flex-col gap-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/6 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-secondary text-[18px]">{c.icon}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-white leading-none mb-0.5">{c.label}</p>
                      <p className="font-inter text-xs text-white/50">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — body text */}
          <div className="space-y-6" data-gsap="slide-right">
            <p className="text-on-surface-variant leading-relaxed">
              Our founder spent 17+ years building learning and development inside companies most people only dream of working at — Amazon and ServiceNow among them. That&apos;s not a resume line, it&apos;s the reason Bodhi&apos;s frameworks are built the way they are.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              CELTA-certified in language teaching, and a Lean Six Sigma Black Belt in measuring whether training actually works. Most learning academies teach communication. We teach it the way a Fortune 500 L&amp;D function would build it — then hold it to the same process rigor Six Sigma demands.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-secondary pl-6 py-1">
              <p className="font-montserrat font-semibold text-primary text-lg leading-snug">
                That&apos;s the edge you&apos;re paying for.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { val: "17+", label: "Years in L&D" },
                { val: "F500", label: "Track Record" },
                { val: "6σ", label: "Process Rigor" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
                  <p className="font-montserrat font-black text-2xl text-primary mb-1">{s.val}</p>
                  <p className="font-montserrat text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
