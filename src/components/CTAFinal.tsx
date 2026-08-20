import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAFinal() {
  return (
    <section className="section-padding bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            BESOIN D'UNE INSPECTION, D'UN CONTRÔLE OU D'UNE FORMATION ?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Notre équipe est à votre disposition pour étudier votre besoin.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold/90 text-foreground font-semibold text-lg group"
          >
            <a href="#contact" className="flex items-center gap-2">
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}