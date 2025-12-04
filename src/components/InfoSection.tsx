"use client";

import { CheckCircle2 } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-emerald-50/20 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Sammenlign trafikkskoler og{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">
                    spar penger
                  </span>
                  <span className=""></span>
                </span>
              </h2>
              <div className="space-y-5 text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                <p>
                  Førerkortportalen er din vei til å finne den beste trafikkskolen til riktig pris. 
                  I stedet for å kontakte flere skoler individuelt, kan du fylle ut én enkel forespørsel 
                  og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.
                </p>
                <p>
                  Vi samarbeider med et bredt utvalg av trafikkskoler over hele Norge, fra lokale 
                  fagskoler til nasjonale aktører. Alle skolene våre er godkjent av Statens vegvesen 
                  og følger læreplanen for føreropplæring.
                </p>
                <p>
                  Uansett om du skal ta førerkort klasse B, MC, eller en annen klasse – vi hjelper deg 
                  med å finne den opplæringen som passer deg best. Tjenesten er helt gratis og uforpliktende, 
                  så du kan sammenligne tilbudene i din egen tid.
                </p>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-6 border-t border-slate-200/50">
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { label: "100% gratis", icon: CheckCircle2 },
                  { label: "Helt uforpliktende", icon: CheckCircle2 },
                  { label: "Kvalitetssikret", icon: CheckCircle2 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 hover:border-emerald-300/50 hover:bg-white/80 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-2 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-3xl blur-2xl transform -rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20 p-8 lg:p-12">
                <img
                  src="/student1.svg"
                  alt="Bil i sirkel"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

