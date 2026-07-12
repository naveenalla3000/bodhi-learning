const stats = [
  { value: "12,000+", label: "Learners Transformed", accent: false },
  { value: "98%", label: "Student Satisfaction", accent: true },
  { value: "200+", label: "Institutional Partners", accent: false },
  { value: "50+", label: "Expert Mentors", accent: true },
];

export default function ImpactNumbers() {
  return (
    <section className="py-12 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center flex flex-col gap-1 ${
                i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
            >
              <span
                className={`text-3xl md:text-5xl font-bold font-montserrat ${
                  s.accent ? "text-secondary" : "text-on-primary"
                }`}
              >
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-on-primary/60 font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
