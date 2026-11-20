import { business as b } from '../data/businessInfo.js';
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: b.name,
    legalName: b.legalName,
    telephone: b.phoneTel,
    address: { '@type': 'PostalAddress', streetAddress: b.street, addressLocality: b.city, addressRegion: b.region, postalCode: b.postalCode, addressCountry: b.country },
    openingHoursSpecification: b.hours.filter((h) => h.days).map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    ...(b.siteUrl && { url: b.siteUrl, image: `${b.siteUrl}/images/storefront.webp`, logo: `${b.siteUrl}/images/logo.webp` }),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
