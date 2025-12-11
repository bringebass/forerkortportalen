// Google Analytics gtag types
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "consent" | "config" | "event" | "js",
      actionOrId: string | Date,
      params?: {
        analytics_storage?: "granted" | "denied";
        page_path?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        send_to?: string;
        [key: string]: unknown;
      }
    ) => void;
  }
}

export {};
