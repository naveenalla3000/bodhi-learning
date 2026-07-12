"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── Fade up ──────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 52, filter: "blur(6px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)",
            duration: 1.1, ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // ── Stagger children ─────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((container) => {
        const marked = container.querySelectorAll("[data-gsap-item]");
        const targets = marked.length
          ? Array.from(marked) as HTMLElement[]
          : Array.from(container.children) as HTMLElement[];
        gsap.set(targets, { opacity: 0, y: 64, filter: "blur(4px)" });
        gsap.to(targets, {
          opacity: 1, y: 0, filter: "blur(0px)",
          duration: 1, stagger: 0.18, ease: "power4.out",
          scrollTrigger: { trigger: container, start: "top 82%", once: true },
        });
      });

      // ── Clip-path reveal (bottom-up curtain) ─────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='clip-reveal']").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5, ease: "power4.inOut",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      // ── Decorative line expand ────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='line']").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1, duration: 1.4, ease: "expo.inOut",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }
        );
      });

      // ── Scale in ─────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='scale-in']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.88 },
          {
            opacity: 1, scale: 1,
            duration: 1.3, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // ── Slide from left ───────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='slide-left']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -72, filter: "blur(4px)" },
          {
            opacity: 1, x: 0, filter: "blur(0px)",
            duration: 1.2, ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // ── Slide from right ──────────────────────────────────────
      gsap.utils.toArray<HTMLElement>("[data-gsap='slide-right']").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 72, filter: "blur(4px)" },
          {
            opacity: 1, x: 0, filter: "blur(0px)",
            duration: 1.2, ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
