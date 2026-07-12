import Image from "next/image";

const faculty = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Linguistic Excellence",
    bio: "Specializing in Applied Linguistics and Phonetics, Dr. Jenkins has coached over 1,000 professionals globally.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBznnzKwZi4FDVUEzX_X5u1y4X-sKL1neqtKvUvTgUaZs3fnFC3DEuOucEy4Lg0zsSHL9pMsQo25nx6crBsW_KcAg1aqFIcxAoGu81q7vM_tsRzfeEJ0ko5VGDpvVhXpcNfuiG6z2rsKA3qL8VeVSn7bb3ImGNWFArPkey_PyOSxajsMQxmOu2qsYkGwkvpTIiCPWCxih_OWrg9Gb3to5AJ0Iot1be6e-V0piMdhgJpTjz7xNsJz5VtZseNNxNlsOg3YzHlTOAbzA",
  },
  {
    name: "Marcus Thorne",
    role: "Executive Presence",
    bio: "A former TEDx speaker coach, Marcus focuses on persuasive communication for emerging tech leaders.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEj9ASckaCgEvxHmNBQokfivk3m_A3gfGwRlmkDjqxqEb1dXHYyG0WgcXN4zOpnMZavBN_0-k8OHI9BoxPceqCXJ9KNZIFgUnA2BzQ3QjDjScH9Tg2NpmmSIiVx8aNUrFe9h5BZZyqnrgiHW9LZPy0JI6R0dLivmn-_bzitErNyrmTcR1_rgz1NTEmPyMdbREoPs6HftEyi6GF63NENtdvoFkLiFHGOniGfYlpaml8WcsnWy1U4RY7F_ncELYyZdPPnZ58Xr1Ifw",
  },
  {
    name: "Prof. Elena Rossi",
    role: "Pedagogy & Design",
    bio: "Expert in curriculum development and instructional technology, Elena leads our teacher certification tracks.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyIUTsjum8qCVEdt6nz-HwuaKr4MQCDuL9FX7YQ_Hv793BUZHpgNuoOZ6JO_9N6Ko8-VaGhaETanwq-lhUk2viDJDogOWY8-vfn1sVMpjwy6PteQwUqXwmG0k9Z4iK-iiALDzdKOXyxZ5tL-t9nxBUw-gS-3GFKfxoYgF4nO3U4pWA2jxrI0kMo_KLLc2Gx28vRVoPXNUTMxxoX322KZ5H_0CZ8Hy7qHouRa3NijMPWPI6ut89C11xXLmQ",
  },
];

export default function ScholarlyLeadership() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="font-montserrat font-semibold text-3xl text-primary mb-4">
            Scholarly Leadership
          </h2>
          <p className="text-on-surface-variant">
            Our lead trainers bring decades of collective expertise in
            linguistics, executive coaching, and pedagogical research.
          </p>
        </div>
        <button className="text-primary font-semibold border-b-2 border-primary pb-1 hover:opacity-70 transition-all whitespace-nowrap">
          Meet the full circle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {faculty.map((f) => (
          <div key={f.name} className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-surface-dim relative">
              <Image
                src={f.img}
                alt={f.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-montserrat font-semibold text-xl text-primary mb-1">
              {f.name}
            </h3>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
              {f.role}
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {f.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
