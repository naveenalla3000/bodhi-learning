import Image from "next/image";

const features = [
  {
    icon: "groups",
    title: "Expert Trainers",
    desc: "Learn from industry veterans and PhD-level educators with global experience and deep pedagogical expertise.",
  },
  {
    icon: "update",
    title: "Flexible Learning",
    desc: "Hybrid models that fit your professional schedule without compromising quality or academic rigor.",
  },
  {
    icon: "trending_up",
    title: "Proven Outcomes",
    desc: "94% of our graduates report professional advancement within six months of completing their curriculum.",
  },
];

const graduatesImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXHr465AHIOS6xE1g-I6vYB5qXom40Db7ipoi6t5MuAgEyOxWUP3nOXwU5l7h3I59Ex3aTOh9VTRcUkcUsssg81bHjIApgJq-wRFGTE5FTE8Hj170KWJDzrC6BG7V8SO4QnzR06ieruVLBtS6_9LGss7XNWr2c72Y_OOjgkC9X-mq0WItqeFJ3fkWlH_mYqOiwYdpExrGZvFjJ4crX-A01HG6nl7O3U2sdv0UQL7SpBDYB_cLsevGMWI2xiyDDeayi3FVrJg91Dg";

const stats = [
  { value: "19,000k+", label: "Educators Empowered", pct: "75%" },
  { value: "25,000k+", label: "Learners Trained", pct: "85%" },
  { value: "30+", label: "Corporate Clients", pct: "60%" },
  { value: "15+", label: "Years of Excellence", pct: "95%" },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16" data-gsap="fade-up">
          <h2 className="font-montserrat font-semibold text-3xl text-primary mb-6">
            Why Choose BODHI LEARNING?
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            We don&apos;t just provide content; we facilitate growth. Our
            methodology combines rigorous academic standards with practical,
            real-world application.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" data-gsap="stagger">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-surface-container-high hover:shadow-xl transition-all duration-300 rounded-tr-[64px] rounded-bl-[64px]"
            >
              <div className="bg-primary-container w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary">
                  {f.icon}
                </span>
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-primary mb-4">
                {f.title}
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dark Stats Block */}
        <div className="bg-gradient-to-br from-primary via-[#0d4a2a] to-[#1a6040] rounded-3xl p-10 md:p-16 text-white rounded-tr-[64px] rounded-bl-[64px]" data-gsap="scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] md:h-[500px]" data-gsap="clip-reveal">
              <Image
                src={graduatesImage}
                alt="Graduates"
                fill
                className="object-cover shadow-2xl rounded-tr-[64px] rounded-bl-[64px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6" data-gsap="slide-right">
              <h3 className="font-montserrat font-bold text-4xl md:text-5xl text-white">
                Shaping the Future of Education
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                At BODHI LEARNING, we believe that the right opportunity can
                turn dreams into limitless potential. Our community-driven
                institution is renowned for its unique contributions to
                professional excellence and academic rigor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <div className="flex flex-col items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {s.value}
                  </span>
                  <span className="text-white/60 text-xs uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
                <div className="w-full bg-white/10 h-0.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-secondary h-full"
                    style={{ width: s.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
