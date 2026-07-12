import Image from "next/image";
import AnimatedButton from "@/components/animated-button";

export default function CoursesHero() {
  return (
    <section className="mb-16" data-gsap="fade-up">
      <div className="relative overflow-hidden rounded-2xl bg-primary text-on-primary p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 min-h-[420px]">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-hero" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-hero)" />
          </svg>
        </div>

        <div className="relative z-10 md:w-3/5 space-y-6">
          <span className="inline-block px-4 py-1.5 bg-secondary text-on-secondary rounded-full text-xs font-bold tracking-widest uppercase">
            Featured
          </span>
          <h1 className="font-[--font-cormorant] text-4xl md:text-5xl font-bold leading-tight">
            Advanced English Proficiency
          </h1>
          <p className="text-on-primary/80 text-lg max-w-xl leading-relaxed">
            Elevate your linguistic capabilities with an expert-led curriculum designed for the highest professional standards.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <AnimatedButton href="/courses/advanced-english-proficiency" variant="outline-light" size="md">
              Enroll Today
            </AnimatedButton>
            <AnimatedButton href="/courses/advanced-english-proficiency" variant="outline-light" size="md">
              View Syllabus
            </AnimatedButton>
          </div>
        </div>

        <div className="relative z-10 md:w-2/5 flex justify-center">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo9-cQ3D84u7VzsgTKVqazdhUWdENuQi3zakXz_3BJMDQGWWf0-LSqebgqjbawlbzeWetXqpq7yR_S--WTfdStuGXaevoF-jcRhdnRHIop1XJemRjmEHUgz6m1wYuBFoumxkr8TDHI_xLeUrm1BRndRB4Hci3ekaZ6Hd-YSTKR5T_aUBavql_XwLdXXoHMeqGGCUM3_EnzJJatbhX56cpM1lKSv8PMYrFSTvNcsIH5UweA8s4s-GPszxerFqP7dkgW2ydhD5YByg"
            alt="Advanced English Proficiency"
            width={560}
            height={320}
            className="w-full h-72 object-cover rounded-xl shadow-2xl"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
