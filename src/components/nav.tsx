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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const hasMounted = useRef(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Scroll-triggered floating nav
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const nav = navRef.current;
    const wrapper = wrapperRef.current;
    if (!nav || !wrapper) return;

    const floatIn = () => {
      setScrolled(true);
      gsap.to(wrapper, { width: "86%", top: "14px", duration: 0.5, ease: "power3.out" });
      gsap.to(nav, { borderRadius: "16px", paddingTop: "12px", paddingBottom: "12px", backgroundColor: "rgba(255,255,255,0.92)", boxShadow: "0 8px 40px rgba(12,59,32,0.14)", duration: 0.5, ease: "power3.out" });
    };
    const floatOut = () => {
      setScrolled(false);
      gsap.to(wrapper, { width: "100%", top: "0px", duration: 0.5, ease: "power3.out" });
      gsap.to(nav, { borderRadius: "0px", paddingTop: "22px", paddingBottom: "22px", backgroundColor: "rgba(255,255,255,0)", boxShadow: "none", duration: 0.5, ease: "power3.out" });
    };

    if (window.scrollY > 80) {
      setScrolled(true);
      gsap.set(wrapper, { width: "86%", top: "14px" });
      gsap.set(nav, { borderRadius: "16px", paddingTop: "12px", paddingBottom: "12px", backgroundColor: "rgba(255,255,255,0.92)", boxShadow: "0 8px 40px rgba(12,59,32,0.14)" });
    } else {
      gsap.set(wrapper, { width: "100%", top: "0px" });
      gsap.set(nav, { borderRadius: "0px", paddingTop: "22px", paddingBottom: "22px", backgroundColor: "rgba(255,255,255,0)", boxShadow: "none" });
    }

    ScrollTrigger.create({ trigger: document.documentElement, start: "top top-=80", onEnter: floatIn, onLeaveBack: floatOut });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // GSAP sidebar — circular clip-path reveal from top-left corner
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const backdrop = backdropRef.current;
    if (!sidebar || !backdrop) return;

    // First render — hide silently
    if (!hasMounted.current) {
      hasMounted.current = true;
      gsap.set(sidebar, { clipPath: "circle(0% at 100% 0%)" });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });
      return;
    }

    tlRef.current?.kill();

    if (mobileOpen) {
      // Reset inner elements
      gsap.set(sidebar.querySelectorAll(".s-header"), { opacity: 0, y: -12 });
      gsap.set(sidebar.querySelectorAll(".s-nav-item"), { opacity: 0, y: 14 });

      tlRef.current = gsap.timeline()
        // Backdrop fades in
        .to(backdrop, { opacity: 1, pointerEvents: "auto", duration: 0.3, ease: "power2.out" })
        // Circle expands from top-left corner outward
        .to(sidebar, { clipPath: "circle(150% at 100% 0%)", duration: 0.7, ease: "power3.out" }, "<")
        // Header drops in
        .to(sidebar.querySelectorAll(".s-header"), { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, "-=0.25")
        // Nav items stagger up
        .to(sidebar.querySelectorAll(".s-nav-item"), { opacity: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "power2.out" }, "-=0.18");

    } else {
      gsap.set(backdrop, { pointerEvents: "none" });

      tlRef.current = gsap.timeline()
        // Items fade out
        .to(sidebar.querySelectorAll(".s-nav-item"), { opacity: 0, y: 8, duration: 0.15, stagger: 0.03, ease: "power2.in" })
        .to(sidebar.querySelectorAll(".s-header"), { opacity: 0, duration: 0.12, ease: "power2.in" }, "<0.04")
        // Circle collapses back to top-left
        .to(sidebar, { clipPath: "circle(0% at 100% 0%)", duration: 0.55, ease: "power3.in" }, "-=0.05")
        .to(backdrop, { opacity: 0, duration: 0.28, ease: "power2.in" }, "<0.08");
    }
  }, [mobileOpen]);

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={`relative group font-montserrat text-sm tracking-wider uppercase transition-colors duration-300 ${isActive ? "text-primary font-bold" : "text-primary font-medium hover:text-primary/70"}`}>
        {label}
        <span className={`absolute -bottom-1 left-0 h-[1px] bg-secondary transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
      </Link>
    );
  };

  return (
    <>
      {/* Nav wrapper */}
      <div ref={wrapperRef} className="fixed z-50" style={{ left: "50%", transform: "translateX(-50%)", width: "100%", top: "0px" }}>
        <nav
          ref={navRef}
          className={`overflow-visible transition-[border-color,backdrop-filter] duration-500 ${scrolled ? "backdrop-blur-2xl border border-white/30" : "border border-transparent"}`}
          style={{ borderRadius: "0px", paddingTop: "22px", paddingBottom: "22px", backgroundColor: "rgba(255,255,255,0)" }}
        >
          <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="BODHI LEARNING" width={36} height={36} priority />
              <span className="font-[--font-cormorant] text-base md:text-2xl font-bold text-primary tracking-[0.08em] md:tracking-[0.12em] uppercase">
                BODHI LEARNING
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => <NavLink key={href} label={label} href={href} />)}
              <div className="group relative">
                <button className="flex items-center gap-1 text-primary font-montserrat text-sm tracking-wider uppercase font-medium group-hover:text-primary/70 transition-colors duration-300">
                  Programs
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
                </button>
                <div className="absolute top-[calc(100%+1.2rem)] -left-12 w-72 bg-white/98 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_20px_50px_rgba(12,59,32,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-3 grid gap-1">
                    {programs.map((item) => (
                      <Link key={item.href} href={item.href} className="group/item flex items-center gap-4 px-4 py-3.5 text-sm text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all duration-300">
                        <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 flex-shrink-0">
                          <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-primary group-hover/item:text-secondary transition-colors text-[13px]">{item.title}</span>
                          <span className="text-[11px] opacity-60">{item.sub}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <NavLink label="Contact" href="/contact" />
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-primary hover:bg-primary/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Backdrop — GSAP controls opacity & pointerEvents */}
      <div
        ref={backdropRef}
        className="fixed inset-0 z-[59] md:hidden bg-black/40 backdrop-blur-sm"
        style={{ opacity: 0, pointerEvents: "none" }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar — GSAP controls clipPath */}
      <div
        ref={sidebarRef}
        className="fixed inset-0 z-[60] md:hidden w-full h-full bg-white flex flex-col"
      >
        {/* Header */}
        <div className="s-header flex justify-between items-center px-6 pt-6 pb-5 border-b border-gray-100">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="BODHI LEARNING" width={28} height={28} />
            <span className="font-[--font-cormorant] text-[15px] font-bold text-primary tracking-[0.12em] uppercase">
              BODHI LEARNING
            </span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="text-primary/40 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
          {mobileLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`s-nav-item flex items-center justify-between px-4 py-3 rounded-xl font-montserrat text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive ? "bg-primary text-white" : "text-primary hover:bg-gray-50"
                }`}
              >
                {label}
                {isActive && <span className="material-symbols-outlined text-[15px] opacity-70">arrow_forward</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
