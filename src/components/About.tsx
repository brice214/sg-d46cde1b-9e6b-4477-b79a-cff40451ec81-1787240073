import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const values = [
    "INDÉPENDANCE",
    "FIABILITÉ",
    "PRÉCISION",
    "RÉACTIVITÉ",
    "EXPERTISE",
  ];

  return (
    <section id="apropos" className="section-padding bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                À propos
              </span>
              <div className="gold-accent-line mt-2" />
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Une expertise au service de vos opérations
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-foreground/80 leading-relaxed">
                Lions Services Gabon accompagne les entreprises dans leurs besoins d'inspection, de contrôle, de vérification et de certification. Notre approche s'appuie sur une expertise technique, une indépendance dans les contrôles et une connaissance des opérations industrielles.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nous intervenons dans les secteurs Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture et Import/Export pour sécuriser vos cargaisons, fiabiliser vos mesures et protéger vos intérêts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/images/valve-operation.jpg"
              alt="Opérations d'inspection"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}