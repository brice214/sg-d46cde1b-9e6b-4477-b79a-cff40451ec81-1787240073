import Image from "next/image";
import { GraduationCap, Users, BookOpen, Award, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Training() {
  const topics = [
    "Formation des inspecteurs",
    "Techniques d'inspection",
    "Opérations de contrôle",
    "Méthodes de mesure et de vérification",
    "Bonnes pratiques opérationnelles",
    "Sensibilisation aux exigences HSE",
    "Formation adaptée aux besoins des entreprises",
  ];

  const audience = [
    {
      icon: Users,
      title: "Inspecteurs débutants",
    },
    {
      icon: TrendingUp,
      title: "Inspecteurs en perfectionnement",
    },
    {
      icon: Target,
      title: "Professionnels Oil & Gas",
    },
    {
      icon: Award,
      title: "Personnel opérationnel",
    },
  ];

  return (
    <section id="formation" className="section-padding bg-navy text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-10 h-10 text-gold" />
              <span className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">
                Formation professionnelle
              </span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Formation & Développement des compétences
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Former les professionnels aux exigences du terrain.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                Programme de formation
              </h3>
              <ul className="space-y-2">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="font-heading text-xl font-bold mb-4 text-white">
                Public cible
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {audience.map((item) => (
                  <div key={item.title} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                    <item.icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-foreground font-semibold"
            >
              <a href="#contact">Demander des informations sur les formations</a>
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/training.jpg"
                alt="Formation professionnelle en inspection et contrôle industriel - Programme de développement des compétences Lions Services Gabon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}