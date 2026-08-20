import { Html, Head, Main, NextScript } from "next/document";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lions Services Gabon",
    "alternateName": "LIONS SERVICES GABON",
    "url": "https://lionssg.net",
    "logo": "https://lionssg.net/images/logo.jpg",
    "description": "Expert en inspection indépendante, contrôle qualité et quantité, certification et formation professionnelle pour les secteurs Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture et Import/Export au Gabon.",
    "email": "lionsservicesgabon@lionssg.net",
    "telephone": ["+241 66 92 80 17", "+241 06 18 25 14"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Libreville",
      "addressCountry": "GA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Gabon"
    },
    "serviceType": [
      "Inspection industrielle",
      "Contrôle qualité et quantité",
      "Vérification indépendante",
      "Certification",
      "Formation professionnelle"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lions Services Gabon",
    "image": "https://lionssg.net/images/logo.jpg",
    "url": "https://lionssg.net",
    "telephone": "+241 66 92 80 17",
    "email": "lionsservicesgabon@lionssg.net",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Libreville",
      "addressCountry": "GA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.4162,
      "longitude": 9.4673
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": []
  };

  return (
    <Html lang="fr">
      <Head>
        <SEOElements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
