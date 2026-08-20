import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PositioningBanner } from "@/components/PositioningBanner";
import { About } from "@/components/About";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <SEO
        title="Lions Services Gabon | Inspection, Contrôle, Certification & Formation"
        description="Lions Services Gabon accompagne les entreprises en inspection, contrôle qualité, conformité, certification et formation professionnelle."
      />
      <Header />
      <main>
        <Hero />
        <PositioningBanner />
        <About />
        <Services />
      </main>
    </>
  );
}