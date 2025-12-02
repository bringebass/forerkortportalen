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
    <section id="faq" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-[28px] sm:text-[30px] font-semibold text-slate-900 lg:text-[32px] xl:text-[36px] mb-3">
              Ofte stilte spørsmål
            </h2>
            <p className="text-base sm:text-base lg:text-lg text-slate-600">
              Alt du lurer på om Førerkortportalen og vår tjeneste
            </p>
          </div>
          
          <div className="space-y-4">
            {allFaqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border-2 border-slate-200 bg-white p-5 sm:p-6 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
              >
                <summary className="cursor-pointer text-base sm:text-lg lg:text-xl font-semibold text-slate-900 marker:hidden list-none flex items-center justify-between gap-4">
                  <span className="flex-1">{item.q}</span>
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-open:text-emerald-600 group-open:rotate-180 transition-transform duration-200 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
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

