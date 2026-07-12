import Image from "next/image";

const focusAreas = [
  {
    span: "md:col-span-6",
    icon: "translate",
    title: "English Mastery",
    desc: "Deep immersion into global communication standards. Master the global language of business and academia with our immersive curriculum.",
    label: "LEARN MORE",
    image: null,
    dark: false,
  },
  {
    span: "md:col-span-6",
    icon: "forum",
    title: "Dynamic Communication",
    desc: "Negotiation and social presence for professional environments. Effective dialogue and professional presence for complex social and corporate environments.",
    label: "LEARN MORE",
    image: null,
    dark: false,
  },
];

const softSkillsImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXHr465AHIOS6xE1g-I6vYB5qXom40Db7ipoi6t5MuAgEyOxWUP3nOXwU5l7h3I59Ex3aTOh9VTRcUkcUsssg81bHjIApgJq-wRFGTE5FTE8Hj170KWJDzrC6BG7V8SO4QnzR06ieruVLBtS6_9LGss7XNWr2c72Y_OOjgkC9X-mq0WItqeFJ3fkWlH_mYqOiwYdpExrGZvFjJ4crX-A01HG6nl7O3U2sdv0UQL7SpBDYB_cLsevGMWI2xiyDDeayi3FVrJg91Dg";

export default function CoreFocus() {
  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" data-gsap="fade-up">
          <h2 className="font-montserrat font-semibold text-3xl text-primary mb-3">
            Core Focus Areas
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" data-gsap="line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6" data-gsap="stagger">
          {/* English Mastery */}
          <div
            className="md:col-span-6 bg-surface-container-low rounded-xl p-12 flex flex-col justify-between hover:bg-surface-container transition-all"
            style={{ borderRadius: "0.5rem 3rem" }}
          >
            <div>
              <span className="material-symbols-outlined text-secondary text-[40px] mb-6 block">
                translate
              </span>
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-3">
                English Mastery
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Deep immersion into global communication standards. Master the
                global language of business and academia with our immersive
                curriculum.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-secondary font-semibold text-sm flex items-center gap-1 hover:underline uppercase tracking-wider"
              >
                LEARN MORE{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Dynamic Communication */}
          <div
            className="md:col-span-6 bg-surface-container-low rounded-xl p-12 flex flex-col justify-between hover:bg-surface-container transition-all"
            style={{ borderRadius: "0.5rem 3rem" }}
          >
            <div>
              <span className="material-symbols-outlined text-secondary text-[40px] mb-6 block">
                forum
              </span>
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-3">
                Dynamic Communication
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Negotiation and social presence for professional environments.
                Effective dialogue and professional presence for complex social
                and corporate environments.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-secondary font-semibold text-sm flex items-center gap-1 hover:underline uppercase tracking-wider"
              >
                LEARN MORE{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          {/* Soft Skills — wide card with image */}
          <div
            className="md:col-span-8 bg-surface-container-low rounded-xl p-12 grid md:grid-cols-2 gap-12 hover:bg-surface-container transition-all"
            style={{ borderRadius: "0.5rem 3rem" }}
          >
            <div className="flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-[40px] mb-6 block">
                  psychology
                </span>
                <h3 className="font-montserrat font-semibold text-2xl text-primary mb-3">
                  Soft Skills &amp; Employability
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Leadership and critical thinking designed for impact. Critical
                  thinking, leadership, and professional etiquette designed for
                  immediate job market impact.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-secondary font-semibold text-sm flex items-center gap-1 hover:underline uppercase tracking-wider"
                >
                  LEARN MORE{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div
              className="hidden md:block rounded-xl overflow-hidden h-full relative"
              style={{ borderRadius: "0.5rem 3rem" }}
            >
              <Image
                src={softSkillsImage}
                alt="Soft Skills Training"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0px, 25vw"
              />
            </div>
          </div>

          {/* Teacher Education — dark card */}
          <div
            className="md:col-span-4 bg-primary text-white rounded-xl p-12 flex flex-col justify-between hover:shadow-xl transition-all"
            style={{ borderRadius: "0.5rem 3rem" }}
          >
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-[40px] mb-6 block">
                school
              </span>
              <h3 className="font-montserrat font-semibold text-2xl mb-3 text-white">
                Teacher Education
              </h3>
              <p className="text-primary-fixed leading-relaxed">
                Pedagogical excellence for educators aiming to transform the
                classroom experience.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-secondary-fixed font-semibold text-sm flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
              >
                START TEACHING{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
