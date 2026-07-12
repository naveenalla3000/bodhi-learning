"use client";

import { useState } from "react";
import AnimatedButton from "@/components/animated-button";

const ORG_TYPES = [
  "Higher Education Institution",
  "Corporate Training Center",
  "K-12 Educational Foundation",
  "Non-Profit Organization",
  "Independent Professional",
];

const inputClass =
  "w-full px-4 py-3 border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm bg-surface-container-lowest font-inter";

const labelClass =
  "text-xs font-bold tracking-widest uppercase text-on-surface-variant font-montserrat";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
        <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
        <h3 className="font-montserrat text-2xl font-bold text-primary">
          Message Received
        </h3>
        <p className="font-inter text-on-surface-variant max-w-sm text-sm leading-relaxed">
          Thank you for reaching out. One of our academic consultants will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-montserrat text-primary font-semibold border-b border-primary text-sm hover:opacity-60 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label className={labelClass}>Full Name</label>
          <input required type="text" placeholder="Dr. Anjali Sharma" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>Email Address</label>
          <input required type="email" placeholder="a.sharma@institution.in" className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>Organisation Type</label>
        <div className="relative">
          <select className={`${inputClass} appearance-none cursor-pointer`}>
            {ORG_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
            expand_more
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>Message</label>
        <textarea
          required
          rows={5}
          placeholder="How can our consultants support your academic vision?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <AnimatedButton type="submit" variant="primary" size="md">
        Submit Inquiry
      </AnimatedButton>
    </form>
  );
}
