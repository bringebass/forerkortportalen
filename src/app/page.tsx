import DrivingSchoolList from "@/components/DrivingSchoolList";
import LeadForm from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import {
  Award,
  Clock3,
  Gauge,
  MapPin,
  ShieldCheck,
  Users2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const heroHighlights = [
  { label: "100% gratis", icon: ShieldCheck, iconColor: "" },
  { label: "Du velger skolen", icon: Users2, iconColor: "" },
  { label: "Helt uforpliktende", icon: Clock3, iconColor: "" },
];

const steps = [
  {
    title: "Del behovet ditt",
    description: "Postnummer, førerkortklasse og ønsket oppstart fylles ut på under ett minutt.",
    icon: MapPin,
  },
  {
    title: "Vi matcher deg",
    description: "Førerkortportalen sender forespørselen til trafikkskoler som dekker området og klassen.",
    icon: Gauge,
  },
  {
    title: "Du velger skole",
    description: "Sammenlign opplegg og pris, still spørsmål og velg den læreren som passer deg best.",
    icon: Award,
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

const valuePoints = [
  {
    title: "Lokale skoler",
    copy: "Vi prioriterer trafikkskoler som kjenner rutevalg og sensorer i din region.",
    icon: MapPin,
    color: "bg-emerald-50 text-emerald-900",
  },
  {
    title: "Trygge prosesser",
    copy: "Samarbeider bare med godkjente trafikkskoler som følger læreplanen til Statens vegvesen.",
    icon: ShieldCheck,
    color: "bg-sky-50 text-sky-900",
  },
  {
    title: "Rask oppstart",
    copy: "Flere skoler tilbyr intensivløp, kveldskurs og fleksible teoripakker.",
    icon: Clock3,
    color: "bg-amber-50 text-amber-900",
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
      <section className="relative overflow-hidden bg-white text-slate-900 lg:bg-slate-900 lg:text-white lg:min-h-[820px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/bg-photo.png"
            alt="Elev i bil som får kjøretime"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>

        <div className="relative z-10 flex min-h-[400px] w-full items-center justify-center px-4 py-4 sm:px-6 sm:py-8 lg:min-h-[820px] lg:px-8 lg:py-28">
          <div className="flex w-full max-w-[1300px] flex-col gap-6 sm:gap-12 lg:flex-row lg:items-center">
            <div className="space-y-4 sm:space-y-6 lg:w-[50%]">
              <h1 className="text-center text-[42px] font-semibold leading-[1.15] text-slate-900 sm:text-left sm:text-[48px] lg:text-[54px] lg:text-white">
                Spar penger og finn riktig trafikkskole for deg
              </h1>
              <p className="text-center text-sm text-slate-600 sm:hidden">
                Helt gratis og uforpliktende
              </p>
              <p className="hidden text-base text-slate-600 sm:block sm:text-lg lg:text-white/85">
                Del behovet ditt én gang – vi kobler deg med kvalitetssikrede
                trafikkskoler i området ditt slik at du kan sammenligne priser,
                pakker og tilgjengelighet.
              </p>
              <div className="hidden flex-wrap gap-3 md:flex">
                {heroHighlights.map(({ label, icon: Icon, iconColor }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm lg:bg-white/90 lg:text-slate-900"
                  >
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[50%]">
              <div className="rounded-[32px] bg-slate-900/70 backdrop-blur-md shadow-none lg:shadow-2xl lg:shadow-slate-900/50">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hvordan" className="bg-white pt-10 pb-16 sm:pt-12 sm:pb-20 font-sans">
        <div className="container mx-auto max-w-[1300px] space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-center mx-auto space-y-3">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              <Sparkles className="mr-2 h-4 w-4" />
              Slik fungerer tjenesten
            </div>
            <h2 className="text-[32px] font-semibold text-slate-900 font-display">
              Tre steg fra behov til konkrete tilbud
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-subtle transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-brand-50 p-3 text-brand-600">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-600">
                    Steg {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 font-display">
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
        <div className="container mx-auto max-w-[1300px] space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">
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
        <div className="container mx-auto max-w-[1300px] grid gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Hvorfor velge en sammenligningstjeneste?
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {valuePoints.map(({ title, copy, icon: Icon, color }) => (
                <article
                  key={title}
                  className={`rounded-3xl border border-white/40 p-5 shadow-subtle ${color}`}
                >
                  <Icon className="mb-3 h-6 w-6 text-current" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm">{copy}</p>
                </article>
              ))}
            </div>
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
        <div className="container mx-auto max-w-4xl rounded-3xl bg-white px-6 py-12 text-center shadow-xl sm:px-10">
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
        <div className="container mx-auto max-w-[1200px] flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-3 text-slate-700">
            <p className="font-semibold">
              Førerkortportalen{" • "}Sammenlign trafikkskoler i Norge
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

