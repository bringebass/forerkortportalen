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
    description: "Alt du trenger å vite om førerkort for tilhenger – klasse BE og B96. Gir mulighet til å trekke tyngre hengere med fokus på last, kobling og sikker rygging.",
    url: "https://forerkortportalen.no/tilhenger",
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://forerkortportalen.no/logo.png",
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - Tilhenger førerkort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klasse BE/B96 – tilhenger | Førerkortportalen",
    description: "Alt du trenger å vite om førerkort for tilhenger – klasse BE og B96.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://forerkortportalen.no/tilhenger",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TilhengerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

