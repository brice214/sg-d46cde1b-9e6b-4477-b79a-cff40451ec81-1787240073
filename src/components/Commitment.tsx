import { CheckCircle2 } from "lucide-react";

export function Commitment() {
  const values = [
    "Professionnalisme",
    "Indépendance",
    "Intégrité",
    "Fiabilité",
    "Confidentialité",
    "Sécurité",
    "Respect des normes et réglementations applicables",
    "Satisfaction client",
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Nos valeurs
              </span>
              <div className="gold-accent-line mx-auto mt-2" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre engagement
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}