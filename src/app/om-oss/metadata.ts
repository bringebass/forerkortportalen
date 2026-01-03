import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Førerkortportalen",
  description: "Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler i hele Norge. Lær mer om vår misjon og verdier.",
  keywords: [
    "om førerkortportalen",
    "hvem er vi",
    "trafikkskole sammenligning",
    "førerkort hjelp",
  ],
  openGraph: {
    title: "Om oss | Førerkortportalen",
    description: "Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler i hele Norge. Lær mer om vår misjon og verdier.",
    url: "https://forerkortportalen.no/om-oss",
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://forerkortportalen.no/logo.png",
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - Om oss",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om oss | Førerkortportalen",
    description: "Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler i hele Norge.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://forerkortportalen.no/om-oss",
  },
};






