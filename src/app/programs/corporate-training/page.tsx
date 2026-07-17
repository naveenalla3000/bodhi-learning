import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Corporate Training",
  description:
    "Communication, leadership, and cross-cultural skills built to Fortune 500 standards. On-site and online delivery for teams that need results in the next quarter.",
};

const retreats = [
  {
    tag: "Alpine Summit",
    title: "Cognitive Clarity Retreat",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXtrEYo2KS_Nwgm597ODW3psGNF43rgiJVFPoAKtVbUrNbKDqq9HBWfLHc70Nf42dU0wexeDG4YFHwUtLr1GYq6E9UNsF0fQuIzU_wd6qRyQ6x_Cv5NyibT8EGSW79SCipW0GtNU4ZoCIGDU8buAwlse5PU9kbj5tHZ-gooezaww5nBJVLsNxb1Js0YK0BqQSwOwWE0dmZKrOz2sfX4A-3-XEDBpcBbpma0TI1SJO4DF2lfYK1aHgfpp8IQcDOJ2CePv2UxRKLUow",
    alt: "Mountain retreat center for executive coaching",
  },
  {
    tag: "Urban Nexus",
    title: "High-Stakes Innovation",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPMzbeGz9Ilb-cNhL2FNZ_KUetvZjnCSistc9DGDcX0fKaoJhO5aob-TaFEbtUQzCE37cXk_gS1NJdqjxckRrQTYFFVM6SjBEWgCowMiLWxqJnOsDtwe-W4k-RZlLttSRyho26AXe0ohTvvyWWFT2TowskfXKn5sQU67GYXzsTQ_iQcIO2zWk0M3FQqr-ex2QNvS3_iOxd57HbdzQ3EX_J4J1zb6aSKMhi5RTjN5_jESzYRY5swHPH7n_8sFqJZzctJSgIOamUIbg",
    alt: "Modern city boardroom for high-stakes executive strategy",
  },
];

const caseStudies = [
  { tag: "2023 Tech Crisis", title: "The Logistics Paradox" },
  { tag: "Healthcare Pivot", title: "Ethical Scaling Models" },
];

export default function CorporateTrainingPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative h-[480px] overflow-hidden">
          <Image
            src="/corporate-training-hero.png"
            alt="Corporate leadership training"
            fill
            priority
            className="object-cover grayscale-[20%] brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />
          <div className="relative h-full flex flex-col justify-end px-6 md:px-10 pb-12 text-on-primary">
            <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.22em] mb-4 opacity-80">
              Executive Training Series
            </span>
            <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4 max-w-2xl">
              Leadership & Growth:{" "}
              <span className="font-[--font-cormorant] font-normal italic">
                Navigating High-Stakes Complexity
              </span>
            </h1>
            <p className="font-inter text-on-primary/85 text-base md:text-lg max-w-xl leading-relaxed">
              An authoritative curriculum designed for the modern executive, blending strategic clarity with emotional intelligence.
            </p>
          </div>
        </section>

        {/* ── Core Competencies Bento ── */}
        <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto" data-gsap="fade-up">
          <div className="mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-3">
              Core Competencies
            </h2>
            <div className="h-0.5 w-12 bg-secondary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Strategic Thinking — 8-col */}
            <div className="md:col-span-8 p-10 border border-surface-container-high bg-white rounded-2xl flex flex-col justify-between group hover:border-primary transition-colors duration-300">
              <div>
                <span className="material-symbols-outlined text-primary text-[40px] mb-6 block">
                  insights
                </span>
                <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
                  Strategic Thinking
                </h3>
                <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                  Master the art of long-term visioning and tactical execution. We teach frameworks for identifying market shifts before they happen, ensuring your organisation remains ahead of the curve.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-montserrat text-xs font-bold uppercase tracking-[0.15em] cursor-pointer group-hover:gap-3 transition-all duration-300">
                <span>Explore Frameworks</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </div>
            </div>

            {/* Emotional Intelligence — 4-col */}
            <div className="md:col-span-4 p-10 border border-surface-container-high bg-surface rounded-2xl flex flex-col justify-center">
              <span className="material-symbols-outlined text-secondary text-[40px] mb-6 block">
                psychology_alt
              </span>
              <h3 className="font-montserrat text-xl font-bold text-primary mb-4">
                Emotional Intelligence
              </h3>
              <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                Leadership is human. Develop the self-awareness and empathy required to lead diverse, global teams with resilience.
              </p>
            </div>

            {/* High-Performance Team Building — full width, dark */}
            <div className="md:col-span-12 p-10 bg-primary rounded-2xl text-on-primary flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="font-montserrat text-xl font-bold text-white mb-4">
                  High-Performance Team Building
                </h3>
                <p className="font-inter text-on-primary/75 text-sm leading-relaxed">
                  Turn individual excellence into collective dominance. Our methodology focuses on psychological safety, radical candour, and shared accountability.
                </p>
              </div>
              <div className="md:w-auto grid grid-cols-2 gap-4 flex-shrink-0">
                {[
                  { value: "94%", label: "Efficiency Gain" },
                  { value: "12k+", label: "Leaders Trained" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="p-6 border border-on-primary/20 rounded-xl text-center"
                  >
                    <p className="font-montserrat text-3xl font-bold text-white mb-1">{s.value}</p>
                    <p className="font-montserrat text-[9px] uppercase tracking-[0.2em] text-on-primary/70">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Leadership Retreats ── */}
        <section className="py-20 bg-white border-t border-surface-container-high">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-16 items-start">

            {/* Sticky text */}
            <div className="lg:w-1/3 lg:sticky lg:top-32" data-gsap="slide-left">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-6">
                Leadership Retreats
              </h2>
              <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-8">
                Immersive off-site experiences designed to disconnect from the noise and reconnect with the mission. These aren't just meetings — they are metamorphic events for your C-Suite.
              </p>
              <ul className="space-y-4">
                {[
                  "Global Destination Off-sites",
                  "Executive Coaching Integration",
                  "Post-Retreat Strategic Roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      check_circle
                    </span>
                    <span className="font-inter text-sm text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retreat image cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6" data-gsap="slide-right">
              {retreats.map((r) => (
                <div
                  key={r.title}
                  className="aspect-[3/4] relative overflow-hidden rounded-2xl group"
                >
                  <Image
                    src={r.img}
                    alt={r.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-montserrat text-[10px] uppercase tracking-[0.22em] opacity-75 mb-1">
                      {r.tag}
                    </p>
                    <p className="font-montserrat text-lg font-bold">{r.title}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Skill Assessments & Case Studies ── */}
        <section className="py-20 border-t border-surface-container-high">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12" data-gsap="fade-up">

            {/* Skill Assessments */}
            <div>
              <h2 className="font-montserrat text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px]">quiz</span>
                Skill Assessments
              </h2>
              <div className="space-y-5">
                <div className="p-6 bg-white border border-surface-container-high rounded-2xl">
                  <h4 className="font-montserrat text-base font-bold text-primary mb-2">
                    360-Degree Feedback Matrix
                  </h4>
                  <p className="font-inter text-on-surface-variant text-sm mb-5">
                    A comprehensive analysis of leadership impact from peers, subordinates, and superiors.
                  </p>
                  <div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-3/4 rounded-full" />
                  </div>
                </div>
                <div className="p-6 bg-white border border-surface-container-high rounded-2xl opacity-60">
                  <h4 className="font-montserrat text-base font-bold text-primary mb-2">
                    Resilience Quotient (RQ) Testing
                  </h4>
                  <p className="font-inter text-on-surface-variant text-sm">
                    Measuring the ability to maintain clarity and decisiveness under extreme pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study Analysis */}
            <div className="bg-primary rounded-2xl p-10 text-on-primary">
              <h2 className="font-montserrat text-2xl font-bold text-white mb-5">
                Case Study Analysis
              </h2>
              <p className="font-inter text-on-primary/75 text-sm leading-relaxed mb-8">
                Deep dives into critical moments in business history. We analyse the decisions that led to industry disruption and total collapse.
              </p>
              <div className="space-y-0">
                {caseStudies.map((c) => (
                  <div
                    key={c.title}
                    className="py-5 border-b border-on-primary/15 flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-on-primary/60 mb-1">
                        {c.tag}
                      </p>
                      <p className="font-montserrat text-base font-bold text-white">{c.title}</p>
                    </div>
                    <span className="material-symbols-outlined text-on-primary/60 transition-transform duration-300 group-hover:translate-x-1">
                      open_in_new
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Back bar ── */}
        <div className="border-t border-surface-container-high py-8 px-6 md:px-10 max-w-7xl mx-auto flex items-center gap-6">
          <Link
            href="/programs"
            className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-primary/60 hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            All Programs
          </Link>
          <div className="h-4 w-px bg-surface-container-high" />
          <Link
            href="/contact"
            className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-secondary hover:text-secondary/80 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}
