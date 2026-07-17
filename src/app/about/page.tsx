import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AboutHero from "@/components/about/about-hero";
import OurNarrative from "@/components/about/our-narrative";
import Certifications from "@/components/about/certifications";
import FounderEdge from "@/components/about/founder-edge";
import AboutCta from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "17+ years of L&D leadership from Amazon and ServiceNow, now brought to every learner. Meet the Cambridge-certified team behind BODHI LEARNING's rigorous, skill-first approach.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <AboutHero />
        <OurNarrative />
        <Certifications />
        <FounderEdge />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
