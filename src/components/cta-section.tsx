export default function CtaSection() {
  return (
    <section className="py-32 bg-primary text-on-primary relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block text-secondary font-semibold tracking-[0.3em] uppercase text-xs mb-6">
          START YOUR JOURNEY
        </span>
        <h2 className="font-montserrat font-bold text-2xl md:text-4xl mb-8 tracking-tight">
          Ready to Awaken Your Potential?
        </h2>
        <p className="font-inter text-lg md:text-xl text-on-primary/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Join 12,000+ learners who chose to grow with Bodhi Learning.
        </p>
        <div className="flex justify-center">
          <button className="bg-secondary text-on-secondary font-bold px-12 py-5 rounded-full hover:shadow-2xl hover:brightness-110 transition-all transform hover:-translate-y-1 text-lg">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
