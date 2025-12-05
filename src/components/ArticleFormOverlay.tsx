"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";

const MOBILE_FULLSCREEN_BG = "bg-slate-900"; // Fullscreen overlay background

export default function ArticleFormOverlay() {
  const { isFullscreen, setIsFullscreen, isDesktopFocused, setIsDesktopFocused } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll on mobile when form is fullscreen
  useEffect(() => {
    if (isFullscreen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen, isMobile]);

  // Lock scroll on desktop when form is focused
  useEffect(() => {
    if (isDesktopFocused && !isMobile) {
      document.body.style.overflow = "hidden";
    } else if (!isMobile) {
      document.body.style.overflow = "";
    }
    return () => {
      if (!isMobile) {
        document.body.style.overflow = "";
      }
    };
  }, [isDesktopFocused, isMobile]);

  return (
    <>
      {/* Fullscreen overlay on mobile */}
      <div className={`fixed inset-0 z-50 ${MOBILE_FULLSCREEN_BG} sm:hidden transition-opacity duration-300 ${isFullscreen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-start justify-center p-4 pt-6">
              <div className="w-full max-w-lg">
                {/* Form container - same styling as main page */}
                <div className="shadow-none">
                  <LeadForm hideHeading={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Focus Overlay */}
      {isDesktopFocused && !isMobile && (
        <div 
          className="fixed inset-0 z-[100] bg-white/80 transition-opacity duration-500 flex items-center justify-center p-4"
          onClick={() => setIsDesktopFocused(false)}
        >
          <div 
            className="relative w-full max-w-2xl animate-fadeInScale"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDesktopFocused(false)}
              className="absolute -top-12 right-0 p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white transition z-10 shadow-lg"
              aria-label="Lukk skjema"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="rounded-[32px] backdrop-blur-md shadow-2xl shadow-slate-900/50 bg-gradient-to-br from-slate-900 to-slate-600"
            >
              <LeadForm hideHeading={false} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}



