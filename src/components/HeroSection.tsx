"use client";

import LeadForm from "@/components/LeadForm";
import { Clock3, ShieldCheck, Users2 } from "lucide-react";
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";

const heroHighlights = [
  { label: "100% gratis", icon: ShieldCheck, iconColor: "" },
  { label: "Du velger skolen", icon: Users2, iconColor: "" },
  { label: "Helt uforpliktende", icon: Clock3, iconColor: "" },
];

// ============================================
// MOBILE FORM BACKGROUND COLORS
// Change these values to experiment with different colors:
//
// MOBILE_FORM_BG - The form container background (visible form box)
// MOBILE_FULLSCREEN_BG - The fullscreen overlay background (when user clicks into form)
// 
// For seamless look, use the same color for both, or use a solid color for fullscreen
// and gradient for form, or vice versa.
//
// SOLID COLORS:
//   "bg-slate-900"        - Dark gray (same as CTA section: "Klar til å finne din perfekte trafikkskole?")
//   "bg-slate-800"        - Slightly lighter gray
//   "bg-blue-900"         - Dark blue
//   "bg-emerald-900"      - Dark green
//   "bg-indigo-900"       - Dark indigo
//   "bg-purple-900"       - Dark purple
//   "bg-slate-700"        - Medium gray
//
// GRADIENT OPTIONS:
//   "bg-gradient-to-br from-blue-900 to-blue-800"                    - Blue gradient
//   "bg-gradient-to-br from-purple-900 to-purple-800"                - Purple gradient
//   "bg-gradient-to-br from-indigo-900 to-indigo-800"                - Indigo gradient
//   "bg-gradient-to-br from-emerald-900 to-emerald-800"              - Green gradient
//   "bg-gradient-to-br from-slate-900 to-slate-800"                  - Gray gradient
//   "bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"   - Multi-color gradient
//   "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"     - Blue-gray gradient
//   "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"  - Purple-pink gradient
//   "bg-gradient-to-br from-teal-900 to-cyan-800"                    - Teal-cyan gradient
//   "bg-gradient-to-br from-violet-900 to-purple-900"                - Violet-purple gradient
// ============================================
const MOBILE_FORM_BG = "bg-gradient-to-br from-slate-900 to-slate-600"; // Visible mobile form background - gradient with white text
const MOBILE_FULLSCREEN_BG = "bg-slate-900"; // Fullscreen overlay background - use solid color for seamless look


export default function HeroSection() {
  const { isFullscreen, setIsFullscreen, setHasStartedFilling, hasStartedFilling, isDesktopFocused, setIsDesktopFocused } = useFormContext();
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

  // Check if form should open fullscreen from navigation
  useEffect(() => {
    const shouldOpenForm = sessionStorage.getItem("openFullscreenForm");
    if (shouldOpenForm === "true" && isMobile) {
      sessionStorage.removeItem("openFullscreenForm");
      setIsFullscreen(true);
      setHasStartedFilling(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isMobile, setIsFullscreen, setHasStartedFilling]);

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

  // Don't lock scroll on desktop - allow scrolling

  return (
    <>
      {/* Fullscreen overlay on mobile */}
      <div className={`fixed inset-0 z-50 ${MOBILE_FULLSCREEN_BG} sm:hidden transition-opacity duration-300 ${isFullscreen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-start justify-center p-4 pt-6">
              <div className="w-full max-w-lg">
                {/* Form container - transparent on fullscreen to blend with background */}
                <div className="shadow-none">
                  <LeadForm />
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
              <LeadForm />
            </div>
          </div>
        </div>
      )}

      <section className={`relative overflow-hidden bg-white text-slate-900 lg:bg-slate-900 lg:text-white lg:min-h-[820px] ${isFullscreen ? 'sm:block hidden' : ''} ${isDesktopFocused && !isMobile ? 'lg:blur-md transition-all duration-500' : ''}`}>
        {/* Background image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/bg-photo.png"
            alt="Elev i bil som får kjøretime"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
          <div className={`absolute inset-0 transition-all duration-500 ${isDesktopFocused && !isMobile ? 'bg-white/80' : 'bg-slate-900/65'}`} />
        </div>

        <div id="skjema" className={`relative z-10 flex w-full sm:px-6 sm:py-8 lg:min-h-[820px] lg:px-8 lg:py-20 scroll-mt-20 ${hasStartedFilling && isMobile && !isFullscreen ? 'min-h-0 py-4' : 'min-h-[400px] lg:min-h-[820px]'}`}>
          {/* Mobile: Form goes full width, Desktop: Container layout */}
          <div className="sm:mx-auto sm:flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <div className={`hidden sm:block space-y-4 sm:space-y-6 lg:w-[50%] transition-opacity duration-500 ${isDesktopFocused && !isMobile ? 'opacity-40' : ''}`}>
              <h1 className="text-center text-[32px] font-semibold leading-[1.15] text-slate-900 sm:text-left sm:text-[48px] lg:text-[54px] lg:text-white">
                Spar penger og finn riktig trafikkskole for deg
              </h1>
              <p className="text-center text-base text-slate-600 sm:text-left sm:text-lg lg:text-white/85">
                Del behovet ditt én gang – vi kobler deg med kvalitetssikrede
                trafikkskoler i området ditt slik at du kan sammenligne priser,
                pakker og tilgjengelighet.
              </p>
              <div className="hidden flex-wrap gap-3 md:flex">
                {heroHighlights.map(({ label, icon: Icon, iconColor }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm lg:bg-white/90 lg:text-slate-900"
                  >
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className={`w-full lg:w-[50%] ${isFullscreen || (hasStartedFilling && isMobile) ? 'sm:block hidden' : ''} ${isDesktopFocused && !isMobile ? 'lg:opacity-0 lg:pointer-events-none' : ''}`}>
              {/* Desktop form uses original bg-slate-900/70, mobile uses MOBILE_FORM_BG constant above */}
              <div 
                className={`${MOBILE_FORM_BG} sm:rounded-[32px] backdrop-blur-md shadow-none sm:shadow-2xl sm:shadow-slate-900/50 desktop-form-bg transition-transform duration-300 ${isDesktopFocused && !isMobile ? 'lg:scale-95' : 'lg:hover:scale-[1.02]'} relative ${!isMobile && !isDesktopFocused ? 'lg:cursor-pointer' : ''}`}
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
                <LeadForm />
              </div>

            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        @media (min-width: 640px) {
          .desktop-form-bg {
            background: linear-gradient(to bottom right, rgb(15 23 42), rgb(71 85 105)) !important;
          }
        }
        
        /* Ensure focused input shows visual feedback - high specificity */
        input:focus,
        textarea:focus,
        select:focus {
          border-color: #3bb54a !important;
          box-shadow: 0 0 0 2px rgba(59, 181, 74, 0.2) !important;
          outline: 2px solid rgba(59, 181, 74, 0.2) !important;
          outline-offset: 2px !important;
          caret-color: #3bb54a !important;
        }
        
        /* Force focus styles for desktop-focused inputs */
        input.desktop-focused-input:focus,
        textarea.desktop-focused-input:focus,
        select.desktop-focused-input:focus,
        input.desktop-focused-input,
        textarea.desktop-focused-input,
        select.desktop-focused-input {
          border-color: #3bb54a !important;
          box-shadow: 0 0 0 2px rgba(59, 181, 74, 0.2) !important;
          outline: 2px solid rgba(59, 181, 74, 0.2) !important;
          outline-offset: 2px !important;
          caret-color: #3bb54a !important;
        }
      `}</style>
    </>
  );
}

