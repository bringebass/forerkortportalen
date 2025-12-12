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
    description: "Førerkortportalen hjelper deg å finne og sammenligne trafikkskoler i hele Norge.",
    url: "https://forerkortportalen.no/om-oss",
    type: "website",
  },
  alternates: {
    canonical: "https://forerkortportalen.no/om-oss",
  },
};

export default function OmOssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



