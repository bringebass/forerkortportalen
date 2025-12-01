import LeadForm from "@/components/LeadForm";
import { Clock3, ShieldCheck, Users2 } from "lucide-react";
import Image from "next/image";

const heroHighlights = [
  { label: "100% gratis", icon: ShieldCheck, iconColor: "" },
  { label: "Du velger skolen", icon: Users2, iconColor: "" },
  { label: "Helt uforpliktende", icon: Clock3, iconColor: "" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 lg:bg-slate-900 lg:text-white lg:min-h-[820px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/bg-photo.png"
          alt="Elev i bil som får kjøretime"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />
        <div className="absolute inset-0 bg-slate-900/65" />
      </div>

      <div className="relative z-10 flex min-h-[400px] w-full sm:px-6 sm:py-8 lg:min-h-[820px] lg:px-8 lg:py-28">
        {/* Mobile: Form goes full width, Desktop: Container layout */}
        <div className="sm:mx-auto sm:flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
          <div className="hidden sm:block space-y-4 sm:space-y-6 lg:w-[50%]">
            <h1 className="text-center text-[32px] font-semibold leading-[1.15] text-slate-900 sm:text-left sm:text-[48px] lg:text-[54px] lg:text-white">
              Spar penger og finn riktig trafikkskole for deg
            </h1>
            <p className="text-center text-base text-slate-600 sm:text-left sm:text-lg lg:text-white/85">
              Del behovet ditt én gang – vi kobler deg med kvalitetssikrede
              trafikkskoler i området ditt slik at du kan sammenligne priser,
              pakker og tilgjengelighet.
            </p>
            <div className="hidden flex-wrap gap-3 md:flex">
              {heroHighlights.map(({ label, icon: Icon, iconColor }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm lg:bg-white/90 lg:text-slate-900"
                >
                  <Icon className={`h-4 w-4 ${iconColor}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="sm:rounded-[32px] bg-slate-900/70 backdrop-blur-md shadow-none sm:shadow-2xl sm:shadow-slate-900/50">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

