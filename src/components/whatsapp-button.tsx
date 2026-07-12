"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about BODHI LEARNING programs.";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip label */}
      <span
        className={`bg-white text-primary text-sm font-medium px-4 py-2 rounded-full shadow-lg border border-surface-container-high whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white relative z-10"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.675 4.797 1.846 6.789L2 30l7.41-1.818A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.56 11.56 0 0 1-5.89-1.608l-.422-.252-4.397 1.079 1.107-4.278-.276-.44A11.6 11.6 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6Zm6.35-8.637c-.347-.174-2.056-1.014-2.374-1.13-.318-.116-.55-.174-.781.174-.232.347-.896 1.13-1.099 1.362-.202.231-.405.26-.752.086-.347-.174-1.465-.54-2.79-1.72-1.031-.919-1.727-2.054-1.929-2.401-.203-.347-.022-.535.152-.708.156-.155.347-.405.52-.607.174-.203.231-.347.347-.578.116-.232.058-.434-.029-.607-.087-.174-.781-1.882-1.07-2.578-.282-.677-.568-.585-.781-.596l-.665-.011c-.232 0-.607.087-.925.434s-1.216 1.188-1.216 2.896 1.245 3.36 1.418 3.592c.174.231 2.45 3.74 5.934 5.244.83.358 1.477.572 1.982.732.833.265 1.59.228 2.188.138.668-.1 2.056-.84 2.346-1.652.29-.812.29-1.508.203-1.652-.087-.145-.318-.232-.665-.405Z" />
        </svg>
      </div>
    </a>
  );
}
