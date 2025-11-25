"use client";

import { useMemo, useState } from "react";

const licenseOptions = [
  { value: "B", label: "Klasse B" },
  { value: "B_AUT", label: "B automat" },
  { value: "B96", label: "B96 / B med henger" },
  { value: "BE", label: "Klasse BE" },
  { value: "A", label: "Klasse A" },
  { value: "A2", label: "Klasse A2" },
  { value: "A1", label: "Klasse A1" },
  { value: "AM147", label: "Klasse AM147" },
  { value: "C", label: "Klasse C" },
  { value: "D", label: "Klasse D" },
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

const stepQuestions = [
  "Hvor i Norge trenger du tilbud?",
  "Hvilken førerkortklasse gjelder forespørselen?",
  "Når ønsker du å starte?",
  "Tilpass opplæringen",
  "Hvordan kontakter vi deg?",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  postalCode: string;
  licenseType: string;
  startDate: string;
  intensiveCourse: string;
  preferredContact: "telefon" | "epost";
  trafficCourseStatus: string;
  message: string;
  marketingConsent: boolean;
};

const defaultState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  postalCode: "",
  licenseType: "B",
  startDate: "",
  intensiveCourse: "usikker",
  preferredContact: "telefon",
  trafficCourseStatus: "fullfort",
  message: "",
  marketingConsent: false,
};

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [formData, setFormData] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepError, setStepError] = useState<string | null>(null);

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date.toISOString().split("T")[0];
  }, []);

  const progress = ((currentStep + 1) / stepQuestions.length) * 100;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const quickStartOptions = [
    { label: "Neste uke", offset: 7 },
    { label: "Innen 3 uker", offset: 21 },
    { label: "Om 1–2 mnd", offset: 45 },
  ];

  const validators: Array<() => string | null> = [
    () =>
      /^\d{4}$/.test(formData.postalCode)
        ? null
        : "Oppgi et norsk postnummer (fire siffer).",
    () => (formData.licenseType ? null : "Velg hvilken klasse du trenger."),
    () => (formData.startDate ? null : "Velg ønsket oppstart."),
    () =>
      formData.trafficCourseStatus && formData.intensiveCourse
        ? null
        : "Fortell om grunnkurs og intensivbehov.",
    () => {
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
  ];

  const validateStep = () => {
    const validator = validators[currentStep];
    const error = validator ? validator() : null;
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

    if (!validateStep()) {
      return;
    }

    if (currentStep < stepQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(payload?.message ?? "Noe gikk galt. Prøv igjen.");
        return;
      }

      setStatus("success");
      setCurrentStep(0);
      setFormData(defaultState);
    } catch (error) {
      console.error("Lead form submission failed", error);
      setStatus("error");
      setErrorMessage("Vi klarte ikke å sende skjemaet. Prøv igjen senere.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: {
        return (
          <div className="space-y-3">
            <label htmlFor="postalCode" className="sr-only">
              Postnummer
            </label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{4}"
              maxLength={4}
              autoComplete="postal-code"
              value={formData.postalCode}
              onChange={handleChange}
              className="rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
              placeholder="F.eks. 0550"
            />
          </div>
        );
      }
      case 1: {
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {licenseOptions.map((option) => (
                <button
                  type="button"
                  key={option.value}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      licenseType: option.value,
                    }))
                  }
                  className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    formData.licenseType === option.value
                      ? "border-brand-500 bg-brand-50 text-brand-700"
                      : "border-slate-200 text-slate-700 hover:border-brand-200"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className="space-y-4">
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
              className="w-full rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
            />
            <div className="flex flex-wrap gap-2">
              {quickStartOptions.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => {
                    const date = new Date();
                    date.setDate(date.getDate() + option.offset);
                    setFormData((prev) => ({
                      ...prev,
                      startDate: date.toISOString().split("T")[0],
                    }));
                  }}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-200 hover:text-brand-600"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className="space-y-4">
            <div>
              <p className="text-base font-semibold text-slate-800">
                Trafikalt grunnkurs
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {trafficCourseOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        trafficCourseStatus: option.value,
                      }))
                    }
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      formData.trafficCourseStatus === option.value
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-slate-200 text-slate-600 hover:border-brand-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-base font-semibold text-slate-800">
                Ønsker du intensivkurs?
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {intensiveOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        intensiveCourse: option.value,
                      }))
                    }
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                      formData.intensiveCourse === option.value
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-slate-200 text-slate-600 hover:border-brand-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      }
      case 4: {
        return (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="fullName">Fullt navn</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
                  placeholder="F.eks. Nora Hansen"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="phone">Telefon</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
                  placeholder="9X XX XX XX"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email">E-post</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
                placeholder="navn@epost.no"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message">Tilleggsinfo (valgfritt)</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="rounded-2xl border-slate-200 text-base shadow-sm focus:border-brand-500 focus:ring-brand-500"
                placeholder="F.eks. ønsker automatgir eller kveldskurs."
              />
            </div>

            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-3 text-sm text-slate-600">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="mt-1 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
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

  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200 sm:p-8">
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-500">
          <span>
            Steg {currentStep + 1} av {stepQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className="mb-6 text-xl font-display font-semibold text-slate-900 sm:text-2xl">
        {stepQuestions[currentStep]}
      </h3>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {renderStepContent()}

        {stepError && (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
            {stepError}
          </p>
        )}

        {status === "success" && (
          <p
            role="status"
            className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            Takk! Vi varsler utvalgte trafikkskoler, og du blir kontaktet kort
            tid etter.
          </p>
        )}

        {status === "error" && (
          <p
            role="status"
            className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700"
          >
            {errorMessage ??
              "Noe uventet skjedde. Oppdater siden og prøv igjen."}
          </p>
        )}

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0 || status === "loading"}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Tilbake
          </button>
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#00895F] px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#00895F]/30 transition hover:bg-[#0A6F50] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {status === "loading"
              ? "Sender inn..."
              : currentStep === stepQuestions.length - 1
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

        <p className="text-center text-xs text-slate-500">
          Helt gratis og uforpliktende. Trafikkskolene kan stille deg noen få
          oppfølgingsspørsmål før de gir et konkret tilbud.
        </p>
      </form>
    </div>
  );
}

export default LeadForm;

