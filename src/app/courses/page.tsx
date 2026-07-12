import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import CoursesHero from "@/components/courses/courses-hero";
import CourseGrid from "@/components/courses/course-grid";

export const metadata: Metadata = {
  title: "Our Courses | BODHI LEARNING",
  description:
    "Discover high-impact programs in communication, leadership, and professional development designed for the modern learner.",
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
