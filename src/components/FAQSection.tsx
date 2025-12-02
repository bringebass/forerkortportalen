import { Clock3, MapPin, ShieldCheck } from "lucide-react";

const faq = [
  {
    category: "Om tjenesten",
    items: [
      {
        q: "Hva er Førerkortportalen?",
        a: "Førerkortportalen er en gratis og uforpliktende tjeneste som kobler deg med godkjente trafikkskoler i ditt område. Du fyller ut et skjema én gang — så får du tilbud fra flere trafikkskoler, slik at du kan sammenligne pris, tilgjengelighet og opplæringstilbud uten å kontakte skolene én og én.",
      },
      {
        q: "Koster det noe å bruke portalen?",
        a: "Nei — tjenesten er helt gratis, og det er uforpliktende. Du vurderer selv om du vil takke ja til et tilbud og starte med en trafikkskole.",
      },
    ],
  },
  {
    category: "Når og hvordan du får tilbud",
    items: [
      {
        q: "Hva skjer etter at jeg sender inn skjemaet?",
        a: "Når du har sendt inn skjemaet med postnummer og ønsket førerkortklasse, sender vi forespørselen din til relevante trafikkskoler i området ditt. Skolene kontakter deg (ofte innen 24 timer) for å diskutere opplegg, pris og tilgjengelighet — deretter velger du det tilbudet som passer best for deg.",
      },
    ],
  },
  {
    category: "Hvilke førerkortklasser og typer opplæring",
    items: [
      {
        q: "Hvilke førerkortklasser kan jeg få tilbud på via portalen?",
        a: "Du kan få tilbud på de fleste førerkortklasser — for eksempel bil (klasse B), tilhenger (BE/B96), MC (A, A2, A1) og andre klasser der trafikkskole tilbyr opplæring.",
      },
      {
        q: "Kan jeg få tilbud på intensivkurs eller fleksible kurs?",
        a: "Ja — mange av skolene vi samarbeider med tilbyr intensivkurs, kveldskurs eller fleksible teoripakker. Du kan oppgi ønske om dette i skjemaet, så videresender vi forespørselen til skoler som tilbyr slike løsninger.",
      },
    ],
  },
  {
    category: "Praktiske og \"hva om\"-spørsmål",
    items: [
      {
        q: "Må jeg velge det første tilbudet jeg får?",
        a: "Nei — du er helt fri til å vente på, og sammenligne, flere tilbud. Du kan vurdere pris, opplæringstype, skole og oppstart før du bestemmer deg.",
      },
    ],
  },
  {
    category: "Hvorfor bruke Førerkortportalen?",
    items: [
      {
        q: "Hva er fordelen med å bruke Førerkortportalen?",
        a: "Du sparer tid — i stedet for å kontakte flere skoler separat, fyller du ut ett skjema og mottar flere tilbud. Du får oversikt og mulighet til å sammenligne pris, kursinnhold og tilgjengelighet, så du kan velge det som passer best for deg.",
      },
      {
        q: "Kan jeg spare penger ved å bruke portalen?",
        a: "Ja — ved å sammenligne tilbud fra flere trafikkskoler kan du finne en skole med konkurransedyktige priser eller spesialtilbud, og velge det som gir best verdi for deg.",
      },
    ],
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
          <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold text-slate-900 break-words mb-4">
            Ofte stilte spørsmål
          </h3>
          <div className="space-y-6">
            {faq.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                <h4 className="text-sm sm:text-base font-semibold text-slate-900 uppercase tracking-wide">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <details
                      key={`${categoryIndex}-${itemIndex}`}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-4 hover:bg-slate-100 transition"
                    >
                      <summary className="cursor-pointer text-sm sm:text-base lg:text-base font-semibold text-slate-900 marker:hidden break-words">
                        Spørsmål: {item.q}
                      </summary>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed break-words">
                        Svar: {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for use in structured data
export { faq };

