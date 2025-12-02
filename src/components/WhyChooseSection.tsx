import { Clock3, MapPin, ShieldCheck } from "lucide-react";

const valuePoints = [
  {
    title: "Lokale skoler",
    copy: "Vi prioriterer trafikkskoler som kjenner rutevalg og sensorer i din region.",
    icon: MapPin,
    iconColor: "text-emerald-600",
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    title: "Trygge prosesser",
    copy: "Samarbeider bare med godkjente trafikkskoler som følger læreplanen til Statens vegvesen.",
    icon: ShieldCheck,
    iconColor: "text-blue-600",
    color: "bg-sky-50 text-sky-900",
  },
  {
    title: "Rask oppstart",
    copy: "Flere skoler tilbyr intensivløp, kveldskurs og fleksible teoripakker.",
    icon: Clock3,
    iconColor: "text-amber-600",
    color: "bg-amber-50 text-amber-900",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-[28px] sm:text-[30px] font-semibold text-slate-900 lg:text-[32px] xl:text-[36px] mb-3">
              Hvorfor velge en sammenligningstjeneste?
            </h2>
            <p className="text-base text-slate-600 sm:text-base lg:text-lg">
              Vi gjør det enkelt å finne og sammenligne trafikkskoler
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valuePoints.map(({ title, copy, icon: Icon, iconColor }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition min-w-0"
              >
                <Icon className={`mb-4 h-6 w-6 sm:h-7 sm:w-7 ${iconColor} flex-shrink-0`} />
                <h3 className="text-lg sm:text-lg lg:text-xl font-semibold text-slate-900 mb-2 break-words">
                  {title}
                </h3>
                <p className="text-sm sm:text-sm lg:text-base text-slate-600 leading-relaxed break-words">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

