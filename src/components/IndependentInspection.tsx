import Image from "next/image";
import { Shield, CheckCircle2, FileText, AlertCircle, BarChart3, FileCheck2 } from "lucide-react";

export function IndependentInspection() {
  const features = [
    {
      icon: Shield,
      title: "Objectivité",
      description: "Contrôles réalisés en toute neutralité",
    },
    {
      icon: CheckCircle2,
      title: "Indépendance",
      description: "Garantie d'impartialité totale",
    },
    {
      icon: BarChart3,
      title: "Fiabilité des mesures",
      description: "Résultats précis et vérifiables",
    },
    {
      icon: AlertCircle,
      title: "Identification des écarts",
      description: "Détection et signalement immédiats",
    },
    {
      icon: FileText,
      title: "Traçabilité des contrôles",
      description: "Documentation complète et méthodique",
    },
    {
      icon: FileCheck2,
      title: "Rapports détaillés",
      description: "Résultats documentés et certifiés",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/valve-operation.jpg"
                alt="Inspection indépendante d'équipements industriels - Vérification et certification Lions Services Gabon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Inspection indépendante
              </span>
              <div className="gold-accent-line mt-2" />
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Inspection indépendante
            </h2>
            
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Protection de vos cargaisons et fiabilisation de vos opérations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}