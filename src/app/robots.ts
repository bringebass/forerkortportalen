import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/takk'],
      },
    ],
    sitemap: 'https://forerkortportalen.no/sitemap.xml',
  };
}
