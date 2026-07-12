import Image from "next/image";

const narrativeImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZRlbJ4pe3okSYwqWLQgpNWOaF6MhWzlgzaySK1Ci0psFnAUdxMLx_rQzP_N5ZaqFAsY2OsHROwIt0VF8vb2OHG4V5eqQzdcucGlaXsBLt4u9PEwuTlomgYooDEdo-uxULrKQzKkRnRxonOXhRL_FT434bRhJVyg39HtkdmL3sp7X-2WeCx80cQsKzXybmMNWXUYwyOEYuBrEA4m9mEGJJfP2vlvwF7Q3Zk0OZSARQCZM0VGEmIiZQrOnhcWXJuKgoPgt-eA9KQ";

export default function OurNarrative() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="space-y-8" data-gsap="slide-left">
          <div>
            <h2 className="font-montserrat font-semibold text-3xl text-primary mb-4">
              Our Narrative
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <p className="text-on-surface-variant leading-relaxed">
              Bodhi (Sanskrit: बोधि) represents the understanding possessed by a
              Buddha regarding the true nature of things. At BODHI LEARNING, we
              translate this philosophy into secular educational rigor. Founded
              by a collective of linguists and pedagogical designers, we sought
              to move beyond rote memorization toward authentic &ldquo;Active
              Mastery.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {[
              {
                icon: "lightbulb",
                title: "Our Mission",
                desc: "To provide a transformative environment where professional communication and pedagogical skills are honed with precision.",
              },
              {
                icon: "visibility",
                title: "Our Vision",
                desc: "To become the world's most trusted partner in employability, recognized for producing articulate, adaptable leaders.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container-high hover:shadow-xl transition-all duration-300 rounded-tr-[64px] rounded-bl-[64px]"
              >
                <div className="bg-primary-container w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-on-primary">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image + floating stat */}
        <div className="relative" data-gsap="slide-right">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={narrativeImg}
              alt="Collaborative workshop space"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-primary text-on-primary p-8 rounded-2xl max-w-xs hidden xl:block">
            <p className="text-4xl font-montserrat font-bold mb-2">98%</p>
            <p className="text-sm opacity-80 uppercase tracking-widest font-bold">
              Employability Rate
            </p>
            <p className="mt-4 text-xs font-light leading-relaxed">
              Our graduates join top-tier global organizations within 6 months
              of completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
