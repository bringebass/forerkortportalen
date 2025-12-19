import Script from "next/script";

const siteUrl = "https://forerkortportalen.no";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Førerkortportalen",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "description": "Førerkortportalen hjelper deg å sammenligne trafikkskoler og få tilbud på føreropplæring i Norge. Gratis og uforpliktende tjeneste.",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Norwegian", "Norsk"]
  },
  "areaServed": {
    "@type": "Country",
    "name": "Norway"
  }
};

export default function OrganizationSchema() {
  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
