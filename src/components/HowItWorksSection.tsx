"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";

const features = [
  {
    text: "Fyll ut én enkel forespørsel",
    highlight: "under ett minutt",
  },
  {
    text: "Få tilbud fra flere",
    highlight: "kvalitetssikrede trafikkskoler",
  },
  {
    text: "Tjenesten er",
    highlight: "helt gratis og uforpliktende",
  },
];

export default function HowItWorksSection() {

  return (
    <section id="hvordan" className="relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-emerald-50/30 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 font-sans">
      {/* Decorative background elements - desktop only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md sm:max-w-2xl mx-auto lg:max-w-3xl">
              <img
                src="/offers.svg"
                alt="Hvordan tjenesten fungerer"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Så enkelt er det</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Slik fungerer det
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Førerkortportalen gjør det enkelt å finne den perfekte trafikkskolen. 
                Fyll ut én forespørsel og få tilbud fra flere skoler i ditt område.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:border-emerald-300/50 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                      {feature.text}{" "}
                      <span className="font-semibold text-emerald-700">
                        {feature.highlight}
                      </span>
                  </p>
                </div>
              </div>
            ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <ScrollToFormButton className="group inline-flex items-center gap-3 px-6 py-4 bg-[#3bb54a] text-white font-semibold rounded-xl shadow-lg shadow-[#3bb54a]/25 hover:shadow-xl hover:shadow-[#3bb54a]/30 transition-all duration-300 hover:scale-105">
                <span>Kom i gang nå</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

