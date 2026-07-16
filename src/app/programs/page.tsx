import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AnimatedButton from "@/components/animated-button";

export const metadata: Metadata = {
  title: "Programs | BODHI LEARNING",
  description:
    "Four specialized programs designed to transform learners, educators, institutions, and professionals through rigorous, Cambridge-certified training.",
};

const programs = [
  {
    track: "Track 01",
    title: "K–12 Excellence",
    sub: "Boards & Beyond",
    body: "A rigorous curriculum built for ambitious students preparing for top-tier higher education. We close the gap between rote learning and genuine intellectual command — blending board-exam mastery with the critical thinking that competitive universities actually want to see.",
    cta: "Explore the Curriculum",
    href: "/programs/school-coaching",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWPAqz3Ycy8W2WxQCu0qt8ntroWPE6YFn485X1z05WbGWfHJM2nhF1cjGXtwxqt35AjZdpTNSkZI-A-l2QYmyl1vZMWhyYRuzaNzcx7TueC_CrYVN5LCJZnCHGOOfhQmWHQStGkpKxtcO7DApXLlaBrauo05DuNolV3if-WQcNB43rbldugtj4gOw3tpH4Rm62P1LimHDO3V_IXySs32frm--ZKQZaBTxdwJE1hFgTrrrTYTv-L1ttPUiW2VVGuQIkYHt0qIe3PY8",
    alt: "Student studying at desk",
    reverse: false,
  },
  {
    track: "Track 02",
    title: "Teacher Training",
    sub: "Educate the Educators",
    body: "TKT and CIDTT-certified programmes that give practicing teachers what their degrees never did — behaviour remodelling, 21st-century pedagogy, and English taught as a living language. Because the quality of a classroom is a direct reflection of its teacher.",
    cta: "Professional Development",
    href: "/programs/teacher-training",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuALb38w7Cd9N2cIDz9dweaG1Jx5yzRlpznf3YmPI-V1uY77nTM5PwiBHHW7voeE_3DapaQGdI7eGUy7jmGbMuD6wA2TdBFchL_8WY34SFOk7G_dC1mS6ipF8_tlDSBx9VbMKds2Mj5zz3q-5yF4m2jQM1XLNoq1Ja67WtA9gIgDE6jj935Vszwm3RjjNq2QYBm8Gt_DfMHCedh40Sko65YgUIqVKx13VzZqaH3nTrhilY5z-t6WtleqJ7wbb9EXsmmkyzVcUyAZomI",
    alt: "Educator leading a training session",
    reverse: true,
  },
];

const gridPrograms = [
  {
    track: "Track 03",
    title: "Corporate Skills",
    sub: "Leadership & Growth",
    body: "Communication, negotiation, and leadership training that shows up in your next quarter's numbers. We integrate AI-assisted workflows so professionals move faster without communicating worse.",
    cta: "Explore Corporate Tracks",
    href: "/programs/corporate-training",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzNN2RxI12SIexMiwiPNC6MNF2Simjlj01u14BhrD1RKQmJOVAfwVK03WjDnZzmmYbCho9ewC75BdKoH9sC1XIcgY5UU7uTfMK6SJXKBChY3cUj7ZKENHlacKCHSj2a06hRov_NOfn7o_vEhD7cWU90qP8O_6zKaGqzHjGWfo1XlkmRNN4PFK_4xw9XV33b-JsnlVQsUeVvrvrJH6agTbnn00ccjebKH87rF7TLqzRa7xkuXbMWhQAyeU57lfKZC5h2tLnegMS9jA",
    alt: "Executive leadership training in a boardroom",
  },
  {
    track: "Track 04",
    title: "School Partners",
    sub: "Institutional Growth",
    body: "Comprehensive consulting and curriculum integration for institutions that want to raise the bar — not just for rankings, but for every student who walks through the door.",
    cta: "View Partnership Models",
    href: "/programs/school-partnerships",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABj5-du-QDTIU-J5MtD5eCv2vXSGJi0oplk814m5wNkvwMIzKn912PflWMUZnnq4olTGzsnT95r-MKTYdXb2JqHiHgCKUZcbf0tK-xDuzKD2Wf4fCd-WfPnui7bfqB5iKSwqm8fTT6FlxmYnbJ7v_0YV1dT4mr3-_PuW5toIYgniJ_8Xt9GCD-RtJsqvEfRbBN8glloOy9DciLl9NUdgN-Sv2Npr-0tHGEsCWjtc19-cfWiizR3-BK73DEldYGH2io3_AT5fQ5kok",
    alt: "Modern school campus",
  },
];

function ArrowLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 group mt-10"
    >
      <span className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-primary border-b border-primary/20 group-hover:border-primary pb-1 transition-all duration-300">
        {label}
      </span>
      <span className="material-symbols-outlined text-primary text-[20px] transition-transform duration-300 group-hover:translate-x-1.5">
        arrow_right_alt
      </span>
    </Link>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 overflow-x-hidden">

        {/* ── Hero ── */}
        <section
          className="relative pt-20 pb-32 overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(12,59,32,0.06) 0%, transparent 70%), #fff",
          }}
          data-gsap="fade-up"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-secondary" />
                <span className="font-montserrat text-secondary font-semibold tracking-[0.3em] uppercase text-xs">
                  Our Programs
                </span>
                <div className="w-12 h-px bg-secondary" />
              </div>

              {/* Headline */}
              <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-primary tracking-tight leading-[1.08] mb-8">
                Four Programmes.{" "}
                <span className="font-[--font-cormorant] font-normal italic">
                  One Commitment to Excellence.
                </span>
              </h1>

              {/* Sub */}
              <p className="font-inter text-on-surface-variant text-lg max-w-2xl leading-relaxed mb-12">
                At Bodhi Learning, every track is built on the same foundation — Cambridge-certified rigour, AI as a tool (never a shortcut), and a human expert in the room. Four pathways. One standard.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: "verified", label: "Cambridge Accredited" },
                  { icon: "groups", label: "Expert-Led Sessions" },
                  { icon: "psychology", label: "AI-Augmented Learning" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        {icon}
                      </span>
                    </div>
                    <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-primary/5 hidden lg:block pointer-events-none" />
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-primary/8 hidden lg:block pointer-events-none" />
          </div>
        </section>

        {/* ── Alternating Programs ── */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col gap-32">

              {programs.map((p) => (
                <div
                  key={p.track}
                  className={`flex flex-col lg:flex-row gap-16 items-center ${p.reverse ? "lg:flex-row-reverse" : ""}`}
                  data-gsap="fade-up"
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden rounded-2xl bg-surface-container-low group">
                    <Image
                      src={p.img}
                      alt={p.alt}
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/5" />
                  </div>

                  {/* Text */}
                  <div className={`w-full lg:w-1/2 ${p.reverse ? "lg:pl-8" : "lg:pr-8"}`}>
                    <span className="font-montserrat text-[11px] font-semibold text-primary/40 uppercase tracking-[0.3em] block mb-4">
                      {p.track}
                    </span>
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary leading-tight mb-2">
                      {p.title}
                    </h2>
                    <p className="font-[--font-cormorant] text-xl text-secondary font-semibold italic mb-6">
                      {p.sub}
                    </p>
                    <p className="font-inter text-on-surface-variant text-base leading-relaxed">
                      {p.body}
                    </p>
                    <ArrowLink label={p.cta} href={p.href} />
                  </div>
                </div>
              ))}

              {/* 2-col grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-gsap="stagger">
                {gridPrograms.map((p) => (
                  <div
                    key={p.track}
                    className="bg-surface border border-surface-container-high rounded-2xl p-10 flex flex-col group hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(12,59,32,0.10)] transition-all duration-500"
                  >
                    {/* Card image */}
                    <div className="mb-8 overflow-hidden rounded-xl aspect-video relative">
                      <Image
                        src={p.img}
                        alt={p.alt}
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <span className="font-montserrat text-[11px] font-semibold text-primary/40 uppercase tracking-[0.3em] block mb-3">
                      {p.track}
                    </span>
                    <h3 className="font-montserrat text-2xl font-bold text-primary mb-2">
                      {p.title}
                    </h3>
                    <p className="font-[--font-cormorant] text-lg text-secondary font-semibold italic mb-5">
                      {p.sub}
                    </p>
                    <p className="font-inter text-on-surface-variant text-sm leading-relaxed flex-1">
                      {p.body}
                    </p>
                    <ArrowLink label={p.cta} href={p.href} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="py-40 bg-surface-container-lowest" data-gsap="fade-up">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="material-symbols-outlined text-primary/15 text-7xl block mb-10">
              format_quote
            </span>
            <blockquote className="font-[--font-cormorant] text-3xl md:text-4xl font-semibold italic text-primary leading-[1.5] mb-12">
              "Clarity of thought precedes clarity of action. Every programme at Bodhi Learning is designed to build not just knowledge — but the intellectual confidence to act on it."
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-px bg-primary/20" />
              <div>
                <p className="font-montserrat text-xs font-bold text-primary tracking-[0.2em] uppercase">
                  Lavanya Rao
                </p>
                <p className="font-inter text-sm text-secondary uppercase tracking-widest mt-1">
                  Founder & Director, Bodhi Learning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 bg-primary" data-gsap="fade-up">
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-on-primary leading-tight mb-4">
                Not sure which programme is right for you?
              </h2>
              <p className="font-inter text-on-primary/70 text-base leading-relaxed">
                Book a free consultation and we'll map your goals to the track that fits.
              </p>
            </div>
            <AnimatedButton href="/contact" variant="outline-light" size="md">
              Book a Consultation
            </AnimatedButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
