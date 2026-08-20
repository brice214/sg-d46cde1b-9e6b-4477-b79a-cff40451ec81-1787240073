"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    requestType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          phone: "",
          email: "",
          requestType: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden">
      {/* Background image positioned on the left with gradient fade to right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 lg:w-1/2">
          <img
            src="/SECTION_CONTACT.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        {/* Gradient overlay fading from transparent (left) to background color (right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/80 to-muted" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Contact
              </span>
              <div className="gold-accent-line mt-2 mx-auto" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-foreground/70">
              Notre équipe est à votre écoute pour répondre à vos besoins.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            <a
              href="tel:+24166928017"
              className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
                <p className="text-foreground/70">+241 66 92 80 17</p>
                <p className="text-foreground/70">+241 06 18 25 14</p>
              </div>
            </a>

            <a
              href="mailto:lionsservicesgabon@gmail.com"
              className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                <p className="text-foreground/70 text-sm break-all">
                  lionsservicesgabon@gmail.com
                </p>
                <p className="text-foreground/70 text-sm break-all">
                  lionsservicesconsulting@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adresse</h3>
                <p className="text-foreground/70">Libreville, Gabon</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  Prénom *
                </label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Société *
              </label>
              <Input
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Téléphone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Adresse e-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="requestType" className="block text-sm font-medium text-foreground mb-2">
                Type de demande *
              </label>
              <Select
                required
                value={formData.requestType}
                onValueChange={(value) => setFormData({ ...formData, requestType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type de demande" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inspection">Inspection & contrôle</SelectItem>
                  <SelectItem value="verification">Vérification qualité & quantité</SelectItem>
                  <SelectItem value="conformity">Conformité & certification</SelectItem>
                  <SelectItem value="training">Formation</SelectItem>
                  <SelectItem value="other">Autre demande</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone ou e-mail.
                </p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}