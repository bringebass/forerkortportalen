"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FormSidebar from "@/components/FormSidebar";
import { useState, useEffect } from "react";

const steps = [
  {
    number: 1,
    title: "Fyll ut skjemaet",
    description: "Du fyller ut skjemaet med postnummer, ønsket førerkortklasse og andre relevante opplysninger.",
  },
  {
    number: 2,
    title: "Vi sender forespørselen",
    description: "Vi sender forespørselen din til relevante trafikkskoler i området ditt.",
  },
  {
    number: 3,
    title: "Du mottar tilbud",
    description: "Trafikkskolene kontakter deg (ofte innen 24 timer) med tilbud.",
  },
  {
    number: 4,
    title: "Du sammenligner og velger",
    description: "Du sammenligner tilbudene og velger det som passer best for deg.",
  },
];

function SlikFungererDetContent() {
  const { isDesktopFocused } = useFormContext();
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
    <>
      <Navbar />
      <ArticleFormOverlay />
      <ArticleStickyCTA />
      <CompactFormCTA />
      <StickyMobileCTA />
      
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-emerald-50/30 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        {/* Decorative background elements - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Slik <span className="text-[#3bb54a]">fungerer</span> det
            </h1>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50/30 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left side - Steps */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-10">
                Steg for steg
              </h2>
              <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#3bb54a] text-white font-semibold flex items-center justify-center text-lg shadow-lg shadow-[#3bb54a]/25">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Right side - Form sidebar */}
            <FormSidebar />
          </div>
        </div>
      </section>

      {/* Why Use Service Section */}
      <section className={`relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/30 border border-slate-200 p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
                Hvorfor bruke Førerkortportalen?
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                I stedet for å kontakte flere trafikkskoler én og én, kan du fylle ut én enkel forespørsel og få tilbud fra flere kvalitetssikrede skoler i ditt område. Du sparer tid, får oversikt over pris og tilbud, og kan sammenligne på din egen måte – helt gratis og uforpliktende.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Alle skolene vi samarbeider med er godkjent av Statens vegvesen og følger læreplanen for føreropplæring. Du velger selv om du vil takke ja til et tilbud, og tjenesten er helt gratis å bruke.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - Now integrated with steps section using grid layout */}

      <div className={isDesktopFocused && !isMobile ? 'blur-md transition-all duration-500' : ''}>
        <Footer />
      </div>
    </>
  );
}

export default function SlikFungererDetPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <SlikFungererDetContent />
      </main>
    </FormProvider>
  );
}
