import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AnimatedButton from "@/components/animated-button";

export const metadata: Metadata = {
  title: "Teacher Training | BODHI LEARNING",
  description:
    "Advancing the art of instruction through intellectual clarity and rigorous professional development. Join a cohort of visionary educators shaping the future of learning.",
};

const pillars = [
  {
    icon: "devices",
    title: "Digital Pedagogy",
    body: "Seamlessly integrating technology into the classroom to enhance, rather than distract from, the learning experience. Focus on synchronous and asynchronous engagement strategies.",
    wide: true,
    dark: false,
  },
  {
    icon: "groups",
    title: "Inclusive Classrooms",
    body: "Designing curricula that respect neurodiversity and varied cultural backgrounds to ensure every student thrives.",
    wide: false,
    dark: false,
  },
  {
    icon: "leaderboard",
    title: "Leadership",
    body: "Empowering educators to lead departments, drive institutional change, and mentor the next generation of staff.",
    wide: false,
    dark: false,
  },
];

const modules = [
  {
    tag: "Summer 2024",
    title: "Cognitive Load & Curriculum Design",
    body: "Analyse how instructional materials impact working memory and learn techniques to optimise knowledge retention through visual and structural clarity.",
    meta: "6 Sessions",
  },
  {
    tag: "Self-Paced",
    title: "Empathetic Assessment Strategies",
    body: "Moving beyond standardised testing to authentic assessments that reflect true student mastery and foster a growth mindset.",
    meta: "Online Only",
  },
  {
    tag: "Workshop",
    title: "AI in the Humanities Classroom",
    body: "A critical exploration of Large Language Models in writing-intensive courses. Develop ethical frameworks for student–AI collaboration.",
    meta: "4 Sessions",
  },
  {
    tag: "Ongoing",
    title: "The Architectural Classroom",
    body: "How physical and digital space design influences behaviour, collaboration, and individual focus in high-school environments.",
    meta: "2 Sessions",
  },
];

const certTracks = [
  {
    icon: "verified",
    title: "Master Practitioner in Pedagogy",
    body: "A 12-month rigorous track focusing on comprehensive curriculum design and institutional leadership.",
  },
  {
    icon: "computer",
    title: "Digital Learning Specialist",
    body: "Focused on the technical and pedagogical integration of virtual learning environments.",
  },
  {
    icon: "diversity_3",
    title: "Inclusion & Belonging Coordinator",
    body: "Developing strategies for systemic equity within school communities and diverse student bodies.",
  },
];

const resources = [
  { icon: "description", label: "Lesson Templates" },
  { icon: "video_library", label: "Classroom VODs" },
  { icon: "article", label: "Research Papers" },
  { icon: "forum", label: "Educator Forum" },
];

export default function TeacherTrainingPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative h-[480px] w-full overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp2IMTEUSEQr12Q6zfTc6w326M-lKdWaih_KmHXbAOXfxfHOHaKgYXMDdhxtW7lhk5GToVha4wt_3djgxFGLAXPWheA_KOTPw9cbKg7K4EylKt79irW-elq_OfdrcnIW4rXOQCnRQXG3_MP3vL8hNYdAlMMJzxDq4d5cckeMOeryQuBGHK_SQvTHitpKpsl3rrhJDPMKMaW0PtxEPKphZVK3aJ1z5hrnKLXJ44ZeiYw6QuwP8fk2sufQZ4GnH_nJnqAlanAVF858"
            alt="Teacher Training — educators in session"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Left-to-right gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10 max-w-2xl text-on-primary">
              <span className="inline-block bg-secondary text-on-secondary font-montserrat text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1 mb-6 rounded-sm">
                Educate the Educators
              </span>
              <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
                Mastering{" "}
                <span className="font-[--font-cormorant] font-normal italic">
                  Modern Pedagogy
                </span>
              </h1>
              <p className="font-inter text-on-primary/85 text-base md:text-lg leading-relaxed max-w-xl">
                Advancing the art of instruction through intellectual clarity and rigorous professional development. Join a cohort of visionary educators shaping the future of learning.
              </p>
            </div>
          </div>
        </section>

        {/* ── Foundational Pillars Bento ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20" data-gsap="fade-up">
          <div className="mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary">
              Foundational Pillars
            </h2>
            <p className="font-inter text-on-surface-variant mt-2 text-sm">
              Cultivating expertise in the critical dimensions of contemporary education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[260px]">

            {/* Digital Pedagogy — 8-col */}
            <div className="md:col-span-8 bg-white border border-surface-container-high rounded-2xl p-8 flex flex-col justify-between group hover:border-primary transition-colors duration-300">
              <div>
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">
                    devices
                  </span>
                </div>
                <h3 className="font-montserrat text-xl font-bold text-primary mb-3">
                  Digital Pedagogy
                </h3>
                <p className="font-inter text-on-surface-variant text-sm leading-relaxed max-w-xl">
                  Seamlessly integrating technology into the classroom to enhance, rather than distract from, the learning experience. Focus on synchronous and asynchronous engagement strategies.
                </p>
              </div>
              <Link href="/contact" className="flex items-center gap-2 text-primary font-montserrat text-xs font-bold uppercase tracking-[0.15em] mt-4 hover:gap-3 transition-all duration-300">
                Explore Curriculum
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Inclusive Classrooms — 4-col */}
            <div className="md:col-span-4 bg-surface border border-surface-container-high rounded-2xl p-8 flex flex-col group hover:bg-white transition-colors duration-300">
              <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">
                  groups
                </span>
              </div>
              <h3 className="font-montserrat text-lg font-bold text-primary mb-3">
                Inclusive Classrooms
              </h3>
              <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                Designing curricula that respect neurodiversity and varied cultural backgrounds to ensure every student thrives.
              </p>
            </div>

            {/* Leadership — 4-col */}
            <div className="md:col-span-4 bg-surface border border-surface-container-high rounded-2xl p-8 flex flex-col group hover:bg-white transition-colors duration-300">
              <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-[28px] transition-transform duration-300 group-hover:scale-110">
                  leaderboard
                </span>
              </div>
              <h3 className="font-montserrat text-lg font-bold text-primary mb-3">
                Leadership
              </h3>
              <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                Empowering educators to lead departments, drive institutional change, and mentor the next generation of staff.
              </p>
            </div>

            {/* Evidence-Based Research — 8-col, dark */}
            <div className="md:col-span-8 bg-primary rounded-2xl p-8 flex items-center gap-12">
              <div className="flex-1">
                <h3 className="font-montserrat text-xl font-bold text-on-primary mb-4">
                  Evidence-Based Research
                </h3>
                <p className="font-inter text-on-primary/75 text-sm leading-relaxed mb-6">
                  All our modules are backed by the latest cognitive science and peer-reviewed educational research, ensuring your methods are as effective as they are inspiring.
                </p>
                <AnimatedButton href="/contact" variant="outline-light" size="md">
                  View Whitepapers
                </AnimatedButton>
              </div>
              <div className="hidden lg:flex items-center justify-center opacity-10 flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary text-[96px]">
                  science
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ── Workshop Modules ── */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-gsap="fade-up">
              <div>
                <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary">
                  Workshop Modules
                </h2>
                <p className="font-inter text-on-surface-variant text-sm mt-2">
                  Immersive, cohort-based sessions led by industry experts.
                </p>
              </div>
            </div>

            {/* Scrollable strip */}
            <div className="flex gap-5 overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {modules.map((m) => (
                <div
                  key={m.title}
                  className="min-w-[300px] bg-white border border-surface-container-high rounded-2xl p-6 flex flex-col justify-between h-[380px] flex-shrink-0 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <span className="font-montserrat text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4 block">
                      {m.tag}
                    </span>
                    <h4 className="font-montserrat text-lg font-bold text-primary mb-4 leading-snug">
                      {m.title}
                    </h4>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                      {m.body}
                    </p>
                  </div>
                  <div className="pt-5 border-t border-surface-container-high flex justify-between items-center">
                    <span className="font-montserrat text-xs font-bold text-primary">
                      {m.meta}
                    </span>
                    <Link
                      href="/contact"
                      className="font-montserrat text-xs font-bold text-secondary uppercase tracking-[0.12em] hover:underline transition-all"
                    >
                      Enrol Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certification Tracks & Resource Library ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16" data-gsap="fade-up">

          {/* Cert Tracks */}
          <div>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary mb-10">
              Certification Tracks
            </h2>
            <ul className="space-y-0">
              {certTracks.map((c, i) => (
                <li
                  key={c.title}
                  className={`flex gap-5 items-start py-7 ${i < certTracks.length - 1 ? "border-b border-surface-container-high" : ""}`}
                >
                  <div className="p-3 bg-secondary/10 text-secondary rounded-xl flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">{c.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-montserrat text-base font-bold text-primary mb-1">
                      {c.title}
                    </h5>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Library */}
          <div className="bg-surface rounded-2xl border border-surface-container-high p-8">
            <h2 className="font-montserrat text-2xl font-bold text-primary mb-4">
              Resource Library Access
            </h2>
            <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-8">
              All Teacher Training participants receive lifetime access to our curated Bodhi Library, containing over 5,000 scholarly articles and templates.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {resources.map((r) => (
                <div
                  key={r.label}
                  className="bg-white border border-surface-container-high rounded-xl p-4 flex flex-col gap-2"
                >
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    {r.icon}
                  </span>
                  <span className="font-montserrat text-xs font-bold text-primary">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>

            <AnimatedButton href="/contact" variant="primary" size="md" className="w-full">
              Request Library Key
            </AnimatedButton>
          </div>

        </section>

        {/* ── Back CTA ── */}
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
