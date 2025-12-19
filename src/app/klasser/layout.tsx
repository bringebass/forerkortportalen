import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Førerkortklasser | Førerkortportalen",
  description: "Oversikt over de vanligste førerkortklassene: Klasse B (personbil), MC-klasser (A, A2, A1) og tilhenger (BE/B96). Lær mer om hva hver klasse innebærer.",
  keywords: [
    "førerkortklasser",
    "klasse B",
    "MC førerkort",
    "tilhenger førerkort",
    "BE B96",
  ],
  openGraph: {
    title: "Førerkortklasser | Førerkortportalen",
    description: "Oversikt over de vanligste førerkortklassene og hva de innebærer.",
    url: "https://forerkortportalen.no/klasser",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/klasser",
  },
};

export default function KlasserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

