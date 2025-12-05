"use client";

import Image from "next/image";
import { useState } from "react";

const logos = [
  { src: "/A-team logo.png", alt: "A-team trafikkskole" },
  { src: "/AB trafikksenter logo.png", alt: "AB trafikksenter" },
  { src: "/Best trafikkskole logo.png", alt: "Best trafikkskole" },
  { src: "/Svein Svendsen logo.png", alt: "Svein Svendsen trafikkskole" },
  { src: "/wright logo.jpeg", alt: "Wright trafikkskole" },
];

interface LogoCarouselProps {
  showDivider?: boolean;
  className?: string;
}

export default function LogoCarousel({ showDivider = true, className = "" }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div className={`overflow-hidden ${className}`}>
        <div
          className="flex min-w-max items-center gap-8 px-8 py-2"
          style={{
            animation: "logo-marquee 24s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {logos.concat(logos).map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex-shrink-0 h-6 w-20 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={24}
                className="object-contain grayscale opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
      {showDivider && <div className="border-t border-slate-300 mx-8 mt-4" />}
      <style jsx>{`
        @keyframes logo-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}





