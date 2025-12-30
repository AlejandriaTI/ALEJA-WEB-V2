import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Privacidad - Alejandría Consultora",
  description: "Conoce las políticas de privacidad de Alejandría Consultora. Información sobre recopilación, uso y protección de datos personales y uso de cookies.",
};

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  Mail,
  Cookie,
} from "lucide-react";

export default function PoliticasPrivacidadPage() {
  const sections = [
    {
      id: "informacion",
      title: "1. Información que Recopilamos",
      icon: Eye,
    },
    { id: "uso", title: "2. Uso de la Información", icon: FileText },
    { id: "proteccion", title: "3. Protección de Datos", icon: Lock },
    { id: "compartir", title: "4. Compartir Información", icon: Server },
    { id: "derechos", title: "5. Derechos del Usuario", icon: UserCheck },
    { id: "cookies", title: "6. Uso de Cookies", icon: Cookie },
    { id: "contacto", title: "7. Contacto", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Ajuste para el header sticky
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary text-balance">
                Políticas de Privacidad
              </h1>
              <p className="text-muted-foreground mt-1">
                Última actualización: Febrero 2025
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 lg:top-[220px]">
              <CardHeader>
                <CardTitle className="text-lg">Navegación</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px]">
                  <nav className="space-y-1 p-4">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className="w-full flex items-center gap-3 p-3 text-left rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                        >
                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                          <span className="text-sm font-medium">
                            {section.title}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed text-pretty">
                  En{" "}
                  <strong className="text-primary">
                    Alejandría Consultores
                  </strong>
                  , valoramos su privacidad y estamos comprometidos con la
                  protección de sus datos personales. Esta política describe
                  cómo recopilamos, utilizamos y protegemos su información.
                </p>
              </CardContent>
            </Card>

            <section id="informacion" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Eye className="h-5 w-5" />
                    1. Información que Recopilamos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Podemos recopilar información personal como su nombre,
                    dirección de correo electrónico, número de teléfono y otra
                    información que usted nos proporcione voluntariamente al
                    registrarse o utilizar nuestros servicios.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="uso" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <FileText className="h-5 w-5" />
                    2. Uso de la Información
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Utilizamos su información para proporcionar y mejorar
                    nuestros servicios, comunicarnos con usted, y personalizar
                    su experiencia en nuestra plataforma.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section id="contacto" className="scroll-mt-40">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    <Mail className="h-5 w-5" />
                    7. Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">
                    Si tiene preguntas sobre esta política de privacidad,
                    contáctenos en{" "}
                    <strong>correo@alejandraconsultores.com</strong>.
                  </p>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
