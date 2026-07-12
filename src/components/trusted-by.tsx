import Image from "next/image";

const imgIIM =
  "https://lh3.googleusercontent.com/aida/AP1WRLsu9QN3wd0MfNm0CFVT9VBCfzrkmQpo17PZbFcYKGhtMuEux3RIm6S8vmOFwFFddJJXBqCMeQit2KCWKbrZESd5JbteZbrzvesKPR53P4RjqFBQFCeXYJavAxSqWv-j3TVe7v9Qsr1QdyrmRlQIESOtPXLXuUSKhHmYiFaqcp4Ih2v9Grdy9JOrP57iiKpEpeEeLA3mHG0WV_rRPRhYK8ONQYRtTeu8zWsSXAeJD1D2DgLtV6qE0thqEA";
const imgHydUniv =
  "https://lh3.googleusercontent.com/aida/AP1WRLt0wD92q-WakGVB7nwW3kjLv_VflsP1FH5BlAI5u1dYq-6rJmRvhOeDH6MZ6wTgegUlkgthMNl9t0Tt_1ffUuJ6gm5uVw2RWPi8EMsh8J4vNX447imotuNFPcv_sNbkwiN4IgK-7JoUYO6A3LqFx3YANErFKFCyMT22EUirIVjCmsJbi-3DrlPInlj2gj3QXLoYGAfv6y9ah1euCy1eqRuH9BIfeFlCiwxoMMSFSUlIb9qZWu8tL8t_ww";
const imgIIT =
  "https://lh3.googleusercontent.com/aida/AP1WRLsWDT9Rp2ZHoJoMNWM_95y1qS0T2k7O0yQETeByi2BsZaNhQSUxug1U7-Dq6Qg2Q2FMfy9Lzl5AKvecWX8cXOwNmmkkyLYoqqhv78Wg-By0BqetONqeHFWZ4-4Ue67nE3UUecBG4QZJ07kQm7ZYPxL7Gi8fs-oeiA0mOUFiD-pMiaIkv29l8r4OSsPwslrxrrmqwCVy2CpqCQGz8zj202bsayAEnYJq_mCX2cTIZuY4qYq_yQUdImvRQw";
const imgNALSAR =
  "https://lh3.googleusercontent.com/aida/AP1WRLvSm4AtUOG8nYfZ2j5Ny_knM8fi2os2fSZQVXn3DxQ3F5dHPb2t1rYXEn9OkvYe07eO71Zdx9MsxMoHR_XfMTA8fdEYs17dmyMENvyXWN8GaYZgLhFS5f7Rn2YNmkC7UMMUBhUYX58LF9KYyow1hRZriUBuIczh6Hxr5S3GsJAecerGvo6MmWqhPgp97xRCb-oAhR7DNcc-HfyavYZY7W-rDJn-2fT2v9Ksre9kMt5OAF9drq49Fs_HLw";

const institutions = [
  { name: "IIM Visakhapatnam", img: imgIIM },
  { name: "IIIT Kurnool", img: null, icon: "school" },
  { name: "JNTU Kakinada", img: null, icon: "account_balance" },
  { name: "Osmania University", img: null, icon: "school" },
  { name: "Hyderabad University", img: imgHydUniv },
  { name: "IIT Hyderabad", img: imgIIT },
  { name: "NALSAR University", img: imgNALSAR },
  { name: "Gitam University", img: null, icon: "school" },
];

function LogoItem({ inst }: { inst: (typeof institutions)[number] }) {
  return (
    <div className="flex items-center justify-center mx-12 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex-shrink-0">
      {inst.img ? (
        <div className="relative h-16 md:h-20 w-32">
          <Image
            src={inst.img}
            alt={inst.name}
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-4xl text-primary/60">
            {inst.icon}
          </span>
          <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest whitespace-nowrap">
            {inst.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-3xl text-primary mb-2 uppercase tracking-tight">
            Trusted By Leading Institutions
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
            {/* First set */}
            {institutions.map((inst) => (
              <LogoItem key={inst.name} inst={inst} />
            ))}
            {/* Duplicate for seamless loop */}
            {institutions.map((inst) => (
              <LogoItem key={`${inst.name}-dup`} inst={inst} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
