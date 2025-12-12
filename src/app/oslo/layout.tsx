import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finn trafikkskole i Oslo | Førerkortportalen",
  description: "Finn riktig trafikkskole for deg i Oslo. Få tilbud fra flere kvalitetssikrede trafikkskoler i Oslo og sammenligne priser, pakker og tilgjengelighet.",
  keywords: [
    "trafikkskole Oslo",
    "førerkort Oslo",
    "kjøreskole Oslo",
    "føreropplæring Oslo",
    "intensivkurs Oslo",
  ],
  openGraph: {
    title: "Finn trafikkskole i Oslo | Førerkortportalen",
    description: "Finn riktig trafikkskole for deg i Oslo. Få tilbud fra flere kvalitetssikrede trafikkskoler.",
    url: "https://forerkortportalen.no/oslo",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/oslo",
  },
};

export default function OsloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



