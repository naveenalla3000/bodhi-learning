import Image from "next/image";

const imgStudents =
  "https://lh3.googleusercontent.com/aida/AP1WRLvg0PcNk_Y6V1yIkFOfJM6skcsGNxZ6jqVh9VMzJ4gRAN_j43YnNIE1M1a53-HfpsaVKZ7qxA9KND1gTqwsO7eKYojoyD-wWOutaV0oyJEw32BS1iUeEMxPqNhmtGlCXGdfwviGclYNFlo897mN2fJmKRukCDMUx4fTg18S0AeFmBVkydNrWzLyJoW5hOF6Oq8OMDrpGae70dICIYwb9fNo9fMPHVgpREckVy1I4tqT8Na6Fp8oPRN3FA";
const imgTeachers =
  "https://lh3.googleusercontent.com/aida/AP1WRLt-w8-ZyzVC_7QJQ0HJlpzqfwNw_V55gOgsa8cRhxJqjSxvPJzs-HjVBY-4tkbJPHZqedFGGURzH_THVa-ldXTA8zcP18wBLfTSvux3YRfSJ-qoWE5U8k9C45YDRQWsEry3SPsDKlstXm_YXnlAah0bwXwctqP6VPp4-5rHAjbyIlhKOKCgPKZrwHH2GJcMrXiw1lDgE-pXabdX8VEsyOcf92lTgRShI7STdSf26IYGidJ-BtngycEaGg";
const imgCorporate =
  "https://lh3.googleusercontent.com/aida/AP1WRLvsXBlA1MnFwlH1cfwZeROMzrRG6svT0pBzNIg_3c9-Nm9Chog5sWcmbGKgCug_pFGbO4eO0n6iTBaYicyobndT9-Jf-z5v3G3f3nV5XbV7l_o7191VrPFq_dPaikQLJjxldM3QIDxhmQv5m6ewNtfxUdOrJTijWrMVYj6DustgzCpZHkzdIidjPTNFrqeTbzC2Q6r0K2_BY0s5RTBKJrkfervnsqTN65N9dRFsn7kgscXTMGmWQoKz";
const imgWomen =
  "https://lh3.googleusercontent.com/aida/AP1WRLuE-VlPt8Re1MtQ-FvmS1thUZ21Wg6N4m71ZSRAxRPoyLKfK4Cb63GiVN8VN32gk_cGq_ZulDffunQrlIGaPclDurg_b3Bea4LhKiFGQ5ygcZNB13fqGnye8v_JNp7fn_wyHIaaXfhOc4W1c8hMdJeOw_JUC_5AnQTa-cmjwQiq2I3ib-KepckXHgAP_diygCpjzC0vJWOahYKHmujz15leLM3MHVQ53XhITfqGhYKV4X23Lgs6f_Z7ng";

export default function WhoWeServe() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl" data-gsap="slide-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-secondary" />
              <span className="text-secondary font-semibold tracking-[0.3em] uppercase text-xs">
                Our Ecosystem
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-5xl md:text-6xl text-primary tracking-tight leading-none">
              Who We <span className="italic font-medium">Serve</span>
            </h2>
          </div>
          <p className="font-inter text-lg text-on-surface-variant max-w-md opacity-80 leading-relaxed" data-gsap="slide-right">
            Wherever you&apos;re starting, we&apos;ve already built the path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-gsap="stagger">
          {/* K-12 Students — spans 2 */}
          <div data-gsap-item className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-high hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                <Image
                  src={imgStudents}
                  alt="K-12 Students"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent opacity-60" />
              </div>
              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <span className="text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">
                  Students
                </span>
                <h3 className="font-montserrat font-semibold text-3xl text-primary mb-4">
                  K-12 Excellence
                </h3>
                <p className="text-on-surface-variant text-base mb-8 leading-relaxed opacity-80">
                  The critical thinking edge that gets kids ahead — and keeps them there.
                </p>
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest"
                >
                  Join Program
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Teacher Training */}
          <div data-gsap-item className="md:col-span-1 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-high hover:shadow-2xl transition-all duration-500">
            <div className="h-64 relative overflow-hidden">
              <Image
                src={imgTeachers}
                alt="Teacher Training"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div className="p-10">
              <span className="text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                Teacher Training
              </span>
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4">
                EDUCATE THE EDUCATORS
              </h3>
              <p className="text-on-surface-variant text-base mb-8 leading-relaxed opacity-80">
                Give your teachers tools your competitors&apos; schools don&apos;t have.
              </p>
              <a
                href="#"
                className="group/link inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest"
              >
                Join Workshop
                <span className="h-px w-8 bg-primary transition-all duration-300 group-hover/link:w-12" />
              </a>
            </div>
          </div>

          {/* Corporate Skills */}
          <div data-gsap-item className="md:col-span-1 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-high hover:shadow-2xl transition-all duration-500">
            <div className="h-64 relative overflow-hidden">
              <Image
                src={imgCorporate}
                alt="Corporate Skills"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div className="p-10">
              <span className="text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                Corporate Skills
              </span>
              <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4">
                PROFESSIONAL UPSKILLING
              </h3>
              <p className="text-on-surface-variant text-base mb-8 leading-relaxed opacity-80">
                Communication training that shows up in your next quarter&apos;s numbers.
              </p>
              <a
                href="#"
                className="group/link inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest"
              >
                Join Training
                <span className="h-px w-8 bg-primary transition-all duration-300 group-hover/link:w-12" />
              </a>
            </div>
          </div>

          {/* Women Empowerment — spans 2 */}
          <div data-gsap-item className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-surface-container-high hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                <Image
                  src={imgWomen}
                  alt="Women Empowerment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent opacity-60" />
              </div>
              <div className="md:w-2/5 p-10 flex flex-col justify-center">
                <span className="text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase mb-2">
                  Women Empowerment
                </span>
                <h3 className="font-montserrat font-semibold text-3xl text-primary mb-4">
                  LEAD, LEARN &amp; THRIVE
                </h3>
                <p className="text-on-surface-variant text-base mb-8 leading-relaxed opacity-80">
                  Confidence and leadership built to last a career, not a workshop.
                </p>
                <a
                  href="#"
                  className="group/link inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest"
                >
                  Join Initiative
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
