"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FormProvider } from "@/contexts/FormContext";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Breadcrumbs from "@/components/Breadcrumbs";

// Placeholder artikler - du kan erstatte disse med faktiske artikler senere
// Add inArticleImages array to specify images that appear further down in articles
// Format: [{ image: "/path/to/image.png", alt: "Description" }]
export const articles = [
  {
    id: 1,
    title: "Billigste måte å ta førerkort på – myter vs. fakta (2026-guide)",
    excerpt: "En ærlig guide som rydder opp i myter om billig førerkort. Lær hva som faktisk sparer deg penger og hva som bare høres lure ut.",
    date: "20. januar 2025",
    readTime: "10 min lesing",
    category: "Guider",
    image: "/Artikkel1.png",
    inArticleImages: [
      { image: "/in-article1.png", alt: "Riktig planlegging for førerkort", caption: "Riktig planlegging og strukturert trening sparer penger på førerkortet." }
    ],
  },
  {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    date: "10. januar 2024",
    readTime: "8 min lesing",
    category: "Førerkortklasser",
    image: "/Artikkel2.png",
    inArticleImages: [
      { image: "/in-article2.png", alt: "Kjøreopplæring for førerkort klasse B", caption: "Kjøreopplæringen er et viktig steg i prosessen mot førerkort." }
    ],
  },
  {
    id: 3,
    title: "Intensivkurs vs. vanlig førerkortkurs",
    excerpt: "Skal du velge intensivkurs eller et mer tradisjonelt opplegg? Vi sammenligner fordelene ved begge.",
    date: "5. januar 2024",
    readTime: "6 min lesing",
    category: "Kursformer",
    image: "/Artikkel3.png",
    inArticleImages: [
      { image: "/in-article3.png", alt: "Velge mellom intensivkurs og tradisjonelt løp", caption: "Valget mellom intensivkurs og tradisjonelt løp avhenger av din situasjon og behov." }
    ],
  },
  {
    id: 4,
    title: "Hva koster førerkort i Norge? (oppdatert guide 2026)",
    excerpt: "Oppdatert oversikt over kostnader ved førerkort klasse B i 2025, obligatoriske utgifter, skjulte kostnader og hvordan du kan spare penger.",
    date: "15. januar 2025",
    readTime: "8 min lesing",
    category: "Økonomi",
    image: "/Artikkel4.png",
    inArticleImages: [
      { image: "/in-article1.png", alt: "Kjøretimer og kostnader for førerkort", caption: "Antall kjøretimer varierer og påvirker totalprisen betydelig." }
    ],
  },
  {
    id: 5,
    title: "Forbered deg til førerprøven",
    excerpt: "Praktiske tips og råd for å forberede deg best mulig til førerprøven, både teori og praksis.",
    date: "28. desember 2023",
    readTime: "5 min lesing",
    category: "Tips",
    image: "/Artikkel5.png",
    inArticleImages: [
      { image: "/in-article1.png", alt: "Kjøretimer og kostnader for førerkort", caption: "Antall kjøretimer varierer og påvirker totalprisen betydelig." }
    ],
  },
  {
    id: 6,
    title: "Hva skjer etter at du har bestått prøven?",
    excerpt: "Alt du trenger å vite om hva som skjer etter at du har bestått førerprøven og fått førerkortet ditt.",
    date: "20. desember 2023",
    readTime: "4 min lesing",
    category: "Etter opplæring",
    image: "/Artikkel6.png",
    inArticleImages: [
      { image: "/in-article6.png", alt: "Prøvetid for nye førere", caption: "Som ny fører har du prøvetid i 2 år med strengere regler." }
    ],
  },
  {
    id: 7,
    title: "Er intensivkurs verdt det?",
    excerpt: "En ærlig guide til når intensivkurs gir mening, når det kan bli unødvendig dyrt, og hva du bør vite før du melder deg på.",
    date: "25. januar 2025",
    readTime: "8 min lesing",
    category: "Kursformer",
    image: "/Artikkel7.png",
    inArticleImages: [
      { image: "/in-article2.png", alt: "Intensivkurs for førerkort", caption: "Intensivkurs kan være en effektiv måte å ta førerkort på for de som har mulighet til det." }
    ],
  },
  {
    id: 8,
    title: "Slik kan du spare penger på førerkortet (2026-guide)",
    excerpt: "Praktisk guide som viser hvordan du faktisk kan spare penger på førerkortet uten å kutte så mye at det går utover kvaliteten.",
    date: "30. januar 2025",
    readTime: "10 min lesing",
    category: "Økonomi",
    image: "/Artikkel8.png",
    inArticleImages: [
      { image: "/in-article3.png", alt: "Obligatoriske kurs for førerkort", caption: "Alle førerkortklasser krever obligatoriske kurs som en del av opplæringen." }
    ],
  },
  {
    id: 9,
    title: "Obligatoriske kurs for førerkort klasse B (komplett guide 2026)",
    excerpt: "Komplett guide til alle obligatoriske kursene du må ta for førerkort klasse B, inkludert varighet, priser og hva hvert kurs inneholder.",
    date: "2. februar 2025",
    readTime: "8 min lesing",
    category: "Guider",
    image: "/Artikkel9.png",
    inArticleImages: [
      { image: "/in-article5.png", alt: "Førerkortprosessen steg for steg", caption: "Førerkortprosessen består av flere viktige steg fra teori til praktisk oppkjøring." }
    ],
  },
  {
    id: 10,
    title: "Slik fungerer førerkortprosessen – steg for steg (2026-guide)",
    excerpt: "Enkel og oppdatert steg-for-steg-guide som viser hvordan du går fra null til førerkort – uten stress og uten at du trenger å google alt underveis.",
    date: "5. februar 2025",
    readTime: "9 min lesing",
    category: "Guider",
    image: "/Artikkel16.png",
    inArticleImages: [
      { image: "/in-article6.png", alt: "Velge riktig kjøreskole", caption: "Valg av kjøreskole er et viktig valg som påvirker hele førerkortprosessen." }
    ],
  },
  {
    id: 11,
    title: "Hvordan velge riktig kjøreskole (sjekkliste)",
    excerpt: "Enkel, men grundig sjekkliste som gjør det lettere å finne en kjøreskole som matcher både budsjettet ditt og måten du lærer på.",
    date: "7. februar 2025",
    readTime: "7 min lesing",
    category: "Tips",
    image: "/car-in-circle.png",
    inArticleImages: [
      { image: "/in-article1.png", alt: "Forberedelse til oppkjøring", caption: "God forberedelse er nøkkelen til å bestå oppkjøringen på første forsøk." }
    ],
  },
  {
    id: 12,
    title: "Hvordan bestå oppkjøringen på første forsøk (den komplette guiden)",
    excerpt: "Komplett guide som viser nøyaktig hva sensoren vurderer, hvilke feil som oftest gjør at folk stryker, og hva du kan gjøre for å øke sjansene dine.",
    date: "10. februar 2025",
    readTime: "10 min lesing",
    category: "Tips",
    image: "/Forbered-deg-til-forerproven.png",
    inArticleImages: [
      { image: "/in-article2.png", alt: "Antall kjøretimer", caption: "Antall kjøretimer varierer basert på erfaring, læringsstil og forberedelse." }
    ],
  },
  {
    id: 13,
    title: "Hvor mange kjøretimer trenger man egentlig? (realistisk guide 2026)",
    excerpt: "Realistisk guide som viser hvor mange kjøretimer de fleste faktisk trenger, og hvilke faktorer som påvirker antall timer mest.",
    date: "12. februar 2025",
    readTime: "9 min lesing",
    category: "Guider",
    image: "/Hva-koster-det-å -ta-forerkort.png",
    inArticleImages: [
      { image: "/in-article3.png", alt: "Tidsbruk for førerkort", caption: "Tiden det tar å ta førerkort varierer basert på intensitet og individuell progresjon." }
    ],
  },
  {
    id: 14,
    title: "Hvor lang tid tar det å ta førerkort? (realistisk guide 2026)",
    excerpt: "Realistisk guide som viser hvor lang tid det tar å ta førerkort, fra start til slutt, og hva som påvirker tidsbruken.",
    date: "15. februar 2025",
    readTime: "8 min lesing",
    category: "Guider",
    image: "/hva-skjer-etter-forerkortett.png",
    inArticleImages: [
      { image: "/in-article5.png", alt: "Trafikkskole vs privat øvelseskjøring", caption: "Kombinasjonen av trafikkskole og privat øvelseskjøring gir best resultat." }
    ],
  },
  {
    id: 15,
    title: "Forskjellen på trafikkskole og privat øvelseskjøring (og hvorfor du trenger begge)",
    excerpt: "Tydelig forklaring på hva trafikkskole og privat øvelseskjøring gir deg, og hvordan du kan bruke kombinasjonen smart for å spare tid og penger.",
    date: "17. februar 2025",
    readTime: "7 min lesing",
    category: "Tips",
    image: "/Intensiv-vs-vanlig.png",
    inArticleImages: [
      { image: "/in-article4.png", alt: "Kjøretimer og kostnader for førerkort", caption: "Antall kjøretimer varierer og påvirker totalprisen betydelig." }
    ],
  },
  {
    id: 16,
    title: "Fastpris vs. betaling per kjøretime – hva lønner seg?",
    excerpt: "Sammenligning mellom fastpris og betaling per kjøretime, og hvilke faktorer som avgjør hva som faktisk lønner seg best for deg.",
    date: "20. februar 2025",
    readTime: "6 min lesing",
    category: "Økonomi",
    image: "/Artikkel10.png",
    inArticleImages: [
      { image: "/in-article6.png", alt: "Fastpris vs betaling per time", caption: "Valget mellom fastpris og betaling per time avhenger av din situasjon og behov." }
    ],
  },
  {
    id: 17,
    title: "Digitalt førerkort i Norge – Den komplette guiden for 2026",
    excerpt: "Komplett guide til digitalt førerkort i Norge. Lær hvordan du aktiverer det, hva du kan bruke det til, krav, fordeler og begrensninger.",
    date: "25. februar 2026",
    readTime: "8 min lesing",
    category: "Guider",
    image: "/digitalt-forekort.png",
    inArticleImages: [
      { image: "/digitalt-forekort.png", alt: "Digitalt førerkort på mobil", caption: "Digitalt førerkort gir deg offisiell, gyldig versjon av førerkortet på mobilen." }
    ],
  },
];

export default function ArtiklerPage() {
  return (
    <FormProvider>
    <main className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { name: "Artikler", url: "https://forerkortportalen.no/artikler" },
        ]}
      />
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-emerald-50/30 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10">
        {/* Decorative background elements - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6 sm:mb-8">
              <FileText className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Artikler og guider</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Artikler
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Nyttige guider om førerkort, trafikkskoler, føreropplæring, trafikkregler og erfaringer fra kjøretimer
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">

          {/* Articles Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/artikler/${article.id}`}
                className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:border-emerald-300 block"
              >
                {/* Article Image */}
                {article.image && (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-[#3bb54a] transition">
                  {article.title}
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                  <div className="inline-flex items-center gap-2 text-[#3bb54a] font-semibold group-hover:gap-3 transition-all">
                  Les mer
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                </Link>
            ))}
          </div>

          {/* Empty State (if needed later) */}
          {articles.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <p className="text-lg text-slate-600">Ingen artikler funnet</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
    </FormProvider>
  );
}

