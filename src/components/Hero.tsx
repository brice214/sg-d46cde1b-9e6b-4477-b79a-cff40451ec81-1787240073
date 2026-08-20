import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-refinery.jpg"
        alt="Inspection industrielle"
        fill
        className="object-cover"
        priority
        quality={95}
      />
      
      <div className="absolute inset-0 bg-navy/70" />
      
      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
              Lions Services Gabon
            </span>
            <div className="w-16 h-0.5 bg-gold mt-2" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            CE QUE VOUS NE MESUREZ PAS, VOUS COÛTE DÉJÀ.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Inspection • Contrôle • Vérification • Certification • Formation
          </p>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
            Des services indépendants de contrôle, d'inspection, de vérification et de formation pour sécuriser vos opérations, vos cargaisons et vos activités.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-base group"
            >
              <a href="#services" className="flex items-center gap-2">
                Découvrir nos services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-base"
            >
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}