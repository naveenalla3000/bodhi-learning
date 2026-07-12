"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { num: 12000, suffix: "+", label: "Learners Transformed", accent: false },
  { num: 98, suffix: "%", label: "Student Satisfaction", accent: true },
  { num: 200, suffix: "+", label: "Institutional Partners", accent: false },
  { num: 50, suffix: "+", label: "Expert Mentors", accent: true },
];

export default function ImpactNumbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-block",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 1, stagger: 0.18, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      stats.forEach((stat, i) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.num,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          onUpdate() {
            const el = counterRefs.current[i];
            if (el) {
              const v = Math.round(obj.val);
              el.textContent = (v >= 1000 ? v.toLocaleString() : String(v)) + stat.suffix;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-primary text-on-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stat-block text-center flex flex-col gap-1 ${
                i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <span
                className={`text-3xl md:text-5xl font-bold font-montserrat ${
                  s.accent ? "text-secondary" : "text-on-primary"
                }`}
              >
                <span ref={(el) => { counterRefs.current[i] = el; }}>
                  0{s.suffix}
                </span>
              </span>
              <span className="text-xs uppercase tracking-widest text-on-primary/60 font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
