import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://forerkortportalen.no";
const title = "Førerkortportalen | Få tilbud fra trafikkskoler i hele Norge";
const description =
  "Førerkortportalen lar deg sammenligne trafikkskoler, finne intensivkurs og motta uforpliktende tilbud på føreropplæring i alle klasser.";
const keywords = [
  "førerkort",
  "trafikkskole",
  "førerkort klasse B",
  "intensivkurs førerkort",
  "trafikalt grunnkurs",
  "tilbud trafikkskole",
  "førerkortportalen",
  "kjøreskole Norge",
];

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  keywords,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Førerkortportalen",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@forerkortportalen",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="bg-slate-50">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
