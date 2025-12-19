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
    description: "Alt du trenger å vite om førerkort klasse B – personbil.",
    url: "https://forerkortportalen.no/klasse-b",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/klasse-b",
  },
};

export default function KlasseBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

