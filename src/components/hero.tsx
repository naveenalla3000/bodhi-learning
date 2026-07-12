export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-48 pb-48">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary font-semibold text-xs mb-8 uppercase tracking-widest">
          Awakening Human Potential
        </span>

        <h1 className="font-montserrat font-bold text-5xl text-primary max-w-4xl mx-auto mb-8 leading-tight tracking-tight">
          Empowering Your Future Through{" "}
          <span className="text-secondary italic">Strategic Mastery</span>
        </h1>

        <p className="font-inter text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          Join a global community of thinkers. Bodhi Learning provides the rigor
          and professional training needed to excel in today&apos;s competitive
          landscape.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-primary text-on-primary font-bold px-10 py-5 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
            Explore Our Programs
          </button>
          <button className="border-2 border-primary text-primary font-bold px-10 py-5 rounded-xl hover:bg-surface-container-low transition-all">
            Talk To Us
          </button>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-10 opacity-10 pointer-events-none">
        <div className="w-64 h-64 bg-primary rounded-full blur-2xl" />
      </div>
    </section>
  );
}
