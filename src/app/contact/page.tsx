import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | BODHI LEARNING",
  description:
    "Connect with BODHI LEARNING's academic consultants. Reach out for institutional partnerships, course enquiries, or professional development support.",
};

const faqs = [
  {
    q: "How do institutional partnerships function?",
    a: "We collaborate with universities and corporate entities to integrate our proprietary mastery-based learning frameworks into existing curricula. Each partnership is managed by a dedicated academic consultant to ensure bespoke alignment with organisational goals.",
  },
  {
    q: "Are teacher training programs certified?",
    a: "Yes, all BODHI LEARNING pedagogical training modules are globally recognised and come with institutional accreditation certificates upon successful completion of the mastery assessment phase.",
  },
  {
    q: "Do you offer on-site consulting?",
    a: "While our core delivery is digital-first, we provide intensive on-site strategic workshops for institutional partners at the Enterprise level. Contact our support team to discuss logistics for your region.",
  },
  {
    q: "What is the typical duration for organisational transformation?",
    a: "Strategic transformation timelines vary by institutional scale, typically ranging from 3 to 12 months for full integration of the Bodhi Method.",
  },
  {
    q: "Can we customise individual learning pathways?",
    a: "Absolutely. Our academic architects work closely with your leadership to tailor content modules and assessment criteria to your specific institutional requirements.",
  },
  {
    q: "How do you measure student learning outcomes?",
    a: "We utilise proprietary mastery-based analytics that track cognitive retention, practical application, and performance metrics in real-time, providing deep insights into learner progress.",
  },
];

const contactCards = [
  {
    icon: "location_on",
    title: "Headquarters",
    lines: ["42 Knowledge Park, Koramangala", "Bengaluru, Karnataka 560034"],
  },
  {
    icon: "call",
    title: "Advisory Hotline",
    lines: ["+91 98765 43210"],
    sub: "Mon–Sat, 9:00 AM – 6:00 PM IST",
  },
  {
    icon: "mail",
    title: "Institutional Support",
    lines: ["hello@bodhilearning.com"],
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="py-24 text-center px-6" data-gsap="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <span className="font-montserrat text-secondary font-semibold tracking-[0.3em] uppercase text-xs">
              Get in Touch
            </span>
            <div className="w-12 h-px bg-secondary" />
          </div>
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-primary tracking-tight leading-tight mb-6">
            Connect with <span className="italic font-medium">BODHI</span>
          </h1>
          <p className="font-inter text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
            Begin your journey with our expert mentors and academic consultants.
          </p>
        </section>

        {/* ── Bento Grid ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Form — 7 cols */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-sm p-10" data-gsap="slide-left">
              <h2 className="font-montserrat text-3xl font-bold text-primary tracking-tight mb-8">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact cards — 5 cols */}
            <div className="lg:col-span-5 flex flex-col gap-5" data-gsap="slide-right">
              {contactCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-surface-container-low rounded-2xl border border-surface-container-high p-6 flex items-start gap-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-on-primary text-[20px]">
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-primary text-sm mb-1">
                      {card.title}
                    </h3>
                    {card.lines.map((line) => (
                      <p key={line} className="font-inter text-on-surface-variant text-sm">
                        {line}
                      </p>
                    ))}
                    {card.sub && (
                      <p className="font-inter text-xs text-outline italic mt-1">{card.sub}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Decorative image */}
              <div className="flex-1 rounded-2xl overflow-hidden relative min-h-[180px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ODv5T03PWV0lUqe1cSzEOX8rpgunk0xS3OG_XauyasQ2dCdoN1_Jc-93ElNzL3zTTv4I6O2MAKeLBW5jn79SwTUHMHcdRA1NeSA-5ZBP9KFcy8DbriSpM1wD2lM-Xl_yirrzNm9WUuZdCYLcNzUhU_fgiBO6LAWFBHj2v1hCrJJADjdlsjrAWbEcyHnTOUoN1tI62qsWMv0dlxtiz2m2zCfORbcraDFBFQVIc-qXvz-mw1dK_GQ0PBJRhRhoJH_L0CRBn8O5iA"
                  alt="BODHI LEARNING campus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-primary/25 flex items-end p-5">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                    <span className="font-montserrat text-xs font-bold text-primary tracking-widest uppercase">
                      Accredited Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="relative py-28 bg-primary overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left — heading */}
            <div className="lg:col-span-4 flex flex-col justify-start" data-gsap="slide-left">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-on-primary leading-tight tracking-tight mb-6">
                Frequently Asked<br />Inquiries
              </h2>
              <div className="w-16 h-px bg-secondary mb-4" />
              <p className="font-inter text-on-primary/60 text-sm leading-relaxed">
                Clarifying our commitment to institutional excellence.
              </p>
            </div>

            {/* Right — accordion */}
            <div className="lg:col-span-8 space-y-0" data-gsap="slide-right">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-white/10">
                  <summary className="flex justify-between items-center py-6 px-4 cursor-pointer list-none hover:bg-white/5 rounded-xl transition-colors gap-4">
                    <span className="font-montserrat font-semibold text-on-primary group-hover:text-secondary transition-colors">
                      {faq.q}
                    </span>
                    <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
                      <span className="material-symbols-outlined absolute text-secondary transition-all duration-300 group-open:opacity-0 group-open:rotate-45">
                        add
                      </span>
                      <span className="material-symbols-outlined absolute text-secondary opacity-0 transition-all duration-300 group-open:opacity-100">
                        remove
                      </span>
                    </div>
                  </summary>
                  <div className="font-inter px-4 pb-6 text-on-primary/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
