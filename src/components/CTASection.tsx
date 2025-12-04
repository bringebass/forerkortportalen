"use client";

import { useFormContext } from "@/contexts/FormContext";

export default function CTASection() {
  const { setIsFullscreen, setHasStartedFilling } = useFormContext();

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // On mobile, activate fullscreen mode
    if (window.innerWidth < 640) {
      setIsFullscreen(true);
      setHasStartedFilling(true);
      // Scroll to top to show the form
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // On desktop, just scroll to form
      const element = document.getElementById("skjema");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 lg:py-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Klar for å motta tilbud?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 px-2 max-w-2xl mx-auto leading-relaxed">
            Fyll ut skjemaet øverst på siden. Tjenesten er gratis og uforpliktende – 
            du får tilbud fra flere trafikkskoler i ditt område som du kan sammenligne.
          </p>
          <a
            href="#skjema"
            onClick={scrollToForm}
            className="mt-8 group inline-flex items-center gap-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:border-white/50"
          >
            <span>Gå til skjema</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

