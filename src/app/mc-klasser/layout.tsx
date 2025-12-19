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
    description: "Alt du trenger å vite om MC-førerkortklassene A, A2 og A1. Obligatorisk teoridel, kjøreteknikk, sikkerhetskurs og trafikk.",
    url: "https://forerkortportalen.no/mc-klasser",
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://forerkortportalen.no/logo.png",
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - MC-klasser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MC-klasser A/A2/A1 | Førerkortportalen",
    description: "Alt du trenger å vite om MC-førerkortklassene A, A2 og A1.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://forerkortportalen.no/mc-klasser",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MCKlasserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

