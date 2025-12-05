"use client";

import { useFormContext } from "@/contexts/FormContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ScrollToFormButtonProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollToFormButton({ className, children }: ScrollToFormButtonProps) {
  const { setIsFullscreen, setHasStartedFilling } = useFormContext();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On mobile, activate fullscreen mode
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      e.preventDefault();
      setIsFullscreen(true);
      setHasStartedFilling(true);
    } else {
      // On desktop, navigate to home page form if not already there
      if (!isHomePage) {
        e.preventDefault();
        window.location.href = "/#skjema";
      } else {
        // Already on home page, just scroll
        e.preventDefault();
        const element = document.getElementById("skjema");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <Link href={isHomePage ? "/#skjema" : "/#skjema"} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

