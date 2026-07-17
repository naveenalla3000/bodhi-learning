import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AnimatedButton from "@/components/animated-button";

export const metadata: Metadata = {
  title: "School Partnerships",
  description:
    "Strategic institutional consulting for schools seeking accreditation, financial sustainability, and campus modernisation. 42% average enrolment increase within 24 months.",
};

const services = [
  {
    icon: "verified_user",
    title: "Accreditation Support",
    body: "Navigating global standards with comprehensive documentation prep, internal audits, and quality assurance framework implementation.",
  },
  {
    icon: "payments",
    title: "Financial Sustainability",
    body: "Developing long-term fiscal health through diversified revenue models, endowment management, and operational efficiency mapping.",
  },
  {
    icon: "architecture",
    title: "Campus Modernisation",
    body: "Strategic physical and digital infrastructure planning designed to support 21st-century learning environments and student wellbeing.",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Institutional Audit",
    body: "A deep-dive analysis of current academic performance, operational overhead, and brand positioning in the market.",
  },
  {
    step: "02",
    title: "Framework Design",
    body: "Co-creating a customised 5-year growth strategy with measurable KPIs and milestones for every department.",
  },
  {
    step: "03",
    title: "Managed Execution",
    body: "Implementation support with quarterly reviews, stakeholder training, and continuous iterative improvement.",
  },
  {
    step: "04",
    title: "Legacy Achievement",
    body: "Sustaining excellence through internal culture shifts and global brand recognition for your institution.",
  },
];

const countries = ["UK", "UAE", "SG", "+9"];

export default function SchoolPartnershipsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 overflow-x-hidden">

        {/* ── Hero — centred overlay ── */}
        <section className="relative h-[480px] w-full overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCtfsK4NahaWW7FuS1hzXDTgAFkYNiSEYTddQ83a_cJQ85J78pWv6PreJNwpnA7jF6d98r2ZY8bDjSBE7j9FXG5cOKD_Qy0Xptd3c6jTWJ90GROEfnbYO3JZKTJBVsms1eoVOIEMXSuv9z-jcoWGK44iJc6w3S6eYPhtQDzaG-9Wz3shkShlTaJDv1Bi_rQaqb4jUscZ1lcWsSIe1WerXEKab5Ffms406VI90ciHzL2VGuzK0IQmm2pEFrW8G1hFjEAT3YtrjoIPY"
            alt="School campus — institutional growth"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-on-primary text-center max-w-3xl">
              <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-on-primary/80 mb-4 block">
                Institutional Partnership
              </span>
              <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                School Partners:{" "}
                <span className="font-[--font-cormorant] font-normal italic">
                  Strategic Institutional Growth
                </span>
              </h1>
              <p className="font-inter text-on-primary/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Partnering with educational institutions to foster a culture of excellence through systematic modernisation, financial sustainability, and rigorous accreditation support.
              </p>
            </div>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

          {/* ── Consultancy Services ── */}
          <section className="mb-24" data-gsap="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-4">
                  Consultancy Services
                </h2>
                <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                  We provide high-level strategic consulting for private and public institutions seeking to elevate their academic and operational standards.
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <div className="w-12 h-1 bg-secondary rounded-full" />
                <div className="w-4 h-1 bg-surface-container-high rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-8 border border-surface-container-high bg-white rounded-2xl hover:border-primary transition-colors duration-300 group"
                >
                  <span className="material-symbols-outlined text-primary text-[40px] mb-6 block transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    {s.icon}
                  </span>
                  <h3 className="font-montserrat text-lg font-bold text-primary mb-4">
                    {s.title}
                  </h3>
                  <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-6">
                    {s.body}
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary font-montserrat text-xs font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300 uppercase tracking-[0.12em]"
                  >
                    Learn More
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── Strategic Roadmap — Timeline ── */}
          <section className="mb-24 bg-surface-container-low rounded-3xl p-10 md:p-14" data-gsap="fade-up">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-14 text-center">
              The Strategic Roadmap
            </h2>

            <div className="space-y-0">
              {roadmap.map((r, i) => (
                <div
                  key={r.step}
                  className={`flex flex-col md:flex-row gap-8 items-start relative ${i < roadmap.length - 1 ? "pb-12" : ""}`}
                >
                  {/* Vertical connector line */}
                  {i < roadmap.length - 1 && (
                    <div className="hidden md:block absolute left-[27px] top-14 bottom-0 w-px bg-surface-container-high" />
                  )}
                  {/* Step square */}
                  <div className="z-10 bg-primary text-on-primary w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0">
                    <span className="font-montserrat text-lg font-bold">{r.step}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="font-montserrat text-lg font-bold text-primary mb-2">
                      {r.title}
                    </h4>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Partner Success Stories Bento ── */}
          <section data-gsap="stagger">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-12">
              Partner Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

              {/* Blockquote — 8-col, dark */}
              <div className="md:col-span-8 p-10 bg-primary rounded-2xl text-on-primary flex flex-col justify-end min-h-[320px]">
                <span className="material-symbols-outlined text-on-primary/30 text-[48px] mb-6">
                  format_quote
                </span>
                <blockquote className="font-[--font-cormorant] text-2xl md:text-3xl font-semibold italic leading-snug mb-6">
                  "Bodhi Learning didn't just provide a report; they embedded themselves into our community to drive real change in how we manage our campus life."
                </blockquote>
                <cite className="font-inter text-sm text-on-primary/60 not-italic">
                  — Dr. Helena Vance, President of St. Jude's Academy
                </cite>
              </div>

              {/* Success Metric — 4-col */}
              <div className="md:col-span-4 p-8 border border-surface-container-high bg-white rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="font-montserrat text-[11px] font-bold uppercase tracking-[0.22em] text-on-surface-variant mb-4">
                    Success Metric
                  </h4>
                  <div className="font-montserrat text-6xl font-bold text-primary mb-2">42%</div>
                  <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                    Increase in enrolment within 24 months of campus modernisation.
                  </p>
                </div>
                <div className="mt-8 h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[42%]" />
                </div>
              </div>

              {/* Global Reach — 4-col */}
              <div className="md:col-span-4 p-8 border border-surface-container-high bg-white rounded-2xl">
                <h4 className="font-montserrat text-lg font-bold text-primary mb-4">
                  Global Reach
                </h4>
                <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-6">
                  Assisting schools in 12 countries to achieve international accreditation status.
                </p>
                <div className="flex -space-x-3">
                  {countries.map((c, i) => (
                    <div
                      key={c}
                      className={`w-11 h-11 rounded-full border-2 border-white flex items-center justify-center font-montserrat text-xs font-bold flex-shrink-0 ${
                        i === countries.length - 1
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-high text-primary"
                      }`}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Analytics — 8-col */}
              <div className="md:col-span-8 p-10 bg-surface rounded-2xl border border-surface-container-high flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-sm border border-surface-container-high">
                  <span className="material-symbols-outlined text-primary text-[44px]">
                    analytics
                  </span>
                </div>
                <div>
                  <h4 className="font-montserrat text-lg font-bold text-primary mb-2">
                    Operational Analytics
                  </h4>
                  <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                    Our proprietary data dashboard helps partners track institutional health in real-time, focusing on student retention and resource allocation.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* ── CTA band ── */}
        <section className="py-20 bg-primary mt-8" data-gsap="fade-up">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-on-primary leading-tight mb-4">
                Ready to transform your institution?
              </h2>
              <p className="font-inter text-on-primary/70 text-base leading-relaxed">
                Let's start with a diagnostic conversation — no obligation, just clarity on where you stand and where you could go.
              </p>
            </div>
            <AnimatedButton href="/contact" variant="outline-light" size="md">
              Start the Conversation
            </AnimatedButton>
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
