"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
];

const programs = [
  { icon: "school", title: "School Coaching", sub: "K-12 Excellence framework", href: "/programs/school-coaching" },
  { icon: "psychology", title: "Teacher Training", sub: "Professional educator workshops", href: "/programs/teacher-training" },
  { icon: "corporate_fare", title: "Corporate Training", sub: "Strategic business communication", href: "/programs/corporate-training" },
  { icon: "handshake", title: "School Partnerships", sub: "Curriculum integration models", href: "/programs/school-partnerships" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nav = navRef.current;
    if (!nav) return;

    // ── Always floating — subtle tighten on scroll ───────────
    gsap.set(nav, {
      borderRadius: "16px",
      paddingTop: "16px",
      paddingBottom: "16px",
      backgroundColor: "rgba(255,255,255,0.75)",
      boxShadow: "0 4px 24px rgba(12,59,32,0.08)",
    });

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top-=64",
      onEnter: () => {
        gsap.to(nav, {
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 8px 40px rgba(12,59,32,0.14)",
          duration: 0.5,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(nav, {
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "rgba(255,255,255,0.75)",
          boxShadow: "0 4px 24px rgba(12,59,32,0.08)",
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative group font-[--font-montserrat-var] text-sm tracking-wider uppercase transition-colors duration-300 ${
          isActive ? "text-primary font-bold" : "text-primary font-medium hover:text-primary/70"
        }`}
      >
        {label}
        <span
          className={`absolute -bottom-1 left-0 h-[1px] bg-secondary transition-all duration-500 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    /* Wrapper: GSAP owns left / width / top — SSR inline style matches initial GSAP state */
    <div
      ref={wrapperRef}
      className="fixed z-50"
      style={{ left: "50%", transform: "translateX(-50%)", width: "80%", top: "16px" }}
    >
      <nav
        ref={navRef}
        className="backdrop-blur-2xl border border-white/30 overflow-visible"
        style={{
          borderRadius: "16px",
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "rgba(255,255,255,0.75)",
          boxShadow: "0 4px 24px rgba(12,59,32,0.08)",
        }}
      >
        <div className="flex justify-between items-center px-5 md:px-8 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="BODHI LEARNING" width={38} height={38} priority />
            <span className="font-[--font-cormorant] text-xl md:text-2xl font-bold text-primary tracking-[0.12em] uppercase">
              BODHI LEARNING
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <NavLink key={href} label={label} href={href} />
            ))}

            {/* Programs Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-primary font-[--font-montserrat-var] text-sm tracking-wider uppercase font-medium group-hover:text-primary/70 transition-colors duration-300">
                Programs
                <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">
                  expand_more
                </span>
              </button>
              <div className="absolute top-[calc(100%+1.2rem)] -left-12 w-72 bg-white/98 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_20px_50px_rgba(12,59,32,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-400 z-50 overflow-hidden">
                <div className="p-3 grid gap-1">
                  {programs.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center gap-4 px-4 py-3.5 text-sm text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-primary group-hover/item:text-secondary transition-colors text-[13px]">
                          {item.title}
                        </span>
                        <span className="text-[11px] opacity-60">{item.sub}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink label="Contact" href="/contact" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/20 mt-3">
            <div className="px-5 py-4 flex flex-col gap-1">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`font-[--font-montserrat-var] text-sm tracking-wider uppercase py-3 px-2 border-b border-surface-container-high transition-colors ${
                    pathname === href ? "text-secondary font-bold" : "text-primary font-medium"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
