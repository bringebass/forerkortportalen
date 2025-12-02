"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

// Placeholder artikler - du kan erstatte disse med faktiske artikler senere
const articles = [
  {
    id: 1,
    title: "Hvordan velge riktig trafikkskole",
    excerpt: "Lær hva du bør se etter når du velger trafikkskole, og få tips om hvordan du kan sammenligne tilbud.",
    date: "15. januar 2024",
    readTime: "5 min lesing",
    category: "Guider",
  },
  {
    id: 2,
    title: "Alt du trenger å vite om førerkort klasse B",
    excerpt: "En komplett guide til å ta førerkort klasse B, inkludert teori, praksis og hva du kan forvente.",
    date: "10. januar 2024",
    readTime: "8 min lesing",
    category: "Førerkortklasser",
  },
  {
    id: 3,
    title: "Intensivkurs vs. vanlig førerkortkurs",
    excerpt: "Skal du velge intensivkurs eller et mer tradisjonelt opplegg? Vi sammenligner fordelene ved begge.",
    date: "5. januar 2024",
    readTime: "6 min lesing",
    category: "Kursformer",
  },
  {
    id: 4,
    title: "Kostnader ved å ta førerkort i 2024",
    excerpt: "Oversikt over hva det koster å ta førerkort, og hvordan du kan spare penger på opplæringen.",
    date: "1. januar 2024",
    readTime: "7 min lesing",
    category: "Økonomi",
  },
  {
    id: 5,
    title: "Forbered deg til førerprøven",
    excerpt: "Praktiske tips og råd for å forberede deg best mulig til førerprøven, både teori og praksis.",
    date: "28. desember 2023",
    readTime: "5 min lesing",
    category: "Tips",
  },
  {
    id: 6,
    title: "Hva skjer etter at du har bestått prøven?",
    excerpt: "Alt du trenger å vite om hva som skjer etter at du har bestått førerprøven og fått førerkortet ditt.",
    date: "20. desember 2023",
    readTime: "4 min lesing",
    category: "Etter opplæring",
  },
];

const categories = [
  "Alle",
  "Guider",
  "Førerkortklasser",
  "Kursformer",
  "Økonomi",
  "Tips",
  "Etter opplæring",
];

export default function ArtiklerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-200">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-100 mb-4 sm:mb-6">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-[#3bb54a]" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-900 mb-4 sm:mb-6">
              Artikler og guider
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 leading-relaxed max-w-3xl">
              Nyttige artikler og guider om førerkort, trafikkskoler og føreropplæring
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          
          {/* Categories */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    category === "Alle"
                      ? "bg-[#3bb54a] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-200 hover:border-emerald-300"
              >
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
                
                <Link
                  href={`/artikler/${article.id}`}
                  className="inline-flex items-center gap-2 text-[#3bb54a] font-semibold hover:gap-3 transition-all group/link"
                >
                  Les mer
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
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
  );
}

