import { Droplets, Ship, Mountain, Beaker, Wheat, Package } from "lucide-react";

export function Domains() {
  const domains = [
    {
      icon: Droplets,
      title: "OIL & GAS",
      description: "Produits pétroliers, hydrocarbures et opérations associées.",
    },
    {
      icon: Ship,
      title: "MARINE & BUNKERING",
      description: "Opérations maritimes, cargaisons et bunkering selon le périmètre des prestations.",
    },
    {
      icon: Mountain,
      title: "MINING",
      description: "Inspection et contrôle des minerais.",
    },
    {
      icon: Beaker,
      title: "CHEMICAL",
      description: "Contrôle et inspection des produits chimiques.",
    },
    {
      icon: Wheat,
      title: "AGRICULTURE",
      description: "Inspection et contrôle des cargaisons agricoles.",
    },
    {
      icon: Package,
      title: "IMPORT & EXPORT",
      description: "Contrôle et conformité des marchandises.",
    },
  ];

  return (
    <section id="domaines" className="section-padding">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Domaines d'intervention
            </span>
            <div className="gold-accent-line mx-auto mt-2" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos domaines d'intervention
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group bg-white p-8 rounded-lg border border-border hover:border-primary hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <domain.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {domain.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}