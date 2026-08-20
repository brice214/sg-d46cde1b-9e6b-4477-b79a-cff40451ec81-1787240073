import { Award, Shield, Target, CheckCircle2, Clock, BookOpen } from "lucide-react";

export function WhyChoose() {
  const reasons = [
    {
      icon: Award,
      title: "EXPERTISE",
      description: "Une connaissance pratique des opérations d'inspection et de contrôle.",
    },
    {
      icon: Shield,
      title: "INDÉPENDANCE",
      description: "Des contrôles réalisés avec objectivité.",
    },
    {
      icon: Target,
      title: "PRÉCISION",
      description: "Une attention particulière portée aux mesures et aux résultats.",
    },
    {
      icon: CheckCircle2,
      title: "FIABILITÉ",
      description: "Des informations fiables pour sécuriser les décisions.",
    },
    {
      icon: Clock,
      title: "RÉACTIVITÉ",
      description: "Une capacité à répondre aux besoins opérationnels.",
    },
    {
      icon: BookOpen,
      title: "TRANSMISSION",
      description: "Une expertise également mise au service de la formation des professionnels.",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Nos atouts
            </span>
            <div className="gold-accent-line mx-auto mt-2" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pourquoi choisir Lions Services ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-lg border-l-4 border-l-gold hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}