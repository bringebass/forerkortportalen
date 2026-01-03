"use client";

import { useState, useEffect } from "react";
import { useFormContext } from "@/contexts/FormContext";
import { LeadForm } from "@/components/LeadForm";

export default function FormSidebar() {
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
    <div className="lg:col-span-4 mt-8 lg:mt-0">
      <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:pr-1">
        <div 
          className={`bg-gradient-to-br from-slate-900 to-slate-600 backdrop-blur-md rounded-3xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8 transition-all duration-300 cursor-pointer ${isDesktopFocused && !isMobile ? 'opacity-0 pointer-events-none' : ''}`}
          onClick={(e) => {
            if (!isMobile && !isDesktopFocused) {
              const target = e.target as HTMLElement;
              const interactiveElement = target.closest('input, button, select, textarea, a, label, [role="button"], [type="submit"]');
              
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
      </div>
    </div>
  );
}

