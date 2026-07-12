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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const nav = navRef.current;
    const wrapper = wrapperRef.current;
    if (!nav || !wrapper) return;

    const floatIn = () => {
      setScrolled(true);
      gsap.to(wrapper, { width: "86%", top: "14px", duration: 0.5, ease: "power3.out" });
      gsap.to(nav, {
        borderRadius: "16px",
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "rgba(255,255,255,0.92)",
        boxShadow: "0 8px 40px rgba(12,59,32,0.14)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const floatOut = () => {
      setScrolled(false);
      gsap.to(wrapper, { width: "100%", top: "0px", duration: 0.5, ease: "power3.out" });
      gsap.to(nav, {
        borderRadius: "0px",
        paddingTop: "22px",
        paddingBottom: "22px",
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "none",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // Set initial state based on current scroll position
    if (window.scrollY > 80) {
      setScrolled(true);
      gsap.set(wrapper, { width: "86%", top: "14px" });
      gsap.set(nav, {
        borderRadius: "16px",
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "rgba(255,255,255,0.92)",
        boxShadow: "0 8px 40px rgba(12,59,32,0.14)",
      });
    } else {
      gsap.set(wrapper, { width: "100%", top: "0px" });
      gsap.set(nav, {
        borderRadius: "0px",
        paddingTop: "22px",
        paddingBottom: "22px",
        backgroundColor: "rgba(255,255,255,0)",
        boxShadow: "none",
      });
    }

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top-=80",
      onEnter: floatIn,
      onLeaveBack: floatOut,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative group font-montserrat text-sm tracking-wider uppercase transition-colors duration-300 ${
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
    <>
      {/* Nav wrapper — GSAP animates width and top */}
      <div
        ref={wrapperRef}
        className="fixed z-50"
        style={{ left: "50%", transform: "translateX(-50%)", width: "100%", top: "0px" }}
      >
        <nav
          ref={navRef}
          className={`overflow-visible transition-[border-color,backdrop-filter] duration-500 ${
            scrolled
              ? "backdrop-blur-2xl border border-white/30"
              : "border border-transparent"
          }`}
          style={{
            borderRadius: "0px",
            paddingTop: "22px",
            paddingBottom: "22px",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        >
          <div className="flex justify-between items-center px-6 md:px-10 max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="BODHI LEARNING" width={36} height={36} priority />
              <span className="font-[--font-cormorant] text-xl md:text-2xl font-bold text-primary tracking-[0.12em] uppercase">
                BODHI LEARNING
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <NavLink key={href} label={label} href={href} />
              ))}

              {/* Programs dropdown */}
              <div className="group relative">
                <button className="flex items-center gap-1 text-primary font-montserrat text-sm tracking-wider uppercase font-medium group-hover:text-primary/70 transition-colors duration-300">
                  Programs
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">
                    expand_more
                  </span>
                </button>
                <div className="absolute top-[calc(100%+1.2rem)] -left-12 w-72 bg-white/98 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-[0_20px_50px_rgba(12,59,32,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                  <div className="p-3 grid gap-1">
                    {programs.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center gap-4 px-4 py-3.5 text-sm text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all duration-300"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 flex-shrink-0">
                          <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
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

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden flex flex-col transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(12,59,32,0.97)", backdropFilter: "blur(16px)" }}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
            <Image src="/logo.png" alt="BODHI LEARNING" width={32} height={32} />
            <span className="font-[--font-cormorant] text-lg font-bold text-white tracking-[0.12em] uppercase">
              BODHI LEARNING
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-1 overflow-y-auto">
          {mobileLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-montserrat font-bold text-3xl py-4 border-b border-white/10 transition-colors ${
                pathname === href ? "text-secondary" : "text-white hover:text-secondary"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Programs quick-links */}
          <div className="mt-8">
            <p className="font-montserrat text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Programs
            </p>
            <div className="grid grid-cols-2 gap-3">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-white text-[16px]">{p.icon}</span>
                  </div>
                  <span className="font-montserrat font-semibold text-white text-xs leading-tight">
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="px-8 py-6 border-t border-white/10 flex items-center justify-between">
          <p className="font-inter text-white/40 text-xs">hello@bodhilearning.com</p>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="font-montserrat text-xs font-bold tracking-widest uppercase text-white bg-secondary px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
