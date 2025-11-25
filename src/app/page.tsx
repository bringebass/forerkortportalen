import DrivingSchoolList from "@/components/DrivingSchoolList";
import LeadForm from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";
import Image from "next/image";

const steps = [
  {
    title: "Del behovet ditt",
    description: "Postnummer, førerkortklasse og ønsket oppstart fylles ut på under ett minutt.",
  },
  {
    title: "Vi matcher deg",
    description: "Førerkortportalen sender forespørselen til trafikkskoler som dekker området og klassen.",
  },
  {
    title: "Du velger skole",
    description: "Sammenlign opplegg og pris, still spørsmål og velg den læreren som passer deg best.",
  },
];

const licenseInfo = [
  {
    title: "Klasse B – personbil",
    content:
      "Standard lappen opptil 3 500 kg. Inkluderer sikkerhetskurs på bane og i trafikken før oppkjøring.",
    bullets: [
      "Velg mellom manuell og automat – begge deler gir tilgang til intensivløp.",
      "Trafikalt grunnkurs må være fullført før øvingskjøring.",
    ],
  },
  {
    title: "Klasse BE/B96 – tilhenger",
    content:
      "Gir mulighet til å trekke tyngre hengere. Opplæringen fokuserer på last, kobling og sikker rygging.",
    bullets: [
      "B96 krever ikke oppkjøring, men obligatorisk kurs.",
      "BE avsluttes med førerprøve hos Statens vegvesen.",
    ],
  },
  {
    title: "MC-klasser A/A2/A1",
    content:
      "Starter med obligatorisk teoridel (3 timer) og fortsetter med kjøreteknikk, sikkerhetskurs bane og trafikk.",
    bullets: [
      "Over 25 år eller allerede bilfører? Da kan du hoppe rett til MC-kurset.",
      "Flere skoler tilbyr overgangspakker fra A2 til A.",
    ],
  },
];

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

const siteUrl = "https://forerkortportalen.no";
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Førerkortportalen",
  url: siteUrl,
  description:
    "Førerkortportalen hjelper deg å sammenligne trafikkskoler og få tilbud på føreropplæring i Norge.",
  potentialAction: {
    "@type": "ContactAction",
    target: `${siteUrl}#skjema`,
    name: "Send inn forespørsel til trafikkskoler",
  },
};

export default function Home() {
  return (
    <main>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Navbar />
      <section className="relative flex min-h-[600px] items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-photo.png"
            alt=""
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container relative z-10 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* Left side - Content */}
            <div className="space-y-6 text-white">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Sammenlign tilbud fra flere trafikkskoler
              </h1>
              <p className="hidden text-lg text-white/90 sm:block sm:text-xl">
                Få uforpliktende tilbud fra kvalitetssikrede trafikkskoler i ditt
                område. Ett skjema gir deg oversikt over flere alternativer.
              </p>
              <div className="hidden flex-wrap gap-3 sm:flex">
                {["100% gratis", "Uforpliktende", "Tar under 1 minutt"].map(
                  (label) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {label}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right side - Form */}
            <div
              id="skjema"
              className="mx-auto w-full max-w-[95vw] sm:max-w-md lg:mx-0"
            >
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section id="hvordan" className="bg-white py-16 sm:py-20">
        <div className="container space-y-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Slik fungerer det
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Tre steg fra behov til konkrete tilbud
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
                  Steg {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DrivingSchoolList />

      <section id="klasser" className="bg-slate-50 py-16 sm:py-20">
        <div className="container space-y-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
              Førerkortklasser
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Kort om de vanligste klassene
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {licenseInfo.map((license) => (
              <article
                key={license.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {license.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{license.content}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {license.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-16">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Alt på ett sted
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              Hvorfor velge en sammenligningstjeneste?
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-brand-600">•</span>
                <span>
                  Spar tid ved å sende én forespørsel fremfor å ringe flere
                  trafikkskoler manuelt.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">•</span>
                <span>
                  Få innsyn i hvilke pakker som inkluderer intensivløp, banekurs,
                  teoristøtte og eventuelle rabatter.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-600">•</span>
                <span>
                  Trafikkskolene forplikter seg til å følge læreplanen til
                  Statens vegvesen – du får dokumentert kvalitet.
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-card">
            <h3 className="text-2xl font-semibold text-slate-900">
              Ofte stilte spørsmål
            </h3>
            <div className="space-y-4 text-sm">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <summary className="cursor-pointer text-base font-semibold text-slate-900 marker:hidden">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="container rounded-3xl bg-white px-6 py-12 text-center shadow-xl sm:px-10">
          <h2 className="text-3xl font-semibold text-slate-900">
            Klar for å motta tilbud?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Åpne skjemaet øverst og send inn på under ett minutt – helt gratis og
            uforpliktende.
          </p>
          <a
            href="#skjema"
            className="mt-6 inline-flex items-center rounded-full bg-[#00895F] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#0A6F50]"
          >
            Start skjema
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-white py-8 text-sm text-slate-500">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-slate-900">
            <Image
              src="/favicon.png"
              alt="Førerkortportalen ikon"
              width={30}
              height={30}
              className="rounded-full"
            />
            <p className="font-semibold">
              Førerkortportalen • Sammenlign trafikkskoler i Norge
            </p>
          </div>
          <p>
            © {new Date().getFullYear()} Førerkortportalen. Tjenesten er
            uforpliktende, og data lagres sikkert i norsk sky.
          </p>
        </div>
      </footer>
    </main>
  );
}
