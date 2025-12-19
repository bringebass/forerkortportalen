import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teoriprøve Klasse B - Gratis Treningsprøve 2025 | Førerkortportalen",
  description: "Test deg selv med vår gratis teoriprøve for klasse B. 45 spørsmål, 90 minutter tid. Minst 38 riktige svar for å bestå. Perfekt forberedelse til den offisielle teoriprøven hos Statens vegvesen. Inkluderer tips, veiledning og forklaringer.",
  keywords: "teoriprøve klasse B, teoriprøve førerkort, gratis teoriprøve, treningsprøve klasse B, statens vegvesen teoriprøve, forberedelse teoriprøve, teori test førerkort",
  openGraph: {
    title: "Teoriprøve Klasse B - Gratis Treningsprøve 2025 | Førerkortportalen",
    description: "Test deg selv med vår gratis teoriprøve for klasse B. 45 spørsmål, 90 minutter tid. Perfekt forberedelse til den offisielle teoriprøven hos Statens vegvesen.",
    type: "website",
  },
};

export default function TeoriproveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
