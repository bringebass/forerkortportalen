import { Metadata } from "next";

const siteUrl = "https://forerkortportalen.no";

export const metadata: Metadata = {
  title: "Teoriprøve Klasse B - Gratis Treningsprøve 2025 | Førerkortportalen",
  description: "Test deg selv med vår gratis teoriprøve for klasse B. 45 spørsmål, 90 minutter tid. Minst 38 riktige svar for å bestå. Perfekt forberedelse til den offisielle teoriprøven hos Statens vegvesen. Inkluderer tips, veiledning og forklaringer.",
  keywords: "teoriprøve klasse B, teoriprøve førerkort, gratis teoriprøve, treningsprøve klasse B, statens vegvesen teoriprøve, forberedelse teoriprøve, teori test førerkort",
  alternates: {
    canonical: `${siteUrl}/teoriprove`,
  },
  openGraph: {
    title: "Teoriprøve Klasse B - Gratis Treningsprøve 2025 | Førerkortportalen",
    description: "Test deg selv med vår gratis teoriprøve for klasse B. 45 spørsmål, 90 minutter tid. Perfekt forberedelse til den offisielle teoriprøven hos Statens vegvesen.",
    url: `${siteUrl}/teoriprove`,
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Førerkortportalen - Teoriprøve Klasse B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teoriprøve Klasse B - Gratis Treningsprøve 2025",
    description: "Test deg selv med vår gratis teoriprøve for klasse B. 45 spørsmål, 90 minutter tid.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TeoriproveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
