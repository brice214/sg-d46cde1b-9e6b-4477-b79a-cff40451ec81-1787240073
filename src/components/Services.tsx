import Image from "next/image";
import { ClipboardCheck, Scale, FileCheck, GraduationCap } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Services
            </span>
            <div className="gold-accent-line mx-auto mt-2" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos services
          </h2>
          <p className="text-xl text-foreground/70">
            Des contrôles précis pour des décisions fiables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <ClipboardCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Inspection & Contrôle
            </h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Produits & marchandises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Pétrole</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Minerais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Chimie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Cargaisons agricoles</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Conformité & Certification
            </h3>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Import / Export</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Normes et réglementations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Vérification de conformité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Sécurisation de la chaîne d'approvisionnement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Documentation et contrôle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="text-white/90 text-sm font-semibold tracking-[0.2em] uppercase">
                  Service Premium
                </span>
                <div className="gold-accent-line mt-2" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                Vérification Qualité & Quantité
              </h3>
              <p className="text-white/90 text-lg mb-6 italic font-medium">
                « Une mesure fiable permet une décision fiable. »
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Vérification des quantités</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Contrôle qualité</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Mesures et échantillonnage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Contrôles indépendants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Vérification des résultats</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Identification des écarts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/90">Protection des intérêts du client</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-auto">
              <img
                src="/images/bunkering.jpg"
                alt="Opérations de bunkering maritime - Contrôle qualité et quantité de carburant Lions Services Gabon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}