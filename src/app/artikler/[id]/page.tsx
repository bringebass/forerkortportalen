"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { Calendar, Clock, ArrowLeft, Share2, List } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import { useMemo, useState, useEffect } from "react";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const articles: Record<string, {
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
    title: "Hvordan velge riktig trafikkskole",
    excerpt: "Lær hva du bør se etter når du velger trafikkskole, og få tips om hvordan du kan sammenligne tilbud.",
    date: "15. januar 2024",
    readTime: "5 min lesing",
    category: "Guider",
    image: "/Article-photo1.png",
    content: `
      <p class="lead">Å velge riktig trafikkskole er et viktig valg som kan påvirke hele føreropplæringen din. Med så mange alternativer kan det være utfordrende å vite hvor man skal begynne. Her er en guide til hva du bør se etter.</p>
      
      <h2>1. Godkjennelse og kvalitet</h2>
      <p>Det aller viktigste er at trafikkskolen er godkjent av Statens vegvesen. Alle seriøse skoler vil ha denne godkjenningen, og uten den kan du ikke få gyldig førerkort. I tillegg bør skolen følge læreplanen til Statens vegvesen for å sikre at du får riktig opplæring.</p>
      
      <h2>2. Lokasjon og praktiskhet</h2>
      <p>Velg en skole som ligger praktisk til for deg. Tenk på hvor du skal ta kjøretimene – det er praktisk hvis skolen er i nærheten av ditt område. Mange skoler tilbyr også henting, men det kan være mer praktisk med en lokal skole som kjenner rutevalg og sensorer i din region.</p>
      
      <h2>3. Pris og verdi</h2>
      <p>Prisen varierer mye mellom trafikkskoler, men husk at den billigste ikke alltid er den beste. Se på hva som er inkludert i prisen: teoriundervisning, kjøretimer, oppkjøring, biler osv. Sammenlign totale pakker fra flere skoler for å finne best verdi.</p>
      
      <h2>4. Tilgjengelighet og oppstart</h2>
      <p>Sjekk når skolen kan tilby oppstart. Noen skoler har ventetider, mens andre kan starte raskt. Spesielt hvis du ønsker intensivkurs, må du sjekke om skolen tilbyr dette og når neste kurs starter. Vurder også hvilke tidsalternativer de har – kveldskurs kan være praktisk hvis du jobber.</p>
      
      <h2>5. Anbefalinger og anmeldelser</h2>
      <p>Spør venner, familie eller kolleger om anbefalinger. Personlige erfaringer kan gi deg verdifull innsikt. Les også anmeldelser online for å få et bredere bilde av skolens rykte og kundetilfredshet.</p>
      
      <h2>Sammenlign tilbud enkelt</h2>
      <p>Ved å bruke Førerkortportalen kan du enkelt få tilbud fra flere trafikkskoler i ditt område. Fyll ut ett skjema, og vi sender forespørselen din til relevante skoler. Du får da tilbud som du kan sammenligne på pris, tilgjengelighet og tjenester – alt uten å kontakte skolene én og én.</p>
      
      <p><strong>Husk:</strong> Ta deg tid til å vurdere tilbudene grundig. Føreropplæring er en investering i din fremtid, så det er verdt å velge riktig skole.</p>
    `,
  },
  "2": {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    date: "10. januar 2024",
    readTime: "8 min lesing",
    category: "Førerkortklasser",
    image: "/Article-photo2.png",
    content: `
      <p class="lead">Førerkort klasse B er det mest vanlige førerkortet i Norge og gir deg rett til å kjøre personbil. Her er alt du trenger å vite før du starter opplæringen.</p>
      
      <h2>Hva er klasse B?</h2>
      <p>Førerkort klasse B gir deg rett til å kjøre personbil med en totalvekt på inntil 3500 kg. Du kan også kjøre bil med tilhenger hvis den totale vekten ikke overstiger 3500 kg, og tilhengeren veier maks 750 kg. Med klasse B kan du kjøre opptil 8 personer (inkludert sjåfør).</p>
      
      <h2>Krav for å ta førerkort klasse B</h2>
      <ul>
        <li>Du må være minst 18 år for å begynne opplæringen</li>
        <li>Du må ha fullført trafikalt grunnkurs (obligatorisk teoriundervisning)</li>
        <li>Du må bestå teoriprøven</li>
        <li>Du må fullføre obligatorisk kjøreopplæring (minimum 13 kjøretimer)</li>
        <li>Du må bestå førerprøven (praktisk oppkjøring)</li>
      </ul>
      
      <h2>1. Trafikalt grunnkurs</h2>
      <p>Trafikalt grunnkurs består av 19 timer obligatorisk teoriundervisning. Dette kurset må fullføres før du kan ta teoriprøven. Kurset dekker trafikkregler, miljø, sikkerhet og kjøretøyteknikk. Mange trafikkskoler tilbyr dette som en del av opplæringen.</p>
      
      <h2>2. Teoriprøven</h2>
      <p>Etter å ha fullført trafikalt grunnkurs kan du ta teoriprøven. Prøven består av 45 spørsmål, og du må ha minst 38 riktige for å bestå. Du har 45 minutter på deg. Teoriprøven må bestås innen 3 år etter at trafikalt grunnkurs er fullført.</p>
      
      <h2>3. Kjøreopplæring</h2>
      <p>Obligatorisk kjøreopplæring består av minimum 13 kjøretimer á 45 minutter. Opplæringen må inkludere:</p>
      <ul>
        <li>Kjøring i bytrafikk</li>
        <li>Kjøring på landevei</li>
        <li>Kjøring på motorvei</li>
        <li>Kjøring i mørke</li>
      </ul>
      <p>Mange trenger flere timer enn minimum for å bli trygge på å kjøre. Dette er helt normalt – alle lærer i sitt eget tempo.</p>
      
      <h2>4. Førerprøven</h2>
      <p>Førerprøven (oppkjøringen) varer ca. 45-60 minutter og testes av en sensor fra Statens vegvesen. Du må demonstrere at du behersker bilen trygt og kan håndtere ulike trafikksituasjoner. Prøven må bestås innen 12 måneder etter at du bestod teoriprøven.</p>
      
      <h2>Kostnader</h2>
      <p>Totale kostnader for førerkort klasse B varierer, men forvent å betale mellom 25 000 og 50 000 kroner alt inkludert. Dette inkluderer trafikalt grunnkurs, teoriprøve, kjøreopplæring, førerprøve og forskjellige avgifter til Statens vegvesen.</p>
      
      <h2>Klasse B automat vs. manuell</h2>
      <p>Du kan ta førerkort på enten automat eller manuell girkasse:</p>
      <ul>
        <li><strong>Klasse B automat:</strong> Raskere å lære, men gir kun rett til å kjøre automatbiler</li>
        <li><strong>Klasse B manuell:</strong> Tar litt lenger tid å lære, men gir rett til å kjøre både manuelle og automatbiler</li>
      </ul>
      
      <h2>Få tilbud fra flere skoler</h2>
      <p>Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler som tilbyr opplæring i klasse B. Fyll ut skjemaet vårt, og få tilbud fra flere skoler i ditt område slik at du kan velge det som passer best for deg.</p>
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
      <p class="lead">Når du skal ta førerkort har du to hovedalternativer: intensivkurs eller et mer tradisjonelt opplegg. Begge har sine fordeler, og valget avhenger av din situasjon og preferanser.</p>
      
      <h2>Intensivkurs – komprimert opplæring</h2>
      <p>Intensivkurs er en komprimert form for føreropplæring der du fullfører alt på kort tid, ofte i løpet av 2-4 uker. Du har kjøretimer og teori daglig eller nesten daglig.</p>
      
      <h3>Fordeler ved intensivkurs:</h3>
      <ul>
        <li><strong>Rask oppstart:</strong> Du kan få førerkortet mye raskere</li>
        <li><strong>Kontinuitet:</strong> Du bygger opp rutine raskt siden du kjører ofte</li>
        <li><strong>Mindre tid utenfor hverdagen:</strong> Alt er konsentrert på kort tid</li>
        <li><strong>Full fokus:</strong> Du er hele tiden i "kjøremodus"</li>
      </ul>
      
      <h3>Ulemper ved intensivkurs:</h3>
      <ul>
        <li>Kan være mentalt slitsomt med så mye kjøring</li>
        <li>Krever at du har mye ledig tid i perioden</li>
        <li>Ikke like fleksibelt hvis du har andre forpliktelser</li>
        <li>Kan være dyrere totalt sett</li>
      </ul>
      
      <h2>Vanlig førerkortkurs – tradisjonelt opplegg</h2>
      <p>Et tradisjonelt førerkortkurs spres ut over lengre tid, ofte 3-6 måneder eller mer. Du tar kjøretimer 1-2 ganger i uken og har mer tid til å fordøye det du lærer.</p>
      
      <h3>Fordeler ved tradisjonelt opplegg:</h3>
      <ul>
        <li><strong>Mer fleksibelt:</strong> Lettere å kombinere med jobb eller skole</li>
        <li><strong>Mindre press:</strong> Du har mer tid mellom kjøretimene</li>
        <li><strong>Bedre for å lære grundig:</strong> Mer tid til å øve seg</li>
        <li><strong>Ofte billigere:</strong> Du kan betale etter hvert som du går</li>
      </ul>
      
      <h3>Ulemper ved tradisjonelt opplegg:</h3>
      <ul>
        <li>Tar lengre tid før du får førerkortet</li>
        <li>Kan være vanskelig å holde kontinuiteten</li>
        <li>Kan bli utsatt hvis du har lange pauser</li>
      </ul>
      
      <h2>Hvilket skal du velge?</h2>
      <p>Valget avhenger av flere faktorer:</p>
      
      <p><strong>Velg intensivkurs hvis du:</strong></p>
      <ul>
        <li>Har mulighet til å sette av 2-4 uker</li>
        <li>Vil ha førerkortet så raskt som mulig</li>
        <li>Foretrekker å få det overstått</li>
        <li>Har god kapasitet for å lære raskt</li>
      </ul>
      
      <p><strong>Velg tradisjonelt opplegg hvis du:</strong></p>
      <ul>
        <li>Jobber eller går på skole</li>
        <li>Foretrekker å ta det mer rolig</li>
        <li>Har begrenset med penger å betale av</li>
        <li>Trenger mer tid til å øve</li>
      </ul>
      
      <h2>Kveldskurs og fleksible løsninger</h2>
      <p>Mange trafikkskoler tilbyr også kveldskurs eller fleksible løsninger som gir deg noe av det beste fra begge verdener. Du kan ta kjøretimer på kvelden eller i helgene, slik at du kan kombinere det med jobb eller skole.</p>
      
      <h2>Finn riktig løsning for deg</h2>
      <p>Uansett hva du velger, er det viktig å finne en trafikkskole som tilbyr det opplegget som passer deg. Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler som tilbyr både intensivkurs og tradisjonelle opplegg, slik at du kan velge det som passer din situasjon best.</p>
    `,
  },
  "4": {
    id: 4,
    title: "Kostnader ved å ta førerkort i 2024",
    excerpt: "Oversikt over hva det koster å ta førerkort, og hvordan du kan spare penger på opplæringen.",
    date: "1. januar 2024",
    readTime: "7 min lesing",
    category: "Økonomi",
    image: "/Article-photo4.png",
    content: `
      <p class="lead">Å ta førerkort er en investering, og det er viktig å ha realistiske forventninger til kostnadene. Her er en oversikt over hva du kan forvente å betale i 2024.</p>
      
      <h2>Oversikt over kostnader</h2>
      <p>Totale kostnader for førerkort klasse B varierer mye, men du bør regne med å betale mellom 25 000 og 50 000 kroner alt inkludert. Dette avhenger av flere faktorer:</p>
      
      <h3>1. Trafikalt grunnkurs</h3>
      <p><strong>Kostnad: 3 000 - 5 000 kr</strong></p>
      <p>Obligatorisk teoriundervisning på 19 timer. Mange trafikkskoler inkluderer dette i totalpakken, mens andre tar ekstra betaling.</p>
      
      <h3>2. Teoriprøve</h3>
      <p><strong>Kostnad: 550 kr</strong></p>
      <p>Standard sats fra Statens vegvesen. Du betaler denne avgiften når du bestiller tid til teoriprøven.</p>
      
      <h3>3. Kjøreopplæring</h3>
      <p><strong>Kostnad: 15 000 - 35 000 kr</strong></p>
      <p>Dette er hvor kostnadene varierer mest. Minimum er 13 kjøretimer, men de fleste trenger 20-30 timer. Pris per kjøretime varierer typisk mellom 800 og 1200 kroner.</p>
      
      <h3>4. Førerprøve (oppkjøring)</h3>
      <p><strong>Kostnad: 1 890 kr</strong></p>
      <p>Standard sats fra Statens vegvesen for førerprøven. Hvis du må ta prøven på nytt, må du betale igjen.</p>
      
      <h3>5. Andre kostnader</h3>
      <p>I tillegg kommer:</p>
      <ul>
        <li>Utstedelse av førerkort: ca. 500 kr</li>
        <li>Lærebøker og læremateriell: 500 - 1 000 kr</li>
        <li>Eventuelle ekstra kjøretimer hvis du trenger det</li>
      </ul>
      
      <h2>Faktorer som påvirker kostnadene</h2>
      
      <h3>Antall kjøretimer</h3>
      <p>Det største variabelen er antall kjøretimer du trenger. Noen lærer raskt og trenger bare minimum, mens andre trenger mer tid. Det er helt normalt å trenge 20-30 timer.</p>
      
      <h3>Lokasjon</h3>
      <p>Prisene varierer mellom regioner. Storbyområder som Oslo, Bergen og Trondheim har ofte høyere priser enn mindre byer og bygder.</p>
      
      <h3>Kursform</h3>
      <p>Intensivkurs kan være dyrere totalt sett, men du får det gjort raskt. Tradisjonelle kurs kan være billigere, men tar lengre tid.</p>
      
      <h2>Hvordan kan du spare penger?</h2>
      
      <h3>1. Sammenlign tilbud</h3>
      <p>Prisene varierer mye mellom trafikkskoler. Bruk Førerkortportalen til å få tilbud fra flere skoler i ditt område, slik at du kan sammenligne priser og velge det som gir best verdi.</p>
      
      <h3>2. Se på totalpakker</h3>
      <p>Mange skoler tilbyr totalpakker som inkluderer alt – trafikalt grunnkurs, kjøretimer, teori- og førerprøve. Dette kan være billigere enn å betale for hver tjeneste separat.</p>
      
      <h3>3. Vurder kjøreopplæring med privat person</h3>
      <p>Du kan ta noen av kjøretimene med en privat person (venn/familie med minst 5 års erfaring). Dette kan redusere kostnadene betydelig. Husk at du fortsatt må ta minimum antall obligatoriske kjøretimer hos trafikkskole.</p>
      
      <h3>4. Spør om studentrabatt</h3>
      <p>Noen trafikkskoler tilbyr rabatt for studenter. Det er verdt å spørre om dette når du sammenligner tilbud.</p>
      
      <h3>5. Undersøk støtteordninger</h3>
      <p>Noen kommuner tilbyr støtte til føreropplæring for unge. Sjekk om dette er tilgjengelig i din kommune.</p>
      
      <h2>Tips for budsjettering</h2>
      <ul>
        <li>Regn med at du kan trenge flere kjøretimer enn minimum</li>
        <li>Legg inn en buffer i budsjettet ditt for uventede kostnader</li>
        <li>Vurder om du kan betale i avdrag eller om du trenger full finansiering</li>
        <li>Spør trafikkskolen om fleksible betalingsordninger</li>
      </ul>
      
      <h2>Verdt å investere i</h2>
      <p>Selv om førerkort er dyrt, er det en investering som gir deg stor frihet og muligheter. Det er verdt å velge en god trafikkskole som gir deg solid opplæring, selv om den kanskje ikke er den billigste.</p>
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
};

// Function to extract headings from HTML content
function extractHeadings(htmlContent: string): Array<{ id: string; text: string }> {
  const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: Array<{ id: string; text: string }> = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const text = match[1]
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ id, text });
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
          if (!interactiveElement) {
            setIsDesktopFocused(true);
          }
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-0.5">
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

  return (
    <>
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      <article className={`py-8 sm:py-12 lg:py-16 bg-slate-50 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
          <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
              {/* Main Article Content */}
              <div className="lg:col-span-7">
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

                  {/* Table of Contents */}
                  {headings.length > 0 && (
                    <div className="mx-6 sm:mx-8 lg:mx-10 mt-8 mb-6 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <List className="h-5 w-5 text-[#3bb54a]" />
                        <h3 className="text-lg font-semibold text-slate-900">Innholdsfortegnelse</h3>
                      </div>
                      <nav className="space-y-2">
                        {headings.map((heading, index) => (
                          <a
                            key={index}
                            href={`#${heading.id}`}
                            className="block text-sm sm:text-base text-slate-700 hover:text-[#3bb54a] transition py-1.5 pl-4 border-l-2 border-slate-200 hover:border-[#3bb54a]"
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(heading.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                // Update URL without scrolling
                                window.history.pushState(null, '', `#${heading.id}`);
                              }
                            }}
                          >
                            {heading.text}
                          </a>
                        ))}
                      </nav>
                    </div>
                  )}

            {/* Content */}
            <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
              <div
                className="prose prose-slate prose-lg max-w-none 
                  prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4
                  prose-h2:text-2xl sm:prose-h2:text-3xl
                  prose-h3:text-xl sm:prose-h3:text-2xl
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-[#3bb54a] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-slate-900 prose-strong:font-semibold
                  prose-ul:text-slate-700 prose-ul:my-4
                  prose-li:mb-2
                        prose-lead:text-lg sm:prose-lead:text-xl prose-lead:font-medium prose-lead:text-slate-800
                        prose-img:rounded-xl prose-img:shadow-md prose-img:my-8"
                      dangerouslySetInnerHTML={{ 
                        __html: article.content.replace(
                          /<h2([^>]*)>(.*?)<\/h2>/gi,
                          (match, attrs, text) => {
                            const id = text
                              .replace(/<[^>]*>/g, '')
                              .trim()
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, '-')
                              .replace(/^-|-$/g, '');
                            return `<h2 id="${id}"${attrs} class="scroll-mt-24">${text}</h2>`;
                          }
                        )
                      }}
              />
            </div>

                </div>
              </div>

              {/* Form Sidebar - Mobile and Desktop */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <ArticleFormWrapper />
                </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <ArticleContent params={params} />
      </main>
    </FormProvider>
  );
}

