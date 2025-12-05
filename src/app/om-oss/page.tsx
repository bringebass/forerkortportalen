"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { Target, Users, Zap, Heart, CheckCircle2, Star } from "lucide-react";

export default function OmOssPage() {
  const values = [
    {
      icon: Target,
      title: "Vårt mål",
      description: "Å gjøre det enklere for deg å finne den perfekte trafikkskolen til riktig pris.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Users,
      title: "For alle",
      description: "Uansett om du skal ta førerkort klasse B, MC eller en annen klasse – vi hjelper deg.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Zap,
      title: "Raskt og enkelt",
      description: "Fyll ut ett skjema og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      icon: Heart,
      title: "100% gratis",
      description: "Tjenesten er helt gratis og uforpliktende. Du velger selv om du vil takke ja til et tilbud.",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      text: "Samarbeider kun med godkjente trafikkskoler",
    },
    {
      icon: CheckCircle2,
      text: "Alle skoler følger læreplanen til Statens vegvesen",
    },
    {
      icon: CheckCircle2,
      text: "Bredt utvalg av trafikkskoler over hele Norge",
    },
    {
      icon: CheckCircle2,
      text: "Lokale skoler som kjenner rutevalg og sensorer",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white sm:bg-gradient-to-br sm:from-slate-50 sm:via-white sm:to-emerald-50/30 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
        {/* Decorative background elements - desktop only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-6 sm:mb-8">
              <Users className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Om oss</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
              Om <span className="text-[#3bb54a]">fører</span>kortportalen
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Vi gjør det enkelt å finne og sammenligne trafikkskoler i hele Norge
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-0 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                Førerkortportalen er en gratis formidlingstjeneste som kobler deg med godkjente trafikkskoler 
                basert på informasjonen du fyller inn i skjemaet. Vi har som mål å gjøre det enklere for deg 
                å finne den perfekte trafikkskolen til riktig pris.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
                I stedet for å kontakte flere skoler individuelt, kan du fylle ut én enkel forespørsel 
                og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område. Alle skolene våre 
                er godkjent av Statens vegvesen og følger læreplanen for føreropplæring.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Tjenesten er helt gratis og uforpliktende, så du kan sammenligne tilbudene i din egen tid 
                og velge det som passer best for deg.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition ${value.bgColor} border-2`}
                  >
                    <Icon className={`h-8 w-8 sm:h-10 sm:w-10 mb-4 ${value.color}`} />
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Features Section */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6 text-center">
                Hva kjennetegner oss?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="h-6 w-6 text-[#3bb54a] flex-shrink-0 mt-0.5" />
                      <p className="text-base text-slate-700 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How it Works */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-blue-50 p-8 sm:p-10 lg:p-12 border border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-8 w-8 text-[#3bb54a]" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Slik fungerer det
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3bb54a] text-white font-semibold flex items-center justify-center text-sm">
                    1
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                    Du fyller ut skjemaet med postnummer, ønsket førerkortklasse og andre relevante opplysninger.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3bb54a] text-white font-semibold flex items-center justify-center text-sm">
                    2
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                    Vi sender forespørselen din til relevante trafikkskoler i området ditt.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3bb54a] text-white font-semibold flex items-center justify-center text-sm">
                    3
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                    Trafikkskolene kontakter deg (ofte innen 24 timer) med tilbud.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3bb54a] text-white font-semibold flex items-center justify-center text-sm">
                    4
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-1">
                    Du sammenligner tilbudene og velger det som passer best for deg.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Klar til å finne din perfekte trafikkskole?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                Fyll ut skjemaet på forsiden og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.
              </p>
              <ScrollToFormButton className="inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d]">
                Gå til skjemaet
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

