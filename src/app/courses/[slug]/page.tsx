import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { getCourse, getAllSlugs } from "@/lib/courses";
import AnimatedButton from "@/components/animated-button";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} | BODHI LEARNING`,
    description: course.desc,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <Nav />
      <main className="pt-20">

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={course.heroImg}
              alt={course.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-on-primary" data-gsap="fade-up">
            <div className="max-w-3xl">
              <span className="inline-block bg-secondary text-on-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                {course.category}
              </span>
              <h1 className="font-[--font-cormorant] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-on-primary/70 text-xl font-light italic mb-8">
                {course.subtitle}
              </p>
              <p className="text-on-primary/80 text-lg leading-relaxed mb-10 max-w-2xl">
                {course.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-12">
                {[
                  { icon: "schedule", label: "Duration", value: course.duration },
                  { icon: "signal_cellular_alt", label: "Level", value: course.level },
                  { icon: "home_work", label: "Mode", value: course.mode },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">{icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-on-primary/60">{label}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <AnimatedButton href="/contact" variant="outline-light" size="md">
                  Enroll Today — {course.price}
                </AnimatedButton>
                <span className="flex items-center gap-2 text-on-primary/70 text-sm italic">
                  <span className="material-symbols-outlined text-[18px]">info</span>
                  Installment plans available
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Academic Intent ─────────────────────────────────── */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4" data-gsap="slide-left">
                <h2 className="font-[--font-cormorant] text-4xl font-bold text-primary mb-4 leading-tight">
                  Academic<br />Intent
                </h2>
                <div className="h-px w-16 bg-secondary" />
              </div>

              <div className="lg:col-span-8 space-y-8" data-gsap="slide-right">
                {course.overview.map((p, i) => (
                  <p key={i} className="text-on-surface-variant text-lg leading-relaxed">
                    {p}
                  </p>
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div>
                    <h4 className="font-[--font-montserrat-var] font-bold text-primary mb-4">
                      Syllabus Focus
                    </h4>
                    <ul className="space-y-3">
                      {course.syllabusFocus.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                          <span className="text-on-surface-variant text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-[--font-montserrat-var] font-bold text-primary mb-4">
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {course.learningOutcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
                          <span className="text-on-surface-variant text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Curriculum Framework ─────────────────────────────── */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center" data-gsap="fade-up">
              <h2 className="font-[--font-cormorant] text-4xl md:text-5xl font-bold text-primary mb-4">
                Curriculum Framework
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Six rigorous modules designed to build expertise and real-world capability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6" data-gsap="stagger">
              {course.modules.map((mod, i) => {
                const spans = [
                  "md:col-span-4",
                  "md:col-span-8",
                  "md:col-span-7",
                  "md:col-span-5",
                  "md:col-span-6",
                  "md:col-span-6",
                ];
                return (
                  <div
                    key={mod.number}
                    className={`${spans[i] ?? "md:col-span-6"} group border border-surface-container-high bg-surface p-8 rounded-2xl flex flex-col hover:border-primary hover:shadow-md transition-all duration-300`}
                    data-gsap-item
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">
                        MODULE {mod.number}
                      </span>
                      {mod.icon && (
                        <span className="material-symbols-outlined text-3xl text-surface-container-high group-hover:text-primary transition-colors">
                          {mod.icon}
                        </span>
                      )}
                    </div>
                    <h3 className="font-[--font-montserrat-var] font-bold text-lg text-primary mb-3">
                      {mod.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Lead Instructor ──────────────────────────────────── */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-surface-container-high shadow-sm" data-gsap="scale-in">
              <div className="relative min-h-[420px]">
                <Image
                  src={course.instructor.img}
                  alt={course.instructor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-4">
                  Lead Faculty
                </span>
                <h2 className="font-[--font-cormorant] text-4xl font-bold text-primary mb-3">
                  {course.instructor.name}
                </h2>
                <p className="text-primary font-semibold text-sm mb-6">
                  {course.instructor.credential}
                </p>
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  {course.instructor.bio}
                </p>
                <div className="flex gap-6">
                  <span className="text-primary border-b border-primary text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity cursor-pointer">
                    View Publications
                  </span>
                  <span className="text-primary border-b border-primary text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity cursor-pointer">
                    LinkedIn Profile
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Course Features ──────────────────────────────────── */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-surface-container-high border border-surface-container-high rounded-2xl overflow-hidden" data-gsap="fade-up">
              {course.features.map((f) => (
                <div key={f.title} className="p-8 text-center flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-primary">{f.icon}</span>
                  <h4 className="font-[--font-montserrat-var] font-bold text-primary">{f.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────────── */}
        <section className="py-24 bg-primary text-on-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots-cta" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-cta)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-6" data-gsap="scale-in">
            <h2 className="font-[--font-cormorant] text-4xl md:text-5xl font-bold mb-6">
              Start Your Mastery Journey
            </h2>
            <p className="text-on-primary/80 text-lg leading-relaxed mb-12">
              Applications are reviewed on a rolling basis. Secure your seat in our next cohort and begin your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/contact" variant="outline-light" size="lg">
                Enroll in {course.title}
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary" size="lg">
                Book a Consultation
              </AnimatedButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
