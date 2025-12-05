import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern & informasjonskapsler | Førerkortportalen",
  description: "Personvernpolicy og informasjon om hvordan Førerkortportalen behandler dine personopplysninger og bruker informasjonskapsler (cookies).",
};

export default function PersonvernPage() {
  const lastUpdated = "01.01.2025"; // Update this date when content changes

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">
              Personvern & informasjonskapsler – Førerkortportalen
            </h1>
            <p className="text-sm text-slate-500">Sist oppdatert: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Hvem er vi / behandlingsansvarlig</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">1.1</span> Førerkortportalen er ansvarlig for behandling av personopplysninger som samles inn via vår nettside.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">1.2</span> Dersom du har spørsmål om personvern, ønsker innsyn, sletting eller retting av data, kan du kontakte oss på e-post: help@dbinfo.no — eventuelt via post/organisasjon dersom relevant.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Hvilke opplysninger samler vi inn, og hvordan</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">2.1</span> Når du fyller ut vårt skjema for formidling til trafikkskole, samler vi inn personopplysninger som:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>navn</li>
                  <li>telefonnummer eller e-postadresse</li>
                  <li>postnummer / geografisk område</li>
                  <li>ønsket førerkortklasse / type opplæring</li>
                  <li>eventuell annen informasjon du selv oppgir i skjemaet</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  <span className="font-semibold">2.2</span> Formålet med innsamling er å kunne videresende din forespørsel til relevante trafikkskoler slik at de kan kontakte deg.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">2.3</span> Dersom du samtykker til det (f.eks. ved bruk av informasjonskapsler eller analyseverktøy), kan vi også samle inn teknisk informasjon om hvordan du bruker nettsiden — typisk via cookies og analyseverktøy (se seksjon 5).
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Hvordan vi bruker og eventuelt deler opplysningene</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">3.1</span> Vi videresender kun de opplysninger du har oppgitt i skjemaet til trafikkskoler som kan møte ditt behov. Målet er kun formidling — vi selger ikke dataen til tredjeparter for andre formål.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">3.2</span> Vi bruker ikke dine data til markedsføring eller uavhengig profilering uten ditt eksplisitte samtykke.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">3.3</span> Dersom du ber om sletting av dine data, eller trekker tilbake samtykke, vil vi slette dine opplysninger fra vår database i tråd med gjeldende regelverk.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Dine rettigheter</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed mb-3">Som bruker har du rett til:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold">innsyn</span> — du kan få oversikt over hvilke data vi har lagret om deg</li>
                  <li><span className="font-semibold">korrigering</span> — du kan be om at feilaktige data rettes</li>
                  <li><span className="font-semibold">sletting</span> — du kan be om at dine data slettes</li>
                  <li><span className="font-semibold">begrensning av behandling</span> — du kan be om at databehandling stoppes under visse omstendigheter</li>
                  <li><span className="font-semibold">berettiget klage</span> — om du mener behandling skjer i strid med lov, har du rett til å klage til tilsynsmyndighet</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Cookies og teknisk behandling</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">5.1 Hva er cookies / informasjonskapsler</span>
                </p>
                <p className="leading-relaxed ml-4">
                  Informasjonskapsler (cookies) er små tekstfiler som lagres i nettleseren din når du besøker nettsider. Disse kan hjelpe med å gjøre nettsiden funksjonell, huske preferanser eller samle anonym statistikk.
                </p>
                
                <p className="leading-relaxed mt-4">
                  <span className="font-semibold">5.2 Typer cookies vi kan bruke</span>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><span className="font-semibold">Nødvendige cookies:</span> nødvendig for at nettsiden skal fungere (f.eks. huske at du har lagt inn data i skjemaet før innsending).</li>
                  <li><span className="font-semibold">Funksjonelle cookies / analyse-cookies:</span> for å analysere hvordan nettstedet brukes, forbedre funksjonalitet og brukeropplevelse.</li>
                  <li>(Valgfritt) Eventuelle tredjeparts-cookies — kun dersom du samtykker til det.</li>
                </ul>
                
                <p className="leading-relaxed mt-4">
                  <span className="font-semibold">5.3 Samtykke til cookies</span>
                </p>
                <p className="leading-relaxed ml-4">
                  I tråd med gjeldende lovverk (blant annet ny ekomlov og regler etter 2025) krever vi ditt aktive og informerte samtykke før vi setter cookies som ikke er strengt nødvendige.
                </p>
                
                <p className="leading-relaxed mt-4">
                  <span className="font-semibold">5.4 Hvordan du kan styre cookies</span>
                </p>
                <p className="leading-relaxed ml-4">
                  Du kan til enhver tid presse tilbake samtykke eller endre dine innstillinger via cookie-banner eller via nettleseren din. Du kan også slette cookies — merk at enkelte funksjoner på nettsiden kan slutte å fungere fullt ved deaktivert cookie-bruk.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Lagring og sikkerhet</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">6.1</span> Vi lagrer dine data kun så lenge det er nødvendig for å formidle din forespørsel til trafikkskole, eller så lenge lovverk krever. Når data ikke lenger er nødvendig, slettes den.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">6.2</span> Vi tar rimelige tekniske og organisatoriske tiltak for å sikre at opplysningene dine behandles på en trygg måte, og at uautorisert tilgang, tap eller lekkasjer unngås.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Endringer i policy</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">7.1</span> Vi kan når som helst oppdatere denne personvern- og cookie-policyen, for eksempel ved endringer i lovverk eller i vår tjeneste.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">7.2</span> Ved vesentlige endringer vil vi gjøre dem synlige på nettsiden og oppdatere dato for «Sist oppdatert». Fortsatt bruk etter endring innebærer at du godtar de nye vilkårene.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Kontaktinformasjon</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed mb-3">
                  Har du spørsmål om hvordan vi behandler dine opplysninger, ønsker innsyn eller vil be om sletting, ta kontakt med oss:
                </p>
                <ul className="list-none space-y-1 ml-4">
                  <li><span className="font-semibold">E-post:</span> help@dbinfo.no</li>
                  <li><span className="font-semibold">Firma: </span>DB media AS</li>
                  <li><span className="font-semibold">Organisasjonsnummer: </span>936 445 594</li>
        
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

