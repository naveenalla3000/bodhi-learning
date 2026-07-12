import Image from "next/image";

const imgCommunication =
  "https://lh3.googleusercontent.com/aida/AP1WRLvIs5DHzRWag2XWEarrrH0UTBadcu9zI92uPFjMwNGlMdDqol-y8_acPs8SpHCP_Ix0PG9z6KXe79-Cn8aIAksb4pybqkEp57yJhRuvQS1R7i8qFtC28Wa17Y4QUWo4iKot8xxx6GfmK4L2HcGqSye0mySwVX3VUdTCf7MjULrFBpjW2jaHcNnBcgpB7rx9aVIMvVWbGMuoL64xMf3X88QQQ6j_JS7Oos72de37j-_GAZ9BnHcdwTjf";

const imgExperiential =
  "https://lh3.googleusercontent.com/aida/AP1WRLtNLV8owgy6OBhIW9os_ga8cdwttj2BSmwH2obYZ8TjJp3zdgTyaGtP_m4UA9i5QxSfDkeDiJxDZW3Az9pBvQ5o-8oMGmTo19ruQ8oO9J9TT5mOiBPEDxWklXGbEfdH0vShD9h22_ysuVJNmABQ0gMf9lowe2VM9ZPGNmH4Jy084m4MluqKEapuMHfX_xut2Da_5zQDfxvvsS0_gm9GTBCrOX2NrUjdj6ELfw5q1UgJVMJPbvZhEvyw0w";

export default function WhyChooseGrid() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-3xl text-primary mb-2">
            Why Choose BODHI Learning?
          </h2>
          <p className="text-on-surface-variant font-medium tracking-wide uppercase text-sm">
            Key Benefits of Learning With Us
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Benefit 1 — text only */}
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border border-surface-container-high flex flex-col gap-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                workspace_premium
              </span>
            </div>
            <h3 className="font-montserrat font-semibold text-xl text-primary leading-tight">
              Achieve academic excellence from Class 1 through postgraduate
              level
            </h3>
          </div>

          {/* Benefit 2 — text + image */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-surface-container-high overflow-hidden group hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4 leading-tight">
                  Develop communication, leadership and 21st-century
                  professional skills
                </h3>
                <div className="w-12 h-0.5 bg-secondary" />
              </div>
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto relative">
                <Image
                  src={imgCommunication}
                  alt="Professional skills training"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Benefit 3 — image + text */}
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-surface-container-high overflow-hidden group hover:shadow-lg transition-all order-last md:order-none">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto relative">
                <Image
                  src={imgExperiential}
                  alt="Experiential learning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4 leading-tight">
                  Learn through personalised, mentor-led and experiential
                  sessions
                </h3>
                <div className="w-12 h-0.5 bg-secondary" />
              </div>
            </div>
          </div>

          {/* Benefit 4 — text only */}
          <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border border-surface-container-high flex flex-col gap-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">
                trending_up
              </span>
            </div>
            <h3 className="font-montserrat font-semibold text-xl text-primary leading-tight">
              Gain skills that employers and institutions actively seek
            </h3>
          </div>

          {/* Partner CTA Banner */}
          <div className="md:col-span-12 bg-primary text-on-primary p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-secondary text-4xl">
                account_balance
              </span>
              <h3 className="font-montserrat font-semibold text-2xl">
                Transform your institution with proven curriculum frameworks
              </h3>
            </div>
            <button className="bg-secondary text-on-secondary font-bold px-10 py-4 rounded-lg hover:brightness-110 transition-all whitespace-nowrap">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
