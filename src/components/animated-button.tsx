"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: "md" | "lg";
  /** Applied to the outer Link / button wrapper — use "flex-1" or "w-full" for equal-width pairs */
  className?: string;
}

const variants: Record<Variant, { wrapper: string; fill: string; text: string }> = {
  primary: {
    wrapper: "bg-primary text-on-primary border-2 border-primary",
    fill:    "bg-secondary",
    text:    "group-hover:text-on-secondary",
  },
  secondary: {
    wrapper: "bg-secondary text-on-secondary border-2 border-secondary",
    fill:    "bg-primary",
    text:    "group-hover:text-on-primary",
  },
  "outline-dark": {
    wrapper: "bg-transparent text-primary border-2 border-primary",
    fill:    "bg-primary",
    text:    "group-hover:text-on-primary",
  },
  "outline-light": {
    wrapper: "bg-transparent text-white border-2 border-white/60",
    fill:    "bg-white",
    text:    "group-hover:text-primary",
  },
};

const sizes = {
  md: "px-8 py-3.5 text-sm",
  lg: "px-12 py-5 text-base",
};

function Inner({
  children,
  variant = "primary",
  size = "lg",
}: Pick<AnimatedButtonProps, "children" | "variant" | "size">) {
  const fillRef = useRef<HTMLSpanElement>(null);
  const v = variants[variant];
  const s = sizes[size];

  const getPos = (e: MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    return { x, y };
  };

  const handleEnter = (e: MouseEvent<HTMLSpanElement>) => {
    const fill = fillRef.current;
    if (!fill) return;
    const { x, y } = getPos(e);
    // Snap fill to entry point (no transition), then expand with transition
    fill.style.transition = "none";
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`;
    fill.getBoundingClientRect(); // force reflow so transition fires
    fill.style.transition = "clip-path 0.55s cubic-bezier(0.4,0,0.2,1)";
    fill.style.clipPath = `circle(150% at ${x}% ${y}%)`;
  };

  const handleLeave = (e: MouseEvent<HTMLSpanElement>) => {
    const fill = fillRef.current;
    if (!fill) return;
    const { x, y } = getPos(e);
    fill.style.transition = "clip-path 0.45s cubic-bezier(0.4,0,0.2,1)";
    fill.style.clipPath = `circle(0% at ${x}% ${y}%)`;
  };

  return (
    <span
      className={`
        group relative flex items-center justify-center overflow-hidden w-full h-full
        rounded-full font-montserrat font-bold tracking-wide cursor-pointer
        transition-shadow duration-300 hover:shadow-xl
        ${v.wrapper} ${s}
      `}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Radial fill — clip-path controlled by JS */}
      <span
        ref={fillRef}
        className={`absolute inset-0 rounded-full ${v.fill}`}
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        aria-hidden
      />
      {/* Label */}
      <span className={`relative z-10 transition-colors duration-300 ${v.text}`}>
        {children}
      </span>
    </span>
  );
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "lg",
  className = "",
}: AnimatedButtonProps) {
  const base = `inline-flex ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        <Inner variant={variant} size={size}>{children}</Inner>
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`cursor-pointer ${base}`}>
      <Inner variant={variant} size={size}>{children}</Inner>
    </button>
  );
}
