import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brukervilkår | Førerkortportalen",
  description: "Brukervilkår for Førerkortportalen. Les om hvordan vi behandler data, dine rettigheter og forholdet mellom bruker og trafikkskoler.",
};

export default function BrukervilkarPage() {
  const lastUpdated = "01.01.2025"; // Update this date when content changes

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-2">
              Brukervilkår for Førerkortportalen
            </h1>
            <p className="text-sm text-slate-500">Sist oppdatert: {lastUpdated}</p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8">
            <p className="text-base text-slate-700 leading-relaxed">
              Ved å bruke Førerkortportalen aksepterer du disse brukervilkårene.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Hvordan Førerkortportalen fungerer</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">1.1</span> Førerkortportalen er en gratis formidlingstjeneste som kobler brukere med trafikkskoler basert på informasjonen du fyller inn i skjemaet.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">1.2</span> Når du sender inn skjemaet ditt, blir henvendelsen videresendt til én eller flere relevante trafikkskoler.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">1.3</span> Trafikkskolene kan kontakte deg via telefon, e-post eller SMS for å gi informasjon eller tilbud. All videre dialog foregår direkte mellom deg og trafikkskolen.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">1.4</span> Dersom det er få eller ingen relevante trafikkskoler i ditt område, vil dette opplyses i bekreftelsen du mottar på e-post.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">1.5</span> Hvis du ønsker å få henvendelsen slettet, kan du kontakte oss for manuell sletting.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Bruk av tjenesten</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">2.1</span> Du plikter å gi korrekte og fullstendige opplysninger i skjemaet.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">2.2</span> Det er forbudt å sende inn falske, misvisende eller uriktige forespørsler.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">2.3</span> Du har ikke lov til å utgi deg for å være en annen person eller sende inn henvendelser på vegne av andre uten samtykke.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">2.4</span> Manipulering, misbruk, tekniske angrep eller forsøk på å skaffe uautorisert tilgang til systemet er ikke tillatt.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">2.5</span> Tjenesten skal ikke brukes til ulovlige formål eller aktiviteter som skader andre brukere, trafikkskoler eller tredjepart.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Forholdet mellom brukeren og trafikkskolene</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">3.1</span> Førerkortportalen fungerer kun som et bindeledd mellom bruker og trafikkskole og leverer ikke kjøreopplæring.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">3.2</span> Vi kan ikke garantere at en trafikkskole vil kontakte deg eller gi et tilbud.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">3.3</span> Alle avtaler, priser, kommunikasjon og eventuelle konflikter håndteres direkte mellom deg og trafikkskolen.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">3.4</span> Førerkortportalen er ikke ansvarlig for kvaliteten på opplæring, gjennomføring, pris, avbestillinger eller andre forhold knyttet til trafikkskoler.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Ansvarsbegrensning</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">4.1</span> Tjenesten leveres «som den er», uten garantier for tilgjengelighet, feilfri drift eller at du mottar tilbud fra en trafikkskole.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">4.2</span> Vi er ikke ansvarlige for direkte eller indirekte økonomisk tap eller datatap som følge av bruk av tjenesten.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">4.3</span> Vi fraskriver oss ansvar for forhold utenfor vår kontroll (force majeure), som tekniske feil hos tredjepart, strømbrudd, nettverksfeil osv.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Immaterielle rettigheter</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">5.1</span> Alt innhold, design, kode og materiale på Førerkortportalen eies av portalens rettighetshaver.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">5.2</span> Du får kun en begrenset rett til personlig og ikke-kommersiell bruk av tjenesten.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">5.3</span> Kopiering, distribusjon, salg eller endringer av innhold er ikke tillatt uten skriftlig godkjenning.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Personvern og databehandling</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">6.1</span> Ved å sende inn skjemaet samtykker du til at vi behandler personopplysninger som navn, telefonnummer, e-post, postnummer og annen informasjon du oppgir.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">6.2</span> Formålet med behandlingen er å videresende henvendelsen din til relevante trafikkskoler.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">6.3</span> Vi deler ikke informasjon med andre enn trafikkskolene som mottar forespørselen din.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">6.4</span> Du kan når som helst be om at dine data slettes fra vår database.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">6.5</span> All databehandling følger gjeldende lovverk, inkludert GDPR.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Kommunikasjon</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">7.1</span> All kommunikasjon med oss skjer elektronisk, primært via e-post.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">7.2</span> Vi sender ikke nyhetsbrev eller markedsføring uten særskilt samtykke.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">7.3</span> Ved feil i kontaktinformasjon kan vi rette opp basert på offentlig tilgjengelige opplysninger for å sikre korrekt utsendelse — men kun for å gjennomføre formålet med tjenesten.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Endringer i tjenesten og vilkår</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">8.1</span> Vi kan når som helst endre, oppdatere eller avvikle tjenesten.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">8.2</span> Vi kan revidere disse vilkårene uten varsel. Ny versjon trer i kraft når den publiseres.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">8.3</span> Ved fortsatt bruk av tjenesten etter endringer aksepterer du de reviderte vilkårene.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Oppsigelse og sletting</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">9.1</span> Du kan når som helst be om sletting av dine data eller stoppe bruken av tjenesten.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">9.2</span> Vi kan sperre eller stenge for brukere som bryter vilkårene.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">9.3</span> Ved sletting fjernes personopplysninger i henhold til vår personvernpolicy.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Lovvalg og tvisteløsning</h2>
              
              <div className="space-y-3 text-slate-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">10.1</span> Brukervilkårene er underlagt norsk lov.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">10.2</span> Tvister søkes løst i minnelighet.
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">10.3</span> Dersom dette ikke lykkes, behandles saken i Oslo tingrett, med mindre annet følger av ufravikelig lov.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

