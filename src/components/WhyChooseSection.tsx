"use client";

import { TrendingUp, Users, ShieldCheck, Sparkles, Shield } from "lucide-react";

const valuePoints = [
  {
    title: "Spar opptil 20 000 kr på å velge riktig skole",
    stat: "20 000",
    statUnit: "kr",
    icon: TrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    statColor: "text-emerald-600",
  },
  {
    title: "Finn en lærer du kommer godt overens med",
    stat: "100%",
    statUnit: "",
    icon: Users,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    statColor: "text-blue-600",
  },
  {
    title: "Det er helt gratis og uforpliktende",
    stat: "100%",
    statUnit: "gratis",
    icon: ShieldCheck,
    iconBg: "bg-slate-50",
    iconColor: "text-slate-700",
    statColor: "text-slate-700",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-6 sm:mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Fordeler ved å benytte tjenesten</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight sm:hidden">
              Fordeler
            </h2>
            <div className="hidden sm:block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Hvorfor bruke førerkortportalen?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                Tre gode grunner til å sammenligne trafikkskoler før du velger
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {valuePoints.map(({ title, stat, statUnit, icon: Icon, iconBg, iconColor, statColor }, index) => (
              <article
                key={index}
                className="group relative bg-slate-100 sm:bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-md hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon and Stat - Same line on mobile */}
                <div className="mb-3 flex items-center gap-3 sm:block">
                  <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0 sm:mb-3`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  {/* Stat */}
                  <div className="flex items-baseline gap-1.5 sm:block">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                      {stat}
                    </span>
                    {statUnit && (
                      <span className="text-lg font-semibold text-slate-900 opacity-80">
                        {statUnit}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-normal text-slate-900 leading-tight">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

