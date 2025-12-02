"use client";

import { useEffect, useState } from "react";
import { useFormContext } from "@/contexts/FormContext";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const { isFullscreen, setIsFullscreen, hasStartedFilling, setHasStartedFilling } = useFormContext();

  useEffect(() => {
    const handleScroll = () => {
      // Always show if form is in fullscreen mode
      if (isFullscreen) {
        setShow(true);
        return;
      }

      const formElement = document.getElementById("skjema");
      
      if (formElement) {
        const formBottom = formElement.getBoundingClientRect().bottom;
        
        // Show button when form is scrolled past - always show it, even at bottom
        const shouldShow = formBottom < 0;
        setShow(shouldShow);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFullscreen]);

  const scrollToForm = () => {
    if (hasStartedFilling) {
      // If user has started filling, activate fullscreen mode
      setIsFullscreen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Otherwise, just scroll to form
      const element = document.getElementById("skjema");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Activate fullscreen after a short delay
        setTimeout(() => {
          setIsFullscreen(true);
          setHasStartedFilling(true);
        }, 300);
      }
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={scrollToForm}
        className={`w-full pointer-events-auto rounded-full px-6 py-4 text-base font-semibold text-white shadow-lg transition active:scale-95 flex items-center justify-center gap-2 ${
          hasStartedFilling 
            ? "bg-amber-500 hover:bg-amber-600" 
            : "bg-[#3bb54a] hover:bg-[#2d8f3d]"
        }`}
      >
        {hasStartedFilling ? (
          <>
            <svg
              className="w-5 h-5 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Fortsett å fylle ut skjemaet
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Finn trafikkskole
          </>
        )}
      </button>
    </div>
  );
}

