import Image from "next/image";

const quickLinks = ["Home", "About Us", "Courses", "Contact"];
const programs = [
  "School Coaching",
  "Teacher Training",
  "Corporate Training",
  "School Partnerships",
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-surface-container-high pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="BODHI LEARNING" width={40} height={40} />
              <span className="font-[--font-cormorant] text-2xl font-bold text-primary tracking-[0.1em] uppercase">
                BODHI LEARNING
              </span>
            </div>
            <p className="text-on-surface-variant text-base mb-8 max-w-xs leading-relaxed">
              Bodhi Learning delivers transformative education in academics,
              career skills, and professional development — empowering learners
              and institutions to reach their highest potential.
            </p>
            <div className="flex gap-4">
              {["public", "alternate_email", "share"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-6">
              Programs
            </h4>
            <ul className="flex flex-col gap-4">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-primary uppercase tracking-widest text-sm mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: "location_on", text: "Hyderabad, Telangana" },
                { icon: "mail", text: "hello@bodhilearning.in", href: "mailto:hello@bodhilearning.in" },
                { icon: "call", text: "+91 98765 43210" },
                { icon: "schedule", text: "Mon–Sat, 9 AM – 7 PM" },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-on-surface-variant text-sm">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-sm">
            © 2026 BODHI LEARNING. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { icon: "language", label: "English" },
              { icon: "alternate_email", label: "Support" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {item.icon}
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
