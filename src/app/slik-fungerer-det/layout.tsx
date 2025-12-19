import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slik fungerer det | Førerkortportalen",
  description: "Lær hvordan Førerkortportalen fungerer. Fyll ut et enkelt skjema og få tilbud fra flere godkjente trafikkskoler i ditt område.",
  keywords: [
    "hvordan fungerer førerkortportalen",
    "slik fungerer det",
    "få tilbud trafikkskole",
    "sammenlign trafikkskoler",
  ],
  openGraph: {
    title: "Slik fungerer det | Førerkortportalen",
    description: "Lær hvordan Førerkortportalen fungerer. Fyll ut et enkelt skjema og få tilbud fra flere godkjente trafikkskoler i ditt område.",
    url: "https://forerkortportalen.no/slik-fungerer-det",
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://forerkortportalen.no/logo.png",
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - Slik fungerer det",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slik fungerer det | Førerkortportalen",
    description: "Lær hvordan Førerkortportalen fungerer. Fyll ut et enkelt skjema og få tilbud fra flere trafikkskoler.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://forerkortportalen.no/slik-fungerer-det",
  },
};

export default function SlikFungererDetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

