"use client";

import { TrendingUp, Users, ShieldCheck, Sparkles } from "lucide-react";

const valuePoints = [
  {
    title: "Spar opptil 20 000 kr",
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
    title: "Kun kvalitetssikrede trafikkskoler",
    stat: "Alle",
    statUnit: "",
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
          <div className="text-left mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Fordeler</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Hvorfor bruke{" "}
              <span className="text-blue-600">førerkortportalen</span>?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
              Tre gode grunner til å sammenligne trafikkskoler før du velger
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
            {valuePoints.map(({ title, stat, statUnit, icon: Icon, iconBg, iconColor, statColor }, index) => (
              <article
                key={index}
                className="group relative bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-md hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`mb-3 w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Stat */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-2xl sm:text-3xl font-bold ${statColor} leading-none`}>
                      {stat}
                    </span>
                    {statUnit && (
                      <span className={`text-lg font-semibold ${statColor} opacity-80`}>
                        {statUnit}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
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

