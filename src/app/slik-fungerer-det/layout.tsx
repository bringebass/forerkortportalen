import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slik fungerer det | Førerkortportalen",
  description: "Lær hvordan Førerkortportalen fungerer. Fyll ut et enkelt skjema og få tilbud fra flere kvalitetssikrede trafikkskoler i ditt område.",
  keywords: [
    "hvordan fungerer førerkortportalen",
    "slik fungerer det",
    "få tilbud trafikkskole",
    "sammenlign trafikkskoler",
  ],
  openGraph: {
    title: "Slik fungerer det | Førerkortportalen",
    description: "Lær hvordan Førerkortportalen fungerer. Fyll ut et enkelt skjema og få tilbud fra flere trafikkskoler.",
    url: "https://forerkortportalen.no/slik-fungerer-det",
    type: "website",
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
