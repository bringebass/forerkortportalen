"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FormSidebar from "@/components/FormSidebar";
import { useState, useEffect } from "react";
import { Bike } from "lucide-react";

function MCKlasserContent() {
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
      <section className={`relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-amber-50/30 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        {/* Decorative background elements - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 backdrop-blur-sm border border-amber-200/50 mb-6 sm:mb-8">
                  <Bike className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-semibold text-amber-700">Førerkortklasser</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                  MC-klasser <span className="text-amber-600">A/A2/A1</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
                  Starter med obligatorisk teoridel (3 timer) og fortsetter med kjøreteknikk, sikkerhetskurs bane og trafikk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`pt-0 pb-12 sm:pb-16 lg:pb-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left side - Content */}
            <div className="lg:col-span-8">
              <article className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6">
                <Bike className="h-7 w-7 text-amber-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-600">
                MC-klasser A/A2/A1
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                MC-klassene gir deg rett til å kjøre motorsykkel. Opplæringen starter med obligatorisk teoridel på 3 timer 
                og fortsetter med kjøreteknikk, sikkerhetskurs på bane og trafikkopplæring.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Over 25 år eller allerede bilfører? Da kan du hoppe rett til MC-kurset.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Flere skoler tilbyr overgangspakker fra A2 til A.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Obligatorisk sikkerhetskurs på bane må fullføres før førerprøve.
                  </p>
                </div>
              </div>

              {/* Varighet og krav */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Varighet og krav
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  Varigheten varierer avhengig av hvilken MC-klasse du tar og om du allerede har bilførerkort:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Klasse A1:</strong> Typisk 3-5 måneder. Minimumsalder 16 år. Gir rett til å kjøre lett motorsykkel opptil 125 ccm.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Klasse A2:</strong> Typisk 2-4 måneder. Minimumsalder 18 år. Gir rett til å kjøre motorsykkel opptil 35 kW.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Klasse A:</strong> Typisk 1-3 måneder hvis du allerede har bilførerkort. Minimumsalder 24 år, eller 20 år hvis du har hatt A2 i minst 2 år. Gir rett til å kjøre alle typer motorsykkel.
                    </div>
                  </li>
                </ul>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Obligatorisk opplæring:</strong> Alle MC-klassene krever obligatorisk teoridel på 3 timer, kjøreteknikk, 
                  sikkerhetskurs på bane og trafikkopplæring. Hvis du allerede har klasse B, er det enklere å få MC-førerkortet.
                </p>
              </div>
            </article>
            </div>

            {/* Right side - Form sidebar */}
            <FormSidebar />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full bg-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Klar for å ta MC-førerkort?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Fyll ut skjemaet på forsiden og få tilbud fra flere godkjente trafikkskoler i ditt område.
          </p>
          <ScrollToFormButton className="inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d]">
            Gå til skjemaet
          </ScrollToFormButton>
        </div>
      </section>

      <div className={isDesktopFocused && !isMobile ? 'blur-md transition-all duration-500' : ''}>
        <Footer />
      </div>
    </>
  );
}

export default function MCKlasserPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <MCKlasserContent />
      </main>
    </FormProvider>
  );
}

