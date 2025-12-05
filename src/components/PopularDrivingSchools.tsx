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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
          Populære trafikkskoler
        </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Vi samarbeider med kvalitetssikrede trafikkskoler over hele Norge
          </p>
        </div>
        
        {/* Mobile view - show all 5 logos: 3 on top row, 2 on bottom */}
        <div className="flex flex-col items-center gap-6 sm:hidden">
          {/* Top row: 3 logos */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {allLogos.slice(0, 3).map((logo, index) => (
              <div
                key={index}
                className="group relative h-12 w-24 flex-shrink-0 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3 hover:border-emerald-300/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-full w-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                    sizes="96px"
                />
                </div>
              </div>
            ))}
          </div>
          {/* Bottom row: 2 logos */}
          {allLogos.length > 3 && (
            <div className="flex flex-wrap justify-center items-center gap-4">
              {allLogos.slice(3, 5).map((logo, index) => (
                <div
                  key={index + 3}
                  className="group relative h-12 w-24 flex-shrink-0 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 p-3 hover:border-emerald-300/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-full w-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                      sizes="96px"
                  />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop view - show all logos */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-10">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative h-16 w-32 sm:h-18 sm:w-36 lg:h-20 lg:w-40 flex-shrink-0 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200/50 p-4 hover:border-emerald-300/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-full w-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                  sizes="(max-width: 1024px) 144px, 160px"
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

