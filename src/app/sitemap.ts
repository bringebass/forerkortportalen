import { MetadataRoute } from 'next'

const siteUrl = 'https://forerkortportalen.no'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/artikler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/om-oss`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/oslo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Article pages
  const articlePages = [
    {
      id: 1,
      title: 'Billigste måte å ta førerkort på – myter vs. fakta (2025-guide)',
      date: '2025-01-20',
    },
    {
      id: 2,
      title: 'Alt du trenger å vite om førerkort klasse B',
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'Intensivkurs vs. vanlig førerkortkurs',
      date: '2024-01-05',
    },
    {
      id: 4,
      title: 'Kostnader ved å ta førerkort i 2024',
      date: '2024-01-01',
    },
    {
      id: 5,
      title: 'Forbered deg til førerprøven',
      date: '2023-12-28',
    },
    {
      id: 6,
      title: 'Hva skjer etter at du har bestått prøven?',
      date: '2023-12-20',
    },
  ].map((article) => ({
    url: `${siteUrl}/artikler/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}

