import AnimatedButton from "@/components/animated-button";

export default function AboutCta() {
  return (
    <section className="py-20 bg-surface-container text-center">
      <div className="max-w-2xl mx-auto px-6" data-gsap="scale-in">
        <h2 className="font-montserrat font-semibold text-3xl text-primary mb-6">
          Begin your path to mastery
        </h2>
        <p className="text-on-surface-variant mb-10 leading-relaxed">
          Join thousands of professionals who have transformed their careers
          through our specialized tracks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedButton href="/courses" variant="primary" size="md">
            Explore Curriculum
          </AnimatedButton>
          <AnimatedButton href="/contact" variant="outline-dark" size="md">
            Contact Admissions
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
