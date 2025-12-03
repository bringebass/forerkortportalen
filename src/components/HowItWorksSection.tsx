"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

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
    text: "Sammenlign og velg",
    highlight: "den som passer deg best",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="hvordan" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 font-sans">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20 p-8 lg:p-12">
                <img
                  src="/offers.svg"
                  alt="Hvordan tjenesten fungerer"
                  className="w-full h-full object-contain"
                />
              </div>
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
                Fra behov til{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    konkrete tilbud
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-emerald-200/40 -z-0 transform -skew-x-12"></span>
                </span>
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
              <a
                href="#form"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>Kom i gang nå</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

