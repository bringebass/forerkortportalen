import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MC-klasser A/A2/A1 | Førerkortportalen",
  description: "Alt du trenger å vite om MC-førerkortklassene A, A2 og A1. Obligatorisk teoridel, kjøreteknikk, sikkerhetskurs og trafikk.",
  keywords: [
    "MC førerkort",
    "motorsykkel førerkort",
    "MC klasse A",
    "MC klasse A2",
    "MC klasse A1",
  ],
  openGraph: {
    title: "MC-klasser A/A2/A1 | Førerkortportalen",
    description: "Alt du trenger å vite om MC-førerkortklassene A, A2 og A1.",
    url: "https://forerkortportalen.no/mc-klasser",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/mc-klasser",
  },
};

export default function MCKlasserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

