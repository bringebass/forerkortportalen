import type { Metadata } from "next";
import { articles } from "./page";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles[resolvedParams.id];
  
  if (!article) {
    return {
      title: "Artikkel ikke funnet | Førerkortportalen",
    };
  }

  return {
    title: `${article.title} | Førerkortportalen`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [`https://forerkortportalen.no${article.image}`] : [],
      url: `https://forerkortportalen.no/artikler/${article.id}`,
      type: "article",
      publishedTime: article.date,
    },
    alternates: {
      canonical: `https://forerkortportalen.no/artikler/${article.id}`,
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

