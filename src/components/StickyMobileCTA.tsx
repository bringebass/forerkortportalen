"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.getElementById("skjema");
      if (formElement) {
        const formBottom = formElement.getBoundingClientRect().bottom;
        // Show button when form is scrolled past (form bottom is above viewport)
        setShow(formBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("skjema");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={scrollToForm}
        className="w-full pointer-events-auto rounded-full bg-[#3bb54a] px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#2d8f3d] active:scale-95 flex items-center justify-center gap-2"
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

