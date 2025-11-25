"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Hvordan det fungerer", href: "#hvordan" },
    { label: "Trafikkskoler", href: "#trafikkskoler" },
    { label: "Førerkortklasser", href: "#klasser" },
    { label: "Ofte stilte spørsmål", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3 text-slate-900">
          <Image
            src="/favicon.png"
            alt="Førerkortportalen ikon"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-xl font-bold hover:text-brand-600 transition">
            Førerkortportalen
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-brand-600 transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#skjema"
            className="rounded-full bg-[#00895F] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0A6F50]"
          >
            Fyll ut skjema
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700"
          aria-label="Toggle menu"
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
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-slate-700 hover:text-brand-600 transition py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#skjema"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-[#00895F] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0A6F50] text-center"
            >
              Fyll ut skjema
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

