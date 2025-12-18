import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikler om førerkort og trafikkskoler | Førerkortportalen",
  description: "Nyttige guider om førerkort, trafikkskoler, føreropplæring, trafikkregler og erfaringer fra kjøretimer. Lær alt du trenger å vite om å ta førerkort i Norge.",
  keywords: [
    "førerkort artikler",
    "trafikkskole guider",
    "føreropplæring",
    "førerkort klasse B",
    "intensivkurs",
    "trafikkregler",
    "kjøretimer",
    "førerprøve",
  ],
  openGraph: {
    title: "Artikler om førerkort og trafikkskoler | Førerkortportalen",
    description: "Nyttige guider om førerkort, trafikkskoler, føreropplæring, trafikkregler og erfaringer fra kjøretimer.",
    url: "https://forerkortportalen.no/artikler",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/artikler",
  },
};

export default function ArtiklerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}




