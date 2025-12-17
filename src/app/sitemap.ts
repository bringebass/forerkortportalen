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
    {
      id: 7,
      title: 'Er intensivkurs verdt det?',
      date: '2025-01-25',
    },
    {
      id: 8,
      title: 'Slik kan du spare penger på førerkortet (2025-guide)',
      date: '2025-01-30',
    },
    {
      id: 9,
      title: 'Obligatoriske kurs for førerkort klasse B (komplett guide 2025)',
      date: '2025-02-02',
    },
    {
      id: 10,
      title: 'Slik fungerer førerkortprosessen – steg for steg (2025-guide)',
      date: '2025-02-05',
    },
    {
      id: 11,
      title: 'Hvordan velge riktig kjøreskole (sjekkliste)',
      date: '2025-02-07',
    },
    {
      id: 12,
      title: 'Hvordan bestå oppkjøringen på første forsøk (den komplette guiden)',
      date: '2025-02-10',
    },
    {
      id: 13,
      title: 'Hvor mange kjøretimer trenger man egentlig? (realistisk guide 2025)',
      date: '2025-02-12',
    },
    {
      id: 14,
      title: 'Hvor lang tid tar det å ta førerkort? (realistisk guide 2025)',
      date: '2025-02-15',
    },
    {
      id: 15,
      title: 'Forskjellen på trafikkskole og privat øvelseskjøring (og hvorfor du trenger begge)',
      date: '2025-02-17',
    },
    {
      id: 16,
      title: 'Fastpris vs. betaling per kjøretime – hva lønner seg?',
      date: '2025-02-20',
    },
  ].map((article) => ({
    url: `${siteUrl}/artikler/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}

