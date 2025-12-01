import Image from "next/image";

const logos = [
  { src: "/A-team logo.png", alt: "A-team trafikkskole" },
  { src: "/AB trafikksenter logo.png", alt: "AB trafikksenter" },
  { src: "/Best trafikkskole logo.png", alt: "Best trafikkskole" },
  { src: "/Svein Svendsen logo.png", alt: "Svein Svendsen trafikkskole" },
  { src: "/wright logo.jpeg", alt: "Wright trafikkskole" },
];

export default function PopularDrivingSchools() {
  // Show all 5 logos on mobile - 3 on top row, 2 on bottom
  const allLogos = logos;

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] sm:text-[28px] font-semibold text-slate-900 mb-6 sm:mb-8 lg:text-[32px] lg:mb-10">
          Populære kjøreskoler
        </h2>
        
        {/* Mobile view - show all 5 logos: 3 on top row, 2 on bottom */}
        <div className="flex flex-col items-center gap-4 sm:hidden">
          {/* Top row: 3 logos */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {allLogos.slice(0, 3).map((logo, index) => (
              <div
                key={index}
                className="relative h-10 w-20 flex-shrink-0 grayscale opacity-60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
          {/* Bottom row: 2 logos */}
          {allLogos.length > 3 && (
            <div className="flex flex-wrap justify-center items-center gap-3">
              {allLogos.slice(3, 5).map((logo, index) => (
                <div
                  key={index + 3}
                  className="relative h-10 w-20 flex-shrink-0 grayscale opacity-60"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop view - show all logos */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-12">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="relative h-14 w-28 sm:h-16 sm:w-32 lg:h-20 lg:w-40 flex-shrink-0 grayscale opacity-60"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

