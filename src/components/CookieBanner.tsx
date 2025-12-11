"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (consent === "true") {
        setHasAccepted(true);
        // Initialize GA if already accepted
        if (GA_MEASUREMENT_ID && window.gtag) {
          window.gtag("consent", "update", {
            analytics_storage: "granted",
          });
        }
      } else {
        // Small delay to ensure page has rendered
        setTimeout(() => {
          setShowBanner(true);
        }, 500);
      }
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
      setShowBanner(false);
      setHasAccepted(true);
      
      // Initialize Google Analytics after acceptance
      if (GA_MEASUREMENT_ID && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  };

  // Load Google Analytics script (will be blocked until consent is granted)
  const shouldLoadGA = hasAccepted && GA_MEASUREMENT_ID;

  return (
    <>
      {/* Google Analytics - Equivalent to the standard gtag.js snippet */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                // Check if user has already accepted cookies
                const hasAccepted = localStorage.getItem('${COOKIE_CONSENT_KEY}') === 'true';
                
                // Configure GA with consent mode
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  analytics_storage: hasAccepted ? 'granted' : 'denied'
                });
              `,
            }}
          />
        </>
      )}

      {/* Cookie Banner - Only show if not accepted */}
      {showBanner && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 animate-fadeIn"
          role="dialog"
          aria-label="Cookie-samtykke"
        >
          <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            {/* Content */}
            <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                Vi bruker cookies for å forbedre opplevelsen din og analysere trafikken.{" "}
                <a
                  href="/personvern"
                  className="text-[#3bb54a] hover:text-emerald-600 underline font-medium transition"
                >
                  Les mer
                </a>
                .
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                onClick={handleAccept}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[#3bb54a] text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-xs sm:text-sm whitespace-nowrap shadow-sm"
              >
                Aksepter
              </button>
              <button
                onClick={handleAccept}
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
                aria-label="Lukk"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
