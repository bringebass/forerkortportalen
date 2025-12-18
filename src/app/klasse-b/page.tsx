"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { FormProvider, useFormContext } from "@/contexts/FormContext";
import ArticleStickyCTA from "@/components/ArticleStickyCTA";
import ArticleFormOverlay from "@/components/ArticleFormOverlay";
import CompactFormCTA from "@/components/CompactFormCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { useState, useEffect } from "react";
import { Car } from "lucide-react";

function KlasseBContent() {
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
      <section className={`relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-blue-50/30 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        {/* Decorative background elements - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6 sm:mb-8">
              <Car className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Førerkortklasser</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Klasse <span className="text-blue-600">B</span> – personbil
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Standard lappen opptil 3 500 kg. Inkluderer sikkerhetskurs på bane og i trafikken før oppkjøring.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`pt-0 pb-12 sm:pb-16 lg:pb-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Car className="h-7 w-7 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
                Klasse B – personbil
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                Klasse B er den vanligste førerkortklassen i Norge og gir deg rett til å kjøre personbiler opptil 3 500 kg. 
                Opplæringen inkluderer både teori og praksis, med obligatoriske kurs på bane og i trafikken før oppkjøring.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Velg mellom manuell og automat – begge deler gir tilgang til intensivløp.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Trafikalt grunnkurs må være fullført før øvingskjøring.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Obligatorisk sikkerhetskurs på bane og i trafikken må fullføres før førerprøve.
                  </p>
                </div>
              </div>

              {/* Varighet og krav */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Varighet og krav
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  Det tar typisk <strong>3-6 måneder</strong> å ta klasse B, avhengig av hvor intensivt du tar opplæringen. 
                  Med intensivkurs kan du fullføre på kortere tid, mens tradisjonelt løp kan ta lengre tid.
                </p>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  <strong>Minimumsalder:</strong> Du må være minst 18 år for å ta klasse B. For øvingskjøring må du være 
                  minst 16 år og ha fullført trafikalt grunnkurs.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Obligatorisk opplæring:</strong> Du må ha minst 5 obligatoriske kjøretimer med trafikkskole, 
                  samt minimum 15 timer privat øvingskjøring med f.eks. foreldre eller andre som har hatt klasse B i minst 5 år. 
                  I tillegg må du fullføre førerprøve teori, obligatorisk kjøretime, sikkerhetskurs bane og sikkerhetskurs trafikk.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full bg-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Klar for å ta klasse B?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
            Fyll ut skjemaet på forsiden og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.
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

export default function KlasseBPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <KlasseBContent />
      </main>
    </FormProvider>
  );
}
