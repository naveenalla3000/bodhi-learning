"use client";

import Image from "next/image";
import { useState } from "react";

const imgElena =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDBVhucu0kssyHoXzrMkIq2fb4kNJTVkw4-QQzKLy1kCK_Pd-qlRov2zfaPsiW3YfMIy5rQzDIBXkzroqdFpJDK-1SXvWryUdduUgBykiMh5oSx-iV6CmWOkVHMgAtI0EbBrBoMncItEVrv5O8drqrgNKzBxfvCHazROh-FdUcsUZCO-7h_zk8caYBuwFZ_SPV-I8Fj-aF4WnenJb2MmkluZOL89Xx-weoeWcHJncK-OgZRxQUySpUD-htXyls4LtXRjSyhin6oNA";
const imgSarah =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWmpwT6h2x-zTNjPwXcSpWc3cs6thjsWmEiSxTSCWjd3Ojb6LbOP4mv9YCOuNByvRczVCvHXZHNDcesjzKsR40CrvflcyrZ_80gDdFRS3S_v1gl6NCxJ7Se-daglmeZU8gc_qsrY22g2S-cvTMBHwNWxktGD8fsTSXGIRfoQpOv_HwFcsviHhnys_MOOENz967-DvYE-uvOp7ogYTfiprc-jUXC8ZG9bIoB366l1hatanryXORkaR5kpHWqRnhBau8PYJQeGM1A";

const testimonials = [
  {
    quote:
      "The Teacher Education workshops gave me practical tools to engage my students in a digital-first world. The community here is incredibly supportive.",
    name: "Dr. Elena Rodriguez",
    role: "Senior Faculty, Metropolitan School",
    img: imgElena,
  },
  {
    quote:
      "Bodhi's corporate training programs have drastically improved our team's cross-cultural communication and leadership effectiveness.",
    name: "Mark Henderson",
    role: "HR Director",
    img: null,
  },
  {
    quote:
      "The K-12 Excellence program has transformed how our students engage with complex problem-solving.",
    name: "Sarah Jenkins",
    role: "School Principal",
    img: imgSarah,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(2);

  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden">
      {/* Skew decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-secondary font-semibold tracking-[0.3em] uppercase text-xs">
                Testimonials
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary tracking-tight leading-tight mb-8">
              What our{" "}
              <span className="italic font-medium">community</span> says
            </h2>
            <p className="text-on-surface-variant text-lg max-w-sm opacity-80 leading-relaxed">
              Real stories from the educators and professionals shaping the
              future of global learning.
            </p>
          </div>

          {/* Right column — slider */}
          <div className="md:col-span-7 relative">
            {/* Ghost quote mark */}
            <div className="absolute -top-20 -left-10 text-[200px] font-bold text-primary/5 select-none pointer-events-none leading-none">
              &ldquo;
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-surface-container-high bg-surface-container-lowest">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="w-full flex-shrink-0 p-12 md:p-16"
                  >
                    <span className="material-symbols-outlined text-secondary text-5xl mb-8 block">
                      format_quote
                    </span>
                    <p className="font-montserrat font-semibold text-lg md:text-xl text-primary italic leading-relaxed mb-8">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-6">
                      {t.img && (
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-secondary rounded-full blur-sm opacity-20" />
                          <Image
                            src={t.img}
                            alt={t.name}
                            width={80}
                            height={80}
                            className="w-20 h-20 rounded-full object-cover relative z-10 border-4 border-surface-container-lowest shadow-lg"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-base text-primary">
                          {t.name}
                        </div>
                        <div className="text-secondary font-semibold text-xs uppercase tracking-widest mt-1">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-start gap-3 mt-12 ml-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-12 bg-primary"
                      : "w-3 bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
