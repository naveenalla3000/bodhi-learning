"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
}

const variants: Record<Variant, { wrapper: string; fill: string; text: string }> = {
  /* Dark-green pill → amber fill on hover */
  primary: {
    wrapper: "bg-primary text-on-primary border-2 border-primary",
    fill: "bg-secondary",
    text: "group-hover:text-on-secondary",
  },
  /* Amber pill → dark-green fill on hover */
  secondary: {
    wrapper: "bg-secondary text-on-secondary border-2 border-secondary",
    fill: "bg-primary",
    text: "group-hover:text-on-primary",
  },
  /* Outlined dark (on light bg) → primary fill on hover */
  "outline-dark": {
    wrapper: "bg-transparent text-primary border-2 border-primary",
    fill: "bg-primary",
    text: "group-hover:text-on-primary",
  },
  /* Outlined light (on dark bg) → white fill on hover */
  "outline-light": {
    wrapper: "bg-transparent text-white border-2 border-white/60",
    fill: "bg-white",
    text: "group-hover:text-primary",
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
  className = "",
}: Pick<AnimatedButtonProps, "children" | "variant" | "size" | "className">) {
  const v = variants[variant];
  const s = sizes[size];
  return (
    <span
      className={`
        group relative inline-flex items-center justify-center overflow-hidden
        rounded-full font-montserrat font-bold tracking-wide
        transition-shadow duration-300 hover:shadow-2xl
        ${v.wrapper} ${s} ${className}
      `}
    >
      {/* sliding fill */}
      <span
        className={`
          absolute inset-0 -translate-x-full rounded-full
          transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          group-hover:translate-x-0 ${v.fill}
        `}
        aria-hidden
      />
      {/* label */}
      <span
        className={`relative z-10 transition-colors duration-300 ${v.text}`}
      >
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
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <Inner variant={variant} size={size} className={className}>
          {children}
        </Inner>
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-block cursor-pointer"
    >
      <Inner variant={variant} size={size} className={className}>
        {children}
      </Inner>
    </button>
  );
}
