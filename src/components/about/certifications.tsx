const certs = [
  {
    code: "TKT",
    name: "Teaching Knowledge Test",
    desc: "Foundational Cambridge certification validating core knowledge of English language teaching concepts and practices.",
  },
  {
    code: "CIDTT",
    name: "Cambridge International Diploma in Teacher Training",
    desc: "Advanced qualification for those who train and develop English language teachers — the benchmark for trainer excellence.",
  },
  {
    code: "CELTA",
    name: "Certificate in English Language Teaching to Adults",
    desc: "The world's most widely taken initial qualification for English language teaching, awarded by the University of Cambridge.",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16" data-gsap="fade-up">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-secondary" />
              <span className="font-montserrat text-[10px] font-bold tracking-[0.28em] uppercase text-secondary">
                Cambridge Certified
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary leading-tight tracking-tight">
              Why Our Certifications{" "}
              <span className="italic font-normal text-secondary">Matter</span>
            </h2>
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            Our trainers aren&apos;t reading from a textbook — they&apos;re certified by the University of Cambridge. That&apos;s the same rigor Cambridge holds itself to — now applied to a curriculum that also teaches you where AI fits, and where it doesn&apos;t.
          </p>
        </div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14" data-gsap="stagger">
          {certs.map((c, i) => (
            <div
              key={c.code}
              data-gsap-item
              className="relative group bg-surface-container-low rounded-2xl p-8 border border-outline-variant hover:border-secondary/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ borderRadius: i === 0 ? "1rem 3rem 1rem 1rem" : i === 2 ? "1rem 1rem 1rem 3rem" : "1rem" }}
            >
              {/* Ghost code */}
              <span className="absolute -top-4 -right-2 font-montserrat font-black text-7xl text-primary/5 select-none pointer-events-none group-hover:text-secondary/8 transition-colors duration-500">
                {c.code}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-[22px]">verified</span>
                </div>
                <span className="font-montserrat font-black text-xs tracking-[0.2em] uppercase text-secondary mb-2 block">
                  {c.code}
                </span>
                <h3 className="font-montserrat font-semibold text-lg text-primary mb-3 leading-snug">
                  {c.name}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl bg-primary text-white" data-gsap="fade-up">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-secondary text-[28px]">workspace_premium</span>
          </div>
          <div>
            <p className="font-montserrat font-bold text-base mb-1">University of Cambridge — the global standard.</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Every Bodhi trainer holds at least one Cambridge certification. Our curriculum is built on that foundation — and extended for a world where AI is already in the room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
