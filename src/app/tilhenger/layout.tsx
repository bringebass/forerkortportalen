import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klasse BE/B96 – tilhenger | Førerkortportalen",
  description: "Alt du trenger å vite om førerkort for tilhenger – klasse BE og B96. Gir mulighet til å trekke tyngre hengere med fokus på last, kobling og sikker rygging.",
  keywords: [
    "tilhenger førerkort",
    "klasse BE",
    "B96",
    "henger førerkort",
  ],
  openGraph: {
    title: "Klasse BE/B96 – tilhenger | Førerkortportalen",
    description: "Alt du trenger å vite om førerkort for tilhenger – klasse BE og B96.",
    url: "https://forerkortportalen.no/tilhenger",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/tilhenger",
  },
};

export default function TilhengerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
