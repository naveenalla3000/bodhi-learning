import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Book a free consultation, ask about enrollment, or explore partnership opportunities with BODHI LEARNING. We respond within one business day.",
};

const faqs = [
  {
    q: "What are Bodhi Learning's core programs?",
    a: "Four product lines: English Language Enhancement for students, Workforce Development for employability and readiness, Technical Skills training in Java, Python, SQL and more, and Teacher Development covering behaviour, 21st-century pedagogy, and English as a language. Corporate teams get a fifth track built from the same essential-skills foundation.",
  },
  {
    q: "Are your trainers actually certified, or is that just marketing?",
    a: "Genuinely certified — our team holds University of Cambridge credentials ranging from TKT to CIDTT to CELTA. That's the same standard Cambridge uses to certify English teachers worldwide.",
  },
  {
    q: "How is AI used in your programs?",
    a: "As leverage, not a replacement. Students get AI-powered practice — conversation partners, mock interviews, coding assistants. Teachers get AI tools for lesson planning and classroom design. In every case, a Cambridge-certified human trainer reviews the work, corrects what the AI missed, and makes sure the skill is actually yours by the end of it.",
  },
  {
    q: "Will AI replace the mentors and teachers in your programs?",
    a: "No — and it never will on our watch. AI drafts, simulates, and speeds things up. Our certified mentors are the ones who tell you when it's wrong, when it's flat, and when the real work is still yours to do.",
  },
  {
    q: "Do you offer on-site consulting or corporate workshops?",
    a: "Yes, for institutional and Enterprise partners we run intensive on-site workshops covering our core skill tracks plus practical AI-integration sessions for staff. Contact our support team to discuss logistics for your region.",
  },
  {
    q: "Can we customise a learning pathway for our institution or company?",
    a: "Absolutely. Our academic architects work with your leadership to combine our four product lines — language, workforce readiness, technical skills, and teacher/corporate training — with AI-use guidelines tailored to your organisation.",
  },
  {
    q: "How do you measure learning outcomes?",
    a: "We track cognitive retention, practical application, and performance metrics in real time through proprietary mastery-based analytics — and flag over-reliance on AI early, so learners stay in the driver's seat of their own skill-building.",
  },
];

const contactCards = [
  {
    icon: "location_on",
    title: "Headquarters",
    lines: ["H. No 52, ARV AKRITI VIVA, Osman Nagar - Tellapur", "Hyderabad, Telangana 500019"],
  },
  {
    icon: "call",
    title: "Advisory Hotline",
    lines: ["+91 91103 85231"],
    sub: "Mon–Sat, 9:00 AM – 6:00 PM IST",
  },
  {
    icon: "mail",
    title: "Institutional Support",
    lines: ["lavanyarao@bodhilearning.org"],
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

              {/* Map */}
              <div className="flex-1 rounded-2xl overflow-hidden min-h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.184393156084!2d78.28095037539431!3d17.450886383447163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbed291847a6a1%3A0x3fd9ec50d28c49c1!2sAakriti%20Arv%20Viva!5e0!3m2!1sen!2sus!4v1784039437436!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="BODHI LEARNING location"
                />
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
