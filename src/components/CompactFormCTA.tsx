"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "@/contexts/FormContext";
import LeadForm from "@/components/LeadForm";

export default function CompactFormCTA() {
  const { hasStartedFilling, isFullscreen, setIsFullscreen, currentStep, formData } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only show on mobile when user has started filling but form is not fullscreen
  if (!hasStartedFilling || isFullscreen || !isMobile) {
    return null;
  }

  const handleContinue = () => {
    setIsFullscreen(true);
    // Small delay to ensure form is rendered before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  // Calculate total steps (same logic as in LeadForm)
  const requiresOtherLicenseStep = formData.mainLicenseSelection === "OTHER";
  const BASE_STEP_COUNT = 4; // postalCode, licenseType, startDate, contactInfo
  const totalSteps = requiresOtherLicenseStep ? BASE_STEP_COUNT + 1 : BASE_STEP_COUNT;
  const progress = totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 0;

  return (
    <div className="sticky top-[64px] z-40 sm:hidden bg-white border-b border-slate-200 shadow-sm">
      <div className="relative px-4 py-3">
        {/* Blurred/compressed form preview */}
        <div className="rounded-xl bg-slate-900 p-3 space-y-2 opacity-70 blur-[1.5px] scale-95 origin-top pointer-events-none">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/70">
            <span>Steg {currentStep + 1} av {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-0.5 rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-[#3bb54a] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[10px] text-white/70 space-y-0.5">
            {formData.postalCode && (
              <div>Postnummer: {formData.postalCode}</div>
            )}
            {formData.mainLicenseSelection && (
              <div>
                {formData.mainLicenseSelection === "B_AUT" ? "B automat" : 
                 formData.mainLicenseSelection === "B" ? "B manuell" : 
                 formData.mainLicenseSelection === "OTHER" && formData.licenseType ? formData.licenseType : "Annet"}
              </div>
            )}
            {formData.startDate && (
              <div>Start: {new Date(formData.startDate).toLocaleDateString('no-NO', { day: 'numeric', month: 'short' })}</div>
            )}
          </div>
        </div>

        {/* Overlay button - centered and prominent */}
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-xl">
          <button
            onClick={handleContinue}
            className="rounded-xl bg-amber-500 hover:bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Fortsett å fylle ut skjema
          </button>
        </div>
      </div>
    </div>
  );
}

