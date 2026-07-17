import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CoursesHero from "@/components/courses/courses-hero";
import CourseGrid from "@/components/courses/course-grid";

export const metadata: Metadata = {
  title: "Our Courses",
  description:
    "Five Cambridge-certified programs: English Language Enhancement, Workforce Development, Technical Skills, Teacher Development, and Corporate Training. Find the one that fits your next move.",
};

export default function CoursesPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <CoursesHero />
          <CourseGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
