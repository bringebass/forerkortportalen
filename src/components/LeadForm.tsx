"use client";

import { useMemo, useState, useEffect, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";
import { useFormContext, FormState } from "@/contexts/FormContext";

const mainLicenseOptions = [
  { value: "B_AUT", label: "B automat" },
  { value: "B", label: "B manuell" },
  { value: "OTHER", label: "Andre førerkort" },
];

const otherLicenseOptions = [
  { value: "B96", label: "B96 / B med henger" },
  { value: "BE", label: "Klasse BE" },
  { value: "A", label: "Klasse A" },
  { value: "A2", label: "Klasse A2" },
  { value: "A1", label: "Klasse A1" },
  { value: "AM147", label: "Klasse AM147" },
  { value: "C", label: "Klasse C" },
  { value: "D", label: "Klasse D" },
  { value: "DontKnow", label: "Vet ikke" },
];

const intensiveOptions = [
  { value: "ja", label: "Ja, intensiv" },
  { value: "nei", label: "Nei" },
  { value: "usikker", label: "Usikker" },
];

const trafficCourseOptions = [
  { value: "fullfort", label: "Kurs fullført" },
  { value: "pagar", label: "Pågår" },
  { value: "ikke", label: "Trenger kurs" },
];

// Step configuration - change the order here to reorder the form steps
// Each step type is automatically matched with its question and validator
// Note: "otherLicenseType" is conditionally shown based on licenseType selection
const BASE_STEP_ORDER = [
  "postalCode",      // Step 0
  "licenseType",     // Step 1
  "startDate",       // Step 2
  "contactInfo",     // Step 3
] as const;

// Step definitions - each step type has its question and validator
const STEP_CONFIG = {
  postalCode: {
    question: "Hvor i Norge skal du ta førerkort?",
    validator: (formData: FormState) =>
      /^\d{4}$/.test(formData.postalCode)
        ? null
        : "Oppgi et norsk postnummer (fire siffer).",
  },
  licenseType: {
    question: "Hvilket type førerkort skal du ta?",
    validator: (formData: FormState) =>
      formData.mainLicenseSelection ? null : "Velg hvilken klasse du trenger.",
  },
  startDate: {
    question: "Når ønsker du å starte?",
    validator: (formData: FormState) => null, // Always valid since "Vet ikke" is an option
  },
  otherLicenseType: {
    question: "Hvilken førerkortklasse gjelder forespørselen?",
    validator: (formData: FormState) =>
      formData.licenseType ? null : "Velg hvilken klasse du trenger.",
  },
  contactInfo: {
    question: "Hvordan kontakter vi deg?",
    validator: (formData: FormState) => {
      if (formData.fullName.trim().length < 3) {
        return "Oppgi fullt navn.";
      }
      if (!/.+@.+\..+/.test(formData.email)) {
        return "Oppgi en gyldig e-postadresse.";
      }
      // If country code is "-" (Annet), allow any format
      if (formData.phoneCountryCode === "-") {
        if (!formData.phone || formData.phone.trim().length === 0) {
          return "Vennligst oppgi telefonnummer.";
        }
      } else if (formData.phoneCountryCode === "+47") {
        // Norwegian phone numbers must be exactly 8 digits
        const phoneDigits = formData.phone.replace(/\s+/g, "");
        if (!/^\d{8}$/.test(phoneDigits)) {
          return "Norsk telefonnummer må være nøyaktig 8 siffer.";
        }
      } else {
        // For other known country codes, validate phone number format
        if (!/^\d{8,}$/.test(formData.phone.replace(/\s+/g, ""))) {
          return "Telefonnummeret må ha minst åtte siffer.";
        }
      }
      if (!formData.marketingConsent) {
        return "Godta samtykke for å sende inn.";
      }
      return null;
    },
  },
} as const;

type Status = "idle" | "loading" | "success" | "error";

interface LeadFormProps {
  hideHeading?: boolean;
}

export function LeadForm({ hideHeading = false }: LeadFormProps = {}) {
  // NOTE: Tailwind is mobile-first here — base classes style the mobile view,
  // while prefixes like sm:, lg:, etc. override styles on larger screens.
  const router = useRouter();
  const { isFullscreen, setIsFullscreen, setHasStartedFilling, formData, setFormData, resetFormData, currentStep, setCurrentStep, isDesktopFocused, setIsDesktopFocused } = useFormContext();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const activeElementIdRef = useRef<string | null>(null);
  const focusedInputIdRef = useRef<string | null>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Set background color immediately when desktop focused to prevent flash
  useLayoutEffect(() => {
    if (isDesktopFocused && formContainerRef.current) {
      const element = formContainerRef.current;
      element.style.setProperty('background', 'rgb(15 23 42 / 0.7)', 'important');
      element.style.setProperty('background-image', 'none', 'important');
    }
  }, [isDesktopFocused]);

  // Activate fullscreen on mobile when user starts interacting
  const activateFullscreenIfNeeded = () => {
    if (window.innerWidth < 640 && !isFullscreen) {
      // Store the ID of the currently focused element
      const activeEl = document.activeElement as HTMLElement;
      if (activeEl?.id) {
        activeElementIdRef.current = activeEl.id;
      }
      setIsFullscreen(true);
      setHasStartedFilling(true);
    }
  };

  // Activate desktop focus mode when user clicks on input fields
  const activateDesktopFocusIfNeeded = (inputId?: string, event?: React.FocusEvent) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && !isDesktopFocused) {
      if (inputId && event) {
        // Store the input ID
        focusedInputIdRef.current = inputId;
        const target = event.target as HTMLElement;
        
        // Ensure the input is focused first
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
          target.focus();
          
          // For text inputs, set cursor position
          if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
            const length = target.value.length;
            target.setSelectionRange(length, length);
          }
        }
        
        // Activate desktop focus mode after ensuring input is focused
        // Use requestAnimationFrame to ensure focus is set before state change
        requestAnimationFrame(() => {
          setIsDesktopFocused(true);
        });
      } else {
        setIsDesktopFocused(true);
      }
    }
  };

  // Focus the input field when desktop focus mode activates
  useEffect(() => {
    if (isDesktopFocused && focusedInputIdRef.current) {
      const inputId = focusedInputIdRef.current;
      
      // Function to focus the input with visual feedback
      const focusInput = (element: HTMLElement) => {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) {
          // Focus the element
          element.focus();
          
          // For text inputs, set cursor position at the end
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            const length = element.value.length;
            element.setSelectionRange(length, length);
          }
          
          // Apply focus styles with !important
          element.style.setProperty('border-color', '#3bb54a', 'important');
          element.style.setProperty('outline', '2px solid rgba(59, 181, 74, 0.2)', 'important');
          element.style.setProperty('outline-offset', '2px', 'important');
          element.style.setProperty('box-shadow', '0 0 0 2px rgba(59, 181, 74, 0.2)', 'important');
          
          // Ensure caret is visible and green
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            element.style.setProperty('caret-color', '#3bb54a', 'important');
          }
          
          // Add class for CSS support
          element.classList.add('desktop-focused-input');
        }
      };
      
      // Try to focus with multiple attempts - the form might take time to render
      let attempts = 0;
      const maxAttempts = 20;
      let timeoutIds: NodeJS.Timeout[] = [];
      
      const tryFocus = () => {
        attempts++;
        const element = document.getElementById(inputId);
        
        if (element) {
          // Check if element is in the DOM and visible
          const rect = element.getBoundingClientRect();
          const isVisible = rect.width > 0 && rect.height > 0 && element.offsetParent !== null;
          
          if (isVisible) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
              focusInput(element);
              // Try again after a frame to ensure it sticks
              requestAnimationFrame(() => {
                focusInput(element);
              });
            });
            focusedInputIdRef.current = null;
            // Clear all timeouts
            timeoutIds.forEach(clearTimeout);
            return true;
          }
        }
        
        // Try again if not found or not visible yet
        if (attempts < maxAttempts) {
          const timeoutId = setTimeout(tryFocus, 25);
          timeoutIds.push(timeoutId);
        } else {
          focusedInputIdRef.current = null;
        }
        return false;
      };
      
      // Start trying immediately and also after delays
      tryFocus();
      const timeoutId1 = setTimeout(tryFocus, 50);
      const timeoutId2 = setTimeout(tryFocus, 150);
      const timeoutId3 = setTimeout(tryFocus, 300);
      const timeoutId4 = setTimeout(tryFocus, 500);
      timeoutIds.push(timeoutId1, timeoutId2, timeoutId3, timeoutId4);
      
      return () => {
        timeoutIds.forEach(clearTimeout);
      };
    }
  }, [isDesktopFocused]);

  // Restore focus when fullscreen mode activates
  useEffect(() => {
    if (isFullscreen && activeElementIdRef.current && window.innerWidth < 640) {
      // Small delay to ensure the element is rendered in fullscreen view
      setTimeout(() => {
        const element = document.getElementById(activeElementIdRef.current || '');
        if (element) {
          element.focus();
          // If it's an input, move cursor to end
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            const length = element.value.length;
            element.setSelectionRange(length, length);
          }
        }
      }, 150);
    }
  }, [isFullscreen]);

  const requiresOtherLicenseStep = formData.mainLicenseSelection === "OTHER";

  // Get the actual step type for the current step index
  const getCurrentStepType = (stepIndex: number): typeof BASE_STEP_ORDER[number] | "otherLicenseType" => {
    let actualIndex = 0;
    for (let i = 0; i < BASE_STEP_ORDER.length; i++) {
      if (BASE_STEP_ORDER[i] === "licenseType") {
        if (stepIndex === actualIndex) return "licenseType";
        actualIndex++;
        // If "OTHER" was selected, add the otherLicenseType step
        if (requiresOtherLicenseStep) {
          if (stepIndex === actualIndex) return "otherLicenseType";
          actualIndex++;
        }
      } else {
        if (stepIndex === actualIndex) return BASE_STEP_ORDER[i];
        actualIndex++;
      }
    }
    return BASE_STEP_ORDER[BASE_STEP_ORDER.length - 1];
  };

  // Calculate total number of steps
  const totalSteps = useMemo(() => {
    let count = 0;
    for (const step of BASE_STEP_ORDER) {
      count++;
      if (step === "licenseType" && requiresOtherLicenseStep) {
        count++; // Add otherLicenseType step
      }
    }
    return count;
  }, [requiresOtherLicenseStep]);

  const currentStepType = getCurrentStepType(currentStep);
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target =
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement ||
      event.target instanceof HTMLSelectElement
        ? event.target
        : (event.target as HTMLInputElement);

    const { name, value } = target;
    const isCheckbox =
      target instanceof HTMLInputElement && target.type === "checkbox";

    // Activate fullscreen on mobile when user starts filling out the form
    activateFullscreenIfNeeded();

    // Handle phone number with country code (e.g., Chrome autofill with +47)
    if (name === "phone" && value.startsWith("+")) {
      // Sort country codes by length (longest first) to match correctly
      // (e.g., +358 should match before +35)
      const sortedCountryCodes = [...countryCodes]
        .filter(country => country.code !== "-")
        .sort((a, b) => b.code.length - a.code.length);
      
      // Find matching country code (longest match first)
      const matchedCountry = sortedCountryCodes.find((country) => {
        return value.startsWith(country.code);
      });

      if (matchedCountry) {
        // Extract country code and remaining phone number
        const remainingNumber = value.substring(matchedCountry.code.length).trim();
        
        setFormData((prev) => ({
          ...prev,
          phoneCountryCode: matchedCountry.code,
          phone: remainingNumber,
        }));
        return;
      } else {
        // No matching country code found, use "Annet" option
        // Keep the full number in phone field when country code is "-"
        setFormData((prev) => ({
          ...prev,
          phoneCountryCode: "-",
          phone: value,
        }));
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? target.checked : value,
    }));
  };

const quickStartOptions = [
  { label: "Så fort som mulig", value: "asap" },
  { label: "Innen en måned", value: "within_month" },
  { label: "Senere / Vet ikke", value: "later" },
];

const countryCodes = [
  { code: "+47", country: "🇳🇴" },
  { code: "+46", country: "🇸🇪" },
  { code: "+45", country: "🇩🇰" },
  { code: "+358", country: "🇫🇮" },
  { code: "+49", country: "🇩🇪" },
  { code: "+44", country: "🇬🇧" },
  { code: "+1", country: "🇺🇸" },
  { code: "+33", country: "🇫🇷" },
  { code: "+34", country: "🇪🇸" },
  { code: "+39", country: "🇮🇹" },
  { code: "+31", country: "🇳🇱" },
  { code: "+32", country: "🇧🇪" },
  { code: "-", country: "Annet" },
];

  const validateStep = () => {
    const stepConfig = STEP_CONFIG[currentStepType];
    const error = stepConfig ? stepConfig.validator(formData) : null;
    setStepError(error);
    return !error;
  };

  const handleBack = () => {
    if (currentStep === 0 || status === "loading") return;
    setStepError(null);
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setErrorMessage(null);

    // Validate first
    const isValid = validateStep();
    
    // Activate fullscreen on mobile when clicking Next (even if validation fails)
    activateFullscreenIfNeeded();
    
    // Activate desktop focus mode when clicking Next (even if validation fails)
    if (typeof window !== 'undefined' && window.innerWidth >= 1024 && !isDesktopFocused) {
      setIsDesktopFocused(true);
    }

    if (!isValid) {
      return;
    }

    if (currentStep < totalSteps - 1) {
      setStepError(null);
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setStatus("loading");

    try {
      const { mainLicenseSelection, phoneCountryCode, phone, ...restData } = formData;
      
      // Combine country code and phone number for submission
      // If country code is "-" (Annet), just use the phone number as is
      const fullPhoneNumber = phoneCountryCode && phone && phoneCountryCode !== "-"
        ? `${phoneCountryCode} ${phone}`.trim()
        : phone;

      const submissionData = {
        ...restData,
        phone: fullPhoneNumber,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const payload = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload?.message ?? "Noe gikk galt. Prøv igjen.");
        return;
      }

      setStatus("success");
      setStepError(null);
      
      // Redirect immediately to success page
      router.push("/takk");
    } catch (error) {
      console.error("Lead form submission failed", error);
      setStatus("error");
      setErrorMessage("Vi klarte ikke å sende skjemaet. Prøv igjen senere.");
    }
  };

  const renderStepContent = () => {
    switch (currentStepType) {
      case "postalCode": {
        return (
          <div className="">
            <label htmlFor="postalCode" className="sr-only">
              Postnummer
            </label>
            <input
              ref={postalCodeInputRef}
              id="postalCode"
              name="postalCode"
              type="text"
              inputMode="numeric"
              maxLength={4}
              autoComplete="postal-code"
              value={formData.postalCode}
              onChange={handleChange}
              onFocus={(e) => {
                activateFullscreenIfNeeded();
                activateDesktopFocusIfNeeded('postalCode', e);
              }}
              className="w-full border-2 border-slate-300 sm:border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-2 focus:ring-[#3bb54a]"
              placeholder="Postnummer (4 siffer)"
            />
          </div>
        );
      }
      case "licenseType": {
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {mainLicenseOptions.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => {
                    activateFullscreenIfNeeded();
                    const newLicenseType = option.value;
                    setFormData((prev) => ({
                      ...prev,
                      mainLicenseSelection: newLicenseType,
                      licenseType:
                        newLicenseType === "OTHER" ? "" : newLicenseType,
                    }));
                    setStepError(null);
                  }}
                  className={`border px-4 py-3 text-base font-semibold transition ${
                    formData.mainLicenseSelection === option.value
                      ? "border-[#3bb54a] bg-[#3bb54a] text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:border-[#3bb54a] hover:bg-slate-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );
      }
      case "otherLicenseType": {
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {otherLicenseOptions.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() => {
                    activateFullscreenIfNeeded();
                    setFormData((prev) => ({
                      ...prev,
                      licenseType: option.value,
                    }));
                    setStepError(null);
                  }}
                  className={`rounded-2xl border px-4 py-3 text-base font-semibold transition ${
                    formData.licenseType === option.value
                      ? "border-[#3bb54a] bg-[#3bb54a] text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:border-[#3bb54a] hover:bg-slate-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );
      }
      case "startDate": {
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {quickStartOptions.map((option) => {
                const isSelected = formData.startDate === option.value;
                
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      activateFullscreenIfNeeded();
                      setFormData((prev) => ({
                        ...prev,
                        startDate: option.value,
                      }));
                      setStepError(null);
                    }}
                    className={`border px-4 py-3 text-base font-semibold transition ${
                      isSelected
                        ? "border-[#3bb54a] bg-[#3bb54a] text-white"
                        : "border-slate-200 bg-white text-slate-900 hover:border-[#3bb54a] hover:bg-slate-50"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      }
      case "contactInfo": {
        return (
          <div className="space-y-4">
            <div className="">
              <label htmlFor="fullName" className="text-white">Fullt navn</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={(e) => {
                  activateFullscreenIfNeeded();
                  activateDesktopFocusIfNeeded('fullName', e);
                }}
                className="w-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
                placeholder="F.eks. Nora Hansen"
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="text-white">Telefon</label>
              <div className="flex gap-2 w-full">
                <select
                  id="phoneCountryCode"
                  name="phoneCountryCode"
                  value={formData.phoneCountryCode}
                  onChange={handleChange}
                  onFocus={(e) => {
                    activateFullscreenIfNeeded();
                    activateDesktopFocusIfNeeded('phoneCountryCode', e);
                  }}
                  className="flex-shrink-0 w-20 border-slate-200 bg-white text-slate-900 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a] rounded-md pl-2 pr-6 py-2 appearance-none bg-no-repeat bg-right bg-[length:16px_16px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.25rem center',
                    paddingRight: '1.75rem'
                  }}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code === "-" ? country.country : `${country.code} ${country.country}`}
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={(e) => {
                    activateFullscreenIfNeeded();
                    activateDesktopFocusIfNeeded('phone', e);
                  }}
                  className="flex-1 min-w-0 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a] rounded-md"
                  placeholder="9X XX XX XX"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="email" className="text-white">E-post</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => {
                  activateFullscreenIfNeeded();
                  activateDesktopFocusIfNeeded('email', e);
                }}
                className="w-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
                placeholder="navn@epost.no"
              />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-white/30 bg-white/10 p-3 text-sm text-white cursor-pointer">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="mt-1 rounded border-slate-300 sm:border-white/30 bg-white sm:bg-white/10 text-[#3bb54a] focus:ring-[#3bb54a] cursor-pointer"
              />
              <span>
                Jeg godtar at Førerkortportalen lagrer opplysningene for å koble
                meg med relevante trafikkskoler.
              </span>
            </label>
          </div>
        );
      }
      default:
        return null;
    }
  };

  const handleClose = () => {
    setIsFullscreen(false);
    // Store the currently focused element before closing
    const activeEl = document.activeElement as HTMLElement;
    if (activeEl?.id) {
      activeElementIdRef.current = activeEl.id;
    }
  };

  return (
    <div 
      ref={formContainerRef} 
      className="w-full p-4 sm:rounded-3xl sm:p-8 relative"
      style={isDesktopFocused ? { 
        background: 'rgb(15 23 42 / 0.7)',
        backgroundImage: 'none'
      } : undefined}
    >
      {/* Loading/Success Overlay */}
      {(status === "loading" || status === "success") && (
        <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-50 animate-fadeIn">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#3bb54a] rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                {status === "loading" ? (
                  <div className="w-full h-full border-4 border-[#3bb54a]/30 border-t-[#3bb54a] rounded-full animate-spin"></div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#3bb54a] to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-[#3bb54a]/25">
                    <svg
                      className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
              {status === "loading" ? "Sender inn..." : "Sendt!"}
            </p>
            <p className="text-sm sm:text-base text-white/70">
              {status === "loading" ? "Vennligst vent" : "Omdirigerer..."}
            </p>
          </div>
        </div>
      )}
      {/* Close button - only show on mobile fullscreen */}
      {isFullscreen && (
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition z-10"
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
      )}
      
      {!hideHeading && (
        <>
          <h2 className="mt-6 lg:mt-0 mb-2 text-center text-4xl font-semibold text-white sm:text-3xl">
            Motta tilbud fra flere trafikkskoler
          </h2>
          <p className="mb-4 text-center text-base text-white/90 sm:text-lg">
            Tjenesten er gratis og uforpliktende
          </p>
        </>
      )}
      
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-white/70">
          <span>
            Steg {currentStep + 1} av {totalSteps}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-[#3bb54a] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className=" my-3 text-xl font-display font-semibold text-white sm:text-2xl">
        {STEP_CONFIG[currentStepType]?.question}
      </h3>

      <form className="mb-6 lg:mb-0 space-y-5 text-[15px]" onSubmit={handleSubmit} noValidate>
        {renderStepContent()}

        {stepError && (
          <p className="rounded-2xl bg-rose-500/20 border border-rose-500/30 px-4 py-3 text-sm font-medium text-white">
            {stepError}
          </p>
        )}


        {status === "error" && (
          <p
            role="status"
            className="rounded-2xl bg-rose-500/20 border border-rose-500/30 px-4 py-3 text-sm font-medium text-white"
          >
            {errorMessage ??
              "Noe uventet skjedde. Oppdater siden og prøv igjen."}
          </p>
        )}

        <div className="flex items-center justify-between gap-3">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              disabled={status === "loading"}
              className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Tilbake
            </button>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className={`group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#3bb54a] px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#00895F]/30 transition hover:bg-[#0A6F50] disabled:cursor-not-allowed disabled:opacity-80 ${
              currentStep === 0 ? "mx-auto w-full" : "flex-1"
            }`}
          >
            {status === "loading"
              ? "Sender inn..."
              : currentStep === totalSteps - 1
                ? "Send forespørsel"
                : "Neste"}
            <span
              aria-hidden
              className="translate-x-0 text-lg transition group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>

        <p className="text-center text-xs text-white/70">
    
        </p>

        <div className="mt-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-white/80">
          <Shield className="h-3.5 w-3.5 text-[#3bb54a]" />
          <span className="font-semibold">Ditt personvern er ivaretatt. All data behandles i henhold til GDPR.</span>
        </div>
      </form>
    </div>
  );
}

export default LeadForm;

