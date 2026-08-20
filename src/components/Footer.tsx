import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  const services = [
    { name: "Inspection & Contrôle", href: "#services" },
    { name: "Vérification Qualité & Quantité", href: "#services" },
    { name: "Conformité & Certification", href: "#services" },
    { name: "Formation", href: "#formation" },
  ];

  const domains = [
    { name: "Oil & Gas", href: "#domaines" },
    { name: "Marine & Bunkering", href: "#domaines" },
    { name: "Mining", href: "#domaines" },
    { name: "Chemical", href: "#domaines" },
    { name: "Agriculture", href: "#domaines" },
    { name: "Import & Export", href: "#domaines" },
  ];

  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Domaines", href: "#domaines" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Lions Services Gabon"
              width={180}
              height={60}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              Inspection, contrôle, vérification et formation pour sécuriser vos opérations industrielles.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Domaines</h3>
            <ul className="space-y-2">
              {domains.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+24166928017"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +241 66 92 80 17
                </a>
              </li>
              <li>
                <a
                  href="tel:+24106182514"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +241 06 18 25 14
                </a>
              </li>
              <li>
                <a
                  href="mailto:lionsservicesgabon@gmail.com"
                  className="flex items-start gap-2 text-white/70 hover:text-white transition-colors text-sm break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  lionsservicesgabon@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 LIONS SERVICES GABON. Tous droits réservés.
            </p>
            <nav className="flex gap-6">
              {quickLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}