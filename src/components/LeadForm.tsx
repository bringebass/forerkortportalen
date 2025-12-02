"use client";

import { useMemo, useState, useEffect, useRef } from "react";
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
      if (!/^\d{8,}$/.test(formData.phone.replace(/\s+/g, ""))) {
        return "Telefonnummeret må ha minst åtte siffer.";
      }
      if (!formData.marketingConsent) {
        return "Godta samtykke for å sende inn.";
      }
      return null;
    },
  },
} as const;

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  // NOTE: Tailwind is mobile-first here — base classes style the mobile view,
  // while prefixes like sm:, lg:, etc. override styles on larger screens.
  const { isFullscreen, setIsFullscreen, setHasStartedFilling, formData, setFormData, resetFormData } = useFormContext();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);
  const activeElementIdRef = useRef<string | null>(null);
  const postalCodeInputRef = useRef<HTMLInputElement>(null);

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

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split("T")[0];
  }, []);

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

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? target.checked : value,
    }));
  };

  const quickStartOptions = [
    { label: "Vet ikke", offset: null },
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
    
    // Activate fullscreen on mobile when clicking Next
    activateFullscreenIfNeeded();
    
    setErrorMessage(null);

    if (!validateStep()) {
      return;
    }

    if (currentStep < totalSteps - 1) {
      setStepError(null);
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setStatus("loading");

    try {
      const { mainLicenseSelection, ...submissionData } = formData;

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
      setCurrentStep(0);
      resetFormData();
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
              pattern="[0-9]{4}"
              maxLength={4}
              autoComplete="postal-code"
              value={formData.postalCode}
              onChange={handleChange}
              onFocus={activateFullscreenIfNeeded}
              className="border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
              placeholder="Postnummer"
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
          <div className="">
            <label htmlFor="startDate" className="sr-only">
              Ønsket oppstart
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              min={minDate}
              value={formData.startDate}
              onChange={handleChange}
              className="w-full mb-3 border-slate-200 bg-white text-slate-900 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
            />
            <div className="flex flex-wrap gap-2">
              {quickStartOptions.map((option) => {
                const isSelected = option.offset === null
                  ? !formData.startDate
                  : (() => {
                      const date = new Date();
                      date.setDate(date.getDate() + option.offset);
                      return formData.startDate === date.toISOString().split("T")[0];
                    })();
                
                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => {
                      activateFullscreenIfNeeded();
                      if (option.offset === null) {
                        // "Vet ikke" - clear the date
                        setFormData((prev) => ({
                          ...prev,
                          startDate: "",
                        }));
                      } else {
                        const date = new Date();
                        date.setDate(date.getDate() + option.offset);
                        setFormData((prev) => ({
                          ...prev,
                          startDate: date.toISOString().split("T")[0],
                        }));
                      }
                    }}
                    className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                      isSelected
                        ? "border-[#3bb54a] bg-[#3bb54a] text-white"
                        : "border-white/30 bg-white/10 text-white hover:border-white/50 hover:bg-white/15"
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="">
                <label htmlFor="fullName" className="text-white">Fullt navn</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={activateFullscreenIfNeeded}
                  className="w-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
                  placeholder="F.eks. Nora Hansen"
                />
              </div>
              <div className="">
                <label htmlFor="phone" className="text-white">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={activateFullscreenIfNeeded}
                  className="w-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
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
                onFocus={activateFullscreenIfNeeded}
                className="w-full border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-base shadow-sm focus:border-[#3bb54a] focus:ring-[#3bb54a]"
                placeholder="navn@epost.no"
              />
            </div>

         

            <label className="flex items-start gap-3 rounded-2xl border border-white/30 bg-white/10 p-3 text-sm text-white">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="mt-1 rounded border-white/30 bg-white/10 text-[#3bb54a] focus:ring-[#3bb54a]"
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
  };

  return (
    <div className="w-full p-4 sm:rounded-3xl sm:p-8 relative">
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
      
      <h2 className="mt-6 lg:mt-0 mb-2 text-center text-4xl font-semibold text-white sm:text-3xl">
        Motta tilbud fra flere trafikkskoler
      </h2>
      <p className="mb-4 text-center text-base text-white/90 sm:text-lg">
        Tjenesten er gratis og uforpliktende
      </p>
      
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

      <form className="mb-6 lg:mb-0 space-y-5 text-[15px]" onSubmit={handleSubmit}>
        {renderStepContent()}

        {stepError && (
          <p className="rounded-2xl bg-rose-500/20 border border-rose-500/30 px-4 py-3 text-sm font-medium text-white">
            {stepError}
          </p>
        )}

        {status === "success" && (
          <p
            role="status"
            className="rounded-2xl bg-[#3bb54a]/20 border border-[#3bb54a]/30 px-4 py-3 text-sm font-medium text-white"
          >
            Takk! Vi varsler utvalgte trafikkskoler, og du blir kontaktet kort
            tid etter.
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
          Helt gratis og uforpliktende. Trafikkskolene kan stille deg noen få
          oppfølgingsspørsmål før de gir et konkret tilbud.
        </p>
      </form>
    </div>
  );
}

export default LeadForm;

