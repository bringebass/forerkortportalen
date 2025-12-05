import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss | Førerkortportalen",
  description: "Har du spørsmål om Førerkortportalen? Kontakt oss, så svarer vi så raskt som mulig.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}






