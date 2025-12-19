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
import { Truck } from "lucide-react";

function TilhengerContent() {
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
          <div className="max-w-4xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6 sm:mb-8">
                  <Truck className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-700">Førerkortklasser</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                  Klasse <span className="text-emerald-600">BE/B96</span> – tilhenger
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
                  Gir mulighet til å trekke tyngre hengere. Opplæringen fokuserer på last, kobling og sikker rygging.
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
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                <Truck className="h-7 w-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-600">
                Klasse BE/B96 – tilhenger
              </h2>
              <p className="text-base sm:text-lg text-slate-700 mb-6 leading-relaxed">
                Med klasse BE eller B96 kan du trekke tyngre hengere bak bilen din. Opplæringen fokuserer særlig på 
                last, kobling av tilhenger og sikker rygging. Dette er en praktisk utvidelse av klasse B som gir deg 
                større fleksibilitet i trafikken.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    B96 krever ikke oppkjøring, men obligatorisk kurs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    BE avsluttes med førerprøve hos Statens vegvesen.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                  <p className="text-base text-slate-700 leading-relaxed">
                    Du må ha klasse B før du kan ta BE eller B96.
                  </p>
                </div>
              </div>

              {/* Varighet og krav */}
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Varighet og krav
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  <strong>B96:</strong> Dette er det raskeste alternativet og tar typisk kun <strong>1-2 dager</strong>. 
                  Det er et obligatorisk kurs uten oppkjøring som gir deg rett til å trekke tilhenger med totalvekt 
                  (bil + tilhenger) opptil 4250 kg, hvor tilhengeren ikke kan veie mer enn 750 kg.
                </p>
                <p className="text-base text-slate-700 leading-relaxed mb-4">
                  <strong>BE:</strong> Tar typisk <strong>2-4 uker</strong> og avsluttes med førerprøve. Dette gir deg 
                  rett til å trekke tyngre hengere enn B96 – tilhengeren kan veie opptil 3500 kg, og totalvekten 
                  (bil + tilhenger) kan være opptil 7000 kg.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Krav:</strong> Du må ha klasse B før du kan ta BE eller B96. Opplæringen fokuserer på 
                  trygg last, riktig kobling, sikker kjøring og spesielt rygging med tilhenger. B96 er perfekt hvis 
                  du kun skal trekke lette hengere, mens BE gir deg mer fleksibilitet for tyngre hengere.
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
            Klar for å ta tilhenger-førerkort?
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

export default function TilhengerPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <TilhengerContent />
      </main>
    </FormProvider>
  );
}

