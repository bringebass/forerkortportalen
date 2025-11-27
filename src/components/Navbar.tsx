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
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm bg-gray-50 sm:bg-white">
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 xl:px-0 py-4">
        <a href="/" className="flex items-center gap-3 text-xl font-bold transition">
          <Image
            src="/favicon.png"
            alt="Førerkortportalen"
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span>
            <span className="text-[#3bb54a] text-2xl">fører</span>
            <span className="text-slate-900 text-2xl">kortportalen.no</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-700 hover:text-brand-600 transition"
            >
              {item.label}
            </a>
          ))}
        
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
        <div className="lg:hidden border-t border-slate-200 bg-gray-200">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col space-y-3 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold text-slate-700 hover:text-brand-600 transition py-2"
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

