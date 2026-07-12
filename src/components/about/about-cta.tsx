export default function AboutCta() {
  return (
    <section className="py-20 bg-surface-container text-center">
      <div className="max-w-2xl mx-auto px-16" data-gsap="scale-in">
        <h2 className="font-montserrat font-semibold text-3xl text-primary mb-6">
          Begin your path to mastery
        </h2>
        <p className="text-on-surface-variant mb-10 leading-relaxed">
          Join thousands of professionals who have transformed their careers
          through our specialized tracks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all">
            Explore Curriculum
          </button>
          <button className="border border-outline text-primary px-10 py-4 rounded-full font-semibold hover:bg-surface-container-lowest transition-all">
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  );
}
