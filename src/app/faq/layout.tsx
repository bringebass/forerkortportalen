import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ofte stilte spørsmål | Førerkortportalen",
  description: "Alt du lurer på om førerkortportalen og vår tjeneste. Få svar på vanlige spørsmål om trafikkskoler, førerkortklasser og hvordan tjenesten fungerer.",
  keywords: [
    "ofte stilte spørsmål",
    "faq førerkort",
    "spørsmål trafikkskole",
    "førerkort hjelp",
  ],
  openGraph: {
    title: "Ofte stilte spørsmål | Førerkortportalen",
    description: "Alt du lurer på om førerkortportalen og vår tjeneste.",
    url: "https://forerkortportalen.no/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
