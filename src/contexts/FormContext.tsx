"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Import form state type from LeadForm
export type FormState = {
  fullName: string;
  email: string;
  phone: string;
  postalCode: string;
  licenseType: string;
  mainLicenseSelection: string;
  startDate: string;
  intensiveCourse: string;
  preferredContact: "telefon" | "epost";
  trafficCourseStatus: string;
  message: string;
  marketingConsent: boolean;
};

const defaultFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  postalCode: "",
  licenseType: "",
  mainLicenseSelection: "",
  startDate: "",
  intensiveCourse: "usikker",
  preferredContact: "telefon",
  trafficCourseStatus: "fullfort",
  message: "",
  marketingConsent: false,
};

interface FormContextType {
  isFullscreen: boolean;
  setIsFullscreen: (value: boolean) => void;
  hasStartedFilling: boolean;
  setHasStartedFilling: (value: boolean) => void;
  formData: FormState;
  setFormData: (data: FormState | ((prev: FormState) => FormState)) => void;
  resetFormData: () => void;
  currentStep: number;
  setCurrentStep: (step: number | ((prev: number) => number)) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasStartedFilling, setHasStartedFilling] = useState(false);
  const [formData, setFormData] = useState<FormState>(defaultFormState);
  const [currentStep, setCurrentStep] = useState(0);

  const resetFormData = () => {
    setFormData(defaultFormState);
    setCurrentStep(0);
  };

  return (
    <FormContext.Provider
      value={{
        isFullscreen,
        setIsFullscreen,
        hasStartedFilling,
        setHasStartedFilling,
        formData,
        setFormData,
        resetFormData,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
}

