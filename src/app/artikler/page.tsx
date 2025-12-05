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

// Placeholder artikler - du kan erstatte disse med faktiske artikler senere
const articles = [
  {
    id: 1,
    title: "Hvordan velge riktig trafikkskole",
    excerpt: "Lær hva du bør se etter når du velger trafikkskole, og få tips om hvordan du kan sammenligne tilbud.",
    date: "15. januar 2024",
    readTime: "5 min lesing",
    category: "Guider",
    image: "/Article-photo1.png",
  },
  {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    date: "10. januar 2024",
    readTime: "8 min lesing",
    category: "Førerkortklasser",
    image: "/Article-photo2.png",
  },
  {
    id: 3,
    title: "Intensivkurs vs. vanlig førerkortkurs",
    excerpt: "Skal du velge intensivkurs eller et mer tradisjonelt opplegg? Vi sammenligner fordelene ved begge.",
    date: "5. januar 2024",
    readTime: "6 min lesing",
    category: "Kursformer",
    image: "/Article-photo3.png",
  },
  {
    id: 4,
    title: "Kostnader ved å ta førerkort i 2024",
    excerpt: "Oversikt over hva det koster å ta førerkort, og hvordan du kan spare penger på opplæringen.",
    date: "1. januar 2024",
    readTime: "7 min lesing",
    category: "Økonomi",
    image: "/Article-photo4.png",
  },
  {
    id: 5,
    title: "Forbered deg til førerprøven",
    excerpt: "Praktiske tips og råd for å forberede deg best mulig til førerprøven, både teori og praksis.",
    date: "28. desember 2023",
    readTime: "5 min lesing",
    category: "Tips",
    image: "/Article-photo5.png",
  },
  {
    id: 6,
    title: "Hva skjer etter at du har bestått prøven?",
    excerpt: "Alt du trenger å vite om hva som skjer etter at du har bestått førerprøven og fått førerkortet ditt.",
    date: "20. desember 2023",
    readTime: "4 min lesing",
    category: "Etter opplæring",
    image: "/Article-photo6.png",
  },
];

export default function ArtiklerPage() {
  return (
    <FormProvider>
    <main className="min-h-screen bg-white">
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-emerald-50/30 py-12 sm:py-16 lg:py-20">
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
              Nyttige artikler om førerkort
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Lær alt du trenger å vite om førerkort, trafikkskoler og føreropplæring
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 sm:py-16 lg:py-20">
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

