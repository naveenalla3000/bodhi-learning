"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllCourses } from "@/lib/courses";

const ALL_COURSES = getAllCourses();
const SORT_OPTIONS = ["Popularity", "Newest", "Duration"];
const PER_PAGE = 4;

export default function CourseGrid() {
  const [sort, setSort] = useState("Popularity");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(ALL_COURSES.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = ALL_COURSES.slice(start, start + PER_PAGE);

  return (
    <section>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8" data-gsap="fade-up">
        <div>
          <h2 className="font-[--font-montserrat-var] font-bold text-3xl text-primary">All Courses</h2>
          <p className="text-on-surface-variant mt-1">
            Discover {ALL_COURSES.length} high-impact programs for your career.
          </p>
        </div>
        <div className="flex items-center gap-2 text-on-surface-variant text-sm bg-surface-container-low px-4 py-2.5 rounded-xl border border-surface-container-high">
          <span>Sort by:</span>
          <select
            value={sort}
            onChange={(e) => { setSort(e.target.value); setPage(1); }}
            className="bg-transparent border-none p-0 focus:ring-0 text-primary font-bold cursor-pointer outline-none"
          >
            {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-gsap="stagger">
        {visible.map((course) => (
          <div
            key={course.slug}
            className="bg-surface-container-lowest rounded-2xl overflow-hidden group border border-surface-container-high hover:shadow-xl transition-all duration-300"
            data-gsap-item
          >
            <div className="h-56 relative overflow-hidden">
              <Image
                src={course.cardImg}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {course.category}
              </div>
            </div>

            <div className="p-8 space-y-3">
              <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                  {course.level}
                </span>
              </div>

              <h3 className="font-[--font-montserrat-var] font-bold text-xl text-primary group-hover:text-secondary transition-colors">
                {course.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-2">
                {course.desc}
              </p>

              <div className="pt-4 border-t border-surface-container flex justify-between items-center">
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2 group/link"
                >
                  View Details
                  <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-surface-container-high hover:bg-surface-container-low transition-colors disabled:opacity-30"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-11 h-11 flex items-center justify-center rounded-full font-semibold transition-all ${
                n === page
                  ? "bg-primary text-on-primary shadow-sm"
                  : "border border-surface-container-high hover:bg-surface-container-low text-primary"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-surface-container-high hover:bg-surface-container-low transition-colors disabled:opacity-30"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      )}
    </section>
  );
}
