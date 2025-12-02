import Script from "next/script";
import { faq } from "./FAQSection";

const siteUrl = "https://forerkortportalen.no";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Førerkortportalen",
  url: siteUrl,
  description:
    "Førerkortportalen hjelper deg å sammenligne trafikkskoler og få tilbud på føreropplæring i Norge.",
  potentialAction: {
    "@type": "ContactAction",
    target: `${siteUrl}#skjema`,
    name: "Send inn forespørsel til trafikkskoler",
  },
};

export default function StructuredData() {
  return (
    <>
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(websiteJsonLd)}
      </Script>
      <Script id="faq-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </>
  );
}


