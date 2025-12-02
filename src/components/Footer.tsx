"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";

export default function Footer() {
  const { hasStartedFilling } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reduce padding on mobile when user has started filling (CompactFormCTA is shown instead of StickyMobileCTA)
  const mobilePadding = hasStartedFilling && isMobile ? "pb-6" : "pb-24";

  return (
    <footer className={`border-t border-slate-100 bg-white py-6 sm:py-8 text-xs sm:text-sm text-slate-500 ${mobilePadding} sm:pb-8`}>
      <div className="container mx-auto max-w-[1200px] flex flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3 text-slate-700">
          <p className="font-semibold text-center sm:text-left">
            Førerkortportalen{" • "}Sammenlign trafikkskoler i Norge
          </p>
        </div>
        <p className="text-center sm:text-right">
          © {new Date().getFullYear()} Førerkortportalen. Tjenesten er
          uforpliktende, og data lagres sikkert i norsk sky.
        </p>
      </div>
    </footer>
  );
}

