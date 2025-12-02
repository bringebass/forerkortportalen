const licenseInfo = [
  {
    title: "Klasse B – personbil",
    titleColor: "text-blue-600",
    content:
      "Standard lappen opptil 3 500 kg. Inkluderer sikkerhetskurs på bane og i trafikken før oppkjøring.",
    bullets: [
      "Velg mellom manuell og automat – begge deler gir tilgang til intensivløp.",
      "Trafikalt grunnkurs må være fullført før øvingskjøring.",
    ],
  },
  {
    title: "Klasse BE/B96 – tilhenger",
    titleColor: "text-emerald-600",
    content:
      "Gir mulighet til å trekke tyngre hengere. Opplæringen fokuserer på last, kobling og sikker rygging.",
    bullets: [
      "B96 krever ikke oppkjøring, men obligatorisk kurs.",
      "BE avsluttes med førerprøve hos Statens vegvesen.",
    ],
  },
  {
    title: "MC-klasser A/A2/A1",
    titleColor: "text-amber-600",
    content:
      "Starter med obligatorisk teoridel (3 timer) og fortsetter med kjøreteknikk, sikkerhetskurs bane og trafikk.",
    bullets: [
      "Over 25 år eller allerede bilfører? Da kan du hoppe rett til MC-kurset.",
      "Flere skoler tilbyr overgangspakker fra A2 til A.",
    ],
  },
];

export default function LicenseClassesSection() {
  return (
    <section id="klasser" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-slate-900">
            Kort om de vanligste klassene
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-base lg:text-lg">
            Oversikt over de mest populære førerkortklassene og hva de innebærer
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {licenseInfo.map((license) => (
            <article
              key={license.title}
              className="rounded-3xl bg-slate-100 border-2 border-slate-200 p-5 sm:p-6 shadow-md transition hover:shadow-lg hover:border-slate-300"
            >
              <h3 className="text-xl sm:text-xl lg:text-2xl font-bold mb-3 text-slate-800">
                {license.title}
              </h3>
              <p className="text-base sm:text-base lg:text-lg text-slate-700 mb-4 leading-relaxed">{license.content}</p>
              <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                {license.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

