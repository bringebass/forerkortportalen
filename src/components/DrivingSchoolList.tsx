const schools = [
  {
    name: "Majorstuen Trafikkskole",
    locations: "Oslo (Majorstuen og Røa)",
    offerings: [
      "Trafikalt grunnkurs og mørkekjøring",
      "Klasse B manuell og automat",
      "Klasse BE/B96 med sikring av last",
      "Klasse A/A2 og AM147 teorikurs",
    ],
    highlight:
      "Storbytilpasset progresjon med fokus på trygg samhandling i tett trafikk.",
    website: "https://www.majorstuen-trafikkskole.no/",
  },
  {
    name: "Trondheim Trafikksenter",
    locations: "Trøndelag",
    offerings: [
      "Intensivkurs for klasse B på 2–3 uker",
      "Sikkerhetskurs bane (Trinn 3-4)",
      "Tilleggsopplæring for glatte forhold",
      "MC- og mopedkurs med kjøreteknisk bane",
    ],
    highlight: "Kjent for korte ventelister og fleksible intensivløp.",
    website: "https://www.trondheimtrafikksenter.no",
  },
  {
    name: "Bergen City Trafikkskole",
    locations: "Vestland",
    offerings: [
      "Klasse B/B automat",
      "Klasse BE/B96 og varebil C1",
      "Personlig oppfølging med fast kjørelærer",
      "Trafikalt grunnkurs med førstehjelp",
    ],
    highlight:
      "Spesialiserer seg på kjøring i kupert bymiljø og tuneller rundt Bergen.",
    website: "https://www.bergencitytrafikkskole.no",
  },
  {
    name: "Nordic Drive Academy",
    locations: "Tromsø, Bodø og Harstad",
    offerings: [
      "Vinteropplæring og glattkjøring",
      "Klasse A/A2 med egen MC-park",
      "Oppfriskningskurs for voksne",
      "Digital teoriundervisning på kveldstid",
    ],
    highlight:
      "Kombinerer digitale teorisamlinger med praktiske økter i nordnorsk klima.",
    website: "https://www.nordicdrive.no",
  },
  {
    name: "Sandnes & Jæren Trafikkskole",
    locations: "Rogaland",
    offerings: [
      "Klasse B og automat med elbil",
      "Klasse C/D for yrkessjåfører",
      "Bedriftsavtaler for lærlinger",
      "Tilrettelagt undervisning på flere språk",
    ],
    highlight:
      "Dekker hele Jæren og tilbyr opplæring for både privat- og yrkessjåfører.",
    website: "https://www.sandnesjaren-trafikkskole.no",
  },
  {
    name: "Kristiansand Trafikkskole",
    locations: "Agder",
    offerings: [
      "Kombinert teori- og praksispakker",
      "AM147 og moped med små klasser",
      "Gratis prøveeksamen til teoriprøven",
      "Helgekurs for trafikalt grunnkurs",
    ],
    highlight:
      "Satser på små grupper og tett dialog mellom elev, foresatte og lærer.",
    website: "https://www.kristiansandtrafikkskole.no",
  },
];

export function DrivingSchoolList() {
  return (
    <section id="trafikkskoler" className="py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Trafikkskoler i Norge
          </p>
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Eksempler på skoler som dekker ulike behov
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Listen viser bredden i tilbudet og brukes til SEO/dokumentasjon. Vi
              henter inn tilbud fra både lokale og nasjonale aktører.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {schools.map((school) => (
            <article
              key={school.name}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {school.name}
                </h3>
                <a
                  href={school.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand-600 hover:text-brand-500"
                >
                  Besøk nettside →
                </a>
              </div>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">
                {school.locations}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {school.offerings.map((offering) => (
                  <li key={offering} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{offering}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-slate-700">
                {school.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DrivingSchoolList;

