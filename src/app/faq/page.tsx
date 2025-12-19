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
import { HelpCircle } from "lucide-react";
import { faq } from "@/components/FAQSection";

function FAQContent() {
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

  // Flatten all FAQ items from all categories
  const allFaqItems = faq.flatMap((category) => category.items);

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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 mb-6 sm:mb-8">
              <HelpCircle className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Ofte stilte spørsmål</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Ofte stilte spørsmål
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Alt du lurer på om førerkortportalen og vår tjeneste
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={`relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/20 py-8 sm:py-12 lg:py-16 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {allFaqItems.map((item, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-6 sm:p-7 hover:border-emerald-300/50 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
                >
                  <summary className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 marker:hidden list-none flex items-center justify-between gap-4">
                    <span className="flex-1 pr-4">{item.q}</span>
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-slate-400 group-open:text-emerald-600 group-open:rotate-180 transition-all duration-300 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-5 pt-5 border-t border-slate-200/50">
                    <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full bg-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Klar for å motta tilbud fra ulike trafikkskoler?
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

export default function FAQPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <FAQContent />
      </main>
    </FormProvider>
  );
}

