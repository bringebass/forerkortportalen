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

export default function FAQSection() {
  // Flatten all FAQ items from all categories
  const allFaqItems = faq.flatMap((category) => category.items);

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/20 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Ofte stilte spørsmål
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Alt du lurer på om Førerkortportalen og vår tjeneste
            </p>
          </div>
          
          <div className="space-y-4">
            {allFaqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-6 sm:p-7 hover:border-emerald-300/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <summary className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 marker:hidden list-none flex items-center justify-between gap-4">
                  <span className="flex-1 pr-4">{item.q}</span>
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 text-slate-400 group-open:text-emerald-600 group-open:rotate-180 transition-all duration-300 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-5 pt-5 border-t border-slate-200/50">
                  <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
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

