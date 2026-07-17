import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AnimatedButton from "@/components/animated-button";

export const metadata: Metadata = {
  title: "K–12 School Coaching",
  description:
    "12:1 student-mentor ratio. Board exam mastery, IB/IGCSE/Cambridge prep, and 21st-century skills coaching — personalised to every student.",
};

const stats = [
  { value: "12:1", label: "Student-Mentor Ratio" },
  { value: "98%", label: "Board Excellence Rate" },
  { value: "150+", label: "University Partners" },
];

const overviewCards = [
  {
    icon: "verified_user",
    title: "Academic Rigor",
    body: "Intensive coverage of CBSE, ICSE, and IB frameworks with a relentless focus on conceptual mastery — not just marks.",
  },
  {
    icon: "self_improvement",
    title: "Cognitive Agility",
    body: "Workshops dedicated to critical thinking, problem-solving, and metacognitive skills that competitive universities actually want.",
  },
];

export default function SchoolCoachingPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden">
          <div className="relative aspect-[16/7] w-full min-h-[340px]">
            <Image
              src="/school-coaching-hero.png"
              alt="Students studying together"
              fill
              priority
              className="object-cover brightness-[0.88] grayscale-[15%]"
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Text overlay — bottom left */}
            <div className="absolute bottom-0 left-0 px-6 md:px-10 pb-10 md:pb-14 max-w-2xl text-white">
              <span className="inline-block bg-primary text-on-primary font-montserrat text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1 mb-5 rounded-sm">
                Academic Program
              </span>
              <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                K–12 Excellence:{" "}
                <span className="font-[--font-cormorant] font-normal italic">
                  Boards & Beyond
                </span>
              </h1>
              <p className="font-inter text-white/85 text-base md:text-lg leading-relaxed">
                Cultivating cognitive depth and academic rigor through personalised mentorship and mastery of national and international curriculum standards.
              </p>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Main column ── */}
          <div className="lg:col-span-8 space-y-16">

            {/* Program Overview */}
            <section data-gsap="fade-up">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-6">
                Program Overview
              </h2>
              <p className="font-inter text-on-surface-variant text-base leading-relaxed mb-10">
                Our K–12 Excellence programme is designed for students who seek more than just grades. We prioritise "Intellectual Clarity" — a state where learning becomes a pursuit of understanding rather than a task of memorisation. By bridging the gap between local board requirements and global academic standards, we prepare students for elite higher education pathways.
              </p>

              {/* Feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {overviewCards.map((card) => (
                  <div
                    key={card.title}
                    className="p-6 border border-surface-container-high bg-white rounded-xl"
                  >
                    <span className="material-symbols-outlined text-secondary text-[32px] mb-4 block">
                      {card.icon}
                    </span>
                    <h3 className="font-montserrat text-lg font-bold text-primary mb-2">
                      {card.title}
                    </h3>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Focus — Bento */}
            <section data-gsap="fade-up">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-8">
                Curriculum Focus
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* Board Mastery — wide */}
                <div className="md:col-span-2 p-8 rounded-2xl bg-primary text-on-primary">
                  <h4 className="font-montserrat text-xl font-bold mb-4">Board Mastery</h4>
                  <p className="font-inter text-on-primary/75 text-sm leading-relaxed mb-6">
                    Tailored modules for National (CBSE/ICSE) and International (IB/IGCSE) boards, ensuring students excel in their specific school requirements while building a foundation for competitive exams.
                  </p>
                  <ul className="space-y-3 font-inter text-sm text-on-primary/80">
                    {["Strategic exam preparation", "In-depth conceptual analysis"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mentorship */}
                <div className="p-8 rounded-2xl bg-surface border border-surface-container-high flex flex-col justify-between">
                  <div>
                    <h4 className="font-montserrat text-lg font-bold text-primary mb-3">Mentorship</h4>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-6">
                      1-on-1 sessions with academic coaches to navigate personal growth and subject challenges.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="font-montserrat text-[11px] font-bold uppercase tracking-[0.18em] text-secondary underline underline-offset-4 hover:text-secondary/80 transition-colors"
                  >
                    Meet Coaches
                  </Link>
                </div>

                {/* Development Workshops — full width */}
                <div className="md:col-span-3 p-8 rounded-2xl bg-surface-container-low border border-surface-container-high flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h4 className="font-montserrat text-lg font-bold text-primary mb-2">
                      Development Workshops
                    </h4>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                      Weekly sessions focusing on memory techniques, time management, and ethical leadership — the skills that separate toppers from thinkers.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    {["psychology", "tactic"].map((icon) => (
                      <div
                        key={icon}
                        className="w-12 h-12 bg-white border border-surface-container-high rounded-xl flex items-center justify-center"
                      >
                        <span className="material-symbols-outlined text-primary text-[22px]">
                          {icon}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>

          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-4 space-y-8 lg:pt-2">

            {/* Quick Stats */}
            <div className="p-8 border border-surface-container-high rounded-2xl bg-white sticky top-28" data-gsap="slide-right">
              <h3 className="font-montserrat text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-8">
                Quick Statistics
              </h3>
              <div className="space-y-8">
                {stats.map((s, i) => (
                  <div key={s.label}>
                    <div className="font-montserrat text-4xl font-bold text-primary leading-none mb-1">
                      {s.value}
                    </div>
                    <p className="font-inter text-on-surface-variant text-sm">{s.label}</p>
                    {i < stats.length - 1 && (
                      <div className="mt-8 h-px bg-surface-container-high" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-surface-container-high">
                <AnimatedButton href="/contact" variant="primary" size="md" className="w-full">
                  Book a Free Session
                </AnimatedButton>
                <Link
                  href="/programs"
                  className="block w-full text-center mt-3 font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-primary/60 hover:text-primary transition-colors py-2"
                >
                  ← All Programs
                </Link>
              </div>
            </div>

          </aside>

        </div>

      </main>
      <Footer />
    </>
  );
}
