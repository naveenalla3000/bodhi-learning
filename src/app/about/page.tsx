import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/about-hero";
import OurNarrative from "@/components/about/our-narrative";
import Milestones from "@/components/about/milestones";
import ScholarlyLeadership from "@/components/about/scholarly-leadership";
import AboutCta from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | BODHI LEARNING",
  description:
    "Learn about BODHI LEARNING's mission to bridge traditional pedagogy and modern industry needs through immersive, skill-first experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <AboutHero />
        <OurNarrative />
        <Milestones />
        <ScholarlyLeadership />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
