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
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Hvorfor velge en{" "}
              <span className="relative inline-block">
                <span className="">
                  sammenligningstjeneste?
                </span>
                <span className=""></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Vi gjør det enkelt å finne og sammenligne trafikkskoler
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valuePoints.map(({ title, copy, icon: Icon, iconColor }) => (
              <article
                key={title}
                className="group relative rounded-3xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300/50 hover:bg-white/80 transition-all duration-300 min-w-0"
              >
                <div className={`mb-5 inline-flex p-3 rounded-2xl bg-gradient-to-br ${iconColor === "text-emerald-600" ? "from-emerald-500/10 to-emerald-600/10" : iconColor === "text-blue-600" ? "from-blue-500/10 to-blue-600/10" : "from-amber-500/10 to-amber-600/10"} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${iconColor} flex-shrink-0`} />
                </div>
                <h3 className="text-xl sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 break-words">
                  {title}
                </h3>
                <p className="text-base sm:text-base lg:text-lg text-slate-600 leading-relaxed break-words">
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

