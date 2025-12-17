"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { Calendar, Clock, ArrowLeft, Share2, List, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import { useMemo, useState, useEffect, use } from "react";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const articles: Record<string, {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  image: string;
}> = {
  "1": {
    id: 1,
    title: "Billigste måte å ta førerkort på – myter vs. fakta (2025-guide)",
    excerpt: "En ærlig guide som rydder opp i myter om billig førerkort. Lær hva som faktisk sparer deg penger og hva som bare høres lure ut.",
    date: "20. januar 2025",
    readTime: "10 min lesing",
    category: "Guider",
    image: "/Article-photo1.png",
    content: `
      <p class="lead">Alle vil ha førerkortet billigst mulig — men det finnes mange myter, rare tips og "smarte snarveier" der ute som gjør det vanskelig å vite hva som faktisk lønner seg. Noen råd kan spare deg tusenlapper. Andre gjør det bare dyrere, selv om de høres lure ut.</p>
      
      <p>Her får du en ærlig, forståelig og oppdatert guide som rydder opp i alt dette.</p>
      
      <h2>Myte 1: "Den billigste kjøreskolen er alltid det beste valget"</h2>
      <p>Du har sikkert sett kjøretimer til 699 kr, 749 kr, 799 kr og så videre. Fristende, selvfølgelig.</p>
      
      <p>Men her er den lille fellen:</p>
      
      <p><strong>En billig time er ikke automatisk en billig opplæring.</strong></p>
      
      <h3>Hvorfor?</h3>
      <ul>
        <li>En god trafikklærer gir deg rask progresjon.</li>
        <li>En dårlig (eller stresset) lærer kan gjøre at du trenger 5–10 ekstra kjøretimer.</li>
        <li>Hvis én kjøretime koster 850 kr, koster 10 ekstra timer plutselig 8500 kr.</li>
      </ul>
      
      <p><strong>Billig time → dyrt førerkort.</strong></p>
      <p><strong>Dyrere time → billigere totalpris.</strong></p>
      
      <p>Det er her mange blir lurt.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> En god trafikklærer som gir deg rask progresjon kan spare deg for tusenlapper. Fokuser på kvalitet, ikke bare lavest pris per time.</p>
      </blockquote>
      
      <h2>Myte 2: "Jeg sparer masse hvis jeg tar nesten alt privat"</h2>
      <p>Ja og nei.</p>
      
      <p>Privat øvelseskjøring er fantastisk for å trene mengde.</p>
      
      <p>Men hvis du trener feil, må du fortsatt kjøpe mange timer hos skolen.</p>
      
      <h3>Når privat øvelseskjøring faktisk sparer deg penger:</h3>
      <ul>
        <li>Du trener riktig type øvelser (ikke bare "kjøre en tur")</li>
        <li>Ledsageren vet hva du skal øve på</li>
        <li>Dere følger trinnmodellen trafikkskolene bruker</li>
      </ul>
      
      <h3>Når privat kjøring blir dyrt:</h3>
      <ul>
        <li>Du lærer deg dårlige vaner</li>
        <li>Lederen er usikker og gir uklare beskjeder</li>
        <li>Dere øver på helt feil ting</li>
      </ul>
      
      <p>Da må læreren "rense opp" i vanene dine — og det tar tid.</p>
      
      <h2>Myte 3: "Startpakker er alltid billigst"</h2>
      <p>Det kommer helt an på pakken.</p>
      
      <h3>Pakker lønner seg hvis:</h3>
      <ul>
        <li>Du faktisk bruker alle timene</li>
        <li>Du trenger så mange timer som pakken inneholder</li>
        <li>Prisen per time blir lavere enn enkelttimer</li>
      </ul>
      
      <h3>Pakker blir dyrt hvis:</h3>
      <ul>
        <li>Du ender opp med å kjøpe flere timer etterpå</li>
        <li>Timer i pakken er for korte</li>
        <li>Skolen tilbyr masse "fyllstoff" du egentlig ikke trenger</li>
      </ul>
      
      <p>Noen startpakker virker billige — men bare fordi det står Pakken koster 4990,-.</p>
      
      <p>Hvis du kun ender opp med å bruke 3 av timene, har du betalt over 1500 kr per time.</p>
      
      <h2>Myte 4: "Intensivkurs er den billigste veien"</h2>
      <p>Nei, ikke nødvendigvis.</p>
      
      <p>Intensivkurs er raskest, men ofte ikke billigst. Grunnen er enkel:</p>
      <ul>
        <li>Timene er pakket tett</li>
        <li>Du rekker ikke modning mellom øktene</li>
        <li>Du kan ende opp med flere ekstra timer etter kurset</li>
        <li>Mange stryker fordi de får for lite mengdetrening på egen hånd</li>
      </ul>
      
      <p>Intensivkurs kan være en god løsning for folk som har lite tid.</p>
      
      <p>Men billigst? Som regel ikke.</p>
      
      <h2>Myte 5: "Det er bare å pugge teorien på YouTube"</h2>
      <p>Teori på YouTube kan være gull — men den er ofte utdatert, mangelfull eller basert på andre land.</p>
      
      <p>Hvis du stryker på teorien flere ganger betaler du:</p>
      <ul>
        <li>for nye prøver</li>
        <li>for utsatt oppkjøring</li>
        <li>for flere kjøretimer mens du venter</li>
      </ul>
      
      <p>Teorien er faktisk en av de tingene som påvirker totalprisen mest.</p>
      
      <p><strong>Bruk kvalitet:</strong> Teoritentamen, Testen.no, Prøve.no.</p>
      
      <p>Billig teori øker som regel totalprisen.</p>
      
      <h2>Fakta: Dette er faktisk den billigste måten å ta førerkort på</h2>
      <p>Her er sannheten – basert på tall fra kjøreskoler, sensorer og elever:</p>
      
      <h3>1. Øv riktig privat (ikke bare mye)</h3>
      <p>Privat trening er gratis. Men den må være strukturert.</p>
      
      <p>Lag en plan etter trinnmodellen.</p>
      
      <h3>2. Ta en vurderingstime først</h3>
      <p>Ikke kjøp pakker før du vet nivået ditt.</p>
      
      <p>Én vurderingstime gjør at du slipper å kjøpe feil produkter.</p>
      
      <h3>3. Velg en kvalitetslærer – ikke nødvendigvis den billigste timen</h3>
      <p>Du sparer på rask progresjon, ikke på lav timepris.</p>
      
      <h3>4. Lær teorien skikkelig før du kjører masse timer</h3>
      <p>Gode teorikunnskaper = færre kjøretimer = lavere pris.</p>
      
      <h3>5. Kjøp pakker etter at lærer har vurdert deg</h3>
      <p>Da treffer du behovet ditt bedre.</p>
      
      <h3>6. Gjør alt du kan for å bestå teoriprøven og oppkjøringen på første forsøk</h3>
      <p>Én stryk koster fort flere tusen kroner.</p>
      
      <h2>Kort sagt: Mytene høres lure ut. Fakta sparer deg penger.</h2>
      <p>Den billigste veien er en kombinasjon av:</p>
      <ul>
        <li>riktig lærer</li>
        <li>riktig mengdetrening</li>
        <li>målrettet teori</li>
        <li>gode vaner fra start</li>
      </ul>
      
      <p>Hvis du får kontroll på disse fire punktene, faller kostnadene dramatisk.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo1.png" alt="Billigste måte å ta førerkort på" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Den billigste veien til førerkort handler om riktig planlegging og gode valg, ikke bare lavest pris per time.
        </figcaption>
      </figure>
      
      <blockquote>
        <p><strong>Kort sagt:</strong> Den billigste måten å ta førerkort på er en kombinasjon av riktig lærer, riktig mengdetrening, målrettet teori og gode vaner fra start. Mytene høres lure ut, men fakta sparer deg penger.</p>
      </blockquote>
      
      <h2>Vil du sammenligne kjøreskoler i ditt område?</h2>
      <p>Fyll ut skjemaet – så finner vi de rimeligste skolene med best rykte der du bor.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    date: "10. januar 2024",
    readTime: "15 min lesing",
    category: "Førerkortklasser",
    image: "/Article-photo2.png",
    content: `
      <p class="lead">Førerkort klasse B er det mest vanlige førerkortet i Norge og gir deg rett til å kjøre personbil. Dette er førerkortet de fleste tar når de skal lære å kjøre bil. Denne omfattende guiden tar deg gjennom alt du trenger å vite om førerkort klasse B – fra krav og prosess til kostnader og valg mellom automat og manuell.</p>

      <h2>Hva er førerkort klasse B?</h2>
      <p>Førerkort klasse B er det standard førerkortet for personbiler i Norge. Med dette førerkortet kan du kjøre personbil med en totalvekt på inntil 3500 kg. Dette dekker de fleste vanlige personbiler på norske veier.</p>
      
      <h3>Hva kan du kjøre med klasse B?</h3>
      <p>Med førerkort klasse B kan du:</p>
      <ul>
        <li>Kjøre personbil med totalvekt inntil 3500 kg</li>
        <li>Kjøre bil med tilhenger hvis totalvekten ikke overstiger 3500 kg</li>
        <li>Kjøre tilhenger som veier maks 750 kg</li>
        <li>Kjøre opptil 8 personer inkludert sjåfør</li>
      </ul>
      
      <blockquote>
        <p><strong>Viktig:</strong> Klasse B gir deg ikke rett til å kjøre motorsykkel (klasse A), lastebil (klasse C) eller buss (klasse D). For disse kjøretøyene trenger du spesialiserte førerkortklasser.</p>
      </blockquote>

      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo2.png" alt="Førerkort klasse B – personbil" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Klasse B dekker de fleste vanlige personbiler opptil 3 500 kg totalvekt.
        </figcaption>
      </figure>
      
      <h2>Krav for å ta førerkort klasse B</h2>
      <p>Før du kan begynne opplæringen for førerkort klasse B, må du oppfylle visse grunnleggende krav. Disse er satt av Statens vegvesen for å sikre at alle som tar førerkort har nødvendig forutsetninger.</p>
      
      <h3>Alderskrav</h3>
      <p>Du må være minst 18 år for å begynne opplæringen for førerkort klasse B. Dette er et absolutt krav, og du kan ikke starte før du har fylt 18 år.</p>
      
      <h3>Obligatoriske steg</h3>
      <p>For å få førerkort klasse B må du gjennomføre følgende steg i rekkefølge:</p>
      <ol>
        <li><strong>Trafikalt grunnkurs:</strong> 19 timer obligatorisk teoriundervisning</li>
        <li><strong>Teoriprøve:</strong> Bestå teoriprøven med minst 38 av 45 riktige svar</li>
        <li><strong>Kjøreopplæring:</strong> Minimum 13 kjøretimer á 45 minutter</li>
        <li><strong>Førerprøve:</strong> Bestå praktisk oppkjøring</li>
      </ol>
      
      <p><em>Hvert steg må fullføres før du kan gå videre til neste. Det er ikke mulig å hoppe over steg eller gjøre dem i annen rekkefølge.</em></p>
      
      <h2>1. Trafikalt grunnkurs – teoriundervisning</h2>
      <p>Trafikalt grunnkurs er det første steget i prosessen. Dette er en obligatorisk teoriundervisning på 19 timer som må fullføres før du kan ta teoriprøven.</p>
      
      <h3>Hva lærer du på trafikalt grunnkurs?</h3>
      <p>Kurset dekker fire hovedområder:</p>
      <ul>
        <li><strong>Trafikkregler:</strong> Veiregler, skilt, forkjørsrett, og hvordan du skal oppføre deg i trafikken</li>
        <li><strong>Miljø:</strong> Miljøvennlig kjøring, utslipp, og miljøpåvirkning fra bilkjøring</li>
        <li><strong>Sikkerhet:</strong> Trafikksikkerhet, ulykkesforebygging, og hvordan du unngår farlige situasjoner</li>
        <li><strong>Kjøretøyteknikk:</strong> Hvordan bilen fungerer, vedlikehold, og grunnleggende mekanikk</li>
      </ul>
      
      <h3>Hvor tar du trafikalt grunnkurs?</h3>
      <p>De fleste trafikkskoler tilbyr trafikalt grunnkurs som en del av opplæringen. Du kan også ta kurset hos andre leverandører, men det er ofte praktisk å ta det hos samme skole som gir deg kjøreopplæringen.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Mange trafikkskoler inkluderer trafikalt grunnkurs i totalpakken sin. Sjekk om dette er inkludert når du sammenligner tilbud.</p>
      </blockquote>
      
      <h3>Varighet og opplegg</h3>
      <p>Trafikalt grunnkurs kan tas på ulike måter:</p>
      <ul>
        <li><strong>Intensivkurs:</strong> Alle 19 timene på 2-3 dager</li>
        <li><strong>Kveldskurs:</strong> Spredt over flere uker med timer på kvelden</li>
        <li><strong>Helgekurs:</strong> Timer på lørdager og søndager</li>
        <li><strong>Online/Blended:</strong> Kombinasjon av online og fysisk undervisning</li>
      </ul>
      
      <h2>2. Teoriprøven – test din kunnskap</h2>
      <p>Etter å ha fullført trafikalt grunnkurs kan du ta teoriprøven. Dette er en datamaskinbasert prøve som tester din kunnskap om trafikkregler, sikkerhet og kjøretøyteknikk.</p>
      
      <h3>Hvordan fungerer teoriprøven?</h3>
      <p>Teoriprøven består av:</p>
      <ul>
        <li><strong>45 spørsmål</strong> totalt</li>
        <li><strong>45 minutter</strong> på å svare</li>
        <li><strong>Minst 38 riktige</strong> for å bestå (84% riktig)</li>
        <li>Flervalgsspørsmål med bilder og situasjoner</li>
      </ul>
      
      <h3>Hvordan består du teoriprøven?</h3>
      <p>For å bestå teoriprøven bør du:</p>
      <ul>
        <li><strong>Lese læreboken grundig:</strong> Gjennomgå alle kapitler flere ganger</li>
        <li><strong>Øve med prøveeksamen:</strong> Bruk apper eller nettsider med prøveeksamener</li>
        <li><strong>Fokusere på vanskelige områder:</strong> Identifiser hvor du sliter og øv ekstra</li>
        <li><strong>Ta deg tid:</strong> Les spørsmålene nøye og tenk gjennom svarene</li>
      </ul>
      
      <p><em>Mange elever bruker 2-4 uker på forberedelse etter trafikalt grunnkurs. Ta den tiden du trenger.</em></p>
      
      <h3>Gyldighetstid</h3>
      <p>Teoriprøven må bestås innen 3 år etter at trafikalt grunnkurs er fullført. Hvis du ikke består innen denne tiden, må du ta trafikalt grunnkurs på nytt.</p>
      
      <h2>3. Kjøreopplæring – lær å kjøre</h2>
      <p>Etter å ha bestått teoriprøven kan du begynne på kjøreopplæringen. Dette er det praktiske steget der du faktisk lærer å kjøre bil.</p>
      
      <h3>Obligatorisk minimum</h3>
      <p>Du må ta minimum 13 kjøretimer á 45 minutter. Disse timene må dekke:</p>
      <ul>
        <li><strong>Kjøring i bytrafikk:</strong> Bygater, kryss, rundkjøringer, parkering</li>
        <li><strong>Kjøring på landevei:</strong> Fartsgrenser, forbikjøring, møting</li>
        <li><strong>Kjøring på motorvei:</strong> Innkjøring, kjøring i høy hastighet, filbytte</li>
        <li><strong>Kjøring i mørke:</strong> Bruk av lys, kjøring i mørketid</li>
      </ul>
      
      <h3>Hvor mange timer trenger du?</h3>
      <p>Selv om minimum er 13 timer, trenger de fleste flere timer for å bli trygge nok til førerprøven. Dette er helt normalt og forventet.</p>
      
      <blockquote>
        <p><strong>Statistikk:</strong> Gjennomsnittlig antall kjøretimer i Norge er rundt 20-30 timer. Noen trenger færre, andre trenger flere. Det viktigste er at du føler deg trygg bak rattet.</p>
      </blockquote>
      
      <h3>Faktorer som påvirker antall timer</h3>
      <p>Flere faktorer kan påvirke hvor mange kjøretimer du trenger:</p>
      <ul>
        <li><strong>Erfaring:</strong> Har du kjørt med privat person før?</li>
        <li><strong>Selvtillit:</strong> Hvor trygg føler du deg bak rattet?</li>
        <li><strong>Læringstempo:</strong> Alle lærer i sitt eget tempo</li>
        <li><strong>Kompleksitet i området:</strong> Er det mye trafikk der du skal kjøre?</li>
        <li><strong>Type girkasse:</strong> Manuell tar ofte litt lengre tid å lære</li>
      </ul>
      
      <h3>Kjøring med privat person</h3>
      <p>Du kan også kjøre med en privat person (venn eller familie) som har minst 5 års erfaring. Dette kan redusere kostnadene betydelig, men husk:</p>
      <ul>
        <li>Du må fortsatt ta minimum antall obligatoriske kjøretimer hos trafikkskole</li>
        <li>Den private personen må ha gyldig førerkort og være minst 25 år</li>
        <li>Du må ha en "L"-skilt på bilen</li>
        <li>Du kan ikke kjøre alene før du har førerkort</li>
      </ul>
      
      <h2>4. Førerprøven – det siste steget</h2>
      <p>Førerprøven, også kalt oppkjøring, er det siste steget før du får førerkortet. Dette er en praktisk prøve der du demonstrerer at du kan kjøre trygt og behersker bilen.</p>
      
      <h3>Hvordan fungerer førerprøven?</h3>
      <p>Førerprøven:</p>
      <ul>
        <li>Varer ca. 45-60 minutter</li>
        <li>Testes av en sensor fra Statens vegvesen</li>
        <li>Inkluderer ulike trafikksituasjoner og manøvrer</li>
        <li>Du får umiddelbar tilbakemelding på om du bestod</li>
      </ul>
      
      <h3>Hva ser sensoren etter?</h3>
      <p>Sensoren vurderer:</p>
      <ul>
        <li><strong>Sikkerhet:</strong> Kjører du trygt og forsvarlig?</li>
        <li><strong>Kjøreteknikk:</strong> Behersker du bilen og kjøretøyet?</li>
        <li><strong>Trafikkforståelse:</strong> Forstår du trafikksituasjoner og reagerer riktig?</li>
        <li><strong>Observasjon:</strong> Ser du deg rundt og sjekker blindsoner?</li>
        <li><strong>Fartsanpassing:</strong> Holder du riktig hastighet?</li>
      </ul>
      
      <h3>Gyldighetstid</h3>
      <p>Førerprøven må bestås innen 12 måneder etter at du bestod teoriprøven. Hvis du ikke består innen denne tiden, må du ta teoriprøven på nytt.</p>
      
      <h2>Kostnader ved å ta førerkort klasse B</h2>
      <p>Å ta førerkort klasse B er en betydelig investering. Det er viktig å ha realistiske forventninger til kostnadene og budsjettere riktig.</p>
      
      <h3>Totale kostnader</h3>
      <p>Totale kostnader varierer mye, men du bør regne med å betale mellom 25 000 og 50 000 kroner alt inkludert. Dette avhenger av:</p>
      <ul>
        <li>Antall kjøretimer du trenger</li>
        <li>Lokasjon (storbyer er ofte dyrere)</li>
        <li>Type kurs (intensiv vs. tradisjonell)</li>
        <li>Om du trenger å ta prøver på nytt</li>
      </ul>
      
      <h3>Kostnadsoversikt</h3>
      <p>Typiske kostnader inkluderer:</p>
      <ul>
        <li><strong>Trafikalt grunnkurs:</strong> 3 000 - 5 000 kr</li>
        <li><strong>Teoriprøve:</strong> 550 kr</li>
        <li><strong>Kjøretimer:</strong> 15 000 - 35 000 kr (avhengig av antall timer)</li>
        <li><strong>Førerprøve:</strong> 1 890 kr</li>
        <li><strong>Utstedelse av førerkort:</strong> ca. 500 kr</li>
        <li><strong>Lærebøker og materielle:</strong> 500 - 1 000 kr</li>
      </ul>
      
      <h2>Klasse B automat vs. manuell – hvilket skal du velge?</h2>
      <p>Et viktig valg du må ta er om du skal ta førerkort på automat eller manuell girkasse. Dette valget påvirker både opplæringen og hva du kan kjøre etterpå.</p>
      
      <h3>Klasse B automat</h3>
      <p>Førerkort på automat gir deg rett til å kjøre automatbiler. Dette er ofte raskere å lære siden du ikke trenger å tenke på giring.</p>
      
      <p><strong>Fordeler:</strong></p>
      <ul>
        <li>Raskere å lære (færre kjøretimer ofte nødvendig)</li>
        <li>Enklere å fokusere på trafikk når du ikke trenger å tenke på giring</li>
        <li>Mindre risiko for å stoppe motoren</li>
        <li>Moderne biler er ofte automat</li>
      </ul>
      
      <p><strong>Ulemper:</strong></p>
      <ul>
        <li>Gir kun rett til å kjøre automatbiler</li>
        <li>Kan være begrensende hvis du skal leie eller låne bil</li>
        <li>Færre biler å velge mellom i bruktbilmarkedet</li>
      </ul>
      
      <h3>Klasse B manuell</h3>
      <p>Førerkort på manuell gir deg rett til å kjøre både manuelle og automatbiler. Dette gir deg størst fleksibilitet.</p>
      
      <p><strong>Fordeler:</strong></p>
      <ul>
        <li>Gir rett til å kjøre både manuelle og automatbiler</li>
        <li>Større utvalg i bruktbilmarkedet</li>
        <li>Mer fleksibilitet ved leie eller lån av bil</li>
        <li>Ofte billigere biler i bruktmarkedet</li>
      </ul>
      
      <p><strong>Ulemper:</strong></p>
      <ul>
        <li>Tar litt lengre tid å lære</li>
        <li>Kan kreve flere kjøretimer</li>
        <li>Mer komplekst å mestre giring og kobling</li>
      </ul>
      
      <blockquote>
        <p><strong>Anbefaling:</strong> Hvis du er usikker, velg manuell. Det gir deg størst fleksibilitet, og du kan alltid kjøre automatbiler med manuelt førerkort. Det motsatte gjelder ikke.</p>
      </blockquote>
      
      <h2>Få tilbud fra flere trafikkskoler</h2>
      <p>Når du skal ta førerkort klasse B, er det viktig å finne en trafikkskole som passer deg. Førerkortportalen gjør det enkelt å sammenligne tilbud fra flere skoler.</p>
      
      <h3>Hvordan fungerer det?</h3>
      <p>Ved å fylle ut skjemaet vårt kan du:</p>
      <ul>
        <li>Få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område</li>
        <li>Sammenligne priser, pakker og tilgjengelighet</li>
        <li>Se hvilke skoler som tilbyr intensivkurs, kveldskurs eller andre løsninger</li>
        <li>Få uforpliktende tilbud du kan vurdere i din egen tid</li>
      </ul>
      
      <p><em>Tjenesten er helt gratis og uforpliktende. Du velger selv om du vil takke ja til et tilbud.</em></p>
      
      <h2>Konklusjon</h2>
      <p>Førerkort klasse B er det mest vanlige førerkortet i Norge og gir deg frihet til å kjøre personbil. Prosessen består av fire hovedsteg: trafikalt grunnkurs, teoriprøve, kjøreopplæring og førerprøve.</p>
      
      <p>Ta deg tid til å forberede deg grundig på hvert steg, og ikke nøl med å ta flere kjøretimer hvis du trenger det. Det viktigste er at du føler deg trygg bak rattet når du skal ta førerprøven.</p>
      
      <p>Ved å bruke Førerkortportalen kan du enkelt finne og sammenligne trafikkskoler som tilbyr opplæring i klasse B. Dette gjør det lettere å velge en skole som passer din situasjon, behov og budsjett.</p>
    `,
  },
  "3": {
    id: 3,
    title: "Intensivkurs vs. vanlig førerkortkurs",
    excerpt: "Skal du velge intensivkurs eller et mer tradisjonelt opplegg? Vi sammenligner fordelene ved begge.",
    date: "5. januar 2024",
    readTime: "6 min lesing",
    category: "Kursformer",
    image: "/Article-photo3.png",
    content: `
      <p class="lead">Når du skal ta førerkort har du to hovedalternativer: et intensivt løp eller et mer tradisjonelt opplegg. Begge har fordeler og ulemper, og det riktige valget avhenger av tid, budsjett, læringsstil og mål. Denne guiden gir deg en praktisk beslutningsramme, konkrete eksempler og sjekklister.</p>
      
      <h2>Intensivkurs – når du vil bli ferdig raskt</h2>
      <p>Et intensivkurs komprimerer hele løpet til 2–4 uker med teori og kjøring nesten hver dag. Det krever fokus, men kan være gull verdt hvis du har en tidsfrist (for eksempel ny jobb eller flytting).</p>
      
      <h3>Fordeler med intensivkurs</h3>
      <ul>
        <li><strong>Rask progresjon:</strong> Du holder momentet oppe og blir trygg raskt.</li>
        <li><strong>Forutsigbar tidsplan:</strong> Alt er satt opp på forhånd.</li>
        <li><strong>Mindre glemsel:</strong> Kortere pauser gjør at du husker mer fra time til time.</li>
        <li><strong>Motiverende:</strong> Du ser tydelig fremgang hver uke.</li>
      </ul>
      
      <h3>Ulemper med intensivkurs</h3>
      <ul>
        <li><strong>Krever fri:</strong> Du må ofte sette av hele dager.</li>
        <li><strong>Mentalt krevende:</strong> Mange timer på kort tid kan være slitsomt.</li>
        <li><strong>Potensielt dyrere:</strong> Pakkene kan koste mer, og om du trenger ekstra timer kommer de på toppen.</li>
        <li><strong>Lite fleksibilitet:</strong> Vanskeligere å flytte timer hvis noe dukker opp.</li>
      </ul>
      
      <h3>Passer intensivkurs for deg?</h3>
      <ul>
        <li>Du har en klar deadline og kan sette av 2–4 uker.</li>
        <li>Du liker å lære raskt og tåler høyt tempo.</li>
        <li>Du har økonomisk buffer til en pakkepris og eventuelle ekstratimer.</li>
        <li>Du kan møte uthvilt og fokusert hver dag.</li>
      </ul>
      
      <blockquote>
        <p><strong>Tips:</strong> Intensivkurs passer best hvis du har tid til å sette av 2-4 uker, tåler høyt tempo og har en klar deadline. Hvis du har fulltidsjobb eller trenger fleksibilitet, kan tradisjonelt opplegg eller hybrid være bedre.</p>
      </blockquote>
      
      <figure class="my-12 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo3.png" alt="Intensivkurs vs. tradisjonelt førerkortløp" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Intensivløp passer når tiden er knapp; tradisjonelt løp gir fleksibilitet.
        </figcaption>
      </figure>

      <h2>Tradisjonelt løp – når du vil ha fleksibilitet</h2>
      <p>Et tradisjonelt opplegg går ofte over 3–6 måneder med 1–2 kjøretimer i uken. Du får tid til å øve privat, fordøye stoffet og spre kostnadene.</p>
      
      <h3>Fordeler med tradisjonelt opplegg</h3>
      <ul>
        <li><strong>Fleksibelt:</strong> Lettere å kombinere med jobb, studier og familie.</li>
        <li><strong>Bedre innlæring for mange:</strong> Tid til å øve mellom timene.</li>
        <li><strong>Økonomisk forutsigbart:</strong> Du kan betale etter hvert.</li>
        <li><strong>Mindre stress:</strong> Lavere tempo gir rom for refleksjon.</li>
      </ul>
      
      <h3>Ulemper med tradisjonelt opplegg</h3>
      <ul>
        <li><strong>Takes longer:</strong> Du må holde motivasjonen oppe over tid.</li>
        <li><strong>Kontinuitet:</strong> Lange pauser kan gjøre at du glemmer ferdigheter.</li>
        <li><strong>Flere timebestillinger:</strong> Du må løpende finne tidspunkt som passer.</li>
      </ul>
      
      <h3>Passer tradisjonelt opplegg for deg?</h3>
      <ul>
        <li>Du har en travel kalender og trenger fleksibilitet.</li>
        <li>Du lærer best med tid til repetisjon.</li>
        <li>Du vil spre kostnadene over flere måneder.</li>
        <li>Du har mulighet til å øve privat mellom timene.</li>
      </ul>
      
      <h2>Hybrid og kveldskurs – best av begge verdener</h2>
      <p>Mange skoler tilbyr kveldskurs eller komprimerte perioder kombinert med roligere uker. Det kan gi tempo uten å kreve full permisjon.</p>
      
      <h3>Slik ser et hybridløp ut</h3>
      <ul>
        <li>Teori på kveldstid (online eller fysisk).</li>
        <li>2–3 intensive uker med kjøring når det passer.</li>
        <li>Planlagte pauser for å øve privat.</li>
      </ul>
      
      <h2>Beslutningsguide – 6 raske spørsmål</h2>
      <ul>
        <li><strong>Deadline?</strong> Trenger du førerkort innen 1–2 måneder? Velg intensiv.</li>
        <li><strong>Hverdag?</strong> Fulltidsjobb eller studier? Velg tradisjonelt eller hybrid.</li>
        <li><strong>Budsjett?</strong> Stramt budsjett? Velg tradisjonelt og betal underveis.</li>
        <li><strong>Læringsstil?</strong> Liker du høyt tempo? Velg intensiv eller hybrid.</li>
        <li><strong>Øvelse privat?</strong> Har du øvingspartner? Tradisjonelt kan da bli rimeligere.</li>
        <li><strong>Stressnivå?</strong> Blir du lett stresset? Velg tradisjonelt/hybrid.</li>
      </ul>
      
      <h2>Ekstra elementer som påvirker valget</h2>
      <h3>Tilgang til bil og øvingspartner</h3>
      <p>Har du en øvingspartner (over 25 år med 5 års førerrett)? Det kan redusere antall skoletimer, særlig i tradisjonelt løp.</p>
      
      <h3>Sesong og vær</h3>
      <p>Vinterkjøring kan være krevende. Et intensivkurs midt i vinteren gir verdifull erfaring, men også høyere belastning. Et tradisjonelt løp kan spre vinterkjøring over flere uker.</p>
      
      <h3>By vs. landevei</h3>
      <p>Kjører du mest i by, kan intensivkurs gi mange repetisjoner på by-scenarier. På landet kan fleksible løp med flere veityper være nyttig.</p>
      
      <h2>Case-eksempler</h2>
      <h3>Case 1: Student med sommerferie</h3>
      <p>Har 4 ukers ferie og vil bli ferdig raskt. Velger intensivkurs med tett oppfølging og planlagt oppkjøring i slutten av perioden.</p>
      
      <h3>Case 2: Pendler med fulltidsjobb</h3>
      <p>Har kun kvelder tilgjengelig. Velger hybrid: teori online, kjøring to kvelder i uken, og en kort intensivperiode før oppkjøring.</p>
      
      <h3>Case 3: Stramt budsjett</h3>
      <p>Velger tradisjonelt løp, øver mye privat for å redusere antall timer, og betaler fortløpende.</p>
      
      <h2>Visuelle pauser i teksten</h2>
      <p><strong>Tips:</strong> Se etter skoler som tilbyr:</p>
      <ul>
        <li>Progressjonsplan i app (du ser nøyaktig hva som gjenstår).</li>
        <li>Tydelig timebank og kostnadsoversikt.</li>
        <li>Mulighet for både automat og manuell underveis.</li>
      </ul>
      
      <blockquote>
        <p><strong>Anbefaling:</strong> Intensivkurs passer når tid er viktigst. Tradisjonelt opplegg passer når fleksibilitet og kostnadskontroll er viktigst. Hybrid gir en miks. Velg det som passer din kalender, økonomi og læringsstil.</p>
      </blockquote>
      
      <h2>Oppsummering</h2>
      <p>Intensivkurs passer når tid er viktigst og du tåler høyt tempo. Tradisjonelt opplegg passer når fleksibilitet, kostnadskontroll og roligere læring er viktigst. Hybrid gir en miks. Velg det som passer din kalender, økonomi og læringsstil.</p>
      
      <h3>Neste steg</h3>
      <ul>
        <li>Avklar deadline, budsjett og tilgjengelig tid.</li>
        <li>Bestem om du vil lære på automat eller manuell.</li>
        <li>Bruk Førerkortportalen for å innhente flere tilbud.</li>
        <li>Sammenlign pris, oppstart, fleksibilitet og oppfølging.</li>
      </ul>
      
      <p>Førerkortportalen hjelper deg å finne trafikkskoler som tilbyr både intensiv, tradisjonell og hybride løp. Fyll ut skjemaet, få tilbud og velg det som passer deg best.</p>
    `,
  },
  "4": {
    id: 4,
    title: "Hva koster førerkort i Norge? (oppdatert guide 2025)",
    excerpt: "Oppdatert oversikt over kostnader ved førerkort klasse B i 2025, obligatoriske utgifter, skjulte kostnader og hvordan du kan spare penger.",
    date: "15. januar 2025",
    readTime: "8 min lesing",
    category: "Økonomi",
    image: "/Article-photo4.png",
    content: `
      <p class="lead">Å ta førerkort i Norge er litt som å planlegge en lang tur: du vet omtrent hvor du skal, men du aner aldri helt hvor mye det faktisk kommer til å koste før du er midt i det. Prisene endrer seg smått hvert år, og 2025 er ikke noe unntak. Samtidig er det mange som blir overrasket – enten positivt eller negativt – når de ser den faktiske totalsummen.</p>
      
      <p>Så la oss rydde opp i forvirringen og gå gjennom hva du faktisk må betale.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo4.png" alt="Kostnader ved førerkort" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Førerkort er en betydelig investering, men med god planlegging kan du holde kostnadene under kontroll.
        </figcaption>
      </figure>

      <h2>Hvorfor er førerkort så dyrt i Norge?</h2>
      
      <p>Du har kanskje hørt folk si at det er nesten dyrere å ta lappen enn å kjøpe en brukt bil. Og ja, det kan det være. Men grunnen er egentlig ganske logisk: Norge har et av verdens grundigste opplæringsløp for nye sjåfører. Det betyr flere obligatoriske moduler, strenge sensorkrav og høyt fokus på trafikksikkerhet.</p>
      
      <p>Her er tingen: du betaler ikke bare for timer. Du betaler for kvalitet – og for å bli trygg nok til at du ikke skader deg selv eller andre. I tillegg varierer prisene mellom kjøreskoler, ofte fordi noen skoler bruker nyere biler, har mer erfarne lærere eller ligger i områder med høyere kostnader.</p>
      
      <h2>Hva koster førerkort klasse B i 2025? (snittpris)</h2>
      
      <p>La oss hoppe rett på kjernen: den typiske totalprisen i 2025. Selvfølgelig varierer det, men her er en realistisk og oppdatert oversikt:</p>
      
      <ul>
        <li><strong>Billigst (lite behov for kjøretimer):</strong> 20 000–25 000 kr</li>
        <li><strong>Normalt for de fleste elever:</strong> 30 000–40 000 kr</li>
        <li><strong>Høyt for elever som trenger mange timer:</strong> 45 000–60 000 kr</li>
      </ul>
      
      <p>De fleste havner rundt 30–40 000 kr, og det er rett og slett fordi de fleste trenger mer enn bare de obligatoriske timene. Det kan føles litt surt, men kjøreferdigheter er som alt annet: dette handler om trening, ikke flaks.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> De fleste betaler 30 000–40 000 kr for førerkort klasse B i 2025. Dette er det mest realistiske snittet. Planlegging og disiplinert øvelseskjøring kan redusere kostnadene betydelig.</p>
      </blockquote>
      
      <h2>Obligatoriske kostnader du ikke slipper unna</h2>
      
      <p>Dette er posten alle må igjennom, uansett hvor flink du er:</p>
      
      <ul>
        <li><strong>Trinnvurdering trinn 2 og 3</strong> – Evalueringer som sikrer at du faktisk er klar for neste steg.</li>
        <li><strong>Sikkerhetskurs på bane (glattkjøring)</strong> – Mange syns det er gøy, andre får høy puls, men det er utrolig nyttig.</li>
        <li><strong>Sikkerhetskurs på vei (langkjøring + refleksjon)</strong> – En av de mest lærerike dagene i opplæringen.</li>
        <li><strong>Leie av bil til oppkjøring</strong> – Skolen stiller bil du kjenner fra før.</li>
        <li><strong>Statlige gebyrer</strong> – Teoriprøve, oppkjøring og utstedelse av førerkort.</li>
      </ul>
      
      <p>Bare disse postene lander ofte på 12 000–15 000 kr. Og her er det ikke mye slingringsmonn, det er obligatorisk alt sammen.</p>
      
      <h2>Variabel kostnad: kjøretimer – den store joker'n</h2>
      
      <p>Her varierer det mest. Noen tar lappen nesten uten ekstra timer, mens andre trenger tid på å bli trygge. Det handler ikke om intelligens; det handler om erfaring, stressnivå, trafikksans og noen ganger ren dagsform.</p>
      
      <p>For de fleste ligger dette på 10–20 ekstra timer, som gjerne betyr:</p>
      
      <ul>
        <li><strong>10 timer:</strong> ca. 8 000–10 000 kr</li>
        <li><strong>20 timer:</strong> ca. 16 000–20 000 kr</li>
      </ul>
      
      <p>Vil du redusere antallet? Øv privat – men øv riktig. Mange øver på det de allerede kan, og da blir det som å trene biceps hver dag uten å ta en eneste knebøy.</p>
      
      <h2>Skjulte kostnader mange glemmer</h2>
      
      <p>Her er de klassiske glemte utgiftene som plutselig dukker opp:</p>
      
      <ul>
        <li>Helseattest fra lege</li>
        <li>Bompenger under kjøreskolekjøring</li>
        <li>Teoribok eller app (f.eks. Teoritentamen)</li>
        <li>Ekstra bilder til førerkortet</li>
        <li>Ekstra oppkjøring hvis du stryker</li>
      </ul>
      
      <p>Det er aldri gøy å få slike regninger "på tampen", men de dukker opp for de fleste.</p>
      
      <h2>Hvordan spare penger på førerkort i 2025</h2>
      
      <p>Du kan faktisk redusere kostnadene ganske mye:</p>
      
      <ul>
        <li><strong>Start med teorien tidlig.</strong> Du lærer raskere når du forstår reglene.</li>
        <li><strong>Finn en skole med gode pakker.</strong> Mange kjøreskoler tilbyr rimeligere timespriser ved kjøp av klipppekort.</li>
        <li><strong>Øv privat – men planlagt.</strong> Bruk godkjent ekstra speil, hold struktur, og unngå å "bare kjøre en tur".</li>
        <li><strong>Unngå lange pauser.</strong> Mange mister flyten og ender opp med flere nye timer.</li>
      </ul>
      
      <p>Kjøreopplæring er litt som trening: kontinuitet slår alt.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Start med teorien tidlig, finn en skole med gode pakker, øv privat planlagt og unngå lange pauser. Disse enkle rådene kan spare deg tusenlapper.</p>
      </blockquote>
      
      <h2>Hva koster førerkort i ulike byer?</h2>
      
      <p>Prisene varierer faktisk mer enn mange tror:</p>
      
      <ul>
        <li><strong>Oslo:</strong> Høyest pris – høy etterspørsel, dyrt å drive skole.</li>
        <li><strong>Bergen & Trondheim:</strong> Litt rimeligere, men fortsatt høyt nivå.</li>
        <li><strong>Mindre byer og distrikter:</strong> Lavest pris – ofte mindre trafikk og lavere kostnader.</li>
      </ul>
      
      <p>Noen drar faktisk "på førerkortutveksling" til mindre steder for å spare penger. Det er ikke alltid praktisk, men økonomisk kan det være smart.</p>
      
      <h2>Hva bør du se etter i en kjøreskole?</h2>
      
      <p>Pris er viktig, men ikke alt. En god lærer kan redusere timeforbruket dramatisk. Sjekk:</p>
      
      <ul>
        <li>Omdømme på Google</li>
        <li>Hvor tydelige de er om forventet timebruk</li>
        <li>Om læreren virker trygg og rolig</li>
        <li>Om skolen tilbyr pakkeløsninger</li>
      </ul>
      
      <p>Dynamikken mellom elev og lærer betyr mer enn man tror. En trygg elev lærer fortere.</p>
      
      <h2>Så hva må du regne med i 2025?</h2>
      
      <p>Kort fortalt: de fleste betaler 30 000–40 000 kr for førerkort klasse B i 2025. Det kan være litt mer, litt mindre, men dette er det mest realistiske snittet.</p>
      
      <p>Hvis du planlegger godt og er disiplinert med øvelseskjøring, kan du spare mye. Og husk – målet er ikke bare å få lappen, men å bli en trygg sjåfør som faktisk mestrer veien.</p>
    `,
  },
  "5": {
    id: 5,
    title: "Forbered deg til førerprøven",
    excerpt: "Praktiske tips og råd for å forberede deg best mulig til førerprøven, både teori og praksis.",
    date: "28. desember 2023",
    readTime: "5 min lesing",
    category: "Tips",
    image: "/Article-photo5.png",
    content: `
      <p class="lead">Førerprøven (oppkjøringen) er det siste steget før du får førerkortet. Her er tips for å forberede deg best mulig og øke sjansene for å bestå på første forsøk.</p>
      
      <h2>Før prøven – praktisk forberedelse</h2>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo5.png" alt="Forberedelser til førerprøven" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          God forberedelse før oppkjøring øker sjansen for å bestå på første forsøk.
        </figcaption>
      </figure>

      <h3>1. Øv deg grundig</h3>
      <p>Ta nok kjøretimer til at du føler deg trygg bak rattet. Det er bedre å ta noen ekstra timer enn å prøve for tidlig. Sørg for at du har kjørt i ulike situasjoner: bytrafikk, landevei, motorvei, i mørke, i dårlig vær.</p>
      
      <h3>2. Kjør samme bil som du skal bruke på prøven</h3>
      <p>Hvis mulig, ta noen øvelseskjøringer i den bilen du skal bruke på førerprøven. Dette gjør deg mer trygg og vant til bilen.</p>
      
      <h3>3. Ta en øvelseskjøring før prøven</h3>
      <p>Mange trafikkskoler tilbyr en øvelseskjøring rett før prøven. Dette varmer deg opp og gjør deg mer klar. Det anbefales å ta denne.</p>
      
      <h3>4. Les deg opp på prøveruten</h3>
      <p>Spør trafikkskolen om vanlige ruter for førerprøver i ditt område. Kjør disse rutene med instruktør eller privat person slik at du blir kjent med dem.</p>
      
      <h2>På prøvedagen</h2>
      
      <h3>1. Kom godt utsovet</h3>
      <p>Sørg for å få nok søvn natten før. Du trenger å være fokusert og alert.</p>
      
      <h3>2. Spis et godt måltid</h3>
      <p>Ikke gå på tom mage, men heller ikke spis for mye. Et lett, næringsrikt måltid er best.</p>
      
      <h3>3. Kom i god tid</h3>
      <p>Kom til møteplassen i god tid slik at du ikke stresser. Gi deg selv tid til å roe ned før prøven starter.</p>
      
      <h3>4. Sjekk bilen</h3>
      <p>Før prøven starter, sjekk at alt fungerer: lys, vindusviskere, speil osv. Dette viser også sensor at du er grundig.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Kom godt utsovet, spis et godt måltid, kom i god tid og sjekk bilen før prøven starter. Disse enkle forberedelsene kan gjøre stor forskjell på prestasjonen din.</p>
      </blockquote>
      
      <h2>Under prøven – viktige tips</h2>
      
      <h3>1. Fokuser på sikkerhet</h3>
      <p>Sensor ser først og fremst på at du kjører trygt. Kjør forsiktig og defensivt. Det er bedre å være litt for forsiktig enn for rask.</p>
      
      <h3>2. Se deg grundig rundt</h3>
      <p>Huske å se i speilene og sjekke blindsoner ofte. Sensor vil legge merke til dette. Gjør det tydelig at du ser deg rundt – beveg hodet, ikke bare øynene.</p>
      
      <h3>3. Hold fartsgrensen</h3>
      <p>Ikke kjør for fort, men heller ikke for sakte. Prøv å holde en jevn hastighet i nærheten av fartsgrensen. Hvis fartsgrensen er 50, er 48-52 km/t passende.</p>
      
      <h3>4. Kommuniser</h3>
      <p>Hvis du er usikker på noe, spør sensor. Det er bedre å spørre enn å gjøre feil. Sensor vil også gi deg instruksjoner – hør nøye etter og bekreft at du har forstått.</p>
      
      <h3>5. Ikke panikk hvis du gjør en feil</h3>
      <p>Alle gjør små feil. Hvis du gjør en feil, ikke la det påvirke resten av prøven. Fortsett å kjøre best du kan. En liten feil trenger ikke å være diskvalifiserende.</p>
      
      <h2>Vanlige feil som fører til stryk</h2>
      <ul>
        <li>Ikke se seg nok rundt (speil og blindsoner)</li>
        <li>Kjøre for fort eller for sakte</li>
        <li>Ikke gi forkjørsrett riktig</li>
        <li>Feil ved kryssing eller rundkjøring</li>
        <li>Dårlig posisjonering i veibanen</li>
        <li>Ikke reagere på trafikklys eller skilt</li>
      </ul>
      
      <h2>Etter prøven</h2>
      <p>Hvis du består, gratulerer! Du vil få beskjed umiddelbart. Du kan da bestille førerkortet ditt.</p>
      
      <p>Hvis du ikke består, ikke la deg nedstemme. Mange ikke består første gang, og det er helt normalt. Sensor vil gi deg tilbakemelding på hva du kan forbedre. Ta flere kjøretimer og prøv igjen når du føler deg klar.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> Sensor ser først og fremst på at du kjører trygt. Fokuser på sikkerhet, se deg grundig rundt og hold fartsgrensen. Det er bedre å være litt for forsiktig enn for rask.</p>
      </blockquote>
      
      <h2>Få hjelp fra en god trafikkskole</h2>
      <p>En erfaren trafikkskole vil forberede deg grundig til førerprøven. Førerkortportalen hjelper deg å finne trafikkskoler med gode resultater og erfarne instruktører som kan guide deg gjennom hele prosessen.</p>
    `,
  },
  "6": {
    id: 6,
    title: "Hva skjer etter at du har bestått prøven?",
    excerpt: "Alt du trenger å vite om hva som skjer etter at du har bestått førerprøven og fått førerkortet ditt.",
    date: "20. desember 2023",
    readTime: "4 min lesing",
    category: "Etter opplæring",
    image: "/Article-photo6.png",
    content: `
      <p class="lead">Gratulerer! Du har bestått førerprøven. Men hva skjer nå? Her er en guide til hva du må gjøre for å få førerkortet ditt og hva du bør vite som ny fører.</p>
      
      <h2>1. Bestill førerkortet</h2>
      <p>Etter at du har bestått førerprøven, må du bestille førerkortet ditt. Dette gjør du på nettsiden til Statens vegvesen eller på et trafikantkontor. Du trenger:</p>
      <ul>
        <li>Gyldig legitimasjon (pass, nasjonal ID-kort eller førerkort fra annet land)</li>
        <li>Et nylig fotografi (kan tas på trafikantkontor eller bestilles digitalt)</li>
        <li>Å betale utstedelsesgebyr (ca. 500 kr)</li>
      </ul>
      
      <h2>2. Ventetid</h2>
      <p>Det tar vanligvis 1-2 uker før førerkortet er klart. Du får beskjed når det er klart for henting. I mellomtiden har du ikke lov til å kjøre bil, så du må vente med å kjøre alene til du har fått førerkortet.</p>

      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo6.png" alt="Etter bestått førerprøve" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Etter bestått prøve gjenstår bestilling, ventetid og trygg oppstart som ny sjåfør.
        </figcaption>
      </figure>
      
      <h2>3. Henting av førerkort</h2>
      <p>Når førerkortet er klart, kan du hente det på det trafikantkontoret du bestilte det til. Husk å ta med gyldig legitimasjon når du henter det.</p>
      
      <h2>4. Prøvetid i 2 år</h2>
      <p>Som ny fører har du prøvetid i 2 år fra den dagen du fikk førerkortet. Under prøvetiden:</p>
      <ul>
        <li>Du har strengere regler enn erfarne førere</li>
        <li>Du får dobbel poeng ved trafikkforseelser</li>
        <li>Hvis du får 8 poeng eller mer, mister du førerkortet</li>
        <li>Du kan ikke ha alkohol i blodet i det hele tatt (0,0 promille)</li>
      </ul>
      
      <blockquote>
        <p><strong>Viktig:</strong> Under prøvetiden har du strengere regler. Du får dobbel poeng ved trafikkforseelser, og hvis du får 8 poeng eller mer, mister du førerkortet. Du kan heller ikke ha alkohol i blodet (0,0 promille).</p>
      </blockquote>
      
      <h2>5. Hva du bør gjøre som ny fører</h2>
      
      <h3>Øv deg videre</h3>
      <p>Selv om du har førerkort, er det viktig å fortsette å øve. Start med korte turer i kjente områder, og bygg gradvis opp til lengre turer og ukjente veier.</p>
      
      <h3>Vær ekstra forsiktig</h3>
      <p>Som ny fører mangler du erfaring. Vær ekstra forsiktig og ta deg god tid. Det er bedre å komme litt for sent enn å komme frem uforsiktig.</p>
      
      <h3>Vær bevisst på værforhold</h3>
      <p>Kjør ekstra forsiktig i dårlig vær, mørke og når det er glatt. Disse situasjonene er vanskeligere for uerfarne førere.</p>
      
      <h3>Hold deg oppdatert</h3>
      <p>Trafikkreglene endrer seg. Hold deg oppdatert på endringer i trafikkregler og best practices.</p>
      
      <h2>6. Ansvarlig bilkjøring</h2>
      <p>Med førerkort kommer ansvar. Husk at:</p>
      <ul>
        <li>Du er ansvarlig for din egen sikkerhet og andres</li>
        <li>Aldri kjør i påvirket tilstand</li>
        <li>Bruk bilbelte alltid</li>
        <li>Ikke bruk mobiltelefon mens du kjører</li>
        <li>Kjør defensivt og tenk fremover</li>
      </ul>
      
      <h2>7. Bilforsikring</h2>
      <p>Hvis du skal kjøpe eller leie bil, må du ha bilforsikring. Som ny fører kan forsikringen være dyrere. Sammenlign tilbud fra flere forsikringsselskaper for å finne beste pris.</p>
      
      <h2>8. Vedlikehold av bil</h2>
      <p>Hvis du får egen bil, er det viktig å holde den i god stand. Sjekk regelmessig:</p>
      <ul>
        <li>Olje og kjølevæske</li>
        <li>Dekk og dekkpreg</li>
        <li>Lys og blinklys</li>
        <li>Bremser</li>
      </ul>
      
      <h2>9. Fortsett å lære</h2>
      <p>Det å ha førerkort betyr ikke at du er ferdig med å lære. Hver kjøretur gir deg ny erfaring. Vær åpen for å lære av feil og utfordringer.</p>
      
      <h2>10. Nyt friheten</h2>
      <p>Førerkort gir deg stor frihet og åpner for nye muligheter. Nyt det, men husk å alltid kjøre ansvarlig og trygt.</p>
      
      <h2>Trenger du hjelp videre?</h2>
      <p>Selv etter at du har fått førerkort, kan det være nyttig å ta noen ekstra kjøretimer hvis du føler deg usikker på visse situasjoner. Mange trafikkskoler tilbyr oppfriskningskjøring eller spesialiserte kurs for nyere førere. Førerkortportalen kan også hjelpe deg finne trafikkskoler som tilbyr slike tjenester.</p>
    `,
  },
  "7": {
    id: 7,
    title: "Er intensivkurs verdt det?",
    excerpt: "En ærlig guide til når intensivkurs gir mening, når det kan bli unødvendig dyrt, og hva du bør vite før du melder deg på.",
    date: "25. januar 2025",
    readTime: "8 min lesing",
    category: "Kursformer",
    image: "/Article-photo3.png",
    content: `
      <p class="lead">Intensivkurs høres nesten litt magisk ut, gjør det ikke?</p>
      
      <p>"Tatt lappen på to uker!"</p>
      
      <p>"Du er klar til oppkjøring før du rekker å blunke!"</p>
      
      <p>Det lover mye, og for noen funker det faktisk veldig bra. Men er det verdt pengene for alle? Ikke nødvendigvis.</p>
      
      <p>Denne artikkelen forklarer når intensivkurs gir mening, når det kan bli unødvendig dyrt, og hva du bør vite før du melder deg på.</p>
      
      <h2>Hva er egentlig et intensivkurs?</h2>
      <p>Et intensivkurs er rett og slett et komprimert førerkortløp. I stedet for å ta timer over flere måneder, kjører du intenst – ofte 2–4 timer per dag – frem mot obligatoriske trinn og oppkjøring.</p>
      
      <h3>Typisk inneholder et intensivkurs:</h3>
      <ul>
        <li>Et gitt antall kjøretimer</li>
        <li>Alt av obligatoriske kurs</li>
        <li>Teorihjelp (hos noen skoler)</li>
        <li>Oppkjøringsforberedelse</li>
        <li>Leie av bil til oppkjøring</li>
      </ul>
      
      <p>Det er effektivt, men også krevende. De fleste beskriver det som "å leve og puste bil i to uker".</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo3.png" alt="Intensivkurs førerkort" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Intensivkurs kan være raskt og effektivt, men passer ikke for alle. Tenk gjennom om det er riktig valg for deg.
        </figcaption>
      </figure>
      
      <h2>Fordelene – når intensivkurs faktisk er en god idé</h2>
      <p>La oss være ærlige: Intensivkurs kan være fantastisk for mange.</p>
      
      <h3>1. Du lærer raskt</h3>
      <p>Hvis du liker å dykke dypt – fokusere intenst på én ting, er dette gull. Det føles som at progresjonen skyter fart fordi du aldri får tid til å "glemme" mellom timene.</p>
      
      <h3>2. Perfekt for deg med lite tid</h3>
      <p>Kanskje du skal flytte, studere eller starte en ny jobb. Et intensivkurs kutter hele prosessen ned til et kort og oversiktlig prosjekt.</p>
      
      <h3>3. Du slipper lange pauser mellom trinnene</h3>
      <p>Du vet hvordan en uke uten kjøring kan gjøre deg rusten igjen? Det skjer ikke her. Alt går fort, og du holder rytmen gjennom hele løpet.</p>
      
      <h3>4. Struktur du slipper å tenke på</h3>
      <p>Kjøreskolen planlegger alt: timer, bane, vei, kurs. Du møter opp – de fikser resten.</p>
      
      <h2>Ulempene – når intensivkurs blir dyrere enn du tror</h2>
      <p>Her er sannheten mange ikke får høre:</p>
      
      <h3>1. Du MÅ kunne litt fra før</h3>
      <p>Hvis du nesten ikke har kjørt, legger intensivkurs ofte inn altfor få timer for nybegynnere. Resultatet?</p>
      
      <p>Du må kjøpe ekstra timer, og plutselig er kurset ikke så "gunstig" lenger.</p>
      
      <h3>2. Det kan bli mentalt slitsomt</h3>
      <p>To uker med intens kjøring er krevende. Hvis du lett blir stresset, eller trenger pauser for å lære bedre, kan det faktisk være uheldig.</p>
      
      <h3>3. Du kan føle at du "haser" gjennom stoffet</h3>
      <p>Noen elever trenger mer tid på visse ferdigheter. Under et intensivkurs må du bare videre, uten mulighet til å stoppe opp så mye som du kanskje burde.</p>
      
      <h3>4. Du risikerer å stryke hvis du ikke er klar – og da ryker økonomien</h3>
      <p>Strøk på oppkjøring etter et intensivløp?</p>
      
      <p>Da må du vente + betale alt på nytt til ny oppkjøring i tillegg til ny kjøretimepakke.</p>
      
      <p>Det blir ofte langt dyrere enn om du hadde tatt det mer rolig i første omgang.</p>
      
      <h2>Så… er intensivkurs verdt det? (Det kommer faktisk an på deg)</h2>
      <p>Dette er det store spørsmålet – og det finnes ikke ett riktig svar.</p>
      
      <h3>Intensivkurs passer best for deg som:</h3>
      <ul>
        <li>Har kjørt en del privat</li>
        <li>Lærer raskt og trives med høyt tempo</li>
        <li>Skal ha lappen kjapt</li>
        <li>Er motivert og klar for en tett timeplan</li>
        <li>Ønsker en helhetlig og ferdig planlagt progresjon</li>
      </ul>
      
      <h3>Intensivkurs passer dårlig hvis:</h3>
      <ul>
        <li>Du har lite erfaring</li>
        <li>Du blir stresset av tidspress</li>
        <li>Du trenger god tid til å mestre nye ferdigheter</li>
        <li>Du ønsker full fleksibilitet</li>
        <li>Du vil ta alt i ditt tempo, kanskje kombinert med mye privat øving</li>
      </ul>
      
      <h2>En liten realitetssjekk før du bestemmer deg</h2>
      <p>Mange kjøreskoler markedsfører intensivkurs som en "kjapp snarvei".</p>
      
      <p>Men sannheten? Det er ikke en snarvei. Det er bare et raskere tempo.</p>
      
      <p>Du må fortsatt:</p>
      <ul>
        <li>Lære alle ferdighetene</li>
        <li>Kjøpe eventuelle ekstratimer</li>
        <li>Ha godkjent teori</li>
        <li>Bestå oppkjøring</li>
      </ul>
      
      <p>Tempoet er høyere, ikke kravene.</p>
      
      <blockquote>
        <p><strong>Konklusjon:</strong> Intensivkurs kan være genialt hvis du har grunnlaget, motivasjonen og et stramt tidsskjema. Men hvis du trenger mer tid eller ikke har kjørt så mye, kan vanlig løp spare deg for både stress og penger.</p>
      </blockquote>
      
      <h2>Konklusjon: Intensivkurs kan være genialt – men ikke for alle</h2>
      <p>Hvis du har grunnlaget, motivasjonen og et stramt tidsskjema, kan intensivkurs være helt riktig valg.</p>
      
      <p>Men hvis du trenger mer tid, eller ikke har kjørt så mye, kan vanlig løp spare deg for både stress og penger.</p>
      
      <p>Uansett: Det viktigste er å finne en kjøreskole som faktisk kan tilpasse opplæringen til deg – ikke motsatt.</p>
      
      <h2>Vil du sammenligne kjøreskoler?</h2>
      <p>Fyll ut skjemaet – så finner vi de rimeligste skolene med best rykte der du bor.</p>
    `,
  },
  "8": {
    id: 8,
    title: "Slik kan du spare penger på førerkortet (2025-guide)",
    excerpt: "Praktisk guide som viser hvordan du faktisk kan spare penger på førerkortet uten å kutte så mye at det går utover kvaliteten.",
    date: "30. januar 2025",
    readTime: "10 min lesing",
    category: "Økonomi",
    image: "/Article-photo4.png",
    content: `
      <p class="lead">Du har sikkert hørt det før: "Førerkort koster en formue." Og ja, det kan fort bli dyrere enn du planla — men sannheten er at utrolig mange betaler mer enn nødvendig. Ofte handler det ikke om selve kjøreskolen, men om små valg i prosessen som til sammen blir en dyr affære.</p>
      
      <p>Her får du en praktisk, lettlest og ærlig guide som viser hvordan du faktisk kan spare penger uten å kutte så mye at det går utover kvaliteten.</p>
      
      <h2>Hvor begynner du egentlig?</h2>
      
      <p>Det er lett å tro at "billig = mindre kvalitet", men ofte handler det mer om planlegging. Litt som å handle mat: du sparer ikke ved å kutte middager — du sparer ved å kjøpe smart.</p>
      
      <p>Det samme gjelder førerkortet.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo4.png" alt="Spar penger på førerkort" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Med riktig planlegging kan du spare penger på førerkortet uten å kutte på kvaliteten.
        </figcaption>
      </figure>
      
      <h2>1. Få oversikt før du starter (du sparer mer enn du tror)</h2>
      
      <p>Folk som starter uten plan bruker i snitt 3–5 ekstra kjøretimer. Det er fort 2500–4000 kr rett ut vinduet.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> Få oversikt før du starter. Folk som starter uten plan bruker i snitt 3-5 ekstra kjøretimer – det er fort 2500-4000 kr rett ut vinduet.</p>
      </blockquote>
      
      <p>Her er de tre tingene du bør vite før du bestiller første time:</p>
      
      <h3>Hva koster hver del av førerkortet?</h3>
      
      <p>Prisen på obligatoriske deler er faste, men kjøretimer varierer enormt. En times forskjell på 100 kr høres lite ut, men over 15 timer er det fort 1500 kr spart.</p>
      
      <h3>Hva slags kjøreskole passer deg?</h3>
      
      <p>Noen kjøreskoler er kjent for å være dyre. Andre kjører lange timer (75–90 minutter) og gir deg mer læring per krone.</p>
      
      <h3>Hvor mye kan du øvelseskjøre privat?</h3>
      
      <p>Jo mer du trener hjemme, jo færre timer trenger du hos skole.</p>
      
      <p>Enkelt, men undervurdert.</p>
      
      <h2>2. Øv privat — men øv riktig</h2>
      
      <p>Det er ikke noe poeng å spare penger hvis privat kjøring bare er… rot.</p>
      
      <p>Mange kjører rundt uten mål, og ender likevel opp med masse ekstra timer fordi de lærer lite av turene.</p>
      
      <p>Her er en liten "oppskrift" som faktisk fungerer:</p>
      
      <ul>
        <li>Lag en plan basert på trinnene trafikkskolen bruker</li>
        <li>Kjør samme type øvelser som du gjør hos trafikklærer</li>
        <li>Bruk apps eller YouTube for å forstå teknikk (f.eks. vikeplikt, plassering)</li>
        <li>La ledsageren være tydelig — og rolig</li>
      </ul>
      
      <p>Du sparer mest ved å bli trygg før du møter trafikklæreren. Ikke motsatt.</p>
      
      <h2>3. Kjøp riktig type kjøretimer (og ikke for mange)</h2>
      
      <p>Du trenger ikke "12-pakk", "komplett startpakke" eller fancy tilleggstimer hvis du ikke vet om du trenger det.</p>
      
      <p><strong>Kjøp én eller to enkelttimer først.</strong></p>
      
      <p>La læreren vurdere nivået ditt.</p>
      
      <p>Deretter kan du kjøpe pakke hvis det lønner seg for deg.</p>
      
      <h3>En litt glemt sannhet?</h3>
      
      <p>Nesten alle kjøreskoler vil selge deg mer enn du strengt tatt trenger.</p>
      
      <p>Det betyr ikke at de er "sleipe" — de vil bare sikre at du består.</p>
      
      <p>Men du bør likevel velge smart.</p>
      
      <h2>4. Ikke sløs bort timer på ting du kan øve hjemme</h2>
      
      <p>Dette punktet alene kan spare deg flere tusen.</p>
      
      <p>Du trenger ikke en trafikklærer for å:</p>
      
      <ul>
        <li>øve clutchkontroll</li>
        <li>trene igangsetting</li>
        <li>kjøre i boligområder</li>
        <li>kjenne på bremse- og gassrespons</li>
        <li>øve rygging på tom parkeringsplass</li>
      </ul>
      
      <p>Bruk trafikklæreren til det som faktisk krever fagkunnskap:</p>
      
      <ul>
        <li>rundkjøringer</li>
        <li>bykjøring</li>
        <li>motorvei</li>
        <li>risikoforståelse</li>
        <li>trafikkanalyse</li>
      </ul>
      
      <p>Jo mer du tar hjemme, jo mer sparer du.</p>
      
      <h2>5. Lær teorien ordentlig — du sparer penger på selve oppkjøringen</h2>
      
      <p>Her er noe folk ofte ikke tenker over:</p>
      
      <p><strong>Dårlig teoriforståelse gjør deg til en dyr elev.</strong></p>
      
      <p>Hvis du ikke skjønner vikeplikt, plassering eller fartstilpasning, ender du opp med flere kjøretimer — ikke bare teoriproblemer.</p>
      
      <p>Bruk gode, oppdaterte apper:</p>
      
      <p>Teoritentamen, Testen.no, Prøve.no.</p>
      
      <p>Unngå gratisapper som ikke er oppdaterte. Du sparer ingenting hvis du stryker.</p>
      
      <h3>Målet ditt bør være:</h3>
      
      <p>Stabile 85–90 % riktig på øvingstester.</p>
      
      <p>Da går også kjøringen lettere.</p>
      
      <h2>6. Be om en ærlig vurdering fra lærer — og våg å bytte</h2>
      
      <p>Noen elever stryker fordi de er nervøse.</p>
      
      <p>Andre stryker fordi kjøreskolen ikke gir dem det de trenger.</p>
      
      <p>Og du vet hva?</p>
      
      <p><strong>Det er helt lov å bytte lærer.</strong></p>
      
      <p>Hvis du føler at:</p>
      
      <ul>
        <li>du ikke lærer i riktig tempo</li>
        <li>dere bruker for lang tid på grunnleggende ting</li>
        <li>stemningen er stressende eller uklar</li>
      </ul>
      
      <p>… da kan det faktisk være billigere å bytte skole.</p>
      
      <p>En god lærer sparer deg både tid, nerver og penger.</p>
      
      <h2>7. Vurder pakkene — men se på prisen per time</h2>
      
      <p>En pakke kan være genial, men bare hvis:</p>
      
      <ul>
        <li>timene faktisk blir brukt</li>
        <li>du trenger alle timene</li>
        <li>prisen per time er lavere enn enkelttimer</li>
      </ul>
      
      <p>Mange kjøper "startpakker" som virker billige, men ender opp med å kjøpe enda flere timer etterpå.</p>
      
      <p>Da er det plutselig ikke så billig likevel.</p>
      
      <h2>8. Ikke utsett oppkjøringen unødvendig</h2>
      
      <p>Utsettelse betyr…</p>
      
      <ul>
        <li>flere timer</li>
        <li>mer kjøring</li>
        <li>mer stress</li>
        <li>mer penger</li>
      </ul>
      
      <p>Alt du kan gjøre for å bli klar på første forsøk sparer deg for mye.</p>
      
      <h2>9. Kort oppsummert: Her sparer du mest</h2>
      
      <ul>
        <li>Øv privat med struktur</li>
        <li>Ikke kjøp pakker før du vet behovet</li>
        <li>Lær teorien ordentlig først</li>
        <li>Bruk trafikklærer til vanskelige ting — ikke småting</li>
        <li>Sammenlign kjøreskoler før du binder deg</li>
      </ul>
      
      <blockquote>
        <p><strong>Kort sagt:</strong> Øv privat med struktur, ikke kjøp pakker før du vet behovet, lær teorien ordentlig først, og sammenlign kjøreskoler før du binder deg. Dette er de beste måtene å spare penger på.</p>
      </blockquote>
      
      <h2>Vil du sammenligne kjøreskoler i ditt område?</h2>
      
      <p>Fyll ut skjemaet — så matcher vi deg med de beste og rimeligste alternativene.</p>
    `,
  },
  "9": {
    id: 9,
    title: "Obligatoriske kurs for førerkort klasse B (komplett guide 2025)",
    excerpt: "Komplett guide til alle obligatoriske kursene du må ta for førerkort klasse B, inkludert varighet, priser og hva hvert kurs inneholder.",
    date: "2. februar 2025",
    readTime: "8 min lesing",
    category: "Guider",
    image: "/Article-photo1.png",
    content: `
      <p class="lead">Selv om du kan kjøre så mye du vil hjemme, kommer du ikke utenom de obligatoriske kursene når du skal ta førerkort klasse B. Det er disse som sikrer at du får en trygg og helhetlig opplæring – og ja, det er de fleste elevers største kostnadsposter.</p>
      
      <p>Men hva består de egentlig av? Hvorfor må de tas? Og hvor mye koster det i 2025?</p>
      
      <p>Her får du en engasjerende og tydelig guide som forklarer alt, uten unødvendig fagspråk.</p>
      
      <h2>Hvorfor finnes obligatoriske kurs?</h2>
      
      <p>Det er lett å tenke at obligatoriske kurs bare er en måte å tjene penger på, men sannheten er at de løser et viktig problem: Forskjellen mellom "å kunne kjøre bilen" og "å kunne kjøre trygt".</p>
      
      <p>Privat øvelseskjøring gir mengdetrening.</p>
      
      <p>Kjøreskole gir struktur.</p>
      
      <p>De obligatoriske kursene binder alt sammen.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo1.png" alt="Obligatoriske kurs for førerkort" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Obligatoriske kurs sikrer en trygg og helhetlig opplæring, og er de fleste elevers største kostnadsposter.
        </figcaption>
      </figure>
      
      <h2>Oversikt: Disse kursene må alle ta</h2>
      
      <p>Her er hele listen over obligatoriske kurs i klasse B:</p>
      
      <ol>
        <li>Trafikalt grunnkurs (hvis du er under 25 år)</li>
        <li>Trinnvurdering trinn 2</li>
        <li>Trinnvurdering trinn 3</li>
        <li>Sikkerhetskurs på bane (glattkjøring)</li>
        <li>Sikkerhetskurs på vei</li>
        <li>Førstehjelp og mørkekjøring (ligger i trafikalt grunnkurs)</li>
      </ol>
      
      <p>Vi tar dem steg for steg.</p>
      
      <h2>Trafikalt grunnkurs (TGK)</h2>
      
      <p>Dette kurset er obligatorisk for alle under 25 år og fungerer som "inngangsbilletten" til å i det hele tatt begynne å kjøre.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 3–4 kvelder</li>
        <li><strong>Pris:</strong> 800–1 500 kr</li>
        <li><strong>Inkluderer:</strong> Førstehjelp + mørkekjøring (mørkekjøring tas om høsten/vinteren)</li>
      </ul>
      
      <p>Kurset gir deg det røde beviset som gjør deg lovlig på veien som øvelsessjåfør.</p>
      
      <h2>Trinnvurdering trinn 2 – er bilen under kontroll?</h2>
      
      <p>Når du har fått grunnleggende kontroll på bilen, kommer den første trinnvurderingen.</p>
      
      <h3>Formål:</h3>
      
      <p>Instruktøren vurderer om du behersker bilen godt nok til å gå videre til mer avansert kjøring. Det er egentlig en kort sjekk, men viktig likevel.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 45 minutter</li>
        <li><strong>Pris:</strong> 700–1 100 kr</li>
      </ul>
      
      <p>Du trenger ikke "bestå" denne, men du må få godkjent at du er klar for neste trinn.</p>
      
      <h2>Trinnvurdering trinn 3 – er du klar for den selvstendige kjøringen?</h2>
      
      <p>Når du begynner å mestre trafikkbildet, kommer neste vurdering.</p>
      
      <h3>Formål:</h3>
      
      <p>Her handler alt om blikkbruk, trafikkforståelse og hvordan du løser situasjoner. Instruktøren vurderer om du har ferdighetene som trengs før de større kursene.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 45 minutter</li>
        <li><strong>Pris:</strong> 700–1 100 kr</li>
      </ul>
      
      <p>Dette er ofte en liten milepæl – mange føler at "nå begynner det å nærme seg".</p>
      
      <h2>Sikkerhetskurs på bane (glattkjøring)</h2>
      
      <p>Dette er kanskje det mest kjente av alle obligatoriske kurs. Og ja, navnet lyver ikke – du skal faktisk kjøre på glatt føre.</p>
      
      <h3>Hva du gjør på banen:</h3>
      
      <ul>
        <li>Bremsing i høy hastighet</li>
        <li>Unnamanøver</li>
        <li>Kontrolltap og gjenoppretting</li>
        <li>Erfaring med hvordan bilen faktisk oppfører seg under stress</li>
      </ul>
      
      <h3>Det viktigste målet:</h3>
      
      <p>Å lære hva du gjør når bilen mister grep – og hvordan du tar kontrollen tilbake.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 1 dag</li>
        <li><strong>Pris:</strong> 4 000–6 000 kr</li>
      </ul>
      
      <p>For mange er dette kurset både gøy og litt nervepirrende. Men det er ekstremt nyttig.</p>
      
      <h2>Sikkerhetskurs på vei</h2>
      
      <p>Dette er det siste og mest omfattende obligatoriske kurset – ofte omtalt som "finalen" før teoriprøve og oppkjøring.</p>
      
      <h3>Kurset består av:</h3>
      
      <ul>
        <li>Risiko og planlegging</li>
        <li>Langkjøring</li>
        <li>Selvstendig kjøring</li>
        <li>Refleksjon rundt egen kjøringsstil</li>
      </ul>
      
      <p>Det er her du lærer å tenke som en erfaren sjåfør, ikke bare som en elev.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 4–5 timer</li>
        <li><strong>Pris:</strong> 7 000–11 000 kr</li>
      </ul>
      
      <p>Når dette kurset er fullført, er det vanligvis bare finpuss igjen.</p>
      
      <h2>Hvor mye koster de obligatoriske kursene totalt?</h2>
      
      <p>La oss se på 2025-priser samlet:</p>
      
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Kurs</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Typisk pris</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Trinnvurdering trinn 2</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">700–1 100 kr</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Trinnvurdering trinn 3</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">700–1 100 kr</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Sikkerhetskurs på bane</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">4 000–6 000 kr</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Sikkerhetskurs på vei</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">7 000–11 000 kr</td>
          </tr>
          <tr class="bg-emerald-50 font-semibold">
            <td class="border border-slate-300 px-4 py-3 text-slate-900">Totalt</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-900">ca. 13 000–19 000 kr</td>
          </tr>
        </tbody>
      </table>
      
      <p>I tillegg kommer jo trafikalt grunnkurs hvis du er under 25.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> Totalt koster obligatoriske kurs ca. 13 000–19 000 kr i 2025. I tillegg kommer trafikalt grunnkurs hvis du er under 25 år. Disse kursene er obligatoriske og kan ikke unngås.</p>
      </blockquote>
      
      <h2>Kan man påvirke prisen på de obligatoriske kursene?</h2>
      
      <p>Egentlig ikke – kursene må tas, og prisene er ganske like overalt.</p>
      
      <p>Men du kan spare penger på alt rundt: antall kjøretimer, valg av skole og fremdriften din.</p>
      
      <p>Det viktigste er fortsatt dette: Finn en god kjøreskole som matcher behovene dine.</p>
      
      <p><strong>En trygg lærer = færre timer + bedre progresjon.</strong></p>
      
      <h2>Vil du finne riktig kjøreskole til de obligatoriske delene?</h2>
      
      <p>Ikke alle skoler har like god tilgang til baner, og noen har lange ventelister på obligatoriske kurs. Det gjør at prosessen tar lenger tid – og ofte koster mer.</p>
      
      <p>Derfor hjelper vi deg med å finne skoler som:</p>
      
      <ul>
        <li>har ledige kursplasser</li>
        <li>har god progresjon</li>
        <li>har konkurransedyktige priser</li>
        <li>gir deg realistisk fremdriftsplan</li>
      </ul>
      
      <p>Fyll ut skjemaet – så matcher vi deg med gode kjøreskoler i ditt område.</p>
    `,
  },
  "10": {
    id: 10,
    title: "Slik fungerer førerkortprosessen – steg for steg (2025-guide)",
    excerpt: "Enkel og oppdatert steg-for-steg-guide som viser hvordan du går fra null til førerkort – uten stress og uten at du trenger å google alt underveis.",
    date: "5. februar 2025",
    readTime: "9 min lesing",
    category: "Guider",
    image: "/Article-photo2.png",
    content: `
      <p class="lead">For mange føles førerkortprosessen som en labyrint. Det er mye som skal på plass: kurs, kjøretimer, dokumenter, teori, oppkjøring – og det virker nesten som alle du snakker med gir helt ulike råd. Men sannheten er at prosessen er ganske ryddig når du får sett den fra start til slutt.</p>
      
      <p>Her får du en enkel, ærlig og helt oppdatert steg-for-steg-guide som viser hvordan du går fra null til førerkort – uten stress og uten at du trenger å google alt underveis.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo2.png" alt="Førerkortprosessen steg for steg" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Førerkortprosessen er ryddig når du ser den fra start til slutt. Her er hele veien forklart steg for steg.
        </figcaption>
      </figure>
      
      <h2>Steg 1: Trafikalt grunnkurs (hvis du er under 25)</h2>
      
      <p>Dette er startskuddet for hele reisen.</p>
      
      <p>Før du kan øvelseskjøre, må du gjennom trafikalt grunnkurs (TGK). Det er fire kvelder med grunnleggende sikkerhet, trafikkforståelse og litt førstehjelp.</p>
      
      <ul>
        <li><strong>Varighet:</strong> 3–4 kvelder</li>
        <li><strong>Pris:</strong> 800–1 500 kr</li>
        <li><strong>Gir deg:</strong> "Øvelseskjøringsbevis" – det røde</li>
      </ul>
      
      <p>Hvis du er over 25, slipper du kurset. Du kan begynne rett på kjøringen når du har gyldig legitimasjon.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Hvis du er under 25 år, må du ta trafikalt grunnkurs før du kan begynne øvelseskjøring. Over 25 år kan du starte rett på kjøringen med gyldig legitimasjon.</p>
      </blockquote>
      
      <h2>Steg 2: Start øvelseskjøring – skole eller privat?</h2>
      
      <p>Når du har lov til å kjøre, er det lurt å komme i gang raskt. Jo tidligere du blir komfortabel bak rattet, jo færre kjøretimer trenger du.</p>
      
      <h3>To spor du kan bruke samtidig:</h3>
      
      <ul>
        <li><strong>Privat øvelseskjøring:</strong> Gratis, fleksibelt og utrolig effektivt</li>
        <li><strong>Kjøreskole:</strong> Struktur, progresjon og riktig kompetanse</li>
      </ul>
      
      <p>Den perfekte miksen? Privat kjøring + jevnlige timer.</p>
      
      <p>Tenk på det som å lære et instrument: du trenger både selvtrening og profesjonell veiledning.</p>
      
      <h2>Steg 3: Grunnleggende kjøretøybeherskelse (Trinn 2)</h2>
      
      <p>Dette er fasen hvor du lærer:</p>
      
      <ul>
        <li>clutchkontroll</li>
        <li>styring</li>
        <li>giring</li>
        <li>bremsing</li>
        <li>rygging og parkering</li>
      </ul>
      
      <p>Du jobber med selve håndverket, rett og slett.</p>
      
      <h3>Hvor lang tid tar dette?</h3>
      
      <p>Alt fra et par uker til et par måneder – helt avhengig av hvor mye du kjører privat.</p>
      
      <p><strong>Hovedmål:</strong> Du skal kunne manøvrere bilen trygt uten å måtte "tenke så mye".</p>
      
      <p>Når læreren mener du er klar, får du Veiledningstime 1.</p>
      
      <h2>Steg 4: Trafikal forståelse (Trinn 3)</h2>
      
      <p>Her blir ting litt mer avanserte.</p>
      
      <p>I dette trinnet handler alt om å:</p>
      
      <ul>
        <li>lese trafikkbildet</li>
        <li>forutse situasjoner</li>
        <li>plassere bilen riktig</li>
        <li>bruke blikket strategisk</li>
        <li>ta gode valg i komplekse situasjoner</li>
      </ul>
      
      <p>Dette er gjerne fasen som tar lengst tid, men det er også her du merker størst utvikling.</p>
      
      <p>Mot slutten tar du Veiledningstime 2, der instruktøren vurderer om du er klar for det obligatoriske kurset.</p>
      
      <h2>Steg 5: Obligatoriske kurs</h2>
      
      <p>Når kjøringen begynner å sitte, kommer de obligatoriske delene.</p>
      
      <p>Dette må alle gjennom – uansett hvor flink man er.</p>
      
      <h3>Sikkerhetskurs på bane (glattkjøring)</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 1 dag</li>
        <li><strong>Fokus:</strong> bremsing, unnamanøver, kontrolltap</li>
        <li><strong>Pris:</strong> 4 000–6 000 kr</li>
      </ul>
      
      <h3>Sikkerhetskurs på vei</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 4–5 timer</li>
        <li><strong>Fokus:</strong> risiko, planlegging, selvstendig kjøring</li>
        <li><strong>Pris:</strong> 7 000–11 000 kr</li>
      </ul>
      
      <p>Dette er ofte høydepunktet for mange elever, fordi man kjenner at "nå er jeg nesten i mål".</p>
      
      <h2>Steg 6: Teoriprøven</h2>
      
      <p>Teoriprøven kan du ta når du er 17,5 år – og du trenger ikke være ferdig å kjøre først. Faktisk er det smart å ta den tidlig, så du slipper stress senere.</p>
      
      <p><strong>Husk:</strong></p>
      
      <ul>
        <li>Bestå først = kjør videre</li>
        <li>Strøk? Du kan prøve igjen dagen etter</li>
        <li><strong>Pris:</strong> 380 kr</li>
      </ul>
      
      <p>Bruk gode apper og testverktøy – teoriklar, Trafikkbokas digitale tester, eller Statens vegvesen sine demooppgaver. Det gjør en enorm forskjell.</p>
      
      <h2>Steg 7: Oppkjøring</h2>
      
      <p>Dette er finalen. Den siste testen.</p>
      
      <p>Og ja – det er helt normalt å være nervøs.</p>
      
      <h3>Selve oppkjøringen består av:</h3>
      
      <ul>
        <li>Sikkerhetsspørsmål</li>
        <li>Forberedelse og planlegging</li>
        <li>25–45 minutter kjøring</li>
        <li>Selvstendig kjøring</li>
        <li>Tilbakemelding fra sensor</li>
      </ul>
      
      <ul>
        <li><strong>Varighet:</strong> 45–75 minutter</li>
        <li><strong>Pris:</strong> 1 370 kr + ca. 1 000–2 000 kr for skolebil</li>
      </ul>
      
      <p><strong>Målet her er enkelt:</strong> Du skal vise at du kan kjøre trygt og fornuftig – ikke perfekt.</p>
      
      <h2>Steg 8: Få førerkortet i hånda</h2>
      
      <p>Består du? Da får du et midlertidig førerkort digitalt med én gang.</p>
      
      <p>Det fysiske kommer i posten i løpet av få dager.</p>
      
      <p>Og ja – den følelsen er like god som alle sier.</p>
      
      <h2>Hvor mange steg er du egentlig unna?</h2>
      
      <p>Når man ser det satt opp slik, blir prosessen mye mer oversiktlig. De fleste gjør ting i litt ulik rekkefølge, men kjernen er den samme:</p>
      
      <ol>
        <li>Grunnkurs</li>
        <li>Øvelseskjøring</li>
        <li>Kontroll over bilen</li>
        <li>Trafikalsk forståelse</li>
        <li>Obligatoriske kurs</li>
        <li>Teoriprøve</li>
        <li>Oppkjøring</li>
        <li>Førerkortet!</li>
      </ol>
      
      <blockquote>
        <p><strong>Kort fortalt:</strong> Prosessen består av 8 hovedsteg. De fleste bruker 8-20 uker totalt, avhengig av hvor mye de øver privat og hvor raskt de lærer.</p>
      </blockquote>
      
      <h2>Vil du ha hjelp til å komme i gang riktig?</h2>
      
      <p>Riktig kjøreskole kan gjøre hele prosessen raskere, billigere og mindre stressende.</p>
      
      <p>Problemet er at det finnes altfor mange skoler – og prisene varierer enormt.</p>
      
      <p>Vi kan matche deg med gode skoler i ditt område, basert på:</p>
      
      <ul>
        <li>pris</li>
        <li>ventetid</li>
        <li>tilgjengelighet</li>
        <li>elevresultater</li>
      </ul>
      
      <p>Fyll ut skjemaet – så får du gratis og uforpliktende anbefalinger.</p>
    `,
  },
  "11": {
    id: 11,
    title: "Hvordan velge riktig kjøreskole (sjekkliste)",
    excerpt: "Enkel, men grundig sjekkliste som gjør det lettere å finne en kjøreskole som matcher både budsjettet ditt og måten du lærer på.",
    date: "7. februar 2025",
    readTime: "7 min lesing",
    category: "Tips",
    image: "/Article-photo5.png",
    content: `
      <p class="lead">Å velge kjøreskole kan føles litt som å velge trener. Du skal stole på personen, du skal trives, og du skal faktisk lære noe – helst uten å tømme lommeboka helt. Likevel er det overraskende mange som bare velger den nærmeste skolen, eller den første som dukker opp på Google.</p>
      
      <p>Det kan fungere. Men ofte er det ikke det smarteste valget.</p>
      
      <p>Her får du en enkel, men grundig sjekkliste som gjør det lettere å finne en skole som matcher både budsjettet ditt og måten du lærer på.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo5.png" alt="Velge riktig kjøreskole" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Å velge riktig kjøreskole handler om å finne en skole som matcher både budsjettet ditt og måten du lærer på.
        </figcaption>
      </figure>
      
      <h2>Start med det viktigste: Hva trenger du?</h2>
      
      <p>Det høres banalt ut, men mange hopper rett til pris uten å tenke gjennom behovene sine først. La oss ta en liten realitetssjekk:</p>
      
      <ul>
        <li>Har du kjørt mye privat?</li>
        <li>Er du helt fersk?</li>
        <li>Lærer du raskt, eller trenger du ro og tid?</li>
        <li>Ønsker du intensivløp eller små drypp over tid?</li>
      </ul>
      
      <p>Alt dette påvirker hvilken skole som faktisk passer deg.</p>
      
      <h2>Pris – men se bak tallene</h2>
      
      <p>Pris er viktig, men ikke i isolasjon. En kjøreskole med lav timepris kan bli dyrere hvis læreren er dårlig til å forklare, eller hvis du aldri får progresjon.</p>
      
      <h3>Slik vurderer du pris på en smart måte</h3>
      
      <ul>
        <li>Sjekk pris per kjøretime</li>
        <li>Sammenlign pakkepriser (med og uten bil til oppkjøring)</li>
        <li>Spør om tilleggskostnader (bane, mørkekjøring, gebyrer)</li>
        <li>Undersøk hvor mye elever vanligvis ender opp med å betale totalt</li>
      </ul>
      
      <p>Mange skoler kan se billige ut på papiret, men blir dyre når du legger inn alt du faktisk må gjennom.</p>
      
      <h2>Kvalitet: Den usynlige, men viktigste faktoren</h2>
      
      <p>Du kan nesten alltid kjenne igjen en god trafikklærer. De er rolige, klare i kommunikasjonen og gir deg trygghet i bilen. Likevel er dette vanskelig å vurdere uten erfaring – så bruk andre kilder.</p>
      
      <h3>Ting du bør sjekke</h3>
      
      <ul>
        <li>Har skolen gode anmeldelser på Google eller Facebook?</li>
        <li>Snakker elevene om progresjon, trygghet og god stemning?</li>
        <li>Er lærerne erfarne og pedagogiske?</li>
        <li>Har skolen lav strykprosent (spør gjerne direkte – mange svarer faktisk ærlig)</li>
      </ul>
      
      <h2>Tilgjengelighet – undervurdert, men superviktig</h2>
      
      <p>Du tror kanskje at det ikke betyr så mye, men tilgjengelighet påvirker læringen mer enn folk tror.</p>
      
      <h3>Hva du bør se etter:</h3>
      
      <ul>
        <li>Har de timer på kvelder og helger?</li>
        <li>Kan du få fast instruktør?</li>
        <li>Er det enkelt å bestille timer digitalt?</li>
        <li>Hvor lang er ventetiden for nye elever?</li>
      </ul>
      
      <p>Skoler med fullbookede lærere kan gi lang ventetid mellom timene – og det kan faktisk gjøre opplæringen tregere og dyrere.</p>
      
      <h2>Kjøreskolens "følelse" – ja, det teller faktisk</h2>
      
      <p>Det høres kanskje litt vagt ut, men kjemi mellom deg og læreren betyr mye.</p>
      
      <p>Noen lærere er strenge og direkte.</p>
      
      <p>Andre er rolige og tålmodige.</p>
      
      <p>Noen kjører hard progresjon – andre tar det litt mer piano.</p>
      
      <p>Du må finne den typen du lærer best av.</p>
      
      <h3>Et lite tips:</h3>
      
      <p>Be om en enkel prøvetime før du binder deg til pakker.</p>
      
      <p>Hvis du ikke føler deg trygg, gå til en annen skole. En god lærer skal få deg til å slappe av, ikke spenne skuldrene.</p>
      
      <h2>Sjekkliste: Den korte versjonen</h2>
      
      <p>Hvis du vil ha alt kort oppsummert, så får du det her:</p>
      
      <ul>
        <li>✔ <strong>Sjekk pris</strong> … men se også totalen – ikke bare timeprisen.</li>
        <li>✔ <strong>Les anmeldelser</strong> … og se hva elevene faktisk skriver, ikke bare stjerner.</li>
        <li>✔ <strong>Vurder tilgjengelighet</strong> … timebooking, fleksibilitet og ventetid.</li>
        <li>✔ <strong>Prøv en prøvetime</strong> … få en følelse av læreren før du kjøper pakker.</li>
        <li>✔ <strong>Sjekk hva som er inkludert</strong> … noen pakker mangler faktisk viktige kurs.</li>
        <li>✔ <strong>Tenk på hva du trenger</strong> … intensivkurs, roligere opplæring, mye privat øving, etc.</li>
      </ul>
      
      <h2>Konklusjon – velg kjøreskole som passer deg, ikke den som roper høyest</h2>
      
      <p>Det finnes ingen "beste kjøreskole" for alle – men det finnes en som er best for deg. Når du bruker sjekklisten over, blir det mye enklere å unngå både dyre bomkjøp og unødvendig stress.</p>
      
      <p>En god kjøreskole får deg ikke bare gjennom oppkjøringen – den gjør deg faktisk trygg på veien. Og det er jo det som betyr noe.</p>
      
      <blockquote>
        <p><strong>Kort sagt:</strong> Det finnes ingen "beste kjøreskole" for alle – men det finnes en som er best for deg. Sjekk pris, les anmeldelser, vurder tilgjengelighet, og prøv en prøvetime før du binder deg.</p>
      </blockquote>
      
      <h2>Vil du sammenligne kjøreskoler?</h2>
      
      <p>Fyll ut skjemaet.</p>
    `,
  },
  "12": {
    id: 12,
    title: "Hvordan bestå oppkjøringen på første forsøk (den komplette guiden)",
    excerpt: "Komplett guide som viser nøyaktig hva sensoren vurderer, hvilke feil som oftest gjør at folk stryker, og hva du kan gjøre for å øke sjansene dine.",
    date: "10. februar 2025",
    readTime: "10 min lesing",
    category: "Tips",
    image: "/Article-photo5.png",
    content: `
      <p class="lead">Oppkjøringen er siste hinder før du kan kalle deg sjåfør – og for mange den mest nervepirrende delen av førerkortprosessen. Det er helt normalt å være nervøs. Det som ikke er nødvendig, er å gå inn i prøven uten en klar plan.</p>
      
      <p>Denne guiden viser deg nøyaktig hva sensoren vurderer, hvilke feil som oftest gjør at folk stryker, og hva du kan gjøre for å øke sjansene dine dramatisk.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo5.png" alt="Bestå oppkjøringen på første forsøk" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Med riktig forberedelse kan du øke sjansene for å bestå oppkjøringen på første forsøk betydelig.
        </figcaption>
      </figure>
      
      <h2>Kort forklart: De som består på første forsøk har tre ting til felles</h2>
      
      <ol>
        <li>De er trygge bak rattet</li>
        <li>De kjenner sensorens forventninger</li>
        <li>De unngår de klassiske feilene som feller 4 av 10 kandidater</li>
      </ol>
      
      <p>Oppkjøringen handler faktisk mindre om å kjøre perfekt – og mer om å vise trygghet, kontroll og god trafikkforståelse.</p>
      
      <h2>Hva sensoren egentlig vurderer</h2>
      
      <p>Sensoren sitter ikke og teller småfeil.</p>
      
      <p>De vurderer helheten av kjøringen din. Her er de viktigste punktene:</p>
      
      <h3>1. Trafikkforståelse</h3>
      
      <p>Ser du langt fram? Leser du situasjoner tidlig? Gir du andre trafikanter forutsigbarhet?</p>
      
      <h3>2. Plassering og kjøreflyt</h3>
      
      <p>Ligger du riktig i kjørefeltet? Følger du køflyten? Tilpasser du farten til forholdene?</p>
      
      <h3>3. Observasjon og blikkbruk</h3>
      
      <p>Dette er den viktigste delen. Dårlig blikkbruk = høyrisiko = stryk.</p>
      
      <h3>4. Risikovurdering</h3>
      
      <p>Hvordan håndterer du kompliserte situasjoner, kryss og rundkjøringer?</p>
      
      <h3>5. Kjøretøybehandling</h3>
      
      <p>Myk styring, riktig bruk av clutch, jevn fart og kontroll på giring.</p>
      
      <h3>6. Selvstendighet</h3>
      
      <p>Kan du ta gode valg uten å bli ledet av sensor?</p>
      
      <p>Det er dette som avgjør alt – ikke om du girer litt seint eller treffer prestisjeparkeringen perfekt.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> Oppkjøringen handler mindre om å kjøre perfekt – og mer om å vise trygghet, kontroll og god trafikkforståelse. Sensor vurderer helheten av kjøringen din, ikke småfeil.</p>
      </blockquote>
      
      <h2>10 vanlige feil som gjør at folk stryker (unngå disse!)</h2>
      
      <ol>
        <li><strong>Uklart blikk og dårlig observasjon</strong><br>Du må se langt frem og bruke speil jevnlig.</li>
        <li><strong>Feil fart inn i rundkjøring</strong><br>For høy fart = dårlig kontroll. For lav fart = dårlig flyt.</li>
        <li><strong>Sen reaksjon på trafikkbildet</strong><br>Sensor vil se at du ligger et steg foran.</li>
        <li><strong>Ujevn fart og vinglete plassering</strong><br>Tyder på lav trygghet.</li>
        <li><strong>For dårlig samhandling</strong><br>Glem ikke blinklys, øyekontakt, blikk og tydelige valg.</li>
        <li><strong>Ukontrollert stress</strong><br>Du trenger ikke være rolig – du må være kontrollert.</li>
        <li><strong>Ignorerer skilt eller markeringslinjer</strong><br>Dette er objektive feil som veier tungt.</li>
        <li><strong>Dårlig venstresving i lyskryss</strong><br>En klassiker.</li>
        <li><strong>Usikre feltbytter</strong><br>For kort eller ingen speilbruk = stryk.</li>
        <li><strong>Underkjøring i kompliserte kryss</strong><br>Her vil sensor se at du er både trygg og selvstendig.</li>
      </ol>
      
      <h2>Hvordan forberede seg riktig (3–5 dager før oppkjøring)</h2>
      
      <p>Dette er perioden hvor du gjør den største forskjellen.</p>
      
      <ul>
        <li>🔹 <strong>Ta minst én oppkjøringssimulering hos trafikkskolen</strong><br>Sensor-lignende prat + realistisk rute + tydelige tilbakemeldinger.</li>
        <li>🔹 <strong>Kjør privat i ulikt miljø</strong><br>By, landevei, rush, kveldstid – dette gir deg trygghet.</li>
        <li>🔹 <strong>Tren på parkeringer og vendemuligheter</strong><br>Sensor vil gi deg en lavstress-oppgave. Du vil at dette skal sitte automatisk.</li>
        <li>🔹 <strong>Kjenn teknisk kontroll</strong><br>Du trenger ikke pugge alt – men vit de viktigste punktene.</li>
      </ul>
      
      <h2>På selve dagen: Slik gjør du et knallsterkt førsteinntrykk</h2>
      
      <p>Sensoren vurderer deg før du kjører én meter. Her er små ting som gir trygg signaler:</p>
      
      <ul>
        <li>Møt opp i god tid</li>
        <li>Vær rolig og lyttende</li>
        <li>Still noen spørsmål om dagens rute (viser modenhet)</li>
        <li>Juster sete, ratt og speil ordentlig</li>
        <li>Gjør rolig, kontrollert start</li>
      </ul>
      
      <p>Et trygt førsteinntrykk gjør sensor mer avslappet – og deg mer komfortabel.</p>
      
      <h2>Under selve kjøringen: Dette er hemmeligheten</h2>
      
      <ul>
        <li>⭐ <strong>Kjør jevnt og forutsigbart</strong><br>Sensor elsker flyt, ikke perfeksjon.</li>
        <li>⭐ <strong>Fortell hva du gjør med kroppen</strong><br>Blikkbruk og speilbruk må være tydelig.</li>
        <li>⭐ <strong>Ikke overtenk småfeil</strong><br>Alle gjør småfeil – det er helt normalt. Sensor bryr seg om helheten.</li>
        <li>⭐ <strong>Ta litt plass</strong><br>Tvil fører til nøling, og nøling skaper farlige situasjoner. Vær tydelig.</li>
      </ul>
      
      <h2>Den mentale biten – den glemte suksessfaktoren</h2>
      
      <p>Oppkjøringen er 50 % mental kontroll.</p>
      
      <p>Prøv dette:</p>
      
      <ul>
        <li>Pust rolig før du starter</li>
        <li>Minn deg selv på at sensoren vil at du skal bestå</li>
        <li>Fokuser på neste situasjon, ikke den forrige</li>
        <li>Snakk deg selv gjennom vanskelige kryss ("høyre, klar, flyt…")</li>
      </ul>
      
      <p>Dette er ting som faktisk fungerer i praksis.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Oppkjøringen er 50% mental kontroll. Kjør jevnt og forutsigbart, bruk blikket tydelig, og ikke overtenk småfeil. Sensor bryr seg om helheten, ikke perfeksjon.</p>
      </blockquote>
      
      <h2>Etter kjøringen</h2>
      
      <p>Sensor vil gi en vurdering av helheten. Dersom du består:</p>
      
      <p>👉 Gratulerer!</p>
      
      <p>🥳 Du har nettopp fullført noe av det mest krevende du gjør som ung sjåfør.</p>
      
      <p>Dersom du ikke består:</p>
      
      <p>Det skjer oftere enn folk tror. Og det betyr ikke at du er en dårlig sjåfør – det betyr bare at du trenger litt mer erfaring. Sensoren forklarer nøyaktig hva du må forbedre.</p>
      
      <h2>Vil du øke sjansen for å bestå på første forsøk?</h2>
      
      <p>Vi matcher deg med trafikkskoler som:</p>
      
      <ul>
        <li>gir realistisk vurdering</li>
        <li>har høy gjennomføringsprosent</li>
        <li>tilbyr oppkjøringssimulering</li>
        <li>er kjent for god oppfølging</li>
      </ul>
      
      <p>Fyll ut skjemaet – så får du anbefalinger innen få minutter.</p>
    `,
  },
  "13": {
    id: 13,
    title: "Hvor mange kjøretimer trenger man egentlig? (realistisk guide 2025)",
    excerpt: "Realistisk guide som viser hvor mange kjøretimer de fleste faktisk trenger, og hvilke faktorer som påvirker antall timer mest.",
    date: "12. februar 2025",
    readTime: "9 min lesing",
    category: "Guider",
    image: "/Article-photo2.png",
    content: `
      <p class="lead">Det store spørsmålet dukker alltid opp før eller senere:</p>
      
      <p><strong>Hvor mange kjøretimer må jeg faktisk ta?</strong></p>
      
      <p>Ikke hva kjøreskolene sier i reklamen, ikke hva vennene dine "følte", men et realistisk tall som faktisk gjelder for deg.</p>
      
      <p>Greia er at det ikke finnes ett enkelt svar – men det finnes mønstre, og de gir oss veldig gode pekepinner. La oss gå gjennom alt, ærlig og forståelig.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo2.png" alt="Hvor mange kjøretimer trenger man" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Antall kjøretimer varierer mye, men de fleste trenger 10-25 timer. Hvor mye du øver privat er den største faktoren.
        </figcaption>
      </figure>
      
      <h2>Det korte svaret først: De fleste trenger 10–25 kjøretimer</h2>
      
      <p>Det er variasjon mellom elever, men i 2025 ligger gjennomsnittet overraskende stabilt:</p>
      
      <ul>
        <li><strong>Erfarne elever med mye øvelseskjøring:</strong> 6–12 timer</li>
        <li><strong>Gjennomsnittselever:</strong> 12–20 timer</li>
        <li><strong>Elever med lite erfaring eller lav progresjon:</strong> 20–30+ timer</li>
      </ul>
      
      <p>Høyere tall er ikke uvanlig, selv om mange tror det betyr at noe er "galt". Det gjør det ikke. Noen lærer rett og slett bedre med mer repetisjon – særlig når det gjelder trafikkforståelse.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> De fleste trenger 10-25 kjøretimer. Erfarne elever med mye privat øving: 6-12 timer. Gjennomsnittselever: 12-20 timer. Elever med lite erfaring: 20-30+ timer. Høyere tall er ikke uvanlig.</p>
      </blockquote>
      
      <h2>Hvorfor varierer antall timer så mye?</h2>
      
      <p>Kjøretimer handler ikke bare om ferdigheter. De handler om trygghet, samarbeid, læringsstil og det å forstå trafikken som et system. Det gjør at folk utvikler seg i veldig forskjellig tempo.</p>
      
      <p>Her er faktorene som påvirker mest:</p>
      
      <h3>1. Hvor mye du øvelseskjører privat</h3>
      
      <p>Dette er den desidert største forskjellen.</p>
      
      <p>Kjører du mye hjemme, trenger du færre timer. Så enkelt er det.</p>
      
      <h3>2. Hvor trygg du er på egen kjøring</h3>
      
      <p>Noen sitter rolig bak rattet fra dag én.</p>
      
      <p>Andre trenger tid for å få ned skuldrene.</p>
      
      <h3>3. Hvor godt du forstår trafikken</h3>
      
      <p>Tenk blikkbruk, flyt, plassering og vurdering.</p>
      
      <p>Dette tar ofte lenger tid enn selve bilkontrollen.</p>
      
      <h3>4. Hvor god match du har med trafikklæreren</h3>
      
      <p>Relationen betyr faktisk mye.</p>
      
      <p>En lærer du ikke føler deg trygg på = flere timer og saktere progresjon.</p>
      
      <h3>5. Kjøreforholdene</h3>
      
      <p>Vinter, rushtrafikk, tett bymiljø – alt påvirker.</p>
      
      <h2>Hva er "normalt"? (3 typiske elevprofiler)</h2>
      
      <p>Det er lett å sammenligne seg med andre, men det er sjelden nyttig. Folk starter på helt ulike nivåer. Her er tre typiske elevtyper – kanskje kjenner du deg igjen i en av dem?</p>
      
      <h3>⭐ Profil 1: Den erfarne (8–12 timer)</h3>
      
      <ul>
        <li>Har kjørt mye hjemme</li>
        <li>Mestring av clutch, gir, parkering og rundkjøringer</li>
        <li>Lærer fort</li>
        <li>Trenger mest finpussing og kurs</li>
      </ul>
      
      <p>Dette er ofte elever som tar lappen relativt raskt.</p>
      
      <h3>⭐ Profil 2: Den vanlige (12–20 timer)</h3>
      
      <ul>
        <li>Litt øvelseskjøring, men ikke nok til å bli helt trygg</li>
        <li>Trenger tid på trafikkflyt</li>
        <li>Jevn progresjon</li>
        <li>Litt ekstra timer før oppkjøring</li>
      </ul>
      
      <p>Dette er majoriteten av alle elever.</p>
      
      <h3>⭐ Profil 3: Den forsiktige (20–30+ timer)</h3>
      
      <ul>
        <li>Lite øvelseskjøring</li>
        <li>Usikre i trafikk</li>
        <li>Trenger mer repetisjon og forutsigbar progresjon</li>
      </ul>
      
      <p>Mange elever går faktisk saktere frem enn de tror – og det er helt greit.</p>
      
      <h2>Er flere kjøretimer egentlig negativt?</h2>
      
      <p>Ikke nødvendigvis.</p>
      
      <p>Det viktigste er at du blir trygg. En ekstra time eller to er mye billigere enn å stryke på oppkjøring – både økonomisk og mentalt.</p>
      
      <p>Det finnes ingen medalje for færrest timer.</p>
      
      <p>Men det finnes en ganske stor ulempe ved å ta for få.</p>
      
      <h2>Hvordan vet du at du trenger flere timer?</h2>
      
      <p>Her er noen tegn som er verdt å ta på alvor:</p>
      
      <ul>
        <li>Du er ofte usikker på trafikkbildet</li>
        <li>Du reagerer sent i situasjoner</li>
        <li>Du får samme type tilbakemelding flere ganger</li>
        <li>Du er stresset bak rattet</li>
        <li>Du bruker mye energi på selve bilkontrollen</li>
      </ul>
      
      <p>Dette er helt vanlig – og noe som nesten alltid løses med litt mer mengdetrening.</p>
      
      <h2>Hvordan vet du at du nærmer deg klar?</h2>
      
      <p>De fleste opplever følgende før de er klare for oppkjøring:</p>
      
      <ul>
        <li>Du tenker mindre på bilkontroll</li>
        <li>Du "leser" trafikken fremover</li>
        <li>Du plasserer bilen riktig uten at læreren må minne deg på det</li>
        <li>Unødvendige feil skjer sjeldnere</li>
        <li>Du føler deg rolig på ny kjørerute</li>
      </ul>
      
      <p>Det føles nesten som om bilen og hodet jobber litt mer i takt.</p>
      
      <h2>En liten myte det er på tide å kvitte seg med</h2>
      
      <p>"Noen kjøreskoler gir ekstra timer for å tjene penger."</p>
      
      <p>Ja, det finnes eksempler – men i de fleste tilfeller skyldes ekstra timer manglende privat trening, forskjellig læringsnivå eller rett og slett behov for mer tid i trafikken.</p>
      
      <p>En god skole forklarer alltid hvorfor de anbefaler flere timer.</p>
      
      <p>Er de uklare eller presser på? Da kan du bytte.</p>
      
      <h2>Hvordan spare timer (og penger) uten å kutte kvalitet?</h2>
      
      <p>Her er strategier som faktisk fungerer:</p>
      
      <ul>
        <li>Øvelseskjør korte, hyppige turer</li>
        <li>Tren på én ferdighet om gangen</li>
        <li>Lær deg god blikkbruk tidlig</li>
        <li>Kjør i ulike miljøer (by, landevei, kveldstid, motorvei)</li>
        <li>Ta teoriprøven tidlig – det gir bedre forståelse i trafikken</li>
        <li>Finn en lærer du har god kjemi med</li>
      </ul>
      
      <p>Få ting sparer deg mer penger enn å være trygg og strukturert.</p>
      
      <h2>Vil du vite hvor mange timer du sannsynligvis trenger?</h2>
      
      <p>Det varierer fra by til by, lærer til lærer og elev til elev.</p>
      
      <p>Derfor gir vi deg en personlig vurdering – helt gratis.</p>
      
      <p>Fyll ut skjemaet – så matcher vi deg med kjøreskoler som gir en realistisk timeplan og en ærlig vurdering av behovet ditt.</p>
    `,
  },
  "14": {
    id: 14,
    title: "Hvor lang tid tar det å ta førerkort? (realistisk guide 2025)",
    excerpt: "Realistisk guide som viser hvor lang tid det tar å ta førerkort, fra start til slutt, og hva som påvirker tidsbruken.",
    date: "15. februar 2025",
    readTime: "8 min lesing",
    category: "Guider",
    image: "/Article-photo2.png",
    content: `
      <p class="lead">Det store spørsmålet dukker opp hos alle som skal starte med lappen: <strong>Hvor lang tid tar det egentlig?</strong></p>
      
      <p>Noen sier "et par måneder", andre bruker nesten et år. Så hva er sant? Vel – det korte svaret er at tiden varierer mer enn de fleste tror, men det finnes tydelige mønstre som kan hjelpe deg å planlegge smart.</p>
      
      <p>La oss gå gjennom alt, uten stress og uten teknisk tåkeprat.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo2.png" alt="Hvor lang tid tar det å ta førerkort" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          De fleste bruker 8-20 uker på å ta førerkort. Tiden varierer basert på hvor mye du øver privat og hvor raskt du lærer.
        </figcaption>
      </figure>
      
      <h2>Hvor lang tid bruker de fleste?</h2>
      
      <p>De fleste som tar førerkort klasse B i 2025 bruker et sted mellom 8 og 20 uker. Det høres kanskje ut som et stort spenn, men det er det som faktisk skjer i praksis.</p>
      
      <p>Grunnen? Noen har kjørt masse hjemme, mens andre starter fra null. Noen går på skole eller jobber 100 %, mens andre har fleksibel tid. Og ja – enkelte lærer fortere enn andre. Sånn er livet.</p>
      
      <p>Her er en enkel tommelfingerregel som faktisk stemmer:</p>
      
      <ul>
        <li><strong>Rask fremdrift (4–8 uker)</strong> → Mye øvelseskjøring + ledig kalender</li>
        <li><strong>Normal fremdrift (8–16 uker)</strong> → Litt øvelseskjøring og vanlig timeplan</li>
        <li><strong>Lang fremdrift (16–30 uker)</strong> → Lite privat kjøring eller travle dager</li>
      </ul>
      
      <p>Kort sagt: Du kan gjøre prosessen kort eller lang, men noen ting er uansett faste – som obligatoriske kurs og tilgjengelighet hos skolene.</p>
      
      <blockquote>
        <p><strong>Viktig:</strong> De fleste bruker 8-20 uker på å ta førerkort. Rask fremdrift: 4-8 uker. Normal fremdrift: 8-16 uker. Lang fremdrift: 16-30 uker. Tiden avhenger av hvor mye du øver privat.</p>
      </blockquote>
      
      <h2>Hvor lang tid tar hvert trinn i førerkortløpet?</h2>
      
      <p>Mange blir overrasket over hvor mange steg som faktisk inngår. Det er ikke vanskelig, men det tar tid – spesielt hvis du må vente på timer.</p>
      
      <h3>Trinn 1: Trafikalt grunnkurs (for deg under 25)</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 3–4 kvelder</li>
      </ul>
      
      <p>Dette må være fullført før du kan begynne å øvelseskjøre.</p>
      
      <h3>Trinn 2: Grunnleggende kjøreteknikk</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 2–6 uker</li>
      </ul>
      
      <p>Her lærer du kontroll på bilen. Varierer enormt med hvor mye du kjører privat.</p>
      
      <h3>Trinn 3: Trafikal forståelse</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 2–5 uker</li>
      </ul>
      
      <p>Dette er den fasen der alt "faller på plass" – trafikkflyt, blikkbruk, situasjonsforståelse.</p>
      
      <h3>Trinn 4: Avsluttende opplæring</h3>
      
      <ul>
        <li><strong>Varighet:</strong> 1–2 uker</li>
      </ul>
      
      <p>Her kommer:</p>
      
      <ul>
        <li>Sikkerhetskurs på bane</li>
        <li>Sikkerhetskurs på vei</li>
        <li>Obligatoriske veiledningstimer</li>
      </ul>
      
      <p>Alt dette må tas gjennom kjøreskolen, og ventetid kan forekomme.</p>
      
      <h3>Teoriprøve og oppkjøring</h3>
      
      <p>Noen tar teoriprøven tidlig, andre rett før oppkjøring. Oppkjøringen kan ha venteliste – spesielt i Oslo, Bergen og Trondheim.</p>
      
      <ul>
        <li><strong>Teoriprøve:</strong> Kan tas når du vil etter fylte 17,5 år</li>
        <li><strong>Ventetid på oppkjøring:</strong> 2–8 uker avhengig av by</li>
        <li><strong>Forberedelser:</strong> 1–4 uker ekstra hvis du trenger finpussing</li>
      </ul>
      
      <h2>Hvorfor tar det lenger tid for noen?</h2>
      
      <p>Det handler sjelden om at folk er "dårlige til å kjøre". Det er mye mer praktisk enn som så.</p>
      
      <p>Dette er de vanligste tidstyvene:</p>
      
      <ul>
        <li>Fulltidsstudier eller jobb</li>
        <li>Kjøreskoler med lange ventelister</li>
        <li>Lite privat øvelseskjøring</li>
        <li>Vær og sesong (vinter betyr ofte tregere progresjon)</li>
        <li>Stryk på teorien eller oppkjøring</li>
      </ul>
      
      <p>Og noen ganger klikker man bare ikke med første lærer – og da stopper det litt opp.</p>
      
      <h2>Kan man ta førerkort fort?</h2>
      
      <p>Ja, faktisk. Mange skoler tilbyr intensivopplæring.</p>
      
      <p>Men det er greit å være litt realistisk her: Intensivkurs krever at du allerede er trygg bak rattet.</p>
      
      <h3>Intensivkurs passer best hvis du:</h3>
      
      <ul>
        <li>Har kjørt mye privat</li>
        <li>Lærer fort</li>
        <li>Har fri et par uker</li>
        <li>Liker høyt tempo</li>
      </ul>
      
      <p>For alle andre er vanlig progresjon både billigere og mindre stressende.</p>
      
      <h2>Den ideelle fremdriftsplanen (for de fleste)</h2>
      
      <p>En god rytme – som passer for 80 % av elevene – ser slik ut:</p>
      
      <ol>
        <li><strong>Uke 1–2:</strong> Start med noen kjøretimer + masse privat kjøring</li>
        <li><strong>Uke 3–6:</strong> Jobb med progresjon + bygg opp rutiner</li>
        <li><strong>Uke 7–9:</strong> Ta teoriprøven</li>
        <li><strong>Uke 10–12:</strong> Obligatoriske kurs</li>
        <li><strong>Uke 13–16:</strong> Finpuss + oppkjøring</li>
      </ol>
      
      <p><strong>Totalt: ca. 12–16 uker</strong></p>
      
      <p>Men igjen – du styrer tempoet, ikke kjøreskolen.</p>
      
      <h2>Så… hvor mye kontroll har du selv?</h2>
      
      <p>Mer enn du tror. Faktisk avgjøres fremdriften av tre ting du kan påvirke nesten fullt ut:</p>
      
      <ol>
        <li>Hvor ofte du øvelseskjører</li>
        <li>Hvor tidlig du booker kjøretimer</li>
        <li>Hvor godt forberedt du er til teoriprøven</li>
      </ol>
      
      <p>Dette alene kan redusere total tid med flere uker.</p>
      
      <h2>Klar for å komme i gang?</h2>
      
      <p>Vil du vite hvor raskt du kan få lappen der du bor?</p>
      
      <p>Tiden varierer kraftig mellom byer – og noen skoler har nesten ingen ventetid.</p>
      
      <p>Fyll ut skjemaet vårt – så finner vi kjøreskolene med raskest progresjon og ledige timer akkurat nå.</p>
    `,
  },
  "15": {
    id: 15,
    title: "Forskjellen på trafikkskole og privat øvelseskjøring (og hvorfor du trenger begge)",
    excerpt: "Tydelig forklaring på hva trafikkskole og privat øvelseskjøring gir deg, og hvordan du kan bruke kombinasjonen smart for å spare tid og penger.",
    date: "17. februar 2025",
    readTime: "7 min lesing",
    category: "Tips",
    image: "/Article-photo3.png",
    content: `
      <p class="lead">Når du skal ta lappen, er det to hovedkilder til kjøretrening: trafikkskole og privat øvelseskjøring. Begge er viktige – men de fungerer på helt forskjellige måter, og mange undervurderer hvor stor forskjellen faktisk er.</p>
      
      <p>Her får du en tydelig forklaring på hva hver av dem gir deg, hva de ikke gir deg, og hvordan du kan bruke kombinasjonen smart for å spare tid og penger.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo3.png" alt="Trafikkskole vs privat øvelseskjøring" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Trafikkskole og privat øvelseskjøring trener to forskjellige ferdigheter. Du trenger begge for å bli en god sjåfør.
        </figcaption>
      </figure>
      
      <h2>Kort forklart: De trener to helt forskjellige ferdigheter</h2>
      
      <ul>
        <li><strong>Trafikkskolen</strong> gir deg kompetansen du må ha for å bestå, kjøre riktig og forstå trafikken.</li>
        <li><strong>Privat øvelseskjøring</strong> gir deg rutinen du trenger for å bli trygg og redusere antall timer.</li>
      </ul>
      
      <p>Du trenger begge for å bli en god sjåfør – og for å klare oppkjøringen uten stress.</p>
      
      <h2>Hva du får på trafikkskolen (som du ikke får hjemme)</h2>
      
      <h3>1. Riktig teknikk – fra dag én</h3>
      
      <p>En trafikklærer ser detaljer som andre sjelden legger merke til: blikkbruk, plassering, trafikkforståelse og mønster i feilene dine. Det gjør at du lærer riktig med en gang – ikke utvikler dårlige vaner.</p>
      
      <h3>2. Strukturert progresjon</h3>
      
      <p>Kjøreskoler jobber etter læreplanen. Det betyr at du går gjennom alt i riktig rekkefølge, uten hull i kunnskapen.</p>
      
      <h3>3. Trafikkforståelse</h3>
      
      <p>Det er én ting å styre bilen.</p>
      
      <p>Det er noe helt annet å forstå trafikkflyt, risikovurdering og samspill. Dette lærer du best av profesjonelle.</p>
      
      <h3>4. Feedback som faktisk gjør deg bedre</h3>
      
      <p>Foreldre og venner gir ofte trygge rammer, men sjelden presise tilbakemeldinger. Læreren gir konkrete, målbare råd som raskt utvikler deg.</p>
      
      <h3>5. Forberedelser til oppkjøring</h3>
      
      <p>Trafikklæreren vet hvordan sensoren tenker – og hva som kreves for å bestå.</p>
      
      <h2>Hva privat øvelseskjøring gir deg (som trafikkskolen ikke kan gi)</h2>
      
      <h3>1. Mengdetrening</h3>
      
      <p>Du blir ikke trygg av 10 timer hos lærer. Det er mengden som avgjør, og den får du billigst privat.</p>
      
      <h3>2. Variasjon</h3>
      
      <p>Foreldre og venner tar deg på spontane turer, nye ruter og realistiske hverdagssituasjoner. Dette øker tryggheten dramatisk.</p>
      
      <h3>3. Lavere kostnad per time</h3>
      
      <p>La oss være ærlige: timer hos kjøreskolen koster. Privat trening gjør at du ikke trenger unødvendige ekstratimer.</p>
      
      <h3>4. Trygghet over tid</h3>
      
      <p>Jo mer du kjører, desto lavere blir stressnivået – og det er ofte dette som avgjør om du består.</p>
      
      <h2>Typiske feil når man bare kjører privat</h2>
      
      <ul>
        <li>Man lærer feil teknikk og "låser" dårlige vaner</li>
        <li>Man kjører kun kjente ruter</li>
        <li>Man trener for lite på bymiljø, rundkjøringer og samspill</li>
        <li>Man får lite konkret tilbakemelding</li>
        <li>Man blir trygg bak rattet, men ikke god på trafikkforståelse</li>
      </ul>
      
      <p>Dette er grunnen til at mange som har kjørt masse privat likevel stryker.</p>
      
      <h2>Typiske feil når man kun bruker trafikkskole</h2>
      
      <ul>
        <li>For lite mengdetrening</li>
        <li>Læreren må bruke tid på grunnleggende rutiner</li>
        <li>For få situasjoner mellom timene til å modnes</li>
        <li>Dyrere totalkostnad</li>
        <li>Stress når alt må læres på betalte timer</li>
      </ul>
      
      <p>Dette er grunnen til at elever uten privat kjøring ofte trenger 20–30+ timer.</p>
      
      <h2>Hvordan kombinere trafikkskole og privat kjøring best mulig</h2>
      
      <p>Her er oppskriften kjørelærere selv anbefaler:</p>
      
      <h3>Steg 1: Ta noen timer tidlig</h3>
      
      <p>Sørg for god grunnteknikk før du øvelseskjører. Unngå at foreldrene lærer deg feil – dette er en klassiker.</p>
      
      <h3>Steg 2: Øv privat på det du lærer hos lærer</h3>
      
      <p>Dette er nøkkelen.</p>
      
      <p><strong>Timene hos lærer = nye ferdigheter</strong></p>
      
      <p><strong>Privat kjøring = mengdetrening på disse ferdighetene</strong></p>
      
      <h3>Steg 3: Øk vanskelighetsgraden gradvis</h3>
      
      <p>Start med enkle områder. Avanser etter hvert: by, rundkjøringer, landevei, motorvei.</p>
      
      <h3>Steg 4: Ta mellomtimen og sikkerhetskurs på vei på trafikkskolen</h3>
      
      <p>Dette er obligatoriske kurs – og læreren kvalitetssikrer nivået ditt.</p>
      
      <h3>Steg 5: Siste finpuss hos lærer før oppkjøring</h3>
      
      <p>Her trener du på flyt, vurdering og samspill. Dette er ren kvalitetssikring.</p>
      
      <h2>Hva er egentlig "den perfekte kombinasjonen"?</h2>
      
      <p>De fleste som består på første forsøk gjør noe i denne duren:</p>
      
      <ul>
        <li>5–10 timer hos trafikkskolen i starten</li>
        <li>Masse privat øvelseskjøring (20–50 timer)</li>
        <li>5–10 timer ekstra hos lærer mot slutten</li>
      </ul>
      
      <p>Dette gir både trygghet og kvalitet – og færre unødvendige kostnader.</p>
      
      <blockquote>
        <p><strong>Tips:</strong> Den perfekte kombinasjonen: 5-10 timer hos trafikkskolen i starten, masse privat øvelseskjøring (20-50 timer), og 5-10 timer ekstra hos lærer mot slutten. Dette gir både trygghet og kvalitet.</p>
      </blockquote>
      
      <h2>Oppsummert: Derfor trenger du begge deler</h2>
      
      <table class="w-full border-collapse my-6">
        <thead>
          <tr class="bg-slate-100">
            <th class="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Trafikkskole</th>
            <th class="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Privat øvelseskjøring</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Lærer deg riktig</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Gir deg rutine</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Kvalitet</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Mengde</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Strukturert</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Variert</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Feedback</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Lav kostnad</td>
          </tr>
          <tr>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Oppkjøringsforberedelser</td>
            <td class="border border-slate-300 px-4 py-3 text-slate-700">Trygghet</td>
          </tr>
        </tbody>
      </table>
      
      <p>Det er kombinasjonen som gir deg best sjanse for å bli trygg, spare penger og bestå på første forsøk.</p>
    `,
  },
  "16": {
    id: 16,
    title: "Fastpris vs. betaling per kjøretime – hva lønner seg?",
    excerpt: "Sammenligning mellom fastpris og betaling per kjøretime, og hvilke faktorer som avgjør hva som faktisk lønner seg best for deg.",
    date: "20. februar 2025",
    readTime: "6 min lesing",
    category: "Økonomi",
    image: "/Article-photo4.png",
    content: `
      <p class="lead">Når du skal ta førerkort, dukker det fort opp et spørsmål som nesten alle kjenner på: <strong>Skal jeg gå for fastpris eller betale per kjøretime?</strong></p>
      
      <p>Det høres kanskje ut som en enkel vurdering, men ærlig talt – det er det ikke alltid. Det er litt som å velge mellom buffet og à la carte: Du tror du vet hva som er billigst før du setter deg, men sluttregningen kan overraske.</p>
      
      <p>I denne artikkelen bryter vi ned forskjellen mellom fastpris og betaling per time, hva du faktisk betaler for, og når noen av alternativene gir bedre verdi enn det andre.</p>
      
      <figure class="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
        <img src="/Article-photo4.png" alt="Fastpris vs betaling per kjøretime" class="w-full h-auto object-cover" loading="lazy" />
        <figcaption class="px-4 py-3 text-sm text-slate-600 bg-slate-50">
          Valget mellom fastpris og betaling per time avhenger av din situasjon. Ingen av alternativene er automatisk billigst.
        </figcaption>
      </figure>
      
      <h2>Hva er egentlig fastpris?</h2>
      
      <p>Fastpris er som en "pakke" du forhåndsbetaler. Den inkluderer vanligvis:</p>
      
      <ul>
        <li>Et visst antall kjøretimer (ofte 10–15)</li>
        <li>Trinnvurderinger</li>
        <li>Sikkerhetskurs på øvingsbane</li>
        <li>Sikkerhetskurs på vei</li>
        <li>Leie av bil til oppkjøring</li>
      </ul>
      
      <p>Det høres jo superpraktisk ut. Du får alt i én pakke og slipper å følge med på hver eneste time.</p>
      
      <p>Men – og dette er viktig – fastpris gjelder kun for det som står i pakken. Trenger du ekstra timer? Da ryker prisen opp.</p>
      
      <h2>Betaling per time – mer fleksibelt enn du tror</h2>
      
      <p>Når du betaler per kjøretime, får du full kontroll. Du tar akkurat så mange timer du trenger, ikke mer, ikke mindre. For mange elever som øver mye privat, kan dette være den billigste løsningen.</p>
      
      <p>Men det kan også bli dyrere hvis:</p>
      
      <ul>
        <li>Du ikke får nok privat øving</li>
        <li>Du trenger å repetere flere trinn</li>
        <li>Du gruer deg til oppkjøring og derfor vil ta flere timer enn planlagt</li>
      </ul>
      
      <p>Kort sagt: Fleksibelt, men lettere å miste oversikten over totalpris.</p>
      
      <h2>Hva lønner seg? Det kommer faktisk an på deg</h2>
      
      <p>Du får nå sannheten helt enkelt:</p>
      
      <p>Ingen av alternativene er automatisk billigst. Det avhenger av hvor mye du kan, hvor raskt du lærer, og hvor mye du øver privat.</p>
      
      <h3>Når fastpris lønner seg:</h3>
      
      <ul>
        <li>Du vil ha én samlet pris uten overraskelser</li>
        <li>Du lærer best i et strukturert opplegg</li>
        <li>Du ikke har mulighet for mye privat øving</li>
        <li>Du liker tryggheten i at "alt er inkludert"</li>
      </ul>
      
      <h3>Når betaling per time lønner seg:</h3>
      
      <ul>
        <li>Du har mye privat øvingsmulighet</li>
        <li>Du lærer raskt og trenger få ekstra timer</li>
        <li>Du vil kun betale for det du faktisk bruker</li>
        <li>Du liker fleksibilitet og frihet</li>
      </ul>
      
      <h2>Den skjulte faktoren mange glemmer</h2>
      
      <p>En ting mange overser: Kjørelærerens kvalitet påvirker totalprisen mer enn betalingsmodellen.</p>
      
      <h3>En flink instruktør:</h3>
      
      <ul>
        <li>Gir deg raskere progresjon</li>
        <li>Gir deg færre unødvendige timer</li>
        <li>Gjør deg tryggere til oppkjøring</li>
        <li>Reduserer risikoen for å stryke (og betale alt på nytt)</li>
      </ul>
      
      <p>Du kan få verdens "billigste fastpris", men hvis kvaliteten er dårlig, betaler du fort mer likevel.</p>
      
      <h2>Et lite regnestykke som ofte overrasker</h2>
      
      <p>La oss si:</p>
      
      <ul>
        <li><strong>Fastpris:</strong> 24 000 kr, inkluderer 13 timer</li>
        <li><strong>Betaling per time:</strong> 850 kr per kjøretime</li>
      </ul>
      
      <p>Hvis du går per time og trenger 18 timer totalt, blir regningen slik:</p>
      
      <p>18 × 850 = 15 300 kr</p>
      
      <p>+ lovpålagte kurs + leie av bil til oppkjøring</p>
      
      <p>Plutselig kan fastpris være billigere.</p>
      
      <p>Men hvis du klarer deg med 12 timer?</p>
      
      <p>Da kan betaling per time være betydelig rimeligere.</p>
      
      <h2>Hvordan velger du riktig? (bruk denne sjekklisten)</h2>
      
      <p>Her er en praktisk sjekkliste før du bestemmer deg:</p>
      
      <ul>
        <li>Hvor mye har du øvd privat?</li>
        <li>Hvor trygg føler du deg bak rattet?</li>
        <li>Lærer du raskt eller trenger du god tid?</li>
        <li>Vil du ha én fast pris eller liker du fleksibilitet?</li>
        <li>Er kjøreskolen kjent for god kvalitet? (Det betyr mye!)</li>
        <li>Kan du sammenligne flere skoler før du bestemmer deg?</li>
      </ul>
      
      <h2>Konklusjon: Velg betalingsmodellen som passer læringsstilen din</h2>
      
      <p><strong>Fastpris</strong> passer deg som vil ha trygghet og full kontroll.</p>
      
      <p><strong>Betaling per time</strong> passer deg som er effektiv, trener mye privat, og liker fleksibilitet.</p>
      
      <p>Uansett valg: Den største besparelsen kommer fra å velge riktig kjøreskole – ikke nødvendigvis modellen.</p>
      
      <blockquote>
        <p><strong>Kort sagt:</strong> Fastpris passer deg som vil ha trygghet og full kontroll. Betaling per time passer deg som er effektiv, trener mye privat, og liker fleksibilitet. Den største besparelsen kommer fra å velge riktig kjøreskole – ikke nødvendigvis modellen.</p>
      </blockquote>
      
      <h2>Vil du sammenligne kjøreskoler?</h2>
      
      <p>Fyll ut skjemaet.</p>
    `,
  },
};

// Function to extract headings from HTML content (H2 and H3)
function extractHeadings(htmlContent: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2]
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ id, text, level });
  }

  return headings;
}

function ArticleFormWrapper() {
  const { isDesktopFocused, setIsDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className={`bg-gradient-to-br from-slate-900 to-slate-600 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8 transition-all duration-300 cursor-pointer ${isDesktopFocused && !isMobile ? 'opacity-0 pointer-events-none' : ''}`}
      onClick={(e) => {
        if (!isMobile && !isDesktopFocused) {
          const target = e.target as HTMLElement;
          // Check if the click is on an interactive form element
          const interactiveElement = target.closest('input, button, select, textarea, a, label, [role="button"], [type="submit"]');
          
          // Only trigger focus mode if NOT clicking on interactive elements
          // Interactive elements will trigger focus mode through their onFocus handlers
          if (!interactiveElement) {
            setIsDesktopFocused(true);
          }
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-0.5 text-center lg:text-center">
        Motta tilbud fra flere trafikkskoler
      </h2>
      <p className="text-base text-slate-300 mb-0.5 text-center">
        Tjenesten er gratis og uforpliktende
      </p>
      <LeadForm hideHeading={true} />
    </div>
  );
}

function ArticleContent({ params }: { params: { id: string } }) {
  const article = articles[params.id];
  const { isDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);
  
  // Extract headings for table of contents
  const headings = useMemo(() => {
    if (!article) return [];
    return extractHeadings(article.content);
  }, [article]);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="py-12 sm:py-16 lg:py-20 text-center">
          <div className="container mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              Artikkel ikke funnet
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Denne artikkelen eksisterer ikke.
            </p>
            <Link
              href="/artikler"
              className="inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d]"
            >
              Tilbake til artikler
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image ? `https://forerkortportalen.no${article.image}` : undefined,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Førerkortportalen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Førerkortportalen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://forerkortportalen.no/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://forerkortportalen.no/artikler/${article.id}`
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      <article className={`py-8 sm:py-12 lg:py-16 bg-slate-50 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
              {/* Main Article Content */}
              <div className="lg:col-span-8">
          {/* Back Link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/artikler"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-[#3bb54a] transition text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tilbake til artikler</span>
            </Link>
          </div>

          {/* Article Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
            
            {/* Header */}
            <header className="px-6 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8 border-b border-slate-200">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-4">
                {article.category}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </header>

                  {/* Article Image */}
                  {article.image && (
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  )}

                  {/* Table of Contents - SEO-friendly with details/summary */}
                  {headings.length > 0 && (
                    <div className="mx-6 sm:mx-8 lg:mx-10 mt-8 mb-6">
                      <details className="group">
                        <summary className="w-full flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-[#3bb54a] transition cursor-pointer list-none">
                          <div className="flex items-center gap-2 text-slate-900 font-semibold">
                            <List className="h-5 w-5 text-[#3bb54a]" />
                            Innholdsfortegnelse
                          </div>
                          <svg
                            className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 8l4 4 4-4" />
                          </svg>
                        </summary>
                        <nav className="space-y-2 px-4 py-3 overflow-y-auto max-h-[70vh] border border-slate-200 border-t-0 rounded-b-xl bg-white">
                          {headings.map((heading, index) => (
                            <a
                              key={index}
                              href={`#${heading.id}`}
                              className={`block text-sm text-slate-700 hover:text-[#3bb54a] transition py-1.5 border-l-2 border-slate-200 hover:border-[#3bb54a] ${
                                heading.level === 2 ? 'pl-3 font-semibold' : 'pl-6 text-slate-600'
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.id);
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  window.history.pushState(null, '', `#${heading.id}`);
                                }
                              }}
                            >
                              {heading.text}
                            </a>
                          ))}
                        </nav>
                      </details>
                    </div>
                  )}

            {/* Content */}
            <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
              <div
                className="prose prose-slate prose-lg max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:mt-12 prose-headings:mb-6
                  prose-h1:text-3xl sm:prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-14 prose-h1:mb-7
                  prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold prose-h2:scroll-mt-24
                  prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-9 prose-h3:mb-5 prose-h3:font-semibold prose-h3:text-slate-900 prose-h3:scroll-mt-24
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base sm:prose-p:text-lg
                  prose-a:text-[#3bb54a] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-em:text-slate-600 prose-em:italic
                  prose-ul:text-slate-700 prose-ul:my-5 prose-ul:space-y-2
                  prose-li:mb-2 prose-li:pl-1
                  prose-blockquote:border-l-4 prose-blockquote:border-[#3bb54a] prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:bg-emerald-50 prose-blockquote:rounded-r-lg prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-slate-700
                  prose-lead:text-lg sm:prose-lead:text-xl prose-lead:font-medium prose-lead:text-slate-800 prose-lead:mb-6
                  prose-img:rounded-xl prose-img:shadow-md prose-img:my-8 prose-img:w-full
                  prose-hr:border-slate-200 prose-hr:my-8"
                      dangerouslySetInnerHTML={{ 
                        __html: article.content
                          .replace(
                            /<h2([^>]*)>(.*?)<\/h2>/gi,
                            (match, attrs, text) => {
                              const id = text
                                .replace(/<[^>]*>/g, '')
                                .trim()
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/^-|-$/g, '');
                              // Preserve existing classes and add scroll-mt-24
                              const hasClass = /class=["']/.test(attrs);
                              const scrollClass = 'scroll-mt-24';
                              if (hasClass) {
                                const newAttrs = attrs.replace(/class=["']([^"']*)["']/, `class="$1 ${scrollClass}"`);
                                return `<h2 id="${id}"${newAttrs}>${text}</h2>`;
                              } else {
                                return `<h2 id="${id}"${attrs} class="${scrollClass}">${text}</h2>`;
                              }
                            }
                          )
                          .replace(
                            /<h3([^>]*)>(.*?)<\/h3>/gi,
                            (match, attrs, text) => {
                              const id = text
                                .replace(/<[^>]*>/g, '')
                                .trim()
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/^-|-$/g, '');
                              // Preserve existing classes and add scroll-mt-24
                              const hasClass = /class=["']/.test(attrs);
                              const scrollClass = 'scroll-mt-24';
                              if (hasClass) {
                                const newAttrs = attrs.replace(/class=["']([^"']*)["']/, `class="$1 ${scrollClass}"`);
                                return `<h3 id="${id}"${newAttrs}>${text}</h3>`;
                              } else {
                                return `<h3 id="${id}"${attrs} class="${scrollClass}">${text}</h3>`;
                              }
                            }
                          )
                      }}
              />
            </div>

                </div>
              </div>

              {/* Form Sidebar */}
              <div className="lg:col-span-4 mt-8 lg:mt-14">
                <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:pr-1 space-y-6">
                  <ArticleFormWrapper />

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">3 gode grunner til å velge Førerkortportalen</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Flere tilbud – ett skjema</p>
                          <p className="text-sm text-slate-600">Få tilbud fra kvalitetssikrede trafikkskoler uten å ringe rundt.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Trygt og uforpliktende</p>
                          <p className="text-sm text-slate-600">Ingen kostnad for deg – velg tilbudet som passer best.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Spar tid og penger</p>
                          <p className="text-sm text-slate-600">Sammenlign pris, oppstart og fleksibilitet på ett sted.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <ArticleContent params={resolvedParams} />
      </main>
    </FormProvider>
  );
}

