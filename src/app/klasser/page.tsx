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
import { Car, Bike, Truck } from "lucide-react";

const licenseInfo = [
  {
    title: "Klasse B – personbil",
    titleColor: "text-blue-600",
    icon: Car,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    content:
      "Standard lappen opptil 3 500 kg. Inkluderer sikkerhetskurs på bane og i trafikken før oppkjøring.",
    bullets: [
      "Velg mellom manuell og automat – begge deler gir tilgang til intensivløp.",
      "Trafikalt grunnkurs må være fullført før øvingskjøring.",
    ],
  },
  {
    title: "Klasse BE/B96 – tilhenger",
    titleColor: "text-emerald-600",
    icon: Truck,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    content:
      "Gir mulighet til å trekke tyngre hengere. Opplæringen fokuserer på last, kobling og sikker rygging.",
    bullets: [
      "B96 krever ikke oppkjøring, men obligatorisk kurs.",
      "BE avsluttes med førerprøve hos Statens vegvesen.",
    ],
  },
  {
    title: "MC-klasser A/A2/A1",
    titleColor: "text-amber-600",
    icon: Bike,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    content:
      "Starter med obligatorisk teoridel (3 timer) og fortsetter med kjøreteknikk, sikkerhetskurs bane og trafikk.",
    bullets: [
      "Over 25 år eller allerede bilfører? Da kan du hoppe rett til MC-kurset.",
      "Flere skoler tilbyr overgangspakker fra A2 til A.",
    ],
  },
];

function KlasserContent() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6 sm:mb-8">
              <Car className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Førerkortklasser</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Førerkort<span className="text-[#3bb54a]">klasser</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Oversikt over de vanligste førerkortklassene og hva de innebærer
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`pt-0 pb-12 sm:pb-16 lg:pb-20 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'blur-md' : ''}`}>
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {licenseInfo.map((license) => {
              const Icon = license.icon;
              return (
                <article
                  key={license.title}
                  className="rounded-3xl bg-white border-2 border-slate-200 p-6 sm:p-8 shadow-md transition hover:shadow-lg hover:border-emerald-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${license.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-7 w-7 ${license.iconColor}`} />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${license.titleColor}`}>
                    {license.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">
                    {license.content}
                  </p>
                  <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                    {license.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3bb54a] flex-shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
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

export default function KlasserPage() {
  return (
    <FormProvider>
      <main className="min-h-screen bg-white">
        <KlasserContent />
      </main>
    </FormProvider>
  );
}
