"use client";

import { useFormContext } from "@/contexts/FormContext";

export default function ArticleStickyCTA() {
  const { setIsFullscreen } = useFormContext();

  const openForm = () => {
    setIsFullscreen(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={openForm}
        className="w-full pointer-events-auto rounded-full px-6 py-4 text-base font-semibold text-white bg-[#3bb54a] hover:bg-[#2d8f3d] shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Finn trafikkskole
      </button>
    </div>
  );
}



