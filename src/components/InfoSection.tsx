"use client";

import { CheckCircle2 } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
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
          <div className="order-2 lg:order-2">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <img
                src="/student1.svg"
                alt="Bil i sirkel"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

