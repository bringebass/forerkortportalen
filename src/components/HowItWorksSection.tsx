import { Award, Gauge, MapPin } from "lucide-react";

const steps = [
  {
    title: "Del behovet ditt",
    description: "Postnummer, førerkortklasse og ønsket oppstart fylles ut på under ett minutt.",
    icon: MapPin,
    iconColor: "text-emerald-600",
  },
  {
    title: "Vi matcher deg",
    description: "Førerkortportalen sender forespørselen til trafikkskoler som dekker området og klassen.",
    icon: Gauge,
    iconColor: "text-blue-600",
  },
  {
    title: "Du velger skole",
    description: "Sammenlign opplegg og pris, still spørsmål og velg den læreren som passer deg best.",
    icon: Award,
    iconColor: "text-amber-600",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="hvordan" className="bg-slate-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 font-sans">
      <div className="container mx-auto max-w-[1300px] space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-[28px] font-semibold text-slate-900 sm:text-[32px] lg:text-[36px]">
            Tre steg fra behov til konkrete tilbud
          </h2>
          <p className="text-sm text-slate-600 sm:text-base lg:text-lg px-2">
            Enkel prosess som gir deg oversikt over tilgjengelige trafikkskoler
          </p>
        </div>
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center space-y-3 sm:space-y-4"
            >
              <div className={`p-3 sm:p-4 rounded-full bg-white ${step.iconColor} shadow-sm`}>
                <step.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

