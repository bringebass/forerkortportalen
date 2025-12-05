"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Clock, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function TakkPage() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const nextSteps = [
    {
      icon: Clock,
      title: "Innen 24 timer",
      description: "Trafikkskolene mottar forespørselen din og vurderer om de kan hjelpe deg.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Phone,
      title: "Du blir kontaktet",
      description: "Relevante trafikkskoler kontakter deg med tilbud basert på dine behov.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Mail,
      title: "Sammenlign tilbud",
      description: "Du mottar tilbud via telefon eller e-post som du kan sammenligne i din egen tid.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full p-4 sm:p-5 shadow-lg shadow-emerald-500/25">
                  <CheckCircle2 className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Forespørsel sendt!</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Takk for din forespørsel!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Vi har mottatt forespørselen din og sender den videre til relevante trafikkskoler i ditt område.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Hva skjer nå?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Her er hva du kan forvente i løpet av de neste timene og dagene
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-3 mb-12">
              {nextSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${step.bgColor} border-2`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center ${step.color} border-2 border-current/20`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Info Box */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-6 sm:p-8 lg:p-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                    Viktig informasjon
                  </h3>
                  <ul className="space-y-2 text-base sm:text-lg text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Du vil vanligvis høre fra trafikkskolene innen 24 timer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Tjenesten er helt gratis og uforpliktende – du velger selv om du vil takke ja til et tilbud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Sjekk telefon og e-post de neste dagene for tilbud fra trafikkskolene</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3bb54a] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d] hover:shadow-xl hover:shadow-[#3bb54a]/40 w-full sm:w-auto"
              >
                <span>Tilbake til forsiden</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/artikler"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 w-full sm:w-auto"
              >
                <span>Les våre artikler</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
              Hvorfor velge Førerkortportalen?
            </h3>
            <div className="grid gap-6 sm:grid-cols-3 mt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#3bb54a] mb-2">100%</div>
                <p className="text-base text-slate-700">Gratis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#3bb54a] mb-2">24t</div>
                <p className="text-base text-slate-700">Rask respons</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#3bb54a] mb-2">Uforpliktende</div>
                <p className="text-base text-slate-700">Du velger selv</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
