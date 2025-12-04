"use client";

import LeadForm from "@/components/LeadForm";
import { Clock3, ShieldCheck, Users2 } from "lucide-react";
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";
import { useEffect, useState } from "react";

const heroHighlights = [
  { label: "100% gratis", icon: ShieldCheck, iconColor: "" },
  { label: "Du velger skolen", icon: Users2, iconColor: "" },
  { label: "Helt uforpliktende", icon: Clock3, iconColor: "" },
];

const heroLogos = [
  { src: "/A-team logo.png", alt: "A-team trafikkskole" },
  { src: "/AB trafikksenter logo.png", alt: "AB trafikksenter" },
  { src: "/Best trafikkskole logo.png", alt: "Best trafikkskole" },
  { src: "/Svein Svendsen logo.png", alt: "Svein Svendsen trafikkskole" },
  { src: "/wright logo.jpeg", alt: "Wright trafikkskole" },
];

export default function HeroSection() {
  const { isFullscreen, setIsFullscreen, setHasStartedFilling, hasStartedFilling } = useFormContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isLogoPaused, setIsLogoPaused] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if form should open fullscreen from navigation
  useEffect(() => {
    const shouldOpenForm = sessionStorage.getItem("openFullscreenForm");
    if (shouldOpenForm === "true" && isMobile) {
      sessionStorage.removeItem("openFullscreenForm");
      setIsFullscreen(true);
      setHasStartedFilling(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isMobile, setIsFullscreen, setHasStartedFilling]);

  // Lock scroll on mobile when form is fullscreen
  useEffect(() => {
    if (isFullscreen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen, isMobile]);

  return (
    <>
      {/* Fullscreen overlay on mobile */}
      <div className={`fixed inset-0 z-50 bg-slate-900 sm:hidden transition-opacity duration-300 ${isFullscreen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-full overflow-y-auto">
          <div className="min-h-screen flex flex-col">
            <div className="flex-1 flex items-start justify-center p-4 pt-6">
              <div className="w-full max-w-lg">
                <div className="bg-slate-900 shadow-none">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={`relative overflow-hidden bg-white text-slate-900 lg:bg-slate-900 lg:text-white lg:min-h-[820px] ${isFullscreen ? 'sm:block hidden' : ''}`}>
        {/* Background image */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src="/bg-photo.png"
            alt="Elev i bil som får kjøretime"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_32%]"
          />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>

        <div id="skjema" className={`relative z-10 flex w-full sm:px-6 sm:py-8 lg:min-h-[820px] lg:px-8 lg:py-20 scroll-mt-20 ${hasStartedFilling && isMobile && !isFullscreen ? 'min-h-0 py-4' : 'min-h-[400px] lg:min-h-[820px]'}`}>
          {/* Mobile: Form goes full width, Desktop: Container layout */}
          <div className="sm:mx-auto sm:flex w-full max-w-[1300px] flex-col gap-8 sm:gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
            <div className="hidden sm:block space-y-4 sm:space-y-6 lg:w-[50%]">
              <h1 className="text-center text-[32px] font-semibold leading-[1.15] text-slate-900 sm:text-left sm:text-[48px] lg:text-[54px] lg:text-white">
                Spar penger og finn riktig trafikkskole for deg
              </h1>
              <p className="text-center text-base text-slate-600 sm:text-left sm:text-lg lg:text-white/85">
                Del behovet ditt én gang – vi kobler deg med kvalitetssikrede
                trafikkskoler i området ditt slik at du kan sammenligne priser,
                pakker og tilgjengelighet.
              </p>
              <div className="hidden flex-wrap gap-3 md:flex">
                {heroHighlights.map(({ label, icon: Icon, iconColor }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm lg:bg-white/90 lg:text-slate-900"
                  >
                    <Icon className={`h-4 w-4 ${iconColor}`} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className={`w-full lg:w-[50%] ${isFullscreen || (hasStartedFilling && isMobile) ? 'sm:block hidden' : ''}`}>
              <div className="sm:rounded-[32px] bg-slate-900/70 backdrop-blur-md shadow-none sm:shadow-2xl sm:shadow-slate-900/50">
                <LeadForm />
              </div>

              {/* Logo slider - mobile only, auto-scroll + pause on interaction */}
              <div className="mt-6 sm:hidden">
                <div className="overflow-hidden">
                  <div
                    className="flex min-w-max items-center gap-8 px-8 py-2"
                    style={{
                      animation: "logo-marquee 24s linear infinite",
                      animationPlayState: isLogoPaused ? "paused" : "running",
                    }}
                    onMouseEnter={() => setIsLogoPaused(true)}
                    onMouseLeave={() => setIsLogoPaused(false)}
                    onTouchStart={() => setIsLogoPaused(true)}
                    onTouchEnd={() => setIsLogoPaused(false)}
                  >
                    {heroLogos.concat(heroLogos).map((logo, index) => (
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
                <div className="border-t border-slate-300 mx-8 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
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

