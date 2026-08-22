import type { ReactElement } from "react";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOElements({
  title = "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle",
  description = "Expert en inspection indépendante, contrôle qualité et quantité, vérification, certification et formation professionnelle pour Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture au Gabon.",
  image = "/og-image.png",
  url,
}: SEOProps): ReactElement {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="inspection Gabon, contrôle qualité Gabon, inspection hydrocarbures, bunkering inspection, certification Gabon, formation inspection, Oil & Gas Gabon, contrôle indépendant" />
      <meta name="author" content="Lions Services Gabon" />
      <meta name="geo.region" content="GA" />
      <meta name="geo.placename" content="Libreville" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export function SEO(props: SEOProps): ReactElement {
  return (
    <>
      {/* Flattened structure - all tags as direct children */}
      <title>{props.title || "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle"}</title>
      <meta name="description" content={props.description || "Expert en inspection indépendante, contrôle qualité et quantité, vérification, certification et formation professionnelle pour Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture au Gabon."} />
      <meta name="keywords" content="inspection Gabon, contrôle qualité Gabon, inspection hydrocarbures, bunkering inspection, certification Gabon, formation inspection, Oil & Gas Gabon, contrôle indépendant" />
      <meta name="author" content="Lions Services Gabon" />
      <meta name="geo.region" content="GA" />
      <meta name="geo.placename" content="Libreville" />
      
      <meta property="og:title" content={props.title || "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle"} />
      <meta property="og:description" content={props.description || "Expert en inspection indépendante, contrôle qualité et quantité, vérification, certification et formation professionnelle pour Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture au Gabon."} />
      <meta property="og:type" content="website" />
      {props.url && <meta property="og:url" content={props.url} />}
      <meta property="og:image" content={props.image || "/og-image.png"} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title || "Lions Services Gabon | Inspection, Contrôle, Certification & Formation Industrielle"} />
      <meta name="twitter:description" content={props.description || "Expert en inspection indépendante, contrôle qualité et quantité, vérification, certification et formation professionnelle pour Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture au Gabon."} />
      <meta name="twitter:image" content={props.image || "/og-image.png"} />
    </>
  );
}