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

  // GSAP sidebar open / close
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const backdrop = backdropRef.current;
    if (!sidebar || !backdrop) return;

    // First render — set closed state silently
    if (!hasMounted.current) {
      hasMounted.current = true;
      gsap.set(sidebar, { x: "100%" });
      gsap.set(backdrop, { opacity: 0, pointerEvents: "none" });
      return;
    }

    tlRef.current?.kill();

    if (mobileOpen) {
      gsap.set(sidebar.querySelectorAll(".s-header"), { opacity: 0, x: 20 });
      gsap.set(sidebar.querySelectorAll(".s-nav-item"), { opacity: 0, x: 28 });
      gsap.set(sidebar.querySelectorAll(".s-label"), { opacity: 0, y: 8 });
      gsap.set(sidebar.querySelectorAll(".s-program"), { opacity: 0, x: 16 });
      gsap.set(sidebar.querySelectorAll(".s-footer"), { opacity: 0, y: 12 });

      tlRef.current = gsap.timeline()
        .to(backdrop, { opacity: 1, pointerEvents: "auto", duration: 0.28, ease: "power2.out" })
        .to(sidebar, { x: "0%", duration: 0.45, ease: "power3.out" }, "<0.04")
        .to(sidebar.querySelectorAll(".s-header"), { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }, "-=0.2")
        .to(sidebar.querySelectorAll(".s-nav-item"), { opacity: 1, x: 0, duration: 0.32, stagger: 0.065, ease: "power2.out" }, "-=0.16")
        .to(sidebar.querySelectorAll(".s-label"), { opacity: 1, y: 0, duration: 0.24, ease: "power2.out" }, "-=0.1")
        .to(sidebar.querySelectorAll(".s-program"), { opacity: 1, x: 0, duration: 0.28, stagger: 0.05, ease: "power2.out" }, "-=0.1")
        .to(sidebar.querySelectorAll(".s-footer"), { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }, "-=0.06");

    } else {
      gsap.set(backdrop, { pointerEvents: "none" });

      tlRef.current = gsap.timeline()
        .to(sidebar.querySelectorAll(".s-footer"), { opacity: 0, y: 8, duration: 0.14, ease: "power2.in" })
        .to(sidebar.querySelectorAll(".s-program"), { opacity: 0, x: 12, duration: 0.14, stagger: 0.03, ease: "power2.in" }, "<0.03")
        .to(sidebar.querySelectorAll(".s-nav-item"), { opacity: 0, x: 12, duration: 0.14, stagger: 0.03, ease: "power2.in" }, "<0.04")
        .to(sidebar.querySelectorAll(".s-header"), { opacity: 0, x: 10, duration: 0.12, ease: "power2.in" }, "-=0.04")
        .to(sidebar, { x: "100%", duration: 0.4, ease: "power3.in" }, "-=0.08")
        .to(backdrop, { opacity: 0, duration: 0.26, ease: "power2.in" }, "<0.08");
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

      {/* Sidebar — GSAP controls x transform */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full z-[60] md:hidden w-[88vw] max-w-[360px] flex flex-col shadow-2xl overflow-hidden"
        style={{ transform: "translateX(100%)", backgroundColor: "#FAFAF8" }}
      >
        {/* Decorative background circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none" style={{ backgroundColor: "#0C3B20" }} />
        <div className="absolute bottom-32 -right-10 w-40 h-40 rounded-full opacity-[0.04] pointer-events-none" style={{ backgroundColor: "#944b00" }} />

        {/* Thin amber left-edge accent */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-secondary via-secondary/40 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="s-header relative flex justify-between items-center px-7 pt-7 pb-5">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 group">
            <Image src="/logo.png" alt="BODHI LEARNING" width={28} height={28} />
            <span className="font-[--font-cormorant] text-[15px] font-bold text-primary tracking-[0.12em] uppercase group-hover:opacity-70 transition-opacity">
              BODHI LEARNING
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-primary/50 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Divider line */}
        <div className="mx-6 h-px bg-primary/10" />

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4">
          <nav className="space-y-0.5">
            {mobileLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`s-nav-item group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary/6 text-secondary"
                      : "text-primary hover:bg-primary/4"
                  }`}
                >
                  <span className={`font-montserrat text-sm tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? "font-bold text-secondary" : "font-semibold"
                  }`}>
                    {label}
                  </span>
                  <span className={`material-symbols-outlined text-[16px] transition-all duration-300 ${
                    isActive ? "text-secondary opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}>
                    arrow_forward
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Programs sub-links */}
          <div className="mt-6 pt-5 border-t border-primary/8">
            <p className="s-label font-montserrat text-[9px] font-bold tracking-[0.22em] uppercase text-primary/30 px-4 mb-2">
              Programs
            </p>
            {programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="s-program flex items-center gap-3 px-4 py-2.5 rounded-xl text-primary/60 hover:text-primary hover:bg-primary/4 transition-all duration-200"
              >
                <span className="material-symbols-outlined text-[15px]">{p.icon}</span>
                <span className="font-montserrat text-xs font-medium">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="s-footer px-7 py-6 border-t border-primary/8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-montserrat text-[9px] font-bold tracking-[0.2em] uppercase text-primary/30 mb-1">Contact Us</p>
              <p className="font-inter text-primary/60 text-xs">hello@bodhilearning.com</p>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-1.5 font-montserrat text-[10px] font-bold tracking-widest uppercase text-white bg-primary px-4 py-2.5 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
              Connect
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
