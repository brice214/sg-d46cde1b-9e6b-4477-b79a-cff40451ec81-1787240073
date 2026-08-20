"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "À propos", href: "#apropos" },
    { name: "Services", href: "#services" },
    { name: "Domaines", href: "#domaines" },
    { name: "Formation", href: "#formation" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy shadow-lg"
          : "bg-navy/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="#accueil" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="Lions Services Gabon"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-foreground font-semibold"
            >
              <a href="#contact">Nous contacter</a>
            </Button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-foreground font-semibold w-full mt-2"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Nous contacter
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}