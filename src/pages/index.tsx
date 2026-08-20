import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PositioningBanner } from "@/components/PositioningBanner";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Philosophy } from "@/components/Philosophy";
import { IndependentInspection } from "@/components/IndependentInspection";
import { Training } from "@/components/Training";
import { Domains } from "@/components/Domains";
import { WhyChoose } from "@/components/WhyChoose";
import { Commitment } from "@/components/Commitment";
import { CTAFinal } from "@/components/CTAFinal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
        <Philosophy />
        <IndependentInspection />
        <Training />
        <Domains />
        <WhyChoose />
        <Commitment />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}