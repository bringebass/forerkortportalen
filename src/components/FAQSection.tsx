import { Clock3, MapPin, ShieldCheck } from "lucide-react";

const faq = [
  {
    q: "Hvordan fungerer intensivkurs for førerkort B?",
    a: "Intensivkurs samler kjøretimer, teori og sikkerhetskurs over 2–3 uker. Kjøringen foregår ofte daglig, og flere skoler legger inn teoristøtte på kveldstid. Du må likevel bestå teoriprøven og den ordinære førerprøven.",
  },
  {
    q: "Hva skjer etter at jeg sender inn skjemaet?",
    a: "Vi sender forespørselen din til utvalgte trafikkskoler i ditt område. De kontakter deg (ofte innen 24 timer) for å avklare detaljer før de presenterer en plan og pris.",
  },
  {
    q: "Koster det noe å bruke tjenesten?",
    a: "Nei, tjenesten er gratis og uforpliktende. Du velger selv om du ønsker å gå videre med en av skolene.",
  },
];

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

export default function FAQSection() {
  return (
    <section id="faq" className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] grid gap-6 sm:gap-8 px-3 sm:px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-6 min-w-0">
          <div>
            <h2 className="text-[28px] sm:text-[30px] font-semibold text-slate-900 lg:text-[32px] xl:text-[36px] mb-3 break-words">
              Hvorfor velge en sammenligningstjeneste?
            </h2>
            <p className="text-base text-slate-600 sm:text-base lg:text-lg">
              Vi gjør det enkelt å finne og sammenligne trafikkskoler
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {valuePoints.map(({ title, copy, icon: Icon, iconColor }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition min-w-0"
              >
                <Icon className={`mb-4 h-6 w-6 sm:h-6 sm:w-6 ${iconColor} flex-shrink-0`} />
                <h3 className="text-lg sm:text-lg lg:text-xl font-semibold text-slate-900 mb-2 break-words">{title}</h3>
                <p className="text-sm sm:text-sm lg:text-base text-slate-600 leading-relaxed break-words">{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm min-w-0">
          <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-slate-900 break-words">
            Ofte stilte spørsmål
          </h3>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-4 hover:bg-slate-100 transition"
              >
                <summary className="cursor-pointer text-sm sm:text-base lg:text-base font-semibold text-slate-900 marker:hidden break-words">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed break-words">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for use in structured data
export { faq };

