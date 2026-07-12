"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function inViewport(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    gsap.registerPlugin(ScrollTrigger);

    gsap.set("[data-gsap='fade-up']", { opacity: 0, y: 20 });
    gsap.set("[data-gsap='slide-left']", { opacity: 0, x: -32 });
    gsap.set("[data-gsap='slide-right']", { opacity: 0, x: 32 });
    gsap.set("[data-gsap='scale-in']", { opacity: 0, scale: 0.96 });
    gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((container) => {
      const marked = container.querySelectorAll("[data-gsap-item]");
      const targets = marked.length
        ? Array.from(marked) as HTMLElement[]
        : Array.from(container.children) as HTMLElement[];
      gsap.set(targets, { opacity: 0, y: 20 });
    });

    let ctx: gsap.Context | undefined;
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {

        // ── Fade up ────────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el, i) => {
          const from = { opacity: 0, y: 20 };
          const to = { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" };
          if (inViewport(el)) {
            gsap.fromTo(el, from, { ...to, delay: 0.05 + i * 0.05 });
          } else {
            gsap.fromTo(el, from, { ...to, scrollTrigger: { trigger: el, start: "top 90%", once: true } });
          }
        });

        // ── Stagger children ───────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='stagger']").forEach((container) => {
          const marked = container.querySelectorAll("[data-gsap-item]");
          const targets = marked.length
            ? Array.from(marked) as HTMLElement[]
            : Array.from(container.children) as HTMLElement[];
          const to = { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out" };
          if (inViewport(container as HTMLElement)) {
            gsap.to(targets, { ...to, delay: 0.1 });
          } else {
            gsap.to(targets, { ...to, scrollTrigger: { trigger: container, start: "top 88%", once: true } });
          }
        });

        // ── Clip-path curtain ──────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='clip-reveal']").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power3.inOut",
              scrollTrigger: { trigger: el, start: "top 90%", once: true } }
          );
        });

        // ── Decorative line ────────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='line']").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.8, ease: "power3.inOut",
              scrollTrigger: { trigger: el, start: "top 92%", once: true } }
          );
        });

        // ── Scale in ───────────────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='scale-in']").forEach((el) => {
          const from = { opacity: 0, scale: 0.96 };
          const to = { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" };
          if (inViewport(el)) {
            gsap.fromTo(el, from, { ...to, delay: 0.1 });
          } else {
            gsap.fromTo(el, from, { ...to, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          }
        });

        // ── Slide from left ────────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='slide-left']").forEach((el) => {
          const from = { opacity: 0, x: -32 };
          const to = { opacity: 1, x: 0, duration: 0.65, ease: "power2.out" };
          if (inViewport(el)) {
            gsap.fromTo(el, from, { ...to, delay: 0.1 });
          } else {
            gsap.fromTo(el, from, { ...to, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          }
        });

        // ── Slide from right ───────────────────────────────────
        gsap.utils.toArray<HTMLElement>("[data-gsap='slide-right']").forEach((el) => {
          const from = { opacity: 0, x: 32 };
          const to = { opacity: 1, x: 0, duration: 0.65, ease: "power2.out" };
          if (inViewport(el)) {
            gsap.fromTo(el, from, { ...to, delay: 0.15 });
          } else {
            gsap.fromTo(el, from, { ...to, scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          }
        });

      });

      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
