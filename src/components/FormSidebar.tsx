"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

function FormWrapper() {
  const { isDesktopFocused, setIsDesktopFocused } = useFormContext();
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
    <div 
      className={`bg-gradient-to-br from-slate-900 to-slate-600 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8 transition-all duration-300 cursor-pointer ${isDesktopFocused && !isMobile ? 'opacity-0 pointer-events-none' : ''}`}
      onClick={(e) => {
        if (!isMobile && !isDesktopFocused) {
          const target = e.target as HTMLElement;
          // Check if the click is on an interactive form element
          const interactiveElement = target.closest('input, button, select, textarea, a, label, [role="button"], [type="submit"]');
          
          // Only trigger focus mode if NOT clicking on interactive elements
          // Interactive elements will trigger focus mode through their onFocus handlers
          if (!interactiveElement) {
            setIsDesktopFocused(true);
          }
        }
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-0.5 text-center lg:text-center">
        Motta tilbud fra flere trafikkskoler
      </h2>
      <p className="text-base text-slate-300 mb-0.5 text-center">
        Tjenesten er gratis og uforpliktende
      </p>
      <LeadForm hideHeading={true} />
    </div>
  );
}

export default function FormSidebar() {
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

  // Don't show sidebar on desktop if form is focused
  if (!isMobile && isDesktopFocused) {
    return null;
  }

  return (
    <div className="lg:col-span-4 mt-8 lg:mt-0">
      <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:pr-1 space-y-6">
        <FormWrapper />

        {/* 3 gode grunner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">3 gode grunner til å velge Førerkortportalen</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Flere tilbud – ett skjema</p>
                <p className="text-sm text-slate-600">Få tilbud fra kvalitetssikrede trafikkskoler uten å ringe rundt.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Trygt og uforpliktende</p>
                <p className="text-sm text-slate-600">Ingen kostnad for deg – velg tilbudet som passer best.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Spar tid og penger</p>
                <p className="text-sm text-slate-600">Sammenlign pris, oppstart og fleksibilitet på ett sted.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
