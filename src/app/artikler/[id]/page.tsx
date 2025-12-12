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
      
      <h2>Konklusjon: Intensivkurs kan være genialt – men ikke for alle</h2>
      <p>Hvis du har grunnlaget, motivasjonen og et stramt tidsskjema, kan intensivkurs være helt riktig valg.</p>
      
      <p>Men hvis du trenger mer tid, eller ikke har kjørt så mye, kan vanlig løp spare deg for både stress og penger.</p>
      
      <p>Uansett: Det viktigste er å finne en kjøreskole som faktisk kan tilpasse opplæringen til deg – ikke motsatt.</p>
      
      <h2>Vil du sammenligne kjøreskoler?</h2>
      <p>Fyll ut skjemaet – så finner vi de rimeligste skolene med best rykte der du bor.</p>
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

