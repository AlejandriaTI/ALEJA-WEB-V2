"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+51 989 575 820",
      href: "tel:+51989575820",
    },
    {
      icon: Mail,
      label: "Correo",
      value: "clientes@alejandriaconsultora.com",
      href: "mailto:clientes@alejandriaconsultora.com",
    },
    {
      icon: MapPin,
      label: "Lima",
      value: "C. Bolognesi 229, Miraflores - Oficina 702",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Chiclayo",
      value: "C. Torres Paz Nº 280, Oficina 206",
      href: "#",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0CB2D5 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Contacto
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ponte en contacto con nosotros
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos disponibles para resolver tus dudas y acompañarte en tu
            camino académico.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;

            return (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="p-6 space-y-4 h-full flex flex-col items-center text-center">
                  <div className="bg-primary/10 rounded-lg p-3 w-fit">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <p className="text-base font-semibold text-muted-foreground mb-1">
                      {item.label}
                    </p>

                    <p className="font-semibold text-foreground text-lg leading-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96 bg-card border border-border">
          <iframe
            title="Mapa de la ubicación de Alejandría Consultores en Miraflores"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.9346312717916!2d-77.03602369539553!3d-12.120370869749902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c822dc87dc0b%3A0xbc6adb55c42fa1e8!2sOficina%20702%2C%20Bolognesi%20229%2C%20Miraflores%20LIMA%2018!5e0!3m2!1ses!2spe!4v1745447955154"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
