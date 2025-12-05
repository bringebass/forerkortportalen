"use client";

import { useFormContext } from "@/contexts/FormContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollToFormButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToFormButton({ className, children }: ScrollToFormButtonProps) {
  const { setIsFullscreen, setHasStartedFilling, setIsDesktopFocused } = useFormContext();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  // Pages that have ArticleFormOverlay and can show the form overlay
  const hasFormOverlay = pathname === "/om-oss" || pathname?.startsWith("/artikler");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On mobile, activate fullscreen mode
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      e.preventDefault();
      setIsFullscreen(true);
      setHasStartedFilling(true);
    } else {
      // On desktop, activate desktop focus mode
      e.preventDefault();
      if (isHomePage) {
        // On home page, activate desktop focus mode
        setIsDesktopFocused(true);
        // Also scroll to form
        const element = document.getElementById("skjema");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (hasFormOverlay) {
        // On pages with form overlay (om-oss, artikler), activate desktop focus mode directly
        setIsDesktopFocused(true);
      } else {
        // Not on home page or pages with overlay, navigate to home page and activate focus mode
        window.location.href = "/#skjema";
        // Note: Desktop focus will be activated when the page loads if needed
      }
    }
  };

  return (
    <Link href={isHomePage ? "/#skjema" : "/#skjema"} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

