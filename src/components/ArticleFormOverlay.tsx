"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";
import LeadForm from "@/components/LeadForm";

const MOBILE_FULLSCREEN_BG = "bg-slate-900"; // Fullscreen overlay background

export default function ArticleFormOverlay() {
  const { isFullscreen, setIsFullscreen } = useFormContext();
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

  if (!isMobile) return null;

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
    </>
  );
}


