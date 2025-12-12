"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { X, Settings } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent-accepted";
const COOKIE_CATEGORIES_KEY = "cookie-categories";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

type CookieCategory = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};

const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: "necessary",
    name: "Strengt nødvendig",
    description: "Disse cookies er nødvendige for at nettstedet skal fungere og kan ikke deaktiveres.",
    required: true,
  },
  {
    id: "performance",
    name: "Ytelse",
    description: "Disse cookies hjelper oss å forstå hvordan besøkende bruker nettstedet ved å samle anonym informasjon.",
    required: false,
  },
];

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({
    necessary: true, // Always selected and disabled
    performance: false,
  });

  useEffect(() => {
    // Check if user has already accepted cookies (only for showing/hiding banner)
    // Note: Consent for analytics is ALWAYS granted (implicit consent - using site = consent)
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      const categories = localStorage.getItem(COOKIE_CATEGORIES_KEY);
      
      if (consent === "true") {
        setHasAccepted(true);
        // Load saved categories (only for banner display)
        if (categories) {
          try {
            setSelectedCategories(JSON.parse(categories));
          } catch (e) {
            // Use defaults if parsing fails
          }
        }
      } else {
        // Small delay to ensure page has rendered
        setTimeout(() => {
          setShowBanner(true);
        }, 500);
      }
    }
  }, []);

  const updateGoogleAnalytics = (categories: Record<string, boolean>) => {
    // Note: This function is only for cookie banner preferences
    // Analytics consent is ALWAYS granted (implicit consent - using site = consent)
    // We don't actually update GA consent here since it's always granted
    // This function exists only for compatibility with the banner UI
  };

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    // Prevent unchecking necessary cookies
    if (categoryId === "necessary") return;
    
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryId]: checked,
    }));
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
    };
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    // Only accept necessary cookies
    const onlyNecessary = {
      necessary: true,
      performance: false,
    };
    saveConsent(onlyNecessary);
  };

  const handleSavePreferences = () => {
    saveConsent(selectedCategories);
  };

  const saveConsent = (categories: Record<string, boolean>) => {
    // Save consent preferences (only for banner display purposes)
    // Note: Analytics consent is ALWAYS granted (implicit consent)
    if (typeof window !== "undefined") {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
      localStorage.setItem(COOKIE_CATEGORIES_KEY, JSON.stringify(categories));
      setShowBanner(false);
      setHasAccepted(true);
      setSelectedCategories(categories);
      // No need to update GA consent - it's always granted
    }
  };

  return (
    <>
      {/* Google Analytics - Set consent FIRST (before GA script loads) */}
      {GA_MEASUREMENT_ID && (
        <>
          {/* Step 1: Set default consent mode BEFORE loading GA script */}
          <Script
            id="ga-consent"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                // Set consent mode FIRST - using implicit consent: visiting site = consent
                // Analytics is ALWAYS granted - cookie banner is only for UI display
                gtag('consent', 'default', {
                  'analytics_storage': 'granted'
                });
              `,
            }}
          />
          {/* Step 2: Load GA script */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          {/* Step 3: Configure GA (runs after GA script loads) */}
          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                // The GA script should have loaded and defined gtag by now
                if (typeof gtag !== 'undefined') {
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname
                  });
                }
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
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Dette nettstedet bruker informasjonskapsler
                </h2>
                <button
                  onClick={() => setShowBanner(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Lukk"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed">
                Vi bruker informasjonskapsler for å tilpasse innhold, annonser og analysere trafikken vår. 
                Vi deler også informasjon om din bruk av nettstedet vårt med våre annonserings- og analysepartnere 
                som kan kombinere den med annen informasjon du har gitt dem eller som de har samlet inn fra din bruk av tjenestene deres.{" "}
                <a
                  href="/personvern"
                  className="text-[#3bb54a] hover:text-emerald-600 underline font-medium transition"
                >
                  Personvernerklæring
                </a>
                .
              </p>

              {/* Cookie Categories */}
              {showDetails && (
                <div className="mb-6 space-y-4">
                  {COOKIE_CATEGORIES.map((category) => (
                    <div key={category.id} className="flex items-start gap-3">
                      <div className="flex items-center pt-0.5">
                        <input
                          type="checkbox"
                          id={`cookie-${category.id}`}
                          checked={selectedCategories[category.id] || false}
                          onChange={(e) => handleCategoryChange(category.id, e.target.checked)}
                          disabled={category.required}
                          className={`h-5 w-5 rounded border-slate-300 text-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a] ${
                            category.required ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor={`cookie-${category.id}`}
                          className={`text-sm sm:text-base font-semibold text-slate-900 block mb-1 ${
                            category.required ? "cursor-not-allowed" : "cursor-pointer"
                          }`}
                        >
                          {category.name}
                        </label>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#3bb54a] text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors text-sm sm:text-base whitespace-nowrap shadow-sm"
                >
                  Godta alle
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  Avvis alle
                </button>
                {showDetails && (
                  <button
                    onClick={handleSavePreferences}
                    className="px-5 py-2.5 sm:px-6 sm:py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    Lagre innstillinger
                  </button>
                )}
              </div>

              {/* Show Details Link */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-4 flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors mx-auto"
              >
                <Settings className="h-4 w-4" />
                {showDetails ? "Skjul detaljer" : "Vis detaljer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
