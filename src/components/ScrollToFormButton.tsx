"use client";

import { useFormContext } from "@/contexts/FormContext";
import Link from "next/link";

interface ScrollToFormButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToFormButton({ className, children }: ScrollToFormButtonProps) {
  const { setIsFullscreen, setHasStartedFilling } = useFormContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On mobile, activate fullscreen mode when navigating
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      sessionStorage.setItem("openFullscreenForm", "true");
      setIsFullscreen(true);
      setHasStartedFilling(true);
    } else {
      // On desktop, just navigate - will scroll to form on home page
      e.preventDefault();
      window.location.href = "/#skjema";
    }
  };

  return (
    <Link href="/#skjema" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

