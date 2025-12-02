"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Hvordan det fungerer", href: "#hvordan" },
    { label: "Førerkortklasser", href: "#klasser" },
    { label: "Ofte stilte spørsmål", href: "#faq" },
  ];

  const legalItems = [
    { label: "Brukervilkår", href: "/brukervilkar" },
    { label: "Personvern", href: "/personvern" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm bg-gray-50 sm:bg-white">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 min-[340px]:px-4 xl:px-0 py-3 min-[340px]:py-4">
        <a href="/" className="flex items-center gap-2 min-[340px]:gap-2.5 md:gap-3 text-lg min-[340px]:text-xl md:text-xl lg:text-2xl font-bold transition flex-shrink min-w-0">
          <Image
            src="/favicon.png"
            alt="Førerkortportalen"
            width={32}
            height={32}
            className="rounded-md flex-shrink-0 h-7 w-7 min-[340px]:h-8 min-[340px]:w-8"
            style={{
              objectFit: 'contain',
            }}
            priority
          />
          <span className="flex-shrink min-w-0">
            <span className="text-[#3bb54a]">fører</span>
            <span className="text-slate-900">kortportalen.no</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-700 hover:text-[#3bb54a] transition"
            >
              {item.label}
            </a>
          ))}
          <div className="h-4 w-px bg-slate-300 mx-2"></div>
          {legalItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 hover:text-[#3bb54a] transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 min-[340px]:p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition flex-shrink-0"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 min-[340px]:w-6 min-[340px]:h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col px-3 sm:px-4 py-3 sm:py-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm sm:text-base font-semibold text-slate-700 hover:text-[#3bb54a] hover:bg-slate-50 transition py-2.5 sm:py-3 px-3 rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-slate-200 my-2"></div>
            {legalItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm sm:text-base font-medium text-slate-500 hover:text-[#3bb54a] hover:bg-slate-50 transition py-2.5 sm:py-3 px-3 rounded-lg"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

