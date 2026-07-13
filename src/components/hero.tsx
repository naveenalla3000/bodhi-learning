"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedButton from "@/components/animated-button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 24, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9 }
      )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 72, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.07 },
          "-=0.4"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 36, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 28, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.16 },
          "-=0.6"
        );

      // Organic floating blobs
      gsap.to(".hero-blob-1", {
        y: -40, x: 24, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1,
      });
      gsap.to(".hero-blob-2", {
        y: 32, x: -18, duration: 9, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5,
      });
      gsap.to(".hero-blob-3", {
        y: -20, x: -30, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const mainWords = ["Stop", "Preparing."];
  const accentWords = ["Start", "Winning."];

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-44 pb-48">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="hero-badge inline-block px-5 py-1.5 rounded-full bg-surface-container-high text-primary font-semibold text-xs mb-10 uppercase tracking-widest">
          Awakening Human Potential
        </span>

        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-primary max-w-4xl mx-auto mb-8 leading-tight tracking-tight">
          {mainWords.map((word) => (
            <span key={word} className="hero-word inline-block mr-[0.28em] last:mr-0">
              {word}
            </span>
          ))}{" "}
          {accentWords.map((word) => (
            <span key={word} className="hero-word inline-block text-secondary italic mr-[0.28em] last:mr-0">
              {word}
            </span>
          ))}
        </h1>

        <p className="hero-sub font-inter text-lg text-on-surface-variant max-w-2xl mx-auto mb-14 leading-relaxed">
          You don&apos;t need another course. You need an edge. Bodhi trains 25,000+ learners and 19,000+ educators to think sharper, speak stronger, and lead louder — starting now.
        </p>

        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <span className="hero-btn">
            <AnimatedButton href="/programs" variant="primary" size="md">
              See What&apos;s Possible
            </AnimatedButton>
          </span>
          <span className="hero-btn">
            <AnimatedButton href="/contact" variant="outline-dark" size="md">
              Talk To Us
            </AnimatedButton>
          </span>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="hero-blob-1 absolute top-1/3 -left-16 opacity-25 pointer-events-none">
        <div className="w-[480px] h-[480px] bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="hero-blob-2 absolute -bottom-16 right-0 opacity-10 pointer-events-none">
        <div className="w-[360px] h-[360px] bg-primary rounded-full blur-2xl" />
      </div>
      <div className="hero-blob-3 absolute top-0 right-1/4 opacity-10 pointer-events-none">
        <div className="w-[200px] h-[200px] bg-secondary rounded-full blur-2xl" />
      </div>
    </section>
  );
}
