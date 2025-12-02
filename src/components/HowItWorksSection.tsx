import { Award, Gauge, MapPin, Star } from "lucide-react";

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
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="max-w-2xl text-center mx-auto space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-[#3bb54a]" />
              <h2 className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-slate-900">
                Tre steg fra behov til konkrete tilbud
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition border border-slate-200"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-3 sm:p-4 rounded-full bg-white ${step.iconColor} shadow-sm`}>
                    <step.icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </div>
                  <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

