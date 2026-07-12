import Nav from "@/components/nav";
import Hero from "@/components/hero";
import CoreFocus from "@/components/core-focus";
import WhyChoose from "@/components/why-choose";
import BodhiMethod from "@/components/bodhi-method";
import WhyChooseGrid from "@/components/why-choose-grid";
import ImpactNumbers from "@/components/impact-numbers";
import WhoWeServe from "@/components/who-we-serve";
import TrustedBy from "@/components/trusted-by";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CoreFocus />
        <WhyChoose />
        <BodhiMethod />
        <WhyChooseGrid />
        <ImpactNumbers />
        <WhoWeServe />
        <TrustedBy />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
