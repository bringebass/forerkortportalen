import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klasse B – personbil | Førerkortportalen",
  description: "Alt du trenger å vite om førerkort klasse B – personbil. Standard lappen opptil 3 500 kg med obligatoriske kurs og kjøreopplæring.",
  keywords: [
    "klasse B",
    "personbil førerkort",
    "bil førerkort",
    "klasse B opplæring",
  ],
  openGraph: {
    title: "Klasse B – personbil | Førerkortportalen",
    description: "Alt du trenger å vite om førerkort klasse B – personbil. Standard lappen opptil 3 500 kg med obligatoriske kurs og kjøreopplæring.",
    url: "https://forerkortportalen.no/klasse-b",
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://forerkortportalen.no/logo.png",
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - Klasse B personbil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klasse B – personbil | Førerkortportalen",
    description: "Alt du trenger å vite om førerkort klasse B – personbil.",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/klasse-b",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KlasseBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

