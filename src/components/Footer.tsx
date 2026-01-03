"use client";

import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const { hasStartedFilling } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reduce padding on mobile when user has started filling (CompactFormCTA is shown instead of StickyMobileCTA)
  const mobilePadding = hasStartedFilling && isMobile ? "pb-6" : "pb-24";

  const footerSections = [
    {
      title: "Tjenesten",
      links: [
        { label: "Om Førerkortportalen", href: "/" },
        { label: "Slik fungerer det", href: "#hvordan" },
      ],
    },
    {
      title: "Førerkortklasser",
      links: [
        { label: "Klasse B", href: "#klasser" },
        { label: "MC-klasser", href: "#klasser" },
        { label: "Tilhenger", href: "#klasser" },
      ],
    },
    {
      title: "Annet",
      links: [
        { label: "Ofte stilte spørsmål", href: "#faq" },
        { label: "Kontakt oss", href: "/kontakt" },
      ],
    },
    {
      title: "Personvern",
      links: [
        { label: "Personvernserklæring", href: "/personvern" },
        { label: "Brukervilkår", href: "/brukervilkar" },
      ],
    },
  ];

  return (
    <footer className={`border-t border-slate-100 bg-white py-8 sm:py-10 lg:py-12 text-xs sm:text-sm text-slate-500 ${mobilePadding} sm:pb-8`}>
      <div className="container mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 mb-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-[#3bb54a] transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-slate-700">
              <p className="font-semibold mb-1">Førerkortportalen</p>
              <p className="text-xs sm:text-sm text-slate-500">
                En sammenligningstjeneste som hjelper forbrukere med å hente inn uforpliktende tilbud fra flere trafikkskoler i nærområdet.
              </p>
            </div>
            <div className="text-xs sm:text-sm text-slate-500">
              <p>© {new Date().getFullYear()} DB media AS</p>
              <p className="mt-1">Org.nr: 936 445 594</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

