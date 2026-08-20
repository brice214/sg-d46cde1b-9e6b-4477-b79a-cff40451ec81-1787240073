import Head from "next/head";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOElements({
  title = "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle",
  description = "Lions Services Gabon : expert en inspection indépendante, contrôle qualité & quantité, certification et formation professionnelle. Secteurs Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture, Import/Export.",
  image = "/og-image.png",
  url = "https://lionssg.net",
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lions Services Gabon" />
      <meta property="og:locale" content="fr_GA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="GA" />
      <meta name="geo.placename" content="Libreville" />
      <link rel="canonical" href={url} />
    </>
  );
}

export function SEO({
  title = "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle",
  description = "Lions Services Gabon : expert en inspection indépendante, contrôle qualité & quantité, certification et formation professionnelle. Secteurs Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture, Import/Export.",
  image = "/og-image.png",
  url = "https://lionssg.net",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Lions Services Gabon" />
      <meta property="og:locale" content="fr_GA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="GA" />
      <meta name="geo.placename" content="Libreville" />
      <link rel="canonical" href={url} />
    </Head>
  );
}