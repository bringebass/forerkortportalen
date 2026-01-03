import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trafikkskoler i Oslo | Førerkortportalen",
  description: "Finn riktig trafikkskole for deg i Oslo. Fyll ut skjemaet og motta tilbud fra flere godkjente trafikkskoler i Oslo.",
  keywords: [
    "trafikkskole oslo",
    "førerkort oslo",
    "trafikkskoler oslo",
  ],
  openGraph: {
    title: "Trafikkskoler i Oslo | Førerkortportalen",
    description: "Finn riktig trafikkskole for deg i Oslo.",
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
